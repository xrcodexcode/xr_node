---
id: 9f9c0b89-49c7-4076-830a-5ad215e8725b
title: Python Variable Scope
type: atomic-note
status: evergreen
domain: tools
source_type: youtube
created: 2026-07-19
updated: 2026-07-19
review: 2026-10-19
confidence: 95
version: 1
aliases: [Variable Scope]
tags: []
owner_moc: Python for AI Beginner Course MOC
sources:
  - 01_RAW/SOURCE/python-for-ai-beginner-course.md
related: []
schema_version: 3
concept_id: python-variable-scope-v1
last_verified: null
verification_interval: null
stale_after: null
review_priority: normal
confidence_decay: null
relations: []
---

# Python Variable Scope

## Definition
Variable scope in Python defines the accessibility namespace of variables based on where they are declared. Python resolves names using the LEGB hierarchy (Local, Enclosing, Global, Built-in).

## Explanation
- **Local Scope**: Variables initialized inside a function block are local to that function. They are allocated when the function is called and deallocated on return, making them completely inaccessible from the outside.
- **Global Scope**: Variables initialized at the module root level. They can be read inside functions, but mutating them requires either passing/returning values (best practice) or using the `global` keyword.

When a function executes, Python prioritizes local scope definitions. If a local variable shares the same name as a global variable, the local variable overrides (shadows) the global one within the function context.

## Related
- [[python-programming-language|Python Programming Language]]
- [[python-object-oriented-programming|Python Object-Oriented Programming]]

## Source
Derived from the video transcript [[python-for-ai-beginner-course|Python for AI Beginner Course]].
