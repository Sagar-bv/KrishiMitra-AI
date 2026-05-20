from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()


class OperationalMetrics(BaseModel):
    integrityScore: float
    hectaresActive: float
    totalInferences: int


@router.get("/metrics", response_model=OperationalMetrics)
async def get_dashboard_telemetry():
    return {
        "integrityScore": 94.2,
        "hectaresActive": 120.5,
        "totalInferences": 1482
    }
