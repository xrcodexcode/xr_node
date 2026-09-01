---
id: "0466916d-a6b1-4229-acc9-c84374a8dcf1"
title: "Cron Job Automation Plan"
type: "project"
status: "processed"
created: "2026-09-01T12:05:00Z"
modified: "2026-09-01T12:05:00Z"
review: "2026-12-01"
confidence: 100
tags: ["implementation", "checklist"]
aliases: []
owner_moc: "study-moc"
source:
  title: "Assistant‑generated plan"
  author: "Claude Code"
  url: ""
  published: "2026-09-01"
  accessed: "2026-09-01"
  locator: "Generated plan for cron‑job automation"
  captured_at: "2026-09-01T12:05:00Z"
  content_hash: ""
---

# Cron Job Automation Plan

**Goal:** Enable repeatable, time‑driven automation inside the NexusDB vault (e.g., health checks, link validation, backups) using Claude Code’s built‑in `CronCreate` facility.

## Target Layers
- **Vault‑level scripts** (`.claude/automations/cron‑jobs/…`) – store the command or agent script that will be run.
- **Cron scheduler** (Claude Code runtime) – creates the recurring job.
- **Notification / monitoring** (`PushNotification`, `Monitor`) – informs you when a job finishes or fails.

## Assumptions & Risks
| Assumption | Risk |
|-----------|------|
| Scripts are pure / side‑effect‑free (or explicitly approved) | Job loss after session ends – need a bootstrap step to recreate jobs. |
| Cron jobs are session‑only (expire after 7 days) | Long‑running tasks may exceed the 1 h timeout – split or use `persistent:true`. |
| All writes stay inside the vault | Unintended writes – enforce dry‑run mode and explicit approvals. |

## Step‑by‑Step Implementation

| # | Action | Details |
|---|--------|---------|
| 1 | **Catalog desired recurrent tasks** | List tasks such as daily health report, hourly broken‑link scan, weekly backup of `01_RAW/PROCESS`. |
| 2 | **Create scripts directory** | `mkdir -Force .claude/automations/cron‑jobs` (PowerShell). |
| 3 | **Write prototype script for each task** | Use `.ps1` or `.js` files that output a markdown report in `.claude/reports/…`. Include a `--dry` flag for safe testing. |
| 4 | **Test scripts manually** | Run each script once to verify output and that no unwanted modifications occur. |
| 5 | **Optional wrapper agent** | If a task needs Claude‑Code reasoning (e.g., summarising a health log), write a small agent script and store it under `.claude/automations/cron‑jobs/`. |
| 6 | **Schedule the cron job** | Example (daily at 02:30 am):
```json
{ "cron": "30 2 * * *", "description": "Daily vault‑health report", "prompt": "powershell -File ./.claude/automations/cron‑jobs/daily‑health.ps1", "persistent": false }
``` |
| 7 | **Add a notification** | Use `PushNotification` (or a `Monitor`) to alert on failures, e.g.:
```json
{ "message": "⚠️ Daily health job failed", "status": "error" }
``` |
| 8 | **Document the jobs** | Create a MOC (`03_MOC/automation‑moc.md`) that lists all cron jobs, their purpose, schedule, and script locations. |
| 9 | **Bootstrap re‑creation** (optional) | Because cron jobs disappear after a session, add a `bootstrap‑cron‑jobs.ps1` that re‑creates all `CronCreate` calls. Run it when starting a new Claude Code session. |
|10| **Review & approve** | Present the set of scripts, cron expressions, and notification policies for final sign‑off before any job is created. |

## Example: Daily Vault‑Health Report
```powershell
# .claude/automations/cron‑jobs/daily‑health.ps1
$date = Get-Date -Format "yyyy-MM-dd_HH-mm-ss"
$log = & claude run .claude/agents/vault-health-report.md
$out = ".claude/reports/vault‑health-$date.md"
Set-Content -Path $out -Value $log
Write-Host "✅ Vault health report written to $out"
```
CronCreate call:
```json
{ "cron": "30 2 * * *", "description": "Generate daily vault‑health report", "prompt": "powershell -File ./.claude/automations/cron‑jobs/daily‑health.ps1", "persistent": false }
```

---

**Next actions**
1. Confirm which recurring tasks you want to automate.  
2. Approve the sample script & cron expression for the daily health report (or suggest a different schedule).  
3. After approval I will create the script files, register the Cron jobs, and set up notifications.

---

*Prepared by the Vault Health Review Agent (automated)*