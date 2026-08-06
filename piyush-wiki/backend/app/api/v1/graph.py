from fastapi import APIRouter
from backend.app.services.vault_service import vault_service

router = APIRouter(prefix="/graph", tags=["Knowledge Graph"])

@router.get("")
async def get_knowledge_graph():
    """Returns nodes and edges for the Knowledge Graph."""
    return vault_service.get_graph()
