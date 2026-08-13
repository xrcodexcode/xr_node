"""Ingestion pipeline state manager: CAPTURE -> PROCESS -> NEW-KNOWLEDGE -> NODES/NOTES -> MOC."""
from __future__ import annotations

from pathlib import Path
from typing import Any, Dict, List
from app.core.config import settings


class KnowledgePipeline:
    """Tracks files across vault pipeline lifecycle stages."""

    def list_capture_inbox(self) -> List[Dict[str, Any]]:
        """List un-ingested files in 01_RAW/CAPTURE/."""
        capture_dir = settings.vault_capture
        if not capture_dir.exists():
            return []
        items = []
        for file_path in capture_dir.glob("*"):
            if file_path.is_file() and not file_path.name.startswith("."):
                items.append({
                    "name": file_path.name,
                    "path": str(file_path.relative_to(settings.VAULT_PATH)),
                    "size_bytes": file_path.stat().st_size
                })
        return items


knowledge_pipeline = KnowledgePipeline()
