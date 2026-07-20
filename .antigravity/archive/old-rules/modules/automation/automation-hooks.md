---
module: automation_hooks
version: 2.1.0
priority: 5
depends_on:
  - core_governance
exports:
  - legacy_automation_hooks
loads: []
compatible_schema_versions: [3, 4]
estimated_token_cost: 150
owner: vault-owner
last_reviewed: 2026-07-18
change_reason: "Migrated to module system with manifests."
---

# Legacy Automation Hooks

> [!IMPORTANT]
> This rule has been deprecated and split into modular, executable files under the `.antigravity/hooks/` directory.

Please refer to the following new locations:
- [Pre-Ingestion Hook](file:///c:/Users/offic/OneDrive/Desktop/obsidean/nexusdb/.antigravity/hooks/pre-ingest.md)
- [Post-Ingestion Hook](file:///c:/Users/offic/OneDrive/Desktop/obsidean/nexusdb/.antigravity/hooks/post-ingest.md)
- [Pre-Promotion Hook](file:///c:/Users/offic/OneDrive/Desktop/obsidean/nexusdb/.antigravity/hooks/pre-promotion.md)
- [Nightly Maintenance Hook](file:///c:/Users/offic/OneDrive/Desktop/obsidean/nexusdb/.antigravity/hooks/nightly-maintenance.md)
- [Weekly Audit Hook](file:///c:/Users/offic/OneDrive/Desktop/obsidean/nexusdb/.antigravity/hooks/weekly-audit.md)
