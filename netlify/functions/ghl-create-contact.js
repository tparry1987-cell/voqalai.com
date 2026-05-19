// Retell custom function: create_contact
// Upserts a contact into the GHL CRM with whatever the agent has captured.
// Use after a call where no booking happened but you've still got their details.
//
// Env vars required:
//   GHL_LOCATION_API_KEY  Private Integration Token (pit-...)
//   GHL_LOCATION_ID       Sub-account location ID

const GHL_BASE = "https://services.leadconnectorhq.com";

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const token = process.env.GHL_LOCATION_API_KEY;
  const locationId = process.env.GHL_LOCATION_ID;
  if (!token || !locationId) {
    return jsonResp(500, { error: "Missing GHL env vars" });
  }

  let args = {};
  let callMeta = {};
  try {
    const body = JSON.parse(event.body || "{}");
    args = body.args || {};
    callMeta = body.call || {};
  } catch (e) {
    return jsonResp(400, { error: "Invalid JSON body" });
  }

  const name = (args.name || "").trim();
  const email = (args.email || "").trim();
  const phone = (args.phone || callMeta.from_number || "").trim();
  const company = (args.company || "").trim();
  const website = (args.website || "").trim();
  const notes = args.notes || "";
  const extraTags = Array.isArray(args.tags) ? args.tags : [];

  if (!name && !email && !phone) {
    return jsonResp(200, {
      ok: false,
      error: "Need at least one of: name, email, phone",
    });
  }

  const [firstName, ...rest] = name.split(/\s+/);
  const lastName = rest.join(" ") || "";

  try {
    const resp = await fetch(`${GHL_BASE}/contacts/upsert`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        Version: "2021-07-28",
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        locationId,
        firstName: firstName || undefined,
        lastName: lastName || undefined,
        email: email || undefined,
        phone: phone || undefined,
        companyName: company || undefined,
        website: website || undefined,
        source: "Voqal AI inbound call",
        tags: ["voqal-call-captured", ...extraTags],
      }),
    });

    const data = await resp.json();
    if (!resp.ok) {
      return jsonResp(200, {
        ok: false,
        error: `Upsert failed: ${data.message || JSON.stringify(data)}`,
      });
    }

    const contactId = data.contact?.id || data.id;
    const wasNew = data.new === true || data.contact?.new === true;

    return jsonResp(200, {
      ok: true,
      contact_id: contactId,
      created: wasNew,
      message: wasNew ? `Created new contact ${name || email || phone}` : `Updated existing contact ${name || email || phone}`,
      notes_captured: notes ? true : false,
    });
  } catch (err) {
    return jsonResp(200, { ok: false, error: `Upsert error: ${err.message}` });
  }
};

function jsonResp(statusCode, body) {
  return {
    statusCode,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };
}
