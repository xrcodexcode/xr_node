---
name: Ingestion Skill
description: Automatically convert EPUB books to Markdown, extract atomic concepts, facts, definitions, methods, examples, and quotes using Gemini, and link them to vault MOCs.
---

# Ingestion Skill (Infinity Brain PKM Engine)

This skill automates the process of importing EPUB books, converting them to clean Markdown source documents, extracting atomic notes using Gemini, placing them in the flat `02_NODES/` directory, and cross-linking them with their source and respective Maps of Content (MOCs).

## Setup & Prerequisites

1. Ensure the virtual environment is active and dependencies are installed:
   ```powershell
   .\.venv\Scripts\pip install -r requirements.txt
   ```

2. Configure your Gemini API key in a `.env` file in the root of the vault:
   ```text
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

## Usage

Run the ingestion script using the Python virtual environment:

```powershell
.\.venv\Scripts\python .antigravity/automations/ingest_book.py --epub "path/to/book.epub" --tags "tag1,tag2" --chapters "1-3"
```

### CLI Arguments

- `--epub` (Required): Absolute or relative path to the EPUB book file.
- `--tags` (Optional): Comma-separated list of tags to append to all extracted notes. Defaults to `dsa,study,books`.
- `--model` (Optional): Gemini model to use for concept extraction. Defaults to `gemini-2.5-flash`.
- `--chapters` (Optional): Chapter filter to process. Examples:
  - `all` (Process all chapters - *Note: This will perform many API calls*)
  - `1-3` (Process chapters 1 to 3 inclusive - *Default*)
  - `1,2,5` (Process chapters 1, 2, and 5)
  - `4` (Process chapter 4 only)

## Workflow Steps

1. **Convert to Markdown**: Extracts text from the EPUB and writes it to `01_RAW/source/<book-slug>.md` following the vault's source template format.
2. **Chunking**: Uses the EPUB Table of Contents (TOC) to group pages into logical chapters. If no TOC is found, it defaults to chunking every 20 pages.
3. **Structured Extraction**: Sends chapter text to the Gemini API with a strict Pydantic JSON schema to extract concepts, facts, definitions, methods, examples, and quotes.
4. **Writing Atomic Notes**: Creates Obsidian notes under `02_NODES/` (completely flat) using the vault's template, linking them to:
   - The source book file (`01_RAW/source/<book>.md`)
   - The relevant Maps of Content (e.g. `study-moc`, `books-moc`)
   - Other notes extracted in the same run that are related.
5. **Rebuilding MOCs**: Calls `generate_mocs.py` to refresh the vault index and promote highly linked nodes.
