---
version: 1.0.0
last_reviewed: 2026-07-18
approved_by: vault-owner
change_reason: Initial creation of the system glossary
deprecation_date: null
---

# Knowledge Vault Glossary

This glossary defines the authoritative terminology used across all governance rules, metadata schemas, and automations within `nexusdb`.

## Terminology Definitions

- **Atomic Note**: A permanent note representing exactly one concept, fact, method, or claim. It resides in `NODES/` and must be independently understandable without relying on specific source context.
- **Evergreen Note**: A stable, synthesis note that provides structured explanations of complex concepts, residing in `NOTES/`. Unlike raw sources, it uses domain-independent framing where possible and is designed for long-term reusability.
- **Map of Content (MOC)**: A navigation file in `03_MOC/` that organizes related notes. MOCs contain only links, maps, and structures; they do not contain inline descriptions or explanations.
- **Concept ID**: An immutable, human-readable slug (e.g., `backpropagation-v1`) that uniquely identifies a canonical concept across aliases and updates.
- **Archival Consolidation**: The process of merging duplicate notes where predecessor files are marked `status: archived` and their metadata (aliases, backlinks, sources) is merged into the canonical note, ensuring no historical content is deleted.
- **Orphan Node**: An active note that violates Graph Law 1 because it lacks an owner MOC or has zero justified inbound/outbound links.
- **Provenance**: Recoverable evidence tracing a note's factual claims to their original sources (URLs, PDFs, transcripts) stored in `01_RAW/SOURCE/`.
- **Maturity model**: The 8-stage lifecycle model (`captured → processed → learning → verified → evergreen → canonical → maintained → archived`) that tracks note readiness and quality.
- **Tag Entropy**: A metric measuring the distribution and diversity of tag usage. High tag entropy represents healthy tag usage; low entropy suggests over-concentration or excessive tag generation.
