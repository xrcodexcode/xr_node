"""Database migrations — create tables and seed initial data."""
from __future__ import annotations

import json
from datetime import datetime, timezone
from uuid import uuid4

from app.core.logging import get_logger
from app.database.engine import engine
from app.database.models import Base, Agent, ModelConfig

logger = get_logger(__name__)


# ── Initial agent definitions ─────────────────────────────────────────────────
SEED_AGENTS = [
    {
        "id": str(uuid4()),
        "name": "research-agent",
        "description": "Researches topics, searches sources, extracts claims, compares sources, identifies uncertainty, generates citations.",
        "type": "research",
    },
    {
        "id": str(uuid4()),
        "name": "knowledge-agent",
        "description": "Processes raw information, extracts concepts, creates atomic knowledge, identifies duplicates, creates links, updates MOCs.",
        "type": "knowledge",
    },
    {
        "id": str(uuid4()),
        "name": "atomizer-agent",
        "description": "Converts large information into individual atomic notes following vault schema.",
        "type": "knowledge",
    },
    {
        "id": str(uuid4()),
        "name": "linker-agent",
        "description": "Discovers and creates relationships between knowledge nodes.",
        "type": "knowledge",
    },
    {
        "id": str(uuid4()),
        "name": "review-agent",
        "description": "Verifies correctness, duplication, missing context, citations, structure, and contradictions.",
        "type": "review",
    },
    {
        "id": str(uuid4()),
        "name": "coding-agent",
        "description": "Inspects repositories, understands code, writes code, runs tests, debugs, and explains changes.",
        "type": "coding",
    },
    {
        "id": str(uuid4()),
        "name": "planner-agent",
        "description": "Converts high-level objectives into executable multi-step task plans.",
        "type": "planning",
    },
    {
        "id": str(uuid4()),
        "name": "maintenance-agent",
        "description": "Detects duplicate notes, broken links, orphan nodes, stale content, and generates maintenance reports.",
        "type": "maintenance",
    },
    {
        "id": str(uuid4()),
        "name": "writing-agent",
        "description": "Generates synthesis documents, articles, summaries, and wiki notes from atomic nodes.",
        "type": "writing",
    },
]

SEED_MODELS = [
    {
        "id": str(uuid4()),
        "provider": "openai",
        "model_name": "gpt-4o-mini",
        "display_name": "GPT-4o Mini",
        "is_default": True,
        "capabilities_json": json.dumps(["classification", "summarization", "general"]),
    },
    {
        "id": str(uuid4()),
        "provider": "openai",
        "model_name": "gpt-4o",
        "display_name": "GPT-4o",
        "is_default": False,
        "capabilities_json": json.dumps(["research", "coding", "review", "reasoning"]),
    },
    {
        "id": str(uuid4()),
        "provider": "anthropic",
        "model_name": "claude-sonnet-4-5",
        "display_name": "Claude Sonnet 4.5",
        "is_default": False,
        "capabilities_json": json.dumps(["research", "coding", "review", "reasoning"]),
    },
    {
        "id": str(uuid4()),
        "provider": "google",
        "model_name": "gemini-2.5-flash",
        "display_name": "Gemini 2.5 Flash",
        "is_default": False,
        "capabilities_json": json.dumps(["classification", "summarization", "general"]),
    },
    {
        "id": str(uuid4()),
        "provider": "ollama",
        "model_name": "llama3.1",
        "display_name": "Llama 3.1 (Local)",
        "is_default": False,
        "capabilities_json": json.dumps(["general", "summarization"]),
    },
]


async def run_migrations() -> None:
    """Create all tables if they don't exist."""
    logger.info("Running database migrations...")
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    logger.info("Database tables created successfully.")


async def seed_database() -> None:
    """Insert initial agent definitions and model configs if tables are empty."""
    from app.database.engine import async_session_factory
    from sqlalchemy import select, func

    async with async_session_factory() as session:
        # Check if agents already seeded
        result = await session.execute(select(func.count()).select_from(Agent))
        agent_count = result.scalar_one()

        if agent_count == 0:
            logger.info("Seeding %d agents...", len(SEED_AGENTS))
            now = datetime.now(timezone.utc)
            for agent_data in SEED_AGENTS:
                agent = Agent(
                    id=agent_data["id"],
                    name=agent_data["name"],
                    description=agent_data["description"],
                    type=agent_data["type"],
                    status="active",
                    created_at=now,
                    updated_at=now,
                )
                session.add(agent)
            await session.commit()
            logger.info("Agents seeded.")
        else:
            logger.info("Agents already seeded (%d found).", agent_count)

        # Check if models already seeded
        result = await session.execute(select(func.count()).select_from(ModelConfig))
        model_count = result.scalar_one()

        if model_count == 0:
            logger.info("Seeding %d model configs...", len(SEED_MODELS))
            now = datetime.now(timezone.utc)
            for model_data in SEED_MODELS:
                model = ModelConfig(
                    id=model_data["id"],
                    provider=model_data["provider"],
                    model_name=model_data["model_name"],
                    display_name=model_data["display_name"],
                    is_default=model_data["is_default"],
                    capabilities_json=model_data["capabilities_json"],
                    created_at=now,
                )
                session.add(model)
            await session.commit()
            logger.info("Models seeded.")
        else:
            logger.info("Models already seeded (%d found).", model_count)


async def initialize_database() -> None:
    """Run migrations and seed data."""
    await run_migrations()
    await seed_database()
