// Retell inbound call gate
// Blocks nuisance callers before the Retell agent loads.
// To add/remove numbers, edit BLOCKED_NUMBERS below, commit and push.

const BLOCKED_NUMBERS = new Set([
  "+443301900164", // persistent nuisance caller (8 silent 30s calls on 2026-04-20)
  "+442045789504", // earlier silent caller same day
]);

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
    console.log(`[retell-inbound-gate] BLOCKED: ${fromNumber}`);
    return {
      statusCode: 403,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "caller_blocked" }),
    };
  }

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: "{}",
  };
};
