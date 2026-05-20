import logging
from typing import List, Dict
from fastapi import WebSocket

logger = logging.getLogger("krishimitra-ws-core")


class WebSocketManager:
    def __init__(self):
        # Maps specific operational zone identities to assigned client sockets
        self.active_channels: Dict[str, List[WebSocket]] = {}

    async def register(self, client_socket: WebSocket, channel_id: str = "global") -> None:
        await client_socket.accept()
        if channel_id not in self.active_channels:
            self.active_channels[channel_id] = []
        self.active_channels[channel_id].append(client_socket)
        logger.info(
            f"Socket connection appended to channel: {channel_id}. Channel size: {len(self.active_channels[channel_id])}")

    def deregister(self, client_socket: WebSocket, channel_id: str = "global") -> None:
        if channel_id in self.active_channels:
            if client_socket in self.active_channels[channel_id]:
                self.active_channels[channel_id].remove(client_socket)
                logger.info(
                    f"Socket safely removed from channel: {channel_id}.")
            if not self.active_channels[channel_id]:
                del self.active_channels[channel_id]

    async def transmit_frame(self, message: dict, client_socket: WebSocket) -> None:
        try:
            await client_socket.send_json(message)
        except Exception as e:
            logger.error(
                f"Failed to transmit packet directly to socket endpoint: {str(e)}")

    async def broadcast_to_channel(self, payload: dict, channel_id: str = "global") -> None:
        if channel_id not in self.active_channels:
            return
        dead_sockets = []
        for socket in self.active_channels[channel_id]:
            try:
                await socket.send_json(payload)
            except Exception:
                dead_sockets.append(socket)

        for dead_socket in dead_sockets:
            self.deregister(dead_socket, channel_id)


ws_manager = WebSocketManager()
