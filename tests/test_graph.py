import pytest
from vault_utils import build_backlink_index

def test_build_backlink_index(mock_vault):
    # Create two nodes that link to each other
    node1 = mock_vault / "NODES" / "node-one.md"
    node1.write_text("[[node-two]]", encoding="utf-8")
    
    node2 = mock_vault / "NODES" / "node-two.md"
    node2.write_text("[[node-one]]", encoding="utf-8")
    
    index = build_backlink_index(scan_dirs=[mock_vault / "NODES"])
    assert "node-two" in index
    assert "node-one" in index["node-two"]
    assert "node-one" in index
    assert "node-two" in index["node-one"]

def test_build_backlink_index_empty(mock_vault):
    index = build_backlink_index(scan_dirs=[mock_vault / "NODES"])
    assert len(index) == 0
