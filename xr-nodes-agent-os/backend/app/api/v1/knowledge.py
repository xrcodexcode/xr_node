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


@router.get("/notes/{slug}")
async def get_note(slug: str) -> Dict[str, Any]:
    """Get note details by slug."""
    note = vault_service.get_note(slug)
    if not note:
        raise HTTPException(status_code=404, detail=f"Note '{slug}' not found in vault")
    return note


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
