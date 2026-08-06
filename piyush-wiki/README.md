# Piyush Wiki Monorepo

Local-first, offline-first personal knowledge platform inspired by Wikipedia, Obsidian, and modern digital gardens.

## Workspace Layout

```text
piyush-wiki/
├── apps/
│   └── web/                # Next.js 14 Web Frontend
├── backend/                # FastAPI Python Backend Service
├── packages/
│   ├── types/              # Shared TypeScript definitions
│   ├── config/             # Shared ESLint/Tailwind configurations
│   └── markdown-parser/    # AST & Transclusion utilities
├── shared/                 # Universal constants & regex definitions
├── scripts/                # Indexing & Backup automation
└── docs/                   # Architecture specs & user guides
```

## Getting Started

1. **Backend Setup:**
   ```bash
   cd backend
   poetry install  # or: uv sync
   uv run uvicorn app.main:app --reload --port 8000
   ```

2. **Frontend Setup:**
   ```bash
   pnpm install
   pnpm dev:web
   ```

3. **Architecture Specification:**
   See `docs/architecture.md` for full technical design details.
