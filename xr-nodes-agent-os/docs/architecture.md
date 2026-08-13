# XR-NODES Agent OS — Architecture

## System Overview

XR-NODES Agent OS is a modular AI agent runtime designed to orchestrate multiple specialized agents that collaborate on tasks while safely interacting with a personal knowledge vault.

## Architecture Diagram

```
                     ┌─────────────────────┐
                     │   Web Dashboard    │   (Phase 6)
                     └──────────┬──────────┘
                                │
                     ┌──────────┴──────────┐
                     │  FastAPI Gateway   │   REST API
                     └──────────┬──────────┘
                                │
          ┌─────────────────┼─────────────────┐
          │                 │                 │
┌─────────┴──┐  ┌─────────┴──┐  ┌─────────┴──┐
│ Agent       │  │ Tool        │  │ Knowledge   │
│ Runtime     │  │ Runtime     │  │ System      │
└────────────┘  └────────────┘  └──────┬─────┘
                                        │
                               ┌──────┴─────┐
                               │ NexusDB    │
                               │ Vault      │   Markdown Source of Truth
                               └────────────┘
```

## Technology Stack

| Layer | Technology |
|---|---|
| Backend | Python 3.11+, FastAPI, Pydantic |
| Database | SQLite via aiosqlite + SQLAlchemy |
| CLI | Click + Rich |
| Frontend | Next.js 14, React, TypeScript, Tailwind CSS (Phase 6) |
| Knowledge | Obsidian Markdown vault (NexusDB) |
| Models | OpenAI, Anthropic, Google, Ollama (model-agnostic) |

## Core Design Principles

1. **Simple before sophisticated** — No Kubernetes, no microservices, no vector databases unless genuinely required.
2. **Source of truth** — NexusDB Markdown vault remains the canonical knowledge layer.
3. **Modular agents** — Agents are independently definable, replaceable, and composable.
4. **Model independence** — The system supports multiple LLM providers through a unified interface.
5. **Explicit permissions** — Agents never receive unnecessary capabilities.
6. **Observable execution** — Every action produces structured, queryable logs.
7. **Bounded autonomy** — No uncontrolled loops; max steps, max time, max retries.
8. **Human control** — Dangerous actions require explicit approval.

## Module Map

### Phase 1: Foundation (✅ Complete)
- `backend/app/core/config.py` — Layered configuration from .env + YAML
- `backend/app/core/logging.py` — Structured logging (JSON + colored text)
- `backend/app/core/errors.py` — Error hierarchy (AppError, NotFoundError, PermissionError, etc.)
- `backend/app/core/events.py` — In-process event bus
- `backend/app/database/` — SQLite engine, ORM models, migrations, seed data
- `backend/app/api/v1/health.py` — Health check and system status endpoints
- `backend/app/main.py` — FastAPI application factory with lifespan management
- `cli/xr.py` — CLI commands: `status`, `serve`, `init`, `agents`, `doctor`

### Phase 2: Agent Runtime (Next)
- Agent interface (BaseAgent ABC)
- Agent registry
- Model abstraction layer
- Model router
- Basic agent execution

### Phase 3: Tool System
- Tool interface (BaseTool ABC)
- Filesystem, shell, git, web, knowledge tools
- Permission system with risk classification

### Phase 4: Knowledge System
- Unified VaultService
- Knowledge search, node CRUD, MOC management
- Vault automation wrappers

### Phase 5: Orchestration
- Orchestrator
- Task state machine
- Multi-agent execution
- Agent communication

### Phase 6–10: Dashboard, Memory, Automation, Security, Plugins

## Database Schema

The SQLite database stores operational state only. Knowledge content stays in Markdown.

| Table | Purpose |
|---|---|
| `agents` | Registered agent definitions |
| `tasks` | Task lifecycle and state |
| `task_steps` | Individual steps within a task |
| `tool_calls` | Tool execution log |
| `events` | Event audit log |
| `models` | LLM provider configurations |
| `memories` | Short-term, episodic, and knowledge memory |
| `workflows` | Workflow definitions |
| `automations` | Scheduled workflow runs |
| `approvals` | Human-in-the-loop approval queue |

## Security Model

Risk levels for operations:

| Level | Policy | Examples |
|---|---|---|
| LOW | Auto-approve | file.read, directory.list, knowledge.search |
| MEDIUM | Workspace only | file.write (within vault), knowledge.create |
| HIGH | Requires confirmation | shell.execute, file.delete, git.commit |
| CRITICAL | Explicit approval | system commands, bulk operations |
