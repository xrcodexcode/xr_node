---
module: graph_merge
version: 2.1.0
priority: 5
depends_on:
  - shared_constants
  - core_decision_engine
exports:
  - merge_rules
loads: []
compatible_schema_versions: [3, 4]
estimated_token_cost: 350
owner: vault-owner
last_reviewed: 2026-07-18
change_reason: "Migrated to module system with manifests."
---

# Merge Rules

Merging is archival consolidation, not deletion. Follow the protected-action process in [governance.md](file:///.antigravity/modules/core/governance.md).

## Merge Decision

Create a merge candidate only when both are true:

- title similarity `>=0.90` (defined in [constants.md](file:///.antigravity/shared/constants.md)); and
- semantic similarity `>=0.90` (defined in [constants.md](file:///.antigravity/shared/constants.md)).

Aliases, source overlap, claim equivalence, and backlink-neighborhood overlap provide supporting evidence. Related ideas are not duplicates.

| Confidence | Decision |
| --- | --- |
| `>=95` | Eligible for an approved archival merge; preserve a snapshot, aliases, sources, links, and audit entry. |
| `80–94` | Suggest merge; do not change files. |
| `60–79` | Ask for review. |
| `<60` | Do nothing. |

## Merge Protocol

1. Select the canonical note without changing its title automatically.
2. Snapshot or archive both predecessor versions.
3. Preserve sources, aliases, and useful unique content.
4. Redirect or repair links and owner-MOC references.
5. Mark the duplicate as archived; never delete it.
6. Add an audit entry with comparison evidence, confidence, and rollback path.
