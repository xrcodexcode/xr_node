from fastapi import APIRouter, Query, HTTPException
from typing import Optional, List
from pydantic import BaseModel
from backend.app.services.vault_service import vault_service

router = APIRouter(prefix="/notes", tags=["Notes"])

class SaveNotePayload(BaseModel):
    content: str
    title: Optional[str] = None

@router.get("", response_model=List[dict])
async def list_notes(
    category: Optional[str] = None,
    tag: Optional[str] = None,
    q: Optional[str] = None
):
    """Lists notes with optional category, tag, or text search filtering."""
    return vault_service.get_all_notes(category=category, tag=tag, query=q)

@router.get("/{slug}")
async def get_note(slug: str):
    """Returns single note details, content, backlinks, and related articles."""
    note = vault_service.get_note(slug)
    if not note:
        raise HTTPException(status_code=404, detail=f"Note with slug '{slug}' not found.")
    return note

@router.post("/{slug}")
@router.put("/{slug}")
async def save_note(slug: str, payload: SaveNotePayload):
    """Saves updated note content to disk in the Obsidian vault."""
    updated = vault_service.save_note(slug=slug, content=payload.content, title=payload.title)
    return updated
