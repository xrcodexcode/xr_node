# XR-NODES Agent OS

> AI-native operating layer for personal knowledge, research, coding, automation, and computer interaction.

## Overview

XR-NODES Agent OS is a modular agent runtime that sits on top of the NexusDB knowledge vault. It transforms natural language requests into structured, multi-agent workflows that safely interact with your knowledge base, files, and tools.

## Architecture

```
User Request → Intent Detection → Task Planning → Agent Selection
→ Tool Execution → Knowledge Retrieval → Verification → Result
```

## Quick Start

```bash
# Create virtual environment
python -m venv .venv

# Activate (Windows)
.venv\Scripts\activate

# Install dependencies
pip install -e ".[dev]"

# Copy and configure environment
copy .env.example .env

# Initialize database
xr init

# Start the server
xr serve

# Check status
xr status
```

## Project Structure

```
xr-nodes-agent-os/
├── backend/              # Python FastAPI backend
│   └── app/
│       ├── core/         # Config, logging, errors, events
│       ├── database/     # SQLite models and migrations
│       ├── api/v1/       # REST API endpoints
│       ├── agents/       # Agent runtime (Phase 2)
│       ├── tools/        # Tool system (Phase 3)
│       ├── knowledge/    # Vault integration (Phase 4)
│       └── orchestration/ # Multi-agent orchestration (Phase 5)
├── frontend/             # Next.js dashboard (Phase 6)
├── cli/                  # CLI interface
├── config/               # Default configuration
├── tests/                # Test suite
├── docs/                 # Documentation
├── data/                 # SQLite database (gitignored)
└── logs/                 # Log files (gitignored)
```

## Phase 1 Status: Foundation ✅

- [x] FastAPI backend server
- [x] SQLite database with full schema
- [x] Configuration system
- [x] Structured logging
- [x] CLI skeleton
- [x] Health check API
- [x] Initial tests

## License

MIT
