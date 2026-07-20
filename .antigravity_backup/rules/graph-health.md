# Graph Health Rules

The Infinity Brain graph health must be audited regularly. We define the following rules and thresholds to evaluate vault health.

## Target Metrics & Thresholds

- **Orphan Count**: Nodes with < 1 inbound links (backlinks). Target: **0 orphans**.
- **Broken Wikilinks**: Links referencing non-existent files. Target: **0 broken links**.
- **Invalid Tags**: Tags used in notes that are not registered in `tag-schema.md`. Target: **0 invalid tags**.
- **Empty MOCs**: Maps of Content containing no notes. Target: **0 empty MOCs**.
- **Average Backlinks per Node**: The average in-degree connection density of nodes. Target: **>= 2.5**.

## Mitigation Protocols
- **Orphans**: Details must be logged in `reports/_orphans.md` with linking suggestions.
- **Broken Links**: Listed in `reports/broken-links.md` for manual or automated resolution.
- **Invalid Tags**: Listed in `reports/invalid-tags.md` for cleanup.
