#!/usr/bin/env python3
"""Unit tests for the semantic linker hook."""

import unittest
from pathlib import Path
import tempfile
import shutil
import sys

# Setup paths to import the hook package correctly
sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

from semantic_linker_hook.scanner import Note, parse_frontmatter, parse_list_value, parse_note, VaultScanner
from semantic_linker_hook.retriever import BM25Indexer, Retriever
from semantic_linker_hook.embedding_search import cosine_similarity, EmbeddingEngine
from semantic_linker_hook.relationship_detector import HeuristicRelationshipDetector
from semantic_linker_hook.frontmatter_updater import update_note_frontmatter
from semantic_linker_hook.link_generator import append_links_to_note, classify_target

class TestSemanticLinker(unittest.TestCase):
    def setUp(self):
        self.tmp_dir = tempfile.mkdtemp()
        self.tmp_path = Path(self.tmp_dir)

    def tearDown(self):
        shutil.rmtree(self.tmp_dir)

    def test_tokenization(self):
        tokens = Note._tokenize("Hello, world! This is a test-case.")
        self.assertEqual(tokens, ["hello", "world", "this", "is", "a", "test-case"])

    def test_parse_frontmatter(self):
        content = """---
title: Test Title
tags:
  - ai
  - productivity
aliases: [test-alias]
---
# Actual content
This is note content.
"""
        fm, body = parse_frontmatter(content)
        self.assertEqual(fm.get("title"), "Test Title")
        self.assertEqual(fm.get("tags"), ["ai", "productivity"])
        # PyYAML now correctly parses inline lists — aliases is a real list
        self.assertEqual(fm.get("aliases"), ["test-alias"])
        self.assertIn("This is note content.", body)

    def test_parse_list_value(self):
        self.assertEqual(parse_list_value("one"), ["one"])
        self.assertEqual(parse_list_value(["one", "two"]), ["one", "two"])
        self.assertEqual(parse_list_value("[one, two]"), ["one", "two"])
        self.assertEqual(parse_list_value(None), [])

    def test_cosine_similarity(self):
        v1 = [1.0, 0.0, 0.0]
        v2 = [1.0, 0.0, 0.0]
        v3 = [0.0, 1.0, 0.0]
        self.assertAlmostEqual(cosine_similarity(v1, v2), 1.0)
        self.assertAlmostEqual(cosine_similarity(v1, v3), 0.0)
        self.assertEqual(cosine_similarity([], v2), 0.0)

    def test_bm25_score(self):
        # Create a tiny collection
        note_path1 = self.tmp_path / "note1.md"
        note_path1.write_text("""---
title: Active Agentic Coding
tags: [concept]
---
This is about agentic coding and AI agents.
""", encoding="utf-8")
        
        note_path2 = self.tmp_path / "note2.md"
        note_path2.write_text("""---
title: Apple Pie Recipe
tags: [recipe]
---
How to make a delicious apple pie dessert.
""", encoding="utf-8")

        n1 = parse_note(note_path1)
        n2 = parse_note(note_path2)

        indexer = BM25Indexer()
        indexer.fit([n1, n2])

        score_n1 = indexer.score(["agentic", "coding"], n1.relative_path)
        score_n2 = indexer.score(["agentic", "coding"], n2.relative_path)

        self.assertGreater(score_n1, 0.0)
        self.assertEqual(score_n2, 0.0)

    def test_classify_target(self):
        self.assertEqual(classify_target(["principle"], "A Principle"), "Related Principles")
        self.assertEqual(classify_target(["example"], "An Example"), "Related Examples")
        self.assertEqual(classify_target(["concept"], "A Concept"), "Related Concepts")

    def test_frontmatter_updater(self):
        note_path = self.tmp_path / "test_note.md"
        note_path.write_text("""---
title: Test Note
---
Body content.
""", encoding="utf-8")
        
        updated = update_note_frontmatter(note_path, ["related-note-1", "related-note-2"])
        self.assertTrue(updated)
        
        content = note_path.read_text(encoding="utf-8")
        self.assertIn("related:", content)
        self.assertIn("  - related-note-1", content)
        self.assertIn("  - related-note-2", content)

    def test_link_generator(self):
        note_path = self.tmp_path / "test_note.md"
        note_path.write_text("""---
title: Test Note
---
Body content.
""", encoding="utf-8")
        
        suggestions = [
            {
                "target_title": "Target Note",
                "target_file": "NODES/target-note.md",
                "target_tags": ["concept"],
                "reason": "Very related topic"
            }
        ]
        
        updated = append_links_to_note(note_path, suggestions, append_related_section=True)
        self.assertTrue(updated)
        
        content = note_path.read_text(encoding="utf-8")
        self.assertIn("## Related Concepts", content)
        self.assertIn("- [[target-note]] — Very related topic", content)

    def test_heuristics(self):
        note_path1 = self.tmp_path / "note1.md"
        note_path1.write_text("This is an example showing how to build an AI agent.", encoding="utf-8")
        
        note_path2 = self.tmp_path / "note2.md"
        note_path2.write_text("Detailed concept of AI agent patterns.", encoding="utf-8")
        
        n1 = parse_note(note_path1)
        n1.tags = ["example"]
        n1.title = "Example of AI Agent"
        
        n2 = parse_note(note_path2)
        n2.title = "AI Agent"
        
        detector = HeuristicRelationshipDetector()
        res = detector.detect(n1, n2, 0.8)
        self.assertEqual(res["relationship"], "example_of")

    # -----------------------------------------------------------------------
    # Regression test for Fix 1: parse_frontmatter with inline lists and
    # values containing colons (the hand-rolled parser would split on `:`)
    # -----------------------------------------------------------------------
    def test_parse_frontmatter_inline_list_and_colon_value(self):
        content = (
            "---\n"
            "title: 'HTTP: The Protocol'\n"
            "tags: [networking, web, http]\n"
            "aliases: [HTTP Protocol, HyperText Transfer Protocol]\n"
            "---\n"
            "Body.\n"
        )
        fm, body = parse_frontmatter(content)
        # Title must survive the colon intact
        self.assertEqual(fm.get("title"), "HTTP: The Protocol")
        # Inline list must be parsed as a real list, not a raw string
        self.assertIsInstance(fm.get("tags"), list)
        self.assertIn("networking", fm["tags"])
        self.assertIn("http", fm["tags"])
        self.assertIn("Body.", body)

    # -----------------------------------------------------------------------
    # Regression test for Fix 2: related list items whose titles contain a
    # colon must be stored as valid YAML (quoted), not raw strings.
    # -----------------------------------------------------------------------
    def test_frontmatter_updater_colon_in_title(self):
        note_path = self.tmp_path / "colon_note.md"
        note_path.write_text(
            "---\ntitle: Source Note\n---\nBody.\n",
            encoding="utf-8"
        )
        # Title containing a colon — raw interpolation would break YAML
        result = update_note_frontmatter(note_path, ["HTTP: The Protocol"])
        self.assertTrue(result)

        # Re-read and parse with PyYAML to confirm the file is still valid YAML
        import yaml as _yaml
        content = note_path.read_text(encoding="utf-8")
        fm_block = content.split("---")[1]
        parsed = _yaml.safe_load(fm_block)
        self.assertIsNotNone(parsed)
        related = parsed.get("related", [])
        # The colon-containing value must be recoverable
        self.assertTrue(
            any("HTTP: The Protocol" in str(r) for r in related),
            f"Colon title not found in related list: {related}"
        )

    # -----------------------------------------------------------------------
    # Regression test for Fix 3: on a second run, new bullets must be
    # inserted *under* the existing ## Related Concepts header — no new
    # ### Additional Concepts subheading should appear.
    # -----------------------------------------------------------------------
    def test_link_generator_second_run_no_extra_heading(self):
        note_path = self.tmp_path / "second_run.md"
        note_path.write_text(
            "---\ntitle: Source\n---\nBody.\n\n## Related Concepts\n- [[first-note]] — First link\n",
            encoding="utf-8"
        )
        suggestions = [
            {
                "target_title": "Second Note",
                "target_file": "NODES/second-note.md",
                "target_tags": ["concept"],
                "reason": "Second link reason",
            }
        ]
        updated = append_links_to_note(note_path, suggestions, append_related_section=True)
        self.assertTrue(updated)

        content = note_path.read_text(encoding="utf-8")
        # Must NOT introduce a subheading
        self.assertNotIn("### Additional", content)
        # Must have exactly ONE ## Related Concepts header
        self.assertEqual(content.count("## Related Concepts"), 1)
        # New bullet must be present
        self.assertIn("- [[second-note]] — Second link reason", content)

    # -----------------------------------------------------------------------
    # Regression test for Fix 4: when both a comparison signal AND a
    # dependency signal are present, the stronger one (more keyword hits)
    # must win — not whichever rule appeared first in the if/elif chain.
    # -----------------------------------------------------------------------
    def test_heuristic_strongest_signal_wins(self):
        note_path1 = self.tmp_path / "multi_signal.md"
        # 3 comparison-signal keywords, only 1 dependency keyword
        note_path1.write_text(
            "This note compares versus and discusses tradeoff and comparison of AI Agent "
            "but also requires it.",
            encoding="utf-8"
        )
        note_path2 = self.tmp_path / "target.md"
        note_path2.write_text("Detailed concept of AI Agent patterns.", encoding="utf-8")

        n1 = parse_note(note_path1)
        n1.title = "Comparison Study"
        n2 = parse_note(note_path2)
        n2.title = "AI Agent"

        detector = HeuristicRelationshipDetector()
        result = detector.detect(n1, n2, 0.75)
        # "comparison" has 3 keyword hits; "depends_on" has only 1 — comparison must win
        self.assertEqual(result["relationship"], "comparison")

    # -----------------------------------------------------------------------
    # Regression test for Fix 5: embedded_ids precomputation (unit-level).
    # Validates that constructing the set from notes_to_embed tuples works
    # correctly and that membership checks are O(1).
    # -----------------------------------------------------------------------
    def test_embedded_ids_precomputation(self):
        note_path = self.tmp_path / "embed_test.md"
        note_path.write_text(
            "---\ntitle: Embed Test\n---\nBody.\n", encoding="utf-8"
        )
        note = parse_note(note_path)
        # Simulate the structure of notes_to_embed: list of (note, content, hash) tuples
        notes_to_embed = [(note, "content", "abc123")]
        embedded_ids = {n.relative_path for n, _, _ in notes_to_embed}
        self.assertIn(note.relative_path, embedded_ids)
        self.assertNotIn("nonexistent-note.md", embedded_ids)


if __name__ == "__main__":
    unittest.main()
