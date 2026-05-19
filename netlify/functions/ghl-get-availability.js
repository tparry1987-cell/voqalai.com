// Retell custom function: get_availability
// Returns free slots from the GHL Calendar over the next N days.
// Called by the Voqal-GHL-Demo agent when a caller wants to book.
//
// Env vars required:
//   GHL_LOCATION_API_KEY  Private Integration Token (pit-...)
//   GHL_CALENDAR_ID       The calendar to read availability from

const GHL_BASE = "https://services.leadconnectorhq.com";

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const token = process.env.GHL_LOCATION_API_KEY;
  const calendarId = process.env.GHL_CALENDAR_ID;
  if (!token || !calendarId) {
    return jsonResp(500, { error: "Missing GHL env vars" });
  }

  let args = {};
  try {
    const body = JSON.parse(event.body || "{}");
    args = body.args || body;
  } catch (e) {
    return jsonResp(400, { error: "Invalid JSON body" });
  }

  const daysAhead = Math.min(Math.max(parseInt(args.days_ahead) || 7, 1), 14);
  const now = Date.now();
  const endMs = now + daysAhead * 86400000;

  const url = `${GHL_BASE}/calendars/${calendarId}/free-slots?startDate=${now}&endDate=${endMs}&timezone=Europe/London`;

  try {
    const resp = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        Version: "2021-04-15",
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

    // GHL returns slots keyed by date: { "2026-05-20": { slots: [...] }, ... }
    // Flatten into a single list the LLM can read in spoken form.
    const slots = [];
    for (const dateKey of Object.keys(data)) {
      const daySlots = data[dateKey]?.slots || [];
      for (const iso of daySlots) {
        slots.push(iso);
        if (slots.length >= 20) break;
      }
      if (slots.length >= 20) break;
    }

    return jsonResp(200, {
      ok: true,
      slot_count: slots.length,
      slots,
      timezone: "Europe/London",
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
