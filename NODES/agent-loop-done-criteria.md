---
id: 93548735-31a5-4608-bcd2-f6f4066ce6d5
title: Done Criteria in Agent Loops
type: atomic-note
status: evergreen
domain: ai
source_type: youtube
created: 2026-07-14
updated: 2026-07-18
review: 2026-10-16
confidence: 95
version: 1
aliases: []
tags: []
owner_moc: AI & Machine Learning Map of Content
sources:
  - 01_RAW/SOURCE/finally-agent-loops-clearly-explained.md
related: []
schema_version: 3
concept_id: agent-loop-done-criteria-v1
last_verified: null
verification_interval: null
stale_after: null
review_priority: normal
confidence_decay: null
relations: []
---

# Done Criteria in Agent Loops

## Core idea
The done criteria is the stop condition that dictates when an agent loop should terminate. It is best defined using objective, checkable metrics (e.g. all tests passing, a specific numeric score threshold met, or a hard cap on the number of loop iterations/passes) rather than subjective criteria ("until satisfied").

## Why it matters / connection
Runaway costs and infinite loops are major risks in autonomous agent systems. Defining a hard iteration cap (e.g. maximum 8 passes) acts as a safety guardrail. When designing loops, converting subjective requirements into checkable, objective constraints (such as a separate rubric-scoring sub-agent) ensures the loop stops reliably and outputs predictable results.

## Links
- [[finally-agent-loops-clearly-explained-moc|Finally. Agent Loops Clearly Explained MOC]]
- [[yt-moc|YouTube MOC]]
- [[loop-verification-importance|Importance of the Verification Step]]
- [[finally-agent-loops-clearly-explained|Source Note — Finally. Agent Loops Clearly Explained]]
- [[finally-agent-loops-clearly-explained-cheatsheet|Cheatsheet — Finally. Agent Loops Clearly Explained]]


## Related Concepts
- [[agent-loop-mechanics]] — High conceptual similarity score of 80%.
- [[loop-engineering]] — High conceptual similarity score of 77%.


### Additional Concepts
- [[agent-loop-architectures]] — High conceptual similarity score of 79%.
