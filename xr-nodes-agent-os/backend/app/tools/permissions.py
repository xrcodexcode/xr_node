"""PermissionManager — Risk classification and approval decision engine."""
from __future__ import annotations

from typing import Any, Dict, Optional, Tuple
from app.core.config import settings
from app.core.logging import get_logger
from app.tools.base import BaseTool, RiskLevel

logger = get_logger(__name__)


class PermissionManager:
    """Manages risk level checks and human-in-the-loop approval decisions."""

    def __init__(self) -> None:
        self.auto_approve_tools = {
            "file.read", "file.search", "directory.list",
            "knowledge.search", "git.status", "git.diff", "web.search", "web.fetch"
        }
        self.require_approval_tools = {
            "shell.execute", "file.delete", "knowledge.delete", "git.commit"
        }

    # ------------------------------------------------------------------- policy
    def check_permission(
        self,
        tool: BaseTool,
        kwargs: Dict[str, Any],
        agent_name: Optional[str] = None,
    ) -> Tuple[bool, str]:
        """Check whether a tool call is permitted or requires approval.

        Returns ``(allowed, reason)``. When ``allowed`` is False but
        :meth:`requires_approval` is True for the tool, the caller should
        persist an :class:`Approval` row and pause — that's a "needs approval"
        outcome, not a hard denial.

        Returns:
            (allowed: bool, reason: str)
        """
        # Critical risk tools always require approval
        if tool.risk_level == RiskLevel.CRITICAL:
            return False, f"Action '{tool.name}' classified as CRITICAL risk — user approval required."

        # High risk operations that always need explicit confirmation
        if tool.risk_level == RiskLevel.HIGH and tool.name in self.require_approval_tools:
            return False, f"Action '{tool.name}' requires user confirmation."

        tool_norm = tool.name.replace("_", ".").lower()
        auto_approve_norm = {t.replace("_", ".").lower() for t in self.auto_approve_tools}

        # Safe read operations
        if tool.risk_level == RiskLevel.LOW or tool_norm in auto_approve_norm:
            return True, "Auto-approved LOW risk operation."

        # Medium risk workspace file write check
        if tool_norm == "file.write":
            path_str = str(kwargs.get("path", ""))
            from pathlib import Path
            target = Path(path_str)
            if not target.is_absolute():
                target = settings.VAULT_PATH / target
            try:
                target_resolved = target.resolve()
                vault_resolved = settings.VAULT_PATH.resolve()
                root_resolved = settings.project_root.resolve()
                if (
                    vault_resolved in target_resolved.parents
                    or target_resolved == vault_resolved
                    or root_resolved in target_resolved.parents
                    or target_resolved == root_resolved
                ):
                    return True, "Auto-approved workspace file write."
            except Exception:
                pass
            return False, "File write outside workspace requires approval."

        return True, "Approved by policy."

    def requires_approval(self, tool: BaseTool) -> bool:
        """True if ``check_permission`` denying this tool should suspend for
        human approval rather than fail outright."""
        return (
            tool.risk_level in (RiskLevel.HIGH, RiskLevel.CRITICAL)
            or tool.name in self.require_approval_tools
        )


permission_manager = PermissionManager()

