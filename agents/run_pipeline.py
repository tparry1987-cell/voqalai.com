#!/usr/bin/env python3
"""
Lead Pipeline Autopilot — Daily Run
Scrape Google Maps → Verify emails → Upload to Instantly → Telegram report
"""

import os
import sys
import time
import logging
import requests
from datetime import datetime, timezone
from dotenv import load_dotenv

# ── Environment ────────────────────────────────────────────────────────────────
load_dotenv(dotenv_path=os.path.join(os.path.dirname(__file__), ".env"))

INSTANTLY_API_KEY  = os.environ["INSTANTLY_API_KEY"]
OUTSCRAPER_API_KEY = os.environ["OUTSCRAPER_API_KEY"]
REOON_API_KEY      = os.environ["REOON_API_KEY"]
TELEGRAM_BOT_TOKEN = os.environ["TELEGRAM_BOT_TOKEN"]
TELEGRAM_CHAT_ID   = os.environ["TELEGRAM_CHAT_ID"]
UK_CAMPAIGN_ID     = os.environ["UK_CAMPAIGN_ID"]
US_CAMPAIGN_ID     = os.environ["US_CAMPAIGN_ID"]

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s %(levelname)s %(message)s",
    handlers=[logging.StreamHandler(sys.stdout)],
)
log = logging.getLogger(__name__)

# ── Search targets ─────────────────────────────────────────────────────────────
UK_SEARCHES = [
    ("dental practice",   "London"),
    ("law firm",          "Manchester"),
    ("accountant",        "Birmingham"),
    ("electrician",       "Leeds"),
    ("estate agent",      "Bristol"),
    ("gym",               "Glasgow"),
    ("medical practice",  "Liverpool"),
]

US_SEARCHES = [
    ("dental practice",   "New York"),
    ("law firm",          "Los Angeles"),
    ("accountant",        "Chicago"),
    ("electrician",       "Houston"),
    ("gym",               "Phoenix"),
    ("medical practice",  "Dallas"),
    ("real estate agent", "Miami"),
]

LEADS_PER_QUERY = 5

# ── Outscraper ─────────────────────────────────────────────────────────────────
def scrape_google_maps(query: str, limit: int = LEADS_PER_QUERY) -> list:
    url = "https://api.outscraper.com/maps/search-v3"
    params = {"query": query, "limit": limit, "language": "en", "async": "false"}
    headers = {"X-API-KEY": OUTSCRAPER_API_KEY}
    try:
        r = requests.get(url, params=params, headers=headers, timeout=90)
        r.raise_for_status()
        data = r.json()
        results = data.get("data", [])
        # Outscraper returns list-of-lists; flatten one level
        if results and isinstance(results[0], list):
            results = results[0]
        log.info("Outscraper '%s': %d results", query, len(results))
        return results if isinstance(results, list) else []
    except Exception as exc:
        log.error("Outscraper error for '%s': %s", query, exc)
        return []


def extract_email(result: dict) -> str | None:
    """Pull the best email from an Outscraper result dict."""
    for field in ("email", "emails"):
        val = result.get(field)
        if val:
            if isinstance(val, list):
                val = val[0] if val else None
            if val and "@" in str(val):
                return str(val).strip().lower()
    web = result.get("emails_from_website") or []
    for item in web:
        if isinstance(item, dict):
            v = item.get("value") or item.get("email", "")
        else:
            v = str(item)
        if v and "@" in v:
            return v.strip().lower()
    return None


# ── Reoon email verifier ───────────────────────────────────────────────────────
REOON_VALID = {"valid", "safe_to_send", "accept_all", "SAFE", "VALID",
               "risky"}  # include risky — better than nothing

def verify_email(email: str) -> bool:
    url = "https://emailverifier.reoon.com/api/v1/verify"
    params = {"email": email, "key": REOON_API_KEY, "mode": "quick"}
    try:
        r = requests.get(url, params=params, timeout=30)
        r.raise_for_status()
        data = r.json()
        status = data.get("status", "")
        log.info("Reoon %s → %s", email, status)
        return status in REOON_VALID
    except Exception as exc:
        log.error("Reoon error for %s: %s", email, exc)
        return False


# ── Instantly upload ───────────────────────────────────────────────────────────
def upload_lead(campaign_id: str, lead: dict) -> bool:
    """Try Instantly v2 then fall back to v1."""
    headers_v2 = {
        "Authorization": f"Bearer {INSTANTLY_API_KEY}",
        "Content-Type": "application/json",
    }
    payload_v2 = {
        "campaign_id": campaign_id,
        "email": lead["email"],
        "first_name": lead.get("first_name", ""),
        "last_name": lead.get("last_name", ""),
        "company_name": lead.get("company_name", ""),
        "phone": lead.get("phone", ""),
        "website": lead.get("website", ""),
        "custom_variables": {
            "city": lead.get("city", ""),
            "business_type": lead.get("business_type", ""),
            "address": lead.get("address", ""),
        },
    }
    try:
        r = requests.post(
            "https://api.instantly.ai/api/v2/leads",
            json=payload_v2, headers=headers_v2, timeout=30,
        )
        if r.status_code in (200, 201):
            log.info("Uploaded (v2) %s → campaign %s", lead["email"], campaign_id)
            return True
        log.warning("Instantly v2 %d for %s: %s", r.status_code, lead["email"], r.text[:200])
    except Exception as exc:
        log.error("Instantly v2 error for %s: %s", lead["email"], exc)

    # v1 fallback
    try:
        payload_v1 = {
            "api_key": INSTANTLY_API_KEY,
            "campaign_id": campaign_id,
            "email": lead["email"],
            "first_name": lead.get("first_name", ""),
            "company_name": lead.get("company_name", ""),
        }
        r2 = requests.post(
            "https://api.instantly.ai/api/v1/lead/add",
            json=payload_v1, timeout=30,
        )
        if r2.status_code in (200, 201):
            log.info("Uploaded (v1) %s → campaign %s", lead["email"], campaign_id)
            return True
        log.warning("Instantly v1 %d for %s: %s", r2.status_code, lead["email"], r2.text[:200])
    except Exception as exc:
        log.error("Instantly v1 error for %s: %s", lead["email"], exc)

    return False


# ── Pipeline ───────────────────────────────────────────────────────────────────
def run_pipeline() -> dict:
    stats = {
        "scraped": 0,
        "verified": 0,
        "uploaded_uk": 0,
        "uploaded_us": 0,
        "errors": [],
        "business_types": set(),
        "cities": set(),
    }

    def process_batch(searches, campaign_id, region):
        for biz_type, city in searches:
            suffix = "UK" if region == "UK" else "USA"
            query = f"{biz_type} in {city}, {suffix}"
            log.info("─── Scraping: %s", query)
            raw = scrape_google_maps(query, LEADS_PER_QUERY)
            stats["scraped"] += len(raw)
            stats["business_types"].add(biz_type)
            stats["cities"].add(city)

            for result in raw:
                email = extract_email(result)
                if not email:
                    continue

                name = result.get("name", "")
                parts = name.split(None, 1)
                first_name = parts[0] if parts else ""

                if not verify_email(email):
                    continue
                stats["verified"] += 1

                lead = {
                    "email": email,
                    "first_name": first_name,
                    "company_name": name,
                    "phone": (result.get("phone") or result.get("phone_number") or ""),
                    "website": (result.get("website") or result.get("site") or ""),
                    "city": city,
                    "business_type": biz_type,
                    "address": (result.get("full_address") or result.get("address") or ""),
                }

                if upload_lead(campaign_id, lead):
                    if region == "UK":
                        stats["uploaded_uk"] += 1
                    else:
                        stats["uploaded_us"] += 1
                else:
                    stats["errors"].append(f"Upload failed: {email}")

            time.sleep(1)  # polite pause between queries

    log.info("═══ Starting UK batch ═══")
    process_batch(UK_SEARCHES, UK_CAMPAIGN_ID, "UK")

    log.info("═══ Starting US batch ═══")
    process_batch(US_SEARCHES, US_CAMPAIGN_ID, "US")

    return stats


# ── Telegram ───────────────────────────────────────────────────────────────────
def html_escape(text: str) -> str:
    return text.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


def send_telegram(message: str) -> bool:
    url = f"https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}/sendMessage"
    payload = {"chat_id": TELEGRAM_CHAT_ID, "text": message, "parse_mode": "HTML"}
    try:
        r = requests.post(url, json=payload, timeout=15)
        data = r.json()
        if data.get("ok"):
            log.info("Telegram ✓")
            return True
        log.error("Telegram error: %s", data)
        return False
    except Exception as exc:
        log.error("Telegram send failed: %s", exc)
        return False


# ── Entry point ────────────────────────────────────────────────────────────────
if __name__ == "__main__":
    now = datetime.now(timezone.utc)
    weekday  = now.strftime("%A")
    date_str = now.strftime("%-d %B %Y")

    try:
        stats = run_pipeline()
    except Exception as exc:
        log.exception("Pipeline crashed")
        send_telegram(
            f"🔧 Pipeline autopilot — {weekday} {date_str}\n\n"
            f"💥 Pipeline crashed: {html_escape(str(exc))}"
        )
        sys.exit(1)

    biz_str    = html_escape(", ".join(sorted(stats["business_types"])))
    cities_str = html_escape(", ".join(sorted(stats["cities"])))

    if stats["errors"]:
        error_block = "⚠️ errors:\n" + "\n".join(
            html_escape(e) for e in stats["errors"][:10]
        )
    else:
        error_block = "✅ all green"

    message = (
        f"🔧 Pipeline autopilot — {weekday} {date_str}\n\n"
        f"Scraped: {stats['scraped']}  →  Verified: {stats['verified']}  →  "
        f"Uploaded: {stats['uploaded_uk']} UK / {stats['uploaded_us']} US\n\n"
        f"Covered: {biz_str} in {cities_str}\n\n"
        f"{error_block}"
    )

    send_telegram(message)
    log.info("Pipeline complete.")
    sys.exit(0)
