import pytest
from vault_utils import extract_wikilinks

def test_extract_wikilinks():
    text = "Here is a [[link]] and [[another-link|label]] and [[link-with#heading]]."
    links = extract_wikilinks(text)
    assert "link" in links
    assert "another-link" in links
    assert "link-with" in links
