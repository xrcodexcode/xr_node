# Promotion Rules

Notes mature through a structured lifecycle from raw drafts to evergreen foundation nodes.

## Maturity Stages

| Stage | Tag | Criteria |
| :--- | :--- | :--- |
| **Draft** | `#draft` | Newly ingested, raw extractions, or notes awaiting link audit and review. |
| **Processed** | `#processed` | Linked to at least 1 MOC, has at least 1 inbound backlink, validated tag schema, and reviewed for structural correctness. |
| **Evergreen** | `#evergreen` | High-quality concept notes with at least 3 inbound backlinks, fully integrated, stable, and highly connected. |

## Promotion Workflow
1. **From Draft to Processed**:
   - Automatically promoted once backlinks are >= 1 AND tags are validated AND MOC association is completed.
2. **From Processed to Evergreen**:
   - Evaluated periodically by the promotion enforcer. Requires in-degree backlinks >= 3, core idea verified, and active linkage.
- Automation scripts should evaluate candidates and write suggestions to `reports/promotion-candidates.md`.
