# Folder: .antigravity/schemas

## File: schemas\atomic-note.schema.json

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "NexusDB Atomic Note Schema",
  "type": "object",
  "allOf": [
    { "$ref": "frontmatter.schema.json" },
    {
      "properties": {
        "type": {
          "type": "string",
          "enum": ["atomic-note"]
        }
      }
    }
  ],
  "if": {
    "properties": { "schema_version": { "const": 4 } },
    "required": ["schema_version"]
  },
  "then": {
    "properties": {
      "owner_moc": {
        "type": "string",
        "minLength": 1
      }
    },
    "required": ["owner_moc"]
  }
}
```

---

## File: schemas\daily-note.schema.json

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "NexusDB Daily Log Schema",
  "type": "object",
  "allOf": [
    { "$ref": "frontmatter.schema.json" },
    {
      "properties": {
        "type": {
          "type": "string",
          "enum": ["log"]
        },
        "status": {
          "type": "string",
          "enum": ["maintained", "processed", "archived"]
        }
      }
    }
  ]
}
```

---

## File: schemas\decision-context.schema.json

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "decision-context.schema.json",
  "title": "NexusDB Decision Context Schema",
  "description": "Schema for the optional decision_context frontmatter block",
  "type": "object",
  "properties": {
    "why_created": {
      "type": ["string", "null"],
      "description": "One sentence explaining the trigger for this note's creation"
    },
    "decision": {
      "type": ["string", "null"],
      "description": "Key curation or scoping decision made about this note"
    },
    "assumptions": {
      "type": "array",
      "items": { "type": "string" },
      "description": "Beliefs assumed to be true at creation time"
    },
    "tradeoffs": {
      "type": "array",
      "items": { "type": "string" },
      "description": "What was deliberately omitted for atomicity or clarity"
    },
    "importance": {
      "type": ["string", "null"],
      "enum": ["low", "normal", "high", "critical", null],
      "description": "How important this note is. Default: normal"
    },
    "context": {
      "type": ["string", "null"],
      "description": "Situational context at the time of creation"
    },
    "future_work": {
      "type": ["string", "null"],
      "description": "What would improve or complete this note"
    }
  },
  "additionalProperties": false
}
```

---

## File: schemas\frontmatter.schema.json

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "NexusDB Frontmatter Schema",
  "description": "Validates all note frontmatter. Schema version 3 and 4 are both accepted.",
  "type": "object",
  "if": {
    "properties": { "schema_version": { "const": 4 } },
    "required": ["schema_version"]
  },
  "then": {
    "properties": {
      "tags": {
        "maxItems": 5
      }
    },
    "required": [
      "id",
      "title",
      "type",
      "status",
      "domain",
      "created",
      "updated",
      "confidence",
      "version",
      "aliases",
      "tags",
      "owner_moc",
      "sources",
      "related",
      "schema_version"
    ]
  },
  "else": {
    "required": [
      "type"
    ]
  },
  "properties": {
    "id": {
      "type": "string",
      "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[45][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$"
    },
    "concept_id": {
      "type": ["string", "null"],
      "pattern": "^[a-z0-9]+(-[a-z0-9]+)*-v[0-9]+(-.+)?$",
      "description": "Immutable human-readable slug. Set at creation and never changed."
    },
    "title": {
      "type": "string",
      "minLength": 1
    },
    "type": {
      "type": "string",
      "enum": [
        "raw-source", "knowledge-document", "evergreen-note", "atomic-note", "moc", "governance-rule", "log",
        "concept", "fact", "glossary", "example", "quote", "method", "biography", "framework",
        "principle", "person", "source", "book", "mega-source"
      ]
    },
    "status": {
      "type": "string",
      "enum": [
        "incubating",
        "captured",
        "processed",
        "learning",
        "verified",
        "evergreen",
        "canonical",
        "maintained",
        "archived",
        "atomic",
        "linked",
        "curated",
        "active"
      ],
      "description": "8-stage maturity model. atomic/linked/curated/active are legacy values still accepted."
    },
    "domain": {
      "type": "string",
      "enum": ["ai", "ml", "llm", "psychology", "productivity", "philosophy", "business", "study", "research", "writing", "tools", "habits", "strategy", "leadership", "self-improvement", "dsa", "engineering", "manufacturing", "innovation", "risk", "general"]
    },
    "source_type": {
      "type": ["string", "null"],
      "enum": ["book", "article", "paper", "youtube", "podcast", "web-clip", "transcript", "course", "interview", "dataset", "original-observation", "misc", null]
    },
    "created": {
      "type": "string",
      "pattern": "^\\d{4}-\\d{2}-\\d{2}$"
    },
    "updated": {
      "type": "string",
      "pattern": "^\\d{4}-\\d{2}-\\d{2}$"
    },
    "review": {
      "type": ["string", "null"],
      "pattern": "^(\\d{4}-\\d{2}-\\d{2})?$"
    },
    "last_verified": {
      "type": ["string", "null"],
      "pattern": "^(\\d{4}-\\d{2}-\\d{2})?$",
      "description": "Date when claims were last verified against source. Human-set only."
    },
    "confidence": {
      "type": "integer",
      "minimum": 0,
      "maximum": 100
    },
    "version": {
      "type": ["integer", "string"],
      "minimum": 1
    },
    "verification_interval": {
      "type": ["integer", "null"],
      "minimum": 1,
      "description": "Days between required verifications. null = no decay tracking."
    },
    "stale_after": {
      "type": ["string", "null"],
      "pattern": "^(\\d{4}-\\d{2}-\\d{2})?$",
      "description": "Computed by decay_scheduler.py. Do not edit manually."
    },
    "review_priority": {
      "type": ["string", "null"],
      "enum": ["low", "normal", "high", "critical", null]
    },
    "confidence_decay": {
      "type": ["integer", "null"],
      "minimum": 0,
      "maximum": 50,
      "description": "Points lost per 365 overdue days. Applied in reports only."
    },
    "aliases": {
      "type": "array",
      "items": { "type": "string" }
    },
    "tags": {
      "type": "array",
      "items": { "type": "string" }
    },
    "owner_moc": {
      "type": ["string", "null"]
    },
    "sources": {
      "type": "array",
      "items": {
        "anyOf": [
          { "type": "string" },
          {
            "type": "array",
            "items": {
              "anyOf": [
                { "type": "string" },
                {
                  "type": "array",
                  "items": { "type": "string" }
                }
              ]
            }
          }
        ]
      }
    },
    "related": {
      "type": "array",
      "description": "Legacy relation list. Treated as related_to with no confidence.",
      "items": {
        "anyOf": [
          { "type": "string" },
          {
            "type": "array",
            "items": {
              "anyOf": [
                { "type": "string" },
                {
                  "type": "array",
                  "items": { "type": "string" }
                }
              ]
            }
          }
        ]
      }
    },
    "relations": {
      "type": "array",
      "description": "Typed semantic relationships. Max 15 entries. See relations.schema.json for entry schema.",
      "maxItems": 15,
      "items": {
        "type": "object",
        "properties": {
          "target": { "type": "string", "minLength": 1 },
          "type": {
            "type": "string",
            "enum": ["supports", "contradicts", "depends_on", "implements", "extends", "generalizes", "specializes", "causes", "effect_of", "example_of", "instance_of", "part_of", "related_to", "compares_with", "prerequisite_for", "derived_from", "inspired_by", "references"]
          },
          "confidence": { "type": "integer", "minimum": 0, "maximum": 100 },
          "reason": { "type": "string" },
          "evidence": { "type": "string" },
          "source": { "type": "string" },
          "creation_method": { "type": "string", "enum": ["human", "ai-suggested", "ai-auto"] },
          "human_verified": { "type": "boolean" }
        },
        "required": ["target", "type"]
      }
    },
    "decision_context": {
      "type": ["object", "null"],
      "description": "Optional human-authored reasoning block. Never overwritten by automation.",
      "properties": {
        "why_created": { "type": ["string", "null"] },
        "decision": { "type": ["string", "null"] },
        "assumptions": { "type": "array", "items": { "type": "string" } },
        "tradeoffs": { "type": "array", "items": { "type": "string" } },
        "importance": { "type": ["string", "null"], "enum": ["low", "normal", "high", "critical", null] },
        "context": { "type": ["string", "null"] },
        "future_work": { "type": ["string", "null"] }
      }
    },
    "schema_version": {
      "type": "integer",
      "enum": [3, 4],
      "description": "Schema version. 3 = legacy (still accepted), 4 = current."
    }
  }
}
```

---

## File: schemas\moc.schema.json

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "NexusDB Map of Content Schema",
  "type": "object",
  "allOf": [
    { "$ref": "frontmatter.schema.json" },
    {
      "properties": {
        "type": {
          "type": "string",
          "enum": ["moc"]
        },
        "status": {
          "type": "string",
          "enum": ["active", "curated", "archived"]
        }
      }
    }
  ]
}
```

---

## File: schemas\relations.schema.json

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "relations.schema.json",
  "title": "NexusDB Relations Entry Schema",
  "description": "Schema for a single entry in the relations frontmatter list",
  "type": "object",
  "properties": {
    "target": {
      "type": "string",
      "minLength": 1,
      "description": "Canonical title or concept_id of the target note"
    },
    "type": {
      "type": "string",
      "enum": [
        "supports",
        "contradicts",
        "depends_on",
        "implements",
        "extends",
        "generalizes",
        "specializes",
        "causes",
        "effect_of",
        "example_of",
        "instance_of",
        "part_of",
        "related_to",
        "compares_with",
        "prerequisite_for",
        "derived_from",
        "inspired_by",
        "references"
      ],
      "description": "The semantic relationship type (one of 18 controlled vocabulary types)"
    },
    "confidence": {
      "type": "integer",
      "minimum": 0,
      "maximum": 100,
      "description": "Confidence in the relationship (0-100). Relationships with confidence < 80 are not created automatically."
    },
    "reason": {
      "type": "string",
      "description": "Brief explanation of why this relationship exists"
    },
    "evidence": {
      "type": "string",
      "description": "Optional: quote or section reference supporting the relationship"
    },
    "source": {
      "type": "string",
      "description": "Optional: slug or path of the source that implies this relationship"
    },
    "creation_method": {
      "type": "string",
      "enum": ["human", "ai-suggested", "ai-auto"],
      "description": "How this relationship was created"
    },
    "human_verified": {
      "type": "boolean",
      "description": "Whether a human has confirmed this relationship is correct"
    }
  },
  "required": ["target", "type"],
  "additionalProperties": false
}
```

---

## File: schemas\source.schema.json

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "NexusDB Source Schema",
  "type": "object",
  "allOf": [
    { "$ref": "frontmatter.schema.json" },
    {
      "properties": {
        "type": {
          "type": "string",
          "enum": ["raw-source"]
        },
        "status": {
          "type": "string",
          "enum": ["captured", "processed", "verified", "archived"]
        },
        "origin_path": {
          "type": "string"
        },
        "captured_at": {
          "type": "string",
          "pattern": "^\\d{4}-\\d{2}-\\d{2}$"
        },
        "processed_at": {
          "type": ["string", "null"],
          "pattern": "^(\\d{4}-\\d{2}-\\d{2})?$"
        },
        "ingested_at": {
          "type": ["string", "null"],
          "pattern": "^(\\d{4}-\\d{2}-\\d{2})?$"
        },
        "linked_notes": {
          "type": "array",
          "items": { "type": "string" }
        },
        "disposition": {
          "type": "string",
          "enum": ["pending", "ingested", "no_reusable_knowledge"]
        }
      },
      "required": ["origin_path", "captured_at", "disposition"]
    }
  ]
}
```

---

## File: schemas\tag.schema.json

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "NexusDB Tag Schema",
  "type": "array",
  "items": {
    "type": "string",
    "enum": [
      "beginner",
      "advanced",
      "comparison",
      "case-study",
      "implementation",
      "reference",
      "history",
      "decision",
      "example",
      "checklist",
      "open-question",
      "contrarian",
      "case_study",
      "open_question"
    ]
  }
}
```

---

