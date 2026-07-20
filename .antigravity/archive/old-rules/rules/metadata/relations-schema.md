---
title: NexusDB Semantic Relationship Schema
type: governance-rule
status: active
version: 1.0.0
last_reviewed: 2026-07-18
approved_by: vault-owner
change_reason: Initial release — typed semantic relationships with confidence tracking
deprecation_date: null
---

# Semantic Relationship Schema

## Purpose

Plain `related` links carry no semantic meaning and cannot be ranked, queried, or validated. This schema introduces **typed, confidence-scored relationships** that make knowledge connections machine-readable, AI-queryable, and human-verifiable.

---

## 1. Relationship Block Syntax

Each relationship is an entry in the `relations` frontmatter list:

```yaml
relations:
  - target: "Gradient Descent"          # canonical title of the linked note
    type: "prerequisite_for"             # one of the 18 controlled types
    confidence: 95                       # integer 0–100
    reason: "Backprop computes gradients consumed by gradient descent"
    evidence: "Stated in source §3.2"    # optional; quote or section ref
    source: "deep-learning-fundamentals" # optional; source file slug
    creation_method: "human"            # human | ai-suggested | ai-auto
    human_verified: true                 # boolean
```

All fields except `target` and `type` are optional but strongly recommended for AI-generated relationships.

---

## 2. Relationship Vocabulary (18 Types)

| Type | Direction | Meaning | Priority |
|------|-----------|---------|----------|
| `supports` | A → B | A provides evidence or argument for B | MEDIUM |
| `contradicts` | A ↔ B | A and B make incompatible claims | MEDIUM |
| `depends_on` | A → B | A requires B to function or be understood | HIGH |
| `implements` | A → B | A is a concrete implementation of abstract B | HIGH |
| `extends` | A → B | A adds to or builds upon B | MEDIUM |
| `generalizes` | A → B | A is a broader version of B | MEDIUM |
| `specializes` | A → B | A is a narrower or more specific version of B | MEDIUM |
| `causes` | A → B | A is a causal antecedent of B | HIGH |
| `effect_of` | A → B | A is the result or consequence of B | HIGH |
| `example_of` | A → B | A is a concrete case illustrating B | HIGH |
| `instance_of` | A → B | A is a specific instance of concept B | HIGH |
| `part_of` | A → B | A is a component or sub-element of B | HIGH |
| `related_to` | A ↔ B | General association; use only when no stronger type applies | LOW |
| `compares_with` | A ↔ B | A and B are commonly contrasted | MEDIUM |
| `prerequisite_for` | A → B | A must be understood before B | HIGH |
| `derived_from` | A → B | A was derived, adapted, or inspired directly by B | MEDIUM |
| `inspired_by` | A → B | A draws loose conceptual inspiration from B | LOW |
| `references` | A → B | A cites or quotes B | MEDIUM |

### Priority Behaviour

| Priority | Auto-create threshold | Auto-suggest threshold |
|----------|----------------------|----------------------|
| HIGH | `confidence >= 95` AND `human_verified: true` OR `creation_method: human` | `confidence >= 80` |
| MEDIUM | Never auto-create | `confidence >= 80` |
| LOW | Never auto-create | Never auto-suggest |

---

## 3. Confidence Rules

| `confidence` | `creation_method` | Behaviour |
|-------------|-----------------|-----------|
| `>= 95` | `human` | Apply automatically; log |
| `>= 95` | `ai-auto` | Apply automatically only for HIGH-priority types; suggest for MEDIUM/LOW |
| `80–94` | any | Suggest only; never apply automatically |
| `< 80` | any | Do not create or suggest; log as observation only |

---

## 4. Backward Compatibility

The existing `related: []` list is preserved and continues to be valid. Automation scripts treat bare `related` entries as:

```yaml
type: related_to
confidence: null
creation_method: legacy
human_verified: false
```

When a note is materially edited, migrate `related` entries to the `relations` block if the relationship type can be determined with confidence ≥ 80.

---

## 5. Maximum Relations per Note

A note must not declare more than **15 `relations` entries**. If more relationships are identified, prioritise HIGH-priority types and discard or defer LOW-priority ones.

---

## 6. Validation

Validators must reject `relations` entries where:
- `type` is not in the 18-type vocabulary.
- `confidence` is outside `0–100`.
- `target` refers to a note that does not exist in the vault.
- `creation_method` is not one of `human | ai-suggested | ai-auto`.

Report violations to `check_vault.py` output without blocking existing valid notes.

---

## 7. Graph Query Semantics

For graph analytics, relationships have directionality:
- **Directed**: `depends_on`, `implements`, `causes`, `effect_of`, `example_of`, `instance_of`, `part_of`, `prerequisite_for`, `derived_from`, `inspired_by`, `references`, `extends`, `generalizes`, `specializes`
- **Symmetric** (bidirectional): `contradicts`, `related_to`, `compares_with`, `supports`

When reporting graph metrics, directed relationships count as one edge in the stated direction. Symmetric relationships count as two directed edges.

---

## 8. Examples

```yaml
# Example: gradient-descent.md
relations:
  - target: "Backpropagation"
    type: "depends_on"
    confidence: 99
    reason: "Gradient descent uses gradients computed by backpropagation"
    creation_method: "human"
    human_verified: true

  - target: "Learning Rate"
    type: "part_of"
    confidence: 97
    reason: "Learning rate is a hyperparameter within gradient descent"
    creation_method: "human"
    human_verified: true

  - target: "Stochastic Gradient Descent"
    type: "generalizes"
    confidence: 95
    reason: "SGD is a variant of batch gradient descent"
    evidence: "Source §4.1 explicitly contrasts batch vs stochastic"
    source: "deep-learning-fundamentals"
    creation_method: "ai-suggested"
    human_verified: false
```
