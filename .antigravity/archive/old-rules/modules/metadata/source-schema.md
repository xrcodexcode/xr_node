---
module: metadata_source
version: 2.1.0
priority: 5
depends_on:
  - shared_constants
  - metadata_schema
exports:
  - source_schema_rules
loads:
  - source.schema.json
compatible_schema_versions: [3, 4]
estimated_token_cost: 350
owner: vault-owner
last_reviewed: 2026-07-18
change_reason: "Migrated to module system with manifests."
---

# Source Schema

Sources in `01_RAW/` preserve evidence. They are never replaced by derived notes.

## Supported `source_type` Values

`book`, `article`, `paper`, `youtube`, `podcast`, `web-clip`, `transcript`, `course`, `interview`, `dataset`, `original-observation`, `misc`.

## Required Frontmatter

```yaml
---
id: UUID-v4
title: Source Title
type: raw-source
status: captured
domain: general
source_type: article
created: YYYY-MM-DD
updated: YYYY-MM-DD
review: YYYY-MM-DD
confidence: 100
version: 1
aliases: []
tags: []
owner_moc: null
sources: []
related: []
origin_path: URL-or-original-path
captured_at: YYYY-MM-DD
processed_at: null
ingested_at: null
linked_notes: []
disposition: pending
---
```

## Lifecycle Rules

1. Capture the original in `01_RAW/CAPTURE/` (read-only).
2. Create a working copy in `01_RAW/PROCESS/` (only writable workspace during ingestion).
3. Transform and refine the working copy in `01_RAW/PROCESS/` until approved.
4. Promote to `02_NEW-KNOWLEDGE/` and set `disposition` to `ingested` or `no_reusable_knowledge`.
5. Archive the original file by moving it from `01_RAW/CAPTURE/` to `01_RAW/SOURCE/`.
6. Append the audit entry in the log.

Never delete a source as part of ingestion. `no_reusable_knowledge` is a valid logged outcome, not a reason to discard provenance.
