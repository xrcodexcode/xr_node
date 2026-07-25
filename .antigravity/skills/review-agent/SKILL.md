---
name: review-agent
description: Audit and validate notes at boundary stages to ensure complete metadata discipline, schema compliance, link connectivity, and promotion approval.
version: 1.0.0
---

# Review Agent Skill

## 🎯 Goal
Invoke the `review-agent` subagent to audit notes for metadata completeness, schema compliance, tag validity, link connectivity, and stage promotion eligibility.

## 📋 Execution Steps
1. Audit YAML frontmatter against schema rules (`frontmatter-schema.md`).
2. Verify tags against controlled tag list (`tag-schema.md`).
3. Check link connectivity (owner MOC link and in/out links).
4. Identify gaps, broken links, or schema violations.
5. Provide audit report and promotion recommendation to user.
