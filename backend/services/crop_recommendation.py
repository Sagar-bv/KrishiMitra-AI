import logging
from typing import List, Dict, Any
from backend.ml.services.recommendation_engine import advisory_engine

logger = logging.getLogger("krishimitra-service-recommender")


class CropRecommendationService:
    @staticmethod
    async def process_suitability_matrix(soil_metrics: Dict[str, Any]) -> List[Dict[str, Any]]:
        logger.info("Executing agronomic suitability ranking matrices.")
        try:
            nitrogen = float(soil_metrics.get("nitrogen", 0))
            phosphorus = float(soil_metrics.get("phosphorus", 0))
            potassium = float(soil_metrics.get("potassium", 0))
            ph = float(soil_metrics.get("ph_level", 7.0))

            rankings = advisory_engine.evaluate_optimal_crop_seeding(
                nitrogen=nitrogen, phosphorus=phosphorus, potassium=potassium, ph=ph
            )
            return rankings
        except Exception as e:
            logger.error(
                f"Failed to extract crop suitability index vectors: {str(e)}")
            raise RuntimeError(f"Agronomic calculation failure: {str(e)}")
