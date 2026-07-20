---
version: 1.0.0
last_reviewed: 2026-07-18
approved_by: vault-owner
change_reason: Initial creation of ownership rule
deprecation_date: null
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
- Automated actions that would alter ownership must pass the Irreversible‑Action Protection checks (see `irreversible_actions.md`).
