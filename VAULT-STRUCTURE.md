# Vault Structure & Operational Map — NexusDB

This file is a structural map of the **NexusDB** knowledge vault. All operational rules, schema definitions, confidence thresholds, and decision contracts are governed by `AGENT.md`, `codex/governance.md`, `GEMINI.md`, `CODEX.md`, `CLAUDE.md`, and the rule files under the engine control planes (`.antigravity/rules/`, `codex/rules/`, `.claude/rules/`).

---

## 🏗️ Directory Layout

```text
nexusdb/
├── .antigravity/              # Gemini & Antigravity CLI control plane
│   ├── agents/                # Agent role definitions
│   ├── automations/           # Graph health & lifecycle scripts
│   ├── rules/                 # Tag, naming, and ingestion schemas
│   ├── schemas/               # YAML metadata contracts
│   ├── skills/                # Ingestion & study skills
│   ├── templates/             # Note architecture layouts
│   └── governance.md          # Operating guide
│
├── codex/ / .codex/           # OpenAI Codex engine control plane
│   ├── agents/                # Codex subagent definitions
│   ├── automations/           # Codex sidecar scripts
│   ├── rules/                 # Naming, tagging, linking, writing rules
│   ├── schemas/               # Frontmatter & note-type contracts
│   ├── skills/                # Codex specialized skills
│   ├── templates/             # Markdown templates
│   └── governance.md          # Codex operating & governance guide
│
├── claude/ / .claude/         # Anthropic Claude engine control plane
│   ├── agents/                # Claude subagent configurations
│   ├── rules/                 # Claude rule definitions
│   ├── schemas/               # Schema contracts
│   └── governance.md          # Claude operating guide
│
├── 01_RAW/                    # Input & ingestion branch
│   ├── CAPTURE/               # Immutable incoming originals & incubating ideas
│   ├── PROCESS/               # Active working copies & transformation workspace
│   └── SOURCE/                # Archived original sources post-ingestion
│
├── 02_NEW-KNOWLEDGE/          # Active study & understanding layer (learning status)
├── NOTES/                     # Polished evergreen synthesis & wiki notes
├── NODES/                     # Permanent atomic concept notes (FLAT; no subfolders)
├── 03_MOC/                    # Maps of Content navigation layer (4-level hierarchy)
│
├── tests/                     # Automated graph & schema test suite
│   ├── conftest.py
│   ├── test_graph.py
│   ├── test_ingestion.py
│   ├── test_links.py
│   ├── test_moc.py
│   └── test_tags.py
│
├── AGENT.md                   # Universal AI Agent operating guide
├── GEMINI.md                  # Gemini operating guide
├── CODEX.md                   # Codex operating guide
├── CLAUDE.md                  # Claude operating guide
├── HOME-BASE.md               # Vault home navigation MOC
├── README.md                  # Main repository README
├── VAULT-STRUCTURE.md         # Structural vault documentation (This file)
├── memory.md                  # Persistent agent memory log
├── config.yaml                # Semantic linker configuration
└── requirements.txt           # Python dependencies
```

---

## 🗺️ MOC Hierarchy

NexusDB uses a 4-level navigation hierarchy. All atomic knowledge stays flat inside `NODES/`; navigation is maintained through Maps of Content in `03_MOC/`.

```text
INDEX.md (moc_level: index)
  └── Domain MOC (moc_level: domain)        — one per knowledge domain
        └── Topic MOC (moc_level: topic)    — primary working level; links to nodes
              └── [Subtopic MOC]            — optional; created when topic overflows
                    └── NODE               — flat atomic note in NODES/
```

| Level | File Pattern | Node Links Allowed? | Target Capacity |
|---|---|---|---|
| `index` | `03_MOC/INDEX.md` | ❌ Never | Max 30 domains |
| `domain` | `03_MOC/<domain>/<domain>-moc.md` | ❌ Never | Max 50 topics |
| `topic` | `03_MOC/<domain>/<topic>-moc.md` | ✅ Yes | Max 100 nodes |
| `subtopic` | `03_MOC/<domain>/<subtopic>-moc.md` | ✅ Yes | Max 80 nodes |

*Flat MOCs directly in `03_MOC/` without `moc_level` metadata are treated as `moc_level: topic` by default.*

---

## 🧠 Knowledge Pipeline & Ingestion Stages

```text
External Input (Web / PDF / Transcript / Book)
                        │
                        ▼
            01_RAW/CAPTURE (Immutable source)
                        │
             (Create approved working copy)
                        ▼
            01_RAW/PROCESS (Transformation & cleaning)
                        │
            (User approval & schema review)
                        ▼
            02_NEW-KNOWLEDGE (Active study)
                        │
             (Move original source) ──► 01_RAW/SOURCE
                        │
            (Deep synthesis & understanding)
                        ├────────────────────────┐
                        ▼                        ▼
                 NOTES (Synthesis)       NODES (Flat atomic concepts)
                                                │
                                                ▼
                                         03_MOC (Navigation maps)
```

### Core Ingestion Principles:
1. **CAPTURE is Read-Only**: `01_RAW/CAPTURE` contains original inputs. Never edit, rename, overwrite, or relocate CAPTURE files without explicit approval.
2. **PROCESS is Writable Workspace**: Create a working copy inside `01_RAW/PROCESS`. All drafts, OCR corrections, and intermediate transformations must stay inside `01_RAW/PROCESS`.
3. **No Unapproved Stage Skipping**: Never move files across stages automatically without explicit user authorization.
4. **Original Archival**: Upon promotion to `02_NEW-KNOWLEDGE`, move the original source from `01_RAW/CAPTURE` to `01_RAW/SOURCE` with provenance hash logging.
5. **Atomic Extraction**: Convert synthesized knowledge into granular, single-concept notes inside `NODES/`.
6. **MOC Connection**: Connect every stable note in `NOTES/` and `NODES/` to an appropriate Map of Content in `03_MOC/`.

---

## 📂 Folder Responsibilities

| Directory | Layer Purpose | Write Policy |
|---|---|---|
| `01_RAW/CAPTURE` | Store raw captured info (PDFs, clips, transcripts) and incubating ideas | Read-only |
| `01_RAW/PROCESS` | Clean, format, and structure working copies during ingestion | Writable during processing |
| `01_RAW/SOURCE` | Archive original source files post-ingestion | Append/archive with approval |
| `02_NEW-KNOWLEDGE` | Active study space for exhaustive source-derived learning | Approved study drafts |
| `NOTES` | Polished evergreen synthesis notes | Curated stable notes |
| `NODES` | Flat atomic concept notes (1 concept per note) | Curated atomic notes (no subfolders) |
| `03_MOC` | Navigation layer (4-level hierarchy) | Curated or generated indexes |

---

## 🏷️ Controlled Tag & Linking Discipline

- **Controlled Vocabulary**: Use only tags registered in `rules/tagging.md`. Never invent ad hoc tags.
- **Typed Relations**: Use frontmatter `relations` block for machine-readable relationships (`depends_on`, `implements`, `causes`, `effect_of`, `example_of`, `instance_of`, `part_of`, `prerequisite_for`, etc.).
- **WikiLinks**: Format body links as standard Obsidian `[[Note Title]]` or `[[Note Title|Alias]]`.
- **Flat NODES**: Keep `NODES/` flat. Subdirectories inside `NODES/` are strictly prohibited.

---

## ✅ Quality Checklist

Before completing any knowledge work, verify:
- [ ] Frontmatter passes Schema v6.0.0 (`id`, `title`, `type`, `status`, `created`, `modified`, `review`, `confidence`, `tags`, `owner_moc`, `source`).
- [ ] Title matches canonical filename rules (`rules/naming.md`).
- [ ] Note contains exactly one atomic concept (if in `NODES/`).
- [ ] Reachable from an MOC in `03_MOC/`.
- [ ] All tags exist in `rules/tagging.md`.
- [ ] Source provenance and locator details are recorded.
- [ ] No duplicate canonical note exists in the vault.
