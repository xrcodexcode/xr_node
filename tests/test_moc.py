import pytest
import pathlib
from moc_curator import load_scalability_limits

def test_load_scalability_limits(mock_vault):
    soft, hard = load_scalability_limits(mock_vault)
    # Check that it loads default limits
    assert soft == 50
    assert hard == 100
