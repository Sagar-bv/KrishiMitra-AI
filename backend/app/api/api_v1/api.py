from fastapi import APIRouter
from app.api.api_v1.endpoints import (
    auth, health, dashboard, weather, market_analytics,
    crop_recommendation, disease_detection, plantation_planner
)

api_router = APIRouter()

api_router.include_router(
    health.router, prefix="/health", tags=["Telemetry & Health"])
api_router.include_router(auth.router, prefix="/auth",
                          tags=["Security Infrastructure"])
api_router.include_router(
    dashboard.router, prefix="/dashboard", tags=["Orchestration Dashboard"])
api_router.include_router(
    weather.router, prefix="/weather", tags=["Micro-Climate Core"])
api_router.include_router(market_analytics.router,
                          prefix="/market", tags=["Market Arbitrage Ledger"])
api_router.include_router(crop_recommendation.router,
                          prefix="/recommender", tags=["Agronomic Suitability Matrix"])
api_router.include_router(disease_detection.router,
                          prefix="/diagnostics", tags=["CNN Plant Leaf Pathology"])
api_router.include_router(plantation_planner.router,
                          prefix="/planner", tags=["Macro Financial Scheduling"])
