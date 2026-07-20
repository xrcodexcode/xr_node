---
id: 75db3ac1-fba2-4114-bb5b-0a470ea948d5
title: Python Object-Oriented Programming
type: atomic-note
status: evergreen
domain: tools
source_type: youtube
created: 2026-07-19
updated: 2026-07-19
review: 2026-10-19
confidence: 95
version: 1
aliases: [OOP, Object-Oriented Programming, Classes, Inheritance]
tags: []
owner_moc: Python for AI Beginner Course MOC
sources:
  - 01_RAW/SOURCE/python-for-ai-beginner-course.md
related: []
schema_version: 3
concept_id: python-object-oriented-programming-v1
last_verified: null
verification_interval: null
stale_after: null
review_priority: normal
confidence_decay: null
relations: []
---

# Python Object-Oriented Programming

## Definition
Object-Oriented Programming (OOP) in Python is a paradigm that bundles data attributes and execution functions together into single conceptual units called classes. An instance is an active object created from a class blueprint.

## Explanation
- **Class vs Instance**: A class defines the structure (attributes and methods) while an instance represents a specific, populated allocation of that structure.
- **Dunder Init (`__init__`)**: The constructor method that executes automatically upon class instantiation to bind initial data values.
- **Self Reference (`self`)**: A parameter passed as the first argument in class methods, representing the specific object instance. It tracks and modifies state local to that instance.
- **Inheritance**: Allows a child class to inherit and extend the capabilities of a parent class.

OOP is preferred over functional programming when code must maintain state across operations (such as managing database connections or tracking application configuration parameters).

## Related
- [[python-programming-language|Python Programming Language]]
- [[python-variable-scope|Python Variable Scope]]

## Source
Derived from the video transcript [[python-for-ai-beginner-course|Python for AI Beginner Course]].
