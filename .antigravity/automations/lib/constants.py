import sys
import types
import pathlib
import os

# --- Definitions of thresholds ---
MIN_LINKS = 3
MAX_NOTE_LENGTH = 600
MIN_GRAPH_SCORE = 85
PROMOTION_BACKLINK_THRESHOLD = 1
ORPHAN_BACKLINK_THRESHOLD = 0
PROMOTION_SCORE_THRESHOLD = 8
PROMOTION_CONFIDENCE_THRESHOLD = 95
JACCARD_DUPLICATE_THRESHOLD = 0.5
JACCARD_MODERATE_THRESHOLD = 0.3

# --- Definitions of tags ---
ALLOWED_DOMAINS = {
    "ai", "ml", "llm", "psychology", "productivity", "philosophy", "business", 
    "study", "research", "writing", "tools", "habits", "strategy", "leadership", 
    "self-improvement", "dsa", "engineering", "manufacturing", "innovation", "risk", "general"
}

ALLOWED_DISCOVERY_TAGS = {
    "beginner", "advanced", "comparison", "case-study", "implementation", 
    "reference", "history", "decision", "example", "checklist", "open-question", "contrarian"
}

TAG_ALIASES = {
    "case_study": "case-study",
    "open_question": "open-question"
}

# --- Definitions of paths ---
def get_vault_root() -> pathlib.Path:
    env = os.environ.get("VAULT_ROOT")
    if env:
        return pathlib.Path(env).resolve()
    # Path is: .antigravity/automations/lib/constants.py -> parents[3] is vault root
    return pathlib.Path(__file__).resolve().parents[3]

# --- Metaprogramming to mock constants.paths and constants.thresholds ---
class PathsModule(types.ModuleType):
    def __init__(self, name):
        super().__init__(name)
        self.get_vault_root = get_vault_root

    def __getattr__(self, name):
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
            return vault / ".antigravity" / "rules"
        elif name == "SCHEMAS":
            return vault / ".antigravity" / "schemas"
        raise AttributeError(f"module {__name__} has no attribute {name}")

paths_mock = PathsModule('constants.paths')
sys.modules['constants.paths'] = paths_mock

thresholds_mock = types.ModuleType('constants.thresholds')
thresholds_mock.MIN_LINKS = MIN_LINKS
thresholds_mock.MAX_NOTE_LENGTH = MAX_NOTE_LENGTH
thresholds_mock.MIN_GRAPH_SCORE = MIN_GRAPH_SCORE
thresholds_mock.PROMOTION_BACKLINK_THRESHOLD = PROMOTION_BACKLINK_THRESHOLD
thresholds_mock.ORPHAN_BACKLINK_THRESHOLD = ORPHAN_BACKLINK_THRESHOLD
thresholds_mock.PROMOTION_SCORE_THRESHOLD = PROMOTION_SCORE_THRESHOLD
thresholds_mock.PROMOTION_CONFIDENCE_THRESHOLD = PROMOTION_CONFIDENCE_THRESHOLD
thresholds_mock.JACCARD_DUPLICATE_THRESHOLD = JACCARD_DUPLICATE_THRESHOLD
thresholds_mock.JACCARD_MODERATE_THRESHOLD = JACCARD_MODERATE_THRESHOLD
sys.modules['constants.thresholds'] = thresholds_mock

sys.modules['constants'] = sys.modules[__name__]
