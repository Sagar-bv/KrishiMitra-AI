import json
import logging
from typing import Any, Optional
import redis.asyncio as aioredis
from backend.core.config import settings

logger = logging.getLogger("krishimitra-cache")


class CacheManager:
    def __init__(self):
        self.redis: Optional[aioredis.Redis] = None

    def initialize(self) -> None:
        """Establish async connection pool to the Redis cache cluster."""
        try:
            self.redis = aioredis.from_url(
                settings.REDIS_URL,
                encoding="utf-8",
                decode_responses=True,
                max_connections=20
            )
            logger.info("Redis cache management engine successfully online.")
        except Exception as e:
            logger.critical(f"Failed to bind Redis cache socket: {str(e)}")
            raise e

    async def get(self, key: str) -> Optional[Any]:
        if not self.redis:
            return None
        try:
            data = await self.redis.get(key)
            return json.loads(data) if data else None
        except Exception as e:
            logger.error(
                f"Cache lookup execution exception for key {key}: {str(e)}")
            return None

    async def set(self, key: str, value: Any, ttl: int = 3600) -> bool:
        if not self.redis:
            return False
        try:
            await self.redis.set(key, json.dumps(value), ex=ttl)
            return True
        except Exception as e:
            logger.error(
                f"Cache mutation execution exception for key {key}: {str(e)}")
            return False

    async def invalidate(self, key: str) -> bool:
        if not self.redis:
            return False
        try:
            await self.redis.delete(key)
            return True
        except Exception as e:
            logger.error(
                f"Cache key eviction exception for key {key}: {str(e)}")
            return False

    async def clear_dashboard_cache(self, operator_id: str) -> None:
        """Evict structured telemetry slices assigned to a unique operator boundary."""
        await self.invalidate(f"dashboard:telemetry:{operator_id}")
        await self.invalidate(f"dashboard:market:{operator_id}")


cache = CacheManager()
