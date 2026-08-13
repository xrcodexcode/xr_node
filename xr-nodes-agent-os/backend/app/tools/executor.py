"""ToolExecutor — Executes tool calls safely with timing and error isolation."""
from __future__ import annotations

import asyncio
import time
from typing import Any, Dict, Optional

from app.core.logging import get_logger
from app.tools.base import BaseTool, ToolResult
from app.tools.permissions import permission_manager
from app.tools.registry import tool_registry

logger = get_logger(__name__)


class ToolExecutor:
    """Executor engine for running tools."""

    async def execute_tool(
        self,
        tool_name: str,
        kwargs: Dict[str, Any],
        agent_name: Optional[str] = None,
    ) -> ToolResult:
        tool = tool_registry.get(tool_name)
        if not tool:
            return ToolResult(
                tool_name=tool_name,
                success=False,
                output=None,
                error=f"Tool '{tool_name}' not found in registry.",
            )

        # Check permissions
        allowed, reason = permission_manager.check_permission(tool, kwargs, agent_name)
        if not allowed:
            logger.warning("Tool execution blocked: %s [%s]", tool_name, reason)
            return ToolResult(
                tool_name=tool_name,
                success=False,
                output=None,
                error=f"Permission denied: {reason}",
            )

        start_time = time.perf_counter()
        try:
            result = await asyncio.wait_for(tool.execute(**kwargs), timeout=tool.timeout_seconds)
            elapsed_ms = (time.perf_counter() - start_time) * 1000.0
            result.duration_ms = elapsed_ms
            return result
        except asyncio.TimeoutError:
            elapsed_ms = (time.perf_counter() - start_time) * 1000.0
            return ToolResult(
                tool_name=tool_name,
                success=False,
                output=None,
                error=f"Tool execution timed out after {tool.timeout_seconds}s.",
                duration_ms=elapsed_ms,
            )
        except Exception as e:
            elapsed_ms = (time.perf_counter() - start_time) * 1000.0
            logger.exception("Tool '%s' execution failed: %s", tool_name, e)
            return ToolResult(
                tool_name=tool_name,
                success=False,
                output=None,
                error=str(e),
                duration_ms=elapsed_ms,
            )


tool_executor = ToolExecutor()
