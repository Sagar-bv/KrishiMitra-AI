import logging
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.api_v1.api import api_router
from app.api.api_v1.endpoints.websocket_chat import router as ws_router

logging.basicConfig(level=logging.INFO,
                    format="%(asctime)s [%(levelname)s] %(message)s")
logger = logging.getLogger("krishimitra-core")

app = FastAPI(
    title="KrishiMitra Core Architecture",
    description="Enterprise AI Agriculture Matrix Execution Engine",
    version="3.4.0",
    docs_url="/docs",
    redoc_url="/redoc"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(api_router, prefix="/api/v1")
app.include_router(ws_router)


@app.on_event("startup")
async def startup_event():
    logger.info(
        "Initializing neural weights, database fabrics, and cache subsystems.")


@app.on_event("shutdown")
async def shutdown_event():
    logger.info(
        "Terminating open network interfaces and pipeline workers securely.")
