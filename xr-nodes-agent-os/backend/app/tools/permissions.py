"""PermissionManager — Risk classification and approval decision engine."""
from __future__ import annotations

from typing import Dict, Any, Tuple
from app.core.config import settings
from app.core.logging import get_logger
from app.tools.base import BaseTool, RiskLevel

logger = get_logger(__name__)


class PermissionManager:
    """Manages risk level checks and human-in-the-loop approval decisions."""

    def __init__(self):
        self.auto_approve_tools = {
            "file.read", "file.search", "directory.list",
            "knowledge.search", "git.status", "git.diff", "web.search", "web.fetch"
        }
        self.require_approval_tools = {
            "shell.execute", "file.delete", "knowledge.delete", "git.commit"
        }

    def check_permission(self, tool: BaseTool, kwargs: Dict[str, Any], agent_name: Optional[str] = None) -> Tuple[bool, str]:
        """Check whether tool call is permitted or requires explicit approval.
        
        Returns:
            (allowed: bool, reason: str)
        """
        # Critical risk tools always require approval
        if tool.risk_level == RiskLevel.CRITICAL:
            return False, f"Action '{tool.name}' classified as CRITICAL risk — user approval required."

        # High risk operations check
        if tool.risk_level == RiskLevel.HIGH and tool.name in self.require_approval_tools:
            return False, f"Action '{tool.name}' requires user confirmation."

        # Safe read operations
        if tool.risk_level == RiskLevel.LOW or tool.name in self.auto_approve_tools:
            return True, "Auto-approved LOW risk operation."

        # Medium risk workspace file write check
        if tool.name == "file.write":
            path_str = str(kwargs.get("path", ""))
            # Ensure writing inside vault or project root
            if str(settings.VAULT_PATH) in path_str or str(settings.project_root) in path_str:
                return True, "Auto-approved workspace file write."
            return False, "File write outside workspace requires approval."

        return True, "Approved by policy."


permission_manager = PermissionManager()
