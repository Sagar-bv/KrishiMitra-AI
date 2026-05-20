#!/usr/bin/env bash

# ==============================================================================
# KRISHIMITRA CACHE PURGE & SUBSYSTEM SANITIZATION AUTOMATION
# ==============================================================================

set -o errexit
set -o pipefail
set -o nounset

REDIS_CLI_EXEC=$(which redis-cli || echo "")
DOCKER_EXEC=$(which docker || echo "")

LOG_DIR="/var/log/krishimitra"
TEMP_UPLOADS_DIR="/app/backend/storage/uploads"

echo "=== [$(date +'%Y-%m-%d %H:%M:%S')] Starting system-wide structural cache cleanup sequence ==="

# 1. Clear Redis Matrix Volatile Allocation Slices
if [ -n "${REDIS_CLI_EXEC}" ]; then
    echo "Resolving Redis pipeline. Evicting ephemeral cache metrics safely..."
    # Retain core configurations but purge calculated metrics to stimulate recalculation cycles
    ${REDIS_CLI_EXEC} -h 127.0.0.1 -p 6379 KEYS "dashboard:telemetry:*" | xargs ${REDIS_CLI_EXEC} -h 127.0.0.1 -p 6379 DEL || echo "No matching volatile keys found."
    ${REDIS_CLI_EXEC} -h 127.0.0.1 -p 6379 KEYS "dashboard:market:*" | xargs ${REDIS_CLI_EXEC} -h 127.0.0.1 -p 6379 DEL || echo "No matching volatile ledger entries found."
    echo "Redis structural dashboard caches safely evicted."
else
    echo "[WARNING] redis-cli binary location missing. Skipping memory cleanup."
fi

# 2. Cleanup Legacy Image Pathological Upload Arrays
if [ -d "${TEMP_UPLOADS_DIR}" ]; then
    echo "Scanning temporary uploads pool located at: ${TEMP_UPLOADS_DIR}"
    # Purge image artifacts matching standard file constraints older than 48 hours to preserve disk geometry
    find "${TEMP_UPLOADS_DIR}" -type f -not -name '.gitkeep' -mtime +2 -delete
    echo "Stale image data fragments safely purged from machine storage."
else
    echo "[WARNING] Configured target uploads root structure directory missing."
fi

# 3. Clean and Truncate Rolling Log File Slices
if [ -d "${LOG_DIR}" ]; then
    echo "Archiving operational system log records..."
    find "${LOG_DIR}" -type f -name "*.log" -mtime +7 -exec truncate -s 0 {} \;
    echo "Log pools inside threshold boundaries safely truncated."
fi

# 4. Prune Unreferenced Docker System Memory Vectors
if [ -n "${DOCKER_EXEC}" ]; then
    echo "Executing background pruning operations for decoupled Docker framework spaces..."
    ${DOCKER_EXEC} system prune --build-cache --force
    echo "Docker system layer storage blocks cleaned successfully."
fi

echo "=== [$(date +'%Y-%m-%d %H:%M:%S')] Global system sanitization loop complete ==="
exit 0