'use strict';

// Triggered automatically by Netlify after any Netlify Forms submission
// (demo-request on index.html, lead-reactivation-enquiry on lead-reactivation.html).
// Sends an alert email to info@voqalai.com and tparry1987@gmail.com via Resend.
//
// Required env var (set in Netlify → Site settings → Environment variables):
//   RESEND_API_KEY  — from https://resend.com
// Optional env vars:
//   ALERT_FROM       — verified sender, e.g. "Voqal Watchdog <alerts@voqalai.com>"
//                      (default: onboarding@resend.dev for initial smoke test)
//   ALERT_TO         — comma-separated override of recipients

const DEFAULT_TO = ['info@voqalai.com', 'tparry1987@gmail.com'];
const DEFAULT_FROM = 'Voqal Watchdog <onboarding@resend.dev>';

function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function formatRows(fields) {
  if (!fields || typeof fields !== 'object') return '';
  return Object.entries(fields)
    .filter(([k]) => k && !k.startsWith('form-') && k !== 'bot-field')
    .map(
      ([k, v]) =>
        `<tr>` +
        `<td style="padding:6px 12px;border-bottom:1px solid #eee;color:#666;font-family:sans-serif;font-size:13px;vertical-align:top;">${esc(k)}</td>` +
        `<td style="padding:6px 12px;border-bottom:1px solid #eee;font-family:sans-serif;font-size:14px;">${esc(v)}</td>` +
        `</tr>`,
    )
    .join('');
}

function prettyFormName(name) {
  if (!name) return 'Form submission';
  if (name === 'demo-request') return 'Demo Request';
  if (name === 'lead-reactivation-enquiry') return 'Lead Reactivation Enquiry';
  return name.replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
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
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY not set — skipping email alert');
    return { statusCode: 200, body: 'skipped: no RESEND_API_KEY' };
  }

  let payload;
  try {
    payload = JSON.parse(event.body || '{}');
  } catch (err) {
    console.error('Bad submission payload', err);
    return { statusCode: 400, body: 'bad-json' };
  }

  const submission = payload.payload || payload;
  const formName = submission.form_name || submission.name || '';
  const data = submission.data || submission.human_fields || submission;
  const senderEmail = data.email || submission.email || '';
  const senderName = data.name || '';
  const siteUrl = submission.site_url || '';
  const submittedAt =
    submission.created_at || submission.createdAt || new Date().toISOString();

  const subject = `New ${prettyFormName(formName)} — ${senderName || senderEmail || 'voqalai.com'}`;

  const rows = formatRows(data);
  const html = `
    <div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:24px;">
      <h2 style="margin:0 0 8px;color:#C4785A;">${esc(prettyFormName(formName))}</h2>
      <p style="margin:0 0 16px;color:#444;font-size:14px;">
        New submission received on voqalai.com<br>
        <span style="color:#888;font-size:12px;">${esc(submittedAt)}</span>
      </p>
      <table style="width:100%;border-collapse:collapse;background:#fafafa;border:1px solid #eee;border-radius:6px;overflow:hidden;">
        ${rows || '<tr><td style="padding:12px;color:#666;">No fields captured.</td></tr>'}
      </table>
      ${
        siteUrl
          ? `<p style="margin:16px 0 0;font-size:12px;color:#888;">Source: ${esc(siteUrl)}</p>`
          : ''
      }
      <p style="margin:24px 0 0;font-size:12px;color:#888;">
        View in Netlify → Forms for the full submission record.
      </p>
    </div>
  `;

  const to = (process.env.ALERT_TO
    ? process.env.ALERT_TO.split(',').map((s) => s.trim()).filter(Boolean)
    : DEFAULT_TO);
  const from = process.env.ALERT_FROM || DEFAULT_FROM;

  try {
    await sendEmail({
      apiKey,
      from,
      to,
      subject,
      html,
      replyTo: senderEmail || undefined,
    });
    return { statusCode: 200, body: 'sent' };
  } catch (err) {
    console.error('Email send failed', err);
    return { statusCode: 200, body: `error: ${err.message}` };
  }
};
