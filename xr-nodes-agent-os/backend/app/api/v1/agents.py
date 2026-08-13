"""API endpoints for agent registry and execution."""
from __future__ import annotations

from typing import Any, Dict, List, Optional

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from app.agents.registry import agent_registry
from app.agents.runner import AgentRunner
from app.models.router import model_router

router = APIRouter(prefix="/agents", tags=["Agents"])


class AgentResponse(BaseModel):
    name: str
    description: str
    type: str
    status: str
    instructions: str
    capabilities: List[str]
    tools: List[str]
    permissions: Dict[str, str]


class AgentRunRequest(BaseModel):
    prompt: str
    task_id: Optional[str] = None
    context: Optional[Dict[str, Any]] = None


class AgentRunResponse(BaseModel):
    agent_name: str
    task_id: Optional[str]
    status: str
    output: str
    steps_taken: int
    token_usage: Dict[str, int]
    error: Optional[str] = None


@router.get("", response_model=List[AgentResponse])
async def list_agents() -> List[AgentResponse]:
    """List all registered agents."""
    agents = agent_registry.list_agents()
    return [AgentResponse(**agent.to_dict()) for agent in agents]


@router.get("/{name}", response_model=AgentResponse)
async def get_agent(name: str) -> AgentResponse:
    """Get details of a specific agent."""
    agent = agent_registry.get(name)
    if not agent:
        raise HTTPException(status_code=404, detail=f"Agent '{name}' not found")
    return AgentResponse(**agent.to_dict())


@router.post("/{name}/run", response_model=AgentRunResponse)
async def run_agent(name: str, req: AgentRunRequest) -> AgentRunResponse:
    """Execute a specific agent with a prompt."""
    agent = agent_registry.get(name)
    if not agent:
        raise HTTPException(status_code=404, detail=f"Agent '{name}' not found")

    runner = AgentRunner(agent)
    result = await runner.run(prompt=req.prompt, task_id=req.task_id, context=req.context)
    return AgentRunResponse(
        agent_name=result.agent_name,
        task_id=result.task_id,
        status=result.status,
        output=result.output,
        steps_taken=result.steps_taken,
        token_usage=result.token_usage,
        error=result.error,
    )
