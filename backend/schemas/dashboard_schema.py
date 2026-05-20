from pydantic import BaseModel
from typing import List
from backend.schemas.weather_schema import WeatherTelemetry
from backend.schemas.market_schema import CommodityIndex


class OperationalMetrics(BaseModel):
    integrityScore: float
    hectaresActive: float
    totalInferences: int


class DashboardPayloadAggregation(BaseModel):
    metrics: OperationalMetrics
    weather: WeatherTelemetry
    market_ledger: List[CommodityIndex]
