from fastapi import APIRouter, HTTPException, status, Depends
from pydantic import BaseModel, EmailStr
from datetime import datetime, timedelta

router = APIRouter()


class CredentialsPayload(BaseModel):
    username: str
    password: str


class GoogleOAuthPayload(BaseModel):
    idToken: str


class TokenSchema(BaseModel):
    access_token: str
    token_type: str = "Bearer"
    operator_id: str


@router.post("/login", response_model=TokenSchema)
async def login_standard(payload: CredentialsPayload):
    if payload.username == "operator@krishimitra.ai" and payload.password == "secure_matrix_key":
        return {
            "access_token": "km_live_jwt_token_stub_sha256_verification_string_2026",
            "token_type": "Bearer",
            "operator_id": "KM-OPERATOR-01"
        }
    raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,
                        detail="Invalid credential map.")


@router.post("/google", response_model=TokenSchema)
async def login_federated(payload: GoogleOAuthPayload):
    if payload.idToken:
        return {
            "access_token": "km_federated_google_jwt_token_stub_sha256_verification_2026",
            "token_type": "Bearer",
            "operator_id": "KM-FEDERATED-USER"
        }
    raise HTTPException(
        status_code=400, detail="Invalid Google configuration map.")


@router.post("/logout")
async def invalidate_session():
    return {"status": "DECOUPLED"}
