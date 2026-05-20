from typing import List, Optional
from pydantic_settings import BaseSettings, SettingsConfigDict
from pydantic import AnyHttpUrl


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        extra="ignore"
    )

    # API Configuration Properties
    PROJECT_NAME: str = "KrishiMitra Core API"
    API_V1_STR: str = "/api/v1"
    BACKEND_CORS_ORIGINS: List[str] = ["*"]

    # Infrastructure Storage Endpoints
    DATABASE_URL: str = "postgresql+asyncpg://postgres:postgres_matrix_key@localhost:5432/krishimitra"
    REDIS_URL: str = "redis://localhost:6379/0"

    # Cryptographic Security Configuration
    SECRET_KEY: str = "09d25e094faa6ca2556c818166b7a9563b93f7099f6f0f4caa6cf63b88e8d3e7"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 1440

    # Hyper-Scale External Engine Keys
    GEMINI_API_KEY: str = "AIzaSyFakeKey_GeminiMatrixVerification2026"
    GOOGLE_CLIENT_ID: Optional[str] = None

    # Model Framework Configurations
    MODEL_PATH: str = "backend/ml/models_cache/cnn_disease_v1.h5"
    CLASS_INDICES_PATH: str = "backend/ml/models_cache/class_indices.json"


settings = Settings()
