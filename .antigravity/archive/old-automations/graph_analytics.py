#!/usr/bin/env python3
"""
graph_analytics.py — Compute graph analytics and produce authority/hub/bridge/gap reports.

Produces:
  .antigravity/reports/graph-analytics.json
  .antigravity/reports/graph-analytics.md

Read-only. Never modifies notes.
Governed by .antigravity/rules/quality/health-metrics.md (Section 10).
"""
from __future__ import annotations

import argparse
import json
from collections import Counter, defaultdict
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

TOP_N = 10
DAYS_EMERGING = 30
MIN_NODES_FOR_GAP = 5


def build_graph(all_notes: list[tuple[Path, dict, str]], node_slugs: set[str]) -> dict[str, set[str]]:
    """Build directed adjacency: slug → set of target slugs."""
    graph: dict[str, set[str]] = defaultdict(set)
    for path, fm, body in all_notes:
        src = slug_of(path.stem)
        for link in extract_wikilinks(body):
            tgt = slug_of(link.split("|")[0])
            if tgt in node_slugs and tgt != src:
                graph[src].add(tgt)
    return dict(graph)


def approximate_betweenness(
    graph: dict[str, set[str]],
    backlinks: dict[str, list[str]],
    node_slugs: set[str],
    sample_size: int = 200,
) -> dict[str, float]:
    """
    Approximate betweenness centrality via BFS on a sample of source nodes.
    Full betweenness is O(V*E) which is infeasible at 250k nodes.
    Uses the combined graph (outgoing + incoming as undirected for sampling).
    """
    import random

    # Build undirected neighbour map for BFS
    undirected: dict[str, set[str]] = defaultdict(set)
    for src, targets in graph.items():
        for tgt in targets:
            undirected[src].add(tgt)
            undirected[tgt].add(src)
    for tgt, srcs in backlinks.items():
        for src in srcs:
            undirected[src].add(tgt)
            undirected[tgt].add(src)

    nodes = list(node_slugs)
    sample = random.sample(nodes, min(sample_size, len(nodes)))
    betweenness: dict[str, float] = defaultdict(float)

    for source in sample:
        # BFS to find shortest paths from source
        queue = [source]
        visited = {source: 0}
        parent: dict[str, list[str]] = defaultdict(list)
        order: list[str] = []
        sigma: dict[str, float] = {source: 1.0}

        i = 0
        while i < len(queue):
            v = queue[i]
            i += 1
            order.append(v)
            for w in undirected.get(v, set()):
                if w not in visited:
                    visited[w] = visited[v] + 1
                    queue.append(w)
                if visited.get(w, -1) == visited[v] + 1:
                    sigma[w] = sigma.get(w, 0) + sigma.get(v, 1)
                    parent[w].append(v)

        delta: dict[str, float] = defaultdict(float)
        for w in reversed(order):
            for v in parent[w]:
                frac = (sigma.get(v, 1) / max(sigma.get(w, 1), 1)) * (1 + delta[w])
                delta[v] += frac
            if w != source:
                betweenness[w] += delta[w]

    scale = len(nodes) / max(sample_size, 1)
    return {k: round(v * scale, 2) for k, v in betweenness.items()}


def find_clusters(graph: dict[str, set[str]], node_slugs: set[str]) -> list[set[str]]:
    """Find weakly connected components via union-find."""
    parent = {n: n for n in node_slugs}

    def find(x: str) -> str:
        while parent[x] != x:
            parent[x] = parent[parent[x]]
            x = parent[x]
        return x

    def union(a: str, b: str) -> None:
        pa, pb = find(a), find(b)
        if pa != pb:
            parent[pa] = pb

    for src, targets in graph.items():
        for tgt in targets:
            if src in node_slugs and tgt in node_slugs:
                union(src, tgt)

    components: dict[str, set[str]] = defaultdict(set)
    for node in node_slugs:
        components[find(node)].add(node)

    return sorted(components.values(), key=len, reverse=True)


def main() -> None:
    ap = argparse.ArgumentParser(description="Graph analytics report for the vault.")
    ap.add_argument("--vault", default=None)
    ap.add_argument("--output-dir", default=None)
    ap.add_argument("--top-n", type=int, default=TOP_N)
    args = ap.parse_args()

    vault_root = Path(args.vault) if args.vault else Path(get_vault_root())
    output_dir = Path(args.output_dir) if args.output_dir else vault_root / ".antigravity" / "reports"
    output_dir.mkdir(parents=True, exist_ok=True)

    nodes_dir = vault_root / "NODES"
    top_n = args.top_n

    # ── Load notes ────────────────────────────────────────────────────────────
    all_notes: list[tuple[Path, dict, str]] = []
    for path, fm, body, _ in iter_notes(nodes_dir):
        if fm.get("status") != "archived":
            all_notes.append((path, fm, body))

    node_slugs = {slug_of(p.stem) for p, _, _ in all_notes}
    backlink_index = build_backlink_index()
    graph = build_graph(all_notes, node_slugs)

    # ── Authority nodes (most inbound links) ──────────────────────────────────
    inbound_counts: Counter[str] = Counter()
    for slug in node_slugs:
        inbound_counts[slug] = len(backlink_index.get(slug, []))
    authority_nodes = [
        {"slug": slug, "inbound": count, "title": slug.replace("-", " ").title()}
        for slug, count in inbound_counts.most_common(top_n)
    ]

    # ── Hub nodes (most outbound links) ──────────────────────────────────────
    outbound_counts: Counter[str] = Counter({slug_of(p.stem): len(out) for p, _, _ in all_notes
                                              for out in [graph.get(slug_of(p.stem), set())]})
    hub_nodes = [
        {"slug": slug, "outbound": count, "title": slug.replace("-", " ").title()}
        for slug, count in Counter({s: len(graph.get(s, set())) for s in node_slugs}).most_common(top_n)
    ]

    # ── Bridge nodes (approximate betweenness centrality) ─────────────────────
    betweenness = approximate_betweenness(graph, backlink_index, node_slugs)
    bridge_nodes = [
        {"slug": slug, "betweenness": score, "title": slug.replace("-", " ").title()}
        for slug, score in sorted(betweenness.items(), key=lambda x: -x[1])[:top_n]
    ]

    # ── Disconnected clusters ─────────────────────────────────────────────────
    clusters = find_clusters(graph, node_slugs)
    disconnected_clusters = [
        {"size": len(c), "sample": list(c)[:5]}
        for c in clusters[1:]  # skip the largest connected component
        if len(c) >= 2
    ][:10]  # report up to 10 isolated clusters

    # ── Emerging topics (domains with fastest recent growth) ──────────────────
    today = date.today()
    cutoff = today - timedelta(days=DAYS_EMERGING)
    recent_by_domain: Counter[str] = Counter()
    for _, fm, _ in all_notes:
        created_raw = fm.get("created")
        domain = fm.get("domain", "general")
        if created_raw:
            try:
                created = date.fromisoformat(str(created_raw)[:10])
                if created >= cutoff:
                    recent_by_domain[domain] += 1
            except (ValueError, TypeError):
                pass
    emerging_topics = [
        {"domain": d, "new_notes_last_30d": c}
        for d, c in recent_by_domain.most_common(top_n)
    ]

    # ── Knowledge gaps (domains with MOC but few nodes) ───────────────────────
    domain_node_count: Counter[str] = Counter()
    for _, fm, _ in all_notes:
        d = fm.get("domain", "general")
        domain_node_count[d] += 1
    moc_dir = vault_root / "03_MOC"
    domains_with_moc: set[str] = set()
    if moc_dir.exists():
        for mf in moc_dir.rglob("*.md"):
            try:
                content = mf.read_text(encoding="utf-8", errors="replace")
                moc_fm, _ = parse_frontmatter(content)
                d = moc_fm.get("domain")
                if d:
                    domains_with_moc.add(d)
            except Exception:
                pass
    knowledge_gaps = [
        {"domain": d, "node_count": domain_node_count.get(d, 0)}
        for d in domains_with_moc
        if domain_node_count.get(d, 0) < MIN_NODES_FOR_GAP
    ]

    # ── Most reused concepts (nodes referenced by > 3 other notes) ────────────
    most_reused = [
        {"slug": slug, "reference_count": cnt, "title": slug.replace("-", " ").title()}
        for slug, cnt in inbound_counts.most_common()
        if cnt > 3
    ][:top_n]

    # ── Most cited sources ────────────────────────────────────────────────────
    source_citation_count: Counter[str] = Counter()
    for _, fm, _ in all_notes:
        for s in (fm.get("sources") or []):
            source_citation_count[str(s).split("/")[-1]] += 1
    most_cited_sources = [
        {"source": src, "citation_count": cnt}
        for src, cnt in source_citation_count.most_common(top_n)
    ]

    # ── Graph growth (nodes per week, last 8 weeks) ───────────────────────────
    growth: dict[str, int] = {}
    for i in range(8):
        week_start = today - timedelta(weeks=i + 1)
        week_end = today - timedelta(weeks=i)
        key = week_start.isoformat()
        growth[key] = sum(
            1 for _, fm, _ in all_notes
            if fm.get("created")
            and week_start <= date.fromisoformat(str(fm["created"])[:10]) < week_end
        )

    # ── Domain distribution ────────────────────────────────────────────────────
    domain_distribution = dict(domain_node_count.most_common())

    # ── Knowledge velocity (avg nodes added per week, last 4 weeks) ───────────
    recent_4w = sum(
        1 for _, fm, _ in all_notes
        if fm.get("created")
        and date.fromisoformat(str(fm["created"])[:10]) >= today - timedelta(weeks=4)
    )
    knowledge_velocity = round(recent_4w / 4, 2)

    # ── Compile result ────────────────────────────────────────────────────────
    result: dict[str, Any] = {
        "generated_at": datetime.utcnow().isoformat() + "Z",
        "vault_root": str(vault_root),
        "active_nodes": len(all_notes),
        "authority_nodes": authority_nodes,
        "hub_nodes": hub_nodes,
        "bridge_nodes": bridge_nodes,
        "disconnected_clusters": disconnected_clusters,
        "emerging_topics": emerging_topics,
        "knowledge_gaps": knowledge_gaps,
        "most_reused_concepts": most_reused,
        "most_cited_sources": most_cited_sources,
        "graph_growth_by_week": growth,
        "domain_distribution": domain_distribution,
        "knowledge_velocity_notes_per_week": knowledge_velocity,
    }

    json_path = output_dir / "graph-analytics.json"
    json_path.write_text(json.dumps(result, indent=2), encoding="utf-8")

    # ── Markdown report ───────────────────────────────────────────────────────
    def table(headers: list[str], rows: list[list[Any]]) -> list[str]:
        lines = ["| " + " | ".join(headers) + " |", "| " + " | ".join(["---"] * len(headers)) + " |"]
        for row in rows:
            lines.append("| " + " | ".join(str(v) for v in row) + " |")
        return lines

    md: list[str] = [
        "# Vault Graph Analytics",
        "",
        f"**Generated**: {datetime.utcnow().strftime('%Y-%m-%d %H:%M')} UTC  ",
        f"**Active nodes**: {len(all_notes)}  ",
        f"**Knowledge velocity**: {knowledge_velocity} notes/week",
        "",
        "## Authority Nodes (Most Inbound Links)",
        "",
        *table(["Rank", "Slug", "Inbound Links"], [[i + 1, r["slug"], r["inbound"]] for i, r in enumerate(authority_nodes)]),
        "",
        "## Hub Nodes (Most Outbound Links)",
        "",
        *table(["Rank", "Slug", "Outbound Links"], [[i + 1, r["slug"], r["outbound"]] for i, r in enumerate(hub_nodes)]),
        "",
        "## Bridge Nodes (Highest Betweenness — connects clusters)",
        "",
        *table(["Rank", "Slug", "Score"], [[i + 1, r["slug"], r["betweenness"]] for i, r in enumerate(bridge_nodes)]),
        "",
        "## Disconnected Clusters",
        "",
    ]
    if disconnected_clusters:
        md += [f"- **Cluster** ({c['size']} nodes): {', '.join(c['sample'][:3])}{'...' if c['size'] > 3 else ''}" for c in disconnected_clusters]
    else:
        md.append("No significant disconnected clusters. ✅")

    md += [
        "",
        "## Emerging Topics (Last 30 Days)",
        "",
        *table(["Domain", "New Notes"], [[r["domain"], r["new_notes_last_30d"]] for r in emerging_topics]),
        "",
        "## Knowledge Gaps (Domains with < 5 Nodes)",
        "",
    ]
    if knowledge_gaps:
        md += [f"- **{g['domain']}**: {g['node_count']} nodes" for g in knowledge_gaps]
    else:
        md.append("No knowledge gaps detected. ✅")

    md += [
        "",
        "## Most Reused Concepts (> 3 References)",
        "",
        *table(["Slug", "Reference Count"], [[r["slug"], r["reference_count"]] for r in most_reused]),
        "",
        "## Most Cited Sources",
        "",
        *table(["Source", "Citations"], [[r["source"], r["citation_count"]] for r in most_cited_sources]),
        "",
        "## Domain Distribution",
        "",
        *table(["Domain", "Node Count"], [[d, c] for d, c in domain_distribution.items()]),
        "",
        "---",
        "_Read-only report. Governed by `.antigravity/rules/quality/health-metrics.md`._",
    ]

    md_path = output_dir / "graph-analytics.md"
    md_path.write_text("\n".join(md), encoding="utf-8")

    print(f"[graph_analytics] Report written to {output_dir}")
    print(f"  Active nodes: {len(all_notes)}")
    print(f"  Knowledge velocity: {knowledge_velocity} notes/week")
    print(f"  Top authority: {authority_nodes[0]['slug'] if authority_nodes else 'N/A'}")
    print(f"  Disconnected clusters: {len(disconnected_clusters)}")
    print(f"  Knowledge gaps: {len(knowledge_gaps)}")


if __name__ == "__main__":
    main()
