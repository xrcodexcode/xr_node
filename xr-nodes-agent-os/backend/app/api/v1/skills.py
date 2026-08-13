"""API endpoint for installed Skills."""
from __future__ import annotations

from pathlib import Path
from typing import Any, Dict, List
from fastapi import APIRouter
import yaml

from app.core.config import settings

router = APIRouter(prefix="/skills", tags=["Skills"])


@router.get("", response_model=List[Dict[str, Any]])
async def list_skills() -> List[Dict[str, Any]]:
    """List all installed skills in the vault."""
    skills_dir = settings.vault_antigravity / "skills"
    skills = []

    if skills_dir.exists():
        for skill_folder in skills_dir.iterdir():
            if skill_folder.is_dir():
                skill_file = skill_folder / "SKILL.md"
                if skill_file.exists():
                    try:
                        text = skill_file.read_text(encoding="utf-8")
                        name = skill_folder.name
                        desc = "Custom vault skill"
                        if text.startswith("---"):
                            parts = text.split("---", 2)
                            if len(parts) >= 3:
                                fm = yaml.safe_load(parts[1]) or {}
                                name = fm.get("name", name)
                                desc = fm.get("description", desc)

                        skills.append({
                            "name": name,
                            "folder": skill_folder.name,
                            "description": desc,
                            "path": str(skill_file.relative_to(settings.VAULT_PATH)),
                            "status": "installed",
                        })
                    except Exception:
                        pass

    # Built-in system skills fallback list
    builtin_skills = [
        {"name": "local-rag", "folder": "local-rag", "description": "Zero-RAM file-based knowledge search using MOC navigation and backlinks.", "status": "active"},
        {"name": "atomization", "folder": "atomization", "description": "Extract Schema v4 atomic notes in NODES/ with controlled tagging.", "status": "active"},
        {"name": "biography-research", "folder": "biography-research", "description": "Research person timelines, claims, and controversies.", "status": "active"},
        {"name": "youtube-ingestion", "folder": "youtube-ingestion", "description": "Ingest YouTube transcripts into structured study notes.", "status": "active"},
        {"name": "code-auditor", "folder": "code-auditor", "description": "Static code analysis and security auditing.", "status": "active"},
    ]

    for b in builtin_skills:
        if not any(s["folder"] == b["folder"] for s in skills):
            skills.append({
                "name": b["name"],
                "folder": b["folder"],
                "description": b["description"],
                "path": f".antigravity/skills/{b['folder']}/SKILL.md",
                "status": b["status"],
            })

    return skills
