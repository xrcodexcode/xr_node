RUBRIC: dict[str, int] = {
    "source_backed_and_verified": 2,
    "atomic": 2,
    "reusable": 2,
    "linked": 2,
    "stable_title": 1,
    "not_duplicate": 1,
}

REQUIRED_ATOMIC_SECTIONS: list[str] = [
    "Claim", "Definition", "Explanation", "Related", "Source"
]

REQUIRED_MOC_SECTIONS: list[str] = [
    "Overview", "Core Nodes", "Related MOCs"
]
