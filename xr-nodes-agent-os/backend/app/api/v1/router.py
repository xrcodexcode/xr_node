"""API v1 router — combines all sub-routers."""
from fastapi import APIRouter

from app.api.v1 import health, agents, tools, knowledge, tasks, skills, events, hooks

api_router = APIRouter()

api_router.include_router(health.router)
api_router.include_router(agents.router)
api_router.include_router(tools.router)
api_router.include_router(knowledge.router)
api_router.include_router(tasks.router)
api_router.include_router(skills.router)
api_router.include_router(events.router)
api_router.include_router(hooks.router)


