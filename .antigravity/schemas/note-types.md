---
title: Note Types Schema
type: governance-rule
status: active
version: 4.5.0
last_reviewed: 2026-07-21
approved_by: vault-owner
change_reason: "v4.5.0 — Created note types schema."
---

# Note Types Schema

This document defines the structural requirements and purposes of the different note types supported in NexusDB.

## 1. Atomic Note (`atomic-note`)
Granular, self-contained concept or fact notes.
- **Location**: `NODES/` (flat directory).
- **Structure**:
  - `## Claim` or `## Definition` (One-sentence summary)
  - `## Explanation` (Plain language details)
  - `## Related` (Wikilinks to related nodes)
  - `## Source` (Wikilink to original source)
- **Constraint**: Must match the filename exactly.

## 2. Evergreen Note (`evergreen-note`)
High-level synthesis notes integrating multiple atomic ideas.
- **Location**: `NOTES/` (or `NODES/` depending on maturity).
- **Structure**: Rich narrative compiling claims, evidence, and relations.

## 3. Map of Content (`moc`)
Curated navigation layer organizing notes on a topic.
- **Location**: `03_MOC/`.
- **Structure**:
  - Core nodes lists.
  - Related MOCs.

## 4. Literature Note (`source-book`, `source-paper`, etc.)
Summaries of external books, articles, podcasts, or videos.
- **Location**: `02_NEW-KNOWLEDGE/` or `NOTES/`.
- **Structure**: Metadata, summary, key takeaways, and references to extracted atomic notes.

## 5. Project (`project`)
Active project, goal, or task trackers.
- **Location**: `NOTES/` or custom work folders.
- **Structure**: Goals, tasks, links to relevant notes, and log of actions.

## 6. Journal (`journal`)
Daily logs, reflections, and meeting notes.
- **Location**: `01_RAW/CAPTURE/` (initial capture) or `NOTES/` (processed journals).
- **Structure**: Bullet points, tasks, and raw observations.
