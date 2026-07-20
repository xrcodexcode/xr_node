# Automation Hooks

## Pre-ingestion

- validate source type
- validate tags against schema
- detect likely duplicates

## Post-ingestion

- move raw source from `capture` to `source`
- rebuild MOCs
- refresh health reports
- evaluate promotion candidates

## Scheduled

- weekly orphan sweep
- monthly vault health report
- periodic duplicate scan
