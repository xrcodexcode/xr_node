---
module: graph_retrieval
version: 2.1.0
priority: 5
depends_on:
  - shared_constants
exports:
  - retrieval_rules
loads: []
compatible_schema_versions: [3, 4]
estimated_token_cost: 200
owner: vault-owner
last_reviewed: 2026-07-18
change_reason: "Migrated to module system with manifests."
---

# Retrieval Rules

Never retrieve in arbitrary directory or modification-time order. Search by this rank:

1. MOC
2. Atomic Node
3. Evergreen Note
4. Exhaustive Knowledge Document
5. Raw Source

Within each tier, rank by exact canonical-title match, owner-MOC membership, provenance quality, freshness, then reciprocal justified links.

Use raw material only when full context or verification is required. Do not browse `NODES/` as a folder hierarchy.
