from fastapi import APIRouter
from backend.app.services.vault_service import vault_service

categories_router = APIRouter(prefix="/categories", tags=["Categories"])
tags_router = APIRouter(prefix="/tags", tags=["Tags"])
stats_router = APIRouter(prefix="/stats", tags=["Stats"])
vault_router = APIRouter(prefix="/vault", tags=["Vault"])

@categories_router.get("")
async def get_categories():
    return vault_service.get_categories()

@tags_router.get("")
async def get_tags():
    return vault_service.get_tags()

@stats_router.get("")
async def get_stats():
    return vault_service.get_stats()

@vault_router.post("/sync")
async def sync_vault():
    return vault_service.index_vault()
