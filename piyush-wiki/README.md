# Piyush Wiki

Piyush Wiki is a single-user, local-first, offline-first personal knowledge platform. It blends the semantic organization of Wikipedia, the plain-text longevity of Obsidian, and modern hybrid AI search capabilities (RAG).

---

## 🏗 System Architecture & Technology Stack

- **Frontend**: Next.js 14 App Router, React 18, TypeScript, Tailwind CSS, TanStack Query, Zustand, TipTap
- **Backend**: FastAPI (Python 3.11+), Uvicorn
- **Database**: SQLite (SQLAlchemy / aiosqlite)
- **Vector Database**: ChromaDB
- **Package Manager**: `pnpm`
- **Testing**: Vitest (Frontend unit), Pytest (Backend unit/integration), Playwright (E2E)
- **Linting & Formatting**: ESLint, Ruff, Prettier, Black
- **Git Hooks**: Husky

---

## 📁 Repository Directory Structure

```
piyush-wiki/
├── apps/
│   └── web/                   # Next.js 14 App Router client application
│       ├── src/
│       │   ├── app/           # App Router pages & layouts
│       │   ├── components/    # UI component foundation & providers
│       │   ├── env.ts         # Frontend environment validation
│       │   └── styles/        # CSS variables & Tailwind globals
│       ├── vitest.config.ts   # Frontend unit test configuration
│       └── playwright.config.ts # E2E test configuration
├── backend/                   # FastAPI Python backend service
│   ├── app/
│   │   ├── api/v1/            # API endpoints (health, status)
│   │   ├── core/              # Config (Pydantic Settings), logging, error handling
│   │   ├── db/                # SQLite session & ChromaDB manager
│   │   └── main.py            # FastAPI application entrypoint
│   ├── tests/                 # Pytest backend test suite
│   └── pyproject.toml         # Python dependencies, Black & Ruff settings
├── packages/                  # Monorepo TypeScript shared packages
│   ├── types/                 # Domain, API, and system types (@piyush-wiki/types)
│   ├── shared/                # Shared utilities, logger, error classes (@piyush-wiki/shared)
│   └── design-tokens/         # Wikipedia-style design tokens (@piyush-wiki/design-tokens)
├── scripts/                   # Developer automation scripts (.ps1)
├── docs/                      # Technical specifications & architecture requirements
├── tests/                     # Monorepo level E2E test scenarios
│   └── e2e/                   # Playwright E2E test specs
├── assets/                    # Brand assets & graphics
├── .vscode/                   # Recommended settings, launch configs & extensions
├── .husky/                    # Git pre-commit & pre-push hooks
├── .editorconfig              # Code style formatting rules
├── .gitignore                 # Monorepo ignore configuration
└── package.json               # Root monorepo workspace configuration
```

---

## ⚡ Quick Start & Installation

### Prerequisites

1. **Node.js**: `v20.0.0` or higher
2. **Python**: `v3.11` or higher
3. **pnpm**: Installed globally or executable via `npx pnpm`

### Installation

```bash
# Clone repository
git clone <repository-url>
cd piyush-wiki

# Install Node dependencies
npx pnpm install

# Setup Python Virtual Environment
cd backend
python -m venv .venv
# On Windows PowerShell:
.venv\Scripts\Activate.ps1
# On POSIX:
source .venv/bin/activate

# Install Python backend dependencies
pip install fastapi uvicorn pydantic pydantic-settings sqlalchemy aiosqlite chromadb python-frontmatter networkx pytest pytest-asyncio httpx ruff black
```

---

## 🚀 Available Commands

### Development

```bash
# Run Next.js frontend application (http://localhost:3000)
npx pnpm dev

# Run FastAPI backend service (http://localhost:8000)
npx pnpm dev:backend
```

### Building

```bash
# Build Next.js production web application
npx pnpm build
```

### Code Quality & Formatting

```bash
# Lint frontend code
npx pnpm lint

# Format code across monorepo (Prettier)
npx pnpm format

# Run TypeScript type check across all workspace packages
npx pnpm typecheck
```

### Testing

```bash
# Run all unit tests (Vitest + Pytest)
npx pnpm test

# Run frontend unit tests only (Vitest)
npx pnpm test:web

# Run backend tests only (Pytest)
npx pnpm test:backend

# Run End-to-End tests (Playwright)
npx pnpm test:e2e
```

---

## 🛠 Development Workflow

1. **Type discipline**: Shared domain models and API contracts must be defined in `@piyush-wiki/types`.
2. **Environment configuration**: Environment variables are validated on startup via `Pydantic Settings` (Backend) and `env.ts` (Frontend).
3. **Design System**: Use CSS variables and Tailwind utility classes backed by tokens defined in `@piyush-wiki/design-tokens`.
4. **Git Safety**: Husky automatically runs `eslint` and `pytest` on pre-commit, and `build` validation on pre-push.
