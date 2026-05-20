import pytest
from backend.core.cache_manager import cache


@pytest.mark.asyncio
async def test_async_cache_set_and_get():
    cache.initialize()
    test_key = "matrix_test_metric:01"
    test_payload = {"integrityScore": 98.4, "status": "OPTIMAL"}

    success = await cache.set(test_key, test_payload, ttl=60)
    assert success is True

    fetched_payload = await cache.get(test_key)
    assert fetched_payload == test_payload


@pytest.mark.asyncio
async def test_cache_invalidation():
    cache.initialize()
    test_key = "eviction_target:99"
    await cache.set(test_key, {"data": "transient_vector"}, ttl=30)

    evict_success = await cache.invalidate(test_key)
    assert evict_success is True

    deleted_payload = await cache.get(test_key)
    assert deleted_payload is None


@pytest.mark.asyncio
async def test_dashboard_scoped_eviction():
    cache.initialize()
    operator_id = "KM-OPERATOR-TEST"

    await cache.set(f"dashboard:telemetry:{operator_id}", {"metric": 1})
    await cache.set(f"dashboard:market:{operator_id}", {"ledger": 2})

    await cache.clear_dashboard_cache(operator_id)

    assert await cache.get(f"dashboard:telemetry:{operator_id}") is None
    assert await cache.get(f"dashboard:market:{operator_id}") is None
