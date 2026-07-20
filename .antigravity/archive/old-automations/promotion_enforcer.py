#!/usr/bin/env python3
"""Report promotion candidates using the governed 10-point rubric.

This automation is deliberately read-only: it calculates and reports decisions,
but does not move notes or rewrite MOCs. Promotion changes remain subject to the
confidence and audit requirements in .antigravity/rules/governance.md.
"""

from __future__ import annotations

import argparse
import json
import re
from datetime import datetime
from pathlib import Path

from vault_paths import get_vault_root
from vault_utils import build_backlink_index, extract_wikilinks, iter_notes, slug_of
from constants.quality import RUBRIC
from constants.thresholds import PROMOTION_SCORE_THRESHOLD, PROMOTION_CONFIDENCE_THRESHOLD


def list_value(value: object) -> list[str]:
    """Normalise a YAML list or legacy inline list to strings."""
    if value is None:
        return []
    if isinstance(value, (list, tuple, set)):
        return [str(item).strip() for item in value if str(item).strip()]
    text = str(value).strip()
    if text.startswith("[") and text.endswith("]"):
        text = text[1:-1]
        return [item.strip().strip("\"'") for item in text.split(",") if item.strip()]
    return [text] if text and text.lower() != "null" else []


def note_title(path: Path, frontmatter: dict, body: str) -> str:
    title = str(frontmatter.get("title", "")).strip()
    if title:
        return title
    match = re.search(r"^#\s+(.+)$", body, re.MULTILINE)
    return match.group(1).strip() if match else path.stem


def numeric_confidence(value: object) -> int:
    try:
        confidence = float(value)
    except (TypeError, ValueError):
        return 0
    if confidence <= 1:
        confidence *= 100
    return max(0, min(100, round(confidence)))


def main() -> None:
    parser = argparse.ArgumentParser(description="Report governed promotion candidates.")
    parser.add_argument("--report", default=".antigravity/logs/promotion-candidates.json")
    args = parser.parse_args()

    vault_root = Path(get_vault_root())
    nodes_dir = vault_root / "NODES"
    duplicate_report = vault_root / ".antigravity" / "reports" / "duplicate-candidates.md"
    duplicate_text = duplicate_report.read_text(encoding="utf-8").lower() if duplicate_report.exists() else ""
    backlink_index = build_backlink_index()
    node_slugs = {slug_of(path.stem) for path, *_ in iter_notes(nodes_dir)}

    candidates = []
    for path, frontmatter, body, _ in iter_notes(nodes_dir):
        title = note_title(path, frontmatter, body)
        slug = slug_of(path.stem)
        body_links = {slug_of(link) for link in extract_wikilinks(body)}
        graph_linked = bool((body_links & (node_slugs - {slug})) or backlink_index.get(slug))
        owner_moc = bool(list_value(frontmatter.get("owner_moc")))
        source_backed = bool(list_value(frontmatter.get("sources")) or list_value(frontmatter.get("source")))
        atomic = (
            str(frontmatter.get("type", "")).strip() == "atomic-note"
            or bool(re.search(r"^##\s+(Claim|Definition)\b", body, re.MULTILINE | re.IGNORECASE))
        )
        reusable = bool(re.search(r"^##\s+Explanation\b", body, re.MULTILINE | re.IGNORECASE)) and len(body.strip()) >= 200
        stable_title = slug == slug_of(title)
        duplicate_clear = bool(duplicate_text) and path.stem.lower() not in duplicate_text
        confidence = numeric_confidence(frontmatter.get("confidence"))

        criteria = {
            "source_backed_and_verified": source_backed and str(frontmatter.get("status", "")) not in {"captured", "processed"},
            "atomic": atomic,
            "reusable": reusable,
            "linked": owner_moc and graph_linked,
            "stable_title": stable_title,
            "not_duplicate": duplicate_clear,
        }
        score = sum(RUBRIC[name] for name, passed in criteria.items() if passed)
        if score >= PROMOTION_SCORE_THRESHOLD and confidence >= PROMOTION_CONFIDENCE_THRESHOLD:
            decision = "promote"
        elif score >= PROMOTION_SCORE_THRESHOLD and confidence >= 80:
            decision = "suggest"
        elif score >= 6:
            decision = "manual_review"
        else:
            decision = "keep_current_state"

        candidates.append({
            "path": str(path.relative_to(vault_root)),
            "title": title,
            "score": score,
            "confidence": confidence,
            "decision": decision,
            "criteria": criteria,
            "missing": [name for name, passed in criteria.items() if not passed],
        })

    report = {
        "generated_at": datetime.now().astimezone().isoformat(),
        "mode": "read_only",
        "rubric": RUBRIC,
        "decision_thresholds": {
            "automatic_promotion": "score >= 8 and confidence >= 95",
            "suggestion": "score >= 8 and confidence 80–94",
            "manual_review": "score 6–7",
            "keep_current_state": "score < 6",
        },
        "candidates": candidates,
    }
    report_path = Path(args.report)
    if not report_path.is_absolute():
        report_path = vault_root / report_path
    report_path.parent.mkdir(parents=True, exist_ok=True)
    report_path.write_text(json.dumps(report, indent=2), encoding="utf-8")
    print(json.dumps({"reported": len(candidates), "path": str(report_path), "mode": "read_only"}))


if __name__ == "__main__":
    main()

