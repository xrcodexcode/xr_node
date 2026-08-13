"""Application error hierarchy and FastAPI exception handlers."""
from __future__ import annotations

from typing import Any

from fastapi import Request
from fastapi.responses import JSONResponse


# ── Error Hierarchy ───────────────────────────────────────────────────────────

class AppError(Exception):
    """Base application error."""

    def __init__(
        self,
        message: str,
        status_code: int = 500,
        error_type: str = "internal_error",
        details: dict[str, Any] | None = None,
    ):
        super().__init__(message)
        self.message = message
        self.status_code = status_code
        self.error_type = error_type
        self.details = details or {}


class NotFoundError(AppError):
    """Resource not found."""

    def __init__(self, resource: str, identifier: str):
        super().__init__(
            message=f"{resource} not found: {identifier}",
            status_code=404,
            error_type="not_found",
            details={"resource": resource, "identifier": identifier},
        )


class ValidationError(AppError):
    """Input validation failed."""

    def __init__(self, message: str, details: dict[str, Any] | None = None):
        super().__init__(
            message=message,
            status_code=422,
            error_type="validation_error",
            details=details or {},
        )


class PermissionError(AppError):
    """Operation not permitted."""

    def __init__(self, action: str, reason: str = "Insufficient permissions"):
        super().__init__(
            message=f"Permission denied for action '{action}': {reason}",
            status_code=403,
            error_type="permission_denied",
            details={"action": action, "reason": reason},
        )


class AgentError(AppError):
    """Agent execution error."""

    def __init__(self, agent_id: str, message: str, details: dict[str, Any] | None = None):
        super().__init__(
            message=f"Agent '{agent_id}' error: {message}",
            status_code=500,
            error_type="agent_error",
            details={"agent_id": agent_id, **(details or {})},
        )


class ToolError(AppError):
    """Tool execution error."""

    def __init__(self, tool_name: str, message: str, details: dict[str, Any] | None = None):
        super().__init__(
            message=f"Tool '{tool_name}' error: {message}",
            status_code=500,
            error_type="tool_error",
            details={"tool": tool_name, **(details or {})},
        )


class TaskError(AppError):
    """Task lifecycle error."""

    def __init__(self, task_id: str, message: str):
        super().__init__(
            message=f"Task '{task_id}': {message}",
            status_code=400,
            error_type="task_error",
            details={"task_id": task_id},
        )


# ── FastAPI Exception Handlers ────────────────────────────────────────────────

async def app_error_handler(request: Request, exc: AppError) -> JSONResponse:
    """Handle application-specific errors."""
    return JSONResponse(
        status_code=exc.status_code,
        content={
            "error": exc.error_type,
            "message": exc.message,
            "details": exc.details,
        },
    )


async def generic_exception_handler(request: Request, exc: Exception) -> JSONResponse:
    """Catch-all handler for unhandled exceptions."""
    import logging
    logging.getLogger("xr-nodes").exception("Unhandled exception: %s", exc)
    return JSONResponse(
        status_code=500,
        content={
            "error": "internal_error",
            "message": "An unexpected error occurred.",
            "details": {},
        },
    )
