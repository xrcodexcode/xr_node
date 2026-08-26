"""WebSocket endpoint for real-time event streaming."""
from __future__ import annotations

import json
from typing import List

from fastapi import APIRouter, WebSocket, WebSocketDisconnect

from app.core.events import event_bus, Event
from app.core.logging import get_logger

logger = get_logger(__name__)

router = APIRouter(prefix="/ws", tags=["WebSocket"])


class ConnectionManager:
    """Manages active WebSocket connections and broadcasts events."""

    def __init__(self):
        self.active_connections: List[WebSocket] = []

    async def connect(self, websocket: WebSocket):
        await websocket.accept()
        self.active_connections.append(websocket)
        logger.info("WebSocket client connected (%d active)", len(self.active_connections))

    def disconnect(self, websocket: WebSocket):
        if websocket in self.active_connections:
            self.active_connections.remove(websocket)
        logger.info("WebSocket client disconnected (%d active)", len(self.active_connections))

    async def broadcast(self, message: dict):
        """Send a message to all connected clients, removing dead connections."""
        dead: List[WebSocket] = []
        for connection in self.active_connections:
            try:
                await connection.send_json(message)
            except Exception:
                dead.append(connection)
        for ws in dead:
            self.disconnect(ws)


manager = ConnectionManager()


# ── Event Bus Integration ────────────────────────────────────────────────────
async def _broadcast_event(ev: Event):
    """Listener that forwards every event bus emission to WebSocket clients."""
    if not manager.active_connections:
        return
    try:
        payload = {
            "type": ev.type,
            "source": ev.source,
            "payload": ev.payload if isinstance(ev.payload, dict) else str(ev.payload),
            "timestamp": ev.timestamp.isoformat() if ev.timestamp else None,
        }
        await manager.broadcast(payload)
    except Exception as e:
        logger.error("WebSocket broadcast error: %s", e)


event_bus.on_all(_broadcast_event)


# ── WebSocket Endpoint ───────────────────────────────────────────────────────
@router.websocket("/events")
async def websocket_events(websocket: WebSocket):
    """Stream all system events in real-time over WebSocket."""
    await manager.connect(websocket)
    try:
        while True:
            # Keep connection alive; client can send pings or commands
            data = await websocket.receive_text()
            # Echo heartbeat
            if data == "ping":
                await websocket.send_json({"type": "pong"})
    except WebSocketDisconnect:
        manager.disconnect(websocket)
    except Exception:
        manager.disconnect(websocket)
