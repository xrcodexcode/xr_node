# Handoff Report — Milestone 1 Governance & Schema Exploration

**Target Path**: `c:\Users\offic\OneDrive\Desktop\obsidean\nexusdb\.agents\teamwork_preview_explorer_m1_2\handoff.md`  
**Date**: 2026-07-25  
**Author**: Exploration Specialist (`teamwork_preview_explorer_m1_2`)

---

## 1. Observation

Direct observations from inspecting governance rules, schemas, scripts, and templates:

### Observation 1: Authority Order & Core Governance (`GEMINI.md`)
File path: `c:\Users\offic\OneDrive\Desktop\obsidean\nexusdb\GEMINI.md`  
Line 40–52:
```text
1. governance.md
2. .antigravity/rules/*
3. .antigravity/schemas/*
4. .antigravity/templates/*
5. .antigravity/agents/*
6. .antigravity/skills/*
7. .antigravity/hooks/*
8. .antigravity/automations/*
9. this GEMINI.md
```
Line 120: `NODES: The atomic layer. Singular, permanent, evergreen concepts. No subfolders allowed.`

### Observation 2: Controlled Tag Schema (`.antigravity/rules/tagging.md`)
File path: `c:\Users\offic\OneDrive\Desktop\obsidean\nexusdb\.antigravity\rules\tagging.md`  
Line 15–28:
```markdown
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
```
Line 30–34:
```markdown
## Approved Aliases

- `case_study` -> `case-study`
- `open_question` -> `open-question`
```
Line 37–38:
`- Lowercase & Hyphenated: All tags must be lowercase and hyphenated.`  
`- No Ad-Hoc Tags: Never invent ad hoc tags. Every tag used in the vault must exist in this file.`

### Observation 3: Automation Tag Parser (`vault_utils.py`)
File path: `c:\Users\offic\OneDrive\Desktop\obsidean\nexusdb\.antigravity\automations\lib\vault_utils.py`  
Line 170: `schema_path = _self.RULES / "tagging.md"`  
Line 160–221: `load_allowed_tags()` parses `.antigravity/rules/tagging.md` for allowed tags and alias mapping.

### Observation 4: Frontmatter Schema v4 (`.antigravity/schemas/frontmatter.md`)
File path: `c:\Users\offic\OneDrive\Desktop\obsidean\nexusdb\.antigravity\schemas\frontmatter.md`  
Line 15–38:
```yaml
---
id: 123e4567-e89b-42d3-a456-426614174000  # UUID v4; immutable
title: Canonical Title
type: atomic-note  # atomic-note | evergreen-note | raw-source | moc | governance-rule | log | project | journal
status: verified   # captured | processed | learning | verified | evergreen | canonical | maintained | archived | atomic
domain: general    # canonical domain from tagging rules (tagging.md)
source_type: null  # book | article | paper | youtube | podcast | web-clip | transcript | course | null
created: YYYY-MM-DD
updated: YYYY-MM-DD
review: YYYY-MM-DD          # next scheduled review date
confidence: 95              # integer 0–100
version: 1                  # note content version
aliases: []
tags: []                    # controlled discovery facets only (from tagging.md)
owner_moc: General MOC      # exactly one canonical MOC title string
sources: []                 # source paths, URLs, or source IDs
related: []                 # related note titles or IDs
schema_version: 4           # current version
---
```

### Observation 5: Rules for `NODES/` Folder (`writing.md`, `naming.md`, `linking.md`)
File path: `c:\Users\offic\OneDrive\Desktop\obsidean\nexusdb\.antigravity\rules\writing.md`  
Line 54–62:
```markdown
- Flat Folder: NODES/ is completely flat. No subfolders are allowed.
- Single Idea: One file answers one question or states one reusable concept.
- Naming Match: The title in the frontmatter must match the filename exactly.
- Structured Sections:
  - ## Claim or ## Definition (One-sentence clear statement)
  - ## Explanation (Detailed context in plain language)
  - ## Related (Wikilinks to related notes)
  - ## Source (Wikilink or path to original source)
- Metadata: Exactly one owner_moc, at least one connection, and source provenance.
```
File path: `c:\Users\offic\OneDrive\Desktop\obsidean\nexusdb\.antigravity\rules\naming.md`  
Line 13: `Every active note has one stable canonical title. For nodes in NODES/, the title must match the filename exactly.`  
Line 22: `Never change a canonical title automatically. Any title change requires explicit approval, snapshot, audit entry, and a rollback path.`

---

## 2. Logic Chain

1. **Hierarchy Resolution**:
   - Observation 1 establishes that `.antigravity/rules/*` and `.antigravity/schemas/*` take precedence over `GEMINI.md` and automated scripts.
   - Therefore, specifications in `tagging.md` and `frontmatter.md` represent the binding canonical rules.

2. **Tag Rules Synthesis**:
   - Observation 2 directly enumerates 12 approved discovery tags (`beginner`, `advanced`, `comparison`, `case-study`, `implementation`, `reference`, `history`, `decision`, `example`, `checklist`, `open-question`, `contrarian`) and 2 aliases (`case_study` $\rightarrow$ `case-study`, `open_question` $\rightarrow$ `open-question`).
   - Observation 3 confirms python automation scripts validate tags by parsing `.antigravity/rules/tagging.md`.
   - Ad-hoc tags are strictly disallowed. Legacy tag categories (source, domain, status tags) are superseded by Schema v4 YAML frontmatter fields.

3. **Frontmatter Schema v4 Synthesis**:
   - Observation 4 details all required fields for Schema v4: `id` (UUID v4), `title`, `type`, `status`, `domain`, `source_type`, `created`, `updated`, `review`, `confidence`, `version`, `aliases`, `tags`, `owner_moc`, `sources`, `related`, and `schema_version: 4`.
   - For `type: study-note` (or `literature-note`), `id` must be UUID v4, `status` set to `draft`/`learning`, `tags` restricted to the 12 discovery tags, and `owner_moc` set to a single MOC title string.
   - For `type: atomic-note`, `title` must match the filename exactly, `status` set to `atomic`/`verified`, and `owner_moc` must be present.

4. **`NODES/` Folder Rules Synthesis**:
   - Observations 1 and 5 prove that `NODES/` must remain 100% flat with zero subfolders.
   - Every file must represent exactly one atomic concept or claim.
   - The filename must match the `title` frontmatter field in Title Case.
   - The body must include `## Claim` or `## Definition`, `## Explanation`, `## Related`, and `## Source`.

---

## 3. Caveats

- **Legacy Tags in Backup Files**: Older documentation (`.antigravity_backup/rules/tag-schema.md`) contains domain, status, and source tags (`#youtube`, `#concept`, `#ai`). In current Schema v4, these are populated in explicit frontmatter keys (`source_type`, `type`, `status`, `domain`), leaving `tags` strictly for discovery tags from `tagging.md`.
- **Note Type Naming**: In `youtube-study-note.md` template, `type: literature-note` is used alongside `type: study-note` in request prompts. Both represent detailed study notes prior to atomic extraction.

---

## 4. Conclusion

1. **Tag Schema**: Exactly 12 valid discovery tags (`beginner`, `advanced`, `comparison`, `case-study`, `implementation`, `reference`, `history`, `decision`, `example`, `checklist`, `open-question`, `contrarian`) and 2 aliases (`case_study`, `open_question`) are authorized.
2. **Frontmatter Schema v4**: Both `study-note` and `atomic-note` require 17 standard fields including UUID v4 `id`, matching `title`, `type`, `status`, `domain`, `source_type`, ISO dates (`created`, `updated`, `review`), `confidence`, `version`, `aliases`, `tags`, single `owner_moc`, `sources`, `related`, and `schema_version: 4`.
3. **`NODES/` Rules**: Strictly flat directory, single concept per note, frontmatter `title` == filename, required four body sections (`Claim`/`Definition`, `Explanation`, `Related`, `Source`), reachable from `owner_moc`.

---

## 5. Verification Method

To independently verify these conclusions:

1. **Inspect Tag Schema & Parser**:
   - Inspect `.antigravity/rules/tagging.md` lines 15–38.
   - Inspect `.antigravity/automations/lib/vault_utils.py` line 170 to confirm tag schema path loading.

2. **Inspect Frontmatter Schema v4**:
   - View `.antigravity/schemas/frontmatter.md` lines 19–38.
   - View `.antigravity/templates/atomic-note.md` and `.antigravity/templates/youtube-study-note.md`.

3. **Inspect NODES Rules**:
   - View `.antigravity/rules/writing.md` lines 52–63.
   - View `.antigravity/rules/naming.md` lines 13–22.
   - View `GEMINI.md` lines 120 and 224–229.

4. **Invalidation Conditions**:
   - Findings would be invalidated if `.antigravity/rules/tagging.md` is modified to include new tags or if Schema v4 is superseded by a newer schema version.
