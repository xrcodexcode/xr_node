# Claude Control Plane (claude/)

This directory houses the configuration, instructions, metadata schemas, templates, rules, and automations that govern AI assistants and agent actions inside the **NexusDB** vault.

## Folder Structure

- 📄 [governance.md](governance.md) — Main AI operating instructions and core principles.
- 📄 [CONFIG.yaml](CONFIG.yaml) — Global vault settings and RAG retrieval profiles.
- 📂 [rules/](rules/) — Detailed guidelines and constraints.
  - 📄 [naming.md](rules/naming.md) — Note and file title standards.
  - 📄 [tagging.md](rules/tagging.md) — Controlled tag vocabulary and schema.
  - 📄 [linking.md](rules/linking.md) — Graph connectivity and link context rules.
  - 📄 [writing.md](rules/writing.md) — Ingestion pipeline and atomic note structure.
  - 📄 [review.md](rules/review.md) — Quality review cycles and safety commandments.
- 📂 [schemas/](schemas/) — Machine-readable structures.
  - 📄 [frontmatter.md](schemas/frontmatter.md) — Core YAML metadata block specification.
  - 📄 [note-types.md](schemas/note-types.md) — Definitions for supported note architectures.
- 📂 [templates/](templates/) — Standardized templates.
  - 📄 [atomic-note.md](templates/atomic-note.md) — Granular concept note layout.
  - 📄 [literature-note.md](templates/literature-note.md) — External source summary layout.
  - 📄 [moc.md](templates/moc.md) — Map of Content navigation page layout.
  - 📄 [project.md](templates/project.md) — Active project tracker layout.
  - 📄 [journal.md](templates/journal.md) — Daily reflection/activity layout.
- 📂 [prompts/](prompts/) — Structured prompt templates.
- 📂 [agents/](agents/) — Autonomous agent instructions and role configs.
- 📂 [skills/](skills/) — Specialized capabilities and workflows.
- 📂 [automations/](automations/) — Python validation, health check, and index scripts.
