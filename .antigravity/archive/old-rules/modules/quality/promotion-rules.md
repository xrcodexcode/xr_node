---
module: quality_promotion
version: 2.1.0
priority: 5
depends_on:
  - shared_constants
  - core_decision_engine
exports:
  - promotion_rules
loads: []
compatible_schema_versions: [3, 4]
estimated_token_cost: 300
owner: vault-owner
last_reviewed: 2026-07-18
change_reason: "Migrated to module system with manifests."
---

# Promotion Rules

Promotion makes a note more visible through `NOTES/`, a MOC, cross-MOC navigation, or featured placement. It is governed by this score out of `10`:

| Criterion | Points |
| --- | --- |
| Source-backed and verified | 2 |
| Atomic | 2 |
| Reusable | 2 |
| Linked to an owner MOC and justified related note | 2 |
| Stable canonical title | 1 |
| Not a duplicate | 1 |

| Score and confidence | Decision |
| --- | --- |
| Score `8–10` (defined in [constants.md](file:///.antigravity/shared/constants.md)), action confidence `>=95` | Promote and log. |
| Score `8–10`, action confidence `80–94` | Suggest promotion. |
| Score `6–7` | Manual review. |
| Score `<6` | Keep as draft or return to processing. |

Never promote only because a note is long, recently created, or already tagged. A note must be source-backed when its content makes source-dependent claims.
