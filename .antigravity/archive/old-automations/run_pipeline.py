#!/usr/bin/env python3
"""
run_pipeline.py — Master execution pipeline runner for NexusDB.

Executes vault automation tasks in strict sequential order to prevent concurrent
write contentions:
  1. Capture & Lifecycle Validation
  2. Tag & Structural Validation
  3. Duplicate Detection
  4. Metadata Migration (to schema_version 4)
  5. Semantic Linking
  6. Promotion Rubric Check
  7. Map of Content Curation Analysis
  8. MOC & Health Report Generation
  9. Knowledge Decay Scheduling (review_priority + stale_after)
  10. Health Dashboard (15 metrics)
  11. Graph Analytics (centrality, hubs, gaps)

Logs metrics, status, and duration for each stage and outputs a unified report.
"""
from __future__ import annotations

import argparse
from datetime import datetime, timezone
import os
import pathlib
import subprocess
import sys
import time

# Local imports
from vault_paths import get_vault_root

# Force UTF-8 encoding for stdout on Windows
if sys.platform.startswith('win'):
    import io
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')


def run_stage(name: str, script_name: str, args_list: list[str], cwd: pathlib.Path) -> dict:
    script_path = cwd / script_name
    if not script_path.exists():
        return {
            "name": name,
            "status": "SKIPPED",
            "reason": f"Script not found: {script_name}",
            "duration": 0.0,
            "stdout": "",
            "stderr": ""
        }

    print(f"\n>>> Running Stage: {name} ({script_name})...")
    start_time = time.time()
    
    cmd = [sys.executable, str(script_path)] + args_list
    env = os.environ.copy()
    env["VAULT_ROOT"] = str(cwd.parent.parent)  # set vault root path env

    try:
        res = subprocess.run(
            cmd,
            capture_output=True,
            text=True,
            encoding="utf-8",
            errors="replace",
            cwd=str(cwd),
            env=env
        )
        duration = time.time() - start_time
        status = "SUCCESS" if res.returncode == 0 else "FAILED"
        print(f"Stage completed in {duration:.2f}s with status: {status}")
        return {
            "name": name,
            "status": status,
            "returncode": res.returncode,
            "duration": duration,
            "stdout": res.stdout,
            "stderr": res.stderr
        }
    except Exception as e:
        duration = time.time() - start_time
        print(f"Stage crashed: {e}")
        return {
            "name": name,
            "status": "CRASHED",
            "reason": str(e),
            "duration": duration,
            "stdout": "",
            "stderr": str(e)
        }


def main() -> None:
    parser = argparse.ArgumentParser(description="Run the NexusDB sequential automation pipeline.")
    parser.add_argument("--vault", help="Path to the vault root")
    parser.add_argument("--dry-run-migration", action="store_true", help="Do not apply metadata migrations (dry-run)")
    args = parser.parse_args()

    vault_root = pathlib.Path(args.vault).resolve() if args.vault else pathlib.Path(get_vault_root())
    automations_dir = vault_root / ".antigravity" / "automations"

    if not automations_dir.exists():
        print(f"Error: Automations directory not found at {automations_dir}", file=sys.stderr)
        sys.exit(1)

    pipeline_start = time.time()
    start_dt = datetime.now(timezone.utc)
    print(f"=== Starting NexusDB Sequential Automation Pipeline ===")
    print(f"Timestamp: {start_dt.isoformat()}")
    print(f"Vault: {vault_root}")

    # Stage list definition
    stages = [
        # 1. Capture & Lifecycle
        ("Capture & Lifecycle", "raw_lifecycle.py", ["--source-root", "01_RAW/source"]),
        # 2. Validation
        ("Tag Validation", "validate_tags.py", []),
        ("Vault Structural Check", "check_vault.py", []),
        # 3. Deduplication
        ("Duplicate Detection", "duplicate_detector.py", []),
        # 4. Ingestion / Migration
        ("Metadata Migration", "migrate_metadata.py", [] if args.dry_run_migration else ["--apply"]),
        # 5. Semantic Linking
        ("Semantic Linking", "semantic_linker.py", []),
        # 6. Promotion
        ("Promotion Check", "promotion_enforcer.py", []),
        # 7. MOC Curation Check
        ("MOC Curation", "moc_curator.py", []),
        # 8. MOC & Health Reports Generation
        ("MOC & Health Reports", "generate_mocs.py", []),
        # 9. Knowledge Decay Scheduling (review_priority, stale_after) — read-only report
        ("Decay Scheduling", "decay_scheduler.py", []),
        # 10. Health Dashboard (15 metrics)
        ("Health Dashboard", "health_dashboard.py", []),
        # 11. Graph Analytics (centrality, hubs, gaps, velocity)
        ("Graph Analytics", "graph_analytics.py", []),
    ]

    # Special logic for raw_lifecycle.py: it requires a source file path, but if none is specified, we skip it
    # We will adjust args for it if needed
    stages_results = []
    
    # Check if there are raw capture files
    capture_dir = vault_root / "01_RAW" / "capture"
    capture_files = list(capture_dir.glob("*.md")) if capture_dir.exists() else []
    
    for name, script_name, extra_args in stages:
        stage_args = extra_args.copy()
        
        # Skip raw_lifecycle if there is no file in Capture inbox
        if script_name == "raw_lifecycle.py":
            if not capture_files:
                print("\n>>> Skipping Stage: Capture & Lifecycle (No files found in 01_RAW/capture/)")
                stages_results.append({
                    "name": name,
                    "status": "SKIPPED",
                    "reason": "No files in capture inbox",
                    "duration": 0.0,
                    "stdout": "",
                    "stderr": ""
                })
                continue
            else:
                # Process the first capture file as a demonstration
                stage_args = [str(capture_files[0])] + stage_args

        res = run_stage(name, script_name, stage_args, automations_dir)
        stages_results.append(res)

    pipeline_duration = time.time() - pipeline_start
    end_dt = datetime.now(timezone.utc)

    # Rebuild a beautiful Pipeline Report
    report_lines = [
        "# NexusDB Pipeline Execution Report\n\n",
        f"**Date:** {start_dt.strftime('%Y-%m-%d %H:%M UTC')}\n",
        f"**Duration:** {pipeline_duration:.2f} seconds\n",
        f"**Status:** {'SUCCESS' if all(r['status'] in ['SUCCESS', 'SKIPPED'] for r in stages_results) else 'FAILED'}\n\n",
        "## Stage Execution Summary\n\n",
        "| Stage Name | Script | Status | Duration | Notes |\n",
        "|---|---|---|---:|---|\n"
    ]

    for r in stages_results:
        notes = ""
        r_stdout = r.get("stdout") or ""
        r_stderr = r.get("stderr") or ""
        if r["status"] == "SKIPPED":
            notes = r.get("reason", "")
        elif r["status"] == "FAILED":
            notes = r_stderr.split("\n")[0][:80]
        elif r["status"] == "CRASHED":
            notes = r.get("reason", "")[:80]
        else:
            # Succesful runs, check if stdout has relevant summary
            stdout_lines = r_stdout.strip().split("\n")
            if stdout_lines:
                notes = stdout_lines[-1][:80]

        script_name = next((s[1] for s in stages if s[0] == r["name"]), "N/A")
        report_lines.append(f"| {r['name']} | `{script_name}` | {r['status']} | {r['duration']:.2f}s | {notes} |\n")

    report_lines.append("\n## Detail Logs\n\n")
    for r in stages_results:
        r_stdout = r.get("stdout") or ""
        r_stderr = r.get("stderr") or ""
        if r["status"] != "SKIPPED" and (r_stdout or r_stderr):
            report_lines.append(f"### {r['name']} Details\n")
            if r_stdout:
                report_lines.append("```\n" + r_stdout + "\n```\n")
            if r_stderr:
                report_lines.append("```\n" + r_stderr + "\n```\n")

    report_path = vault_root / ".antigravity" / "reports" / "pipeline_run.md"
    report_path.parent.mkdir(parents=True, exist_ok=True)
    report_path.write_text("".join(report_lines), encoding="utf-8")

    # Output Console Summary
    print(f"\n=== Pipeline Summary ===")
    print(f"Total Duration: {pipeline_duration:.2f}s")
    for r in stages_results:
        print(f" - {r['name']}: {r['status']} ({r['duration']:.2f}s)")
    print(f"Pipeline Report saved to {report_path}")


if __name__ == "__main__":
    main()
