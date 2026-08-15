# XR-NODES Agent OS — Feature Roadmap

User direction: **phased roadmap**, **real and working**, **all four providers optional** (OpenAI / Anthropic / Google / Ollama).

## Current state (scoped from the code)

| Layer | Status |
|---|---|
| Backend core (config, logging, events, errors) | ✅ works |
| Database + models (tasks, agents, steps, tools, memories, workflows, automations, approvals) | ✅ schema defined |
| CLI (`xr serve`, `xr init`, `xr status`, `xr task create/list/run`, `xr agents`, `xr doctor`) | ✅ works |
| API v1 router (health, agents, tasks, tools, knowledge, skills, events, hooks) | �️ mostly stubs — no streaming, no tool-call loop, no approvals wired |
| Model router (4 providers, task-type routing) | ⚠️ providers exist, fallback always to OpenAI if missing key, no graceful "no key" UX |
| Agent runner | ⚠️ single-shot model call — **no tool-calling loop, no memory read/write** |
| Planner | ⚠️ rule-based keyword match — falls back to one step for non-research queries |
| Orchestrator | ⚠️ runs plan steps but doesn't actually invoke tools, no retry on step failure |
| Tool registry (filesystem, git, shell, web, knowledge) | ⚠️ registered but **not invoked from the agent loop** |
| Memory manager | ⚠️ write-only; no semantic search / retrieval |
| Knowledge / vault | ✅ indexing + search works |
| Frontend (Next/Vite + React + 11 components) | �️ components exist, mostly isolated, no chat panel, no live updates |

## Roadmap — 4 phases, each shippable

### Phase A — Make the agent loop real (1 file per subsystem)
Goal: `POST /agents/{name}/run` actually invokes tools, retries, and streams tokens.

- `agents/runner.py` — tool-calling loop (parse model tool calls → permission check → `ToolExecutor.execute_tool` → append result → re-prompt until done / max-steps / no-tool-call). Honor `agents.max_steps` / `max_retries` from config.
- `agents/base.py` — pass `tools` list to model via provider-agnostic tool schema; new `BaseAgent.execute(...)` returning `AgentResult` with `tool_calls` populated.
- `tools/executor.py` — keep current contract; add structured `ToolCall` row write to DB per execution.
- `security/approval.py` — wire to `Approval` table; on `require_approval_for` actions, persist row + return "needs_approval" status; CLI/API can resolve later.
- `models/router.py` — graceful "no key" mode: if a provider has no key, return a stub `ModelResponse` with `output="[no API key for {provider}]"` + `usage=0` so the UI keeps working offline. Each provider class checks env var presence.
- `orchestration/orchestrator.py` — persist `TaskStep` lifecycle transitions, retry failed steps once, emit events on each transition.
- Tests: `test_agent_loop.py` (mock provider), `test_tool_permissions.py`, `test_approval.py`.

### Phase B — Planner + memory + retrieval (the smart layer)
Goal: planner understands any query, memory persists + retrieves, RAG over vault works.

- `orchestration/planner.py` — call `model_router.generate` with a small prompt that returns JSON `TaskPlan`. Fallback to keyword rules only if no provider available.
- `memory/manager.py` — `recall(query, top_k, type)` using TF-IDF on `content` for v1 (no extra deps), returns ranked memories. `add_short_term` / `add_episodic` / `add_knowledge` unchanged.
- `memory/embeddings.py` — new tiny module: hash-based 384-dim pseudo-embeddings via `hashlib.sha384` projected to floats, so we get cosine similarity with **zero new dependencies**. Pluggable so a real embedder (sentence-transformers) can drop in later.
- `knowledge/retrieval.py` — new RAG over `VaultService`: query → embed → cosine-rank notes → return top-K snippets + source locators. Used by `knowledge-agent` and `research-agent`.
- New endpoint: `POST /knowledge/search` (already exists but unused), `GET /memory/recent?agent_id=…`.
- Tests: `test_memory_recall.py`, `test_planner.py`, `test_rag.py`.

### Phase C — CLI + API surface for users (the "Youtuber demo" layer)
Goal: you can `xr chat`, run workflows from CLI, see live activity.

- CLI: `xr chat` (REPL — read prompt → POST to `/tasks` or `/agents/.../run` → stream tokens via SSE → print), `xr workflow run <name>`, `xr agent run <name> "<prompt>"`, `xr memory recall "<query>"`, `xr vault search "<query>"`, `xr approvals list|approve|deny <id>`.
- API: `POST /agents/{name}/stream` — Server-Sent Events, emits `agent.started`, `token`, `tool_call.started`, `tool_call.completed`, `agent.completed`. Reuses existing `event_bus`.
- API: `POST /workflows/run/{name}`, `POST /approvals/{id}/decide`.
- `core/events.py` — already has `event_bus`; expose a pubsub for SSE.
- Tests: `test_chat_cli.py`, `test_sse_stream.py`.

### Phase D — Frontend dashboard polish (Phase 6 finish)
Goal: live, pretty, useful dashboard.

- New component: `ChatPanel.tsx` — message list + input, calls `/agents/{name}/stream`, renders tokens + tool-call badges + status pills.
- Wire existing components to real API data: `ActivityFeed` → `/events` stream, `AgentOutputConsole` → current task output, `KnowledgeGraph` → `/knowledge/graph`, `MemoryGalaxy` → `/memory/recent`, `ToolsView` (new) → `/tools`.
- Routing: `react-router-dom` between Chat / Tasks / Agents / Knowledge / Memory / Tools.
- Polished empty states + skeleton loaders.

## Files I'll touch (summary)

```
backend/app/agents/runner.py          # Phase A
backend/app/agents/base.py            # Phase A
backend/app/agents/registry.py        # Phase B (re-load on demand)
backend/app/models/{router,base,openai,anthropic,google,ollama}_provider.py  # Phase A
backend/app/orchestration/{orchestrator,planner}.py                          # Phase B
backend/app/memory/{manager,embeddings}.py                                   # Phase B
backend/app/knowledge/{vault,retrieval}.py                                   # Phase B
backend/app/security/approval.py         # Phase A
backend/app/api/v1/{agents,tasks,knowledge,memory,approvals,events}.py       # Phase C
backend/app/core/events.py               # Phase C
cli/xr.py                                # Phase C
frontend/src/{App.tsx, components/*}     # Phase D
tests/*                                  # All phases
README.md + CHANGELOG.md                 # After each phase
```

## Out of scope (say the word if you want them)

- Voice I/O (Whisper / TTS)
- Browser automation (Playwright control)
- Scheduled automations (cron runner) — schema exists, runner not built
- Plugin marketplace UI
- Multi-user / auth
- Real embeddings model (sentence-transformers)

## Approval points

- End of Phase A → demo `xr agent run research-agent "..."` end-to-end with a tool call
- End of Phase B → demo RAG recall + planner understanding a non-research query
- End of Phase C → demo `xr chat` REPL + SSE stream
- End of Phase D → demo dashboard with live data
