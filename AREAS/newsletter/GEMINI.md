---
title: GEMINI.md — Newsletter Operating Guide
type: governance-rule
status: active
version: 1.0.0
last_reviewed: 2026-08-04
approved_by: vault-owner
change_reason: "Initialized Area Operating Guide for newsletter workspace."
---

# GEMINI.md — AI Fundamentals Newsletter Operating Guide

This document defines the operating rules, quality gates, and authority boundaries for Gemini and Antigravity CLI agents working inside the **AI Fundamentals Newsletter** workspace (`nexusdb/AREAS/newsletter`).

## 1. Scope & Authority
- Inherits vault-wide rules from `nexusdb/GEMINI.md` and `.antigravity/rules/`.
- Local workspace focus: content creation, image organization, editorial consistency, and static web generation for the newsletter.

## 2. Invariants & Rules
1. **Never delete published issues** without explicit user consent.
2. **Word Count Ceiling**: Keep newsletter issues under **1,000 words**.
3. **Asset Organization**: Store issue visuals inside `assets/issue#N/` named sequentially (`1.jpg`, `2.jpg`, etc.).
4. **Tone & Accessibility**: Writing must remain beginner-friendly, conversational, and jargon-free.
5. **Traceability**: Link issues properly in `README.md` and maintain relative links (`./assets/issue%23N/...`).

## 3. Workflow Checklist for New Issues
1. Create `issue#N.md` following the 8-part beginner newsletter template.
2. Store images under `assets/issue#N/`.
3. Verify prose word count is under 1,000 words.
4. Update `README.md` issue matrix.
5. (When publishing to site) Build `site/issue-N.html`, update `site/index.html` and `site/rss.xml`.
