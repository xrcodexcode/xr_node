# NexusDB Vault Governance & AI Instructions

This document specifies the operational rules, safety guarantees, and core constraints for all AI assistants and automated tasks in **NexusDB**.

## 1. Core Operating Principles

1. **Atomicity**: One note answers one question or states one reusable idea. No subfolders are allowed inside `NODES/`. See [Writing & Ingestion Rules](file:///C:/Users/offic/OneDrive/Desktop/obsidean/nexusdb/.antigravity/rules/writing.md).
2. **Retrievability**: Every note must be connected to the knowledge graph. Orphan notes are invalid. All nodes must link to or from at least one Map of Content (MOC). See [Linking Rules](file:///C:/Users/offic/OneDrive/Desktop/obsidean/nexusdb/.antigravity/rules/linking.md).
3. **Controlled Taxonomy**: Do not invent tags. Only use tags defined in [Tagging Rules & Schema](file:///C:/Users/offic/OneDrive/Desktop/obsidean/nexusdb/.antigravity/rules/tagging.md).
4. **Safety & Traceability**: Raw source files are immutable. Never delete, overwrite, or move user files without permission. See [Review & Safety Rules](file:///C:/Users/offic/OneDrive/Desktop/obsidean/nexusdb/.antigravity/rules/review.md).

## 2. Guideline Modules

Detailed instructions are distributed into modular rules and schemas:

- **Naming Standards**: [naming.md](file:///C:/Users/offic/OneDrive/Desktop/obsidean/nexusdb/.antigravity/rules/naming.md)
- **Tagging Standards**: [tagging.md](file:///C:/Users/offic/OneDrive/Desktop/obsidean/nexusdb/.antigravity/rules/tagging.md)
- **Linking Standards**: [linking.md](file:///C:/Users/offic/OneDrive/Desktop/obsidean/nexusdb/.antigravity/rules/linking.md)
- **Ingestion & Writing Standards**: [writing.md](file:///C:/Users/offic/OneDrive/Desktop/obsidean/nexusdb/.antigravity/rules/writing.md)
- **Review & Quality Standards**: [review.md](file:///C:/Users/offic/OneDrive/Desktop/obsidean/nexusdb/.antigravity/rules/review.md)
- **Frontmatter Metadata Schema**: [frontmatter.md](file:///C:/Users/offic/OneDrive/Desktop/obsidean/nexusdb/.antigravity/schemas/frontmatter.md)
- **Note Architecture Schema**: [note-types.md](file:///C:/Users/offic/OneDrive/Desktop/obsidean/nexusdb/.antigravity/schemas/note-types.md)

## 3. Authority Order

If instructions or configurations conflict, resolve them using this strict hierarchy (excluding prompts, which act purely as templates):

```text
governance.md
      ↓
rules/
      ↓
schemas/
      ↓
templates/
      ↓
agents/
      ↓
skills/
      ↓
hooks/
      ↓
automations/
```

*If a conflict arises, the higher-priority level wins.*
