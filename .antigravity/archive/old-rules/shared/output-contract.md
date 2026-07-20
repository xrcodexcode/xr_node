# NexusDB AI Output Contract

All agents executing tasks within the vault must adhere to this output contract.

## Rules

1. **No Conversational Filler**: Output only the requested content (Markdown or JSON). Do not say "Here is your file" or "I have processed the note."
2. **Strict Schema Adherence**: Frontmatter must validate perfectly against the corresponding schema in `.antigravity/schemas/`.
3. **Structured Body Format**: Always write structured headings in the body:
   - For atomic notes: `## Claim` (or `## Definition`), `## Explanation`, `## Related`, `## Source`.
   - For MOCs: `## Overview`, `## Core Nodes`, `## Related MOCs`.
4. **Be Concise**: Keep explanations brief and focused. Avoid verbose paragraphs.
5. **No Double Formats**: Do not format headers inside list items or use bold headers inside sections.
