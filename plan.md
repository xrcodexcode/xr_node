# 🗺️ Master Plan & Vault Architecture Blueprint — NexusDB (Infinity Brain)

> **Status**: Active | **Version**: 6.1.0 | **Last Updated**: 2026-08-23  
> **Vault Owner**: User | **AI Engine**: Antigravity / Gemini CLI (with Codex & Claude interoperability)

---

## 🧭 Executive Summary

**NexusDB** is a hybrid **AI-Native Personal Knowledge Management (PKM)** system combining four proven knowledge engineering methodologies:
1. **Zettelkasten** — Flat, atomic concept notes in `NODES/` with strict single-idea boundaries.
2. **Maps of Content (MOC)** — A 4-tier hierarchical navigation network in `03_MOC/` preventing folder-traversal friction.
3. **PARA Methodology** — Clear boundaries for Active Areas (`AREAS/`) and Software Engineering Projects (`PROJECTS/`).
4. **Agentic Knowledge Lifecycle** — Stage-gated pipelines from raw capture (`01_RAW/`) to active study (`02_NEW-KNOWLEDGE/`) to evergreen synthesis (`NOTES/`) and automated health checks (`tests/`).

This document provides:
- The **recommended vault structure** tailored to Obsidian and AI agent workflows.
- The **end-to-end knowledge lifecycle pipeline**.
- The **operational roadmap & phase-by-phase execution plan**.
- **Governance, metadata contracts, and maintenance protocols**.

---

## 🏗️ Recommended Vault Structure

To eliminate folder-clutter in Obsidian while keeping apps, active study notes, atomic nodes, and personal areas neatly partitioned, the canonical layout is organized as follows:

```text
nexusdb/
│
├── 00_SYSTEM/                         # 🛠️ Meta, dashboards, and agent control planes
│   ├── .antigravity/                  # Gemini / Antigravity CLI control plane (rules, schemas, skills)
│   ├── .codex/ & codex/               # OpenAI Codex engine control plane
│   ├── .claude/ & claude/             # Anthropic Claude engine control plane
│   ├── .obsidian/                     # Obsidian workspace settings, plugins, hotkeys, themes
│   ├── HOME-BASE.md                   # Central root dashboard & daily entry point
│   ├── AGENT.md                       # Universal multi-agent operational contract
│   ├── GEMINI.md                      # Gemini & Antigravity CLI runtime guide
│   ├── CODEX.md                       # OpenAI Codex execution rules
│   ├── CLAUDE.md                      # Claude CLI execution rules
│   ├── VAULT-STRUCTURE.md             # Official structural reference map
│   └── plan.md                        # Master strategic & structural blueprint (This file)
│
├── 01_RAW/                            # 📥 Input & Ingestion Pipeline
│   ├── CAPTURE/                       # Immutable inbox (Web clips, raw PDFs, audio/video transcripts)
│   ├── PROCESS/                       # Scratchpad & active cleaning/OCR/formatting workspace
│   ├── SOURCE/                        # Archived original raw sources post-ingestion (immutable archive)
│   └── GITHUB/                        # Cloned external repos, raw reference codebases
│
├── 02_NEW-KNOWLEDGE/                  # 🔬 Active Learning & Deep Study Layer
│   ├── (Study Notes)                  # Comprehensive, high-fidelity source study notes (e.g. video breakdowns)
│   └── (Course Chapters)              # Multi-part structured curriculum notes (DSA, ML, Systems)
│
├── 03_MOC/                            # 🗺️ Maps of Content (Navigation Layer)
│   ├── INDEX.md                       # Tier-1 Master Vault Index (Max 30 domains)
│   ├── ai-ml-moc.md                   # Tier-2/3 Domain & Topic MOCs
│   ├── books-moc.md                   # Topic MOC for book syntheses
│   ├── study-moc.md                   # Topic MOC for academics & courses
│   ├── yt-moc.md                      # Topic MOC for video study notes
│   ├── people-moc.md                  # Entity MOC for profiles & biographies
│   └── _orphans.md                    # Auto-generated index of unconnected nodes
│
├── NODES/                             # 🧩 Permanent Atomic Knowledge (FLAT — NO SUBFOLDERS)
│   ├── *.md                           # Single-concept atomic notes (e.g., `Agentic RAG.md`, `bayesian-decision-making.md`)
│   └── (370+ Notes)                   # Strictly atomic: 1 note = 1 claim/concept/definition/method
│
├── NOTES/                             # 📚 Polished Evergreen Synthesis & Multi-Concept Wiki
│   ├── 48-laws-of-power.md            # Comprehensive synthesis documents combining multiple atomic nodes
│   └── (Syntheses)                    # Long-form evergreen essays, literature reviews, comprehensive guides
│
├── AREAS/                             # 🌐 Ongoing Life Spheres & Responsibilities (PARA)
│   ├── Career/                        # Professional development, resume, milestones
│   ├── Digital Life/                  # Security, hardware, backup protocols
│   ├── Finances/                      # Investments, wealth strategy, tax planning
│   ├── Health/                        # Nutrition, workouts, biohacking, medical records
│   ├── Home/                          # Household maintenance, logistics
│   ├── Learning/                      # Learning roadmap, skill trees
│   ├── Personal Development/          # Core habits, values, mindsets
│   └── Relationships/                 # Family, friends, network, CRM
│
├── ALWAYS-WITHIN-ME/                  # 💎 Core Axioms, Mental Anchors & Quotes
│   ├── EXAMPLES.md                    # Formative personal examples and life models
│   └── QUOTES/                        # Hand-curated impactful quotes and mantras
│
├── PROJECTS/ (or APPS/)               # 💻 Standalone Software Projects & Applications
│   ├── xr-nodes-agent-os/             # Multi-agent operating system backend/frontend
│   ├── lightrag-server/               # Local GraphRAG inference server
│   ├── piyush-wiki/                   # Custom Next.js / Vite wiki application
│   ├── nexusdb-web/                   # Web-based vault explorer
│   ├── explain/                       # Concept visualizer / explanatory UI
│   └── wikillm/                       # LLM-powered knowledge visualizer
│
└── tests/                             # 🧪 Automated Graph & Schema Test Suite
    ├── test_graph.py                  # Graph connectivity & orphan validation
    ├── test_ingestion.py              # Ingestion pipeline validation
    ├── test_links.py                  # Broken link detection
    ├── test_moc.py                    # MOC reachability verification
    └── test_tags.py                   # Controlled tag schema compliance
```

---

## 📊 Folder Responsibilities & Write Policies

| Directory | Layer Purpose | Write Policy | Read Tool / Method |
|---|---|---|---|
| `01_RAW/CAPTURE` | Immutable incoming raw material (clips, PDFs, transcripts) | Read-only by default; append only on capture | Direct file read |
| `01_RAW/PROCESS` | Intermediate transformation, formatting, translation workspace | Fully writable during ingestion | Agent working draft |
| `01_RAW/SOURCE` | Permanent archival of original captures with hash logs | Append/archive upon promotion approval | Archive reference |
| `02_NEW-KNOWLEDGE` | Active learning layer: high-depth study notes and transcripts | Writable for study notes & active learning | In-depth reading |
| `NODES/` | Flat permanent atomic concept notes (1 concept per note) | Strict template; schema-gated creation | Fast graph search |
| `NOTES/` | Evergreen multi-concept synthesis & wiki notes | Curated evergreen synthesis | Topic overview |
| `03_MOC/` | 4-tier navigation hierarchy linking domains to nodes | Curated & automated link indexing | Vault entry point |
| `AREAS/` | Personal domains of ongoing responsibility (PARA) | Human / Agent personal logs | Area review |
| `PROJECTS/` | Isolated codebases, apps, and software tools | Standard software development | Git / CLI |

---

## 🔄 The 5-Stage Knowledge Lifecycle

```text
 Stage 1: Capture          Stage 2: Process & Study        Stage 3: Atomize & Synthesize      Stage 4: Link & Index        Stage 5: Maintain
┌─────────────────┐       ┌────────────────────────┐      ┌─────────────────────────────┐    ┌──────────────────────┐     ┌──────────────────┐
│  01_RAW/CAPTURE │ ────► │    01_RAW/PROCESS      │ ───► │   02_NEW-KNOWLEDGE          │ ─► │ NODES/ (Atomic)      │ ──► │ 03_MOC/ (Maps)   │
│  - Web Clipper  │       │    - Clean / Translate │      │   - High-fidelity study     │    │ NOTES/ (Synthesis)   │     │ - Graph Health   │
│  - YT Transcript│       │    - OCR & Structuring │      │   - Concept extraction      │    │                      │     │ - Orphan Audits  │
│  - PDF / Book   │       └────────────────────────┘      └─────────────────────────────┘    └──────────────────────┘     │ - Lint / Tests   │
└─────────────────┘                    │                                                                                  └──────────────────┘
                                       ▼ (Upon Promotion)
                          ┌────────────────────────┐
                          │    01_RAW/SOURCE       │
                          │    (Archived Original) │
                          └────────────────────────┘
```

### Stage 1: Capture (`01_RAW/CAPTURE`)
- Incoming raw data lands here via Obsidian Web Clipper, YouTube transcript fetcher, PDF drop, or voice memos.
- **Rule**: Captures are immutable. Never modify or delete files here.

### Stage 2: Processing (`01_RAW/PROCESS`)
- Working copy created. Transcripts are cleaned, timestamped, translated (if Hindi/code-switched), and formatted.

### Stage 3: Deep Study Note (`02_NEW-KNOWLEDGE`)
- Creates a comprehensive, single-document study note preserving total context, frameworks, examples, and Mermaid diagrams.
- Once created and approved, the raw file in `01_RAW/CAPTURE` is archived to `01_RAW/SOURCE`.

### Stage 4: Atomization (`NODES/`) & Synthesis (`NOTES/`)
- Extract standalone atomic concepts into flat `NODES/*.md` (Schema v6.0.0 compliance).
- Synthesize major thematic overviews in `NOTES/*.md`.
- Connect each atomic node to its primary MOC (`owner_moc`) and related nodes.

### Stage 5: Navigation & Graph Maintenance (`03_MOC/` & `tests/`)
- Update domain/topic MOCs with newly extracted nodes.
- Run automated link checks, tag validations, and graph health reports.

---

## 🗺️ 4-Tier MOC (Map of Content) Navigation Architecture

Navigation in NexusDB is graph-driven, eliminating deep folder nesting.

```text
Level 1: Master Index (03_MOC/INDEX.md)
   │
   ├── Level 2: Domain MOCs (e.g. ai-ml-moc.md, study-moc.md, books-moc.md)
   │      │
   │      └── Level 3: Topic MOCs (e.g. prompt-engineering-moc.md, neural-network-moc.md)
   │             │
   │             └── Level 4: Atomic Nodes (e.g. [[Direct Preference Optimization]], [[FlashAttention]])
```

| MOC Tier | Role | Target Capacity | Node Links Allowed? |
|---|---|---|---|
| **Tier 1: Master Index** | `03_MOC/INDEX.md` | Max 30 domains | ❌ Only links to Domain MOCs |
| **Tier 2: Domain MOC** | e.g. `ai-ml-moc.md` | Max 50 topics | ❌ Only links to Topic MOCs |
| **Tier 3: Topic MOC** | e.g. `agent-loops-moc.md` | Max 100 nodes | ✅ Direct links to `NODES/*.md` |
| **Tier 4: Subtopic MOC** | Overflow/Sub-area | Max 80 nodes | ✅ Direct links to `NODES/*.md` |

---

## 🏷️ Controlled Tag Taxonomy

Every note must follow the controlled tag vocabulary defined in `.antigravity/rules/tagging.md`. **Never invent ad-hoc tags.**

```yaml
# 1. Discovery Facets:
tags: [beginner, advanced, comparison, case-study, implementation, reference, history, decision, example, checklist, open-question, contrarian]

# 2. Permanent Source Tags (Never remove):
tags: [yt, podcast, book, article, paper, transcript, web-clip]

# 3. Domain Classifiers:
tags: [ai, ml, llm, psychology, productivity, philosophy, business, study, research, writing, tools, habits, strategy, leadership, self-improvement, dsa, engineering, manufacturing, innovation, risk, general, power, biography]

# 4. Meta Tags:
tags: [moc, draft]
```

---

## 📋 Frontmatter Schema (Standard v6.0.0 / Schema v4)

Every note in `NODES/`, `NOTES/`, and `02_NEW-KNOWLEDGE/` must declare valid YAML frontmatter:

```yaml
---
id: "b8453f6e-16a2-4a4b-9721-a5cf2bcf9f60" # UUID v4; immutable
title: "Agentic RAG Architecture"          # Matches filename exactly
type: atomic-note                          # atomic-note | literature-note | evergreen-note | moc | project | journal
status: verified                           # draft | processing | learning | active | verified | evergreen | archived
domain: ai                                 # Canonical domain from tagging rules
source_type: youtube                       # book | article | paper | youtube | podcast | web-clip | transcript | course | null
created: 2026-08-23
updated: 2026-08-23
review: 2026-11-23                         # Next scheduled review date
confidence: 95                             # 0 to 100
aliases: ["Agentic Retrieval", "Agent-Driven RAG"]
tags: [ai, llm, implementation, advanced, yt]
owner_moc: "ai-ml-moc"                     # Primary MOC title
sources:
  - title: "Mastering Agentic RAG Systems"
    url: "https://youtube.com/watch?v=example"
    locator: "14:25 - Query Routing"
related:
  - "[[Retrieval Augmented Generation]]"
  - "[[GraphRAG]]"
  - "[[Contextual Retrieval]]"
schema_version: 4
---
```

---

## 🎯 Step-by-Step Implementation Roadmap

### Phase 1: Vault Organization & Structural Hygiene 🧹
- [ ] Establish canonical directories: `01_RAW/`, `02_NEW-KNOWLEDGE/`, `NODES/`, `NOTES/`, `03_MOC/`, `AREAS/`.
- [ ] Group standalone apps (`xr-nodes-agent-os`, `lightrag-server`, `piyush-wiki`, `explain`, `wikillm`, `nexusdb-web`) into a unified `PROJECTS/` or `APPS/` folder to clean root namespace.
- [ ] Consolidate root configuration and documentation (`HOME-BASE.md`, `INDEX.md`, `AGENT.md`, `GEMINI.md`, `CODEX.md`, `CLAUDE.md`).
- [ ] Verify `.gitignore` excludes `.venv/`, `node_modules/`, `dist/`, `.pytest_cache/`, `*.log`, and credentials.

### Phase 2: Ingestion Backlog Atomization ⚙️
- [ ] Audit the 120 study notes in `02_NEW-KNOWLEDGE/` (e.g. JavaScript series, ML chapters, Python masteries, YouTube deep dives).
- [ ] Systematically extract high-value concepts into `NODES/` (target: 500+ rich atomic notes).
- [ ] Ensure every extracted node has:
  - Clear **Definition / Core Claim**.
  - **Mechanisms / Detailed Explanation**.
  - **Real-World Examples / Code**.
  - **Backlinks** (`[[Related Concept]]`).
  - Strict Schema v6.0.0 frontmatter.

### Phase 3: MOC Expansion & Orphan Resolution 🗺️
- [ ] Regenerate `03_MOC/INDEX.md` as the master 4-tier index.
- [ ] Ensure all 373+ nodes in `NODES/` have a valid `owner_moc`.
- [ ] Create missing Topic MOCs for dense clusters:
  - `javascript-mastery-moc.md`
  - `system-design-agentic-moc.md`
  - `life-philosophy-habits-moc.md`
- [ ] Run `test_graph.py` and `test_moc.py` to achieve **0 orphaned active notes**.

### Phase 4: Automation & Multi-Agent Optimization 🤖
- [ ] Verify Antigravity CLI skills (`ingestion`, `atomization`, `local-rag`, `maintenance-agent`, `review-agent`).
- [ ] Validate cross-engine synchronization between `.antigravity/`, `.codex/`, and `.claude/`.
- [ ] Schedule recurring automated audits via pytest:
  ```powershell
  pytest tests/test_graph.py tests/test_links.py tests/test_tags.py
  ```

### Phase 5: Obsidian UI & Visual Experience ✨
- [ ] Configure Obsidian **Dataview** queries in `HOME-BASE.md` and MOCs:
  - Notes reviewed recently.
  - Notes scheduled for review this week (`review <= date(today)`).
  - Newly atomized nodes.
- [ ] Configure **Obsidian Graph View** filters (color-coding by tag: `#ai`, `#ml`, `#habits`, `#power`, `#philosophy`).
- [ ] Set up **Canvas** boards for visual brainstorming connecting `NODES/`.

---

## 🛡️ Non-Negotiable Invariants

1. **Zero Silent Deletions**: Never delete notes or raw content. Archive with logged approval.
2. **Immutable CAPTURE**: Never edit original files in `01_RAW/CAPTURE`.
3. **Flat NODES Layer**: Subdirectories inside `NODES/` are strictly prohibited.
4. **MOC Reachability**: Every permanent note must be reachable from at least one MOC in `03_MOC/`.
5. **Strict Provenance**: Every extracted atomic note must retain source links, author, timestamp, or locator.
6. **No Ad-Hoc Tags**: Only use tags from `.antigravity/rules/tagging.md`.

---

## 🚀 Quick Reference Commands

| Action | Command / Procedure |
|---|---|
| **Run Vault Health Check** | `pytest tests/` |
| **Search Local Knowledge** | Use `local-rag` skill or grep patterns across `03_MOC/` & `NODES/` |
| **Ingest Video / Text** | Place in `01_RAW/CAPTURE/` → Run `youtube-ingestion` or `knowledge-agent` |
| **Atomize Study Note** | Run `atomization` skill targeting note in `02_NEW-KNOWLEDGE/` |
| **Review & Promote Note** | Run `review-agent` to validate Schema v6.0.0 & 11-gate check |

---
*NexusDB Master Plan — Designed for human insight and autonomous AI intelligence.*
