from fastapi import APIRouter
from backend.app.api.v1 import health, notes, graph, metadata

api_router = APIRouter()

api_router.include_router(health.router)
api_router.include_router(notes.router)
api_router.include_router(graph.router)
api_router.include_router(metadata.categories_router)
api_router.include_router(metadata.tags_router)
api_router.include_router(metadata.stats_router)
api_router.include_router(metadata.vault_router)
