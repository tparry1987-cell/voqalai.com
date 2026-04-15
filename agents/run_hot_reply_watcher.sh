#!/usr/bin/env bash
# Wrapper for hot_reply_watcher.py — called by cron every 2 hours.
# Sources .env from the same directory so cron's minimal environment has the secrets.
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ENV_FILE="$SCRIPT_DIR/.env"

# Load secrets if .env exists (cron won't inherit the user's shell env)
if [[ -f "$ENV_FILE" ]]; then
    set -a
    # shellcheck source=/dev/null
    source "$ENV_FILE"
    set +a
fi

exec /usr/local/bin/python3 "$SCRIPT_DIR/hot_reply_watcher.py"
