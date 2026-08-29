"""Atomic Note CRUD operations following Frontmatter Schema v4."""
from __future__ import annotations

from datetime import datetime
from uuid import uuid4
from typing import Any, Dict, List, Optional
import re
import yaml

from app.core.config import settings
from app.core.errors import ValidationError
from app.knowledge.vault import vault_service


def create_atomic_node(
    title: str,
    explanation: str,
    claim_or_definition: Optional[str] = None,
    domain: str = "general",
    tags: Optional[List[str]] = None,
    owner_moc: str = "General MOC",
    related: Optional[List[str]] = None,
    sources: Optional[List[str]] = None,
) -> Dict[str, Any]:
    """Create a new Schema v4 compliant atomic node in NODES/."""
    node_uuid = str(uuid4())
    today = datetime.now().strftime("%Y-%m-%d")

    fm_dict = {
        "id": node_uuid,
        "title": title,
        "type": "atomic-note",
        "status": "verified",
        "domain": domain,
        "source_type": None,
        "created": today,
        "updated": today,
        "review": today,
        "confidence": 95,
        "version": 1,
        "aliases": [],
        "tags": tags or ["concept"],
        "owner_moc": owner_moc,
        "sources": sources or [],
        "related": related or [],
        "schema_version": 4,
    }

    yaml_header = yaml.dump(fm_dict, sort_keys=False).strip()

    body_parts = [
        "---",
        yaml_header,
        "---",
        "",
        f"# {title}",
        "",
        "## Claim or Definition",
        claim_or_definition or explanation[:200],
        "",
        "## Explanation",
        explanation,
        "",
        "## Related Notes",
    ]

    for rel in (related or []):
        body_parts.append(f"- [[{rel}]]")

    body_parts.extend(["", "## Source", "Original thought / Derived via Agent OS"])
    full_markdown = "\n".join(body_parts)

    clean_filename = re.sub(r'[\/:*?"<>|]', '', title).strip() or "Untitled-Node"
    file_path = settings.vault_nodes / f"{clean_filename}.md"
    if file_path.exists():
        raise ValidationError(f"Node file '{file_path.name}' already exists in NODES/.")

    file_path.parent.mkdir(parents=True, exist_ok=True)
    file_path.write_text(full_markdown, encoding="utf-8")

    # Refresh vault index
    vault_service.index_vault()
    slug = clean_filename.lower().replace(" ", "-")
    return vault_service.get_note(slug) or {
        "slug": slug,
        "title": title,
        "filename": file_path.name,
        "status": "created",
    }
