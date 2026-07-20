import os
import pytest
import json
import jsonschema
from check_vault import check_file

def test_check_file_valid_atomic_note(mock_vault):
    # Create valid atomic note in mock vault
    note_path = mock_vault / "NODES" / "gradient-descent.md"
    note_path.write_text(
        "---\n"
        "id: 9a70659f-d336-47b2-a4e3-6a9c1404ea57\n"
        "title: Gradient Descent\n"
        "type: atomic-note\n"
        "status: atomic\n"
        "domain: ml\n"
        "source_type: paper\n"
        "created: 2026-07-18\n"
        "updated: 2026-07-18\n"
        "review: 2026-10-16\n"
        "confidence: 98\n"
        "version: 1\n"
        "aliases: [steepest descent]\n"
        "tags: [beginner]\n"
        "owner_moc: Machine Learning MOC\n"
        "sources: [intro-to-ml.md]\n"
        "related: [Learning Rate]\n"
        "schema_version: 3\n"
        "---\n\n"
        "## Claim\n"
        "Gradient descent is an optimization algorithm.\n",
        encoding="utf-8"
    )

    # Pre-cache schemas
    schema_dir = os.path.join(str(mock_vault), ".antigravity", "schemas")
    schema_cache = {}
    for f in os.listdir(schema_dir):
        if f.endswith(".schema.json"):
            with open(os.path.join(schema_dir, f), "r", encoding="utf-8") as sf:
                schema_cache[f] = json.load(sf)

    errors = check_file(
        str(note_path),
        all_existing_slugs={"gradient-descent"},
        allowed_tags={"beginner"},
        tag_aliases={},
        vault_root=str(mock_vault),
        schema_cache=schema_cache,
        schema_dir=schema_dir
    )
    
    assert len(errors) == 0


def test_check_file_invalid_atomic_note(mock_vault):
    # Create invalid atomic note: missing title, id, domain, owner_moc (schema_version 4)
    note_path = mock_vault / "NODES" / "invalid-note.md"
    note_path.write_text(
        "---\n"
        "type: atomic-note\n"
        "status: atomic\n"
        "created: 2026-07-18\n"
        "updated: 2026-07-18\n"
        "confidence: 98\n"
        "version: 1\n"
        "schema_version: 4\n"
        "---\n\n"
        "Missing title, id, owner_moc etc.\n",
        encoding="utf-8"
    )

    schema_dir = os.path.join(str(mock_vault), ".antigravity", "schemas")
    schema_cache = {}
    for f in os.listdir(schema_dir):
        if f.endswith(".schema.json"):
            with open(os.path.join(schema_dir, f), "r", encoding="utf-8") as sf:
                schema_cache[f] = json.load(sf)

    errors = check_file(
        str(note_path),
        all_existing_slugs={"invalid-note"},
        allowed_tags=set(),
        tag_aliases={},
        vault_root=str(mock_vault),
        schema_cache=schema_cache,
        schema_dir=schema_dir
    )
    
    # Assert errors contains frontmatter validation errors
    assert len(errors) > 0
    errors_str = " ".join(errors)
    assert "required property" in errors_str or "Frontmatter schema violation" in errors_str
