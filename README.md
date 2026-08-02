# 🧠 NexusDB (Infinity Brain)

> **An AI-native Personal Knowledge Management (PKM) system designed for agentic workflows, atomic knowledge, and long-term thinking.**

NexusDB is an AI-first Personal Knowledge Management (PKM) system that combines **Zettelkasten**, **Maps of Content (MOCs)**, knowledge engineering, and autonomous AI agent control planes (`.antigravity`, `codex`, `claude`) to build a scalable, graph-connected knowledge repository for humans and Large Language Models (LLMs).

---

## ✨ Key Features

- 🧩 **Atomic Knowledge Architecture**: One note = one discrete reusable concept or claim.
- 🤖 **Multi-Engine AI Control Planes**: First-class support for Gemini (`.antigravity/`), Codex (`codex/` & `.codex/`), and Claude (`claude/` & `.claude/`).
- 🔄 **Automated Knowledge Lifecycle**: Immutable capture, controlled drafting, active study, synthesis, and atomic node extraction.
- 🗺️ **Hierarchical MOC Navigation**: 4-level navigation layer (`INDEX` → `Domain` → `Topic` → `Node`).
- 🔍 **Duplicate Prevention & Verification**: Deduplication checks and 11-gate note promotion.
- 🏷️ **Controlled Tag Discipline**: Strict vocabulary schema preventing taxonomy fragmentation.
- 📊 **Graph Health & Semantic Linking**: Automated graph maintenance, orphan detection, and semantic link suggestion engine.

---

## 🏗️ Repository Architecture

```text
nexusdb/
├── .antigravity/              # Gemini & Antigravity CLI control plane
│   ├── agents/                # Role specifications & instructions
│   ├── automations/           # Python graph & lifecycle automations
│   ├── rules/                 # Structural governance & tagging rules
│   ├── schemas/               # Frontmatter & note-type contracts
│   ├── skills/                # Specialized agent workflows
│   ├── templates/             # Note architecture layouts
│   └── governance.md          # Control plane operating guide
│
├── codex/ / .codex/           # OpenAI Codex engine control plane
│   ├── rules/                 # Naming, tagging, linking, writing rules
│   ├── schemas/               # Machine-readable schemas
│   ├── templates/             # Note templates
│   └── governance.md          # Codex operating & governance guide
│
├── claude/ / .claude/         # Anthropic Claude engine control plane
│   ├── rules/                 # Claude rule definitions
│   ├── schemas/               # Schema contracts
│   └── governance.md          # Claude operating guide
│
├── 01_RAW/                    # Ingestion branch
│   ├── CAPTURE/               # Immutable incoming originals
│   ├── PROCESS/               # Working copies & active drafts
│   └── SOURCE/                # Archived original sources
│
├── 02_NEW-KNOWLEDGE/          # Active study & understanding layer
├── NOTES/                     # Polished evergreen synthesis notes
├── NODES/                     # Flat atomic knowledge concepts (no subfolders)
├── 03_MOC/                    # Maps of Content navigation layer
│
├── tests/                     # Graph, link, tag, and ingestion test suite
├── AGENT.md                   # Universal AI Agent operating guide
├── GEMINI.md                  # Gemini operating guide
├── CODEX.md                   # Codex operating guide
├── CLAUDE.md                  # Claude operating guide
├── HOME-BASE.md               # Vault home navigation MOC
├── VAULT-STRUCTURE.md         # Structural vault documentation
├── memory.md                  # Persistent agent memory log
├── config.yaml                # Semantic linker configuration
└── requirements.txt           # Python dependencies
```

---

## 🧠 Knowledge Pipeline

```text
External Input (Web / Book / Paper / Video / Audio)
                        │
                        ▼
            01_RAW/CAPTURE (Immutable original)
                        │
                        ├── Approved working copy
                        ▼
            01_RAW/PROCESS (Drafting & cleaning)
                        │
                        ▼
                     REVIEW (Validation & schema checks)
                        │
                        ▼
            02_NEW-KNOWLEDGE (Active learning & study)
                        │
                        ├────────────────────────┐
                        ▼                        ▼
                 NOTES (Synthesis)       NODES (Flat atomic concepts)
                                                │
                                                ▼
                                         03_MOC (Navigation maps)

Archive Branch:
01_RAW/CAPTURE ──(upon approval)──► 01_RAW/SOURCE (Archive with hash & provenance)
```

---

## 📜 Governance & Standards

- **Universal Agent Guide**: [`AGENT.md`](AGENT.md)
- **Codex Governance**: [`codex/governance.md`](codex/governance.md)
- **Gemini Operating Guide**: [`GEMINI.md`](GEMINI.md)
- **Claude Operating Guide**: [`CLAUDE.md`](CLAUDE.md)
- **Structural Blueprint**: [`VAULT-STRUCTURE.md`](VAULT-STRUCTURE.md)

---

## ⚙️ Quick Start

### 1. Python Environment Setup
```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
```

### 2. Run Automated Health Checks
```powershell
pytest tests/
```

---

*Maintained by the Antigravity PKM Engine.*
