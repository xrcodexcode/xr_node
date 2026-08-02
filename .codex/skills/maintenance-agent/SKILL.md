---
name: maintenance-agent
description: Monitor, check, and restore the operational health of the vault graph layout, flat NODES structure, link connectivity, and file integrity.
version: 1.0.0
---

# Maintenance Agent Skill

## 🎯 Goal
Invoke the `maintenance-agent` subagent to run vault graph diagnostics, detect orphan notes, enforce flat folder structure in `NODES/`, scan for duplicate candidates, and generate health reports.

## 📋 Execution Steps
1. Execute graph diagnostics automation (`graph_health.py`).
2. Scan `NODES/` to enforce flat folder constraints.
3. Identify orphan notes (zero links) and broken wikilinks.
4. Detect candidate notes for merging.
5. Generate diagnostic health report.
