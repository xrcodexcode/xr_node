import os
import sys
import pathlib
import pytest
import shutil

# Ensure that the automations folder is in sys.path
automations_path = pathlib.Path(__file__).resolve().parents[1] / ".antigravity" / "automations"
sys.path.insert(0, str(automations_path))

@pytest.fixture
def mock_vault(tmp_path):
    """
    Sets up a temporary mock vault directory hierarchy and points VAULT_ROOT env var to it.
    """
    # Create required folder structure
    (tmp_path / "NODES").mkdir()
    (tmp_path / "03_MOC").mkdir()
    (tmp_path / "01_RAW" / "CAPTURE").mkdir(parents=True)
    (tmp_path / "01_RAW" / "SOURCE").mkdir(parents=True)
    (tmp_path / ".antigravity" / "schemas").mkdir(parents=True)
    (tmp_path / ".antigravity" / "modules" / "metadata").mkdir(parents=True)
    (tmp_path / ".antigravity" / "logs").mkdir(parents=True)
    (tmp_path / ".antigravity" / "reports").mkdir(parents=True)

    # Copy the tag schema rule to the mock modules directory so tag validation works
    real_vault_root = pathlib.Path(__file__).resolve().parents[1]
    real_tag_schema = real_vault_root / ".antigravity" / "modules" / "metadata" / "tag-schema.md"
    mock_tag_schema = tmp_path / ".antigravity" / "modules" / "metadata" / "tag-schema.md"
    if real_tag_schema.exists():
        shutil.copy(real_tag_schema, mock_tag_schema)

    # Copy actual JSON schemas to mock schemas directory
    real_schemas_dir = real_vault_root / ".antigravity" / "schemas"
    if real_schemas_dir.exists():
        for f in os.listdir(real_schemas_dir):
            if f.endswith(".schema.json"):
                shutil.copy(real_schemas_dir / f, tmp_path / ".antigravity" / "schemas" / f)

    # Set environment variable
    old_env = os.environ.get("VAULT_ROOT")
    os.environ["VAULT_ROOT"] = str(tmp_path)
    
    yield tmp_path
    
    # Restore environment variable
    if old_env is not None:
        os.environ["VAULT_ROOT"] = old_env
    else:
        os.environ.pop("VAULT_ROOT", None)
