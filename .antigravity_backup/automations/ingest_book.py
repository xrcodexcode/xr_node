# ==============================================================================
# XR_node "Infinity Brain" Ingestion Engine
# 
# This script converts an EPUB book to Markdown in 01_RAW/source/ and uses 
# the Google GenAI SDK to extract Concepts, Facts, Definitions, Methods, 
# Examples, and Quotes into flat atomic notes under 02_NODES/. It then
# updates the Maps of Content (MOCs) via generate_mocs.py.
# ==============================================================================

import os
import re
import sys
import time
import argparse
import subprocess
from datetime import datetime
import fitz  # PyMuPDF
from dotenv import load_dotenv
from pydantic import BaseModel, Field
from typing import List, Literal

# Load env variables from .env in project root
load_dotenv()

# Force UTF-8 encoding for stdout on Windows
if sys.platform.startswith('win'):
    import io
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')

# ==============================================================================
# Pydantic Schemas for Gemini Structured JSON output
# ==============================================================================
class ExtractedItem(BaseModel):
    type: Literal["concept", "fact", "glossary", "method", "example", "quote"]
    title: str = Field(description="Descriptive title of the note in Title Case (5-7 words max), e.g. Big O Notation")
    tags: List[str] = Field(description="Relevant tags, e.g. ['dsa', 'algorithms', 'math']")
    core_idea: str = Field(description="1-3 sentence summary of the core idea or concept definition")
    details: str = Field(description="Detailed notes, explanation, pseudocode, code blocks, or quote text")
    connections: List[str] = Field(description="Titles of other extracted items or existing vault concepts that this note links to")

class ExtractionResult(BaseModel):
    items: List[ExtractedItem]


def slugify(title: str) -> str:
    """Converts a title into a clean kebab-case filename."""
    cleaned = re.sub(r'[^\w\s-]', '', title).strip().lower()
    return re.sub(r'[-\s]+', '-', cleaned)


def convert_epub_to_md(epub_path: str, vault_root: str, default_tags: List[str]) -> tuple[str, str, str]:
    """
    Opens an EPUB file using PyMuPDF, extracts text page by page,
    and writes it to 01_RAW/source/<book-slug>.md using the source-template.md format.
    Returns (markdown_file_path, book_title, book_slug).
    """
    print(f"Opening EPUB file: {epub_path}")
    doc = fitz.open(epub_path)
    
    # Metadata extraction
    title = doc.metadata.get("title") or os.path.splitext(os.path.basename(epub_path))[0]
    author = doc.metadata.get("author") or "Unknown Author"
    book_slug = slugify(title)
    
    output_dir = os.path.join(vault_root, "01_RAW", "source")
    os.makedirs(output_dir, exist_ok=True)
    output_path = os.path.join(output_dir, f"{book_slug}.md")
    
    created_date = datetime.now().strftime("%Y-%m-%d")
    
    # Write source template frontmatter
    md_content = [
        "---",
        "type: source",
        f"tags: {default_tags}",
        f"created: {created_date}",
        f'author: "{author}"',
        'url: ""',
        "---\n",
        f"# Source — {title}\n",
        "## Key Takeaways",
        "- \n",
        "## Raw Notes"
    ]
    
    # Extract text from all pages
    print(f"Extracting text from {len(doc)} pages...")
    for page_num in range(len(doc)):
        text = doc[page_num].get_text().strip()
        if text:
            md_content.append(f"\n### Page {page_num + 1}\n")
            md_content.append(text)
            
    with open(output_path, "w", encoding="utf-8") as f:
        f.write("\n".join(md_content))
        
    print(f"Successfully converted EPUB to Markdown: {output_path}")
    return output_path, title, book_slug


def get_chapters(doc: fitz.Document) -> List[dict]:
    """
    Extracts chapters from the EPUB Table of Contents.
    If no TOC is found, chunks pages into blocks of 20 pages.
    """
    toc = doc.get_toc()
    chapters = []
    
    # Get level 1 items (chapters)
    level_1_items = [item for item in toc if item[0] == 1]
    
    if level_1_items:
        print(f"Found {len(level_1_items)} chapters in TOC.")
        for i, item in enumerate(level_1_items):
            level, title, start_page = item
            start_idx = start_page - 1
            
            if i + 1 < len(level_1_items):
                end_idx = level_1_items[i+1][2] - 1
            else:
                end_idx = len(doc)
                
            # Keep boundaries safe
            start_idx = max(0, min(start_idx, len(doc) - 1))
            end_idx = max(0, min(end_idx, len(doc)))
            
            if start_idx < end_idx:
                chapters.append({
                    "title": title,
                    "start": start_idx,
                    "end": end_idx
                })
    else:
        # Fallback to page-based chunking
        print("No TOC found. Falling back to page-based chunking (20 pages per chunk).")
        chunk_size = 20
        for i in range(0, len(doc), chunk_size):
            end_idx = min(i + chunk_size, len(doc))
            chapters.append({
                "title": f"Section {i // chunk_size + 1}",
                "start": i,
                "end": end_idx
            })
            
    return chapters


def extract_atoms_for_chapter(client, model: str, chapter_title: str, text: str, book_title: str) -> List[ExtractedItem]:
    """
    Sends the chapter text to Gemini and extracts key knowledge items using Pydantic structured output.
    """
    prompt = f"""
You are an expert knowledge extraction agent. Analyze the following chapter from the book "{book_title}" and extract key knowledge elements.
Chapter: {chapter_title}

Specifically, extract the following:
1. Concepts: Abstract ideas, structures, or principles (e.g. Big O Notation, Binary Trees).
2. Facts: Key factual rules, guidelines, or properties.
3. Definitions: Important terminology defined in the text (glossary terms).
4. Methods: Algorithms, procedures, coding methods, or pseudocode.
5. Examples: Concrete illustrations, code snippets, or trace examples explaining a concept.
6. Quotes: Meaningful direct quotes from the text.

For each item:
- Map type to: "concept", "fact", "glossary", "method", "example", or "quote".
- Create a clear, concise Title Case title (5-7 words max).
- Assign relevant tags (e.g., ["dsa", "algorithms", "math"]).
- Write a 1-3 sentence summary of the core idea.
- Provide full detailed notes, explanations, code blocks, or pseudocode in the details field.
- In 'connections', list the titles of any other items in this extraction that relate to it.
"""

    try:
        from google.genai import types
        
        # We append the chapter text to the contents
        response = client.models.generate_content(
            model=model,
            contents=[prompt, f"--- Chapter Text ---\n{text}"],
            config=types.GenerateContentConfig(
                response_mime_type="application/json",
                response_schema=ExtractionResult,
                temperature=0.1,
            )
        )
        
        # Parse the JSON response
        import json
        data = json.loads(response.text)
        
        # Validate using pydantic
        result = ExtractionResult(**data)
        return result.items
    except Exception as e:
        print(f"Error extracting from chapter '{chapter_title}': {e}")
        return []


def write_notes_to_vault(vault_root: str, items: List[ExtractedItem], book_title: str, book_slug: str, default_tags: List[str]):
    """
    Writes the extracted items to the 02_NODES/ folder in Obsidian-ready flat format.
    Ensures correct cross-linking.
    """
    nodes_dir = os.path.join(vault_root, "02_NODES")
    os.makedirs(nodes_dir, exist_ok=True)
    created_date = datetime.now().strftime("%Y-%m-%d")
    
    written_count = 0
    for item in items:
        # Map item type to vault types
        note_type = item.type
        note_tags = list(set(item.tags + default_tags))
        
        # If method, we type as concept and tag as method
        if note_type == "method":
            note_type = "concept"
            if "method" not in note_tags:
                note_tags.append("method")
                
        note_slug = slugify(item.title)
        note_path = os.path.join(nodes_dir, f"{note_slug}.md")
        
        # Build core idea & details
        core_idea = item.core_idea.strip()
        details = item.details.strip()
        
        # Format tags as a YAML list
        tags_str = ", ".join([f"{t}" for t in note_tags])
        
        # Build links section
        # Always link back to the source book
        links = [f"- [[01_RAW/source/{book_slug}\\|Source: {book_title}]]"]
        
        # Link to appropriate MOCs based on tags/types
        if any(t in note_tags for t in ["dsa", "algorithms", "study", "psychology", "nimcet"]):
            links.append("- [[study-moc|📚 Study MOC]]")
        if "books" in note_tags or note_type == "book":
            links.append("- [[books-moc|📖 Books MOC]]")
        if "ai-ml" in note_tags:
            links.append("- [[ai-ml-moc|🤖 AI & Machine Learning MOC]]")
        if "tools" in note_tags or "tool" in note_tags:
            links.append("- [[tools-moc|🛠️ Tools MOC]]")
            
        # Add local connections between extracted notes
        for conn in item.connections:
            conn_slug = slugify(conn)
            # Prevent self-linking
            if conn_slug != note_slug:
                links.append(f"- [[{conn_slug}\\|{conn}]]")
                
        links_content = "\n".join(links)
        
        # Assemble file using the template structure
        note_content = f"""---
type: {note_type}
tags: [{tags_str}]
created: {created_date}
source: "[[{book_slug}]]"
---

# {item.title}

## Core idea
{core_idea}

## Why it matters / connection
{details}

## Links
{links_content}
"""
        try:
            with open(note_path, "w", encoding="utf-8") as f:
                f.write(note_content)
            written_count += 1
        except Exception as e:
            print(f"Error writing note '{item.title}': {e}")
            
    print(f"Successfully wrote {written_count} atomic notes to {nodes_dir}/")


def main():
    parser = argparse.ArgumentParser(description="Ingest EPUB book and extract atomic concepts into Obsidian.")
    parser.add_argument("--epub", required=True, help="Path to the EPUB book file.")
    parser.add_argument("--tags", default="dsa,study,books", help="Comma-separated default tags to apply to all notes.")
    parser.add_argument("--model", default="gemini-2.5-flash", help="Gemini model to use for extraction.")
    parser.add_argument("--chapters", default="1-3", help="Chapters to extract (e.g., 'all', '1', '1-3', '1,2,5').")
    args = parser.parse_args()
    
    # Resolve paths relative to this script
    script_dir = os.path.dirname(os.path.abspath(__file__))
    vault_root = os.path.abspath(os.path.join(script_dir, "..", ".."))
    
    # Verify API key
    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        print("ERROR: GEMINI_API_KEY environment variable is not set.")
        print("Please create a .env file in the vault root or set the environment variable:")
        print("  GEMINI_API_KEY=your_api_key")
        sys.exit(1)
        
    default_tags = [t.strip().lower() for t in args.tags.split(",") if t.strip()]
    if "books" not in default_tags:
        default_tags.append("books")
        
    # 1. Convert EPUB to Markdown
    markdown_path, book_title, book_slug = convert_epub_to_md(args.epub, vault_root, default_tags)
    
    # Open doc again to chunk chapters
    doc = fitz.open(args.epub)
    chapters = get_chapters(doc)
    
    # 2. Filter chapters based on CLI arguments
    selected_chapters = []
    if args.chapters.lower() == "all":
        selected_chapters = chapters
    else:
        # Parse ranges like '1-3' or list '1,2,5'
        indices = []
        try:
            if "-" in args.chapters:
                start, end = map(int, args.chapters.split("-"))
                indices = list(range(start, end + 1))
            elif "," in args.chapters:
                indices = list(map(int, args.chapters.split(",")))
            else:
                indices = [int(args.chapters)]
                
            for idx in indices:
                # Chapters are 1-indexed in human input, convert to 0-indexed list
                if 1 <= idx <= len(chapters):
                    selected_chapters.append(chapters[idx - 1])
                else:
                    print(f"Warning: Chapter index {idx} out of range (1-{len(chapters)}).")
        except ValueError:
            print(f"Error parsing chapter selector '{args.chapters}'. Defaulting to first 3 chapters.")
            selected_chapters = chapters[:3]
            
    if not selected_chapters:
        print("No valid chapters selected. Exiting.")
        sys.exit(0)
        
    print(f"\nSelected {len(selected_chapters)} chapters for concept extraction:")
    for ch in selected_chapters:
        print(f" - {ch['title']} (Pages {ch['start']+1}-{ch['end']})")
        
    # 3. Setup Gemini client
    from google import genai
    client = genai.Client()
    
    # 4. Process each selected chapter
    all_extracted_items = []
    for i, ch in enumerate(selected_chapters):
        print(f"\nProcessing: {ch['title']}...")
        
        # Extract chapter text
        chapter_pages_text = []
        for p in range(ch["start"], ch["end"]):
            page_text = doc[p].get_text().strip()
            if page_text:
                chapter_pages_text.append(page_text)
                
        chapter_text = "\n".join(chapter_pages_text)
        
        if not chapter_text.strip():
            print(f"Skipping {ch['title']}: no text content.")
            continue
            
        print(f"Sending text of length {len(chapter_text)} characters to Gemini ({args.model})...")
        items = extract_atoms_for_chapter(client, args.model, ch["title"], chapter_text, book_title)
        print(f"Extracted {len(items)} knowledge items.")
        
        all_extracted_items.extend(items)
        
        # Rate limit friendly sleep
        if i + 1 < len(selected_chapters):
            print("Sleeping for 5 seconds to avoid API rate limits...")
            time.sleep(5)
            
    # 5. Write atomic notes to 02_NODES/
    if all_extracted_items:
        write_notes_to_vault(vault_root, all_extracted_items, book_title, book_slug, default_tags)
        
        # 6. Rebuild MOCs via generate_mocs.py
        generate_mocs_path = os.path.join(vault_root, ".antigravity", "automations", "generate_mocs.py")
        if os.path.exists(generate_mocs_path):
            print("\nRebuilding Maps of Content (MOCs)...")
            try:
                subprocess.run([sys.executable, generate_mocs_path], check=True)
                print("MOCs rebuilt successfully.")
            except Exception as e:
                print(f"Error rebuilding MOCs: {e}")
        else:
            print(f"\nWarning: generate_mocs.py not found at {generate_mocs_path}")
    else:
        print("\nNo items were successfully extracted.")
        
    print("\nIngestion completed!")


if __name__ == "__main__":
    main()
