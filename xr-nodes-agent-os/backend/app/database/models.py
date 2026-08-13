"""SQLAlchemy ORM models for the XR-NODES Agent OS.

These tables store operational state (tasks, agents, tools, events, etc.).
The Markdown vault remains the source of truth for knowledge content.
"""
from __future__ import annotations

from datetime import datetime, timezone
from uuid import uuid4

from sqlalchemy import (
    Boolean,
    Column,
    DateTime,
    Float,
    ForeignKey,
    Integer,
    String,
    Text,
)
from sqlalchemy.orm import DeclarativeBase, relationship


def _utcnow() -> datetime:
    return datetime.now(timezone.utc)


def _new_id() -> str:
    return str(uuid4())


class Base(DeclarativeBase):
    pass


class Agent(Base):
    __tablename__ = "agents"

    id = Column(String, primary_key=True, default=_new_id)
    name = Column(String, nullable=False, unique=True, index=True)
    description = Column(Text)
    type = Column(String, nullable=False, default="general")
    status = Column(String, nullable=False, default="active")
    config_json = Column(Text)  # Full YAML/JSON agent definition
    created_at = Column(DateTime, nullable=False, default=_utcnow)
    updated_at = Column(DateTime, nullable=False, default=_utcnow, onupdate=_utcnow)

    # Relationships
    tasks = relationship("TaskStep", back_populates="agent")


class Task(Base):
    __tablename__ = "tasks"

    id = Column(String, primary_key=True, default=_new_id)
    title = Column(String, nullable=False)
    description = Column(Text)
    status = Column(
        String, nullable=False, default="created",
        comment="created|planning|ready|running|waiting|verifying|completed|failed|cancelled",
    )
    priority = Column(String, default="normal", comment="low|normal|high|critical")
    created_by = Column(String, default="user")
    current_agent_id = Column(String, ForeignKey("agents.id"), nullable=True)
    plan_json = Column(Text)   # Serialized task plan
    result_json = Column(Text) # Serialized task result
    error = Column(Text)
    token_usage = Column(Integer, default=0)
    created_at = Column(DateTime, nullable=False, default=_utcnow)
    started_at = Column(DateTime, nullable=True)
    completed_at = Column(DateTime, nullable=True)

    # Relationships
    steps = relationship("TaskStep", back_populates="task", cascade="all, delete-orphan")
    tool_calls = relationship("ToolCall", back_populates="task", cascade="all, delete-orphan")


class TaskStep(Base):
    __tablename__ = "task_steps"

    id = Column(String, primary_key=True, default=_new_id)
    task_id = Column(String, ForeignKey("tasks.id"), nullable=False, index=True)
    step_index = Column(Integer, nullable=False)
    agent_id = Column(String, ForeignKey("agents.id"), nullable=True)
    status = Column(
        String, nullable=False, default="pending",
        comment="pending|running|completed|failed|skipped",
    )
    action = Column(String, nullable=False)
    input_json = Column(Text)
    output_json = Column(Text)
    error = Column(Text)
    started_at = Column(DateTime, nullable=True)
    completed_at = Column(DateTime, nullable=True)

    # Relationships
    task = relationship("Task", back_populates="steps")
    agent = relationship("Agent", back_populates="tasks")


class ToolCall(Base):
    __tablename__ = "tool_calls"

    id = Column(String, primary_key=True, default=_new_id)
    task_id = Column(String, ForeignKey("tasks.id"), nullable=True, index=True)
    step_id = Column(String, ForeignKey("task_steps.id"), nullable=True)
    agent_id = Column(String, ForeignKey("agents.id"), nullable=True)
    tool_name = Column(String, nullable=False, index=True)
    input_json = Column(Text)
    output_json = Column(Text)
    status = Column(
        String, nullable=False, default="pending",
        comment="pending|running|completed|failed|denied",
    )
    risk_level = Column(String, default="low", comment="low|medium|high|critical")
    approved_by = Column(String, nullable=True)
    duration_ms = Column(Integer, nullable=True)
    created_at = Column(DateTime, nullable=False, default=_utcnow)

    # Relationships
    task = relationship("Task", back_populates="tool_calls")


class EventLog(Base):
    __tablename__ = "events"

    id = Column(String, primary_key=True, default=_new_id)
    type = Column(String, nullable=False, index=True)
    source = Column(String)
    payload_json = Column(Text)
    created_at = Column(DateTime, nullable=False, default=_utcnow)


class ModelConfig(Base):
    __tablename__ = "models"

    id = Column(String, primary_key=True, default=_new_id)
    provider = Column(String, nullable=False, comment="openai|anthropic|google|ollama|custom")
    model_name = Column(String, nullable=False)
    display_name = Column(String)
    capabilities_json = Column(Text)
    is_default = Column(Boolean, default=False)
    config_json = Column(Text)
    created_at = Column(DateTime, nullable=False, default=_utcnow)


class Memory(Base):
    __tablename__ = "memories"

    id = Column(String, primary_key=True, default=_new_id)
    type = Column(
        String, nullable=False,
        comment="short_term|episodic|knowledge",
    )
    agent_id = Column(String, ForeignKey("agents.id"), nullable=True)
    task_id = Column(String, ForeignKey("tasks.id"), nullable=True)
    content = Column(Text, nullable=False)
    metadata_json = Column(Text)
    relevance_score = Column(Float, nullable=True)
    created_at = Column(DateTime, nullable=False, default=_utcnow)
    expires_at = Column(DateTime, nullable=True)


class Workflow(Base):
    __tablename__ = "workflows"

    id = Column(String, primary_key=True, default=_new_id)
    name = Column(String, nullable=False, unique=True)
    description = Column(Text)
    definition_json = Column(Text, nullable=False)
    status = Column(String, default="active")
    created_at = Column(DateTime, nullable=False, default=_utcnow)
    updated_at = Column(DateTime, nullable=False, default=_utcnow, onupdate=_utcnow)


class Automation(Base):
    __tablename__ = "automations"

    id = Column(String, primary_key=True, default=_new_id)
    workflow_id = Column(String, ForeignKey("workflows.id"), nullable=False)
    schedule = Column(String, nullable=True)  # Cron expression
    last_run = Column(DateTime, nullable=True)
    next_run = Column(DateTime, nullable=True)
    status = Column(String, default="active")
    created_at = Column(DateTime, nullable=False, default=_utcnow)

    workflow = relationship("Workflow")


class Approval(Base):
    __tablename__ = "approvals"

    id = Column(String, primary_key=True, default=_new_id)
    task_id = Column(String, ForeignKey("tasks.id"), nullable=True)
    tool_call_id = Column(String, ForeignKey("tool_calls.id"), nullable=True)
    action = Column(String, nullable=False)
    risk_level = Column(String, nullable=False)
    status = Column(
        String, default="pending",
        comment="pending|approved|denied|expired",
    )
    details_json = Column(Text)
    decided_by = Column(String, nullable=True)
    decided_at = Column(DateTime, nullable=True)
    created_at = Column(DateTime, nullable=False, default=_utcnow)
