---
title: governance.md — NexusDB Constitution
type: governance-rule
status: active
version: 1.0.0
last_reviewed: 2026-07-19
approved_by: vault-owner
---

# NexusDB Constitution

This is the supreme constitution for `nexusdb`. All agents, automations, and tools must operate in absolute compliance with this file.

## 1. Authority, Scope, and Conflict Resolution

- **Scope**: Applies to all human actions, AI agents, automations, templates, and files under the vault root.
- **Final Authority**: The vault owner has final authority.
- **Reversible vs. Destructive Actions Policy**:
  - **Reversible actions** (adding links, tagging, adding metadata, creating draft working copies) — do it and log it.
  - **Destructive actions** (deleting, overwriting my prose, merging notes, changing canonical titles) — always ask me first.
- **Conflict Resolution Hierarchy**: When rules or instructions conflict, prioritize in this order:
  1. Source integrity (never corrupt or replace raw sources)
  2. User-authored content (never overwrite user prose without approval)
  3. Provenance (never break source-to-note traceability)
  4. Retrieval quality (never degrade search/retrievability)
  5. Automation convenience (developer/script ease comes last)

## 2. AI Commandments

All agents must strictly follow these commandments:
- **Never delete; archive.** Always preserve history.
- **Never duplicate; merge or suggest a merge.**
- **Never summarize first; understand and preserve provenance first.**
- **Never invent metadata.** Infer metadata only when action confidence `>= 95`.
- **Never create folders inside `NODES/`.**
- **Never change canonical titles automatically.**
- **Never overwrite user writing.** Propose a patch or append.
- **Never replace a source.** Preserve the original and create a derived copy.
- **Never create low-confidence links automatically.**
- **Never perform an irreversible action without approval, snapshot, audit entry, and rollback.**

## 3. Non-Negotiable Graph Laws

- **Law 1**: No active orphan nodes. Every active note must belong to at least one MOC and have at least one justified inbound or outbound link.
- **Law 2**: Every note has one canonical title and one canonical file.
- **Law 3**: Every active knowledge note belongs to exactly one owner MOC.
- **Law 4**: Every factual claim has recoverable provenance or is explicitly labeled an unsupported observation.
- **Law 5**: Every ingested source produces reusable knowledge or a logged `no_reusable_knowledge` disposition.
- **Law 6**: Every confirmed duplicate is merged by archival consolidation; unresolved ones remain suggestions. Decision threshold for duplicate candidate: title similarity `>= 0.90` AND semantic similarity `>= 0.90`.
- **Law 7**: MOCs navigate; they do not contain explanations.
- **Law 8**: No raw source information exists outside `01_RAW/` (except quoted and attributed excerpts in derived notes).

## 4. Ingestion & Incubation Pipeline Rules

### Ingestion Pipeline Stage Flow
```
Internet → Web Clipper → 01_RAW/CAPTURE (immutable source) → 01_RAW/PROCESS (working copy) → 02_NEW-KNOWLEDGE (study copy) → 01_RAW/SOURCE (archived source) → NOTES (Wiki) → NODES
```
- **CAPTURE is Read-Only**: Original files are immutable and must never be edited, renamed, or moved directly to PROCESS.
- **PROCESS is Writable Workspace**: Create a working copy inside `01_RAW/PROCESS` for editing, drafts, and refining. All intermediate files must remain here.
- **Original Archival**: After promotion to `02_NEW-KNOWLEDGE`, archive the original source file by moving it from `01_RAW/CAPTURE` to `01_RAW/SOURCE`. Never archive the original source until promotion is approved.
- **Incubating Ideas**: Rough ideas, questions, or observations not yet backed by source should have `status: incubating` and live in `CAPTURE` (refined in `PROCESS`). They cannot be linked from MOCs, listed in `owner_moc`, or cited. If they remain incubating for 30 days they are flagged for review.

## 5. Quality Checklist
Every ingested note must satisfy:
- **Tags valid** (controlled tag schema only)
- **Title specific** (Title Case, no dates)
- **Note atomic** (one independently understandable idea)
- **Source preserved** (retained in raw form)
- **Backlinks exist** (linked from other relevant notes)
- **At least one MOC link** (visible in navigation)
- **Duplicate risk checked** (uniqueness verified)
- **Source archived** (safely moved to `01_RAW/SOURCE/`)
- **No broken links** (internal targets exist)
- **Note discoverable** (reachable through navigation paths)

## 6. Curation & Retrieval Rules
- **Retrieval priority order**: Use MOCs first, then tags, then backlinks, then note titles, and raw source only if necessary.
- **Hierarchical MOC Layout**: Curation follows the hierarchy: INDEX MOC (`HOME-BASE.md` / `03_MOC/`) → Domain MOCs → Topic MOCs → Nodes.

## 7. Action Checklists (Hooks)

### Pre-Ingestion Checklist
- **Frontmatter Validation**: Verify raw source frontmatter matches `schemas/frontmatter-schema.md`.
- **Tag Verification**: Check tags against `schemas/tag-schema.md` and resolve aliases.
- **Duplicate Precheck**: Run duplicate checks against existing notes in the vault using Jaccard word similarity.
- **Source Provenance**: Ensure incoming files have a defined `origin_path` or source ID before archiving.

### Post-Ingestion Checklist
- **Owner-MOC Coverage**: Verify every newly created atomic note is assigned exactly one owner MOC in frontmatter.
- **Link Justification**: Ensure new notes have at least one incoming or outgoing wikilink.
- **Source Archival**: Move original source from `01_RAW/CAPTURE/` to `01_RAW/SOURCE/`.
- **Audit Log Registration**: Append entry to `.antigravity/logs/audit-log.md`.
- **Health Report**: Run `health_dashboard.py` to regenerate metrics.

### Pre-Promotion Checklist
- **Rubric Evaluation**: Calculate promotion score based on:
  - Source-backed/verified (2 pts)
  - Atomic (2 pts)
  - Reusable (2 pts)
  - Linked to owner MOC and >=1 related note (2 pts)
  - Stable canonical title (1 pt)
  - Not a duplicate (1 pt)
- **Decision Matrix**:
  - Score 8–10: Promote and log (reversible/suggested depending on user settings).
  - Score 6–7: Require manual review.
  - Score <6: Retain in current state (draft).
- **Graph Integrity**: Verify that promotion does not result in broken wiki links.

### Nightly Maintenance Checklist
- **Metadata Linting**: Run `check_vault.py` to check markdown frontmatter against schema.
- **Broken Link Sweep**: Scan and detect internal wikilinks pointing to non-existent files.
- **Audit Log Validation**: Verify `.antigravity/logs/audit-log.md` is well-formed.
- **Orphan Sweeper**: Scan `NODES/` for active nodes lacking backlinks or owner MOC.

### Weekly Audit Checklist
- **Duplicate Scan**: Run `duplicate_detector.py` to compare Jaccard overlap on titles, slugs, and tags. Save to `.antigravity/reports/duplicate-candidates.md`.
- **MOC Alignment**: Confirm every active note has an `owner_moc` and is linked inside that MOC file.
- **Tag Entropy**: Identify tags used outside allowed schema or having high redundancy.
- **Graph Health Report**: Run `health_dashboard.py` to produce a health dashboard in `.antigravity/reports/health-dashboard.md`.
- **Knowledge Decay Scheduling**: Run `decay_scheduler.py` to identify notes with overdue verification schedules. Save to `.antigravity/reports/decay-report.md`.
- **Graph Analytics**: Run `graph_analytics.py` to identify authorities, bridges, and knowledge gaps. Save to `.antigravity/reports/graph-analytics.md`.
- **MOC Size Sweep**: Check MOC link counts (soft limit 50, hard limit 100).
