# Folder: .antigravity/plugins

## File: plugins\claude\README.md

```markdown
# Claude Code Plugin Integration

This directory hosts prompt libraries, configurations, or custom skills designed for integration with the Claude Code CLI tool.

- **Purpose**: Exposes specialized NexusDB operations (such as note ingest, promotion rubric scoring, and duplicate check) as executable tools directly in Claude's environment.
```

---

## File: plugins\codex\README.md

```markdown
# Codex Plugin Integration

This directory hosts extensions or integrations related to coding intelligence engines and automated software engineering plugins.

- **Purpose**: Automates the sync between code repositories and note references in the vault.
```

---

## File: plugins\custom\README.md

```markdown
# Custom Plugin Extensions

This directory holds user-defined, custom extensions and hook scripts.

- **Purpose**: Exposes a clean API for you to add your own scripts, hooks, or custom integrations without modifying the core vault infrastructure.
```

---

## File: plugins\gemini\README.md

```markdown
# Gemini Agent Plugin Integration

This directory hosts agent configurations, API wrappers, and tool definitions for the Gemini developer platform.

- **Purpose**: Integrates Gemini's structured output generation API (JSON Schema validation on generation) with the note creation and editing lifecycle.
```

---

## File: plugins\obsidian\README.md

```markdown
# Obsidian Plugin Integration

This directory hosts extensions, custom configurations, templates, or scripts used to integrate the NexusDB automation pipeline with Obsidian.

- **Purpose**: Enables seamless synchronization of frontmatter schemas, validation checks, and automatic backlink visualization in Obsidian.
- **Future Work**: Add hotkey bindings, metadata update events, and graph view customizations.
```

---

# Folder: .antigravity/agents

## File: agents\duplicate-detector.md

```markdown
# Agent: Duplicate Detector

Purpose: identify duplicate titles, aliases, and near-identical concepts.

Output: merge candidates and collision warnings.
```

---

## File: agents\graph-optimizer.md

```markdown
# Agent: Graph Optimizer

Purpose: improve graph density by suggesting links and cleanup actions.

Output: missing-link suggestions and sparse-cluster warnings.
```

---

## File: agents\link-suggester.md

```markdown
# Agent: Link Suggester

Purpose: suggest backlink opportunities for new notes based on overlap and similarity.

Output: prioritized link suggestions.
```

---

## File: agents\orphan-sweeper.md

```markdown
# Agent: Orphan Sweeper

Purpose: find low-backlink notes and surface the best fix.

Output: orphan report with suggested MOC links, related notes, or merge candidates.
```

---

## File: agents\promotion-enforcer.md

```markdown
# Agent: Promotion Enforcer

Purpose: evaluate notes against promotion thresholds after a rebuild.

Output: promotion candidates and stable evergreen candidates.
```

---

## File: agents\raw-lifecycle-mover.md

```markdown
# Agent: Raw Lifecycle Mover

Purpose: move a processed source from `01_RAW/capture/` to `01_RAW/source/`.

Trigger: after atomic notes are created and linked.
```

---

## File: agents\tag-schema-guardian.md

```markdown
# Agent: Tag Schema Guardian

Purpose: validate proposed tags before a note is written.

Input: candidate note metadata.
Output: approve, warn, or block.

Policy: only tags from `.antigravity/rules/metadata/tag-schema.md` are allowed.
```

---

## File: agents\vault-health-report.md

```markdown
# Agent: Vault Health Report

Purpose: summarize node counts, tag health, orphan trends, and MOC rebuild history.

Output: monthly digest.
```

---

