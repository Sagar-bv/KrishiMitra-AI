from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

router = APIRouter()


class PlanInbound(BaseModel):
    hectares: float
    horizonYears: int


class PlannerOutput(BaseModel):
    variety: str
    horizonYears: int
    expectedRoi: float
    planId: str


@router.post("/rotation", response_model=PlannerOutput)
async def generate_rotation_schedule(payload: PlanInbound):
    if payload.hectares <= 0:
        raise HTTPException(
            status_code=400, detail="Invalid area size constraints.")
    return {
        "variety": "Magnifera Indica (Alphonso Core Sub-Cultivar)",
        "horizonYears": payload.horizonYears,
        "expectedRoi": 24.5,
        "planId": "PLAN-ROT-2026-X99"
    }


@router.get("/projections/{plan_id}")
async def fetch_investment_projections(plan_id: str):
    return {
        "planId": plan_id,
        "capital_requirement_initial": 450000.0,
        "carbon_credit_yield_estimate": 14.8,
        "maturation_risk_index": "LOW"
    }
