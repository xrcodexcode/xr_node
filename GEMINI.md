---
title: GEMINI.md — NexusDB Operating Guide
type: governance-rule
status: active
version: 5.0.0
last_reviewed: 2026-07-21
approved_by: vault-owner
change_reason: "New governance draft with clearer authority order, promotion logic, safety rules, and vault workflow."
deprecation_date: null
---

# GEMINI.md — NexusDB Operating Guide

This file defines the operational guidelines, governance principles, and execution workflows for the Gemini AI assistant and automated processes operating inside **nexusdb**.

Its job is to keep the vault:
- **Trustworthy**: Preserving original content and sources without fabrication.
- **Modular**: Defining clear roles for agents, skills, hooks, and automations.
- **Traceable**: Maintaining strict backlinks and source provenance.
- **Maintainable**: Designing systems that remain clean and organized as they scale.

This is a core governance file. Follow it strictly.

---

## 1) Mission

Convert raw information into durable, modular, and traceable knowledge without damaging:
- user writing,
- source evidence,
- file history,
- or vault structure.

The goal is not speed alone. The goal is **clean, reusable, verifiable knowledge**.

---

## 2) Authority Order

If instructions or configurations conflict, resolve them using this strict hierarchy :

```text
1. governance.md
2. .antigravity/rules/*
3. .antigravity/schemas/*
4. .antigravity/templates/*
5. .antigravity/agents/*
6. .antigravity/skills/*
7. .antigravity/hooks/*
8. .antigravity/automations/*
9. this GEMINI.md
```

*If a conflict arises, the higher-priority file wins. When in doubt, prefer the safest interpretation and ask the user before making irreversible changes.*

---

## 3) Core Principles

1. **Preserve Source Integrity**: Never alter, delete, or overwrite raw captured files.
2. **Preserve Provenance**: Maintain clear links back to the original source at all times.
3. **Structure over Verbosity**: Keep notes concise and focused. Avoid padding.
4. **Prefer Canonical Notes**: Avoid duplicates or near-duplicates. Merge or link instead.
5. **Prefer Links over Repetition**: Use Obsidian-style wikilinks instead of copy-pasting information.
6. **Single-Purpose Notes**: One note must answer one question or state one reusable concept.
7. **Strict Stage Separation**: Keep raw inbox material separate from stable curated knowledge.
8. **Minimalist Workflows**: Use the fewest files, folders, and pipeline steps possible.
9. **No Speculation**: Never fabricate facts, citations, or metadata.
10. **Zero Unapproved Risks**: Never perform irreversible actions without explicit user permission.

---

## 4) Vault Structure

The vault operates on a clean, progressive pipeline:

```text
Internet / Books / PDFs / Videos / Ideas
                 │
                 ▼
          01_RAW/CAPTURE  ────────► Temporary inbox for unprocessed inputs
                 │
          (Capture Hook)
                 │
                 ▼
          01_RAW/PROCESS  ────────► Working area for active transformation
                 │
          Knowledge Agent
                 │
      ┌──────────┼──────────┐
      ▼          ▼          ▼
  Extraction   Analysis   Validation
    Skills      Skills      Skills
      │            │            │
      └────────────┼────────────┘
                   ▼
          02_NEW-KNOWLEDGE ───────► Active learning and study space
                   │
           Review Automation
                   │
          Promote / Improve
                   │
          ┌────────┴─────────┐
          ▼                  ▼
        NOTES              NODES  ────────► Stable synthesis (NOTES) or atomic concepts (NODES)
          │                  │
          └────────┬─────────┘
                   ▼
                 03_MOC   ────────► Navigational maps of content
                   │
         Maintenance Automation
```

### Layer Meanings & Roles
- **01_RAW/CAPTURE**: The landing zone. All external clips, transcripts, and web saves land here as read-only files.
- **01_RAW/PROCESS**: The staging ground. Drafts, splits, and working copies are iteratively processed here.
- **01_RAW/SOURCE**: The archive. Once ingestion is complete, the original raw files are moved here for permanent history.
- **02_NEW-KNOWLEDGE**: The learning workspace. Notes ready for review, active study, and refinement live here.
- **NOTES**: The wiki layer. Synthesized, structured summaries and multi-concept learning documents.
- **NODES**: The atomic layer. Singular, permanent, evergreen concepts. **No subfolders allowed**.
- **03_MOC**: The navigation layer. Curated index maps of content; no detailed summaries, only structured links.

---

## 5) Content Placement Rules

Determine where content should reside using this logic:

```text
Raw and unverified ───────────────────────► 01_RAW/CAPTURE
Under active transformation or drafting ──► 01_RAW/PROCESS
Preserved original source ────────────────► 01_RAW/SOURCE
Under active study or validation ────────► 02_NEW-KNOWLEDGE
Stable explanation or multi-idea synthesis ─► NOTES
Atomic evergreen concept or definition ────► NODES
Navigational indexing and grouping ───────► 03_MOC
```

*When unsure, keep the note one stage earlier rather than promoting too fast. Promotion occurs only when a note is understandable, well-shaped, and ready for reuse.*

---

## 6) Component Roles

To maintain system modularity, separate code and instructions into these distinct roles:

*   🤖 **Agent** → *I decide what should happen.* (Planning, routing, coordination)
*   🛠️ **Skill** → *I know how to do one thing.* (Narrow, reusable, testable tasks)
*   ⚡ **Hook** → *Something happened, so I react immediately.* (Event-driven actions)
*   🔄 **Automation** → *I execute a predefined workflow from start to finish.* (Batch pipelines)

---

## 7) The Complete Workflow Pipeline

The lifecycle of knowledge ingestion, validation, and curation follows this sequence:

```text
[Input File] ──► Capture Hook ──► 01_RAW/CAPTURE ──► Knowledge Pipeline (Automation)
                                                          │
   ┌──────────────────────────────────────────────────────┘
   ▼
Knowledge Agent ──► [Extraction / Summarization / Atomization / Tagging / Linking Skills]
   │
   ▼
02_NEW-KNOWLEDGE ──► Review Queue (Automation) ──► Review Agent ──► Promote to NOTES/NODES
                                                                          │
   ┌──────────────────────────────────────────────────────────────────────┘
   ▼
Promotion Hook ──► MOC Generator (Automation) ──► MOCs Updated ──► Weekly Health Check
```

---

## 8) Behavior by Task Type

### A. Capture
When raw content is introduced:
- Identify the source type (book, paper, YouTube, podcast, etc.).
- Isolate primary claims and preserve high-fidelity context.
- Keep the original wording and intent intact.
- Suggest the correct destination layer without aggressive summarization.

### B. Process
When transforming captured material:
- Extract standalone concepts and write draft summaries.
- Identify potential atomic nodes.
- Generate initial tag and link proposals.
- Check for existing duplicate notes to avoid vault pollution.

### C. Maintain
When running vault health checks:
- Identify and log broken links, formatting errors, and missing metadata.
- Scan for orphan notes (notes with zero links).
- Detect candidate notes for merging.
- Ensure all nodes inside `NODES/` match the flat folder rule.

### D. Write
When generating markdown notes:
- Produce clean, standardized Markdown.
- Apply consistent heading hierarchy.
- Design notes to be easily queryable, linkable, and reusable.

### E. Review
When auditing content for promotion:
- Be highly specific and identify technical or semantic gaps.
- Classify issues by severity (e.g., blocking schema errors vs. non-blocking style improvements).
- Ensure required frontmatter and bodies are complete before approving.

---

## 9) Structural Rules

### `01_RAW/`
Staging area for incoming files.
- Original captured files are read-only.
- Never edit or move files out of `CAPTURE` without creating working copies in `PROCESS` first.

### `NOTES/`
The synthesis wiki.
- Explains a topic or domain comprehensively.
- Must be understandable on its own and link to component atomic nodes.

### `NODES/`
The atomic concept garden.
- Must represent exactly one idea or definition.
- Keep narrative minimal; focus on the core claim and immediate context.
- **Strictly flat structure: No subfolders are allowed.**

### `03_MOC/`
The navigation directory.
- Curates links to notes and other MOCs.
- Avoid descriptive content; keep MOCs clean and highly structured.

---

## 10) Metadata Discipline

Every note must conform to the frontmatter schema defined in `.antigravity/schemas/frontmatter.md`.

### Core Fields
- **id**: UUID v4 (immutable).
- **title**: Title Case name matching the filename.
- **type**: Note type (e.g., `atomic-note`, `moc`, `project`).
- **status**: Lifecycle state (e.g., `verified`, `atomic`).
- **tags**: Controlled tag array from `rules/tagging.md`.
- **owner_moc**: Primary Map of Content tracking this note.

*Never invent ad hoc frontmatter fields. If metadata is missing or invalid, flag it or prompt for user correction.*

---

## 11) Tagging Rules

Tags are strictly controlled facets, not ad-hoc descriptors.
- All tags must be lowercase, hyphenated, and exist in [rules/tagging.md](file:///C:/Users/offic/OneDrive/Desktop/obsidean/nexusdb/.antigravity/rules/tagging.md).
- Avoid tag inflation (prefer fewer, high-value tags).
- Never use a tag that replicates the note's title.

---

## 12) Linking Rules

Link notes systematically to construct a resilient graph:
- Use standard Obsidian links: `[[Note Title]]` or `[[Note Title|Alias]]`.
- Link when a note depends on, defines, or directly references another concept.
- Avoid decorative or redundant links. Keep the graph clean.
- Ensure every note links to its `owner_moc`.

---

## 13) Naming Rules

Naming rules enforce consistency for searchability:
- Use descriptive, Title Case names (e.g., `Gradient Descent`).
- Use singular forms unless the concept is inherently plural.
- Do not modify canonical note titles automatically; renames must be logged and approved.

---

## 14) Promotion Rules

Promotion from raw capture to nodes is structured and progressive:
```text
CAPTURE ──► PROCESS ──► SOURCE ──► NEW-KNOWLEDGE ──► NOTES / NODES ──► MOC
```
Promote only if:
1. The metadata matches the schema.
2. The claims are fully understood and verified.
3. Provenance and source paths are correctly mapped.

---

## 15) Safety Rules

### Non-negotiable Constraints
- **Never delete raw files automatically**: Move superseded files to `archive/` or request permission.
- **Never rewrite user prose**: User-written content is protected; modifications require confirmation.
- **Never rename notes automatically**: Preserving external links and user mappings is paramount.
- **Preserve Duplicate Evidence**: Keep duplicate drafts or raw captures if they represent historical source material.

---

## 16) Writing Style

Write vault files using clean, professional, and accessible Markdown:
- Avoid dramatic, verbose, or conversational language.
- Define technical terms before using them.
- Focus on readability and scan-friendly formatting.

### Explanation Structure
1. **Intuition**: Explaining the concept in simple terms.
2. **Definition**: The formal or technical statement.
3. **Example**: Real-world application or sample.
4. **Details**: Deep technical notes, formulas, or caveats.

---

## 17) Repository Layout

The `.antigravity/` workspace follows this modular architecture:

```text
.antigravity/
├── governance.md             # Core governance principles
├── README.md                 # Vault layout overview
├── CONFIG.yaml               # Global configurations
│
├── rules/                    # Granular rule files
│   ├── naming.md
│   ├── tagging.md
│   ├── linking.md
│   ├── writing.md
│   └── review.md
│
├── schemas/                  # Metadata schemas
│   ├── frontmatter.md
│   └── note-types.md
│
├── prompts/                  # System prompts
│
├── templates/                # Standard markdown note templates
│   ├── atomic-note.md
│   ├── literature-note.md
│   ├── moc.md
│   ├── project.md
│   └── journal.md
│
├── agents/                   # Autonomous agents definitions
│   ├── knowledge-agent.md
│   ├── research-agent.md
│   ├── review-agent.md
│   ├── writing-agent.md
│   └── maintenance-agent.md
│
├── skills/                   # Reusable processing skills
│   ├── extraction/
│   ├── summarization/
│   ├── atomization/
│   ├── linking/
│   ├── tagging/
│   ├── validation/
│   ├── bibliography/
│   └── moc-generation/
│
├── hooks/                    # Event-driven scripts
│   ├── on_capture.py
│   ├── on_process.py
│   ├── on_note_created.py
│   ├── on_note_updated.py
│   ├── on_note_promoted.py
│   └── on_vault_start.py
│
└── automations/              # Batch processing and maintenance scripts
    ├── knowledge_pipeline.py
    ├── review_queue.py
    ├── duplicate_detector.py
    ├── orphan_detector.py
    ├── graph_health.py
    ├── generate_mocs.py
    ├── rebuild_indexes.py
    ├── archive_manager.py
    └── weekly_report.py
```

---

## 18) Output Modes

### If asked for a plan
Return:
- **Objective**: The goal.
- **Steps**: Discrete execution actions.
- **Layer**: Target vault locations.
- **Risks**: Any assumptions or data protection notes.

### If asked for extracted knowledge
Return:
- Standalone concept claims and formal definitions.
- Proposed note names and file hierarchies.
- Recommended tags, backlinks, and destinations.

### If asked for a note
Return a ready-to-paste Obsidian-compliant Markdown note.

### If asked for system designs or automations
Return:
- Directory structures and layout requirements.
- Step-by-step file interactions and execution rules.

### If asked for cleanup or health checks
Return:
- Problem logs categorized by severity.
- Proposed automated or manual fixes.

---

## 19) What to Do by Default

When processing content without specific directions:
1. Determine the content's type and map it to a vault layer.
2. Extract the core claims and definitions.
3. Suggest links to existing nodes or MOCs.
4. Auto-generate compliant frontmatter.
5. Keep outputs concise and factual.

*If requirements are ambiguous, do not speculate. Propose a safe default plan and ask the user for verification.*

---

## 20) Final Directive

Optimize for **clarity**, **permanence**, **traceability**, and **maintainability**. Do not optimize for cleverness. Avoid adding complexity. Build a structure that stays usable as it grows to thousands of notes.