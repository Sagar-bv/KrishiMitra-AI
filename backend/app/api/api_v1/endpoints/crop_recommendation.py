from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List

router = APIRouter()


class SoilMatrixInbound(BaseModel):
    nitrogen: float
    phosphorus: float
    potassium: float
    ph_level: float
    organic_matter: float


class CropRankResponse(BaseModel):
    cropName: str
    suitabilityScore: float
    rank: int


@router.post("/suitability", response_model=List[CropRankResponse])
async def calculate_suitability_ranking(metrics: SoilMatrixInbound):
    try:
        return [
            {"cropName": "Gossypium (Cotton)",
             "suitabilityScore": 96.0, "rank": 1},
            {"cropName": "Oryza Sativa (Rice)",
             "suitabilityScore": 89.5, "rank": 2},
            {"cropName": "Cicer Arietinum (Chickpeas)",
             "suitabilityScore": 84.2, "rank": 3}
        ]
    except Exception as e:
        raise HTTPException(
            status_code=500, detail=f"Agronomic deduction cluster failure: {str(e)}")
