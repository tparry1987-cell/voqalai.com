// Retell inbound call gate.
// Two responsibilities on every inbound call:
//   1. Block nuisance callers — route them to a stub agent that hangs up.
//   2. Inject today's date/time as per-call dynamic variables for Alice's
//      prompt template, so dates are always live regardless of any cron state.
// Retell treats non-200 webhook responses as "fall back to default agent",
// so we MUST return 200 with an override_agent_id pointing at the drop agent.
// To add/remove numbers, edit BLOCKED_NUMBERS below, commit and push.

const BLOCKED_NUMBERS = new Set([
  "+443301900164", // persistent nuisance caller (8+ silent 30s calls on 2026-04-20)
  "+442045789504", // earlier silent caller same day
]);

// Stub agent that immediately calls end_call — minimal cost per blocked call.
const DROP_AGENT_ID = "agent_c5ede4a9e8d8cdf9869595fe8b";

// Format date as Alice's prompt expects: "Wednesday, 29 April 2026".
function formatDate(tz, now) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: tz,
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).formatToParts(now);
  const get = (t) => parts.find((p) => p.type === t)?.value;
  return `${get("weekday")}, ${get("day")} ${get("month")} ${get("year")}`;
}

// Format time as Alice's prompt expects: "18:25" (24h, leading zero).
function formatTime(tz, now) {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: tz,
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(now);
}

// Both UK and US keys ship in every response. The unused pair is harmless
// (Retell only substitutes vars referenced in the prompt template), so the
// same webhook works for either Alice agent without inspecting to_number.
function buildDynamicVariables() {
  const now = new Date();
  return {
    current_date_london: formatDate("Europe/London", now),
    current_time_london: formatTime("Europe/London", now),
    current_date_us_eastern: formatDate("America/New_York", now),
    current_time_us_eastern: formatTime("America/New_York", now),
  };
}

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  let fromNumber;
  try {
    const body = JSON.parse(event.body || "{}");
    fromNumber = body?.from_number || body?.call?.from_number || body?.call_inbound?.from_number;
  } catch {
    return { statusCode: 200, headers: { "Content-Type": "application/json" }, body: "{}" };
  }

  const dynamic_variables = buildDynamicVariables();

  if (fromNumber && BLOCKED_NUMBERS.has(fromNumber)) {
    console.log(`[retell-inbound-gate] BLOCKED: ${fromNumber} -> drop agent`);
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        call_inbound: {
          override_agent_id: DROP_AGENT_ID,
          dynamic_variables,
        },
      }),
    };
  }

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      call_inbound: { dynamic_variables },
    }),
  };
};
