// Retell post-call webhook for the Voqal-GHL-Demo agent.
// Fires once Retell finishes call analysis. We read the extracted custom
// analysis fields (caller_name, business_name, email, etc.) and upsert
// the caller into GHL — no caller-facing latency, runs after the call ended.
//
// Only the demo / general-enquiry paths go through here. Booking calls
// upsert in-line via book_appointment and are skipped here to avoid
// double-writes.
//
// Env vars required: GHL_LOCATION_API_KEY, GHL_LOCATION_ID

const GHL_BASE = "https://services.leadconnectorhq.com";

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  let payload = {};
  try {
    payload = JSON.parse(event.body || "{}");
  } catch (e) {
    return jsonResp(200, { ok: false, error: "Invalid JSON" });
  }

  const eventType = payload.event;
  // Retell fires call_started / call_ended / call_analyzed.
  // We only care about call_analyzed — that's when custom_analysis_data is filled.
  if (eventType !== "call_analyzed") {
    return jsonResp(200, { ok: true, skipped: `event=${eventType}` });
  }

  const call = payload.call || {};
  const analysis = call.call_analysis || {};
  const custom = analysis.custom_analysis_data || {};

  const requestType = (custom.request_type || "").toLowerCase();

  // Bookings already upserted the contact during the call via book_appointment.
  // Don't touch them here — would be a no-op upsert at best, double-tag at worst.
  if (requestType === "call_booking") {
    return jsonResp(200, { ok: true, skipped: "call_booking handled in-call" });
  }

  const name = (custom.caller_name || "").trim();
  const email = (custom.email || "").trim();
  const phone = (custom.phone || call.from_number || "").trim();
  const company = (custom.business_name || "").trim();
  const website = (custom.website || "").trim();
  const summary = analysis.call_summary || "";

  // Need at least one identifier to create a record.
  if (!name && !email && !phone) {
    return jsonResp(200, { ok: true, skipped: "no identifying info captured" });
  }

  const token = process.env.GHL_LOCATION_API_KEY;
  const locationId = process.env.GHL_LOCATION_ID;
  if (!token || !locationId) {
    return jsonResp(500, { error: "Missing GHL env vars" });
  }

  // Tag based on what the call was about.
  const tags = ["voqal-call-captured"];
  if (requestType === "demo_request") tags.push("demo-requested");
  else if (requestType === "callback_request") tags.push("callback-needed");
  else if (requestType === "general_enquiry") tags.push("general-enquiry");

  const [firstName, ...rest] = name.split(/\s+/);
  const lastName = rest.join(" ") || "";

  const ghlHeaders = {
    Authorization: `Bearer ${token}`,
    Version: "2021-07-28",
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  // Step 1: upsert the contact WITHOUT tags. Sending a tags array on upsert
  // replaces all existing tags on the contact, which clobbers in-call tags
  // like voqal-call-booked set by book_appointment earlier in the same call.
  let contactId;
  let wasNew = false;
  try {
    const resp = await fetch(`${GHL_BASE}/contacts/upsert`, {
      method: "POST",
      headers: ghlHeaders,
      body: JSON.stringify({
        locationId,
        firstName: firstName || undefined,
        lastName: lastName || undefined,
        email: email || undefined,
        phone: phone || undefined,
        companyName: company || undefined,
        website: website || undefined,
        source: "Voqal AI inbound call",
      }),
    });
    const data = await resp.json();
    if (!resp.ok) {
      return jsonResp(200, {
        ok: false,
        error: `Upsert failed: ${data.message || JSON.stringify(data)}`,
        call_id: call.call_id,
      });
    }
    contactId = data.contact?.id || data.id;
    wasNew = data.new === true || data.contact?.new === true;
  } catch (err) {
    return jsonResp(200, { ok: false, error: `Upsert error: ${err.message}` });
  }

  if (!contactId) {
    return jsonResp(200, { ok: false, error: "Upsert returned no contact ID", call_id: call.call_id });
  }

  // Step 2: add tags via the additive endpoint, which merges with existing.
  let tagsAdded = false;
  if (tags.length > 0) {
    try {
      const tagResp = await fetch(`${GHL_BASE}/contacts/${contactId}/tags`, {
        method: "POST",
        headers: ghlHeaders,
        body: JSON.stringify({ tags }),
      });
      tagsAdded = tagResp.ok;
    } catch (err) {
      // Tag failure is non-fatal — contact is saved, just without the new tags.
    }
  }

  return jsonResp(200, {
    ok: true,
    contact_id: contactId,
    created: wasNew,
    tags_added: tagsAdded,
    call_id: call.call_id,
    request_type: requestType,
    summary_saved: !!summary,
  });
};

function jsonResp(statusCode, body) {
  return {
    statusCode,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };
}
