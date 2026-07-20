---
module: metadata_decision_context
version: 1.1.0
priority: 5
depends_on:
  - shared_constants
  - metadata_schema
exports:
  - decision_context_rules
loads:
  - decision-context.schema.json
compatible_schema_versions: [3, 4]
estimated_token_cost: 450
owner: vault-owner
last_reviewed: 2026-07-18
change_reason: "Migrated to module system with manifests."
---

# Decision Context

## Purpose

At 10,000+ notes, it becomes impossible to remember why a note was created: why it was split from another note, why a particular framing was chosen, or what assumptions were made. The `decision_context` block preserves this reasoning in the note itself, making future curation, merging, and AI reasoning far more reliable.

---

## 1. Field Definition

`decision_context` is an **optional** frontmatter block. It is never populated by automation. It is the vault owner's voice and reasoning, preserved permanently.

```yaml
decision_context:
  why_created: "Short reason this note was created or split from another"
  decision: "Key curation decision made about this note's scope or framing"
  assumptions: []          # list of strings; things assumed to be true
  tradeoffs: []            # list of strings; what was sacrificed for atomicity/clarity
  importance: normal       # low | normal | high | critical
  context: "Situational context at the time of creation"
  future_work: "What would make this note more complete"
```

---

## 2. Field Rules

| Field | Required | Rule |
|-------|----------|------|
| `why_created` | No | One sentence explaining the trigger for creation. |
| `decision` | No | One sentence describing the key scope or framing decision. |
| `assumptions` | No | Array of strings. Each assumption is a belief held at creation time. |
| `tradeoffs` | No | Array of strings. What was deliberately omitted for atomicity. |
| `importance` | No | Controlled vocabulary: `low \| normal \| high \| critical`. Default `normal` when absent. |
| `context` | No | Situational context that explains why this note matters now. |
| `future_work` | No | What would improve or complete this note if time allowed. |

---

## 3. Immutability Rules

The `decision_context` block is **user-authored content**. It is governed by the AI commandment: *"Never overwrite user writing."*

Automation may:
- Read `decision_context` for analytics (e.g., count `importance: critical` notes).
- Append a new `decision_context` block if none exists, with `confidence ≥ 95`.

Automation must **never**:
- Overwrite any field within an existing `decision_context` block.
- Delete `decision_context`.
- Change `importance` without explicit human instruction.

---

## 4. When to Populate

Populate `decision_context` when any of the following is true:
- The note was split from another note (record the split decision).
- A merge was rejected (record why the notes are distinct).
- An unusual framing was chosen (record the reasoning).
- The note has a specific use case or audience.
- The note represents a controversial or uncertain position.
- The note was created under time pressure and may need revision.

Do not populate `decision_context` for routine ingestion of atomic facts; the block is for **non-obvious decisions**.

---

## 5. Examples

```yaml
# Split decision
decision_context:
  why_created: "Gradient descent and stochastic gradient descent were previously merged; split to preserve atomicity"
  decision: "Keep batch gradient descent as the canonical note; SGD is a specialization"
  assumptions: ["Reader is familiar with loss functions"]
  tradeoffs: ["Lost some contextual comparison depth by separating the notes"]
  importance: normal
  context: "Split during deep-learning-fundamentals ingestion pass"
  future_work: "Add a comparison table linking to SGD note"

# Merge rejection
decision_context:
  why_created: "Backpropagation and chain rule were flagged as potential duplicates but are distinct"
  decision: "Backprop is an algorithm; chain rule is a mathematical theorem. Keep separate."
  assumptions: []
  tradeoffs: []
  importance: high
  context: "Duplicate detector flagged 72% semantic similarity; human reviewed and rejected merge"
  future_work: "Add explicit differentiation note in body"
```

---

## 6. Analytics

`health_dashboard.py` reports:
- Count of notes with `decision_context` populated.
- Distribution of `importance` values.
- Notes with `importance: critical` or `importance: high` that have pending `future_work`.
- Notes with `decision_context.assumptions` that may need verification.
