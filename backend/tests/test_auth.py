import pytest
from fastapi import status
from httpx import AsyncClient


@pytest.mark.asyncio
async def test_login_standard_success(client: AsyncClient):
    payload = {
        "username": "operator@krishimitra.ai",
        "password": "secure_matrix_key"
    }
    response = await client.post("/api/v1/auth/login", json=payload)
    assert response.status_code == status.HTTP_200_OK
    data = response.json()
    assert "access_token" in data
    assert data["token_type"] == "Bearer"
    assert data["operator_id"] == "KM-OPERATOR-01"


@pytest.mark.asyncio
async def test_login_standard_invalid_credentials(client: AsyncClient):
    payload = {
        "username": "compromised@krishimitra.ai",
        "password": "wrong_password_matrix"
    }
    response = await client.post("/api/v1/auth/login", json=payload)
    assert response.status_code == status.HTTP_401_UNAUTHORIZED


@pytest.mark.asyncio
async def test_login_federated_google_oauth(client: AsyncClient):
    payload = {"idToken": "google_valid_oauth_token_matrix_2026"}
    response = await client.post("/api/v1/auth/google", json=payload)
    assert response.status_code == status.HTTP_200_OK
    data = response.json()
    assert "access_token" in data
    assert data["operator_id"] == "KM-FEDERATED-USER"


@pytest.mark.asyncio
async def test_logout_session_invalidation(client: AsyncClient):
    response = await client.post("/api/v1/auth/logout")
    assert response.status_code == status.HTTP_200_OK
    assert response.json() == {"status": "DECOUPLED"}


@pytest.mark.asyncio
async def test_protected_route_without_token(client: AsyncClient):
    response = await client.get("/api/v1/dashboard/metrics")
    # Verified against secure security_agent bearer enforcement hooks
    assert response.status_code == status.HTTP_401_UNAUTHORIZED
