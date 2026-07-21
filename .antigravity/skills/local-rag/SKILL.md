---
name: Local Knowledge Search
description: Direct, zero-RAM file-based knowledge search across NexusDB Markdown notes using MOC navigation, grep pattern search, tag schema, and Obsidian backlinks.
---

# Local Knowledge Search (Direct File-Based Retrieval)

This skill enables Antigravity to retrieve knowledge from NexusDB with **zero local RAM overhead**, bypassing heavy local vector databases (ChromaDB) and local LLMs (Ollama).

## Direct Retrieval Workflow

When answering project questions:

1. **Step 1 — Consult MOCs (`03_MOC/`)**:
   Check relevant Maps of Content first for curated entry points (e.g. `03_MOC/study-moc.md` or `03_MOC/index.md`).

2. **Step 2 — Search Note Titles & Content (`grep_search`)**:
   Use exact string or pattern searching across `NODES/`, `NOTES/`, and `02_NEW-KNOWLEDGE/` for key terms, definitions, and concepts.

3. **Step 3 — Follow Obsidian Backlinks (`[[WikiLinks]]`)**:
   Traverse note links referenced in target atomic notes to gather related context.

4. **Step 4 — Filter by Controlled Tags (`.antigravity/rules/tag-schema.md`)**:
   Use tag metadata in frontmatter to isolate topic areas.

5. **Step 5 — Ground Answer & Cite Files**:
   Formulate accurate responses citing exact Markdown files (e.g., `[[NODES/Atomic-Concept.md]]`). If information is absent, state clearly that local knowledge is missing.

## Why This Works

- **0% Background RAM Usage**: Laptop stays cool and responsive (ideal for 4 GB RAM / i3 7th Gen).
- **Instant Retrieval**: Direct file search operates at raw filesystem speeds.
- **Future Ready**: Notes remain 100% clean and ready to plug into ChromaDB/Vector RAG whenever hardware is upgraded.
