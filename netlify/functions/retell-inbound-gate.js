// Retell inbound call gate
// Routes nuisance callers to a stub agent that hangs up immediately.
// Retell treats non-200 webhook responses as "fall back to default agent",
// so we MUST return 200 with an override_agent_id pointing at the drop agent.
// To add/remove numbers, edit BLOCKED_NUMBERS below, commit and push.

const BLOCKED_NUMBERS = new Set([
  "+443301900164", // persistent nuisance caller (8+ silent 30s calls on 2026-04-20)
  "+442045789504", // earlier silent caller same day
]);

// Stub agent that immediately calls end_call — minimal cost per blocked call.
const DROP_AGENT_ID = "agent_c5ede4a9e8d8cdf9869595fe8b";

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

  if (fromNumber && BLOCKED_NUMBERS.has(fromNumber)) {
    console.log(`[retell-inbound-gate] BLOCKED: ${fromNumber} -> drop agent`);
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        call_inbound: { override_agent_id: DROP_AGENT_ID },
      }),
    };
  }

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: "{}",
  };
};
