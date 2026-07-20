#!/usr/bin/env python3
"""Relationship detection module to classify relations between notes."""

from __future__ import annotations
import os
import re
import json
from typing import Any
from .scanner import Note

SUPPORTED_RELATIONSHIPS = {
    "supports", "contradicts", "extends", "example_of", "part_of",
    "depends_on", "similar_to", "opposite_of", "application_of",
    "historical_predecessor", "historical_successor", "analogy",
    "generalizes", "specializes", "prerequisite", "derived_from",
    "inspired_by", "causes", "effect_of", "implements", "uses",
    "improves", "replaces", "tradeoff", "comparison", "warning",
    "best_practice", "anti_pattern", "common_mistake"
}

class RelationshipDetector:
    def detect(self, source: Note, target: Note, similarity_score: float) -> dict[str, Any]:
        """Base method for relationship detection."""
        raise NotImplementedError

class HeuristicRelationshipDetector(RelationshipDetector):
    def detect(self, source: Note, target: Note, similarity_score: float) -> dict[str, Any]:
        """Heuristic-based relationship classifier using text analysis and metadata.

        Instead of returning on the first matching branch (which would let a
        weak signal shadow a strong one), every rule is scored by counting how
        many of its trigger-keywords appear in the source text.  The rule with
        the highest count wins; ties are broken by declaration order, which
        still preserves the original priority intent.
        """
        source_content = f"{source.title} {source.body}".lower()
        target_title_lower = target.title.lower()

        # Each candidate is (score, rel_type, reason_template)
        # score = number of matching keywords * (2 if target title also appears, else 1)
        candidates: list[tuple[int, str, str]] = []

        def _title_boost(base_count: int) -> int:
            """Double the score when the target title is explicitly mentioned."""
            return base_count * 2 if target_title_lower in source_content else base_count

        # Rule 1 — example_of
        example_kws = ["example"]
        ex_hits = sum(1 for w in example_kws if w in source_content or w in source.tags or w in source.title.lower())
        if ex_hits:
            candidates.append((
                _title_boost(ex_hits),
                "example_of",
                f"Note '{source.title}' functions as an illustrative example of '{target.title}'."
            ))

        # Rule 2 — depends_on
        dep_kws = ["depends", "requires", "prerequisite", "must have", "need"]
        dep_hits = sum(1 for w in dep_kws if w in source_content)
        if dep_hits:
            candidates.append((
                _title_boost(dep_hits),
                "depends_on",
                f"Note '{source.title}' indicates a functional dependency on '{target.title}'."
            ))

        # Rule 3 — comparison / tradeoff
        cmp_kws = ["versus", "vs", "tradeoff", "comparison", "alternative"]
        cmp_hits = sum(1 for w in cmp_kws if w in source_content)
        if cmp_hits:
            candidates.append((
                _title_boost(cmp_hits),
                "comparison",
                f"Note '{source.title}' discusses comparisons or tradeoffs with '{target.title}'."
            ))

        # Rule 4 — best_practice
        bp_kws = ["best practice", "best-practice"]
        bp_hits = sum(1 for w in bp_kws if w in source_content or w in source.tags)
        if bp_hits:
            candidates.append((
                _title_boost(bp_hits),
                "best_practice",
                f"Note '{source.title}' presents a best practice application of '{target.title}'."
            ))

        # Rule 5 — anti_pattern
        ap_kws = ["anti-pattern", "antipattern"]
        ap_hits = sum(1 for w in ap_kws if w in source_content or w in source.tags)
        if ap_hits:
            candidates.append((
                _title_boost(ap_hits),
                "anti_pattern",
                f"Note '{source.title}' describes an anti-pattern or common pitfall related to '{target.title}'."
            ))

        # Rule 6 — contradicts
        con_kws = ["contradict", "opposite", "contrasts", "against", "clash"]
        con_hits = sum(1 for w in con_kws if w in source_content)
        if con_hits:
            candidates.append((
                _title_boost(con_hits),
                "contradicts",
                f"Note '{source.title}' discusses concepts that contradict or contrast with '{target.title}'."
            ))

        # If any rule matched, return the one with the highest score
        if candidates:
            candidates.sort(key=lambda c: c[0], reverse=True)
            _, rel_type, reason = candidates[0]
            return {"relationship": rel_type, "confidence": similarity_score, "reason": reason}

        # Fallback: structural title overlap or generic similarity
        reason = f"High conceptual similarity score of {int(similarity_score * 100)}%."
        rel_type = "similar_to"

        if target_title_lower in source.title.lower():
            rel_type = "specializes"
            reason = f"Note '{source.title}' is a specialized sub-topic of '{target.title}'."
        elif source.title.lower() in target_title_lower:
            rel_type = "generalizes"
            reason = f"Note '{source.title}' generalizes or encompasses the concept of '{target.title}'."
        elif similarity_score > 0.85:
            rel_type = "extends"
            reason = f"Note '{source.title}' extends the principles discussed in '{target.title}'."

        return {"relationship": rel_type, "confidence": similarity_score, "reason": reason}

class LLMRelationshipDetector(RelationshipDetector):
    def __init__(self, client: Any = None):
        self.client = client
        self.heuristic_fallback = HeuristicRelationshipDetector()

    def detect(self, source: Note, target: Note, similarity_score: float) -> dict[str, Any]:
        """LLM-assisted relationship detector using Gemini."""
        if not self.client:
            return self.heuristic_fallback.detect(source, target, similarity_score)
            
        prompt = f"""
Analyze the relationship between two atomic notes in a personal knowledge vault:

Note A (Source):
Title: {source.title}
Tags: {', '.join(source.tags)}
Body:
{source.body[:2000]}

Note B (Target):
Title: {target.title}
Tags: {', '.join(target.tags)}
Body:
{target.body[:2000]}

Determine the relationship type between Note A and Note B. Choose the most appropriate relationship from this list:
{', '.join(sorted(list(SUPPORTED_RELATIONSHIPS)))}

Respond strictly in JSON format with these keys:
- "relationship": The chosen relationship type string.
- "confidence": A float between 0.0 and 1.0 representing your confidence in this relationship.
- "reason": A short sentence explaining why they are related (e.g. "Both argue against optimizing unnecessary work.").

JSON Response:
"""
        try:
            # Call Gemini model
            response = self.client.models.generate_content(
                model="gemini-2.5-flash",
                contents=prompt,
                config={
                    "response_mime_type": "application/json",
                }
            )
            data = json.loads(response.text.strip())
            
            # Validate response
            rel = data.get("relationship", "similar_to").strip().lower()
            if rel not in SUPPORTED_RELATIONSHIPS:
                rel = "similar_to"
                
            conf = float(data.get("confidence", similarity_score))
            reason = data.get("reason", f"Discovered relationship of type {rel}.")
            
            return {
                "relationship": rel,
                "confidence": conf,
                "reason": reason
            }
        except Exception as e:
            print(f"[SemanticLinker] LLM relationship detection failed: {e}. Falling back to heuristics.")
            return self.heuristic_fallback.detect(source, target, similarity_score)
