"""API endpoints for Vault Automation Hooks & Triggers."""
from __future__ import annotations

from typing import Any, Dict, List, Optional
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from app.core.config import settings
from app.knowledge.automations import automations_wrapper

router = APIRouter(prefix="/hooks", tags=["Hooks"])

# Predefined vault hooks from .antigravity/rules/automation-hooks.md
HOOKS_REGISTRY = [
    {
        "id": "on_note_created",
        "name": "Note Creation Hook",
        "event_trigger": "knowledge.node_created",
        "description": "Triggered when a new atomic note is created in NODES/. Validates schema v4, tags, and owner MOC.",
        "script": "validate_tags.py",
        "status": "active",
        "execution_mode": "async",
        "last_run": "2026-08-13 19:35:00",
        "trigger_count": 42,
    },
    {
        "id": "on_capture_ingested",
        "name": "Raw Capture Ingestion Hook",
        "event_trigger": "capture.file_added",
        "description": "Triggered when new material arrives in 01_RAW/CAPTURE/. Runs deduplication and extraction.",
        "script": "duplicate_detector.py",
        "status": "active",
        "execution_mode": "async",
        "last_run": "2026-08-13 18:20:00",
        "trigger_count": 18,
    },
    {
        "id": "on_daily_maintenance",
        "name": "Daily Vault Graph Audit Hook",
        "event_trigger": "cron.daily_0000",
        "description": "Scans for broken wikilinks, orphan nodes, tag schema violations, and stale review dates.",
        "script": "graph_health.py",
        "status": "active",
        "execution_mode": "scheduled",
        "last_run": "2026-08-13 00:00:00",
        "trigger_count": 120,
    },
    {
        "id": "on_moc_sync",
        "name": "MOC Automatic Indexing Hook",
        "event_trigger": "moc.rebuild_requested",
        "description": "Regenerates structural MOC index sections when new atomic concepts are added.",
        "script": "generate_mocs.py",
        "status": "active",
        "execution_mode": "event_driven",
        "last_run": "2026-08-13 19:10:00",
        "trigger_count": 65,
    },
]


@router.get("", response_model=List[Dict[str, Any]])
async def list_hooks() -> List[Dict[str, Any]]:
    """List all registered vault automation hooks."""
    return HOOKS_REGISTRY


@router.post("/{hook_id}/trigger")
async def trigger_hook(hook_id: str) -> Dict[str, Any]:
    """Manually trigger an automation hook."""
    hook = next((h for h in HOOKS_REGISTRY if h["id"] == hook_id), None)
    if not hook:
        raise HTTPException(status_code=404, detail=f"Hook '{hook_id}' not found.")

    # Execute bound script via automations wrapper
    script_name = hook["script"].replace(".py", "")
    res = await automations_wrapper.run_automation(script_name)
    return {
        "hook_id": hook_id,
        "triggered": True,
        "script": hook["script"],
        "result": res,
    }
