"""Tests for VaultService, Frontmatter Parser, and Knowledge API."""
from __future__ import annotations

import pytest
from app.knowledge.parser import extract_tags, extract_wikilinks, parse_frontmatter
from app.knowledge.vault import vault_service


def test_frontmatter_parser():
    """Test YAML frontmatter parsing."""
    sample = """---
id: test-id
title: Sample Note
tags: [ai, ml]
---
# Sample Note
Content here with [[Link Target|Alias]] and [[Other Note#Section|Section Alias]] and [[Simple Note#Header]].
"""
    fm, body = parse_frontmatter(sample)
    assert fm["title"] == "Sample Note"
    assert extract_tags(fm) == ["ai", "ml"]

    links = extract_wikilinks(body)
    assert len(links) == 3
    assert links[0]["target"] == "Link Target"
    assert links[0]["alias"] == "Alias"
    assert links[1]["target"] == "Other Note"
    assert links[1]["alias"] == "Section Alias"
    assert links[2]["target"] == "Simple Note"
    assert links[2]["alias"] == "Simple Note"



def test_vault_service_indexing():
    """Test indexing the NexusDB vault."""
    res = vault_service.index_vault()
    assert res["status"] == "success"
    assert res["indexed_count"] > 0


@pytest.mark.asyncio
async def test_knowledge_api_search(client):
    """Test GET /api/v1/knowledge/search endpoint."""
    response = await client.get("/api/v1/knowledge/search")
    assert response.status_code == 200
    data = response.json()
    assert isinstance(data, list)


@pytest.mark.asyncio
async def test_knowledge_api_stats(client):
    """Test GET /api/v1/knowledge/stats endpoint."""
    response = await client.get("/api/v1/knowledge/stats")
    assert response.status_code == 200
    data = response.json()
    assert "total_notes" in data
    assert data["total_notes"] > 0


@pytest.mark.asyncio
async def test_knowledge_api_health(client):
    """Test GET /api/v1/knowledge/health endpoint."""
    response = await client.get("/api/v1/knowledge/health")
    assert response.status_code == 200
    data = response.json()
    assert "health_score" in data
    assert "total_notes" in data
    assert "orphaned_notes" in data
    assert "orphaned_list" in data
    assert "broken_links" in data
    assert "broken_links_list" in data
    assert "missing_frontmatter" in data


@pytest.mark.asyncio
async def test_knowledge_api_tree(client):
    """Test GET /api/v1/knowledge/tree endpoint."""
    response = await client.get("/api/v1/knowledge/tree")
    assert response.status_code == 200
    data = response.json()
    assert isinstance(data, list)


@pytest.mark.asyncio
async def test_config_api_endpoints(client):
    """Test GET, POST, and PUT /api/v1/config endpoints."""
    # GET
    get_res = await client.get("/api/v1/config")
    assert get_res.status_code == 200
    cfg = get_res.json()
    assert "provider" in cfg or "ai_provider" in cfg

    # POST (SettingsPanel shape)
    post_res = await client.post(
        "/api/v1/config",
        json={
            "provider": "Anthropic",
            "model": "Claude 3.5 Sonnet",
            "agent_steps": 45,
            "agent_timeout": 240,
            "log_level": "DEBUG",
        },
    )
    assert post_res.status_code == 200
    updated = post_res.json()
    assert updated["provider"] == "Anthropic"
    assert updated["model"] == "Claude 3.5 Sonnet"
    assert updated["agent_steps"] == 45
