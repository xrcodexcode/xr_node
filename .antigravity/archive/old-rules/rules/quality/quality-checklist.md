---
title: NexusDB Quality Checklist
type: governance-rule
status: active
version: 2.0.0
last_reviewed: 2026-07-18
approved_by: vault-owner
change_reason: Add governance and lifecycle validation gates
deprecation_date: null
---

# Quality Checklist

Before marking an ingest complete or promoting a note, validate:

- [ ] Canonical frontmatter schema is present and valid.
- [ ] UUID is present and immutable.
- [ ] Canonical title is specific and unique; aliases are not duplicate nodes.
- [ ] `type`, `status`, `domain`, `source_type`, and `owner_moc` are structured metadata, not tags.
- [ ] Discovery tags are approved and purposeful.
- [ ] Source provenance is recoverable for source-dependent claims.
- [ ] Note is atomic or explicitly remains a knowledge document/synthesis note.
- [ ] One owner MOC is declared and the note is discoverable there.
- [ ] At least one justified graph link exists for an active node.
- [ ] Duplicate decision was measured and logged when a candidate exists.
- [ ] Link priority and confidence satisfy `linking-rules.md`.
- [ ] Promotion score is recorded when promotion is considered.
- [ ] The original source is archived, not deleted.
- [ ] Material changes are append-logged with rule, confidence, and rollback path.
- [ ] No broken internal links are introduced.

If a criterion fails, keep the artifact in its current lifecycle state. Do not promote by assumption.

