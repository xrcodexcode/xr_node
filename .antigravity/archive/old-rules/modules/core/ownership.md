---
module: core_ownership
version: 1.1.0
priority: 3
depends_on:
  - core_governance
exports:
  - ownership_mapping
loads: []
compatible_schema_versions: [3, 4]
estimated_token_cost: 250
owner: vault-owner
last_reviewed: 2026-07-18
change_reason: "Migrated to module system with manifests."
---

# Ownership Rules

## Canonical Owners
- **NODES** → *Atomic Concept Owner* – responsible for maintaining one canonical, reusable idea per node.
- **NOTES** → *Synthesis Owner* – curates durable human‑readable explanations.
- **03_MOC** → *Navigation Owner* – maintains navigation layers without explanatory content.
- **01_RAW** → *Source Preservation Owner* – ensures original captures are archived unchanged.

## Enforcement
- Every knowledge artifact must declare exactly one `owner_moc` in its front‑matter.
- References may appear in multiple MOCs, but only the `owner_moc` is canonically authoritative.
- Automated actions that would alter ownership must pass the Irreversible‑Action Protection checks (see [governance.md](file:///.antigravity/modules/core/governance.md)).
