"""API endpoints for Vault Automation Hooks & Triggers."""
from __future__ import annotations

from pathlib import Path
from typing import Any, Dict, List
from fastapi import APIRouter, HTTPException

from app.core.config import settings
from app.knowledge.automations import automations_wrapper

router = APIRouter(prefix="/hooks", tags=["Hooks"])


def _get_real_hooks() -> List[Dict[str, Any]]:
    """Dynamically scan .antigravity/automations/*.py for all real vault hooks."""
    automations_dir = settings.vault_antigravity / "automations"
    hooks: List[Dict[str, Any]] = []

    descriptions = {
        "check_vault": "Scans vault structure against GEMINI.md governance rules and schema contracts.",
        "duplicate_detector": "Runs semantic similarity check to prevent duplicate notes in NODES/.",
        "generate_mocs": "Regenerates Map of Content index sections with live backlinks.",
        "gmail_ingest": "Ingests email captures from 01_RAW/capture into vault knowledge pipeline.",
        "graph_health": "Audits wikilink integrity, orphan nodes, broken links, and tag schema discipline.",
        "knowledge_pipeline": "Processes raw captured material into Schema v4 atomic notes.",
        "orphan_sweeper": "Identifies unlinked notes and links them to owner MOCs.",
        "promotion_enforcer": "Validates frontmatter schema before promoting notes to 02_NEW-KNOWLEDGE/.",
        "raw_lifecycle": "Manages capture file transitions from 01_RAW/capture to 01_RAW/source archive.",
        "validate_tags": "Enforces controlled tag vocabulary from tag-schema.md.",
        "authenticate": "Manages API authentication tokens for external vault connectors."
    }

    if automations_dir.exists():
        for py_file in sorted(automations_dir.glob("*.py")):
            script_id = py_file.stem
            hooks.append({
                "id": script_id,
                "name": f"{script_id.replace('_', ' ').title()} Hook",
                "event_trigger": f"vault.trigger.{script_id}",
                "description": descriptions.get(script_id, f"Real automation hook script bound to {py_file.name}"),
                "script": py_file.name,
                "status": "active",
                "execution_mode": "event_driven",
                "path": f".antigravity/automations/{py_file.name}",
            })

    return hooks


HOOKS_REGISTRY = _get_real_hooks()


@router.get("", response_model=List[Dict[str, Any]])
async def list_hooks() -> List[Dict[str, Any]]:
    """List all registered vault automation hooks from .antigravity/automations/."""
    return _get_real_hooks()


@router.post("/{hook_id}/trigger")
async def trigger_hook(hook_id: str) -> Dict[str, Any]:
    """Manually trigger a real automation hook script in .antigravity/automations/."""
    automations_dir = settings.vault_antigravity / "automations"
    py_file = automations_dir / f"{hook_id}.py"

    if not py_file.exists():
        raise HTTPException(status_code=404, detail=f"Hook script '{hook_id}.py' not found in .antigravity/automations/.")

    # Execute real python script via automations wrapper
    res = await automations_wrapper.run_automation(hook_id)
    return {
        "hook_id": hook_id,
        "triggered": True,
        "script": py_file.name,
        "result": res,
    }
