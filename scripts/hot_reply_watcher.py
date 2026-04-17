#!/usr/bin/env python3
"""Instantly hot-reply watcher — fires every 2 hours during UK working hours."""

import json
import os
import sys
import time
from datetime import datetime, timedelta, timezone
from html import escape

import anthropic
import requests

INSTANTLY_BASE = "https://api.instantly.ai/api/v2"
TELEGRAM_BASE = "https://api.telegram.org"
CAL_LINK = "https://cal.com/voqalai/discovery"
HOT_CLASSES = {"INTERESTED", "BOOK_A_CALL", "OBJECTION"}
ALL_CLASSES = {
    "INTERESTED", "BOOK_A_CALL", "OBJECTION", "OOO",
    "UNSUBSCRIBE", "NOT_INTERESTED", "WRONG_PERSON", "QUESTION",
}


def get_env(name: str) -> str:
    val = os.environ.get(name, "")
    if not val:
        raise RuntimeError(f"Missing required env var: {name}")
    return val


def fetch_replies(campaign_id: str, since_iso: str, api_key: str) -> list[dict]:
    headers = {"Authorization": f"Bearer {api_key}"}
    params = {"campaign_id": campaign_id, "limit": 100}
    resp = requests.get(
        f"{INSTANTLY_BASE}/emails/reply",
        headers=headers,
        params=params,
        timeout=15,
    )
    resp.raise_for_status()
    data = resp.json()
    items = data.get("items", data) if isinstance(data, dict) else data
    if not isinstance(items, list):
        items = []
    return [r for r in items if (r.get("timestamp_created") or "") >= since_iso]


def _reply_field(reply: dict, *candidates: str, default: str = "") -> str:
    for key in candidates:
        if reply.get(key):
            return reply[key]
    return default


def classify_and_suggest(reply: dict, client: anthropic.Anthropic) -> tuple[str, str]:
    body = _reply_field(reply, "body", "text", "email_body")[:2000]
    subject = _reply_field(reply, "subject", "email_subject")
    sender = _reply_field(reply, "from_address", "reply_from", "sender_email")

    prompt = f"""You are classifying a cold-email reply for a UK B2B AI company.

Classify into EXACTLY one of: INTERESTED, BOOK_A_CALL, OBJECTION, OOO, UNSUBSCRIBE, NOT_INTERESTED, WRONG_PERSON, QUESTION

Rules:
- INTERESTED: positive, wants to learn more but hasn't asked to book
- BOOK_A_CALL: explicitly asks to schedule / meet
- OBJECTION: engaged pushback worth addressing (e.g. "we already use X", "not the right time but...")
- OOO: out-of-office auto-reply
- UNSUBSCRIBE: any opt-out / remove-me request
- NOT_INTERESTED: flat rejection, no engagement
- WRONG_PERSON: forwarded or told to contact someone else
- QUESTION: asking something specific before deciding

Subject: {subject}
From: {sender}
Body:
{body}

Reply with ONLY valid JSON — no markdown, no explanation:
{{"class": "<ONE_OF_THE_ABOVE>", "suggested": "<reply or null>"}}

For "suggested": if class is INTERESTED, BOOK_A_CALL, or OBJECTION write a 2–4 sentence warm UK-English reply that references something specific they said. For INTERESTED and BOOK_A_CALL include {CAL_LINK} naturally. Sign off "Tom — Voqal AI". For all other classes set "suggested" to null."""

    msg = client.messages.create(
        model="claude-haiku-4-5-20251001",
        max_tokens=600,
        messages=[{"role": "user", "content": prompt}],
    )
    raw = msg.content[0].text.strip()
    parsed = json.loads(raw)
    cls = parsed.get("class", "QUESTION")
    if cls not in ALL_CLASSES:
        cls = "QUESTION"
    return cls, parsed.get("suggested") or ""


def delete_lead(email: str, campaign_id: str, api_key: str) -> None:
    try:
        requests.delete(
            f"{INSTANTLY_BASE}/leads/{email}",
            headers={"Authorization": f"Bearer {api_key}"},
            params={"campaign_id": campaign_id},
            timeout=10,
        )
    except Exception:
        pass  # best-effort; no notification for unsubscribe failures


def _send_telegram_payload(payload: dict, bot_token: str) -> bool:
    url = f"{TELEGRAM_BASE}/bot{bot_token}/sendMessage"
    resp = requests.post(url, json=payload, timeout=15)
    return resp.json().get("ok", False)


def send_telegram(text: str, bot_token: str, chat_id: int) -> None:
    payload = {"chat_id": chat_id, "text": text, "parse_mode": "HTML"}
    if not _send_telegram_payload(payload, bot_token):
        # Retry once without HTML parse_mode
        payload.pop("parse_mode")
        _send_telegram_payload(payload, bot_token)


def build_hot_message(cls: str, reply: dict, campaign_label: str, suggested: str) -> str:
    sender_name = escape(_reply_field(reply, "from_name", "sender_name"), quote=False)
    sender_email = escape(_reply_field(reply, "from_address", "reply_from", "sender_email"), quote=False)
    subject = escape(_reply_field(reply, "subject", "email_subject"), quote=False)
    body = escape(_reply_field(reply, "body", "text", "email_body")[:600], quote=False)

    icon = "🔥" if cls in ("INTERESTED", "BOOK_A_CALL") else "📌"
    lines = [
        f'{icon} <b>{cls}</b> — {sender_name} ({sender_email})',
        f"Campaign: {campaign_label} • Subject: {subject}",
        "",
        f'"{body}"',
    ]
    if suggested:
        lines += ["", "💡 <b>Suggested response:</b>", escape(suggested, quote=False)]
    return "\n".join(lines)


def main() -> None:
    api_key = get_env("INSTANTLY_API_KEY")
    bot_token = get_env("TELEGRAM_BOT_TOKEN")
    chat_id = int(get_env("TELEGRAM_CHAT_ID"))
    uk_id = get_env("UK_CAMPAIGN_ID")
    us_id = get_env("US_CAMPAIGN_ID")

    since_iso = (datetime.now(timezone.utc) - timedelta(hours=2, minutes=10)).isoformat()

    client = anthropic.Anthropic()

    errors: list[str] = []
    all_replies: list[tuple[str, dict, str]] = []  # (label, reply, campaign_id)

    for label, cid in [("UK", uk_id), ("US", us_id)]:
        try:
            replies = fetch_replies(cid, since_iso, api_key)
            for r in replies:
                all_replies.append((label, r, cid))
        except Exception as exc:
            errors.append(f"{label}: {exc}")

    if len(errors) == 2:
        send_telegram(
            f"⚠️ Hot-reply watcher couldn't reach Instantly: {'; '.join(errors)}",
            bot_token,
            chat_id,
        )
        sys.exit(1)

    hot: list[tuple[str, dict, str, str]] = []

    for label, reply, cid in all_replies:
        try:
            cls, suggested = classify_and_suggest(reply, client)
        except Exception as exc:
            print(f"Classification error for reply in {label}: {exc}", file=sys.stderr)
            continue

        if cls == "UNSUBSCRIBE":
            email = _reply_field(reply, "from_address", "reply_from", "sender_email")
            if email:
                delete_lead(email, cid, api_key)
            continue

        if cls in HOT_CLASSES:
            hot.append((cls, reply, label, suggested))

    if not hot:
        return  # silent — nothing to report

    for cls, reply, label, suggested in hot[:5]:
        msg = build_hot_message(cls, reply, label, suggested)
        send_telegram(msg, bot_token, chat_id)
        time.sleep(0.3)

    remainder = len(hot) - 5
    if remainder > 0:
        send_telegram(
            f"+{remainder} more hot replies — see morning brief",
            bot_token,
            chat_id,
        )


if __name__ == "__main__":
    main()
