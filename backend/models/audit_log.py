import uuid
from datetime import datetime, timezone
from sqlalchemy import Column, String, DateTime, JSON, ForeignKey
from backend.core.database import Base


class AuditLog(Base):
    __tablename__ = "audit_logs"

    id = Column(String(36), primary_key=True,
                default=lambda: str(uuid.uuid4()))
    operator_id = Column(String(36), ForeignKey(
        "users.id", ondelete="SET NULL"), nullable=True)
    action = Column(String(100), nullable=False)
    endpoint = Column(String(255), nullable=False)
    ip_address = Column(String(45), nullable=True)
    client_metadata = Column(JSON, nullable=True)
    timestamp = Column(DateTime, default=lambda: datetime.now(
        timezone.utc), nullable=False)
