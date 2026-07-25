---
id: 2c8d234a-195b-4899-8d8a-86c8d76a7e08
title: Python Error Handling And File Io
type: atomic-note
status: learning
domain: general
source_type: course
created: 2026-07-24
updated: 2026-07-24
review: 2026-08-24
confidence: 85
version: 1
aliases: []
tags: [implementation]
owner_moc: Python DSA ML Mastery MOC
sources: []
related: []
schema_version: 4
---

Robust error handling and file I/O are the backbone of reliable Machine Learning pipelines. In ML engineering, silent failures during a 10-hour training run or corrupted dataset reads can cost significant time and resources. Mastering Python's exception handling, context managers, and modern file operations (like `pathlib` and structured I/O) ensures your data ingestion, model checkpointing, and logging mechanisms are resilient, cross-platform, and production-ready.

## Exception Hierarchy

In Python, all exceptions must be instances of a class that derives from `BaseException`. Understanding the hierarchy helps you catch the right exceptions without accidentally masking critical system signals like `KeyboardInterrupt`.

> 🤖 **ML Connection**: When training models, you often want to catch `Exception` to log failures and perhaps retry, but you *never* want to catch `BaseException` or `KeyboardInterrupt` directly unless you're writing a custom signal handler for graceful shutdown (e.g., saving a checkpoint before stopping).

```python
import sys

# High-level overview of the hierarchy (Not exhaustive)
# BaseException
#  ├── SystemExit                  <- sys.exit()
#  ├── KeyboardInterrupt           <- Ctrl+C
#  ├── Exception                   <- Catch this for general app errors
#       ├── ArithmeticError
#       │    └── ZeroDivisionError
#       ├── LookupError
#       │    ├── IndexError
#       │    └── KeyError
#       ├── OSError                <- File IO errors (FileNotFoundError, etc)
#       └── ValueError             <- Bad arguments

def demonstrate_hierarchy():
    try:
        # Simulating a common ML error: mismatch in tensor shapes
        raise ValueError("Expected tensor of shape (32, 64), got (16, 64)")
    except Exception as e:
        # Exception catches ValueError because ValueError subclasses Exception
        print(f"Caught an Exception: {type(e).__name__} - {e}")
        # Output: Caught an Exception: ValueError - Expected tensor of shape (32, 64), got (16, 64)

demonstrate_hierarchy()
```

## Try/Except/Else/Finally

The full exception handling pattern includes `else` (runs if no exception occurred) and `finally` (runs regardless of outcome).

> 🎯 **Interview Tip**: Interviewers often ask about the `else` block. Using `else` is better than putting all code in the `try` block because it avoids accidentally catching exceptions raised by code that shouldn't be protected by the `try`.

```python
def load_dataset_shard(shard_id):
    """Simulates loading a shard of data."""
    if shard_id < 0:
        raise ValueError("Shard ID must be positive.")
    if shard_id == 42:
        raise FileNotFoundError(f"Shard {shard_id} is missing.")
    return [0.1, 0.2, 0.3]

def process_data(shard_id):
    try:
        print(f"Attempting to load shard {shard_id}...")
        data = load_dataset_shard(shard_id)
    except FileNotFoundError as e:
        print(f"I/O Error: {e}. Falling back to default shard.")
        data = []
    except ValueError as e:
        print(f"Invalid Argument: {e}.")
        data = []
    except Exception as e: # Catch-all for unexpected errors
        print(f"Unexpected error: {e}")
        data = []
    else:
        # Executes ONLY if the try block succeeds without exceptions
        print("Data loaded successfully! Processing...")
        data = [x * 2 for x in data]
    finally:
        # Executes ALWAYS, useful for cleanup (closing files, releasing locks)
        print("Finished processing attempt.\n")
        return data

# Output: 
# Attempting to load shard 1...
# Data loaded successfully! Processing...
# Finished processing attempt.
print(process_data(1)) 

# Output:
# Attempting to load shard 42...
# I/O Error: Shard 42 is missing.. Falling back to default shard.
# Finished processing attempt.
print(process_data(42))
```

## Custom Exceptions

Creating custom exceptions adds domain-specific semantic meaning to your errors, making pipelines much easier to debug.

```python
class MLException(Exception):
    """Base exception for all ML-related errors."""
    pass

class DataImbalanceError(MLException):
    """Raised when the dataset is too imbalanced for training."""
    def __init__(self, minority_class_ratio, threshold, message="Dataset is highly imbalanced"):
        self.minority_class_ratio = minority_class_ratio
        self.threshold = threshold
        self.message = f"{message}: {minority_class_ratio:.2f} < {threshold:.2f}"
        super().__init__(self.message)

def check_dataset_balance(labels):
    # Dummy logic for demonstration
    minority_ratio = 0.05
    threshold = 0.1
    
    if minority_ratio < threshold:
        # Raise custom exception with context
        raise DataImbalanceError(minority_ratio, threshold)
    print("Dataset balance is acceptable.")

try:
    check_dataset_balance([0, 0, 0, 1])
except DataImbalanceError as e:
    print(f"Pipeline Halted: {e}")
    # Pipeline Halted: Dataset is highly imbalanced: 0.05 < 0.10
    
    # Re-raising the exception if we can't handle it here
    # raise 
```

## Context Managers

Context managers (`with` statement) guarantee that setup and teardown logic (like closing files or releasing GPU memory) execute safely, even if errors occur inside the block.

```python
from contextlib import contextmanager
import time

# Method 1: Using a class with __enter__ and __exit__
class TimerContext:
    """Useful for profiling ML training loops."""
    def __init__(self, description):
        self.description = description

    def __enter__(self):
        self.start = time.time()
        return self # What gets assigned to the 'as' variable

    def __exit__(self, exc_type, exc_val, exc_tb):
        # exc_type, exc_val, exc_tb contain exception info if one occurred
        self.end = time.time()
        print(f"[{self.description}] Took {self.end - self.start:.4f} seconds")
        # Returning True suppresses the exception, False propagates it
        return False

with TimerContext("Matrix Multiplication"):
    # Simulate work
    time.sleep(0.1)
# Output: [Matrix Multiplication] Took 0.10xx seconds

# Method 2: Using @contextmanager generator (More Pythonic for simple cases)
@contextmanager
def temporary_seed(seed):
    import random
    state = random.getstate()
    random.seed(seed)
    print(f"Set temporary seed to {seed}")
    try:
        yield # Execution pauses here and goes to the 'with' block
    finally:
        random.setstate(state)
        print("Restored original random state")

with temporary_seed(42):
    print("Random inside context:", [random.randint(0, 100) for _ in range(3)])
# Output:
# Set temporary seed to 42
# Random inside context: [81, 14, 3]
# Restored original random state
```

## File Handling

Python's built-in `open()` is used for reading and writing files. Always use it with a context manager (`with`) to ensure the file is closed.

> 🤖 **ML Connection**: When parsing large raw text datasets (like LLM pre-training corpora), never use `.read()` or `.readlines()` as they load the entire file into memory. Iterate over the file object directly line-by-line.

```python
# Modes: 'r' (read), 'w' (write, truncates), 'a' (append), 'b' (binary)

# 1. Writing to a file
with open('metrics.txt', 'w') as f:
    f.write("epoch,loss,accuracy\n")
    f.write("1,0.85,0.65\n")

# 2. Appending to a file
with open('metrics.txt', 'a') as f:
    f.write("2,0.60,0.75\n")

# 3. Reading line by line (Memory Efficient - O(1) memory)
print("--- Reading File ---")
with open('metrics.txt', 'r') as f:
    for line in f: # f is an iterable
        print(line.strip()) # .strip() removes the trailing newline
# Output:
# --- Reading File ---
# epoch,loss,accuracy
# 1,0.85,0.65
# 2,0.60,0.75
```

## Working with JSON

JSON is the lingua franca of configuration files, API responses, and sometimes small datasets.

```python
import json

# Data to serialize
model_config = {
    "architecture": "ResNet50",
    "learning_rate": 3e-4,
    "layers": [64, 128, 256, 512],
    "use_dropout": True
}

# 1. String conversion (dumps = dump string, loads = load string)
json_str = json.dumps(model_config, indent=4)
print("JSON String:\n", json_str)
parsed_dict = json.loads(json_str)

# 2. File I/O (dump = dump to file, load = load from file)
with open('config.json', 'w') as f:
    json.dump(model_config, f, indent=4)

with open('config.json', 'r') as f:
    loaded_config = json.load(f)
    print("Loaded from file:", loaded_config["architecture"]) 
    # Output: Loaded from file: ResNet50
```

## Working with CSV

While Pandas is standard for DataFrames, the built-in `csv` module is excellent for streaming large tabular files where Pandas would OOM (Out Of Memory).

```python
import csv

data = [
    {"image_id": "img_001.jpg", "label": "cat", "confidence": 0.98},
    {"image_id": "img_002.jpg", "label": "dog", "confidence": 0.85}
]

# Writing with DictWriter
with open('predictions.csv', 'w', newline='') as f:
    fieldnames = ['image_id', 'label', 'confidence']
    writer = csv.DictWriter(f, fieldnames=fieldnames)
    
    writer.writeheader()
    for row in data:
        writer.writerow(row)

# Reading with DictReader
print("--- CSV Data ---")
with open('predictions.csv', 'r') as f:
    reader = csv.DictReader(f)
    for row in reader:
        # Notice values are read as strings, need casting
        print(f"{row['image_id']}: {row['label']} ({float(row['confidence']):.2f})")
# Output:
# --- CSV Data ---
# img_001.jpg: cat (0.98)
# img_002.jpg: dog (0.85)
```

## Pathlib

`pathlib` provides an object-oriented approach to handling filesystem paths. It handles cross-platform differences (Windows `\` vs Linux `/`) automatically.

> 🎯 **Interview Tip**: Always prefer `pathlib` over `os.path` in modern Python. It's more readable and less prone to string concatenation errors.

```python
from pathlib import Path

# 1. Creating paths and checking existence
data_dir = Path("data/processed")
if not data_dir.exists():
    # parents=True creates intermediate directories (like mkdir -p)
    # exist_ok=True ignores error if it already exists
    data_dir.mkdir(parents=True, exist_ok=True)

# 2. Path Joining (using the / operator)
file_path = data_dir / "features.npy"
print("File Path:", file_path) # Output: data/processed/features.npy

# 3. Globbing (Searching for files)
# Let's create some dummy files first
(data_dir / "train.csv").touch()
(data_dir / "test.csv").touch()
(data_dir / "readme.txt").touch()

print("--- CSV Files ---")
# rglob for recursive glob, glob for flat
for csv_file in data_dir.glob("*.csv"):
    print(csv_file.name, "-> stem:", csv_file.stem, ", suffix:", csv_file.suffix)
# Output:
# --- CSV Files ---
# train.csv -> stem: train , suffix: .csv
# test.csv -> stem: test , suffix: .csv
```

## Pickle

`pickle` serializes arbitrary Python objects to byte streams. It's widely used in ML (e.g., saving scikit-learn models or custom preprocessors).

> ⚠️ **SECURITY WARNING**: NEVER unpickle data received from an untrusted source. Pickle can execute arbitrary code during deserialization. For model weights, safe formats like `safetensors` or `ONNX` are preferred.

```python
import pickle

class CustomScaler:
    def __init__(self, mean, std):
        self.mean = mean
        self.std = std
        
    def transform(self, x):
        return (x - self.mean) / self.std

scaler = CustomScaler(mean=10.5, std=2.1)

# Saving (Serialization)
# Note 'wb' mode for Write Binary
with open('scaler.pkl', 'wb') as f:
    pickle.dump(scaler, f)

# Loading (Deserialization)
# Note 'rb' mode for Read Binary
with open('scaler.pkl', 'rb') as f:
    loaded_scaler = pickle.load(f)

print(f"Loaded Scaler Mean: {loaded_scaler.mean}") # Output: Loaded Scaler Mean: 10.5
```

## Logging

`print()` statements are insufficient for ML training. The `logging` module provides timestamping, log levels, and multiple output destinations (console + file).

```python
import logging
import sys

# Configure a robust logger for ML
logger = logging.getLogger("ML_Pipeline")
logger.setLevel(logging.DEBUG) # Capture everything at this logger level

# Formatter specifies how logs look
formatter = logging.Formatter(
    fmt='%(asctime)s | %(levelname)-8s | %(name)s | %(message)s',
    datefmt='%Y-%m-%d %H:%M:%S'
)

# Handler 1: StreamHandler (Console)
console_handler = logging.StreamHandler(sys.stdout)
console_handler.setLevel(logging.INFO) # Only show INFO and above on console
console_handler.setFormatter(formatter)

# Handler 2: FileHandler (Log file)
file_handler = logging.FileHandler("training.log", mode='w')
file_handler.setLevel(logging.DEBUG) # Save EVERYTHING to file
file_handler.setFormatter(formatter)

# Attach handlers
logger.addHandler(console_handler)
logger.addHandler(file_handler)

# Usage
logger.debug("Initialized weights with Xavier uniform.") # Goes to file only
logger.info("Starting Epoch 1/100") # Goes to both
logger.warning("Learning rate scheduling is disabled.") # Goes to both

try:
    1 / 0
except ZeroDivisionError:
    # exc_info=True adds the traceback to the log! Very important for debugging.
    logger.error("Training crashed during backprop!", exc_info=True)
```

## ML Pipeline IO

A typical ML pipeline combines many of these concepts. Configuration is loaded (JSON/YAML), data is streamed, and models/checkpoints are saved periodically.

```python
# Pseudo-code pattern for a robust ML training loop using these concepts
from pathlib import Path
import json

def run_training_pipeline(config_path: str):
    config_file = Path(config_path)
    if not config_file.exists():
        raise FileNotFoundError(f"Configuration file {config_path} not found.")
        
    with open(config_file, 'r') as f:
        config = json.load(f)
        
    ckpt_dir = Path(config['checkpoint_dir'])
    ckpt_dir.mkdir(parents=True, exist_ok=True)
    
    logger.info(f"Starting training for {config['epochs']} epochs.")
    
    for epoch in range(config['epochs']):
        try:
            # Simulate training logic
            # train_loss = train_one_epoch(...)
            train_loss = 0.5 / (epoch + 1)
            
            # Save checkpoint
            if epoch % config['save_every'] == 0:
                ckpt_path = ckpt_dir / f"model_epoch_{epoch}.pkl"
                with open(ckpt_path, 'wb') as f:
                    # pickle.dump(model, f)
                    f.write(b"dummy_model_bytes")
                logger.info(f"Saved checkpoint: {ckpt_path}")
                
        except KeyboardInterrupt:
            logger.warning("Training interrupted by user. Saving emergency checkpoint...")
            # Emergency save logic here
            break
        except Exception as e:
            logger.error(f"Fatal error at epoch {epoch}", exc_info=True)
            raise # Re-raise to crash the program after logging
```

---

## Practice Problems

1.  **File Iterator**: Write a generator function that takes a file path, opens it using a context manager, and yields lines one by one. Modify it to skip empty lines.
2.  **Robust JSON Parser**: Write a function `safe_load_json(filepath)` that returns `None` and logs a warning if the file is missing or contains invalid JSON (catch `json.JSONDecodeError`).
3.  **Custom Retry Decorator**: Create a decorator `@retry(retries=3, exceptions=(ConnectionError,))` that wraps a function. If the function raises a specified exception, it should retry up to `retries` times before finally failing.
4.  **Pathlib Organizer**: Write a script using `pathlib` that scans a directory and moves all `.csv` files into a `csv/` subdirectory and `.pkl` files into a `models/` subdirectory.
5.  **CSV Filter**: Use `csv.DictReader` to read a large file. Write rows to a new CSV file only if their `"confidence"` column is greater than `0.80`.
6.  **Multi-Exception Handler**: Write a block of code that attempts to divide `a / b` where `a` and `b` are fetched from a dictionary `d[key1]` and `d[key2]`. Catch and uniquely handle `KeyError`, `ZeroDivisionError`, and `TypeError`.
7.  **Profiling Context Manager**: Extend the `TimerContext` manager to take a logger instance and log the time taken at the `DEBUG` level instead of using `print()`.
8.  **Pickle Safe Load**: Write a function that checks if a file size is less than 1GB using `pathlib` before attempting to `pickle.load` it, raising a custom `FileTooLargeError` if it exceeds the limit.

---
Related: `[[Python OOP Mastery]]`, `[[Python Standard Library Gems]]`, `[[Python Pandas Essentials]]`
