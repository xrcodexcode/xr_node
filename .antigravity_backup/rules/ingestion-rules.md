# Ingestion Rules

All incoming knowledge resources (books, transcripts, articles) must move through a structured ingestion pipeline to ensure quality and prevent clutter.

## Ingestion Pipeline Stages

```
 01_RAW/capture/ (Raw content captured by human)
       │
       ▼
 [Knowledge Ingestion / Extraction]
       │
       ▼
 [Atomic Notes Created] (Written to 02_NODES/)
       │
       ▼
 [All Notes Linked] (MOCs rebuilt, notes cross-linked)
       │
       ▼
 01_RAW/source/ (Raw source file archived)
```

## Rules and Guidelines

### 1. Ingestion Location
- Raw materials must first land in `01_RAW/capture/` as a starting point.
- Raw files must not be processed directly from the Desktop, Downloads, or other non-vault locations.

### 2. Processing Constraints
- Ingestion must extract fine-grained, atomic concepts.
- When ingesting a resource:
  - Do not create a single mega-note.
  - Split concepts into separate files.
  - Create a source note in `01_RAW/source/` containing the consolidated source details.

### 3. Archive Rules
- Raw source files must never remain inside `01_RAW/capture/` after ingestion.
- Once a source has been successfully atomized and its nodes written to `02_NODES/`, the source markdown text or EPUB/PDF file must be moved to `01_RAW/source/` for archival.
- All automations must automatically handle archiving.
