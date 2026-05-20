from fastapi import APIRouter
from pydantic import BaseModel
from typing import List

router = APIRouter()


class CommodityIndex(BaseModel):
    name: str
    price: float
    delta: float
    volume: str
    bullish: bool


@router.get("/ledger", response_model=List[CommodityIndex])
async def fetch_commodity_ledger(zone: str = "all"):
    return [
        {"name": "Oryza Sativa (Rice)", "price": 2450.0,
         "delta": 4.2, "volume": "2400 MT", "bullish": True},
        {"name": "Triticum Aestivum (Wheat)", "price": 2120.0,
         "delta": -0.8, "volume": "1850 MT", "bullish": False}
    ]


@router.get("/forecast")
async def fetch_market_arbitrage_forecast():
    return {
        "status": "ARBITRAGE_DETECTED",
        "optimal_exit_horizon_weeks": 3,
        "liquidity_zone": "IN-SOUTH-C3"
    }
