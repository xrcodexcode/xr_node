"""API v1 router — combines all sub-routers."""
from fastapi import APIRouter

from app.api.v1 import (
    agents,
    approvals,
    creator,
    events,
    health,
    hooks,
    knowledge,
    skills,
    tasks,
    tools,
    websocket,
    config_api,
)

api_router = APIRouter()

api_router.include_router(health.router)
api_router.include_router(agents.router)
api_router.include_router(tools.router)
api_router.include_router(knowledge.router)
api_router.include_router(tasks.router)
api_router.include_router(skills.router)
api_router.include_router(events.router)
api_router.include_router(hooks.router)
api_router.include_router(approvals.router)
api_router.include_router(creator.router)
api_router.include_router(websocket.router)
api_router.include_router(config_api.router)
