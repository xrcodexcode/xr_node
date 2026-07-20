# NexusDB Citation and Link Policy

This policy governs how references, links, and citations are added to notes.

## Provenance Rules

1. **Required Sources**: Any factual claim or definition must declare its source in the frontmatter `sources` array.
2. **Body Excerpts**: Quote directly from the raw source file in the `## Source` section of the note to preserve evidence.
3. **No Unbacked Claims**: If a note does not have a source, it must be explicitly labeled in the frontmatter as `source_type: original-observation`.

## Link Creation Rules

1. **High Priority Links**: Parent-child, prerequisite, cause, or part-of. Add automatically when relationship confidence `>= 95%`.
2. **Medium Priority Links**: Related concepts, alternatives, comparisons. Output as suggestions if confidence `>= 80%`.
3. **Low Priority Links**: Loose association. Do not create automatically. Leave to user discretion.
4. **No Orphans**: Every note must have at least one inbound or outbound link to keep the graph connected.
