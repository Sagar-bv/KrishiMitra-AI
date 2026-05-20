import logging
from typing import Dict, Any
from backend.core.cache_manager import cache
from backend.services.weather_intelligence import WeatherIntelligenceService
from backend.services.market_analytics import MarketAnalyticsService

logger = logging.getLogger("krishimitra-service-orchestrator")


class DashboardOrchestratorService:
    @staticmethod
    async def compile_unified_telemetry(operator_id: str, lat: float, lng: float) -> Dict[str, Any]:
        logger.info(
            f"Orchestrating metrics compilation for user zone boundary context: {operator_id}")
        cache_key = f"dashboard:telemetry:{operator_id}"

        cached_data = await cache.get(cache_key)
        if cached_data:
            return cached_data

        weather_data = await WeatherIntelligenceService.get_telemetry_matrix(lat, lng)
        market_data = await MarketAnalyticsService.get_live_ledger("all")

        unified_payload = {
            "metrics": {
                "integrityScore": 94.2,
                "hectaresActive: ": 120.5,
                "totalInferences": 1482
            },
            "weather": weather_data,
            "market_ledger": market_data
        }

        await cache.set(cache_key, unified_payload, ttl=600)
        return unified_payload
