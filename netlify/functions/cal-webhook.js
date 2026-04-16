'use strict';

// Endpoint: https://voqalai.com/.netlify/functions/cal-webhook
// Register in Cal.com → Settings → Developer → Webhooks for these events:
//   BOOKING_CREATED, BOOKING_RESCHEDULED, BOOKING_CANCELLED
//
// Required env vars (Netlify → Site settings → Environment variables):
//   RESEND_API_KEY    — from https://resend.com
// Optional env vars:
//   CAL_WEBHOOK_SECRET — if set in Cal.com, we verify the signature header
//   ALERT_FROM         — verified sender (default: onboarding@resend.dev)
//   ALERT_TO           — comma-separated override recipients

const crypto = require('crypto');

const DEFAULT_TO = ['info@voqalai.com', 'tparry1987@gmail.com'];
const DEFAULT_FROM = 'Voqal Watchdog <onboarding@resend.dev>';

function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function verifySignature(secret, rawBody, sigHeader) {
  if (!secret) return true;
  if (!sigHeader) return false;
  const expected = crypto
    .createHmac('sha256', secret)
    .update(rawBody, 'utf8')
    .digest('hex');
  const a = Buffer.from(expected);
  const b = Buffer.from(String(sigHeader));
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(a, b);
}

function eventTitle(triggerEvent) {
  switch (triggerEvent) {
    case 'BOOKING_CREATED':
      return 'New Booking Confirmed';
    case 'BOOKING_RESCHEDULED':
      return 'Booking Rescheduled';
    case 'BOOKING_CANCELLED':
      return 'Booking Cancelled';
    default:
      return triggerEvent || 'Cal.com Event';
  }
}

function formatDateTime(iso) {
  if (!iso) return '';
  try {
    const d = new Date(iso);
    return d.toUTCString();
  } catch {
    return iso;
  }
}

function extractBooking(payload) {
  const p = payload && payload.payload ? payload.payload : payload || {};
  const attendee = Array.isArray(p.attendees) && p.attendees[0] ? p.attendees[0] : {};
  const organizer = p.organizer || {};
  return {
    trigger: payload.triggerEvent || payload.event || '',
    title: p.title || p.eventType?.title || p.type || '',
    startTime: p.startTime || p.start || '',
    endTime: p.endTime || p.end || '',
    timezone: attendee.timeZone || p.timezone || organizer.timeZone || '',
    attendeeName: attendee.name || '',
    attendeeEmail: attendee.email || '',
    organizerName: organizer.name || '',
    location: typeof p.location === 'string' ? p.location : p.location?.value || '',
    meetingUrl:
      p.metadata?.videoCallUrl ||
      p.videoCallData?.url ||
      p.conferenceData?.url ||
      '',
    notes: p.additionalNotes || p.description || '',
    bookingId: p.uid || p.id || '',
    cancellationReason: p.cancellationReason || '',
  };
}

async function sendEmail({ apiKey, from, to, subject, html, replyTo }) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to,
      subject,
      html,
      reply_to: replyTo || undefined,
    }),
  });
  const text = await res.text();
  if (!res.ok) {
    throw new Error(`Resend ${res.status}: ${text}`);
  }
  return text;
}

exports.handler = async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'method-not-allowed' };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY not set — skipping email alert');
    return { statusCode: 200, body: 'skipped: no RESEND_API_KEY' };
  }

  const rawBody = event.body || '';
  const secret = process.env.CAL_WEBHOOK_SECRET;
  const sigHeader =
    (event.headers &&
      (event.headers['x-cal-signature-256'] ||
        event.headers['X-Cal-Signature-256'] ||
        event.headers['x-cal-signature'])) ||
    '';

  if (secret && !verifySignature(secret, rawBody, sigHeader)) {
    console.error('Invalid Cal.com signature');
    return { statusCode: 401, body: 'invalid-signature' };
  }

  let payload;
  try {
    payload = JSON.parse(rawBody || '{}');
  } catch (err) {
    return { statusCode: 400, body: 'bad-json' };
  }

  const b = extractBooking(payload);
  const title = eventTitle(b.trigger);
  const attendeeLabel = b.attendeeName || b.attendeeEmail || 'Unknown';
  const subject = `${title} — ${attendeeLabel}${b.title ? ` (${b.title})` : ''}`;

  const rows = [
    ['Event', b.title],
    ['Attendee', b.attendeeName ? `${b.attendeeName} <${b.attendeeEmail}>` : b.attendeeEmail],
    ['Start', formatDateTime(b.startTime)],
    ['End', formatDateTime(b.endTime)],
    ['Timezone', b.timezone],
    ['Host', b.organizerName],
    ['Location', b.location],
    ['Meeting link', b.meetingUrl],
    ['Notes', b.notes],
    ['Cancellation reason', b.cancellationReason],
    ['Booking ID', b.bookingId],
  ]
    .filter(([, v]) => v)
    .map(
      ([k, v]) =>
        `<tr>` +
        `<td style="padding:6px 12px;border-bottom:1px solid #eee;color:#666;font-family:sans-serif;font-size:13px;vertical-align:top;white-space:nowrap;">${esc(k)}</td>` +
        `<td style="padding:6px 12px;border-bottom:1px solid #eee;font-family:sans-serif;font-size:14px;">${esc(v)}</td>` +
        `</tr>`,
    )
    .join('');

  const html = `
    <div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:24px;">
      <h2 style="margin:0 0 8px;color:#C4785A;">${esc(title)}</h2>
      <p style="margin:0 0 16px;color:#444;font-size:14px;">
        Cal.com event received for voqalai.com
      </p>
      <table style="width:100%;border-collapse:collapse;background:#fafafa;border:1px solid #eee;border-radius:6px;overflow:hidden;">
        ${rows || '<tr><td style="padding:12px;color:#666;">No booking fields captured.</td></tr>'}
      </table>
    </div>
  `;

  const to = process.env.ALERT_TO
    ? process.env.ALERT_TO.split(',').map((s) => s.trim()).filter(Boolean)
    : DEFAULT_TO;
  const from = process.env.ALERT_FROM || DEFAULT_FROM;

  try {
    await sendEmail({
      apiKey,
      from,
      to,
      subject,
      html,
      replyTo: b.attendeeEmail || undefined,
    });
    return { statusCode: 200, body: 'sent' };
  } catch (err) {
    console.error('Email send failed', err);
    return { statusCode: 200, body: `error: ${err.message}` };
  }
};
