'use strict';

// ─── Helpers ────────────────────────────────────────────────────────────────

function htmlEscape(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function trimBody(text, max = 600) {
  if (!text) return '';
  const s = text.trim();
  return s.length <= max ? s : s.slice(0, max - 1) + '…';
}

// ─── Classification ──────────────────────────────────────────────────────────

const PATTERNS = [
  { cls: 'UNSUBSCRIBE',    re: /unsubscribe|opt.?out|remove\s+me|stop\s+email|don'?t\s+email|do\s+not\s+contact/i },
  { cls: 'OOO',            re: /out\s+of\s+(the\s+)?office|ooo\b|on\s+(annual\s+)?leave|on\s+holiday|on\s+vacation|away\s+until|returning\s+on|back\s+on|back\s+in\s+the\s+office/i },
  { cls: 'BOOK_A_CALL',    re: /book\s+(a\s+)?(call|meeting|time|demo)|schedule\s+(a\s+)?(call|meeting|demo)|let'?s\s+(hop\s+on|chat|catch\s+up|connect|meet)|happy\s+to\s+(chat|talk|connect)|set\s+up\s+(a\s+)?(call|meeting|time)|calendar|availability|when\s+are\s+you\s+(free|available)/i },
  { cls: 'INTERESTED',     re: /interested|tell\s+me\s+more|sounds\s+good|sounds\s+great|love\s+to\s+(learn|hear|know)|learn\s+more|how\s+does\s+it\s+work|what\s+does\s+it\s+(do|cost)|yes\s+please|keen\s+to|open\s+to\s+a|would\s+love/i },
  { cls: 'NOT_INTERESTED', re: /not\s+interested|no\s+thanks|no\s+thank\s+you|not\s+for\s+us|not\s+looking|not\s+right\s+now|not\s+at\s+this\s+(time|stage)|pass\s+on\s+this|not\s+in\s+(the\s+)?market/i },
  { cls: 'WRONG_PERSON',   re: /wrong\s+person|wrong\s+(email|address)|not\s+the\s+right|don'?t\s+handle|not\s+(my\s+)?responsible|not\s+my\s+(area|department|remit)/i },
];

function classify(body) {
  const text = body || '';
  for (const { cls, re } of PATTERNS) {
    if (re.test(text)) return cls;
  }
  // Default heuristic: question → QUESTION, hesitation → OBJECTION
  if (/\?/.test(text) || /^(how|what|when|where|who|why|can|could|do|are|is|will)\b/im.test(text)) {
    return 'QUESTION';
  }
  if (/\b(but|however|although|concern|worried|not\s+sure|budget|cost|price|contract|commitment|currently|already\s+have)\b/i.test(text)) {
    return 'OBJECTION';
  }
  return 'QUESTION';
}

// An OBJECTION is "engaged" if it also contains a question or affirmative intent
function isEngagedObjection(body) {
  const text = body || '';
  return /\?/.test(text) || /interested|open|tell\s+me|how\s+does|worth|consider/i.test(text);
}

// ─── Suggested response templates ───────────────────────────────────────────

function suggestReply(cls, senderName, subject, body) {
  const first = (senderName || '').split(' ')[0] || 'there';
  const snippet = trimBody(body, 120);

  if (cls === 'BOOK_A_CALL') {
    return (
      `Thanks so much for getting back to me, ${first} — brilliant to hear from you! ` +
      `I'd love to get something in the diary. You can grab a time that suits you here: https://cal.com/voqalai/discovery ` +
      `— it's just a relaxed 20-minute discovery call, no pressure at all. ` +
      `Looking forward to speaking soon. Tom — Voqal AI`
    );
  }
  if (cls === 'INTERESTED') {
    return (
      `Great to hear from you, ${first}, and really pleased to know you're keen to find out more! ` +
      `The best next step is a quick discovery call so I can understand your situation properly and show you what's possible — you can book a time that works for you here: https://cal.com/voqalai/discovery ` +
      `It's only 20 minutes and completely no-obligation. ` +
      `Tom — Voqal AI`
    );
  }
  if (cls === 'OBJECTION') {
    const ref = snippet ? ` You mentioned "${snippet}" — that's something I'm happy to address properly rather than brush over.` : '';
    return (
      `Thanks for the honest reply, ${first} — I really appreciate it.${ref} ` +
      `Would it be worth a quick 20-minute call so I can give you a straight answer? ` +
      `Tom — Voqal AI`
    );
  }
  return `Thanks for getting back to me, ${first}. Tom — Voqal AI`;
}

// ─── Telegram ────────────────────────────────────────────────────────────────

async function telegramSend(token, chatId, text) {
  const payload = JSON.stringify({ chat_id: chatId, text, parse_mode: 'HTML' });
  const url = `https://api.telegram.org/bot${token}/sendMessage`;

  let res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: payload,
  });
  let data = await res.json();

  if (!data.ok) {
    // Retry once without parse_mode
    const fallback = JSON.stringify({ chat_id: chatId, text: text.replace(/<[^>]+>/g, '') });
    res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: fallback,
    });
    data = await res.json();
  }

  return data;
}

// ─── Instantly ───────────────────────────────────────────────────────────────

async function fetchReplies(campaignId, apiKey) {
  const url = `https://api.instantly.ai/api/v2/emails/reply?campaign_id=${encodeURIComponent(campaignId)}&limit=100`;
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${apiKey}` },
  });
  if (!res.ok) {
    throw new Error(`HTTP ${res.status} for campaign ${campaignId}`);
  }
  const data = await res.json();
  // v2 returns { items: [...] } or an array directly
  return Array.isArray(data) ? data : (data.items || data.data || []);
}

async function deleteLead(email, campaignId, apiKey) {
  const url = `https://api.instantly.ai/api/v2/leads/${encodeURIComponent(email)}?campaign_id=${encodeURIComponent(campaignId)}`;
  try {
    await fetch(url, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${apiKey}` },
    });
  } catch (_) {
    // Best-effort; don't throw
  }
}

// ─── Field normaliser ────────────────────────────────────────────────────────

function normaliseReply(item) {
  return {
    timestamp: item.timestamp_created || item.created_at || item.timestamp || '',
    senderEmail: item.sender_email || item.from_address || item.from || '',
    senderName:  item.sender_name  || item.from_name   || item.from_full_name || '',
    subject:     item.subject      || item.email_subject || '(no subject)',
    body:        item.body         || item.reply_body   || item.email_body    || '',
  };
}

// ─── Main handler ─────────────────────────────────────────────────────────────

exports.handler = async function handler() {
  const {
    INSTANTLY_API_KEY,
    TELEGRAM_BOT_TOKEN,
    TELEGRAM_CHAT_ID,
    UK_CAMPAIGN_ID,
    US_CAMPAIGN_ID,
  } = process.env;

  const chatId = parseInt(TELEGRAM_CHAT_ID, 10);

  // since_iso = now - 2h10m
  const sinceMs = Date.now() - (2 * 60 + 10) * 60 * 1000;
  const sinceIso = new Date(sinceMs).toISOString();

  // ── Fetch from both campaigns ──────────────────────────────────────────────
  const campaigns = [
    { id: UK_CAMPAIGN_ID, label: 'UK' },
    { id: US_CAMPAIGN_ID, label: 'US' },
  ];

  let allErrors = [];
  let allResults = []; // { campaign, reply }

  for (const { id, label } of campaigns) {
    try {
      const items = await fetchReplies(id, INSTANTLY_API_KEY);
      const recent = items.filter(item => {
        const ts = item.timestamp_created || item.created_at || item.timestamp || '';
        return ts >= sinceIso;
      });
      for (const item of recent) {
        allResults.push({ campaign: label, campaignId: id, reply: normaliseReply(item) });
      }
    } catch (err) {
      allErrors.push(`${label}: ${err.message}`);
    }
  }

  // Both campaigns failed → error alert + exit
  if (allErrors.length === campaigns.length) {
    await telegramSend(
      TELEGRAM_BOT_TOKEN,
      chatId,
      `⚠️ Hot-reply watcher couldn't reach Instantly: ${allErrors.join('; ')}`,
    );
    return { statusCode: 200, body: 'error-alert-sent' };
  }

  // ── Classify and partition ──────────────────────────────────────────────────
  const hotReplies = [];

  for (const { campaign, campaignId, reply } of allResults) {
    const cls = classify(reply.body);

    if (cls === 'UNSUBSCRIBE') {
      await deleteLead(reply.senderEmail, campaignId, INSTANTLY_API_KEY);
      continue;
    }

    const isHot =
      cls === 'INTERESTED' ||
      cls === 'BOOK_A_CALL' ||
      (cls === 'OBJECTION' && isEngagedObjection(reply.body));

    if (isHot) {
      hotReplies.push({ cls, campaign, reply });
    }
  }

  // ── Nothing hot → stay silent ───────────────────────────────────────────────
  if (hotReplies.length === 0) {
    return { statusCode: 200, body: 'silent' };
  }

  // ── Send up to 5 individual messages ───────────────────────────────────────
  const toSend   = hotReplies.slice(0, 5);
  const overflow = hotReplies.length - toSend.length;

  for (const { cls, campaign, reply } of toSend) {
    const name    = htmlEscape(reply.senderName  || reply.senderEmail);
    const email   = htmlEscape(reply.senderEmail);
    const subject = htmlEscape(reply.subject);
    const body    = htmlEscape(trimBody(reply.body, 600));
    const suggest = htmlEscape(suggestReply(cls, reply.senderName, reply.subject, reply.body));

    const text =
      `🔥 <b>${cls}</b> — ${name} (${email})\n` +
      `Campaign: ${campaign} • Subject: ${subject}\n\n` +
      `"${body}"\n\n` +
      `💡 <b>Suggested response:</b>\n${suggest}`;

    await telegramSend(TELEGRAM_BOT_TOKEN, chatId, text);
  }

  if (overflow > 0) {
    await telegramSend(
      TELEGRAM_BOT_TOKEN,
      chatId,
      `+${overflow} more hot ${overflow === 1 ? 'reply' : 'replies'} — see morning brief`,
    );
  }

  return { statusCode: 200, body: `sent:${toSend.length}` };
};
