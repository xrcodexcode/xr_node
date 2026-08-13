"""Tests for agent registry, model router, and agent execution."""
from __future__ import annotations

import pytest
from app.agents.registry import agent_registry
from app.agents.runner import AgentRunner
from app.models.router import model_router
from app.models.base import ModelMessage


def test_agent_registry_loads_definitions():
    """Agent registry should load all YAML definitions."""
    agents = agent_registry.list_agents()
    assert len(agents) >= 9
    names = [a.name for a in agents]
    assert "research-agent" in names
    assert "knowledge-agent" in names
    assert "review-agent" in names


def test_model_router_selection():
    """Model router should select correct provider/model for task types."""
    provider, model = model_router.select_model("research")
    assert provider.provider_name == "openai"
    assert model == "gpt-4o"

    provider, model = model_router.select_model("review")
    assert provider.provider_name == "anthropic"
    assert model == "claude-sonnet-4-5"


@pytest.mark.asyncio
async def test_agent_api_endpoints(client):
    """Test GET /api/v1/agents endpoint."""
    response = await client.get("/api/v1/agents")
    assert response.status_code == 200
    data = response.json()
    assert isinstance(data, list)
    assert len(data) >= 9


@pytest.mark.asyncio
async def test_agent_execution_runner(client):
    """Test POST /api/v1/agents/research-agent/run endpoint."""
    response = await client.post(
        "/api/v1/agents/research-agent/run",
        json={"prompt": "Explain neural networks"},
    )
    assert response.status_code == 200
    data = response.json()
    assert data["agent_name"] == "research-agent"
    assert data["status"] == "completed"
    assert "output" in data
