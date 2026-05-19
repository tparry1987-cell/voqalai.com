// Retell custom function: lookup_contact
// Searches GHL contacts by phone or email. Returns whatever the CRM has on file.
// Used by the agent to recognise repeat callers and personalise the conversation.
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

  const phone = (args.phone || callMeta.from_number || "").trim();
  const email = (args.email || "").trim();
  const query = phone || email;

  if (!query) {
    return jsonResp(200, {
      ok: false,
      error: "Need either phone or email to search",
    });
  }

  try {
    const url = `${GHL_BASE}/contacts/?locationId=${encodeURIComponent(locationId)}&query=${encodeURIComponent(query)}&limit=5`;
    const resp = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        Version: "2021-07-28",
        Accept: "application/json",
      },
    });
    const data = await resp.json();
    if (!resp.ok) {
      return jsonResp(200, {
        ok: false,
        error: `GHL API ${resp.status}: ${data.message || JSON.stringify(data)}`,
      });
    }

    const contacts = data.contacts || [];
    if (contacts.length === 0) {
      return jsonResp(200, { ok: true, found: false, message: "No contact found" });
    }

    const c = contacts[0];
    return jsonResp(200, {
      ok: true,
      found: true,
      contact_id: c.id,
      first_name: c.firstName || null,
      last_name: c.lastName || null,
      name: c.contactName || `${c.firstName || ""} ${c.lastName || ""}`.trim() || null,
      email: c.email || null,
      phone: c.phone || null,
      company: c.companyName || null,
      tags: c.tags || [],
      date_added: c.dateAdded || null,
      last_activity: c.lastActivity || null,
    });
  } catch (err) {
    return jsonResp(200, { ok: false, error: `Fetch failed: ${err.message}` });
  }
};

function jsonResp(statusCode, body) {
  return {
    statusCode,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };
}
