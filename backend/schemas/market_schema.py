from pydantic import BaseModel
from typing import List


class CommodityIndex(BaseModel):
    name: str
    price: float
    delta: float
    volume: str
    bullish: bool


class MarketForecastOutput(BaseModel):
    status: str
    optimal_exit_horizon_weeks: int
    liquidity_zone: str
    risk_variance: float
