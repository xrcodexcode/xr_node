---
module: core_audit_log
version: 1.1.0
priority: 4
depends_on:
  - core_governance
exports:
  - audit_log_schema
  - audit_log_location
loads: []
compatible_schema_versions: [3, 4]
estimated_token_cost: 350
owner: vault-owner
last_reviewed: 2026-07-18
change_reason: "Migrated to module system with manifests."
---

# Audit Log Standard

This module defines the required fields, rules, and formats for recording agent and system actions in the vault's append-only audit log.

## 1. Audit Log Location
All audit entries must be appended to:
- `.antigravity/logs/audit-log.md`

## 2. Table Column Schema
Every entry must correspond to a row in the audit log table, defined as:

| Field | Description / Format |
|---|---|
| `timestamp` | ISO 8601 formatted timestamp with local offset |
| `actor` | Identifier of the entity executing the change (human, agent name, or automation script name) |
| `action` | The type of action: `create`, `suggest`, `promote`, `link`, `merge`, `archive`, `restore`, `update`, `observe`, or `exception` |
| `target` | Canonical file path or Note UUID being modified |
| `reason` | Concise explanation of why the action was taken |
| `rule` | The specific governing rule file and section (e.g., `linking-rules.md §4`) |
| `sources` | The source file path(s) or IDs from which the knowledge was derived, or `none` |
| `confidence` | Action confidence score (`0–100`) calculated using calibration formulas |
| `result` | The final outcome: `applied`, `suggested`, `rejected`, `logged-observation`, or `rolled-back` |
| `rollback` | Safe rollback command, path to backup snapshot, or `not-applicable` |
| `exception_id` | Unique ID of approved exception from `exception_policy.md` or `none` |

## 3. Markdown Formatting Schema
Audit entries must be appended using this exact markdown table row format:
```markdown
| timestamp | actor | action | target | reason | rule | sources | confidence | result | rollback | exception_id |
| --- | --- | --- | --- | --- | --- | --- | ---: | --- | --- | --- |
```

## 4. Operational Requirements
- **Append-only**: Never delete, rewrite, or reorder historical rows in `.antigravity/logs/audit-log.md`.
- **Pre-execution logging**: For any protected action (merging, renaming titles, archiving sources, or rewriting prose), the entry must be drafted and approved before execution.
- **Failures**: Audit log failures (e.g., read/write errors on the audit file) must halt the entire pipeline.
