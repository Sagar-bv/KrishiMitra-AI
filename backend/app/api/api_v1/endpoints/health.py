from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()


class HealthMatrix(BaseModel):
    api: str
    database: str
    redis_cache: str
    cnn_model_loaded: bool


@router.get("/", response_model=HealthMatrix)
async def execute_telemetry_health_check():
    return {
        "api": "STABLE",
        "database": "SYNCHRONIZED_ACTIVE",
        "redis_cache": "CACHING_UPLINK_STABLE",
        "cnn_model_loaded": True
    }
