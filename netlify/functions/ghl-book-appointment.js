// Retell custom function: book_appointment
// Upserts the caller as a GHL contact, then books an appointment on the calendar.
// Returns booking confirmation or a clear error the LLM can speak back.
//
// Env vars required:
//   GHL_LOCATION_API_KEY  Private Integration Token (pit-...)
//   GHL_LOCATION_ID       Sub-account location ID
//   GHL_CALENDAR_ID       The calendar to book against

const GHL_BASE = "https://services.leadconnectorhq.com";

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const token = process.env.GHL_LOCATION_API_KEY;
  const locationId = process.env.GHL_LOCATION_ID;
  const calendarId = process.env.GHL_CALENDAR_ID;
  if (!token || !locationId || !calendarId) {
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

  const startIso = args.start_time_iso;
  const durationMin = parseInt(args.duration_minutes) || 15;
  const name = (args.contact_name || "").trim();
  const email = (args.contact_email || "").trim();
  const phone = (args.contact_phone || callMeta.from_number || "").trim();
  const notes = args.notes || "";

  if (!startIso || !name || !email) {
    return jsonResp(200, {
      ok: false,
      error: "Missing required fields: start_time_iso, contact_name, contact_email",
    });
  }

  const startMs = Date.parse(startIso);
  if (Number.isNaN(startMs)) {
    return jsonResp(200, { ok: false, error: "Invalid start_time_iso" });
  }
  const endIso = new Date(startMs + durationMin * 60000).toISOString();

  const [firstName, ...rest] = name.split(/\s+/);
  const lastName = rest.join(" ") || "";

  // Step 1: upsert contact, get contactId.
  let contactId;
  try {
    const upsertResp = await fetch(`${GHL_BASE}/contacts/upsert`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        Version: "2021-07-28",
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        locationId,
        firstName,
        lastName,
        email,
        phone: phone || undefined,
        source: "Voqal AI inbound call",
        tags: ["voqal-call-booked"],
      }),
    });
    const upsertData = await upsertResp.json();
    if (!upsertResp.ok) {
      return jsonResp(200, {
        ok: false,
        error: `Contact upsert failed: ${upsertData.message || JSON.stringify(upsertData)}`,
      });
    }
    contactId = upsertData.contact?.id || upsertData.id;
    if (!contactId) {
      return jsonResp(200, { ok: false, error: "Upsert returned no contact ID" });
    }
  } catch (err) {
    return jsonResp(200, { ok: false, error: `Upsert error: ${err.message}` });
  }

  // Step 2: create appointment.
  try {
    const apptResp = await fetch(`${GHL_BASE}/calendars/events/appointments`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        Version: "2021-04-15",
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        calendarId,
        locationId,
        contactId,
        startTime: startIso,
        endTime: endIso,
        title: `Voqal call: ${name}`,
        appointmentStatus: "confirmed",
        ignoreDateRange: false,
        toNotify: true,
        meetingLocationType: "default",
        notes,
      }),
    });
    const apptData = await apptResp.json();
    if (!apptResp.ok) {
      return jsonResp(200, {
        ok: false,
        error: `Booking failed: ${apptData.message || JSON.stringify(apptData)}`,
        contact_id: contactId,
      });
    }

    return jsonResp(200, {
      ok: true,
      appointment_id: apptData.id || apptData.appointmentId,
      contact_id: contactId,
      start_time: startIso,
      end_time: endIso,
      message: `Booked ${name} for ${startIso}`,
    });
  } catch (err) {
    return jsonResp(200, {
      ok: false,
      error: `Appointment error: ${err.message}`,
      contact_id: contactId,
    });
  }
};

function jsonResp(statusCode, body) {
  return {
    statusCode,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };
}
