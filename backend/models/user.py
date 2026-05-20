import uuid
from datetime import datetime, timezone
from sqlalchemy import Column, String, DateTime, Boolean
from backend.core.database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(String(36), primary_key=True,
                default=lambda: str(uuid.uuid4()))
    username = Column(String(150), unique=True, nullable=False, index=True)
    email = Column(String(255), unique=True, nullable=False, index=True)
    hashed_password = Column(String(255), nullable=True)
    is_active = Column(Boolean, default=True, nullable=False)
    is_google_oauth = Column(Boolean, default=False, nullable=False)
    google_subject_id = Column(String(255), unique=True, nullable=True)
    created_at = Column(DateTime, default=lambda: datetime.now(
        timezone.utc), nullable=False)
    last_login = Column(DateTime, nullable=True)
