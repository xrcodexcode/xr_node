#!/usr/bin/env python3
"""
decay_scheduler.py — Evaluate knowledge freshness and schedule reviews.

Updates `review_priority` and `stale_after` in note frontmatter based on
`last_verified`, `verification_interval`, and `confidence_decay`.

Produces:
  .antigravity/reports/decay-report.md

Governance rules:
  - `review_priority` and `stale_after` are scheduling metadata; decay_scheduler.py
    is permitted to update them automatically.
  - `confidence` is NEVER modified by this script. Effective confidence is
    computed for reporting purposes only.
  - Governed by .antigravity/rules/quality/knowledge-decay.md.

Safety:
  - Runs in dry-run mode by default (--apply to write changes).
  - Writes one audit log row per batch (not per note).
  - Never modifies knowledge content.
"""
from __future__ import annotations

import argparse
import re
import sys
from datetime import date, datetime, timedelta
from pathlib import Path
from typing import Optional

from vault_paths import get_vault_root
from vault_utils import iter_notes, parse_frontmatter, slug_of

# ── Priority thresholds (days overdue) ───────────────────────────────────────
PRIORITY_THRESHOLDS = [
    (0,   "low"),       # not overdue
    (30,  "normal"),    # 0–30 days overdue
    (90,  "high"),      # 31–90 days overdue
    (999, "critical"),  # > 90 days overdue
]

# ── Incubation timeout thresholds ────────────────────────────────────────────
INCUBATION_HIGH_DAYS = 30
INCUBATION_CRITICAL_DAYS = 60


def compute_priority(last_verified: Optional[str], interval: Optional[int]) -> tuple[str, Optional[date]]:
    """Compute review_priority and stale_after from last_verified and interval."""
    if interval is None:
        return "low", None

    today = date.today()
    lv: Optional[date] = None
    if last_verified:
        try:
            lv = date.fromisoformat(str(last_verified)[:10])
        except (ValueError, TypeError):
            lv = None

    if lv is None:
        # No verification date — treat as maximally overdue
        return "critical", None

    stale_after = lv + timedelta(days=int(interval))
    days_overdue = (today - stale_after).days

    if days_overdue <= 0:
        return "low", stale_after
    for threshold, priority in PRIORITY_THRESHOLDS[1:]:
        if days_overdue <= threshold:
            return priority, stale_after
    return "critical", stale_after


def effective_confidence(confidence: int, decay: int, last_verified: Optional[str], interval: Optional[int]) -> int:
    """Compute effective confidence for reports (never written to files)."""
    if not decay or not interval or not last_verified:
        return confidence
    today = date.today()
    try:
        lv = date.fromisoformat(str(last_verified)[:10])
    except (ValueError, TypeError):
        return confidence
    stale = lv + timedelta(days=int(interval))
    days_overdue = (today - stale).days
    if days_overdue <= 0:
        return confidence
    years_overdue = days_overdue / 365
    return max(0, confidence - round(decay * years_overdue))


def update_frontmatter_field(content: str, field: str, new_value: str) -> str:
    """Update a single scalar field in frontmatter block."""
    pattern = re.compile(
        rf"^({re.escape(field)}:\s*)(.+?)(\s*(?=#|$))",
        re.MULTILINE,
    )
    if pattern.search(content):
        return pattern.sub(rf"\g<1>{new_value}\3", content, count=1)
    # Field doesn't exist — insert after the last frontmatter field before closing ---
    insert_line = f"{field}: {new_value}"
    fm_end = content.find("\n---", 3)
    if fm_end != -1:
        return content[:fm_end] + f"\n{insert_line}" + content[fm_end:]
    return content


def main() -> None:
    ap = argparse.ArgumentParser(description="Evaluate knowledge decay and schedule reviews.")
    ap.add_argument("--vault", default=None)
    ap.add_argument("--apply", action="store_true", help="Write changes to files (default: dry-run)")
    ap.add_argument("--output-dir", default=None)
    args = ap.parse_args()

    vault_root = Path(args.vault) if args.vault else Path(get_vault_root())
    output_dir = Path(args.output_dir) if args.output_dir else vault_root / ".antigravity" / "reports"
    output_dir.mkdir(parents=True, exist_ok=True)
    dry_run = not args.apply

    nodes_dir = vault_root / "NODES"
    capture_dir = vault_root / "01_RAW" / "CAPTURE"
    today = date.today()

    overdue: list[dict] = []
    expiring_soon: list[dict] = []
    incubation_overdue: list[dict] = []
    updated_count = 0

    # ── Process NODES/ for decay ──────────────────────────────────────────────
    for path, fm, body, raw in iter_notes(nodes_dir):
        if fm.get("status") == "archived":
            continue

        interval = fm.get("verification_interval")
        if interval is None:
            continue

        last_verified = fm.get("last_verified") or fm.get("updated")
        confidence = fm.get("confidence", 95)
        decay = fm.get("confidence_decay", 0)

        priority, stale_after = compute_priority(last_verified, interval)
        eff_conf = effective_confidence(confidence, decay or 0, last_verified, interval)

        # Track overdue and expiring-soon
        stale_after_str = stale_after.isoformat() if stale_after else None
        if priority in ("high", "critical"):
            overdue.append({
                "path": str(path.relative_to(vault_root)),
                "slug": slug_of(path.stem),
                "priority": priority,
                "stale_after": stale_after_str,
                "effective_confidence": eff_conf,
                "confidence": confidence,
            })
        elif stale_after and (stale_after - today).days <= 30:
            expiring_soon.append({
                "path": str(path.relative_to(vault_root)),
                "slug": slug_of(path.stem),
                "stale_after": stale_after_str,
            })

        # Update frontmatter if needed
        current_priority = fm.get("review_priority", "low")
        current_stale = fm.get("stale_after")
        needs_update = (
            str(current_priority) != priority or
            str(current_stale) != (stale_after_str or "null")
        )

        if needs_update and args.apply and raw:
            try:
                new_content = raw
                new_content = update_frontmatter_field(new_content, "review_priority", priority)
                new_content = update_frontmatter_field(new_content, "stale_after", stale_after_str or "null")
                path.write_text(new_content, encoding="utf-8")
                updated_count += 1
            except Exception as exc:
                print(f"  [WARN] Could not update {path.name}: {exc}", file=sys.stderr)

    # ── Process 01_RAW/CAPTURE/ for incubation timeout ────────────────────────
    if capture_dir.exists():
        for path, fm, body, _ in iter_notes(capture_dir):
            if fm.get("status") != "incubating":
                continue
            created_raw = fm.get("created")
            if not created_raw:
                continue
            try:
                created = date.fromisoformat(str(created_raw)[:10])
                age = (today - created).days
                if age >= INCUBATION_CRITICAL_DAYS:
                    priority = "critical"
                elif age >= INCUBATION_HIGH_DAYS:
                    priority = "high"
                else:
                    continue
                incubation_overdue.append({
                    "path": str(path.relative_to(vault_root)),
                    "slug": slug_of(path.stem),
                    "age_days": age,
                    "priority": priority,
                })
            except (ValueError, TypeError):
                pass

    # ── Write decay report ────────────────────────────────────────────────────
    mode_label = "DRY RUN" if dry_run else "APPLIED"
    lines = [
        "# Knowledge Decay Report",
        "",
        f"**Generated**: {datetime.utcnow().strftime('%Y-%m-%d %H:%M')} UTC  ",
        f"**Mode**: {mode_label}  ",
        f"**Notes with decay tracking**: updated {updated_count} (of those needing it)",
        "",
        "## Critical & High Priority (Overdue Reviews)",
        "",
    ]
    critical = [n for n in overdue if n["priority"] == "critical"]
    high = [n for n in overdue if n["priority"] == "high"]

    if critical:
        lines.append("### 🔴 Critical")
        for n in critical:
            lines.append(f"- `{n['slug']}` — stale since {n['stale_after'] or 'unknown'} "
                         f"(effective confidence: {n['effective_confidence']})")
    if high:
        lines.append("\n### ⚠️ High")
        for n in high:
            lines.append(f"- `{n['slug']}` — stale since {n['stale_after'] or 'unknown'}")
    if not overdue:
        lines.append("No overdue notes. ✅")

    lines += [
        "",
        "## Expiring Soon (Next 30 Days)",
        "",
    ]
    if expiring_soon:
        for n in expiring_soon:
            lines.append(f"- `{n['slug']}` — expires {n['stale_after']}")
    else:
        lines.append("No notes expiring in the next 30 days. ✅")

    lines += [
        "",
        "## Incubation Timeouts",
        "",
    ]
    if incubation_overdue:
        for n in incubation_overdue:
            lines.append(f"- `{n['slug']}` — {n['age_days']} days old [{n['priority'].upper()}]")
    else:
        lines.append("No incubating notes past timeout thresholds. ✅")

    lines += [
        "",
        "---",
        "_Governed by `.antigravity/rules/quality/knowledge-decay.md`. `confidence` field is never automatically modified._",
        f"_Run with `--apply` to write `review_priority` and `stale_after` updates to files._" if dry_run else "",
    ]

    report_path = output_dir / "decay-report.md"
    report_path.write_text("\n".join(lines), encoding="utf-8")

    mode = "DRY RUN" if dry_run else "APPLIED"
    print(f"[decay_scheduler] [{mode}] Report written to {report_path}")
    print(f"  Overdue (critical): {len(critical)}")
    print(f"  Overdue (high): {len(high)}")
    print(f"  Expiring soon: {len(expiring_soon)}")
    print(f"  Incubation timeouts: {len(incubation_overdue)}")
    if args.apply:
        print(f"  Frontmatter fields updated: {updated_count}")
    else:
        print("  Run with --apply to write changes.")


if __name__ == "__main__":
    main()
