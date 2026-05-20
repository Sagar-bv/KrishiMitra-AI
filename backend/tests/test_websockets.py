import pytest
from fastapi.testclient import TestClient
from app.main import app


def test_websocket_chat_streaming_lifecycle():
    client = TestClient(app)
    with client.websocket_connect("/ws/chat") as websocket:
        # Transmit continuous interaction matrix text payload block
        test_payload = {
            "text": "What is the optimal NPK balance for cotton matrix?"}
        websocket.send_json(test_payload)

        # Ingest downstream streaming payload events emitted by ConnectionManager
        response_data = websocket.receive_json()
        assert "event" in response_data
        assert "text" in response_data
        assert response_data["event"] == "STREAM_CHUNK"
        assert "Vector resolution acknowledged" in response_data["text"]
