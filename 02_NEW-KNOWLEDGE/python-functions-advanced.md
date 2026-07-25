---
id: c718e8a6-5381-42eb-8280-9289230559eb
title: Python Functions Advanced
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
tags: [implementation, advanced]
owner_moc: Python DSA ML Mastery MOC
sources: []
related: ["[[Python Syntax Power Moves]]", "[[Python OOP Mastery]]", "[[DSA Recursion and Backtracking]]"]
schema_version: 4
---

Functions in Python are more than just blocks of code; they are first-class objects that form the bedrock of functional programming paradigms, scalable pipelines, and expressive APIs. For Machine Learning Engineers, mastering advanced function concepts like decorators, generators, and closures is non-negotiable. These tools allow you to write memory-efficient data loaders (generators), abstract away repetitive tasks like logging or timing (decorators), and build modular training pipelines by passing functions as arguments. 

---

## 1. First-Class Functions

In Python, functions are **first-class citizens**. This means they can be:
- Assigned to variables
- Passed as arguments to other functions
- Returned from other functions
- Stored in data structures (lists, dicts, etc.)

> 🤖 **ML Connection**: You'll often pass custom metric or loss functions into a model training loop, or store different data transformation functions in a list to create a preprocessing pipeline.

```python
def mean_squared_error(y_true, y_pred):
    return sum((t - p) ** 2 for t, p in zip(y_true, y_pred)) / len(y_true)

def mean_absolute_error(y_true, y_pred):
    return sum(abs(t - p) for t, p in zip(y_true, y_pred)) / len(y_true)

# 1. Assigning to a variable
loss_fn = mean_squared_error
print(f"MSE: {loss_fn([1, 2], [1.5, 1.8])}") # Output: MSE: 0.145

# 2. Storing in a data structure (Strategy Pattern)
losses = {
    'mse': mean_squared_error,
    'mae': mean_absolute_error
}

# 3. Passing as an argument (Higher-Order Function)
def evaluate_model(y_true, y_pred, metric_fn):
    print(f"Evaluating using {metric_fn.__name__}")
    return metric_fn(y_true, y_pred)

print(evaluate_model([1, 2], [1.5, 1.8], losses['mae']))
# Output:
# Evaluating using mean_absolute_error
# 0.35

# 4. Returning a function
def get_loss_fn(name):
    return losses.get(name.lower(), mean_squared_error) # defaults to MSE

chosen_loss = get_loss_fn('mae')
```

## 2. Lambda Functions

Lambdas are anonymous, single-expression functions. 
Syntax: `lambda arguments: expression`

> 🎯 **Interview Tip**: Don't overuse lambdas. If it takes more than one line to write, or if you need to name it, use a standard `def`. Lambdas are perfect for quick, throwaway sorting keys.

```python
# Basic syntax
square = lambda x: x ** 2
print(square(5)) # Output: 25

# Multi-argument lambda
add = lambda x, y: x + y
print(add(3, 4)) # Output: 7

# Common Use Case 1: Sorting complex structures
data_points = [
    {"id": 1, "loss": 0.5},
    {"id": 2, "loss": 0.1},
    {"id": 3, "loss": 0.9}
]
# Sort by loss ascending
sorted_data = sorted(data_points, key=lambda x: x["loss"])
print([d["id"] for d in sorted_data]) 
# Output: [2, 1, 3]

# Common Use Case 2: Max/Min
best_model = min(data_points, key=lambda x: x["loss"])
print(f"Best model ID: {best_model['id']}") # Output: Best model ID: 2
```

## 3. Map, Filter, Reduce

Functional programming primitives that operate on iterables. 

> 🤖 **ML Connection**: Often used to map transformations across datasets, though in modern Python, list comprehensions are generally preferred for readability unless you are specifically chaining functional operations or passing pre-defined functions.

```python
from functools import reduce

nums = [1, 2, 3, 4, 5]

# 1. Map: Apply a function to every item
# Returns a map object (iterator), needs to be cast to list
squared = list(map(lambda x: x**2, nums))
print(squared) # Output: [1, 4, 9, 16, 25]
# List comp equivalent: [x**2 for x in nums]

# 2. Filter: Keep items where function returns True
evens = list(filter(lambda x: x % 2 == 0, nums))
print(evens) # Output: [2, 4]
# List comp equivalent: [x for x in nums if x % 2 == 0]

# 3. Reduce: Apply rolling computation to sequential pairs
# reduce(function, iterable, [initializer])
# E.g., computing a product: (((1*2)*3)*4)*5
product = reduce(lambda x, y: x * y, nums)
print(product) # Output: 120

# Reduce with initializer (finding max)
max_val = reduce(lambda a, b: a if a > b else b, nums, 0)
print(max_val) # Output: 5
```

## 4. Closures

A closure is a function that retains access to variables from its enclosing lexical scope even after that scope has finished execution. This is how we achieve state encapsulation in functional programming (without using classes).

```python
# Factory pattern using closures
def make_multiplier(factor):
    # 'factor' is enclosed
    def multiplier(number):
        return number * factor
    return multiplier

double = make_multiplier(2)
triple = make_multiplier(3)

print(double(5)) # Output: 10
print(triple(5)) # Output: 15

# Using 'nonlocal' to modify enclosed variables
def make_counter():
    count = 0
    def counter():
        nonlocal count # Required to modify the outer scope variable!
        count += 1
        return count
    return counter

c1 = make_counter()
print(c1()) # Output: 1
print(c1()) # Output: 2
```

## 5. Decorators

Decorators are functions that wrap other functions to modify or extend their behavior without permanently modifying them. They use the `@` syntax.

> 🎯 **Interview Tip**: Always use `functools.wraps` when writing decorators. It preserves the original function's metadata (`__name__`, `__doc__`), which is crucial for debugging and serialization (often used in web frameworks and ML model saving).

```python
import time
from functools import wraps

# 1. A basic timing decorator
def time_it(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"[Timer] {func.__name__} took {end - start:.4f}s")
        return result
    return wrapper

@time_it
def train_dummy_model(epochs):
    time.sleep(0.1) # simulate work
    return f"Trained for {epochs} epochs"

print(train_dummy_model(10))
# Output:
# [Timer] train_dummy_model took 0.100x s
# Trained for 10 epochs

# 2. Decorator with arguments
def retry(max_attempts=3):
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            for attempt in range(1, max_attempts + 1):
                try:
                    return func(*args, **kwargs)
                except Exception as e:
                    print(f"Attempt {attempt} failed: {e}")
                    if attempt == max_attempts:
                        raise
            return None
        return wrapper
    return decorator

@retry(max_attempts=2)
def unstable_api_call():
    raise ConnectionError("Timeout")

# unstable_api_call() # Will retry 2 times then raise Exception

# 3. Class Decorators (for stateful decorators)
class CountCalls:
    def __init__(self, func):
        self.func = func
        self.num_calls = 0
        wraps(func)(self) # Preserve metadata
        
    def __call__(self, *args, **kwargs):
        self.num_calls += 1
        print(f"Call {self.num_calls} of {self.func.__name__!r}")
        return self.func(*args, **kwargs)

@CountCalls
def say_hello():
    pass

say_hello() # Call 1 of 'say_hello'
say_hello() # Call 2 of 'say_hello'
```

## 6. Generators

Generators are a simple way to create iterators using functions with the `yield` statement. They compute one value at a time, making them incredibly memory efficient for large datasets.

> 🤖 **ML Connection**: Image and text data loaders in PyTorch/Keras are essentially generators. You cannot load 100GB of images into RAM; you *must* yield them in batches.

```python
# 1. Basic Generator
def batch_generator(data, batch_size):
    """Yields batches of data lazily."""
    for i in range(0, len(data), batch_size):
        yield data[i:i + batch_size]

dataset = list(range(10))
for batch in batch_generator(dataset, 3):
    print(batch)
# Output:
# [0, 1, 2]
# [3, 4, 5]
# [6, 7, 8]
# [9]

# 2. Generator Expressions (like list comprehensions but with parentheses)
gen_expr = (x**2 for x in range(1000000))
# This takes almost no memory compared to [x**2 for x in range(1000000)]
print(next(gen_expr)) # Output: 0
print(next(gen_expr)) # Output: 1

# 3. yield from (Delegating to a sub-generator)
def flatten_2d(matrix):
    for row in matrix:
        yield from row # Yields every element from 'row'

matrix = [[1, 2], [3, 4]]
print(list(flatten_2d(matrix))) # Output: [1, 2, 3, 4]

# 4. send() (Coroutines)
def running_average():
    total = 0
    count = 0
    average = None
    while True:
        # yield returns 'average', and execution pauses.
        # When send(val) is called, 'val' is assigned to 'term'
        term = yield average
        if term is None:
            break
        total += term
        count += 1
        average = total / count

avg_gen = running_average()
next(avg_gen) # Prime the generator (move to first yield)
print(avg_gen.send(10)) # Output: 10.0
print(avg_gen.send(20)) # Output: 15.0
```

## 7. Iterators Protocol

An iterator is an object that implements `__iter__` and `__next__`. Generators are just a convenient syntax for creating iterators.

```python
class DataStreamer:
    """A custom iterator that acts like a generator."""
    def __init__(self, max_items):
        self.max_items = max_items
        self.current = 0

    def __iter__(self):
        return self

    def __next__(self):
        if self.current >= self.max_items:
            raise StopIteration
        val = self.current
        self.current += 1
        return val

stream = DataStreamer(3)
for item in stream:
    print(item) # Output: 0, 1, 2

# Intro to itertools
import itertools

# Infinite counting
counter = itertools.count(start=10, step=2)
print(next(counter)) # 10
print(next(counter)) # 12

# Cycling
cycler = itertools.cycle(['A', 'B'])
print(next(cycler)) # A
print(next(cycler)) # B
print(next(cycler)) # A
```

## 8. Functools

The `functools` module provides higher-order functions that interact with other functions.

```python
from functools import lru_cache, partial

# 1. lru_cache (Memoization)
# Extremely useful for recursive functions or expensive DP problems
@lru_cache(maxsize=None)
def fibonacci(n):
    if n < 2:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

print(fibonacci(100)) # Computes instantly!

# 2. partial
# Freezes some portion of a function's arguments, resulting in a new signature.
def power(base, exponent):
    return base ** exponent

# Create a new function that squares its argument
square = partial(power, exponent=2)
cube = partial(power, exponent=3)

print(square(5)) # Output: 25
print(cube(5)) # Output: 125
```

## 9. Recursion Refresher

Recursion is when a function calls itself. It requires a **base case** to terminate. 

> 🎯 **Interview Tip**: Python is NOT optimized for tail recursion. If you exceed the recursion depth, you'll hit a `RecursionError`. Understand when to use recursion (trees/graphs/divide&conquer) vs iteration.

```python
import sys

# Checking recursion limit
print(sys.getrecursionlimit()) # Usually 1000

# Classic recursion: Tree traversal
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def inorder_traversal(root):
    res = []
    def dfs(node):
        if not node: # Base case
            return
        dfs(node.left)
        res.append(node.val)
        dfs(node.right)
    dfs(root)
    return res
```

## 10. Higher-Order Functions in ML

A practical example of how these concepts combine in a mock ML training scenario.

```python
def create_training_pipeline(model, data, transform_fn, loss_fn, callbacks=None):
    """
    A higher-order function coordinating the training loop.
    """
    if callbacks is None:
        callbacks = []
        
    def run_epoch(epoch):
        total_loss = 0
        for batch in data:
            # 1. Apply transform (passed function)
            x, y = transform_fn(batch)
            
            # 2. Simulate prediction & loss (passed function)
            preds = model(x)
            loss = loss_fn(y, preds)
            total_loss += loss
            
        avg_loss = total_loss / len(data)
        
        # 3. Execute callbacks (closure/first-class funcs)
        for cb in callbacks:
            cb(epoch, avg_loss)
            
        return avg_loss
        
    return run_epoch

# Usage mock:
# model = MockModel()
# logger_callback = lambda ep, loss: print(f"Ep: {ep}, Loss: {loss:.4f}")
# early_stopping = EarlyStoppingClosure(patience=3)
# train_epoch = create_training_pipeline(model, dataloader, normalize_data, mse_loss, [logger_callback, early_stopping])
# for e in range(10): train_epoch(e)
```

---

## 🎯 Practice Problems

1. **Custom Map**: Write a function `my_map(func, iterable)` that implements the behavior of `map()` using a generator expression.
2. **Exponential Backoff Decorator**: Write a decorator `@backoff(retries, delay)` that retries a failing function, multiplying the delay by 2 each time.
3. **Pipeline Builder**: Create a function `compose(*funcs)` that takes multiple functions and returns a new function that applies them sequentially (e.g., `compose(f, g)(x)` returns `f(g(x))`).
4. **Running Variance Generator**: Write a generator using `.send()` that computes both the running mean and running variance of a stream of numbers.
5. **Stateful Closure**: Write a closure `moving_average(window_size)` that accepts a new number and returns the average of the last `window_size` numbers.
6. **Flatten Nested Lists**: Write a recursive generator that yields elements from an arbitrarily nested list (e.g., `[1, [2, [3, 4], 5]]` -> `1, 2, 3, 4, 5`).
7. **Partial Application**: Use `functools.partial` to create a `print_error` function from `print` that always prints to `sys.stderr` with a prefix `"[ERROR]"`.
8. **Iterator Implementation**: Implement a custom iterator class `FibSequence(n)` that yields the first `n` Fibonacci numbers without keeping them in memory.
9. **LRU Cache Implementation**: Write a simplified decorator version of `@lru_cache` using a dictionary to store arguments and results.
10. **Timer Context Manager vs Decorator**: Re-implement the `@time_it` decorator as a Context Manager (`class Timer: ...`) that uses `__enter__` and `__exit__`.

---
**Related**: [[Python Syntax Power Moves]], [[Python OOP Mastery]], [[DSA Recursion and Backtracking]]
