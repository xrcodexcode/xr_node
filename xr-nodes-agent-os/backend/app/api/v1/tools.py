"""API endpoints for tool registry and tool execution."""
from __future__ import annotations

from typing import Any, Dict, List, Optional
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from app.tools.executor import tool_executor
from app.tools.registry import tool_registry

router = APIRouter(prefix="/tools", tags=["Tools"])


class ToolResponse(BaseModel):
    name: str
    description: str
    risk_level: str
    parameters: Dict[str, Any]
    timeout_seconds: float


class ToolExecuteRequest(BaseModel):
    kwargs: Dict[str, Any] = {}
    agent_name: Optional[str] = None


class ToolExecuteResponse(BaseModel):
    tool_name: str
    success: bool
    output: Any
    error: Optional[str] = None
    duration_ms: float


@router.get("", response_model=List[ToolResponse])
async def list_tools() -> List[ToolResponse]:
    """List all registered tools."""
    tools = tool_registry.list_tools()
    return [ToolResponse(**tool.to_dict()) for tool in tools]


@router.get("/{name}", response_model=ToolResponse)
async def get_tool(name: str) -> ToolResponse:
    """Get spec of a specific tool."""
    tool = tool_registry.get(name)
    if not tool:
        raise HTTPException(status_code=404, detail=f"Tool '{name}' not found")
    return ToolResponse(**tool.to_dict())


@router.post("/{name}/execute", response_model=ToolExecuteResponse)
async def execute_tool(name: str, req: ToolExecuteRequest) -> ToolExecuteResponse:
    """Execute a specific tool."""
    res = await tool_executor.execute_tool(tool_name=name, kwargs=req.kwargs, agent_name=req.agent_name)
    return ToolExecuteResponse(
        tool_name=res.tool_name,
        success=res.success,
        output=res.output,
        error=res.error,
        duration_ms=res.duration_ms,
    )
