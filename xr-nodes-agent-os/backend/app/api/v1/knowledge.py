"""API endpoints for Knowledge System."""
from __future__ import annotations

from typing import Any, Dict, List, Optional
from fastapi import APIRouter, HTTPException, Query
from pydantic import BaseModel

from app.knowledge.automations import automations_wrapper
from app.knowledge.nodes import create_atomic_node
from app.knowledge.pipeline import knowledge_pipeline
from app.knowledge.vault import vault_service

router = APIRouter(prefix="/knowledge", tags=["Knowledge"])


class CreateNodeRequest(BaseModel):
    title: str
    explanation: str
    claim_or_definition: Optional[str] = None
    domain: str = "general"
    tags: Optional[List[str]] = None
    owner_moc: str = "General MOC"
    related: Optional[List[str]] = None
    sources: Optional[List[str]] = None


@router.get("/search")
async def search_knowledge(
    q: Optional[str] = Query(None, description="Search query"),
    tag: Optional[str] = Query(None, description="Filter tag"),
    folder: Optional[str] = Query(None, description="Filter folder"),
) -> List[Dict[str, Any]]:
    """Search knowledge notes across vault."""
    return vault_service.search(query=q or "", tag=tag, folder=folder)


class SaveNoteRequest(BaseModel):
    raw_text: str


@router.get("/tree")
async def get_vault_file_tree() -> List[Dict[str, Any]]:
    """Get complete hierarchical tree of vault folders and notes."""
    return vault_service.get_file_tree()


@router.get("/notes/{slug}")
async def get_note(slug: str) -> Dict[str, Any]:
    """Get note details by slug."""
    note = vault_service.get_note(slug)
    if not note:
        raise HTTPException(status_code=404, detail=f"Note '{slug}' not found in vault")
    return note


@router.put("/notes/{slug}")
async def save_note(slug: str, req: SaveNoteRequest) -> Dict[str, Any]:
    """Save/update markdown content of a note directly."""
    try:
        return vault_service.save_note(slug, req.raw_text)
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))


@router.get("/notes/{slug}/local-graph")
async def get_note_local_graph(slug: str) -> Dict[str, Any]:
    """Get 1-hop local graph neighborhood for a note."""
    return vault_service.get_local_graph(slug)


@router.post("/nodes")
async def create_node(req: CreateNodeRequest) -> Dict[str, Any]:
    """Create a new atomic note in NODES/ following Schema v4."""
    try:
        return create_atomic_node(
            title=req.title,
            explanation=req.explanation,
            claim_or_definition=req.claim_or_definition,
            domain=req.domain,
            tags=req.tags,
            owner_moc=req.owner_moc,
            related=req.related,
            sources=req.sources,
        )
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))


@router.get("/graph")
async def get_knowledge_graph(refresh: bool = Query(False, description="Force vault reindex")) -> Dict[str, Any]:
    """Get vault knowledge graph nodes and edges with real-time refresh capability."""
    return vault_service.get_graph(force_reindex=refresh)


@router.get("/stats")
async def get_knowledge_stats() -> Dict[str, Any]:
    """Get overall vault knowledge statistics."""
    return vault_service.get_stats()


@router.get("/inbox")
async def list_capture_inbox() -> List[Dict[str, Any]]:
    """List un-ingested raw captures in 01_RAW/CAPTURE/."""
    return knowledge_pipeline.list_capture_inbox()


@router.post("/automations/{name}")
async def run_automation(name: str) -> Dict[str, Any]:
    """Run an existing Python automation script (e.g. validate_tags, graph_health)."""
    return await automations_wrapper.run_automation(name)


def _convert_markdown_to_html(md_text: str) -> str:
    """Safely convert Markdown to HTML using available library or built-in fallback."""
    try:
        import markdown
        return markdown.markdown(md_text)
    except ImportError:
        pass
    try:
        from markdown_it import MarkdownIt
        return MarkdownIt().render(md_text)
    except ImportError:
        pass
    import html as html_lib
    escaped = html_lib.escape(md_text)
    escaped = re.sub(r"^### (.*?)$", r"<h3>\1</h3>", escaped, flags=re.MULTILINE)
    escaped = re.sub(r"^## (.*?)$", r"<h2>\1</h2>", escaped, flags=re.MULTILINE)
    escaped = re.sub(r"^# (.*?)$", r"<h1>\1</h1>", escaped, flags=re.MULTILINE)
    escaped = re.sub(r"\*\*(.*?)\*\*", r"<strong>\1</strong>", escaped)
    escaped = re.sub(r"\*(.*?)\*", r"<em>\1</em>", escaped)
    paragraphs = escaped.split("\n\n")
    return "".join(f"<p>{p.replace(chr(10), '<br>')}</p>" for p in paragraphs if p.strip())


@router.get("/health")
async def get_vault_health() -> Dict[str, Any]:
    """Perform health checks on the vault."""
    import re
    from datetime import date
    vault_service.ensure_indexed()
    notes = list(vault_service.notes_cache.values())
    total_notes_per_folder = {}
    missing_frontmatter = []
    stale_review = []
    duplicate_titles = []
    titles_seen = set()
    today_str = date.today().isoformat()

    for note in notes:
        folder = note.get("folder", "root")
        total_notes_per_folder[folder] = total_notes_per_folder.get(folder, 0) + 1

        fm = note.get("frontmatter")
        if not fm:
            missing_frontmatter.append(note.get("title") or note["slug"])
        else:
            review_date = str(fm.get("review", ""))
            if review_date and review_date < today_str:
                stale_review.append(note.get("title") or note["slug"])

        title = note.get("title", "")
        if title in titles_seen:
            duplicate_titles.append(title)
        else:
            titles_seen.add(title)

    orphaned_notes = []
    for slug, note in vault_service.notes_cache.items():
        links = vault_service.backlinks_map.get(slug, [])
        if not links:
            orphaned_notes.append(note.get("title") or slug)

    broken_wikilinks = []
    for note in notes:
        content = note.get("content", "")
        for match in re.findall(r"\[\[(.*?)\]\]", content):
            target = match.split("|")[0].strip()
            target_slug = target.lower().replace(" ", "-")
            if not vault_service.get_note(target_slug) and not vault_service.get_note(target):
                broken_wikilinks.append(f"{note.get('title') or note['slug']} -> [[{target}]]")

    score = 100 - len(orphaned_notes) - len(broken_wikilinks) - len(missing_frontmatter)
    score = max(0, min(100, score))

    return {
        "health_score": score,
        "score": score,
        "overall_health_score": score,
        "total_notes": len(notes),
        "total_notes_per_folder": total_notes_per_folder,
        "orphaned_notes": len(orphaned_notes),
        "orphaned_list": orphaned_notes,
        "broken_links": len(broken_wikilinks),
        "broken_links_list": broken_wikilinks,
        "missing_frontmatter": len(missing_frontmatter),
        "missing_frontmatter_list": missing_frontmatter,
        "stale_reviews": len(stale_review),
        "stale_reviews_list": stale_review,
        "duplicate_title_candidates": duplicate_titles,
    }


from fastapi.responses import HTMLResponse, PlainTextResponse


@router.get("/notes/{slug}/export")
async def export_note(slug: str, format: str = "html"):
    """Export note as HTML or MD."""
    note = vault_service.get_note(slug)
    if not note:
        raise HTTPException(status_code=404, detail="Note not found")

    content = note.get("content", "")
    if format == "html":
        html = _convert_markdown_to_html(content)
        styled_html = f"<html><head><style>body {{ font-family: sans-serif; max-width: 800px; margin: auto; padding: 20px; }}</style></head><body>{html}</body></html>"
        return HTMLResponse(content=styled_html)
    elif format == "md":
        return PlainTextResponse(content=content)
    else:
        raise HTTPException(status_code=400, detail="Unsupported format")
