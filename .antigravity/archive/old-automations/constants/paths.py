import pathlib
import os

def get_vault_root() -> pathlib.Path:
    """
    Resolve the vault root directory.
    Checks VAULT_ROOT env var first; falls back to three levels above this file.
    """
    env = os.environ.get("VAULT_ROOT")
    if env:
        return pathlib.Path(env).resolve()
    # Path is: .antigravity/automations/constants/paths.py -> parents[3] is the vault root
    return pathlib.Path(__file__).resolve().parents[3]

def __getattr__(name: str):
    vault = get_vault_root()
    if name == "VAULT":
        return vault
    elif name == "NODES":
        return vault / "NODES"
    elif name == "MOCS":
        return vault / "03_MOC"
    elif name == "CAPTURE":
        return vault / "01_RAW" / "CAPTURE"
    elif name == "SOURCE":
        return vault / "01_RAW" / "SOURCE"
    elif name == "REPORTS":
        return vault / ".antigravity" / "reports"
    elif name == "LOGS":
        return vault / ".antigravity" / "logs"
    elif name == "RULES":
        return vault / ".antigravity" / "pipeline"
    elif name == "SCHEMAS":
        return vault / ".antigravity" / "schemas"
    raise AttributeError(f"module {__name__} has no attribute {name}")
