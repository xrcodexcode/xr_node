"""Tests for the health check and system status endpoints."""
from __future__ import annotations

import pytest


@pytest.mark.asyncio
async def test_root_endpoint(client):
    """Root endpoint returns service info."""
    response = await client.get("/")
    assert response.status_code == 200
    data = response.json()
    assert "service" in data
    assert "version" in data
    assert data["service"] == "XR-NODES Agent OS"


@pytest.mark.asyncio
async def test_health_check(client):
    """Health endpoint returns system health."""
    response = await client.get("/api/v1/health")
    assert response.status_code == 200
    data = response.json()
    assert data["status"] in ("healthy", "degraded")
    assert "version" in data
    assert "vault_connected" in data
    assert "database_connected" in data
    assert data["database_connected"] is True
    assert "system" in data
    assert "python" in data["system"]


@pytest.mark.asyncio
async def test_system_status(client):
    """Status endpoint returns detailed system info."""
    response = await client.get("/api/v1/health/status")
    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "running"
    assert "agents" in data
    assert data["agents"] == 9  # 9 seeded agents
    assert "vault_nodes" in data
    assert "vault_mocs" in data
    assert "uptime" in data


@pytest.mark.asyncio
async def test_health_response_schema(client):
    """Health response matches the expected schema."""
    response = await client.get("/api/v1/health")
    data = response.json()
    required_fields = {
        "status", "version", "environment", "timestamp",
        "vault_connected", "database_connected", "vault_path", "system"
    }
    assert required_fields.issubset(set(data.keys()))


@pytest.mark.asyncio
async def test_nonexistent_endpoint(client):
    """Nonexistent endpoint returns 404."""
    response = await client.get("/api/v1/nonexistent")
    assert response.status_code == 404
