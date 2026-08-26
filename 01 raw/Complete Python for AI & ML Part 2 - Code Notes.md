# Complete Python for AI & ML Part 2 - Exhaustive Code Notes

## Chapter 10: Functions

### Basic Function Definition & Calling

```python
# Function definition
def hello():
    print("Hello, How are you?")
    print("Welcome to NYC")

# Calling the function
hello()
hello()
hello()
hello()
hello()
```

### Function with Parameters & Arguments

```python
# Parameters: values you accept while defining function
# Arguments: values you provide while calling function

def addition(a, b):
    print(a + b)

# Calling with arguments
addition(13, 25)  # Output: 38
addition(20, 20)  # Output: 40
addition(50, 50)  # Output: 100
```

### Palindrome Checker Function

```python
def palindrome_checker(a):
    copy = a
    reverse = 0
    while a > 0:
        reverse = reverse * 10 + a % 10
        a = a // 10
    if copy == reverse:
        print(f"{copy} is a palindrome number")
    else:
        print(f"{copy} is not a palindrome number")

palindrome_checker(121)   # palindrome
palindrome_checker(456)   # not palindrome
palindrome_checker(324)   # not palindrome
```

### Types of Function Arguments

#### 1. Positional Arguments

```python
def multiply(a, b, c, d):
    print(a * b * c * d)

# All 4 arguments must be provided in order
multiply(5, 2, 3, 4)  # Output: 120

# Missing argument causes error
multiply(5, 2, 3)  # Error: missing 1 required positional argument: 'd'
```

#### 2. Default Arguments

```python
def addition(a, b, c=12):
    print(a + b + c)

addition(5, 5)        # Output: 22 (5 + 5 + 12)
addition(5, 5, 5)     # Output: 15 (5 + 5 + 5)
addition(5, 5, 5, 5)  # Error: takes 3 positional arguments but 4 were given

# Rule: After first default arg, all following must also have defaults
def addition(a, b, c=12, d=15):
    print(a + b + c + d)

addition(5, 5)     # Output: 37
addition(5, 5, 5)  # Output: 30
```

#### 3. Keyword Arguments

```python
def subtraction(a, b):
    print(b - a)

# Positional arguments
subtraction(30, 50)  # Output: 20

# Keyword arguments - can pass in any order
subtraction(b=30, a=50)  # Output: -20

# Mix of positional and keyword (positional must come first)
def addition(a, b, c):
    print(a + b + c)

addition(20, c=40, b=34)  # Output: 94
```

### Return Statement

```python
def hello():
    return "How are you"

result = hello()
print(result)  # Output: How are you

# Or directly
print(hello())  # Output: How are you
```

---

## Chapter 12: Data Structures

### Lists

#### Creating Lists

```python
# Creating a list
a = [12, 23, 45, 67, 89]
print(a)       # Output: [12, 23, 45, 67, 89]
print(type(a)) # Output: <class 'list'>

# Heterogeneous list (multiple data types)
mixed = [1, 3.5, True, "hello", [1, 2]]
```

#### List Properties
- **Ordered**: Elements have defined positions (indexing works)
- **Mutable**: Can change values after creation
- **Allows Duplicates**: Can store duplicate values

#### Indexing & Slicing

```python
fruits = ["apple", "banana", "mango"]

# Indexing (starts from 0)
print(fruits[0])   # Output: apple
print(fruits[-1])  # Output: mango (negative indexing)

# Slicing
print(fruits[0:2])  # Output: ['apple', 'banana']

# Changing value (mutable)
l = [10, 22, 30, 40, 50]
l[1] = 20  # Change 22 to 20
print(l)   # Output: [10, 20, 30, 40, 50]
```

#### Traversing Lists

```python
a = [10, 20, 30, 40, 50]

# Method 1: Traverse on values
for i in a:
    print(i)

# Method 2: Traverse on index
for i in range(len(a)):
    print(f"Index {i}: Value {a[i]}")
```

#### List Methods (CRUD Operations)

```python
a = [10, 20, 30, 40, 50]

# CREATE
a.append(60)           # Add to end: [10, 20, 30, 40, 50, 60]
a.insert(2, 30)        # Insert at index 2: [10, 20, 30, 30, 40, 50, 60]

# READ
print(a[0])            # Access by index
print(len(a))          # Length of list

# UPDATE
a[1] = 25              # Change value at index 1

# DELETE
a.pop()                # Remove last element, returns removed element
a.pop(2)               # Remove element at index 2
a.remove(30)           # Remove first occurrence of value 30
a.clear()              # Remove all elements: []

# Other methods
a.sort()               # Sort ascending
a.sort(reverse=True)   # Sort descending
a.reverse()            # Reverse the list
a.copy()               # Return a copy
a.count(30)            # Count occurrences of 30
a.extend([60, 70])     # Extend list with another list
```

#### List Practice Questions

```python
# Q1: Print all positive and negative elements separately
l = [3, -1, 4, -5, 9]
positive = []
negative = []

for i in l:
    if i >= 0:
        positive.append(i)
    else:
        negative.append(i)

print(f"Positive elements: {positive}")  # [3, 4, 9]
print(f"Negative elements: {negative}")  # [-1, -5]
```

```python
# Q2: Find the mean/average of list elements
l = [10, 20, 30, 40]
sum = 0

for i in l:
    sum = sum + i

avg = sum / len(l)
print(f"Your average is {avg}")  # Output: 25.0
```

```python
# Q3: Find greatest element and its index
a = [23, 20, 43, 17, 68, 29, 90, 47]

largest = a[0]
index = 0

for i in range(len(a)):
    if a[i] > largest:
        largest = a[i]
        index = i

print(f"Your largest value is {largest} at index {index}")
# Output: Your largest value is 100 at index 3
```

```python
# Q4: Find second largest element
a = [4, 8, 2, 9, 1]

largest = a[0]
second_largest = a[0]

for i in a:
    if i > largest:
        second_largest = largest
        largest = i
    elif i > second_largest and i != largest:
        second_largest = i

print(f"Second largest: {second_largest}")  # Output: 8
```

```python
# Q5: Check if list is sorted
a = [10, 20, 30, 40, 50]

is_sorted = True
for i in range(len(a) - 1):
    if a[i] > a[i + 1]:
        is_sorted = False
        break

if is_sorted:
    print("Your list is sorted")
else:
    print("Your list is not sorted")
```

---

### Tuples

#### Creating Tuples

```python
# Method 1: Manual creation
days = ("Monday", "Tuesday", "Wednesday")
coordinates = (123, 567)
mixed = ("hello", 123, 3.14, True)

# Method 2: Convert list to tuple
a = [12, 23, 45]
tup = tuple(a)
print(type(tup))  # Output: <class 'tuple'>

# Method 3: Auto tuple from multiple return values
def student():
    return "Akarsh", 24, "aksh@gmail.com"

info = student()
print(type(info))  # Output: <class 'tuple'>
```

#### Tuple Properties
- **Ordered**: Has indexing like lists
- **Immutable**: Cannot change values once created
- **Allows Duplicates**

#### Tuple Indexing

```python
days = ("Monday", "Tuesday", "Wednesday", "Thursday")

print(days[0])    # Output: Monday
print(days[-1])   # Output: Thursday

# Cannot change values
days[0] = "Sunday"  # Error: 'tuple' object does not support item assignment
```

#### Tuple Methods

```python
tup = (1, 2, 3, 4, 1, 2, 1, 1)

# index() - Find first position of value
print(tup.index(2))   # Output: 1

# count() - Count occurrences
print(tup.count(1))   # Output: 4
```

#### Tuple Unpacking

```python
def student():
    return "Akarsh", 24, "aksh@gmail.com"

# Unpack tuple into variables
name, age, mail = student()

print(name)  # Output: Akarsh
print(age)   # Output: 24
print(mail)  # Output: aksh@gmail.com
```

---

### Sets

#### Creating Sets

```python
# Method 1: Direct creation with curly braces
s = {1, 2, 3}
print(type(s))  # Output: <class 'set'>

# Method 2: Using set() function
l = [1, 2, 3, 4, 4, 5, 6, 7, 8, 8]
s = set(l)
print(s)  # Output: {1, 2, 3, 4, 5, 6, 7, 8} (duplicates removed)

# Empty set (cannot use {} alone - creates empty dict)
s = set()
```

#### Set Properties
- **Unordered**: No guaranteed order
- **No Indexing**: Cannot access by index
- **No Duplicates**: Automatically removes duplicates
- **Mutable**: Can add/remove elements
- **Only Hashable Elements**: Cannot store lists, only immutable types

#### Hashing Concept

```python
# Sets use hashing internally
# Numbers, strings, tuples are hashable (immutable)
# Lists are NOT hashable (mutable)

s = {10, 20, 30}
# Internal: hash(10) -> stored, hash(20) -> stored, hash(30) -> stored
# If you try to add 30 again, hash already exists, so not added

# Cannot store lists in sets
s = {10, 20, [1, 2]}  # Error: unhashable type: 'list'
```

#### Set Methods

```python
s = {10, 20, 30, 40}

# add() - Add element
s.add(50)
print(s)  # {10, 20, 30, 40, 50}

# remove() - Remove specific element
s.remove(30)

# discard() - Remove without error if not found
s.discard(100)  # No error

# pop() - Remove random element
a = s.pop()

# clear() - Remove all elements
s.clear()

# copy() - Create copy
s2 = s.copy()
```

#### Set Operations (Math Style)

```python
s1 = {10, 20, 30, 40}
s2 = {30, 40, 50, 60}

# Difference (elements in s1 but not in s2)
print(s1.difference(s2))       # {10, 20}
print(s1 - s2)                 # {10, 20}

# Symmetric Difference (elements not common to both)
print(s1.symmetric_difference(s2))  # {10, 20, 50, 60}
print(s1 ^ s2)                      # {10, 20, 50, 60}

# Union (all elements from both)
print(s1.union(s2))             # {10, 20, 30, 40, 50, 60}
print(s1 | s2)                  # {10, 20, 30, 40, 50, 60}

# Intersection (common elements)
print(s1.intersection(s2))      # {30, 40}
print(s1 & s2)                  # {30, 40}

# issubset
print({30, 40}.issubset(s1))    # True

# issuperset
print(s1.issuperset({30, 40}))  # True

# isdisjoint (no common elements)
print(s1.isdisjoint({100, 200}))  # True
```

---

### Dictionaries

#### Creating Dictionaries

```python
# Method 1: Direct creation
student = {
    "name": "Akarsh",
    "age": 24,
    "email": "aksh@gmail.com"
}

# Method 2: Using dict()
student = dict(name="Akarsh", age=24)

# Method 3: From list of tuples
pairs = [("name", "Akarsh"), ("age", 24)]
student = dict(pairs)
```

#### Dictionary Properties
- **Key-Value Pairs**: Each element has a key and value
- **Mutable**: Can change values
- **No Duplicates in Keys**: Keys must be unique
- **Ordered** (Python 3.7+)

#### Accessing Dictionary Values

```python
student = {"name": "Akarsh", "age": 24, "email": "aksh@gmail.com"}

# Access by key
print(student["name"])           # Output: Akarsh
print(student.get("age"))       # Output: 24
print(student.get("phone", "N/A"))  # Output: N/A (default if key not found)

# Access all keys, values, items
print(student.keys())   # dict_keys(['name', 'age', 'email'])
print(student.values()) # dict_values(['Akarsh', 24, 'aksh@gmail.com'])
print(student.items())  # dict_items([('name', 'Akarsh'), ('age', 24), ...])
```

#### Dictionary Methods

```python
student = {"name": "Akarsh", "age": 24}

# Add/Update
student["email"] = "aksh@gmail.com"   # Add new key
student["age"] = 25                    # Update existing key
student.update({"phone": "123456"})   # Update multiple

# Delete
del student["phone"]                   # Delete by key
student.pop("email")                   # Delete and return value
student.popitem()                      # Delete last item
student.clear()                        # Clear all

# Other
print(student.copy())                  # Copy dictionary
print(student.keys())                  # All keys
print(student.values())                # All values
print(student.items())                 # All key-value pairs
```

#### Traversing Dictionaries

```python
student = {"name": "Akarsh", "age": 24, "email": "aksh@gmail.com"}

# Method 1: Traverse keys
for key in student:
    print(key, student[key])

# Method 2: Using items()
for key, value in student.items():
    print(f"{key}: {value}")

# Method 3: Traverse values only
for value in student.values():
    print(value)
```

#### Dictionary Practice Questions

```python
# Q1: Count word frequency
words = ["apple", "banana", "apple", "cherry", "banana", "apple"]
freq = {}

for word in words:
    if word in freq:
        freq[word] += 1
    else:
        freq[word] = 1

print(freq)  # {'apple': 3, 'banana': 2, 'cherry': 1}
```

```python
# Q2: Merge two dictionaries
dict1 = {"a": 1, "b": 2}
dict2 = {"c": 3, "d": 4}

merged = {**dict1, **dict2}
print(merged)  # {'a': 1, 'b': 2, 'c': 3, 'd': 4}

# Or using update()
dict1.update(dict2)
print(dict1)
```

```python
# Q3: Find key with maximum value
scores = {"Alice": 85, "Bob": 92, "Charlie": 78}

max_key = max(scores, key=scores.get)
print(f"Highest score: {max_key} with {scores[max_key]}")
# Output: Highest score: Bob with 92
```

---

## Chapter 15: Exception Handling

### Basic Try-Except

```python
# Without exception handling
try:
    a = 10
    b = 0
    print(a / b)
except:
    print("Some error occurred")

# Output: Some error occurred
```

### Specific Exception Handling

```python
try:
    a = int(input("Enter number: "))
    result = 10 / a
    print(result)
except ValueError:
    print("Please enter a valid number")
except ZeroDivisionError:
    print("Cannot divide by zero")
```

### Try-Except-Else-Finally

```python
try:
    a = int(input("Enter number: "))
    result = 10 / a
except ValueError:
    print("Invalid input")
except ZeroDivisionError:
    print("Cannot divide by zero")
else:
    print(f"Result is {result}")  # Runs if no exception
finally:
    print("This always runs")     # Runs regardless of exception
```

### Raising Exceptions

```python
def check_age(age):
    if age < 0:
        raise ValueError("Age cannot be negative")
    if age < 18:
        raise ValueError("Must be 18 or older")
    return "Access granted"

try:
    print(check_age(15))
except ValueError as e:
    print(e)
```

### Common Exceptions

```python
# ZeroDivisionError
try:
    print(10 / 0)
except ZeroDivisionError:
    print("Cannot divide by zero")

# IndexError
try:
    l = [1, 2, 3]
    print(l[10])
except IndexError:
    print("Index out of range")

# KeyError
try:
    d = {"name": "Akarsh"}
    print(d["age"])
except KeyError:
    print("Key not found")

# FileNotFoundError
try:
    f = open("nonexistent.txt", "r")
except FileNotFoundError:
    print("File not found")

# ValueError
try:
    int("hello")
except ValueError:
    print("Invalid conversion")

# TypeError
try:
    "hello" + 5
except TypeError:
    print("Type mismatch")
```

---

## Chapter 16: File Handling Basics

### Opening & Reading Files

```python
# Open file for reading
f = open("myfile.txt", "r")
content = f.read()
print(content)
f.close()

# Using with statement (auto-closes)
with open("myfile.txt", "r") as f:
    content = f.read()
    print(content)

# Read line by line
with open("myfile.txt", "r") as f:
    for line in f:
        print(line.strip())
```

### Writing to Files

```python
# Write mode (overwrites)
with open("myfile.txt", "w") as f:
    f.write("Hello World\n")
    f.write("Second line\n")

# Append mode
with open("myfile.txt", "a") as f:
    f.write("Appended line\n")
```

### File Modes

```python
# "r" - Read (default)
# "w" - Write (creates/overwrites)
# "a" - Append (creates/adds to end)
# "r+" - Read and Write
# "w+" - Write and Read
# "a+" - Append and Read
# "x" - Create (error if exists)
```

### File Methods

```python
with open("myfile.txt", "r") as f:
    f.read()        # Read entire file
    f.readline()    # Read one line
    f.readlines()   # Read all lines as list
    f.tell()        # Current position
    f.seek(0)       # Move to beginning
```

### Working with CSV Files

```python
import csv

# Reading CSV
with open("data.csv", "r") as f:
    reader = csv.reader(f)
    for row in reader:
        print(row)

# Writing CSV
with open("output.csv", "w", newline="") as f:
    writer = csv.writer(f)
    writer.writerow(["Name", "Age"])
    writer.writerow(["Akarsh", 24])
```

### Working with JSON Files

```python
import json

# Writing JSON
data = {"name": "Akarsh", "age": 24}
with open("data.json", "w") as f:
    json.dump(data, f)

# Reading JSON
with open("data.json", "r") as f:
    data = json.load(f)
    print(data)
```

---

## Chapter 17: UI Creation in Python (Tkinter Basics)

### Basic Window

```python
import tkinter as tk

# Create window
root = tk.Tk()
root.title("My App")
root.geometry("400x300")

# Add label
label = tk.Label(root, text="Hello World")
label.pack()

# Run
root.mainloop()
```

### Adding Widgets

```python
import tkinter as tk

root = tk.Tk()
root.title("Form")
root.geometry("400x300")

# Label
tk.Label(root, text="Name:").pack()

# Entry
name_entry = tk.Entry(root)
name_entry.pack()

# Button
def greet():
    name = name_entry.get()
    tk.Label(root, text=f"Hello {name}!").pack()

tk.Button(root, text="Submit", command=greet).pack()

root.mainloop()
```

### Common Widgets

```python
import tkinter as tk

root = tk.Tk()

# Label
tk.Label(root, text="Label").pack()

# Entry
tk.Entry(root).pack()

# Button
tk.Button(root, text="Click").pack()

# Text (multi-line)
tk.Text(root, height=5, width=30).pack()

# Listbox
tk.Listbox(root).pack()

# Frame
tk.Frame(root).pack()

# Checkbutton
tk.Checkbutton(root, text="Check").pack()

# Radiobutton
tk.Radiobutton(root, text="Option 1").pack()

# Scale
tk.Scale(root, from_=0, to=100).pack()

# Canvas
tk.Canvas(root, width=200, height=100).pack()

root.mainloop()
```

---

## Chapter 18: Decorators & Advanced Concepts

### Lambda Functions

```python
# Regular function
def add(a, b):
    return a + b

# Lambda equivalent
add = lambda a, b: a + b
print(add(5, 3))  # Output: 8

# Lambda with filter
numbers = [1, 2, 3, 4, 5, 6]
even = list(filter(lambda x: x % 2 == 0, numbers))
print(even)  # Output: [2, 4, 6]

# Lambda with map
squared = list(map(lambda x: x**2, numbers))
print(squared)  # Output: [1, 4, 9, 16, 25, 36]

# Lambda with reduce
from functools import reduce
total = reduce(lambda a, b: a + b, numbers)
print(total)  # Output: 21
```

### List Comprehensions

```python
# Basic list comprehension
squares = [x**2 for x in range(10)]
print(squares)  # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

# With condition
evens = [x for x in range(20) if x % 2 == 0]
print(evens)  # [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]

# Nested
matrix = [[i*j for j in range(3)] for i in range(3)]
print(matrix)  # [[0, 0, 0], [0, 1, 2], [0, 2, 4]]
```

### Dictionary Comprehensions

```python
squares_dict = {x: x**2 for x in range(6)}
print(squares_dict)  # {0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25}

# With condition
even_squares = {x: x**2 for x in range(10) if x % 2 == 0}
print(even_squares)
```

### Set Comprehensions

```python
squares_set = {x**2 for x in range(10)}
print(squares_set)  # {0, 1, 4, 9, 16, 25, 36, 49, 64, 81}
```

### Decorators

```python
# Basic decorator
def my_decorator(func):
    def wrapper():
        print("Before function call")
        func()
        print("After function call")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

say_hello()
# Output:
# Before function call
# Hello!
# After function call
```

### Decorator with Arguments

```python
def decorator(func):
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__}")
        result = func(*args, **kwargs)
        print(f"Function returned {result}")
        return result
    return wrapper

@decorator
def add(a, b):
    return a + b

add(5, 3)
# Output:
# Calling add
# Function returned 8
```

### Generators

```python
# Generator function
def my_generator(n):
    i = 0
    while i < n:
        yield i
        i += 1

# Using generator
for num in my_generator(5):
    print(num)  # 0, 1, 2, 3, 4

# Generator expression
squares = (x**2 for x in range(5))
print(list(squares))  # [0, 1, 4, 9, 16]
```

### Map, Filter, Reduce

```python
from functools import reduce

numbers = [1, 2, 3, 4, 5]

# Map - Apply function to all elements
squared = list(map(lambda x: x**2, numbers))
print(squared)  # [1, 4, 9, 16, 25]

# Filter - Filter elements based on condition
evens = list(filter(lambda x: x % 2 == 0, numbers))
print(evens)  # [2, 4]

# Reduce - Reduce to single value
total = reduce(lambda a, b: a + b, numbers)
print(total)  # 15
```

### *args and **kwargs

```python
# *args - Variable positional arguments
def add_all(*args):
    return sum(args)

print(add_all(1, 2, 3, 4, 5))  # 15

# **kwargs - Variable keyword arguments
def print_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

print_info(name="Akarsh", age=24, city="Delhi")

# Both together
def func(*args, **kwargs):
    print(f"Args: {args}")
    print(f"Kwargs: {kwargs}")

func(1, 2, 3, name="Akarsh", age=24)
```

### Global and Local Variables

```python
x = 10  # Global

def func():
    global x
    x = 20  # Modifies global
    y = 30  # Local
    print(f"Inside: x={x}, y={y}")

func()     # Inside: x=20, y=30
print(x)   # 20
```

### Closures

```python
def outer():
    x = 10
    def inner():
        print(x)
    return inner

closure = outer()
closure()  # 10
```

### Recursion

```python
# Factorial
def factorial(n):
    if n == 0 or n == 1:
        return 1
    return n * factorial(n - 1)

print(factorial(5))  # 120

# Fibonacci
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

for i in range(10):
    print(fibonacci(i), end=" ")  # 0 1 1 2 3 5 8 13 21 34
```

### Exception Handling with File Operations

```python
try:
    with open("nonexistent.txt", "r") as f:
        content = f.read()
except FileNotFoundError:
    print("File not found!")
except PermissionError:
    print("Permission denied!")
except Exception as e:
    print(f"An error occurred: {e}")
finally:
    print("Operation completed")
```

### Context Managers

```python
# Using with statement
with open("file.txt", "w") as f:
    f.write("Hello")

# Custom context manager
class MyContext:
    def __enter__(self):
        print("Entering context")
        return self
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        print("Exiting context")
        return False

with MyContext():
    print("Inside context")
```

---

## Quick Reference: All Data Structures Comparison

| Feature | List | Tuple | Set | Dictionary |
|---------|------|-------|-----|------------|
| Syntax | `[1,2,3]` | `(1,2,3)` | `{1,2,3}` | `{"a":1}` |
| Ordered | Yes | Yes | No | Yes (3.7+) |
| Mutable | Yes | No | Yes | Yes |
| Duplicates | Yes | Yes | No | Keys: No |
| Indexing | Yes | Yes | No | Keys |
| Use Case | General | Constant data | Unique values | Key-value pairs |

---

*Notes generated from: Complete Python for AI & ML Part 2 (Intermediate to Advanced)*
*Source: https://www.youtube.com/watch?v=QR2TyeZRknw*
