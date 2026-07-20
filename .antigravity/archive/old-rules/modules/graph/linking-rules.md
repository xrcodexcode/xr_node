---
module: graph_linking
version: 3.1.0
priority: 5
depends_on:
  - shared_constants
  - shared_relationship_types
exports:
  - linking_rules
loads: []
compatible_schema_versions: [3, 4]
estimated_token_cost: 450
owner: vault-owner
last_reviewed: 2026-07-18
change_reason: "Migrated to module system with manifests."
---

# Linking Rules

Follow [governance.md](file:///.antigravity/modules/core/governance.md). A link is a semantic claim and must have a real relationship, an appropriate priority, and an action confidence.

## Priority and Threshold Table

| Priority | Relationship types | Automatic behaviour |
| --- | --- | --- |
| HIGH | `depends_on`, `implements`, `causes`, `effect_of`, `example_of`, `instance_of`, `part_of`, `prerequisite_for` | Add only at `>=95` confidence. Suggest at 80–94. |
| MEDIUM | `supports`, `contradicts`, `extends`, `generalizes`, `specializes`, `compares_with`, `derived_from`, `references` | Suggest at `>=80`; never add automatically. |
| LOW | `related_to`, `inspired_by` | Never create automatically. |

## Full Relationship Vocabulary (18 Types)

See [relationship-types.md](file:///.antigravity/shared/relationship-types.md) for approved semantic definitions.

| Type | Priority | Symmetric? |
|------|----------|----------|
| `depends_on` | HIGH | No |
| `implements` | HIGH | No |
| `causes` | HIGH | No |
| `effect_of` | HIGH | No |
| `example_of` | HIGH | No |
| `instance_of` | HIGH | No |
| `part_of` | HIGH | No |
| `prerequisite_for` | HIGH | No |
| `supports` | MEDIUM | Yes |
| `contradicts` | MEDIUM | Yes |
| `extends` | MEDIUM | No |
| `generalizes` | MEDIUM | No |
| `specializes` | MEDIUM | No |
| `compares_with` | MEDIUM | Yes |
| `derived_from` | MEDIUM | No |
| `references` | MEDIUM | No |
| `related_to` | LOW | Yes |
| `inspired_by` | LOW | No |

## Relations Block

Prefer the structured `relations` frontmatter block over bare body wikilinks for machine-readable relationships:

```yaml
relations:
  - target: "Backpropagation"
    type: "depends_on"
    confidence: 98
    reason: "Gradient descent consumes gradients from backprop"
    creation_method: "human"
    human_verified: true
```

Body wikilinks remain the authoritative prose layer; the `relations` block is the machine-readable layer.

## Backward Compatibility

The legacy `related: []` field is preserved. Automation treats bare `related` entries as `{type: related_to, confidence: null, creation_method: legacy}`. Migrate to `relations` when the note is materially edited.

## Rules

- A HIGH-priority automatic link requires a known relationship type and confidence `>=95`.
- MEDIUM and LOW links are suggestions until a human confirms them.
- Preserve manual links unless they are demonstrably invalid and a protected-action approval exists.
- Every active node needs at least one justified graph link and one owner MOC; do not manufacture links just to satisfy a metric.
- A note may not exceed **15 `relations` entries** (see [constants.md](file:///.antigravity/shared/constants.md)). Prioritise HIGH types when trimming.
- Record applied and suggested links in the audit log.
