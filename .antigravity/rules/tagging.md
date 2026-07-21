---
title: Tagging Rules & Schema
type: governance-rule
status: active
version: 4.5.0
last_reviewed: 2026-07-21
approved_by: vault-owner
change_reason: "v4.5.0 — Relocated and consolidated tag schema."
---

# Tagging Rules & Schema

Tags are controlled discovery facets. They are not a substitute for structured metadata.

## Approved Discovery Tags

- `beginner` — introductory material or simple explanations
- `advanced` — complex concepts or in-depth technical analysis
- `comparison` — comparing two or more concepts, methods, or entities
- `case-study` — detailed analysis of a real-world example
- `implementation` — code, setup, or execution details
- `reference` — raw definitions, tables, or external reference links
- `history` — historical context, background, or evolution of an idea
- `decision` — architectural decision records or trade-offs
- `example` — concrete examples illustrating a concept
- `checklist` — lists of criteria, steps, or validations
- `open-question` — unsolved problems or areas requiring further research
- `contrarian` — viewpoints that challenge standard consensus

## Approved Aliases

- `case_study` -> `case-study`
- `open_question` -> `open-question`

## Rules

- **Lowercase & Hyphenated**: All tags must be lowercase and hyphenated.
- **No Ad-Hoc Tags**: Never invent ad hoc tags. Every tag used in the vault must exist in this file.
- **Zero or More**: Use zero or more approved discovery tags; do not tag by habit.
