import pytest
from vault_utils import load_allowed_tags, resolve_tag

def test_load_allowed_tags(mock_vault):
    allowed, aliases = load_allowed_tags()
    
    # Assert tag-schema.md standard tags are loaded
    assert "beginner" in allowed
    assert "advanced" in allowed
    assert "case-study" in allowed
    
    # Assert tag-schema.md aliases are mapped
    assert "case_study" in aliases
    assert aliases["case_study"] == "case-study"

def test_resolve_tag():
    aliases = {"case_study": "case-study", "open_question": "open-question"}
    assert resolve_tag("case_study", aliases) == "case-study"
    assert resolve_tag("beginner", aliases) == "beginner"
