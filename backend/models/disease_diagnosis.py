import uuid
from datetime import datetime, timezone
from sqlalchemy import Column, String, DateTime, Float, JSON, ForeignKey, Boolean
from backend.core.database import Base


class DiseaseDiagnosis(Base):
    __tablename__ = "disease_diagnoses"

    id = Column(String(36), primary_key=True,
                default=lambda: str(uuid.uuid4()))
    user_id = Column(String(36), ForeignKey(
        "users.id", ondelete="CASCADE"), nullable=False)
    image_reference_path = Column(String(512), nullable=False)
    disease_name = Column(String(255), nullable=False)
    confidence_score = Column(Float, nullable=False)
    is_healthy = Column(Boolean, default=False, nullable=False)
    treatment_blueprint = Column(JSON, nullable=False)
    timestamp = Column(DateTime, default=lambda: datetime.now(
        timezone.utc), nullable=False)
