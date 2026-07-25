# Project: Steve Jobs in Exile Ingestion

## Architecture
Ingestion pipeline for NexusDB knowledge graph:
1. Capture Source File: `01_RAW/CAPTURE/Steve Jobs in Exile.md` -> archived to `01_RAW/SOURCE/Steve Jobs in Exile.md`
2. Study Note Creation: `02_NEW-KNOWLEDGE/Steve Jobs in Exile - Study Note.md` (Schema v4)
3. Atomic Nodes: `NODES/<Concept Title>.md` (5 nodes: `Capital Abundance Trap`, `Inverted Power Hierarchy`, `Perfectionism Execution Trap`, `Working Code Paradigm`, `Channel Stuffing Vulnerability`)
4. Navigation / MOC Creation & Updates: `03_MOC/steve-jobs-moc.md` and links in `03_MOC/people-moc.md`, `03_MOC/yt-moc.md`, `03_MOC/books-moc.md`, `HOME-BASE.md`
5. Archiving: Moved source file to `01_RAW/SOURCE/Steve Jobs in Exile.md`

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| 1 | Exploration & Governance Validation | Inspect raw source, tag schemas, node schemas, MOC structures | None | DONE |
| 2 | Study Note Ingestion | Create Schema v4 study note in 02_NEW-KNOWLEDGE/ | M1 | DONE |
| 3 | Atomic Node Extraction | Extract 5 atomic concept nodes in NODES/ | M2 | DONE |
| 4 | MOC Linking & Archiving | Create Steve Jobs MOC, update parents, move source to 01_RAW/SOURCE/ | M3 | DONE |
| 5 | Verification & Audit | Validate schema compliance, tag schema, flat structure, link integrity | M4 | DONE |

## Interface Contracts
- Frontmatter Schema v4: id (UUID v4), type, status, tags (controlled), owner_moc, etc.
- Tag Schema: All tags exist in `.antigravity/rules/tagging.md` (12 discovery tags).
- Node Schema: Flat structure in `NODES/`, no subdirectories, single concept per note.

## Code Layout
- `01_RAW/SOURCE/` — Permanent archived raw sources (`Steve Jobs in Exile.md`)
- `02_NEW-KNOWLEDGE/` — Active study notes (`Steve Jobs in Exile - Study Note.md`)
- `NODES/` — Atomic concept notes (flat, evergreen: 5 concept files)
- `03_MOC/` — Navigation Maps of Content (`steve-jobs-moc.md`, `people-moc.md`, `yt-moc.md`, `books-moc.md`)
- `.antigravity/rules/` — Governance rules (tagging.md, node-schema.md, etc.)
