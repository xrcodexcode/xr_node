---
module: core_exception
version: 1.1.0
priority: 5
depends_on:
  - core_governance
exports:
  - exception_logging_protocol
loads: []
compatible_schema_versions: [3, 4]
estimated_token_cost: 350
owner: vault-owner
last_reviewed: 2026-07-18
change_reason: "Migrated to module system with manifests."
---

# Exception Policy

## Principles
- Exceptions may be granted only when a concrete reason is documented.
- An exception must **not** break provenance or source integrity.
- Every exception receives an **expiration/ review date** after which it must be re‑evaluated.
- Repeated exceptions (three or more of the same type) trigger a **rule‑update proposal** during the monthly governance review.

## Required Fields (to be recorded in the audit log)
| Field | Description |
|---|---|
| `exception_id` | Unique identifier for the exception instance |
| `reason` | Clear, concise justification |
| `approver` | Person or agent granting the exception |
| `expiry_date` | ISO‑8601 date when the exception expires |
| `affected_rule` | Reference to the rule being overridden |
| `impact` | Description of any provenance or ownership impact |

## Process
1. **Request** – Submit an exception request (e.g., via a ticket or direct note) containing the fields above.
2. **Review** – The vault owner (or delegated approver) reviews the request.
3. **Approval** – If approved, the exception is logged in `.antigravity/logs/audit-log.md` with `result: approved`.
4. **Implementation** – The AI may temporarily relax the affected rule **only** for the specified scope and duration.
5. **Expiration** – On `expiry_date`, the exception is automatically revoked and the original rule re‑applied.
6. **Repeat Monitoring** – Track frequency of similar exceptions; after three, propose a permanent rule revision.

## Example
```
exception_id: EXC-2023-07-001
reason: Need to temporarily allow duplicate node titles for a rapid import batch.
approver: vault-owner
expiry_date: 2023-08-01T00:00:00Z
affected_rule: Graph Laws → No duplicate titles
impact: No provenance loss; duplicates will be merged after import.
```
