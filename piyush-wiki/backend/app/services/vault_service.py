import os
import re
import math
from pathlib import Path
from typing import List, Dict, Any, Optional
from datetime import datetime
from backend.app.core.config import settings
from backend.app.core.logging import logger

class VaultService:
    def __init__(self, vault_path: Optional[Path] = None):
        if vault_path:
            self.vault_path = Path(vault_path)
        else:
            # Root directory of piyush-wiki repo
            root_dir = Path(__file__).parent.parent.parent.parent
            self.vault_path = root_dir / "vault"
        
        self.vault_path.mkdir(parents=True, exist_ok=True)
        self.notes_cache: Dict[str, Dict[str, Any]] = {}
        self.backlinks_map: Dict[str, List[Dict[str, Any]]] = {}
        self.categories_map: Dict[str, List[Dict[str, Any]]] = {}
        self.tags_map: Dict[str, List[Dict[str, Any]]] = {}
        self._is_indexed = False

    def parse_frontmatter(self, text: str) -> tuple[Dict[str, Any], str]:
        """Parses YAML frontmatter from markdown string."""
        frontmatter = {}
        content = text
        
        frontmatter_match = re.match(r"^---\s*\n(.*?)\n---\s*\n(.*)$", text, re.DOTALL)
        if frontmatter_match:
            yaml_block = frontmatter_match.group(1)
            content = frontmatter_match.group(2)
            
            # Simple YAML parser for string, int, lists
            current_key = None
            for line in yaml_block.splitlines():
                line_str = line.strip()
                if not line_str or line_str.startswith("#"):
                    continue
                
                # Check list item
                if line_str.startswith("- ") and current_key:
                    val = line_str[2:].strip().strip('"').strip("'")
                    if not isinstance(frontmatter.get(current_key), list):
                        frontmatter[current_key] = []
                    frontmatter[current_key].append(val)
                elif ":" in line_str:
                    key, val = line_str.split(":", 1)
                    key = key.strip()
                    val = val.strip().strip('"').strip("'")
                    current_key = key
                    if val == "" or val is None:
                        frontmatter[key] = []
                    elif val.isdigit():
                        frontmatter[key] = int(val)
                    elif val.lower() == "true":
                        frontmatter[key] = True
                    elif val.lower() == "false":
                        frontmatter[key] = False
                    else:
                        frontmatter[key] = val
        return frontmatter, content

    def extract_wiki_links(self, content: str) -> List[Dict[str, str]]:
        """Extracts [[WikiLink|Alias]] from content."""
        pattern = r"\[\[([^\]\|]+)(?:\|([^\]]+))?\]\]"
        matches = re.findall(pattern, content)
        links = []
        seen = set()
        for target, alias in matches:
            target_clean = target.strip()
            target_slug = target_clean.lower().replace(" ", "-")
            if target_slug not in seen:
                seen.add(target_slug)
                links.append({
                    "target": target_clean,
                    "targetSlug": target_slug,
                    "alias": alias.strip() if alias else target_clean
                })
        return links

    def index_vault(self) -> Dict[str, Any]:
        """Scans and indexes all markdown files in the vault."""
        logger.info(f"Indexing vault at: {self.vault_path}")
        self.notes_cache.clear()
        self.backlinks_map.clear()
        self.categories_map.clear()
        self.tags_map.clear()

        if not self.vault_path.exists():
            return {"indexed_count": 0, "status": "path_not_found"}

        md_files = list(self.vault_path.glob("*.md")) + list(self.vault_path.glob("**/*.md"))
        
        # Step 1: Read all notes and parse metadata
        for file_path in md_files:
            try:
                raw_text = file_path.read_text(encoding="utf-8")
                fm, body = self.parse_frontmatter(raw_text)
                
                slug = fm.get("slug") or file_path.stem.lower().replace(" ", "-")
                title = fm.get("title") or file_path.stem.replace("-", " ").title()
                
                word_count = len(re.findall(r"\w+", body))
                reading_time = max(1, math.ceil(word_count / 200))
                wiki_links = self.extract_wiki_links(body)
                
                tags = fm.get("tags") if isinstance(fm.get("tags"), list) else []
                if isinstance(fm.get("tags"), str):
                    tags = [fm.get("tags")]
                
                category = fm.get("category") or "Uncategorized"
                
                note_meta = {
                    "id": fm.get("id") or f"note-{slug}",
                    "title": title,
                    "slug": slug,
                    "filePath": str(file_path.relative_to(self.vault_path)),
                    "absolutePath": str(file_path),
                    "type": fm.get("type", "atomic-note"),
                    "status": fm.get("status", "active"),
                    "created": fm.get("created", datetime.now().strftime("%Y-%m-%d")),
                    "modified": fm.get("modified", datetime.now().strftime("%Y-%m-%d")),
                    "confidence": fm.get("confidence", 90),
                    "ownerMoc": fm.get("owner_moc") or fm.get("ownerMoc"),
                    "category": category,
                    "tags": tags,
                    "summary": fm.get("summary") or (body[:160].replace("\n", " ").strip() + "..."),
                    "aliases": fm.get("aliases") if isinstance(fm.get("aliases"), list) else [],
                    "sources": fm.get("sources") if isinstance(fm.get("sources"), list) else [],
                    "wordCount": word_count,
                    "readingTimeMinutes": reading_time,
                    "forwardLinks": wiki_links,
                    "content": body,
                    "rawText": raw_text
                }
                
                self.notes_cache[slug] = note_meta
                
                # Category aggregation
                if category not in self.categories_map:
                    self.categories_map[category] = []
                self.categories_map[category].append({"slug": slug, "title": title, "summary": note_meta["summary"]})

                # Tags aggregation
                for tag in tags:
                    tag_clean = tag.lower().strip()
                    if tag_clean not in self.tags_map:
                        self.tags_map[tag_clean] = []
                    self.tags_map[tag_clean].append({"slug": slug, "title": title, "summary": note_meta["summary"]})

            except Exception as e:
                logger.error(f"Error parsing file {file_path}: {e}")

        # Step 2: Calculate Backlinks
        for source_slug, note in self.notes_cache.items():
            for link in note["forwardLinks"]:
                target_slug = link["targetSlug"]
                if target_slug not in self.backlinks_map:
                    self.backlinks_map[target_slug] = []
                
                # Find context snippet around the link in source content
                context_snippet = self._find_link_context(note["content"], link["target"])
                
                self.backlinks_map[target_slug].append({
                    "sourceSlug": source_slug,
                    "sourceTitle": note["title"],
                    "sourceSummary": note["summary"],
                    "contextSnippet": context_snippet,
                    "alias": link["alias"]
                })

        self._is_indexed = True
        logger.info(f"Successfully indexed {len(self.notes_cache)} notes.")
        return {"indexed_count": len(self.notes_cache), "status": "success"}

    def _find_link_context(self, content: str, target_name: str) -> str:
        """Finds sentence or paragraph containing the wiki link for backlink preview."""
        pattern = re.escape(target_name)
        match = re.search(r"([^.\n]*?" + pattern + r"[^.\n]*?\.)", content, re.IGNORECASE)
        if match:
            return match.group(1).strip()
        return "Referenced in body text."

    def ensure_indexed(self):
        if not self._is_indexed:
            self.index_vault()

    def get_all_notes(
        self,
        category: Optional[str] = None,
        tag: Optional[str] = None,
        query: Optional[str] = None
    ) -> List[Dict[str, Any]]:
        self.ensure_indexed()
        notes = list(self.notes_cache.values())

        if category:
            notes = [n for n in notes if n["category"].lower() == category.lower()]
        
        if tag:
            notes = [n for n in notes if tag.lower() in [t.lower() for t in n["tags"]]]

        if query:
            q = query.lower()
            notes = [
                n for n in notes
                if q in n["title"].lower()
                or q in n["summary"].lower()
                or q in n["content"].lower()
                or any(q in t.lower() for t in n["tags"])
            ]

        # Strip heavy content for list view performance
        results = []
        for n in notes:
            item = {k: v for k, v in n.items() if k not in ("content", "rawText")}
            item["backlinksCount"] = len(self.backlinks_map.get(n["slug"], []))
            results.append(item)

        return results

    def get_note(self, slug: str) -> Optional[Dict[str, Any]]:
        self.ensure_indexed()
        note = self.notes_cache.get(slug.lower())
        if not note:
            return None
        
        result = dict(note)
        result["backlinks"] = self.backlinks_map.get(slug.lower(), [])
        
        # Calculate related articles based on shared tags & categories
        related = []
        for s, n in self.notes_cache.items():
            if s != slug.lower():
                shared_tags = set(n["tags"]).intersection(set(note["tags"]))
                same_cat = n["category"] == note["category"]
                if len(shared_tags) > 0 or same_cat:
                    related.append({
                        "slug": n["slug"],
                        "title": n["title"],
                        "category": n["category"],
                        "summary": n["summary"],
                        "tags": n["tags"],
                        "sharedScore": len(shared_tags) + (2 if same_cat else 0)
                    })
        related.sort(key=lambda x: x["sharedScore"], reverse=True)
        result["relatedArticles"] = related[:4]
        return result

    def get_categories(self) -> List[Dict[str, Any]]:
        self.ensure_indexed()
        categories = []
        for cat_name, items in self.categories_map.items():
            categories.append({
                "name": cat_name,
                "count": len(items),
                "articles": items
            })
        return sorted(categories, key=lambda x: x["count"], reverse=True)

    def get_tags(self) -> List[Dict[str, Any]]:
        self.ensure_indexed()
        tags = []
        for tag_name, items in self.tags_map.items():
            tags.append({
                "name": tag_name,
                "count": len(items),
                "articles": items
            })
        return sorted(tags, key=lambda x: x["count"], reverse=True)

    def get_graph(self) -> Dict[str, Any]:
        self.ensure_indexed()
        nodes = []
        edges = []
        edge_set = set()

        for slug, note in self.notes_cache.items():
            nodes.append({
                "id": slug,
                "title": note["title"],
                "category": note["category"],
                "type": note["type"],
                "val": 1 + len(note["forwardLinks"]) + len(self.backlinks_map.get(slug, []))
            })

            for link in note["forwardLinks"]:
                target_slug = link["targetSlug"]
                edge_id = f"{slug}->{target_slug}"
                if edge_id not in edge_set:
                    edge_set.add(edge_id)
                    edges.append({
                        "source": slug,
                        "target": target_slug,
                        "label": link["alias"]
                    })

        return {"nodes": nodes, "edges": edges}

    def get_stats(self) -> Dict[str, Any]:
        self.ensure_indexed()
        total_notes = len(self.notes_cache)
        total_words = sum(n["wordCount"] for n in self.notes_cache.values())
        total_links = sum(len(n["forwardLinks"]) for n in self.notes_cache.values())
        avg_reading_time = math.ceil((total_words / (total_notes or 1)) / 200)

        return {
            "totalNotes": total_notes,
            "totalWords": total_words,
            "totalLinks": total_links,
            "totalCategories": len(self.categories_map),
            "totalTags": len(self.tags_map),
            "avgReadingTimeMinutes": avg_reading_time,
            "lastIndexed": datetime.now().isoformat()
        }

    def save_note(self, slug: str, content: str, title: Optional[str] = None) -> Dict[str, Any]:
        """Saves updated note content directly to the markdown file on disk."""
        target_slug = slug.lower().replace(" ", "-")
        file_path = self.vault_path / f"{target_slug}.md"
        
        # If file doesn't exist, create with frontmatter
        if not file_path.exists():
            clean_title = title or target_slug.replace("-", " ").title()
            frontmatter_header = f"""---
id: "note-{target_slug}"
title: "{clean_title}"
slug: "{target_slug}"
type: "atomic-note"
status: "active"
created: "{datetime.now().strftime('%Y-%m-%d')}"
modified: "{datetime.now().strftime('%Y-%m-%d')}"
confidence: 90
category: "General"
tags:
  - knowledge
summary: "Created via Piyush Wiki Editor"
---

"""
            full_text = frontmatter_header + content
        else:
            full_text = content

        file_path.write_text(full_text, encoding="utf-8")
        self.index_vault()
        return self.get_note(target_slug)

vault_service = VaultService()
