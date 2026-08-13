"""Tests for Tool Registry, Security Permissions, and Execution."""
from __future__ import annotations

import pytest
from app.tools.executor import tool_executor
from app.tools.registry import tool_registry


def test_tool_registry_has_default_tools():
    """Registry should contain standard tools."""
    tools = tool_registry.list_tools()
    names = [t.name for t in tools]
    assert "file.read" in names
    assert "file.write" in names
    assert "directory.list" in names
    assert "shell.execute" in names
    assert "knowledge.search" in names


@pytest.mark.asyncio
async def test_file_read_tool():
    """Test file.read execution."""
    res = await tool_executor.execute_tool("file.read", {"path": "README.md"})
    assert res.success is True
    assert res.output is not None
    assert len(res.output) > 0


@pytest.mark.asyncio
async def test_shell_tool_denylist():
    """Test shell command denylist and permission checks block dangerous commands."""
    # Test permission manager block via executor
    res = await tool_executor.execute_tool("shell.execute", {"command": "rm -rf /"})
    assert res.success is False
    assert "Permission denied" in res.error

    # Test direct ShellExecuteTool denylist
    from app.tools.shell import ShellExecuteTool
    shell_tool = ShellExecuteTool()
    tool_res = await shell_tool.execute(command="rm -rf /")
    assert tool_res.success is False
    assert "Forbidden command" in tool_res.error



@pytest.mark.asyncio
async def test_tools_api_endpoints(client):
    """Test GET /api/v1/tools endpoint."""
    response = await client.get("/api/v1/tools")
    assert response.status_code == 200
    data = response.json()
    assert isinstance(data, list)
    assert len(data) >= 5
