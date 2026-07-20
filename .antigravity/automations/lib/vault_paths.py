import os
from constants.paths import get_vault_root as _get_root

def get_vault_root() -> str:
    """
    Returns the absolute path to the vault root directory as a string.
    Delegates to constants.paths.get_vault_root().
    """
    return str(_get_root())
