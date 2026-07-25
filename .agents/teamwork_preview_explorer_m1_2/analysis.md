# Governance, Tag, and Frontmatter Schema Analysis (Milestone 1)

**Target Path**: `c:\Users\offic\OneDrive\Desktop\obsidean\nexusdb\.agents\teamwork_preview_explorer_m1_2\analysis.md`  
**Date**: 2026-07-25  
**Author**: Exploration Specialist (`teamwork_preview_explorer_m1_2`)

---

## 1. Executive Summary

This report documents the governance rules, tag schemas, Frontmatter Schema v4 standards, and `NODES/` directory structural constraints for NexusDB. The findings are derived from direct inspection of `.antigravity/rules/`, `.antigravity/schemas/`, `GEMINI.md`, `.antigravity/templates/`, `.antigravity/skills/`, and python automation scripts (`vault_utils.py`).

---

## 2. Governance Authority Hierarchy

As specified in `GEMINI.md` (§2), conflicts across configuration or instruction files must be resolved using the following strict priority:

```text
1. governance.md
2. .antigravity/rules/* (naming.md, tagging.md, linking.md, writing.md, review.md)
3. .antigravity/schemas/* (frontmatter.md, note-types.md)
4. .antigravity/templates/*
5. .antigravity/agents/*
6. .antigravity/skills/*
7. .antigravity/hooks/*
8. .antigravity/automations/*
9. GEMINI.md
```

---

## 3. Tag Schema Analysis

### 3.1 Active Controlled Tag Schema (`.antigravity/rules/tagging.md`)
In current vault governance (v4.5.0 / v5.0), tags are strictly controlled discovery facets rather than ad-hoc descriptors or category markers. All tags must be lowercase and hyphenated.

#### Approved Discovery Tags (12 Canonical Tags):
| Tag | Purpose / Definition |
|---|---|
| `beginner` | Introductory material or simple explanations |
| `advanced` | Complex concepts or in-depth technical analysis |
| `comparison` | Comparing two or more concepts, methods, or entities |
| `case-study` | Detailed analysis of a real-world example |
| `implementation` | Code, setup, or execution details |
| `reference` | Raw definitions, tables, or external reference links |
| `history` | Historical context, background, or evolution of an idea |
| `decision` | Architectural decision records or trade-offs |
| `example` | Concrete examples illustrating a concept |
| `checklist` | Lists of criteria, steps, or validations |
| `open-question` | Unsolved problems or areas requiring further research |
| `contrarian` | Viewpoints that challenge standard consensus |

#### Approved Tag Aliases:
- `case_study` $\rightarrow$ `case-study`
- `open_question` $\rightarrow$ `open-question`

#### Rules & Syntax Constraints:
- **Lowercase & Hyphenated**: All tags must be lowercase strings without `#` prefixes in YAML lists (e.g. `tags: [case-study, reference]`).
- **No Ad-Hoc Tags**: Inventing ad-hoc tags is prohibited. Every tag used must exist in `tagging.md`.
- **Zero or More**: Notes use zero or more approved discovery tags as needed.
- **Python Automation Loading**: `.antigravity/automations/lib/vault_utils.py` loads canonical tags from `.antigravity/rules/tagging.md`.

### 3.2 Legacy Tag Schema Context (`.antigravity_backup/rules/tag-schema.md`)
In earlier vault iterations (`tag-schema.md`), tags included category facets such as source types (`#youtube`, `#podcast`, `#book`), knowledge types (`#concept`, `#fact`, `#definition`), status (`#draft`, `#processed`), and domains (`#ai`, `#psychology`). In Schema v4, these are replaced by explicit YAML frontmatter fields (`source_type`, `type`, `status`, `domain`), keeping `tags` exclusively for the 12 controlled discovery tags.

---

## 4. Frontmatter Schema v4

Every newly created or revised knowledge note in NexusDB must conform to **Schema v4** as specified in `.antigravity/schemas/frontmatter.md`.

### 4.1 Canonical Schema Structure
```yaml
---
id: 123e4567-e89b-42d3-a456-426614174000  # UUID v4; immutable
title: Canonical Title                    # Title Case string
type: atomic-note                        # approved type enum
status: verified                         # lifecycle maturity status enum
domain: general                          # canonical domain
source_type: null                        # source classification or null
created: YYYY-MM-DD                      # creation date
updated: YYYY-MM-DD                      # last update date
review: YYYY-MM-DD                       # next scheduled review date
confidence: 95                           # integer 0–100
version: 1                               # integer note content version
aliases: []                              # list of title aliases/synonyms
tags: []                                 # array of controlled discovery tags
owner_moc: General MOC                   # title string of primary MOC
sources: []                              # array of source paths/wikilinks
related: []                              # array of related note titles/wikilinks
schema_version: 4                        # must be integer 4
---
```

### 4.2 Required Fields for `type: study-note` (Literature / Detailed Study Note)
Study notes (such as long-form study notes created in `02_NEW-KNOWLEDGE/`) must populate Schema v4 with:

| Field | Required Value / Format | Example / Notes |
|---|---|---|
| `id` | Valid UUID v4 string | `c8f3b2a1-9e4d-4c7b-8f12-3a4b5c6d7e8f` (immutable) |
| `title` | Title Case string | `"Detailed Study Notes — Steve Jobs Next & Apple Return"` |
| `type` | `study-note` or `literature-note` | `study-note` |
| `status` | `draft` / `learning` / `processed` | `draft` or `learning` |
| `domain` | Canonical domain string | `business-history` or `general` |
| `source_type` | Source type enum | `youtube` / `podcast` / `book` / `transcript` |
| `created` | ISO Date (`YYYY-MM-DD`) | `2026-07-25` |
| `updated` | ISO Date (`YYYY-MM-DD`) | `2026-07-25` |
| `review` | ISO Date (`YYYY-MM-DD`) | `2026-08-24` |
| `confidence` | Integer `0–100` | `95` or `100` |
| `version` | Integer | `1` |
| `aliases` | List of strings | `["Steve Jobs Next Detailed Study Notes"]` |
| `tags` | Array of tags from `tagging.md` | `[case-study, reference, history]` |
| `owner_moc` | Exactly one canonical MOC title | `"Steve Jobs MOC"` or `"yt-moc"` |
| `sources` | List of source file paths/wikilinks | `["01_RAW/SOURCE/steve-jobs-exile-transcript.md"]` |
| `related` | List of related wikilinks/titles | `["[[NeXT Computer]]", "[[Apple Return 1997]]"]` |
| `schema_version` | Integer `4` | `4` |

### 4.3 Required Fields for `type: atomic-note`
Atomic notes placed in `NODES/` must populate Schema v4 with:

| Field | Required Value / Format | Example / Notes |
|---|---|---|
| `id` | Valid UUID v4 string | `f47ac10b-58cc-4372-a567-0e02b2c3d479` (immutable) |
| `title` | Title Case string | Must match filename **exactly** (e.g. `NeXTSTEP OS`) |
| `type` | `atomic-note` | `atomic-note` |
| `status` | `atomic` / `verified` / `evergreen` | `atomic` |
| `domain` | Canonical domain string | `technology` or `general` |
| `source_type` | `null` or original source classification | `null` or `youtube` |
| `created` | ISO Date (`YYYY-MM-DD`) | `2026-07-25` |
| `updated` | ISO Date (`YYYY-MM-DD`) | `2026-07-25` |
| `review` | ISO Date (`YYYY-MM-DD`) | `2026-10-23` |
| `confidence` | Integer `0–100` | `95` |
| `version` | Integer | `1` |
| `aliases` | List of strings | `["NeXTSTEP", "NeXT Operating System"]` |
| `tags` | Array of tags from `tagging.md` | `[history, implementation]` |
| `owner_moc` | Title string of primary MOC | `"Steve Jobs MOC"` |
| `sources` | List of source paths/wikilinks | `["01_RAW/SOURCE/steve-jobs-exile-transcript.md"]` |
| `related` | List of related node wikilinks | `["[[NODES/Object-Oriented Programming]]"]` |
| `schema_version` | Integer `4` | `4` |

---

## 5. `NODES/` Directory Rules & Governance

The `NODES/` directory represents the permanent atomic knowledge base. The following constraints are non-negotiable across all governance files (`GEMINI.md` §4/§9/§10, `writing.md` §3, `naming.md`, `linking.md`):

1. **Strictly Flat Structure**:
   - `NODES/` has **zero subfolders**.
   - All atomic note `.md` files reside directly in `NODES/`.
   - Links to nodes must not contain subfolder paths (`[[note-title]]` or `[[NODES/note-title]]`).

2. **Single Concept / Idea Per Note**:
   - One note answers exactly one question, asserts one claim, or defines one reusable concept.
   - Avoid multi-concept narrative notes inside `NODES/` (multi-idea syntheses belong in `NOTES/`).

3. **Title and Filename Matching**:
   - The frontmatter `title` must match the filename exactly (excluding `.md`).
   - Use specific, descriptive Title Case (e.g., `NeXTSTEP OS`, `Objective-C Adoption at Apple`).
   - Use singular forms unless inherently plural.
   - Avoid chronology or vague names (`Chapter 4`, `Misc`, `GD`, `new note`).
   - **Title Change Control**: Canonical titles must never be changed automatically. Renames require user approval, snapshot, audit entry, and rollback paths (`naming.md`).

4. **Required Body Structure**:
   - `## Claim` or `## Definition` (One-sentence clear claim/statement)
   - `## Explanation` or `## Why it matters` (Plain language explanation and context)
   - `## Related` (Wikilinks to related atomic nodes, with relationship descriptors like `Relationship: related_to`)
   - `## Source` (Wikilink or path to original source note/file)

5. **Graph Integration & Reachability**:
   - Every node must be reachable from at least one Map of Content in `03_MOC/`.
   - Frontmatter must define exactly one `owner_moc`.
   - Every node must have at least one link (no orphan notes).

---

## 6. Summary Table of Requirements for Milestone 1

| Component | Rule Source | Key Enforcement Requirements |
|---|---|---|
| **Tags** | `tagging.md` | 12 allowed discovery tags only; lowercase & hyphenated; zero ad-hoc tags |
| **Frontmatter** | `frontmatter.md` | Schema v4 mandatory; UUID v4 `id`; `schema_version: 4`; exact field types |
| **Study Notes** | `youtube-study-note.md` / `writing.md` | `02_NEW-KNOWLEDGE/`; detailed study note; `type: study-note` / `literature-note`; timestamps; Mermaid diagrams |
| **Atomic Nodes** | `writing.md` / `naming.md` / `GEMINI.md` | `NODES/` flat directory; filename == frontmatter `title`; single concept; `owner_moc` required |
