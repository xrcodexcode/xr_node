"""In-process event bus for decoupled component communication.

Supports synchronous and asynchronous event handlers.
All events are fire-and-forget; handler failures are logged but do not
propagate to the emitter.
"""
from __future__ import annotations

import asyncio
import logging
from collections import defaultdict
from dataclasses import dataclass, field
from datetime import datetime, timezone
from typing import Any, Callable, Coroutine

logger = logging.getLogger(__name__)


@dataclass
class Event:
    """Structured event emitted within the Agent OS."""

    type: str                           # e.g. "task.created", "agent.completed"
    source: str = "system"              # e.g. "orchestrator", "research-agent"
    payload: dict[str, Any] = field(default_factory=dict)
    timestamp: str = field(
        default_factory=lambda: datetime.now(timezone.utc).isoformat()
    )


# Handler types
SyncHandler = Callable[[Event], None]
AsyncHandler = Callable[[Event], Coroutine[Any, Any, None]]
Handler = SyncHandler | AsyncHandler


class EventBus:
    """Simple publish/subscribe event bus."""

    def __init__(self) -> None:
        self._handlers: dict[str, list[Handler]] = defaultdict(list)
        self._global_handlers: list[Handler] = []

    def on(self, event_type: str, handler: Handler) -> None:
        """Register a handler for a specific event type."""
        self._handlers[event_type].append(handler)

    def on_all(self, handler: Handler) -> None:
        """Register a handler that receives every event."""
        self._global_handlers.append(handler)

    async def emit(self, event: Event) -> None:
        """Emit an event to all matching handlers."""
        handlers = list(self._global_handlers) + list(self._handlers.get(event.type, []))
        for handler in handlers:
            try:
                result = handler(event)
                if asyncio.iscoroutine(result):
                    await result
            except Exception:
                logger.exception(
                    "Event handler failed for %s: %s", event.type, handler.__name__
                )

    def emit_sync(self, event: Event) -> None:
        """Emit an event synchronously (for use outside async context)."""
        try:
            loop = asyncio.get_running_loop()
            loop.create_task(self.emit(event))
        except RuntimeError:
            # No event loop — run directly
            asyncio.run(self.emit(event))


# Global event bus instance
event_bus = EventBus()
