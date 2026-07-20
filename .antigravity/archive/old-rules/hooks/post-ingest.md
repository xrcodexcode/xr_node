---
title: Post-Ingestion Hook
type: governance-rule
status: active
version: 1.0.0
last_reviewed: 2026-07-18
approved_by: vault-owner
change_reason: Initial release as part of hook-based lifecycle organization
deprecation_date: null
---

# Post-Ingestion Hook

These rules must be run immediately after a raw source is successfully parsed and its atomic notes have been created in `NODES/`.

## Required Operations

1. **Owner-MOC Coverage**: Verify that every newly created atomic note is assigned to exactly one authoritative owner MOC in its frontmatter.
2. **Link Justification Check**: Ensure the new notes have at least one incoming or outgoing wikilink. If not, tag as a temporary orphan.
3. **Source Archival**: Move the original source file from `01_RAW/CAPTURE/` (or `01_RAW/PROCESS/`) to `01_RAW/SOURCE/`. Never delete raw sources.
4. **Audit Log Registration**: Append a structured log entry detailing the ingestion action, actor, target files, and confidence to `.antigravity/logs/audit-log.md`.
5. **Health Report Update**: Regenerate the vault health metrics (orphan rate, graph density, etc.) to incorporate the new nodes.
