---
module: quality_checklist
version: 2.1.0
priority: 5
depends_on:
  - shared_constants
  - core_governance
exports:
  - quality_checklist_rules
loads: []
compatible_schema_versions: [3, 4]
estimated_token_cost: 350
owner: vault-owner
last_reviewed: 2026-07-18
change_reason: "Migrated to module system with manifests."
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
- [ ] Link priority and confidence satisfy [linking-rules.md](file:///.antigravity/modules/graph/linking-rules.md).
- [ ] Promotion score is recorded when promotion is considered.
- [ ] The original source is archived, not deleted.
- [ ] Material changes are append-logged with rule, confidence, and rollback path.
- [ ] No broken internal links are introduced.

If a criterion fails, keep the artifact in its current lifecycle state. Do not promote by assumption.
