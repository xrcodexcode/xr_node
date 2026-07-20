# Vault Structure

This file is a structural map only. All governance, enforcement, confidence thresholds, and decision rules live in GEMINI.md and the rule files under .antigravity/rules/. Do not treat this file as authoritative for AI behavior.

## Directory Layout

```
nexusdb/

.antigravity/
    archive/
        old-automations/
        old-rules/
        old-prompts/
        CLAUDE.md
    automations/
        lib/
            constants.py
            vault_paths.py
            vault_utils.py
        duplicate_detector.py
        generate_mocs.py
        raw_lifecycle.py
        validate_tags.py
    rules/
        frontmatter-schema.md
        ingestion-rules.md
        naming-rules.md
        node-schema.md
        tag-schema.md
    skills/
        biography-research/
        ingestion/
        youtube-ingestion/
    templates/
        atomic-note.md
        moc.md
    GEMINI.md

.antigravity_backup/

.agents/

.obsidian/

.venv/ (Flagged: tooling dependency living inside vault root — recommend migrating to a sibling repo. See audit log for date flagged.)

01_RAW/
    CAPTURE/    # Incubating ideas (status: incubating) also live here
    PROCESS/
    SOURCE/

02_NEW-KNOWLEDGE/

03_MOC/          # Flat MOCs; no INDEX.md or domain subfolders yet

NODES/          # Flat. No subfolders. One file = one atomic concept.

NOTES/

tests/
    conftest.py
    test_graph.py
    test_ingestion.py
    test_links.py
    test_moc.py
    test_tags.py

AGENT.md
config.yaml
GEMINI.md
GEMINI.md.backup
HOME-BASE.md
README.md
requirements.txt
VAULT-STRUCTURE.md
```

---

## MOC Hierarchy

The vault uses a 4-level navigation hierarchy. All knowledge stays flat in `NODES/`; only navigation is hierarchical.

```
INDEX.md (moc_level: index)
  └── Domain MOC (moc_level: domain)        — one per knowledge domain
        └── Topic MOC (moc_level: topic)    — primary working level; links to nodes
              └── [Subtopic MOC]            — optional; created when topic overflows
                    └── NODE               — flat atomic note in NODES/
```

| Level | File pattern | Node links? | Size limit |
|-------|-------------|-------------|------------|
| `index` | `03_MOC/INDEX.md` | ❌ Never | 30 domains |
| `domain` | `03_MOC/<domain>/<domain>-moc.md` | ❌ Never | 50 topics |
| `topic` | `03_MOC/<domain>/<topic>-moc.md` | ✅ Yes | 100 nodes |
| `subtopic` | `03_MOC/<domain>/<subtopic>-moc.md` | ✅ Yes | 80 nodes |

Existing flat MOCs in `03_MOC/` are treated as `moc_level: topic` by default.

---

## Knowledge Pipeline

```
Internet
    │
    ▼
Web Clipper
    │
    ▼
01_RAW/CAPTURE
(immutable source)
    │
(create working copy)
    ▼
01_RAW/PROCESS
(iterative processing)
    │
(user approval)
    ▼
02_NEW-KNOWLEDGE
    │
(move original source)
    ├──────────────► 01_RAW/SOURCE
    │
(user learns)
    ▼
NOTES (Wiki)
    │
(extract atomic knowledge)
    ▼
NODES
```

### Core Rule
A file must **not move or change state** from its current location until the user gives explicit permission.

### Hard Constraints
- **Never move or edit a file in CAPTURE automatically.**
- **Never edit or move the original file while processing.**
- **01_RAW/PROCESS is the only writable workspace during ingestion and refinement.**
- **Never assume approval.**
- **Never skip a stage.**

### Ingestion & Movement Rules
1. **CAPTURE is Read-Only:** `01_RAW/CAPTURE` is read-only. Original files are immutable and must never be edited, renamed, deleted, overwritten, or moved to `01_RAW/PROCESS`.
2. **Process Workspace Constraint:** Create a working copy inside `01_RAW/PROCESS`. All files created during processing (working copies, drafts, processed versions, temporary files, AI-generated outputs, intermediate revisions, supporting artifacts) must remain inside `01_RAW/PROCESS/`.
3. **Iterative Refinement:** Iterate on files in `01_RAW/PROCESS` until the user explicitly approves promotion.
4. **New Knowledge Promotion:** After the user explicitly approves promotion, promote the document to `02_NEW-KNOWLEDGE`.
5. **Original Archival:** After promotion to `02_NEW-KNOWLEDGE`, archive the original file by moving it from `01_RAW/CAPTURE` to `01_RAW/SOURCE`.
6. **Promote to Wiki:** Only after the user later issues **Promote to Wiki** should the document move from `02_NEW-KNOWLEDGE` to `NOTES`.
7. **Atomic Note Generation:** Atomic note generation in `NODES` occurs only after the document is in `NOTES`.
8. **MOC Curation:** Every mature note must eventually connect to `03_MOC` (INDEX → Domain → Topic → Node).

### Decision Policy & Expected Behavior
Before any movement or promotion, the agent must ask:
- Is the content still raw in CAPTURE?
- Is it a working copy undergoing refinement in PROCESS?
- Is it ready for deep study in 02_NEW-KNOWLEDGE?
- Is it in NOTES ready for atomic extraction?
- Is the final note verified and evergreen enough for the NODES layer?

If any answer is unclear, stop and ask for permission. When responding, state:
- Current stage
- Suggested next stage
- Reason
- Permission needed before movement
- Any risks, gaps, or missing context

---

## Folder Responsibilities

| Folder | Purpose |
|--------|---------|
| `01_RAW/` | Input only. Raw captured information. Incubating ideas (`status: incubating`) also live in `CAPTURE/`. |
| `01_RAW/CAPTURE/` | Store raw information exactly as captured. Immutable source files. |
| `01_RAW/PROCESS/` | Transform working copy into refined knowledge. Only writable workspace during ingestion. |
| `01_RAW/SOURCE/` | Archive original source materials after promotion. |
| `02_NEW-KNOWLEDGE/` | Active learning space to build exhaustive source-derived understanding (`status: learning`). |
| `NOTES/` | Durable evergreen synthesis promoted from understood knowledge. |
| `NODES/` | Flat atomic notes created from understood knowledge. One note = One idea. No subfolders. |
| `03_MOC/` | Navigation only. Never store knowledge here. 4-level hierarchy: INDEX → Domain → Topic → Node. |

---

## Stage Details

### Stage 1: CAPTURE

**Folder:** `01_RAW/CAPTURE`

**Purpose:** Store raw information exactly as captured.

**Allowed:**
- Web Clipper
- PDFs
- Articles
- Books
- YouTube transcripts
- Podcasts
- Research papers

**Rules:**
- Never edit
- Never summarize
- Never reorganize
- Always preserve the original

---

### Stage 2: PROCESS

**Folder:** `01_RAW/PROCESS`

**Purpose:** Transform raw information into understandable knowledge.

**Tasks:**
- Remove junk
- Fix formatting
- Remove advertisements
- Organize headings
- Correct OCR
- Separate topics
- Preserve every important fact

The goal is maximum information quality until the favorable output. The file is store temporary for ingestion(process).

---

### Stage 3: NEW KNOWLEDGE

**Folder:** `02_NEW-KNOWLEDGE`

**Purpose:** Active learning for exhaustive source-derived understanding.

**Requirements:**
- Definitions
- Concepts
- Examples
- Analogies
- Explanations
- Facts
- Tables
- Lists
- Processes
- Formulas
- Diagrams (Markdown)
- Relationships
- References

This document is used for active learning to build exhaustive source-derived understanding. Once understood, it will promote to polished synthesis notes in `NOTES/` and its atomic notes are created in `NODES/`.

---

### Stage 4: NOTES

**Folder:** `NOTES`

**Purpose:** Create polished evergreen synthesis notes promoted from understood `02_NEW-KNOWLEDGE`.

**Characteristics:**
- Readable
- Well structured
- Future-proof
- Personalized
- Human-friendly

These are the notes you will actually study.

---

### Stage 5: NODES

**Folder:** `NODES`

**Purpose:** Convert understood `02_NEW-KNOWLEDGE` into atomic notes.

**Rules:**
- One note = One idea
- Every note must be independently understandable
- Each note should answer one question
- Maximum reuse
- Maximum linking

**Each note should contain:**
- Definition
- Explanation
- Example
- Related Notes
- Tags

---

### Stage 6: MOC

**Folder:** `03_MOC`

**Purpose:** Navigation only. Never store knowledge here.

**MOCs organize atomic notes (NODES) and detailed notes (NOTES) into a 4-level hierarchy.**

**Hierarchy:**
```
INDEX (03_MOC/INDEX.md)
  └── Domain MOC (03_MOC/ai/ai-moc.md)
        └── Topic MOC (03_MOC/ai/machine-learning-moc.md)
              └── [Subtopic MOC] → Nodes
```

**MOC Level Rules:**
- `index` → links only to Domain MOCs
- `domain` → links only to Topic MOCs
- `topic` → links to individual nodes (primary working level)
- `subtopic` → links to individual nodes (created when topic overflows)

Existing MOCs without `moc_level` are treated as `topic` level.

**Example Topic MOC:**
```
Machine Learning Topic MOC
├── [[Linear Regression]]
├── [[Logistic Regression]]
├── [[Neural Networks]]
├── [[Transformers]]
└── [[Reinforcement Learning]]
```

---

## Atomic Note Rules

Every atomic note must:
- Have exactly one idea
- Be evergreen
- Be understandable alone
- Contain links
- Contain tags
- Avoid unnecessary duplication

---

## Note Maturity States

Every active note progresses through the 8-stage maturity model (see `maturity-model.md`):

```
[incubating] → captured → processed → learning → verified → evergreen → canonical → maintained → archived
```

- `incubating` — rough idea in `01_RAW/CAPTURE/`; not yet validated
- `captured` — received, not yet interpreted
- `processed` — cleaned; provenance retained
- `learning` — in `02_NEW-KNOWLEDGE/`; active study
- `verified` — claims checked against source
- `evergreen` — stable, reusable, atomic
- `canonical` — single vault authority; `concept_id` set; no duplicate
- `maintained` — reviewed within cadence; still accurate
- `archived` — historical reference only

---

## Linking Rules

Always create links whenever concepts are related. Prefer the structured `relations` block in frontmatter for machine-readable typed relationships.

**Relationship types (18 controlled vocabulary):**
`depends_on`, `implements`, `causes`, `effect_of`, `example_of`, `instance_of`, `part_of`, `prerequisite_for` (HIGH priority) · `supports`, `contradicts`, `extends`, `generalizes`, `specializes`, `compares_with`, `derived_from`, `references` (MEDIUM) · `related_to`, `inspired_by` (LOW)

**Example `relations` block:**
```yaml
relations:
  - target: "Backpropagation"
    type: "depends_on"
    confidence: 98
    reason: "Gradient descent uses gradients from backprop"
    creation_method: "human"
    human_verified: true
```

**Example body links (prose layer):**
```markdown
## Relations
- [[Backpropagation]] — `depends_on`
- [[Learning Rate]] — `part_of`
```

---

## MOC Rules

MOCs never explain. They only navigate.

**Bad:** Domain MOC containing node links directly.
**Good:** Domain MOC linking only to Topic MOCs.

**Bad:** Topic MOC with 200 nodes listed flat.
**Good:** Topic MOC split into Subtopic MOCs when > 100 nodes.

---

## Naming Rules

Use Title Case.

**Examples:**
- `Gradient Descent`
- `Loss Function`
- `Neural Network`
- `Decision Tree`

**concept_id (immutable slug):** `gradient-descent-v1`
- Derived from filename stem at creation
- Never changes even if file is renamed
- Used by AI systems for stable cross-references

**Avoid:**
- `gradient_descent`
- `GD`
- `ML2`
- `new note`

---

## Knowledge Quality Checklist

Before finishing, verify:
- ✓ Complete
- ✓ Correct
- ✓ Linked (body links + `relations` block)
- ✓ Atomic
- ✓ Evergreen
- ✓ Searchable
- ✓ Readable
- ✓ Non-duplicated
- ✓ `concept_id` set
- ✓ `owner_moc` assigned
- ✓ `sources` populated (if source-backed)
- ✓ `schema_version: 4`
