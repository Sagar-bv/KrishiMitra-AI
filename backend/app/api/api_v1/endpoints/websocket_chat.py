import json
import logging
from fastapi import APIRouter, WebSocket, WebSocketDisconnect

router = APIRouter()
logger = logging.getLogger("krishimitra-ws")


class ConnectionManager:
    def __init__(self):
        self.active_connections: list[WebSocket] = []

    async def connect(self, websocket: WebSocket):
        await websocket.accept()
        self.active_connections.append(websocket)
        logger.info(
            f"Socket linked. Active pool count: {len(self.active_connections)}")

    def disconnect(self, websocket: WebSocket):
        if websocket in self.active_connections:
            self.active_connections.remove(websocket)
        logger.info(
            f"Socket detached. Active pool count: {len(self.active_connections)}")

    async def transmit_direct(self, message: dict, websocket: WebSocket):
        await websocket.send_text(json.dumps(message))


manager = ConnectionManager()


@router.websocket("/ws/chat")
async def websocket_chat_endpoint(websocket: WebSocket):
    await manager.connect(websocket)
    try:
        while True:
            raw_data = await websocket.receive_text()
            try:
                payload = json.loads(raw_data)
                user_text = payload.get("text", "")

                # Mock streaming orchestration loop connecting to LLM / Gemini semantic interface
                response_payload = {
                    "event": "STREAM_CHUNK",
                    "text": f"Vector resolution acknowledged for target context parameter: '{user_text}'. All agricultural datasets match."
                }
                await manager.transmit_direct(response_payload, websocket)
            except json.JSONDecodeError:
                await manager.transmit_direct({"event": "ERROR", "text": "Malformed transport frame format."}, websocket)
    except WebSocketDisconnect:
        manager.disconnect(websocket)
    except Exception as e:
        logger.error(f"Duplex protocol fault anomaly: {str(e)}")
        manager.disconnect(websocket)
