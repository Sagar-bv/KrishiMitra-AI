import uuid
from datetime import datetime, timezone
from sqlalchemy import Column, String, DateTime, Float, JSON, ForeignKey
from backend.core.database import Base


class CropHistory(Base):
    __tablename__ = "crop_histories"

    id = Column(String(36), primary_key=True,
                default=lambda: str(uuid.uuid4()))
    user_id = Column(String(36), ForeignKey(
        "users.id", ondelete="CASCADE"), nullable=False)
    soil_nitrogen = Column(Float, nullable=False)
    soil_phosphorus = Column(Float, nullable=False)
    soil_potassium = Column(Float, nullable=False)
    soil_ph = Column(Float, nullable=False)
    recommended_crops = Column(JSON, nullable=False)
    selected_crop = Column(String(100), nullable=True)
    timestamp = Column(DateTime, default=lambda: datetime.now(
        timezone.utc), nullable=False)
