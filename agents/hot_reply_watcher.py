#!/usr/bin/env python3
"""
Instantly Hot-Reply Watcher
Fires every 2 hours during UK working hours.
Pings Tom on Telegram for INTERESTED / BOOK_A_CALL / engaged OBJECTION replies.
Silent when nothing hot — noise kills this system's value.
"""

import logging
import os
import sys
from datetime import datetime, timedelta, timezone

import anthropic
import requests
from dotenv import load_dotenv

# ── Environment ────────────────────────────────────────────────────────────────
load_dotenv(dotenv_path=os.path.join(os.path.dirname(__file__), ".env"))

INSTANTLY_API_KEY  = os.environ["INSTANTLY_API_KEY"]
TELEGRAM_BOT_TOKEN = os.environ["TELEGRAM_BOT_TOKEN"]
TELEGRAM_CHAT_ID   = int(os.environ["TELEGRAM_CHAT_ID"])
UK_CAMPAIGN_ID     = os.environ["UK_CAMPAIGN_ID"]
US_CAMPAIGN_ID     = os.environ["US_CAMPAIGN_ID"]

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s %(levelname)s %(message)s",
    handlers=[logging.StreamHandler(sys.stdout)],
)
log = logging.getLogger(__name__)

INSTANTLY_HEADERS = {"Authorization": f"Bearer {INSTANTLY_API_KEY}"}

ALL_CLASSES = {
    "INTERESTED", "BOOK_A_CALL", "OBJECTION", "OOO",
    "UNSUBSCRIBE", "NOT_INTERESTED", "WRONG_PERSON", "QUESTION",
}
NOTIFIABLE = {"INTERESTED", "BOOK_A_CALL", "OBJECTION"}

# ── Claude ─────────────────────────────────────────────────────────────────────
_claude = anthropic.Anthropic()  # reads ANTHROPIC_API_KEY from env


def classify_reply(subject: str, body: str) -> str:
    """Classify a reply into exactly one of the 8 categories."""
    prompt = (
        "Classify this cold-email reply into exactly one of these categories:\n"
        "INTERESTED, BOOK_A_CALL, OBJECTION, OOO, UNSUBSCRIBE, "
        "NOT_INTERESTED, WRONG_PERSON, QUESTION\n\n"
        "Definitions:\n"
        "- INTERESTED: positive, wants to learn more but hasn't asked to book\n"
        "- BOOK_A_CALL: explicitly wants to schedule a call or meeting\n"
        "- OBJECTION: engaged pushback (price, timing, competitor) — still a warm lead\n"
        "- OOO: out-of-office auto-reply\n"
        "- UNSUBSCRIBE: wants to be removed / never email again\n"
        "- NOT_INTERESTED: flat rejection, no engagement\n"
        "- WRONG_PERSON: forwarded or says they are the wrong contact\n"
        "- QUESTION: neutral question with no clear buying signal\n\n"
        "Reply with the single category word only. Nothing else.\n\n"
        f"Subject: {subject}\nBody:\n{body[:1200]}"
    )
    response = _claude.messages.create(
        model="claude-haiku-4-5-20251001",
        max_tokens=20,
        messages=[{"role": "user", "content": prompt}],
    )
    raw = response.content[0].text.strip().upper()
    for cls in ALL_CLASSES:
        if cls in raw:
            return cls
    log.warning("Unexpected classification %r — defaulting to QUESTION", raw)
    return "QUESTION"


def generate_suggested_reply(classification: str, sender_name: str, body: str, subject: str) -> str:
    """Generate a 2-4 sentence warm UK-English suggested reply."""
    cal_line = (
        "Include https://cal.com/voqalai/discovery so they can book a slot."
        if classification in ("INTERESTED", "BOOK_A_CALL")
        else ""
    )
    prompt = (
        "Write a warm, concise 2-4 sentence reply in UK English to this cold-email response. "
        f"The prospect's reply is classified as: {classification}. "
        f"{cal_line} "
        "Sound human and direct — not salesy or sycophantic. "
        "Reference something specific from what they said. "
        'Sign off as "Tom — Voqal AI". '
        "Reply with only the message text — no subject line, no quotation marks around it.\n\n"
        f"Subject: {subject}\nTheir reply:\n{body[:800]}"
    )
    response = _claude.messages.create(
        model="claude-haiku-4-5-20251001",
        max_tokens=220,
        messages=[{"role": "user", "content": prompt}],
    )
    return response.content[0].text.strip()


# ── Instantly ──────────────────────────────────────────────────────────────────
def fetch_replies(campaign_id: str) -> list | None:
    """Return reply list for a campaign, or None on HTTP/network error."""
    try:
        r = requests.get(
            "https://api.instantly.ai/api/v2/emails/reply",
            params={"campaign_id": campaign_id, "limit": 100},
            headers=INSTANTLY_HEADERS,
            timeout=30,
        )
        r.raise_for_status()
        data = r.json()
        if isinstance(data, list):
            return data
        # Unwrap common envelope shapes
        for key in ("items", "data", "replies"):
            if key in data and isinstance(data[key], list):
                return data[key]
        return []
    except Exception as exc:
        log.error("Instantly fetch error for campaign %s: %s", campaign_id, exc)
        return None


def delete_lead(email: str, campaign_id: str) -> None:
    """Silently remove an unsubscribed lead from a campaign."""
    try:
        r = requests.delete(
            f"https://api.instantly.ai/api/v2/leads/{email}",
            params={"campaign_id": campaign_id},
            headers=INSTANTLY_HEADERS,
            timeout=15,
        )
        log.info("Deleted lead %s from %s → %d", email, campaign_id, r.status_code)
    except Exception as exc:
        log.error("Failed to delete lead %s: %s", email, exc)


# ── Telegram ───────────────────────────────────────────────────────────────────
def he(text: str) -> str:
    """HTML-escape a string for Telegram HTML parse mode."""
    return str(text).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


def send_telegram(text: str) -> None:
    """Send a Telegram message; falls back to plain text if HTML parse fails."""
    url = f"https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}/sendMessage"
    payload = {"chat_id": TELEGRAM_CHAT_ID, "text": text, "parse_mode": "HTML"}
    try:
        r = requests.post(url, json=payload, timeout=15)
        data = r.json()
        if data.get("ok"):
            log.info("Telegram ✓")
            return
        log.warning("Telegram HTML send failed (%s) — retrying without parse_mode", data.get("description"))
        r2 = requests.post(
            url,
            json={"chat_id": TELEGRAM_CHAT_ID, "text": text},
            timeout=15,
        )
        data2 = r2.json()
        if data2.get("ok"):
            log.info("Telegram ✓ (plain)")
        else:
            log.error("Telegram send failed entirely: %s", data2)
    except Exception as exc:
        log.error("Telegram exception: %s", exc)


def _reply_field(reply: dict, *keys: str, default: str = "") -> str:
    """Return the first non-empty value from a list of candidate keys."""
    for k in keys:
        v = reply.get(k)
        if v:
            return str(v)
    return default


def _parse_timestamp(ts: str) -> datetime | None:
    if not ts:
        return None
    try:
        ts_clean = ts.replace("Z", "+00:00")
        dt = datetime.fromisoformat(ts_clean)
        if dt.tzinfo is None:
            dt = dt.replace(tzinfo=timezone.utc)
        return dt
    except (ValueError, AttributeError):
        return None


# ── Main ───────────────────────────────────────────────────────────────────────
def main() -> None:
    now = datetime.now(timezone.utc)
    since = now - timedelta(hours=2, minutes=10)
    log.info("Hot-reply watcher — checking replies since %s", since.isoformat())

    campaigns = {"UK": UK_CAMPAIGN_ID, "US": US_CAMPAIGN_ID}
    failed_campaigns: list[str] = []
    recent: list[tuple[str, str, dict]] = []  # (region, campaign_id, reply)

    for region, campaign_id in campaigns.items():
        replies = fetch_replies(campaign_id)
        if replies is None:
            failed_campaigns.append(region)
            continue
        for reply in replies:
            ts = _reply_field(reply, "timestamp_created", "created_at", "date")
            dt = _parse_timestamp(ts)
            if dt is None:
                log.warning("Unparseable timestamp %r — skipping", ts)
                continue
            if dt >= since:
                recent.append((region, campaign_id, reply))

    # Both campaigns unreachable → send one warning and exit
    if len(failed_campaigns) == 2:
        send_telegram(
            f"⚠️ Hot-reply watcher couldn't reach Instantly: "
            f"both campaigns ({', '.join(failed_campaigns)}) returned errors."
        )
        sys.exit(1)

    log.info("%d replies since cutoff across all campaigns", len(recent))

    hot_messages: list[str] = []

    for region, campaign_id, reply in recent:
        body         = _reply_field(reply, "body", "text", "reply_body")
        subject      = _reply_field(reply, "subject", "email_subject")
        sender_email = _reply_field(reply, "from_address", "from_email", "sender_email", "email")
        sender_name  = _reply_field(reply, "from_name", "sender_name") or sender_email.split("@")[0]

        classification = classify_reply(subject, body)
        log.info("[%s] %s — %s → %s", region, sender_email, subject[:60], classification)

        if classification == "UNSUBSCRIBE":
            delete_lead(sender_email, campaign_id)
            continue

        if classification not in NOTIFIABLE:
            continue

        suggested = generate_suggested_reply(classification, sender_name, body, subject)
        trimmed   = body[:600] + ("…" if len(body) > 600 else "")

        msg = (
            f"\U0001f525 <b>{he(classification)}</b> \u2014 {he(sender_name)} ({he(sender_email)})\n"
            f"Campaign: <b>{he(region)}</b> \u00b7 Subject: {he(subject)}\n\n"
            f"<i>\u201c{he(trimmed)}\u201d</i>\n\n"
            f"\U0001f4a1 <b>Suggested response:</b>\n{he(suggested)}"
        )
        hot_messages.append(msg)

    if not hot_messages:
        log.info("Nothing hot — staying silent.")
        sys.exit(0)

    # Send up to 5 individually, then a single digest for the rest
    cap = min(5, len(hot_messages))
    for msg in hot_messages[:cap]:
        send_telegram(msg)

    overflow = len(hot_messages) - cap
    if overflow > 0:
        noun = "reply" if overflow == 1 else "replies"
        send_telegram(f"+{overflow} more hot {noun} — see morning brief.")

    log.info("Watcher done. %d notification(s) sent.", cap + (1 if overflow else 0))


if __name__ == "__main__":
    main()
