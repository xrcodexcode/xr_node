# Linking Rules

A Zettelkasten is only as powerful as its connections. Better-connected knowledge is preferred over isolated information.

## Link Rules and Requirements

### 1. Inbound Links (Backlinks)
- Every atomic note in `02_NODES/` must have at least one inbound link (backlink).
- Notes with zero backlinks are considered "orphans" and are flagged by automated health sweeps.

### 2. Map of Content (MOC) Association
- Every node must belong to at least one Map of Content (MOC).
- Nodes may belong to multiple MOCs.
- During note creation, check note tags/domains to find the most relevant MOC (e.g. `study-moc`, `ai-ml-moc`, `books-moc`).
- MOC listings must be updated instantly whenever notes are created or modified.

### 3. Cross-Linking
- Notes discussing related or dependent concepts must cross-link to each other.
- When creating a note, search the vault for semantically similar or referenced concepts and link to them using standard Wikilinks (`[[note-slug|Display Title]]`).
- To prevent broken lookups in the flat directory structure, links should use the note filename basename without full folder path qualifiers.

### 4. Broken Links
- Broken links (pointing to non-existent notes) are strictly prohibited.
- If a link target does not exist, the link must either be removed or the target note must be created.
