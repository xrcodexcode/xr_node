#!/usr/bin/env python3
"""
NexusDB Knowledge Pipeline Automation Engine
Tracks, validates, and reports knowledge lifecycle status across:
  RAW (01_RAW / 01 raw) -> PROCESS -> 02_NEW-KNOWLEDGE -> NODES / NOTES -> 03_MOC
"""

import os
import sys
import re
from pathlib import Path

# Add lib directory to path
sys.path.append(os.path.join(os.path.dirname(__file__), 'lib'))
try:
    from vault_paths import get_vault_root
    from vault_utils import parse_frontmatter
except ImportError:
    def get_vault_root():
        return os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))

# Force UTF-8 stdout encoding on Windows
if sys.platform.startswith('win'):
    import io
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')


def get_raw_dirs(vault_root):
    """Find available raw capture directory."""
    root = Path(vault_root)
    candidates = [
        root / "01_RAW" / "CAPTURE",
        root / "01_RAW" / "capture",
        root / "01_RAW",
        root / "01 raw"
    ]
    for c in candidates:
        if c.exists() and c.is_dir():
            return c
    return None


def get_process_dirs(vault_root):
    """Find available working process directory."""
    root = Path(vault_root)
    candidates = [
        root / "01_RAW" / "PROCESS",
        root / "01_RAW" / "process",
        root / "01 raw" / "networking"
    ]
    for c in candidates:
        if c.exists() and c.is_dir():
            return c
    return None


def scan_capture(vault_root):
    """Scan all raw capture files."""
    raw_dir = get_raw_dirs(vault_root)
    if not raw_dir:
        return []
    
    files = []
    for f in raw_dir.rglob("*.md"):
        if f.name.lower() in [".gitkeep", "readme.md"]:
            continue
        # If inside process or networking parts, ignore
        if "detailed-study-notes" in f.name.lower() or "study-notes" in f.name.lower():
            continue
        files.append(f)
    return sorted(files, key=lambda x: x.name.lower())


def scan_process(vault_root):
    """Scan all active transformation and draft files."""
    process_dir = get_process_dirs(vault_root)
    if not process_dir:
        return []
    
    files = []
    for f in process_dir.rglob("*.md"):
        if f.name.lower() in [".gitkeep", "readme.md"]:
            continue
        files.append(f)
    return sorted(files, key=lambda x: x.name.lower())


def scan_new_knowledge(vault_root):
    """Scan study notes in 02_NEW-KNOWLEDGE and extract downstream atomic candidates."""
    root = Path(vault_root)
    nk_dirs = [root / "02_NEW-KNOWLEDGE", root / "02 active-learning"]
    
    study_notes = []
    candidate_map = []

    for nk_dir in nk_dirs:
        if not nk_dir.exists():
            continue
        for f in nk_dir.rglob("*.md"):
            if f.name.lower() in [".gitkeep", "readme.md"]:
                continue
            study_notes.append(f)
            try:
                content = f.read_text(encoding="utf-8")
                # Multiple patterns for atomic candidates
                matches = re.findall(r"(?:-\s*\[\[(?:NODES/)?([^\]|]+)(?:\|[^\]]+)?\]\]|-\s*\*Atomic Concept Links?\*:\s*\[\[(?:NODES/)?([^\]|]+))", content)
                cleaned_matches = []
                for m in matches:
                    node_name = m[0] if m[0] else m[1]
                    if node_name and not node_name.startswith("http"):
                        cleaned_matches.append(node_name.strip())
                
                # Check for explicit candidate sections
                if "Candidate" in content or "candidate" in content or cleaned_matches:
                    section_matches = re.findall(r"-\s*\[\[(?:NODES/)?([^\]]+)\]\]:\s*(.+)", content)
                    candidate_map.append({
                        "file": f,
                        "candidates": section_matches if section_matches else [(c, "Referenced downstream concept") for c in cleaned_matches]
                    })
            except Exception:
                pass
    return study_notes, candidate_map


def scan_nodes(vault_root):
    """Scan permanent flat atomic notes in NODES/."""
    nodes_dir = Path(vault_root) / "NODES"
    if not nodes_dir.exists():
        return []
    return sorted([f for f in nodes_dir.glob("*.md") if f.name.lower() not in [".gitkeep", "readme.md"]], key=lambda x: x.name.lower())


def scan_notes(vault_root):
    """Scan evergreen synthesis notes in NOTES/."""
    notes_dir = Path(vault_root) / "NOTES"
    if not notes_dir.exists():
        return []
    return sorted([f for f in notes_dir.glob("*.md") if f.name.lower() not in [".gitkeep", "readme.md"]], key=lambda x: x.name.lower())


def scan_mocs(vault_root):
    """Scan Maps of Content in 03_MOC/."""
    moc_dir = Path(vault_root) / "03_MOC"
    if not moc_dir.exists():
        return []
    return sorted([f for f in moc_dir.rglob("*.md") if f.name.lower() not in [".gitkeep", "readme.md", "_orphans.md"]], key=lambda x: x.name.lower())


def generate_pipeline_report(vault_root, captures, processes, study_notes, nk_candidates, nodes, synthesis_notes, mocs):
    """Generate comprehensive pipeline status report."""
    reports_dir = Path(vault_root) / ".antigravity" / "reports"
    reports_dir.mkdir(parents=True, exist_ok=True)
    report_path = reports_dir / "pipeline-status.md"

    total_pipeline_items = len(captures) + len(processes) + len(study_notes) + len(nodes) + len(synthesis_notes)

    lines = [
        "# Knowledge Pipeline Status Report\n\n",
        "## 📊 Pipeline Summary\n\n",
        f"- **Raw Captures Inbox (`01 raw/` / `01_RAW/`)**: {len(captures)}\n",
        f"- **Active Working Drafts (`PROCESS/`)**: {len(processes)}\n",
        f"- **Study Notes (`02_NEW-KNOWLEDGE/`)**: {len(study_notes)}\n",
        f"- **Study Notes with Candidate Atoms**: {len(nk_candidates)}\n",
        f"- **Evergreen Synthesis Notes (`NOTES/`)**: {len(synthesis_notes)}\n",
        f"- **Permanent Atomic Nodes (`NODES/`)**: {len(nodes)}\n",
        f"- **Maps of Content (`03_MOC/`)**: {len(mocs)}\n",
        f"- **Total Vault Knowledge Artifacts**: {total_pipeline_items}\n\n",
        "---\n\n",
        "## 🔄 1. Knowledge Lifecycle Stage Progression\n\n",
        "| Stage | Location | Item Count | Status |\n",
        "| :--- | :--- | :--- | :--- |\n",
        f"| **1. Raw Capture** | `01 raw/` | {len(captures)} | Ingestion queue |\n",
        f"| **2. Active Working Drafts** | Working Drafts | {len(processes)} | In transformation |\n",
        f"| **3. Active Learning & Study** | `02_NEW-KNOWLEDGE/` | {len(study_notes)} | Deep synthesis & study |\n",
        f"| **4. Evergreen Synthesis** | `NOTES/` | {len(synthesis_notes)} | Durable multi-concept notes |\n",
        f"| **5. Atomic Concept Graph** | `NODES/` | {len(nodes)} | Flat permanent concepts |\n",
        f"| **6. Navigation Layer** | `03_MOC/` | {len(mocs)} | Curated index maps |\n\n",
        "---\n\n",
        "## 📥 2. Raw Capture Inventory (Sample)\n\n"
    ]

    if captures:
        lines.append(f"Total captures: **{len(captures)}**\n\n")
        lines.append("| Filename | Category / Relative Path |\n| :--- | :--- |\n")
        for c in captures[:25]:
            rel = c.relative_to(Path(vault_root))
            lines.append(f"| `{c.name}` | `{rel}` |\n")
        if len(captures) > 25:
            lines.append(f"| *...and {len(captures) - 25} more raw capture files* | | \n")
    else:
        lines.append("*No raw captures in inbox.*\n")

    lines.append("\n---\n\n## ⚙️ 3. Active Working Drafts\n\n")
    if processes:
        lines.append("| Filename | Path |\n| :--- | :--- |\n")
        for p in processes[:20]:
            rel = p.relative_to(Path(vault_root))
            lines.append(f"| `{p.name}` | `{rel}` |\n")
        if len(processes) > 20:
            lines.append(f"| *...and {len(processes) - 20} more draft parts* | | \n")
    else:
        lines.append("*No working drafts currently in process.*\n")

    lines.append("\n---\n\n## 💡 4. Pending Downstream Atomization Candidates\n\n")
    active_candidates = [nk for nk in nk_candidates if nk["candidates"]]
    if active_candidates:
        lines.append(f"Found **{len(active_candidates)}** study notes with downstream candidate atoms:\n\n")
        for nk in active_candidates[:15]:
            lines.append(f"### `02_NEW-KNOWLEDGE/{nk['file'].name}`\n")
            lines.append(f"Found {len(nk['candidates'])} atomic candidate(s):\n")
            for c_slug, c_desc in nk['candidates'][:8]:
                lines.append(f"- `[[NODES/{c_slug}]]`: {c_desc}\n")
            if len(nk['candidates']) > 8:
                lines.append(f"- *...and {len(nk['candidates']) - 8} more candidates*\n")
            lines.append("\n")
    else:
        lines.append("*No pending atomic candidates found in study notes.*\n")

    lines.append("\n---\n\n## 🗺️ 5. MOC Navigation Layer Overview\n\n")
    lines.append("| Map of Content | Filename |\n| :--- | :--- |\n")
    for m in mocs:
        lines.append(f"| `[[03_MOC/{m.name}\\|{m.stem}]]` | `{m.name}` |\n")

    lines.append("\n---\n*Report auto-generated by `knowledge_pipeline.py`*\n")

    report_path.write_text("".join(lines), encoding="utf-8")
    return report_path


def main():
    vault_root = get_vault_root()
    print("=" * 65)
    print("NexusDB Knowledge Pipeline Status & Lifecycle Check")
    print("=" * 65)

    captures = scan_capture(vault_root)
    processes = scan_process(vault_root)
    study_notes, nk_candidates = scan_new_knowledge(vault_root)
    nodes = scan_nodes(vault_root)
    synthesis_notes = scan_notes(vault_root)
    mocs = scan_mocs(vault_root)

    report_path = generate_pipeline_report(
        vault_root, captures, processes, study_notes, nk_candidates, nodes, synthesis_notes, mocs
    )

    print(f"[RAW CAPTURES]    Inbox captures:       {len(captures)}")
    print(f"[PROCESS]         Active working drafts:{len(processes)}")
    print(f"[NEW-KNOWLEDGE]   Study notes:          {len(study_notes)}")
    print(f"[ATOM CANDIDATES] Notes w/ candidates:  {len(nk_candidates)}")
    print(f"[SYNTHESIS]       NOTES synthesis:      {len(synthesis_notes)}")
    print(f"[NODES]           Atomic concept nodes: {len(nodes)}")
    print(f"[03_MOC]          Navigation maps:      {len(mocs)}")
    print("-" * 65)
    print(f"Pipeline status report updated: {report_path}")
    print("=" * 65)


if __name__ == "__main__":
    main()

