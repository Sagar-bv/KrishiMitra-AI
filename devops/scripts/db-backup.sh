#!/usr/bin/env bash

# ==============================================================================
# KRISHIMITRA POSTGRESQL AUTOMATED BACKUP & RETENTION ENGINE
# ==============================================================================

set -o errexit
set -o pipefail
set -o nounset

# Operational Database Core Matrix Identity Constants
DB_HOST="localhost"
DB_PORT="5432"
DB_NAME="krishimitra"
DB_USER="postgres"
BACKUP_DIR="/var/backups/krishimitra/db"
RETENTION_DAYS=14

TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
BACKUP_FILENAME="${DB_NAME}_prod_snapshot_${TIMESTAMP}.sql.gz"
FINAL_BACKUP_PATH="${BACKUP_DIR}/${BACKUP_FILENAME}"

echo "=== [$(date +'%Y-%m-%d %H:%M:%S')] Initializing production database snapshot engine ==="

# Validate directory topology matching architectural parameters
if [ ! -d "${BACKUP_DIR}" ]; then
    echo "Backup directory absent. Provisioning target target paths at: ${BACKUP_DIR}"
    mkdir -p "${BACKUP_DIR}"
    chmod 700 "${BACKUP_DIR}"
fi

# Execute high-fidelity compressed dump stream isolation mapping
echo "Streaming binary logical snapshot from targets..."
PGPASSWORD="${PGPASSWORD:-postgres_matrix_key}" pg_dump -h "${DB_HOST}" -p "${DB_PORT}" -U "${DB_USER}" -F p "${DB_NAME}" | gzip -c > "${FINAL_BACKUP_PATH}"

# Verify checksum metrics alignment
if [ -f "${FINAL_BACKUP_PATH}" ] && [ -s "${FINAL_BACKUP_PATH}" ]; then
    echo "Backup binary successfully generated and stored at: ${FINAL_BACKUP_PATH}"
    chmod 400 "${FINAL_BACKUP_PATH}"
else
    echo "[CRITICAL ANOMALY] Database stream compression pipeline failed. Output file size mismatch." >&2
    exit 1
fi

# Enforce Lifecycle Policy Pruning Routines
echo "Enforcing lifecycle retention policy matrix limits (Threshold: ${RETENTION_DAYS} Days)..."
DELETED_COUNT=$(find "${BACKUP_DIR}" -type f -name "${DB_NAME}_prod_snapshot_*.sql.gz" -mtime +${RETENTION_DAYS} -print -delete | wc -l)

echo "Pruned ${DELETED_COUNT} obsolete database recovery volumes from active cluster disk array."
echo "=== [$(date +'%Y-%m-%d %H:%M:%S')] Database backup process successfully executed ==="
exit 0