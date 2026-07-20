# Retrieval Rules

Before creating any new note in the vault, you must search the existing knowledge base to prevent duplicates.

## Duplicate Prevention Checklist

1. **Search Title**: Search for notes with the exact same name or similar spelling.
2. **Search Aliases**: Look up alternate names in note frontmatter (`aliases:` list).
3. **Search Semantic Similarity**: Scan for conceptually matching topics, synonyms, or related conceptual explanations.
4. **Search Backlinks**: Check incoming references for files that might describe the concept.

## Ingestion Resolution Matrix

- **Equivalent Node Exists**: Update the existing node with new details and add new links. Do not create a duplicate.
- **Partially Related Node Exists**: Create a new node, link it, and cross-reference both nodes.
- **No Node Exists**: Create the node following the template and schema rules.
