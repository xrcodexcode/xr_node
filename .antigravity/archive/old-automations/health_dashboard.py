#!/usr/bin/env python3
"""
health_dashboard.py — Compute 15 graph health metrics and write dashboard reports.

Produces:
  .antigravity/reports/health-dashboard.json  (machine-readable)
  .antigravity/reports/health-dashboard.md    (human-readable)

All metrics are READ-ONLY. This script never modifies notes.
Governed by .antigravity/rules/quality/health-metrics.md.
"""
from __future__ import annotations

import argparse
import json
import math
import re
from datetime import date, datetime, timedelta
from pathlib import Path
from typing import Any

from vault_paths import get_vault_root
from vault_utils import (
    build_backlink_index,
    extract_wikilinks,
    iter_notes,
    parse_frontmatter,
    slug_of,
)

# ── Thresholds from health-metrics.md ────────────────────────────────────────
THRESHOLDS: dict[str, dict[str, Any]] = {
    "orphan_pct":            {"healthy": 5,   "warning": 10,  "critical": 20,  "direction": "below"},
    "dead_link_count":       {"healthy": 0,   "warning": 1,   "critical": 10,  "direction": "below"},
    "avg_backlinks":         {"healthy": 2.0, "warning": 1.0, "critical": 0.5, "direction": "above"},
    "avg_outgoing":          {"healthy": (3, 8), "warning": 2, "critical": 0,  "direction": "range"},
    "cluster_density":       {"healthy": 1.5, "warning": 0.8, "critical": 0.3, "direction": "above"},
    "duplicate_pct":         {"healthy": 2,   "warning": 5,   "critical": 15,  "direction": "below"},
    "review_freshness_pct":  {"healthy": 85,  "warning": 70,  "critical": 50,  "direction": "above"},
    "domain_coverage_pct":   {"healthy": 100, "warning": 80,  "critical": 60,  "direction": "above"},
    "source_utilization_pct":{"healthy": 80,  "warning": 50,  "critical": 30,  "direction": "above"},
    "moc_coverage_pct":      {"healthy": 95,  "warning": 90,  "critical": 70,  "direction": "above"},
    "source_traceability_pct":{"healthy": 100,"warning": 95,  "critical": 80,  "direction": "above"},
    "broken_ref_count":      {"healthy": 0,   "warning": 1,   "critical": 10,  "direction": "below"},
    "schema_compliance_pct": {"healthy": 95,  "warning": 80,  "critical": 50,  "direction": "above"},
    "avg_freshness_days":    {"healthy": 180, "warning": 365, "critical": 730, "direction": "below"},
}

CONTROLLED_DOMAINS = {
    "ai", "ml", "llm", "psychology", "productivity", "philosophy", "business",
    "study", "research", "writing", "tools", "habits", "strategy", "leadership",
    "self-improvement", "dsa", "engineering", "manufacturing", "innovation", "risk", "general"
}


def severity(metric: str, value: float) -> str:
    """Return 'healthy', 'warning', or 'critical' for a given metric value."""
    t = THRESHOLDS.get(metric)
    if not t:
        return "unknown"
    direction = t["direction"]
    if direction == "below":
        if value <= t["healthy"]:
            return "healthy"
        if value <= t["warning"]:
            return "warning"
        return "critical"
    elif direction == "above":
        if value >= t["healthy"]:
            return "healthy"
        if value >= t["warning"]:
            return "warning"
        return "critical"
    elif direction == "range":
        lo, hi = t["healthy"]
        if lo <= value <= hi:
            return "healthy"
        if value >= t["warning"]:
            return "warning"
        return "critical"
    return "unknown"


def severity_emoji(s: str) -> str:
    return {"healthy": "✅", "warning": "⚠️", "critical": "🔴"}.get(s, "❓")


def compute_tag_entropy(all_tags: list[str]) -> float:
    """Compute normalised Shannon entropy of tag distribution."""
    if not all_tags:
        return 0.0
    from collections import Counter
    counts = Counter(all_tags)
    total = sum(counts.values())
    n = len(counts)
    if n <= 1:
        return 0.0
    entropy = -sum((c / total) * math.log2(c / total) for c in counts.values())
    return round(entropy / math.log2(n), 4) if n > 1 else 0.0


def main() -> None:
    ap = argparse.ArgumentParser(description="Compute vault health metrics and write dashboard reports.")
    ap.add_argument("--vault", default=None)
    ap.add_argument("--output-dir", default=None)
    args = ap.parse_args()

    vault_root = Path(args.vault) if args.vault else Path(get_vault_root())
    output_dir = Path(args.output_dir) if args.output_dir else vault_root / ".antigravity" / "reports"
    output_dir.mkdir(parents=True, exist_ok=True)

    nodes_dir = vault_root / "NODES"
    moc_dir = vault_root / "03_MOC"
    sources_dir = vault_root / "01_RAW" / "SOURCE"

    # ── Build indices ─────────────────────────────────────────────────────────
    backlink_index = build_backlink_index()

    # Load all active notes
    all_notes: list[tuple[Path, dict, str]] = []
    for path, fm, body, _ in iter_notes(nodes_dir):
        if fm.get("status") != "archived":
            all_notes.append((path, fm, body))

    active_node_count = len(all_notes)
    if active_node_count == 0:
        print("No active nodes found. Exiting.")
        return

    node_slugs = {slug_of(p.stem) for p, _, _ in all_notes}

    # ── Metric 1: Orphan % ────────────────────────────────────────────────────
    orphan_count = 0
    for path, fm, body in all_notes:
        slug = slug_of(path.stem)
        has_moc = bool(fm.get("owner_moc"))
        body_links = {slug_of(lk) for lk in extract_wikilinks(body)}
        has_link = bool((body_links & (node_slugs - {slug})) or backlink_index.get(slug))
        if not has_moc or not has_link:
            orphan_count += 1
    orphan_pct = round(100 * orphan_count / active_node_count, 2)

    # ── Metric 2: Dead link count ─────────────────────────────────────────────
    dead_link_count = 0
    for path, fm, body in all_notes:
        for link in extract_wikilinks(body):
            link_slug = slug_of(link.split("|")[0])
            if link_slug not in node_slugs:
                dead_link_count += 1

    # ── Metrics 3 & 4: Avg backlinks and outgoing links ──────────────────────
    total_backlinks = sum(len(backlink_index.get(slug_of(p.stem), [])) for p, _, _ in all_notes)
    total_outgoing = 0
    for path, fm, body in all_notes:
        slug = slug_of(path.stem)
        out = {slug_of(lk) for lk in extract_wikilinks(body)} & (node_slugs - {slug})
        total_outgoing += len(out)
    avg_backlinks = round(total_backlinks / active_node_count, 2)
    avg_outgoing = round(total_outgoing / active_node_count, 2)

    # ── Metric 5: Cluster density ─────────────────────────────────────────────
    cluster_density = round((total_backlinks + total_outgoing) / 2 / active_node_count, 3)

    # ── Metric 6: Duplicate probability % ────────────────────────────────────
    dup_report = vault_root / ".antigravity" / "reports" / "duplicate-candidates.md"
    dup_candidate_count = 0
    if dup_report.exists():
        text = dup_report.read_text(encoding="utf-8", errors="replace")
        dup_candidate_count = text.count("## Candidate")
    duplicate_pct = round(100 * dup_candidate_count / active_node_count, 2) if active_node_count else 0

    # ── Metric 7: Review freshness % ─────────────────────────────────────────
    tracked = 0
    fresh = 0
    today = date.today()
    for _, fm, _ in all_notes:
        interval = fm.get("verification_interval")
        if interval is None:
            continue
        tracked += 1
        last = fm.get("last_verified") or fm.get("updated")
        if not last:
            continue
        try:
            lv = date.fromisoformat(str(last)[:10])
            if (today - lv).days <= int(interval):
                fresh += 1
        except (ValueError, TypeError):
            pass
    review_freshness_pct = round(100 * fresh / tracked, 2) if tracked > 0 else 100.0

    # ── Metric 8: Domain coverage % ──────────────────────────────────────────
    domains_with_moc: set[str] = set()
    if moc_dir.exists():
        for moc_file in moc_dir.rglob("*.md"):
            try:
                content = moc_file.read_text(encoding="utf-8", errors="replace")
                moc_fm, _ = parse_frontmatter(content)
                d = moc_fm.get("domain")
                if d and d in CONTROLLED_DOMAINS:
                    domains_with_moc.add(d)
            except Exception:
                pass
    domain_coverage_pct = round(100 * len(domains_with_moc) / len(CONTROLLED_DOMAINS), 2)

    # ── Metric 9: Source utilization % ───────────────────────────────────────
    source_files: set[str] = set()
    if sources_dir.exists():
        source_files = {f.stem.lower() for f in sources_dir.rglob("*.md")}
    referenced_sources: set[str] = set()
    for _, fm, _ in all_notes:
        for s in (fm.get("sources") or []):
            slug_s = slug_of(str(s).split("/")[-1])
            if slug_s in source_files:
                referenced_sources.add(slug_s)
    source_utilization_pct = round(100 * len(referenced_sources) / len(source_files), 2) if source_files else 100.0

    # ── Metric 10: Tag entropy ────────────────────────────────────────────────
    all_tags_flat: list[str] = []
    for _, fm, _ in all_notes:
        tags = fm.get("tags") or []
        all_tags_flat.extend([str(t) for t in tags])
    tag_entropy = compute_tag_entropy(all_tags_flat)

    # ── Metric 11: MOC coverage % ────────────────────────────────────────────
    notes_with_moc = sum(1 for _, fm, _ in all_notes if fm.get("owner_moc"))
    moc_coverage_pct = round(100 * notes_with_moc / active_node_count, 2)

    # ── Metric 12: Source traceability % ─────────────────────────────────────
    source_dependent = 0
    traceable = 0
    for _, fm, _ in all_notes:
        st = fm.get("source_type")
        if st and st not in ("original-observation", "null", None):
            source_dependent += 1
            if fm.get("sources"):
                traceable += 1
    source_traceability_pct = round(100 * traceable / source_dependent, 2) if source_dependent else 100.0

    # ── Metric 13: Broken reference count ────────────────────────────────────
    broken_ref_count = 0
    for _, fm, _ in all_notes:
        relations = fm.get("relations") or []
        for rel in relations:
            if isinstance(rel, dict):
                target = rel.get("target", "")
                target_slug = slug_of(str(target))
                if target_slug not in node_slugs:
                    broken_ref_count += 1

    # ── Metric 14: Schema compliance % ───────────────────────────────────────
    compliant = sum(1 for _, fm, _ in all_notes if fm.get("schema_version") in (3, 4))
    schema_compliance_pct = round(100 * compliant / active_node_count, 2)

    # ── Metric 15: Average freshness (days since updated) ────────────────────
    freshness_days: list[int] = []
    for _, fm, _ in all_notes:
        raw = fm.get("last_verified") or fm.get("updated")
        if raw:
            try:
                d = date.fromisoformat(str(raw)[:10])
                freshness_days.append((today - d).days)
            except (ValueError, TypeError):
                pass
    avg_freshness_days = round(sum(freshness_days) / len(freshness_days), 1) if freshness_days else 0

    # ── Compile metrics ───────────────────────────────────────────────────────
    metrics = {
        "orphan_pct": orphan_pct,
        "dead_link_count": dead_link_count,
        "avg_backlinks": avg_backlinks,
        "avg_outgoing": avg_outgoing,
        "cluster_density": cluster_density,
        "duplicate_pct": duplicate_pct,
        "review_freshness_pct": review_freshness_pct,
        "domain_coverage_pct": domain_coverage_pct,
        "source_utilization_pct": source_utilization_pct,
        "tag_entropy": tag_entropy,
        "moc_coverage_pct": moc_coverage_pct,
        "source_traceability_pct": source_traceability_pct,
        "broken_ref_count": broken_ref_count,
        "schema_compliance_pct": schema_compliance_pct,
        "avg_freshness_days": avg_freshness_days,
    }

    alerts = []
    for metric, value in metrics.items():
        if metric not in THRESHOLDS:
            continue
        sev = severity(metric, float(value))
        if sev in ("warning", "critical"):
            alerts.append({
                "metric": metric,
                "value": value,
                "severity": sev,
                "thresholds": THRESHOLDS[metric],
            })

    # ── Write JSON report ─────────────────────────────────────────────────────
    dashboard_json = {
        "generated_at": datetime.utcnow().isoformat() + "Z",
        "vault_root": str(vault_root),
        "active_nodes": active_node_count,
        "metrics": metrics,
        "alerts": alerts,
    }
    json_path = output_dir / "health-dashboard.json"
    json_path.write_text(json.dumps(dashboard_json, indent=2), encoding="utf-8")

    # ── Write Markdown report ─────────────────────────────────────────────────
    lines = [
        "# Vault Health Dashboard",
        "",
        f"**Generated**: {datetime.utcnow().strftime('%Y-%m-%d %H:%M')} UTC  ",
        f"**Active nodes**: {active_node_count}",
        "",
        "## Metrics",
        "",
        "| # | Metric | Value | Status |",
        "|---|--------|-------|--------|",
    ]
    metric_labels = {
        "orphan_pct": "Orphan %",
        "dead_link_count": "Dead Link Count",
        "avg_backlinks": "Avg Backlinks / Node",
        "avg_outgoing": "Avg Outgoing Links / Node",
        "cluster_density": "Cluster Density",
        "duplicate_pct": "Duplicate Probability %",
        "review_freshness_pct": "Review Freshness %",
        "domain_coverage_pct": "Domain Coverage %",
        "source_utilization_pct": "Source Utilization %",
        "tag_entropy": "Tag Entropy (normalised)",
        "moc_coverage_pct": "MOC Coverage %",
        "source_traceability_pct": "Source Traceability %",
        "broken_ref_count": "Broken Reference Count",
        "schema_compliance_pct": "Schema Compliance %",
        "avg_freshness_days": "Avg Freshness (days)",
    }
    for i, (key, label) in enumerate(metric_labels.items(), 1):
        val = metrics.get(key, "N/A")
        sev = severity(key, float(val)) if isinstance(val, (int, float)) else "unknown"
        emoji = severity_emoji(sev)
        lines.append(f"| {i} | {label} | {val} | {emoji} |")

    if alerts:
        lines += [
            "",
            "## Alerts",
            "",
        ]
        for alert in alerts:
            sev_label = "⚠️ Warning" if alert["severity"] == "warning" else "🔴 Critical"
            lines.append(f"- **{sev_label}**: `{alert['metric']}` = {alert['value']}")
    else:
        lines += ["", "## Alerts", "", "No alerts. All metrics are healthy. ✅"]

    lines += [
        "",
        "---",
        "",
        "_Governed by `.antigravity/rules/quality/health-metrics.md`. Metrics inform review; they never authorise automatic cleanup._",
    ]

    md_path = output_dir / "health-dashboard.md"
    md_path.write_text("\n".join(lines), encoding="utf-8")

    print(f"[health_dashboard] Dashboard written to {output_dir}")
    print(f"  Active nodes: {active_node_count}")
    print(f"  Alerts: {len(alerts)}")
    if alerts:
        for a in alerts:
            print(f"    [{a['severity'].upper()}] {a['metric']} = {a['value']}")


if __name__ == "__main__":
    main()
