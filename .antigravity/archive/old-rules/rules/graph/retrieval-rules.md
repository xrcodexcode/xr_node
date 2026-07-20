---
title: NexusDB Retrieval Rules
type: governance-rule
status: active
version: 2.0.0
last_reviewed: 2026-07-18
approved_by: vault-owner
change_reason: Establish deterministic retrieval ranking
deprecation_date: null
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

