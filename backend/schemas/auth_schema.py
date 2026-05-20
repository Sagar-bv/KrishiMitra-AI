from pydantic import BaseModel, EmailStr
from typing import Optional


class CredentialsPayload(BaseModel):
    username: EmailStr
    password: str


class GoogleOAuthPayload(BaseModel):
    idToken: str


class TokenSchema(BaseModel):
    access_token: str
    token_type: str = "Bearer"
    operator_id: str
