---
id: 793d64e0-29d6-49c0-8212-86d9c1094eae
title: Cheatsheet — Python for AI Beginner Course
type: atomic-note
status: evergreen
domain: tools
source_type: youtube
created: 2026-07-19
updated: 2026-07-19
review: 2026-10-19
confidence: 95
version: 1
aliases: []
tags: []
owner_moc: Python for AI Beginner Course MOC
sources:
  - 01_RAW/SOURCE/python-for-ai-beginner-course.md
related: []
schema_version: 3
concept_id: python-for-ai-beginner-course-cheatsheet-v1
last_verified: null
verification_interval: null
stale_after: null
review_priority: normal
confidence_decay: null
relations: []
---

# Cheatsheet — Python for AI Beginner Course

## Core Idea
This cheatsheet aggregates code blocks, configurations, syntax patterns, and command line tools covered in Dave Ebbelaar's *Python for AI - Full Beginner Course*, serving as a quick reference guide.

## Key Code Snippets & Operations

### 📦 Virtual Environment Commands
```powershell
# Create a venv named '.venv'
python -m venv .venv

# Activate venv (Windows)
.venv\Scripts\Activate.ps1

# Activate venv (Mac/Linux)
source .venv/bin/activate

# Install requirements
pip install -r requirements.txt

# Export requirements
pip freeze > requirements.txt
```

### 📋 List vs Dictionary vs Tuple vs Set Operations
```python
# --- List (Mutable, Ordered, Duplicates Allowed) ---
fruits = ["apple", "banana"]
fruits.append("orange")
fruits.insert(1, "cherry")  # Insert at index 1
print(fruits[0])            # "apple"

# --- Dictionary (Mutable, Key-Value Lookups) ---
person = {"name": "Alice", "age": 25}
person["city"] = "New York" # Add key-value
person["name"] = "Dave"      # Overwrite value
del person["city"]           # Remove key
print(person["age"])         # 25

# --- Tuple (Immutable, Constant Records) ---
point = (3, 5)
print(point[0])              # 3
# point[0] = 4              # Raises TypeError (Immutable!)

# --- Set (Mutable, Unique Values Only) ---
scores = {90, 85, 90, 80}
print(scores)                # {80, 85, 90} (Duplicates removed)
```

### ⚙️ Functions & Scope
```python
# Function with default parameters
def calculate_price(price, discount=10):
    tax_rate = 0.08                     # Local variable
    final_price = price - discount
    return final_price * (1 + tax_rate)

# Calling with keyword arguments
total = calculate_price(price=100, discount=15)
```

### 🧱 Object-Oriented Programming (OOP)
```python
class APIConfig:
    def __init__(self, api_key, model="gpt-4o"):
        self.api_key = api_key           # Binds data attribute
        self.model = model
    
    def generate_headers(self):          # Class method
        return {"Authorization": f"Bearer {self.api_key}"}

# Creating instances
dev_config = APIConfig(api_key="sk-dev123")
print(dev_config.model)                  # "gpt-4o"
```

### 🛡️ Error Handling
```python
try:
    with open("data.csv", "r") as f:
        data = f.read()
except FileNotFoundError:
    print("Warning: data.csv not found. Initializing empty dataset.")
    data = ""
```

### ⚡ Modern Tooling: Ruff & Uv
```powershell
# --- Astral Uv (Fast Package Manager) ---
# Initialize uv project
uv init

# Add dependencies (updates pyproject.toml)
uv add pandas openai matplotlib

# Sync environment
uv sync

# --- Ruff (Fast Linter and Formatter) ---
# Lint code files
ruff check

# Fix auto-fixable lint errors
ruff check --fix

# Format files
ruff format
```

## Links
- [[python-for-ai-beginner-course-moc|Python for AI Beginner Course MOC]]
- [[yt-moc|YouTube MOC]]
- [[python-programming-language|Python Programming Language]]
- [[python-virtual-environment|Python Virtual Environment]]
- [[python-object-oriented-programming|Python Object-Oriented Programming]]
- [[uv-package-manager|Uv Package Manager]]
