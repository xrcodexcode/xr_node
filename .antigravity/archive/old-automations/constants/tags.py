ALLOWED_DOMAINS: set[str] = {
    "ai", "ml", "llm", "psychology", "productivity", "philosophy", "business", 
    "study", "research", "writing", "tools", "habits", "strategy", "leadership", 
    "self-improvement", "dsa", "engineering", "manufacturing", "innovation", "risk", "general"
}

ALLOWED_DISCOVERY_TAGS: set[str] = {
    "beginner", "advanced", "comparison", "case-study", "implementation", 
    "reference", "history", "decision", "example", "checklist", "open-question", "contrarian"
}

TAG_ALIASES: dict[str, str] = {
    "case_study": "case-study",
    "open_question": "open-question"
}
