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
    """List all installed skills in .antigravity/skills/."""
    skills_dir = settings.vault_antigravity / "skills"
    skills: List[Dict[str, Any]] = []

    fallback_descriptions = {
        "agents": "Displays and lists all active agents, subagents, and execution rules.",
        "atomization": "Extracts schema-compliant atomic notes into NODES/ with controlled tagging.",
        "biography-research": "Researches person timelines, claims, and controversies.",
        "code-auditor": "Security audit and static analysis subagent.",
        "ingestion": "Ingests EPUB books and extracts atomic knowledge notes.",
        "knowledge-agent": "Converts raw captures into structured, traceable vault notes.",
        "local-rag": "Zero-RAM file-based knowledge search using MOC navigation and backlinks.",
        "maintenance-agent": "Audits link integrity, tag discipline, and graph health.",
        "planner-agent": "Deconstructs complex user prompts into step-by-step agent plans.",
        "review-agent": "Audits boundary stage notes for schema compliance before promotion.",
        "writing-agent": "Generates synthesis articles and wiki notes based on atomic nodes.",
        "youtube-ingestion": "Transforms YouTube video transcripts into study notes in 02_NEW-KNOWLEDGE.",
        "youtube-ingestion-agent": "Agentic YouTube transcript conversion pipeline with translation & Mermaid diagrams."
    }

    if skills_dir.exists():
        for skill_folder in sorted(skills_dir.iterdir()):
            if skill_folder.is_dir():
                skill_file = skill_folder / "SKILL.md"
                name = skill_folder.name
                desc = fallback_descriptions.get(name, "Custom vault skill")

                if skill_file.exists():
                    try:
                        text = skill_file.read_text(encoding="utf-8")
                        if text.startswith("---"):
                            parts = text.split("---", 2)
                            if len(parts) >= 3:
                                fm = yaml.safe_load(parts[1]) or {}
                                name = fm.get("name", name)
                                desc = fm.get("description", desc)
                    except Exception:
                        pass

                skills.append({
                    "name": name,
                    "folder": skill_folder.name,
                    "description": desc,
                    "path": f".antigravity/skills/{skill_folder.name}/SKILL.md",
                    "status": "installed",
                })

    return skills
