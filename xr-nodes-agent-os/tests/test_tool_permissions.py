"""Tests for permission manager policy (Phase A)."""
from __future__ import annotations

import pytest

from app.tools.base import BaseTool, RiskLevel, ToolResult
from app.tools.permissions import permission_manager


class _StubTool(BaseTool):
    def __init__(self, name: str, risk: RiskLevel):
        super().__init__(
            name=name,
            description="stub",
            risk_level=risk,
            parameters={"type": "object", "properties": {}},
        )

    async def execute(self, **kwargs):
        return ToolResult(tool_name=self.name, success=True, output="ok")


def test_low_risk_is_auto_approved():
    tool = _StubTool("file.read", RiskLevel.LOW)
    allowed, reason = permission_manager.check_permission(tool, {})
    assert allowed is True
    assert permission_manager.requires_approval(tool) is False


def test_high_risk_without_allowlist_is_denied_and_requires_approval():
    tool = _StubTool("shell.execute", RiskLevel.HIGH)
    allowed, reason = permission_manager.check_permission(tool, {"command": "echo hi"})
    assert allowed is False
    assert permission_manager.requires_approval(tool) is True
    assert "confirmation" in reason


def test_critical_risk_always_requires_approval():
    tool = _StubTool("file.mass_delete", RiskLevel.CRITICAL)
    allowed, _ = permission_manager.check_permission(tool, {})
    assert allowed is False
    assert permission_manager.requires_approval(tool) is True


def test_file_write_outside_workspace_requires_approval():
    tool = _StubTool("file.write", RiskLevel.MEDIUM)
    allowed, reason = permission_manager.check_permission(
        tool, {"path": "/etc/passwd"},
    )
    assert allowed is False
    assert "outside workspace" in reason
