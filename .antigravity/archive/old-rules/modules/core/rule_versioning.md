---
module: core_rule_versioning
version: 1.1.0
priority: 2
depends_on:
  - core_governance
exports:
  - rule_versioning_schema
loads: []
compatible_schema_versions: [3, 4]
estimated_token_cost: 250
owner: vault-owner
last_reviewed: 2026-07-18
change_reason: "Migrated to module system with manifests."
---

# Rule Versioning Schema

All governance rule files must begin with a YAML front‑matter block containing the following fields:

- `version`: semantic version of the rule file (e.g., `1.0.0`). Increment on any change.
- `last_reviewed`: date (ISO‑8601) of the most recent review.
- `approved_by`: identifier of the person or agent approving the rule.
- `change_reason`: brief description of why the rule was created or updated.
- `deprecation_date`: optional date when the rule is scheduled to be retired (or `null`).

**Enforcement**: Any automation that modifies a rule file must first read this metadata, verify that the proposing change has a higher `version` number, and append an entry to the audit log referencing these fields.
