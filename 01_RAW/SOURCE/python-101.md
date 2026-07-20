# Python 101 — Syntax for Java Programmers

> Pure code reference. Java → Python side-by-side.

---

## 1. Hello World

```java
// Java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}
```

```python
# Python
print("Hello World")
```

---

## 2. Variables & Data Types

```java
// Java — explicit type
int age = 20;
double price = 99.99;
String name = "Alice";
boolean flag = true;
final int MAX = 100;
```

```python
# Python — dynamic typing, no final by default
age = 20                    # int
price = 99.99               # float
name = "Alice"              # str
flag = True                 # bool (capital T/F)
MAX: int = 100              # type hint (optional, not enforced)

# type() to check
print(type(age))            # <class 'int'>
```

### Type conversion

```java
int x = Integer.parseInt("42");
double y = Double.parseDouble("3.14");
String z = String.valueOf(100);
```

```python
x = int("42")
y = float("3.14")
z = str(100)
```

### None vs null

```java
String s = null;
```

```python
s = None
```

---

## 3. Basic I/O

```java
// Java
Scanner sc = new Scanner(System.in);
String name = sc.nextLine();
int age = sc.nextInt();
System.out.println("Name: " + name);
```

```python
# Python
name = input("Enter name: ")      # always returns str
age = int(input("Enter age: "))
print("Name:", name)               # automatic space separator
print(f"Name: {name}, Age: {age}") # f-string (preferred)
```

---

## 4. Strings

```java
// Java
String s = "hello";
int len = s.length();
char c = s.charAt(0);
String sub = s.substring(1, 3);
String upper = s.toUpperCase();
boolean eq = s.equals("hello");
String[] parts = "a,b,c".split(",");
String joined = String.join("-", parts);
```

```python
# Python
s = "hello"
length = len(s)                 # len() function, not method
c = s[0]                        # indexing like array
sub = s[1:3]                    # slicing [start:end] (end exclusive)
upper = s.upper()
eq = s == "hello"               # direct == comparison (no .equals())
parts = "a,b,c".split(",")
joined = "-".join(parts)        # join is str method, not list

# Negative indexing (not in Java)
last = s[-1]                    # 'o'

# Multi-line strings
s = """This is
a multi-line
string"""
```

---

## 5. Lists (like Java ArrayList)

```java
// Java
import java.util.ArrayList;
ArrayList<String> list = new ArrayList<>();
list.add("a");
list.add("b");
list.add(0, "z");            // insert at index
String x = list.get(0);
list.set(0, "zz");
list.remove(0);
int size = list.size();
boolean has = list.contains("a");
```

```python
# Python list — dynamic array (mutable)
lst = ["a", "b"]
lst.append("c")               # add to end
lst.insert(0, "z")            # insert at index
x = lst[0]                    # get
lst[0] = "zz"                 # set
lst.pop(0)                    # remove at index (default last)
lst.remove("b")               # remove first matching value
len(lst)                      # size
"a" in lst                    # contains (boolean)
"a" not in lst                # not contains

# Additional list features
lst = [1, 2, 3, 4, 5]
sliced = lst[1:4]             # [2, 3, 4]
reversed = lst[::-1]          # [5, 4, 3, 2, 1]
combined = lst + [6, 7]       # concatenation
repeated = lst * 2            # [1,2,3,4,5,1,2,3,4,5]
```

### List vs ArrayList literal

```java
// Java — must use Arrays.asList or ArrayList
List<String> list = Arrays.asList("a", "b", "c");
```

```python
# Python — literal syntax
lst = ["a", "b", "c"]
```

---

## 6. Tuples (immutable — not in Java stdlib)

```python
t = (1, 2, 3)                 # tuple literal
t = 1, 2, 3                   # parentheses optional
x = t[0]                      # indexed access
# t[0] = 99                  # ERROR — immutable

# Unpacking (destructuring)
a, b, c = (1, 2, 3)          # a=1, b=2, c=3
a, *rest = (1, 2, 3, 4)      # a=1, rest=[2,3,4]

# Swap (no temp variable needed)
a, b = b, a
```

---

## 7. Dictionaries (like Java HashMap)

```java
// Java
import java.util.HashMap;
HashMap<String, Integer> map = new HashMap<>();
map.put("age", 25);
int val = map.get("age");
map.containsKey("age");
map.remove("age");
```

```python
d = {"name": "Alice", "age": 25}
d["age"] = 26                 # set
x = d["age"]                  # get (KeyError if missing)
x = d.get("age")              # safe get — returns None if missing
x = d.get("age", 0)           # safe get with default
"age" in d                    # key exists
del d["age"]                  # delete key
d.pop("age")                  # delete and return value

# Iteration
for k in d:                   # keys
for k, v in d.items():        # key-value pairs

# Dictionary literal vs Java
# Java: Map.of("a", 1, "b", 2)  or  HashMap<>() + .put()
# Python:
d = {"a": 1, "b": 2}
```

---

## 8. Conditionals

```java
// Java
if (x > 0) {
    System.out.println("positive");
} else if (x == 0) {
    System.out.println("zero");
} else {
    System.out.println("negative");
}

// switch
switch (day) {
    case 1: System.out.println("Mon"); break;
    case 2: System.out.println("Tue"); break;
    default: System.out.println("Other");
}
```

```python
# Python — no switch/match (3.10+ has match)
if x > 0:
    print("positive")                 # no parentheses needed
elif x == 0:
    print("zero")
else:
    print("negative")

# Ternary
result = "even" if x % 2 == 0 else "odd"

# Match-case (Python 3.10+, similar to switch)
match day:
    case 1:
        print("Mon")
    case 2:
        print("Tue")
    case _:                           # default
        print("Other")
```

### Logical operators

```java
// Java
if (a > 0 && b < 10 || c == 5) {}
```

```python
if a > 0 and b < 10 or c == 5:    # words not symbols
# and, or, not   (not &&, ||, !)
```

---

## 9. Loops

```java
// Java — for, for-each, while
for (int i = 0; i < 10; i++) {}
for (int x : arr) {}
while (i < 10) {}
do {} while (i < 10);
```

```python
# Python — for-in, while

# Range-based for (like Java's C-style for)
for i in range(10):          # 0 to 9
for i in range(2, 10):       # 2 to 9
for i in range(2, 10, 3):    # 2, 5, 8  (step)

# For-each
for x in lst:                # any iterable
for c in "hello":            # strings are iterable

# While
i = 0
while i < 10:
    i += 1

# No do-while in Python

# Enumerate (index + value — common pattern)
for idx, val in enumerate(lst):
    print(idx, val)

# zip (parallel iteration)
names = ["a", "b", "c"]
scores = [90, 85, 95]
for name, score in zip(names, scores):
    print(name, score)
```

### break / continue / else on loops

```python
for x in range(10):
    if x == 5:
        break                 # same as Java
    if x % 2 == 0:
        continue              # same as Java

# else on loop — runs if no break occurred
for x in range(10):
    if x == 99:
        break
else:
    print("No break occurred")  # WILL print because 99 not in range
```

---

## 10. Functions

```java
// Java — always inside a class
public static int add(int a, int b) {
    return a + b;
}
// Method overloading
public static int add(int a, int b, int c) { ... }
```

```python
# Python — standalone functions (no class needed)
def add(a, b):
    return a + b

# No overloading — use default args instead
def add(a, b, c=0):           # c defaults to 0
    return a + b + c

# Type hints (optional, for documentation only)
def add(a: int, b: int) -> int:
    return a + b

# Keyword arguments
def greet(name, greeting="Hello"):
    print(f"{greeting}, {name}")

greet("Alice")                # positional
greet(name="Bob", greeting="Hi")  # keyword
greet("Charlie", "Hey")       # positional

# Variable arguments
def sum_all(*args):           # *args = tuple of positional args
    return sum(args)

def print_kw(**kwargs):       # **kwargs = dict of keyword args
    for k, v in kwargs.items():
        print(k, v)

# Lambda (anonymous function — like Java lambda)
square = lambda x: x ** 2
print(square(5))              # 25

# Lambda in map/filter
nums = [1, 2, 3, 4]
squared = list(map(lambda x: x**2, nums))
evens = list(filter(lambda x: x % 2 == 0, nums))
```

### Python's multiple return values (not possible in Java)

```python
def min_max(lst):
    return min(lst), max(lst)  # returns a tuple

low, high = min_max([3, 1, 4, 1, 5])
```

---

## 11. Classes & Objects

```java
// Java
public class Person {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public void display() {
        System.out.println(name + " (" + age + ")");
    }
}
Person p = new Person("Alice", 25);
```

```python
class Person:
    def __init__(self, name, age):      # constructor
        self.name = name                # self replaces this
        self.age = age                  # public by default

    def display(self):
        print(f"{self.name} ({self.age})")

p = Person("Alice", 25)                 # no 'new' keyword
```

### Access modifiers

```java
// Java — private, protected, public
private int x;
public void foo() {}
```

```python
# Python — no true private. Convention only
_x = 10           # "protected" by convention (single underscore)
__x = 20          # "private" — name mangling to _ClassName__x
__x__ = 30        # dunder — magic methods, not private
```

### Properties (getters/setters — Java style vs Pythonic)

```java
// Java — explicit getters/setters
private String name;
public String getName() { return name; }
public void setName(String name) { this.name = name; }
```

```python
# Python — direct attribute access (preferred)
p.name = "Bob"
print(p.name)

# Or @property for controlled access
class Person:
    def __init__(self, name):
        self._name = name

    @property
    def name(self):              # getter
        return self._name

    @name.setter
    def name(self, value):       # setter
        if not value:
            raise ValueError("Name cannot be empty")
        self._name = value
```

### Class variables vs instance variables

```java
// Java
public class Counter {
    public static int count = 0;   // class variable
    public int id;                  // instance variable
}
```

```python
class Counter:
    count = 0                      # class variable (shared)

    def __init__(self):
        self.id = Counter.count     # instance variable
        Counter.count += 1
```

### Methods: instance, class, static

```python
class MyClass:
    def instance_method(self):      # operates on instance
        return self

    @classmethod
    def class_method(cls):          # operates on class
        return cls

    @staticmethod
    def static_method():            # no self or cls
        return "static"

# @classmethod has access to class (like Java static that accesses class)
# @staticmethod has no access (like Java static utility)
```

### Magic (dunder) methods — Java has no equivalent

```python
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __str__(self):              # like toString()
        return f"Point({self.x}, {self.y})"

    def __repr__(self):             # unambiguous representation
        return f"Point({self.x!r}, {self.y!r})"

    def __eq__(self, other):        # like equals()
        return self.x == other.x and self.y == other.y

    def __add__(self, other):       # like + operator
        return Point(self.x + other.x, self.y + other.y)

    def __len__(self):              # len() support
        return abs(self.x - self.y)

p1 = Point(1, 2)
p2 = Point(1, 2)
print(p1)                           # calls __str__
print(p1 == p2)                     # calls __eq__
print(p1 + Point(3, 4))             # calls __add__
```

---

## 12. Inheritance

```java
// Java
public class Animal {
    public void speak() {
        System.out.println("...");
    }
}
public class Dog extends Animal {
    @Override
    public void speak() {
        System.out.println("Woof");
    }
}
```

```python
class Animal:
    def speak(self):
        print("...")

class Dog(Animal):                  # parentheses for inheritance
    def speak(self):                # automatic override
        print("Woof")

# super()
class Dog(Animal):
    def speak(self):
        super().speak()             # call parent
        print("Woof")
```

### Multiple inheritance (not supported in Java)

```python
class A:
    def foo(self): print("A")

class B:
    def bar(self): print("B")

class C(A, B):                      # multiple inheritance
    pass

c = C()
c.foo()                             # from A
c.bar()                             # from B
```

### Abstract classes

```java
// Java
abstract class Shape {
    abstract double area();
}
```

```python
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass
```

### Interfaces vs Protocols

```java
// Java
interface Drawable {
    void draw();
}
```

```python
# Python has no interface keyword.
# Use ABC (like above) or Protocol (duck typing)

from typing import Protocol

class Drawable(Protocol):
    def draw(self): ...

# Anything with .draw() method satisfies the protocol
```

---

## 13. Exception Handling

```java
// Java
try {
    int x = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println(e.getMessage());
} finally {
    System.out.println("cleanup");
}
```

```python
try:
    x = 10 / 0
except ZeroDivisionError as e:        # as replaces Java's catch(e)
    print(e)
finally:
    print("cleanup")

# Multiple excepts
try:
    n = int(input())
    x = 10 / n
except ValueError:
    print("Not a number")
except ZeroDivisionError:
    print("Can't divide by zero")
except Exception as e:                # catch-all (use sparingly)
    print(f"Unexpected: {e}")

# else clause — runs if no exception (not in Java)
try:
    x = int("42")
except ValueError:
    print("error")
else:
    print("Success!")                  # runs only if no exception

# Raise exception (like throw)
raise ValueError("Invalid value")

# Custom exception
class MyError(Exception):
    pass

raise MyError("Something went wrong")
```

---

## 14. File I/O

```java
// Java
import java.nio.file.*;
Path path = Paths.get("file.txt");
String content = Files.readString(path);
Files.writeString(path, "Hello");
```

```python
# Python — with statement (auto-close, like Java try-with-resources)
with open("file.txt", "r") as f:
    content = f.read()

with open("file.txt", "w") as f:
    f.write("Hello")

# Modes
# "r"  — read (default)
# "w"  — write (overwrite)
# "a"  — append
# "r+" — read+write
# "rb" — binary read
# "wb" — binary write

# Read line by line
with open("file.txt") as f:
    for line in f:
        print(line.strip())           # strip removes \n

# Read to list
lines = open("file.txt").readlines()

# Write with newline
with open("file.txt", "w") as f:
    f.writelines([f"{line}\n" for line in ["a", "b", "c"]])
```

---

## 15. Modules & Imports

```java
// Java
import java.util.List;
import java.util.ArrayList;
import static java.lang.Math.*;
```

```python
# Python
import math                          # import whole module
import math as m                     # with alias
from math import sqrt, pi            # specific names
from math import *                   # import all (use sparingly)

# Creating a module — just a .py file
# mymodule.py:
#   def greet(name): return f"Hello {name}"
# main.py:
#   import mymodule
#   print(mymodule.greet("Alice"))

# __name__ guard (equivalent to Java's public static void main)
# file: mymodule.py
def main():
    print("Running directly")

if __name__ == "__main__":           # only runs when executed directly
    main()
```

### Common built-in modules (Java stdlib equivalents)

```python
import math                          # Math
import random                        # Random
import os                            # File/IO, System
import sys                           # System
import json                          # JSON parsing
import re                            # Regex (java.util.regex)
import datetime                      # java.time
from collections import deque        # Deque, Stack
from pathlib import Path             # java.nio.file.Path
import csv                           # CSV parsing
import sqlite3                       # JDBC lite
```

---

## 16. List Comprehension (Python-only — no Java equivalent)

```python
# [expression for item in iterable if condition]

# Basic
squares = [x**2 for x in range(10)]          # [0, 1, 4, 9, ...]

# With condition
evens = [x for x in range(20) if x % 2 == 0]

# Nested
matrix = [[i+j for j in range(3)] for i in range(3)]

# Dictionary comprehension
squares_dict = {x: x**2 for x in range(5)}   # {0:0, 1:1, 2:4, 3:9, 4:16}

# Set comprehension
squares_set = {x**2 for x in [1, 2, 2, 3]}   # {1, 4, 9}

# Generator expression (lazy — like Java streams)
# (expression not list)
sum_of_squares = sum(x**2 for x in range(10))
```

### Java equivalent (streams)

```java
// Java
List<Integer> evens = IntStream.range(0, 20)
    .filter(x -> x % 2 == 0)
    .boxed()
    .collect(Collectors.toList());
```

```python
# Python
evens = [x for x in range(20) if x % 2 == 0]
```

---

## 17. Sets

```python
s = {1, 2, 3, 3}                    # {1, 2, 3} — no duplicates
s = set([1, 2, 3])                  # from list

s.add(4)
s.remove(2)                         # KeyError if missing
s.discard(2)                        # no error if missing
1 in s                              # contains
len(s)                              # size

# Operations
a = {1, 2, 3}
b = {3, 4, 5}
a | b                               # union:      {1,2,3,4,5}
a & b                               # intersect:  {3}
a - b                               # difference: {1,2}
a ^ b                               # sym diff:   {1,2,4,5}
```

---

## 18. Common Patterns / Gotchas

### Indentation instead of braces

```python
# Java: { }  define blocks
# Python: indentation (4 spaces by convention)

if True:
    print("inside")            # 4 spaces
    if False:
        print("nested")        # 8 spaces
print("outside")               # 0 spaces — back to top level
```

### No ++ or --

```python
x = 5
x += 1                         # x = x + 1
x -= 1                         # x = x - 1
# x++  — SyntaxError
```

### No switch (until 3.10)

```python
# Pre-3.10: use if-elif-else or dict
def get_day(n):
    days = {1: "Mon", 2: "Tue", 3: "Wed"}
    return days.get(n, "Invalid")
```

### Ternary is different

```java
// Java
int max = (a > b) ? a : b;
```

```python
max = a if a > b else b
```

### Equality

```java
// Java
s1.equals(s2)      // value equality
s1 == s2            // reference equality
```

```python
# Python
s1 == s2            # value equality (equivalent to .equals())
s1 is s2            # reference equality (equivalent to ==)
```

### Truthiness

```python
# These are all False in boolean context:
False, None, 0, 0.0, "", [], (), {}, set()

# Any non-empty string, non-zero number, non-empty collection is True
if "":                 # False
if []:                 # False
if "hello":            # True
if [1, 2]:             # True
```

### Variable scope (no block scope)

```python
# Java: variables declared in block are scoped to block
# Python: function scope only

if True:
    x = 10               # x exists outside the 'if'
print(x)                 # 10 — NO ERROR
```

### Pass by assignment

```python
# Java: primitives by value, objects by reference
# Python: everything is "pass by object reference"
# Immutable types (int, str, tuple) behave like by-value
# Mutable types (list, dict) behave like by-reference

def mutate(lst):
    lst.append(4)

x = [1, 2, 3]
mutate(x)
print(x)                 # [1, 2, 3, 4] — modified

def reassign(x):
    x = 99               # local reassignment only

n = 10
reassign(n)
print(n)                 # 10 — NOT modified
```

---

## 19. Useful Built-in Functions

```python
len()                     # length of collection/string
type()                    # type of object
int(), float(), str()     # type conversion
input(), print()          # I/O
range()                   # generate number sequence
enumerate()               # index + value iteration
zip()                     # parallel iteration
map(), filter()           # transformations (returns iterators)
sorted()                  # returns sorted list
reversed()                # reverse iterator
sum(), min(), max()       # aggregation
abs()                     # absolute value
round()                   # rounding
any(), all()              # boolean aggregation
isinstance()              # instanceof
hasattr()                 # has property/method
getattr()                 # get property dynamically
open()                    # file I/O
```

---

## 20. Virtual Environment (pip vs Maven/Gradle)

```bash
# Java: Maven/Gradle manage dependencies
# Python: pip + venv

# Create virtual environment
python -m venv .venv

# Activate
.venv\Scripts\activate     # Windows
source .venv/bin/activate  # Mac/Linux

# Install packages
pip install requests
pip install -r requirements.txt

# Freeze current packages
pip freeze > requirements.txt
```

---

## 21. Running Python

```bash
# Java: compile + run
javac Main.java && java Main

# Python: interpreted (no compile step)
python script.py

# Interactive mode (like JShell)
python

# Shebang line (Unix)
# file.py:
#!/usr/bin/env python3
# chmod +x file.py && ./file.py
```

---

## 22. Common Data Structure Equivalence

| Operation | Java | Python |
|---|---|---|
| Array (fixed) | `int[] arr = new int[5]` | `arr = [0]*5` or `array.array('i', [0]*5)` |
| Dynamic array | `ArrayList<Integer>` | `list` |
| Linked list | `LinkedList<Integer>` | `collections.deque` |
| Stack | `Stack<Integer>` | `list` (append/pop) or `deque` |
| Queue | `Queue<Integer>` / `LinkedList` | `collections.deque` (popleft) |
| HashMap | `HashMap<K,V>` | `dict` |
| TreeMap | `TreeMap<K,V>` | `None` (use `sortedcontainers` or sort manually) |
| HashSet | `HashSet<K>` | `set` |
| TreeSet | `TreeSet<K>` | `None` (use `sortedcontainers` or sort manually) |
| PriorityQueue | `PriorityQueue<E>` | `heapq` module |
| StringBuilder | `StringBuilder` | `''.join(list)` or `io.StringIO` |
| Optional | `Optional<T>` | `None` (idiomatic) or `Optional` from `typing` |

---

## 23. Slicing Deep Dive

```python
# sequence[start:stop:step]
s = "abcdefg"

s[0:3]              # "abc"    — start at 0, stop before 3
s[:3]               # "abc"    — start defaults to 0
s[3:]               # "defg"   — stop defaults to end
s[::-1]             # "gfedcba" — full reverse
s[::2]              # "aceg"   — every 2nd
s[1::2]             # "bdf"    — every 2nd from index 1
s[-3:]              # "efg"    — last 3 chars
s[:-3]              # "abcd"   — all but last 3
s[-1::-1]           # "gfedcba" — same as [::-1]
```

---

## 24. Context Managers (try-with-resources equivalent)

```java
// Java try-with-resources
try (BufferedReader br = new BufferedReader(new FileReader("f.txt"))) {
    // auto-closed
}
```

```python
# Python with statement
with open("f.txt") as f:       # auto-closed after block
    content = f.read()

# Custom context manager
class ManagedResource:
    def __enter__(self):
        print("Acquiring resource")
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        print("Releasing resource")
        return False              # don't suppress exceptions

with ManagedResource() as r:
    print("Using resource")
```

---

## 25. Decorators (Python-only — no Java equivalent)

```python
# Decorator = function that wraps another function
def log(func):
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__}")
        return func(*args, **kwargs)
    return wrapper

@log                              # syntactic sugar
def add(a, b):
    return a + b

# Equivalent to: add = log(add)
print(add(2, 3))                  # prints "Calling add" then 5

# Decorator with args
def repeat(n):
    def decorator(func):
        def wrapper(*args, **kwargs):
            for _ in range(n):
                func(*args, **kwargs)
        return wrapper
    return decorator

@repeat(3)
def say_hi():
    print("Hi")

say_hi()                          # prints "Hi" 3 times
```

---

## 26. Generators

```python
# Generator = function that yields values (lazy)
# Like Java's Iterator but simpler

def count_up_to(n):
    i = 0
    while i < n:
        yield i                  # like return but resumes next call
        i += 1

for x in count_up_to(5):
    print(x)                     # 0, 1, 2, 3, 4

# Generator expression
squares = (x**2 for x in range(10))  # lazy — use (), not []
```

---

## 27. Walrus Operator := (Python 3.8+)

```python
# Assign within expression — no Java equivalent

# Without walrus:
data = input("> ")
while data != "quit":
    print(data)
    data = input("> ")

# With walrus:
while (data := input("> ")) != "quit":
    print(data)
```

---

## 28. JSON (no separate library needed)

```python
import json

# Python dict → JSON string
data = {"name": "Alice", "scores": [90, 85]}
json_str = json.dumps(data, indent=2)

# JSON string → Python dict
parsed = json.loads(json_str)

# File I/O with JSON
with open("data.json", "w") as f:
    json.dump(data, f, indent=2)

with open("data.json") as f:
    data = json.load(f)
```

---

## 29. Command Line Arguments

```java
// Java
public static void main(String[] args) {
    String first = args[0];
}
```

```python
import sys
first = sys.argv[1]               # sys.argv[0] is script name

# Better: argparse
import argparse
parser = argparse.ArgumentParser()
parser.add_argument("--name", required=True)
parser.add_argument("--count", type=int, default=1)
args = parser.parse_args()
print(args.name)
```

---

## 30. Common Mistakes Java Programmers Make

```python
# 1. Forgetting colon after if/for/while/def/class
if x > 0:           # ← colon required
    pass

# 2. Mixing tabs and spaces (use spaces only)
#    Python enforces consistent indentation

# 3. Using == for None comparison (use is)
x = None
if x is None:       # correct
if x == None:       # works but not idiomatic

# 4. Modifying list while iterating
lst = [1, 2, 3, 4]
for x in lst:
    if x == 2:
        lst.remove(x)     # BAD — skips elements
# Instead:
lst = [x for x in lst if x != 2]  # correct

# 5. Thinking string concatenation is efficient
s = ""
for x in range(1000):
    s += str(x)           # BAD — O(n²)
# Instead:
parts = [str(x) for x in range(1000)]
s = "".join(parts)        # O(n)

# 6. Mutable default arguments
def bad(lst=[]):          # BAD — list is shared across calls
    lst.append(1)
    return lst

def good(lst=None):       # correct
    if lst is None:
        lst = []
    lst.append(1)
    return lst

# 7. Confusing 'is' with '=='
a = [1, 2, 3]
b = [1, 2, 3]
a == b                    # True (same values)
a is b                    # False (different objects)
```

---

## Quick Reference Card

```python
# === PRINT ===
print("Hello")
print(f"Value: {x}")
print(a, b, c, sep=", ", end="\n")

# === VARIABLES ===
x = 10                     # no type declaration
name: str = "Alice"        # type hint (ignored at runtime)

# === TYPES ===
int, float, str, bool, NoneType
list, tuple, dict, set, frozenset

# === CONDITIONALS ===
if x > 0:
    ...
elif x == 0:
    ...
else:
    ...

# === LOOPS ===
for i in range(10):
for item in iterable:
for i, item in enumerate(iterable):
while condition:

# === FUNCTIONS ===
def name(param1, param2=default, *args, **kwargs):
    return value

# === CLASSES ===
class MyClass(Parent):
    def __init__(self, arg):
        self.attr = arg

# === LIST OPERATIONS ===
lst.append(x)
lst.insert(i, x)
lst.pop(i)
lst.remove(x)
x in lst
len(lst)
lst[i]
lst[i:j:k]

# === DICT OPERATIONS ===
d[key] = value
d.get(key, default)
key in d
del d[key]
d.pop(key)

# === COMPREHENSION ===
[x for x in iterable if condition]
{k: v for k, v in iterable}

# === FILE I/O ===
with open(path, mode) as f:
    f.read()
    f.write(data)
    for line in f:

# === EXCEPTIONS ===
try:
    ...
except SomeError as e:
    ...
else:                    # runs if no exception
    ...
finally:
    ...

# === IMPORTING ===
import module
from module import name
import module as alias

# === KEY OPERATORS ===
+, -, *, /, //, %, **    # arithmetic
==, !=, <, >, <=, >=     # comparison
and, or, not             # logical
is, is not               # identity
in, not in               # membership
&, |, ^, ~, <<, >>       # bitwise

# === BUILT-IN TYPES AS FUNCTIONS ===
int(), float(), str(), bool(), list(), tuple(), dict(), set()
```

---

---

## 31. Recursion

```python
# Factorial
def fact(n):
    return 1 if n <= 1 else n * fact(n - 1)

print(fact(5))                      # 120

# Fibonacci
def fib(n):
    return n if n <= 1 else fib(n - 1) + fib(n - 2)

print(fib(10))                      # 55

# Fibonacci with memoization (caching)
from functools import lru_cache

@lru_cache(maxsize=None)
def fib_memo(n):
    return n if n <= 1 else fib_memo(n - 1) + fib_memo(n - 2)

print(fib_memo(100))                # 354224848179261915075

# Sum of list
def sum_list(lst):
    return 0 if not lst else lst[0] + sum_list(lst[1:])

# Binary search (recursive)
def binary_search(arr, target, lo=0, hi=None):
    if hi is None:
        hi = len(arr) - 1
    if lo > hi:
        return -1
    mid = (lo + hi) // 2
    if arr[mid] == target:
        return mid
    if arr[mid] > target:
        return binary_search(arr, target, lo, mid - 1)
    return binary_search(arr, target, mid + 1, hi)

arr = [1, 3, 5, 7, 9, 11]
print(binary_search(arr, 7))        # 3

# Tower of Hanoi
def hanoi(n, src, aux, dest):
    if n == 1:
        print(f"Move disk 1 from {src} to {dest}")
        return
    hanoi(n - 1, src, dest, aux)
    print(f"Move disk {n} from {src} to {dest}")
    hanoi(n - 1, aux, src, dest)

hanoi(3, "A", "B", "C")
# Output:
# Move disk 1 from A to C
# Move disk 2 from A to B
# Move disk 1 from C to B
# Move disk 3 from A to C
# Move disk 1 from B to A
# Move disk 2 from B to C
# Move disk 1 from A to C
```

---

## 32. Sorting Algorithms

```python
# Bubble Sort — O(n²)
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr

print(bubble_sort([64, 34, 25, 12, 22, 11, 90]))
# [11, 12, 22, 25, 34, 64, 90]

# Selection Sort — O(n²)
def selection_sort(arr):
    n = len(arr)
    for i in range(n):
        min_idx = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr

print(selection_sort([29, 10, 14, 37, 13]))
# [10, 13, 14, 29, 37]

# Insertion Sort — O(n²)
def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and key < arr[j]:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
    return arr

print(insertion_sort([12, 11, 13, 5, 6]))
# [5, 6, 11, 12, 13]

# Merge Sort — O(n log n)
def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    result.extend(left[i:])
    result.extend(right[j:])
    return result

print(merge_sort([38, 27, 43, 3, 9, 82, 10]))
# [3, 9, 10, 27, 38, 43, 82]

# Quick Sort — O(n log n) average
def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[0]
    left = [x for x in arr[1:] if x <= pivot]
    right = [x for x in arr[1:] if x > pivot]
    return quick_sort(left) + [pivot] + quick_sort(right)

print(quick_sort([10, 7, 8, 9, 1, 5]))
# [1, 5, 7, 8, 9, 10]

# Python's built-in sort (TimSort — O(n log n))
arr = [3, 1, 4, 1, 5, 9, 2, 6]
arr.sort()                           # in-place
sorted_arr = sorted(arr)             # returns new list

# Sort with key
words = ["banana", "apple", "cherry", "date"]
words.sort(key=len)                  # sort by length
print(words)                         # ['date', 'apple', 'banana', 'cherry']

# Sort descending
arr.sort(reverse=True)

# Custom key
students = [("Alice", 85), ("Bob", 72), ("Charlie", 95)]
students.sort(key=lambda s: s[1], reverse=True)
print(students)                      # [('Charlie', 95), ('Alice', 85), ('Bob', 72)]
```

---

## 33. Searching Algorithms

```python
# Linear Search — O(n)
def linear_search(arr, target):
    for i, val in enumerate(arr):
        if val == target:
            return i
    return -1

print(linear_search([4, 2, 7, 1, 9], 7))    # 2

# Binary Search (iterative) — O(log n)
def binary_search_iter(arr, target):
    lo, hi = 0, len(arr) - 1
    while lo <= hi:
        mid = (lo + hi) // 2
        if arr[mid] == target:
            return mid
        if arr[mid] < target:
            lo = mid + 1
        else:
            hi = mid - 1
    return -1

print(binary_search_iter([1, 3, 5, 7, 9], 7))  # 3

# Interpolation Search — O(log log n) for uniform data
def interpolation_search(arr, target):
    lo, hi = 0, len(arr) - 1
    while lo <= hi and arr[lo] <= target <= arr[hi]:
        if lo == hi:
            return lo if arr[lo] == target else -1
        pos = lo + ((target - arr[lo]) * (hi - lo)) // (arr[hi] - arr[lo])
        if arr[pos] == target:
            return pos
        if arr[pos] < target:
            lo = pos + 1
        else:
            hi = pos - 1
    return -1

arr = [10, 20, 30, 40, 50, 60, 70, 80, 90]
print(interpolation_search(arr, 70))   # 6
```

---

## 34. itertools — Iterator Tools (Python's streams on steroids)

```python
import itertools

# count — infinite counter
for i in itertools.count(10, 2):       # 10, 12, 14, ...
    if i > 20:
        break

# cycle — infinite cycle
colors = itertools.cycle(["red", "green", "blue"])
for _ in range(5):
    print(next(colors))                # red, green, blue, red, green

# repeat
for x in itertools.repeat("hello", 3): # hello, hello, hello

# chain — concatenate iterables
combined = itertools.chain([1, 2], [3, 4], [5])
print(list(combined))                  # [1, 2, 3, 4, 5]

# combinations — all r-length tuples without replacement
combo = itertools.combinations("ABC", 2)
print(list(combo))                     # [('A','B'), ('A','C'), ('B','C')]

# permutations — all r-length tuples with order
perm = itertools.permutations("ABC", 2)
print(list(perm))                      # [('A','B'), ('A','C'), ('B','A'), ('B','C'), ('C','A'), ('C','B')]

# product — Cartesian product (nested loops)
prod = itertools.product("AB", "12")
print(list(prod))                      # [('A','1'), ('A','2'), ('B','1'), ('B','2')]

# combinations_with_replacement
combo_r = itertools.combinations_with_replacement("ABC", 2)
print(list(combo_r))                   # [('A','A'), ('A','B'), ('A','C'), ('B','B'), ('B','C'), ('C','C')]

# groupby — group consecutive elements by key
data = [("A", 1), ("A", 2), ("B", 3), ("B", 4)]
for key, group in itertools.groupby(data, lambda x: x[0]):
    print(key, list(group))            # A [('A',1),('A',2)]  B [('B',3),('B',4)]

# accumulate — running sum (or any binary op)
import operator
vals = [1, 2, 3, 4, 5]
acc = itertools.accumulate(vals)
print(list(acc))                       # [1, 3, 6, 10, 15]

acc_mul = itertools.accumulate(vals, operator.mul)
print(list(acc_mul))                   # [1, 2, 6, 24, 120]

# compress — filter by selector
data = [1, 2, 3, 4, 5]
selectors = [1, 0, 1, 0, 1]
result = itertools.compress(data, selectors)
print(list(result))                    # [1, 3, 5]

# takewhile / dropwhile
vals = [1, 2, 3, 4, 5, 1, 2]
taken = itertools.takewhile(lambda x: x < 4, vals)
print(list(taken))                     # [1, 2, 3]

dropped = itertools.dropwhile(lambda x: x < 4, vals)
print(list(dropped))                   # [4, 5, 1, 2]

# filterfalse — opposite of filter
from itertools import filterfalse
evens = list(filterfalse(lambda x: x % 2, [1, 2, 3, 4, 5]))
print(evens)                           # [2, 4]

# starmap — map with unpacked arguments
data = [(2, 3), (4, 5), (6, 7)]
result = itertools.starmap(lambda a, b: a * b, data)
print(list(result))                    # [6, 20, 42]

# tee — split a single iterator into n
it = iter([1, 2, 3, 4])
it1, it2 = itertools.tee(it, 2)
print(list(it1))                       # [1, 2, 3, 4]
print(list(it2))                       # [1, 2, 3, 4]

# islice — slice an iterator
vals = iter(range(10))
sliced = itertools.islice(vals, 2, 8, 2)
print(list(sliced))                    # [2, 4, 6]
```

---

## 35. collections — Specialized Data Structures

```python
from collections import Counter, defaultdict, OrderedDict, deque, namedtuple

# Counter — count hashable objects
cnt = Counter("mississippi")
print(cnt)                             # Counter({'i': 4, 's': 4, 'p': 2, 'm': 1})
print(cnt.most_common(2))              # [('i', 4), ('s', 4)]

cnt.update("miss")                     # add more
print(cnt["x"])                        # 0 (no KeyError)

# defaultdict — dict with default factory
dd = defaultdict(int)                  # default 0
dd["a"] += 1
print(dd["a"])                         # 1
print(dd["b"])                         # 0 (automatically created)

dd_list = defaultdict(list)
dd_list["students"].append("Alice")
dd_list["students"].append("Bob")
print(dd_list["students"])             # ['Alice', 'Bob']

# OrderedDict — remembers insertion order (Python 3.7+ dict does too)
od = OrderedDict()
od["a"] = 1
od["b"] = 2
od["c"] = 3
od.move_to_end("a")                    # move 'a' to end
print(list(od.keys()))                 # ['b', 'c', 'a']

# deque — double-ended queue (like LinkedList)
dq = deque([1, 2, 3])
dq.append(4)                           # add to right
dq.appendleft(0)                       # add to left
dq.pop()                               # remove from right
dq.popleft()                           # remove from left
dq.rotate(1)                           # rotate right
dq.rotate(-1)                          # rotate left
print(dq)

# namedtuple — lightweight immutable class (no Java equivalent)
Point = namedtuple("Point", ["x", "y"])
p = Point(10, 20)
print(p.x, p.y)                        # 10 20
print(p[0])                            # 10 (also indexable)
x, y = p                               # unpackable

# namedtuple with defaults
Employee = namedtuple("Employee", ["name", "age", "role"])
emp = Employee("Alice", 30, "Engineer")
print(emp.name)                        # Alice
emp_dict = emp._asdict()               # {'name': 'Alice', 'age': 30, 'role': 'Engineer'}

# ChainMap — combine multiple dicts
from collections import ChainMap
d1 = {"a": 1, "b": 2}
d2 = {"b": 3, "c": 4}
chain = ChainMap(d1, d2)
print(chain["a"])                      # 1 (from d1)
print(chain["b"])                      # 2 (d1 wins — first match)
print(chain["c"])                      # 4 (from d2)
chain["d"] = 5                         # only affects d1
```

---

## 36. datetime — Date and Time

```java
// Java
import java.time.*;
LocalDate today = LocalDate.now();
LocalDate date = LocalDate.of(2024, 1, 15);
int year = date.getYear();
String formatted = date.format(DateTimeFormatter.ofPattern("yyyy-MM-dd"));
```

```python
from datetime import date, time, datetime, timedelta, timezone

# Current date/time
today = date.today()                   # 2024-01-15
now = datetime.now()                   # 2024-01-15 14:30:00.123456
utc_now = datetime.now(timezone.utc)

# Create specific date
d = date(2024, 1, 15)
dt = datetime(2024, 1, 15, 14, 30, 0)

# Access components
print(dt.year, dt.month, dt.day)       # 2024 1 15
print(dt.hour, dt.minute, dt.second)   # 14 30 0
print(dt.weekday())                    # 0=Monday, 6=Sunday

# Formatting (strftime)
print(dt.strftime("%Y-%m-%d"))         # 2024-01-15
print(dt.strftime("%d/%m/%Y %H:%M"))   # 15/01/2024 14:30
print(dt.strftime("%A, %B %d"))        # Monday, January 15

# Parsing (strptime)
dt = datetime.strptime("2024-01-15", "%Y-%m-%d")
dt = datetime.strptime("15/01/2024 14:30", "%d/%m/%Y %H:%M")

# Time deltas (difference between dates)
today = date.today()
future = date(2025, 6, 1)
diff = future - today
print(diff.days)                       # number of days
print(diff.total_seconds())            # total seconds

# Adding/subtracting time
from datetime import timedelta
tomorrow = today + timedelta(days=1)
next_week = today + timedelta(weeks=1)
next_hour = datetime.now() + timedelta(hours=1)
two_hours_ago = datetime.now() - timedelta(hours=2)

# Date comparison
if d1 < d2:
    print("d1 is earlier")

# ISO format
print(datetime.now().isoformat())      # 2024-01-15T14:30:00.123456
```

---

## 37. Regular Expressions (re)

```java
// Java
import java.util.regex.*;
Pattern p = Pattern.compile("\\d+");
Matcher m = p.matcher("abc123def");
if (m.find()) { String s = m.group(); }
String[] parts = "a1b2c3".split("\\d+");
String replaced = "hello".replaceAll("l", "x");
```

```python
import re

# Basic patterns
text = "My phone is 555-1234 and zip is 90210"

# search — find first match
match = re.search(r"\d+", text)
print(match.group())                   # 555

# findall — find all matches
nums = re.findall(r"\d+", text)
print(nums)                            # ['555', '1234', '90210']

# match — match at start of string
if re.match(r"My", text):
    print("Starts with My")

# fullmatch — entire string must match
if re.fullmatch(r"\d{5}", "90210"):
    print("Valid US zip")

# sub — replace
result = re.sub(r"\d", "X", text)
print(result)                          # My phone is XXX-XXXX and zip is XXXXX

# split
parts = re.split(r"\s+", "a b   c  d")
print(parts)                           # ['a', 'b', 'c', 'd']

# Compile for reuse
phone_re = re.compile(r"(\d{3})-(\d{4})")
match = phone_re.search("Call 555-1234 now")
print(match.group())                   # 555-1234
print(match.group(1))                  # 555
print(match.group(2))                  # 1234

# Common patterns
email_re = r"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
phone_re = r"\d{3}-\d{3}-\d{4}"
url_re = r"https?://[^\s]+"
ipv4_re = r"\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}"
date_re = r"\d{4}-\d{2}-\d{2}"

# Flags
re.findall(r"^hello", "Hello\nworld", re.IGNORECASE | re.MULTILINE)

# Groups and named groups
log = "ERROR 2024-01-15: Disk full"
pattern = r"(?P<level>\w+) (?P<date>\d{4}-\d{2}-\d{2}): (?P<msg>.+)"
match = re.search(pattern, log)
print(match.group("level"))            # ERROR
print(match.group("date"))             # 2024-01-15
print(match.group("msg"))              # Disk full

# Finditer — iterate over matches
text = "Today: 25°C, Tomorrow: 28°C, Yesterday: 22°C"
for match in re.finditer(r"(\d+)°C", text):
    print(f"Temp: {match.group(1)} at pos {match.start()}")
```

---

## 38. math & statistics Module

```python
import math
import statistics

# === math ===
print(math.pi)                         # 3.141592653589793
print(math.e)                          # 2.718281828459045
print(math.inf)                        # inf
print(math.nan)                        # nan

print(math.sqrt(16))                   # 4.0
print(math.pow(2, 10))                 # 1024.0
print(math.exp(2))                     # e²
print(math.log(100, 10))               # 2.0 (log base 10)
print(math.log(math.e))                # 1.0 (natural log)
print(math.log2(8))                    # 3.0
print(math.log10(1000))                # 3.0

print(math.ceil(3.2))                  # 4
print(math.floor(3.8))                 # 3
print(math.trunc(3.8))                 # 3
print(math.fabs(-5.5))                 # 5.5
print(math.factorial(5))               # 120

print(math.gcd(12, 18))                # 6
print(math.lcm(4, 6))                  # 12 (Python 3.9+)
print(math.isclose(0.1 + 0.2, 0.3))    # True (safe float comparison)

print(math.sin(math.pi / 2))           # 1.0
print(math.cos(0))                     # 1.0
print(math.tan(0))                     # 0.0
print(math.degrees(math.pi))           # 180.0
print(math.radians(180))               # 3.14159...

print(math.dist((1, 2), (4, 6)))       # 5.0 (Euclidean distance)
print(math.hypot(3, 4))                # 5.0 (sqrt(a²+b²))
print(math.perm(5, 2))                 # 20 (permutations)
print(math.comb(5, 2))                 # 10 (combinations)
print(math.prod([2, 3, 5]))            # 30 (product)

# === statistics ===
data = [2, 4, 4, 4, 5, 5, 7, 9]

print(statistics.mean(data))           # 5.0
print(statistics.median(data))         # 4.5
print(statistics.mode(data))           # 4
print(statistics.stdev(data))          # ~2.14 (sample standard deviation)
print(statistics.variance(data))       # ~4.57
print(statistics.quantiles(data, n=4)) # quartiles
```

---

## 39. Working with Files & Directories (os, shutil, pathlib)

```python
import os
import shutil
from pathlib import Path

# === os module ===
cwd = os.getcwd()                      # current working dir
os.chdir("..")                         # change dir
os.listdir(".")                        # list directory contents
os.mkdir("new_folder")                 # create directory
os.makedirs("a/b/c", exist_ok=True)    # create nested dirs

os.remove("file.txt")                  # delete file
os.rmdir("empty_dir")                  # delete empty directory
os.rename("old.txt", "new.txt")        # rename
os.path.exists("file.txt")             # True/False
os.path.isfile("file.txt")            # True/False
os.path.isdir("folder")               # True/False

# Path joining (cross-platform)
path = os.path.join("folder", "sub", "file.txt")

# File info
size = os.path.getsize("file.txt")
mtime = os.path.getmtime("file.txt")   # timestamp
from datetime import datetime
print(datetime.fromtimestamp(mtime))

# Walk directory tree
for root, dirs, files in os.walk("."):
    for f in files:
        print(os.path.join(root, f))

# === shutil ===
shutil.copy("src.txt", "dst.txt")      # copy file
shutil.copy2("src.txt", "dst.txt")     # copy with metadata
shutil.copytree("src_dir", "dst_dir")  # copy entire directory
shutil.move("src.txt", "dst.txt")      # move/rename
shutil.rmtree("dir_to_delete")         # delete directory tree
shutil.make_archive("archive", "zip", "dir")  # create zip
shutil.unpack_archive("archive.zip")   # extract zip

# === pathlib (modern, preferred) ===
p = Path("folder/sub/file.txt")

print(p.name)                          # file.txt
print(p.stem)                          # file (no extension)
print(p.suffix)                        # .txt
print(p.parent)                        # folder/sub
print(p.parents)                       # all parents [folder/sub, folder, .]
print(p.anchor)                        # root (C:\ on Windows, / on Linux)

p = Path("data") / "sub" / "file.txt"  # clean path joining
p.mkdir(parents=True, exist_ok=True)   # create dirs
p.touch()                              # create empty file
p.write_text("Hello World")            # write string
content = p.read_text()                # read string

p.write_bytes(b"binary")               # write bytes
content = p.read_bytes()               # read bytes

# Glob
for py_file in Path(".").glob("*.py"):
    print(py_file)

for all_py in Path(".").rglob("*.py"):  # recursive
    print(all_py)

# File info
print(p.stat().st_size)                # size in bytes
print(p.exists())
print(p.is_file())
print(p.is_dir())

# Rename
p.rename("new_name.txt")

# Delete
p.unlink()                             # delete file
p.rmdir()                              # delete empty dir

# Temp files
import tempfile
with tempfile.NamedTemporaryFile(delete=True) as tf:
    tf.write(b"temp data")
with tempfile.TemporaryDirectory() as td:
    print(td)                          # path to temp dir
```

---

## 40. SQLite Database

```java
// Java JDBC
Connection conn = DriverManager.getConnection("jdbc:sqlite:test.db");
Statement stmt = conn.createStatement();
stmt.execute("CREATE TABLE IF NOT EXISTS users (id INTEGER, name TEXT)");
stmt.executeUpdate("INSERT INTO users VALUES (1, 'Alice')");
ResultSet rs = stmt.executeQuery("SELECT * FROM users");
while (rs.next()) { rs.getInt("id"); rs.getString("name"); }
```

```python
import sqlite3

# Connect (creates file if not exists)
conn = sqlite3.connect("test.db")
cursor = conn.cursor()

# Create table
cursor.execute("""
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        age INTEGER,
        email TEXT UNIQUE
    )
""")
conn.commit()

# Insert
cursor.execute("INSERT INTO users (name, age, email) VALUES (?, ?, ?)",
               ("Alice", 25, "alice@example.com"))
conn.commit()
print(cursor.lastrowid)                # auto-generated id

# Insert many
users = [
    ("Bob", 30, "bob@example.com"),
    ("Charlie", 22, "charlie@example.com"),
]
cursor.executemany("INSERT INTO users (name, age, email) VALUES (?, ?, ?)", users)
conn.commit()

# Select
cursor.execute("SELECT * FROM users")
rows = cursor.fetchall()               # list of tuples
for row in rows:
    print(row)                         # (1, 'Alice', 25, 'alice@example.com')

# Single row
cursor.execute("SELECT * FROM users WHERE id = ?", (1,))
row = cursor.fetchone()
print(row)

# With condition
cursor.execute("SELECT * FROM users WHERE age > ?", (20,))

# Update
cursor.execute("UPDATE users SET age = ? WHERE name = ?", (26, "Alice"))
conn.commit()

# Delete
cursor.execute("DELETE FROM users WHERE id = ?", (3,))
conn.commit()

# Row count
print(cursor.rowcount)                 # number of affected rows

# Using Row factory (access by column name)
conn.row_factory = sqlite3.Row
cursor = conn.cursor()
cursor.execute("SELECT * FROM users")
for row in cursor:
    print(row["name"], row["age"])

# Safe from SQL injection — ALWAYS use ? placeholders
# NEVER do: f"SELECT * FROM users WHERE name = '{name}'"  ← BAD

# Close
conn.close()

# In-memory database (for testing)
conn = sqlite3.connect(":memory:")
```

---

## 41. CSV Files

```python
import csv

# Reading CSV
with open("data.csv", "r") as f:
    reader = csv.reader(f)
    header = next(reader)              # skip header row
    for row in reader:
        print(row)                     # ['Alice', '25', 'Engineer']

# Reading as dicts
with open("data.csv", "r") as f:
    reader = csv.DictReader(f)
    for row in reader:
        print(row["name"], row["age"]) # column names as keys

# Writing CSV
with open("output.csv", "w", newline="") as f:
    writer = csv.writer(f)
    writer.writerow(["name", "age", "role"])
    writer.writerow(["Alice", 25, "Engineer"])
    writer.writerows([
        ["Bob", 30, "Designer"],
        ["Charlie", 22, "Manager"],
    ])

# Writing as dicts
with open("output.csv", "w", newline="") as f:
    fields = ["name", "age", "role"]
    writer = csv.DictWriter(f, fieldnames=fields)
    writer.writeheader()
    writer.writerow({"name": "Alice", "age": 25, "role": "Engineer"})

# Custom delimiter (e.g., TSV)
with open("data.tsv", "r") as f:
    reader = csv.reader(f, delimiter="\t")

# Handling quotes
reader = csv.reader(f, quotechar='"', quoting=csv.QUOTE_MINIMAL)
```

---

## 42. Threading & Concurrency

```java
// Java
class MyThread extends Thread {
    public void run() { System.out.println("Running"); }
}
new MyThread().start();

// Runnable
new Thread(() -> System.out.println("Running")).start();
```

```python
import threading
import time

# Basic thread
def worker(name):
    print(f"{name} starting")
    time.sleep(1)
    print(f"{name} done")

t = threading.Thread(target=worker, args=("A",))
t.start()
t.join()                               # wait for thread

# Multiple threads
threads = []
for i in range(5):
    t = threading.Thread(target=worker, args=(f"Thread-{i}",))
    t.start()
    threads.append(t)

for t in threads:
    t.join()                           # wait all to finish

# Thread with class (like extending Thread)
class MyThread(threading.Thread):
    def __init__(self, name):
        super().__init__()
        self.name = name

    def run(self):
        print(f"{self.name} running")
        time.sleep(1)

t = MyThread("Custom")
t.start()
t.join()

# Thread pool (Python 3.2+)
from concurrent.futures import ThreadPoolExecutor

def task(n):
    time.sleep(0.5)
    return n * n

with ThreadPoolExecutor(max_workers=4) as executor:
    futures = [executor.submit(task, i) for i in range(10)]
    results = [f.result() for f in futures]  # blocks until done
    print(results)                      # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

# map with thread pool
with ThreadPoolExecutor(max_workers=4) as executor:
    results = list(executor.map(task, range(10)))
    print(results)

# Lock (synchronized)
lock = threading.Lock()
shared_counter = 0

def increment():
    global shared_counter
    for _ in range(10000):
        with lock:                     # acquire/release automatically
            shared_counter += 1

threads = [threading.Thread(target=increment) for _ in range(5)]
for t in threads: t.start()
for t in threads: t.join()
print(shared_counter)                  # always 50000 (thread-safe)

# Event (signal between threads)
event = threading.Event()

def waiter():
    print("Waiting...")
    event.wait()                       # blocks until set
    print("Got signal!")

def signaler():
    time.sleep(2)
    print("Signaling...")
    event.set()

threading.Thread(target=waiter).start()
threading.Thread(target=signaler).start()

# Timer (delayed execution)
def delayed():
    print("2 seconds later")

t = threading.Timer(2, delayed)
t.start()

# Daemon thread (exits when main exits)
t = threading.Thread(target=worker, args=("Daemon",), daemon=True)
t.start()

# Thread-local data
local_data = threading.local()

def set_and_print(val):
    local_data.value = val
    print(f"{threading.current_thread().name}: {local_data.value}")

threads = [
    threading.Thread(target=set_and_print, args=("A",)),
    threading.Thread(target=set_and_print, args=("B",)),
]
for t in threads: t.start()
for t in threads: t.join()
```

---

## 43. Subprocess (Running System Commands)

```java
// Java
import java.io.*;
Process p = Runtime.getRuntime().exec("ls -l");
BufferedReader r = new BufferedReader(new InputStreamReader(p.getInputStream()));
String line;
while ((line = r.readLine()) != null) System.out.println(line);
```

```python
import subprocess
import sys

# Run command and wait
result = subprocess.run(["python", "--version"])
print(result.returncode)               # 0 if success

# Capture output
result = subprocess.run(["python", "--version"],
                        capture_output=True, text=True)
print(result.stdout)                   # Python 3.x.y
print(result.stderr)

# Check return code (raises if non-zero)
result = subprocess.run(["python", "-c", "print('hello')"],
                        capture_output=True, text=True, check=True)
print(result.stdout.strip())           # hello

# Shell command (use with caution)
result = subprocess.run("dir *.py", shell=True, capture_output=True, text=True)

# Pipe input
result = subprocess.run(["sort"],
                        input="c\na\nb\n",
                        capture_output=True, text=True)
print(result.stdout)                   # a\nb\nc\n

# Popen — full control
proc = subprocess.Popen(
    ["ping", "google.com"],
    stdout=subprocess.PIPE,
    stderr=subprocess.PIPE,
    text=True
)
stdout, stderr = proc.communicate(timeout=5)

# Real-time output
proc = subprocess.Popen(
    [sys.executable, "-u", "-c", "import time\nfor i in range(5): print(i); time.sleep(0.5)"],
    stdout=subprocess.PIPE,
    text=True,
    bufsize=1
)
for line in proc.stdout:
    print(line.strip())

# Timeout
try:
    result = subprocess.run(["sleep", "10"],
                            capture_output=True, timeout=2)
except subprocess.TimeoutExpired:
    print("Command timed out")

# Working directory
result = subprocess.run(["ls"], cwd="/tmp", capture_output=True, text=True)

# Environment variables
import os
env = os.environ.copy()
env["MY_VAR"] = "hello"
result = subprocess.run(["python", "-c", "import os; print(os.environ['MY_VAR'])"],
                        env=env, capture_output=True, text=True)
```

---

## 44. Network Requests (urllib vs requests)

```python
# Built-in (urllib) — no extra installs
from urllib.request import urlopen
from urllib.parse import urlencode, quote

response = urlopen("https://api.github.com")
data = response.read().decode("utf-8")
print(response.status)                 # 200
print(response.headers["Content-Type"])

# POST with urllib
import json
data = json.dumps({"key": "value"}).encode()
req = Request("https://httpbin.org/post", data=data,
              headers={"Content-Type": "application/json"})
response = urlopen(req)

# Better: requests library (install with: pip install requests)
import requests

# GET
resp = requests.get("https://api.github.com")
print(resp.status_code)                # 200
print(resp.json())                     # auto-parse JSON
print(resp.text)                       # raw text
print(resp.headers)

# With params
resp = requests.get("https://api.github.com/search/repositories",
                    params={"q": "python", "sort": "stars"})

# POST
resp = requests.post("https://httpbin.org/post",
                     json={"key": "value"})

# Headers
resp = requests.get("https://api.github.com",
                    headers={"Authorization": "Bearer token123"})

# Timeout
resp = requests.get("https://api.github.com", timeout=5)

# Session (reuse connection)
with requests.Session() as sess:
    sess.headers.update({"User-Agent": "my-app"})
    resp1 = sess.get("https://api.github.com")
    resp2 = sess.get("https://api.github.com/repos/python/cpython")

# Error handling
try:
    resp = requests.get("https://nonexistent.example.com", timeout=3)
    resp.raise_for_status()            # raises for 4xx/5xx
except requests.exceptions.RequestException as e:
    print(f"Request failed: {e}")

# File download
resp = requests.get("https://example.com/image.jpg", stream=True)
with open("image.jpg", "wb") as f:
    for chunk in resp.iter_content(chunk_size=8192):
        f.write(chunk)
```

---

## 45. Context Managers (Advanced)

```python
# Timer context manager
import time

class Timer:
    def __init__(self, name="block"):
        self.name = name

    def __enter__(self):
        self.start = time.perf_counter()
        return self

    def __exit__(self, *args):
        elapsed = time.perf_counter() - self.start
        print(f"{self.name} took {elapsed:.4f}s")

with Timer("sleep"):
    time.sleep(0.5)

# Redirect stdout
import sys
from io import StringIO

class RedirectStdout:
    def __enter__(self):
        self.old = sys.stdout
        sys.stdout = StringIO()
        return sys.stdout

    def __exit__(self, *args):
        sys.stdout = self.old

with RedirectStdout() as out:
    print("This goes to string buffer")
print(out.getvalue())                  # retrieve captured output

# contextlib utilities
from contextlib import contextmanager, suppress, redirect_stdout, closing

# @contextmanager decorator (generator-based)
@contextmanager
def temp_change_dir(path):
    old_dir = os.getcwd()
    try:
        os.chdir(path)
        yield                         # this is what __enter__ returns
    finally:
        os.chdir(old_dir)

with temp_change_dir("/tmp"):
    print(os.getcwd())                # /tmp
print(os.getcwd())                    # back to original

# suppress — ignore specific exceptions
with suppress(FileNotFoundError):
    os.remove("non_existent_file")    # no error

# ExitStack — dynamic context managers
from contextlib import ExitStack

files = ["a.txt", "b.txt", "c.txt"]
with ExitStack() as stack:
    handles = [stack.enter_context(open(f, "w")) for f in files]
    # all files auto-closed when exiting 'with'

# closing — call close() on exit
from urllib.request import urlopen
with closing(urlopen("https://python.org")) as page:
    print(page.read()[:100])
```

---

## 46. Testing (unittest & pytest)

```java
// Java JUnit
@Test
public void testAddition() {
    assertEquals(4, 2 + 2);
}
```

```python
# === unittest (built-in) ===
import unittest

# Module to test: calculator.py
# def add(a, b): return a + b
# def divide(a, b): return a / b

from calculator import add, divide

class TestCalculator(unittest.TestCase):
    def test_add(self):
        self.assertEqual(add(2, 3), 5)
        self.assertEqual(add(-1, 1), 0)
        self.assertEqual(add(0, 0), 0)

    def test_add_floats(self):
        self.assertAlmostEqual(add(0.1, 0.2), 0.3)

    def test_divide(self):
        self.assertEqual(divide(10, 2), 5)

    def test_divide_by_zero(self):
        with self.assertRaises(ZeroDivisionError):
            divide(10, 0)

    def setUp(self):                   # runs before each test
        self.data = [1, 2, 3]

    def tearDown(self):                # runs after each test
        pass

if __name__ == "__main__":
    unittest.main()

# Run: python test_calculator.py
# Run verbose: python test_calculator.py -v
# Run specific test: python -m unittest test_calculator.TestCalculator.test_add

# === assert methods ===
# assertEqual(a, b)          a == b
# assertNotEqual(a, b)       a != b
# assertTrue(x)              bool(x) is True
# assertFalse(x)             bool(x) is False
# assertIs(a, b)             a is b
# assertIsNone(x)            x is None
# assertIn(a, b)             a in b
# assertNotIn(a, b)          a not in b
# assertIsInstance(a, b)     isinstance(a, b)
# assertRaises(Exc, func)    func raises Exc
# assertAlmostEqual(a, b)    round(a-b, 7) == 0
# assertGreater(a, b)        a > b

# === pytest (3rd party, pip install pytest) ===
# No class needed, just functions
# test_calculator.py:
def test_add():
    assert add(2, 3) == 5
    assert add(-1, 1) == 0

def test_divide_by_zero():
    import pytest
    with pytest.raises(ZeroDivisionError):
        divide(10, 0)

# Fixtures
import pytest

@pytest.fixture
def sample_data():
    return {"name": "test", "values": [1, 2, 3]}

def test_with_fixture(sample_data):
    assert sample_data["name"] == "test"
    assert len(sample_data["values"]) == 3

# Parametrized tests
@pytest.mark.parametrize("a,b,expected", [
    (2, 3, 5),
    (-1, 1, 0),
    (0, 0, 0),
])
def test_add_params(a, b, expected):
    assert add(a, b) == expected

# Run: pytest
# Run verbose: pytest -v
# Run specific file: pytest test_calculator.py
# Run with coverage: pytest --cov=.
```

---

## 47. Decorators (Advanced Patterns)

```python
from functools import wraps, cache

# Preserving function metadata with @wraps
def log(func):
    @wraps(func)                       # preserves __name__, __doc__, etc.
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__}")
        return func(*args, **kwargs)
    return wrapper

@log
def greet(name):
    """Say hello"""
    print(f"Hello {name}")

print(greet.__name__)                  # greet (not wrapper)
print(greet.__doc__)                   # Say hello

# Caching/memoization
@cache                               # Python 3.9+ — infinite cache
def fib(n):
    return n if n <= 1 else fib(n - 1) + fib(n - 2)

# Class as decorator
class CountCalls:
    def __init__(self, func):
        self.func = func
        self.count = 0
        self.__name__ = func.__name__

    def __call__(self, *args, **kwargs):
        self.count += 1
        print(f"Call {self.count} of {self.func.__name__}")
        return self.func(*args, **kwargs)

@CountCalls
def hello():
    print("Hi!")

hello()                                # Call 1 of hello
hello()                                # Call 2 of hello

# Decorator with arguments (class-based)
class Retry:
    def __init__(self, max_attempts=3, delay=1):
        self.max_attempts = max_attempts
        self.delay = delay

    def __call__(self, func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            for attempt in range(self.max_attempts):
                try:
                    return func(*args, **kwargs)
                except Exception as e:
                    if attempt == self.max_attempts - 1:
                        raise
                    print(f"Attempt {attempt + 1} failed: {e}")
                    time.sleep(self.delay)
            return None
        return wrapper

@Retry(max_attempts=3, delay=0.5)
def unstable_api():
    import random
    if random.random() < 0.7:
        raise ConnectionError("Network error")
    return "Success"

print(unstable_api())

# Multiple decorators (order matters — bottom-up application)
def bold(func):
    @wraps(func)
    def wrapper():
        return f"<b>{func()}</b>"
    return wrapper

def italic(func):
    @wraps(func)
    def wrapper():
        return f"<i>{func()}</i>"
    return wrapper

@bold
@italic
def greet_html():
    return "Hello"

print(greet_html())                    # <b><i>Hello</i></b>
```

---

## 48. Python Design Patterns (for Java programmers)

```python
# === Singleton ===
class Singleton:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance

s1 = Singleton()
s2 = Singleton()
print(s1 is s2)                        # True

# === Factory ===
class Dog:
    def speak(self): return "Woof"

class Cat:
    def speak(self): return "Meow"

def animal_factory(animal_type):
    classes = {"dog": Dog, "cat": Cat}
    return classes.get(animal_type.lower(), Dog)()

animal = animal_factory("cat")
print(animal.speak())                  # Meow

# === Observer ===
class Subject:
    def __init__(self):
        self._observers = []

    def attach(self, observer):
        self._observers.append(observer)

    def detach(self, observer):
        self._observers.remove(observer)

    def notify(self, message):
        for obs in self._observers:
            obs.update(message)

class Observer:
    def update(self, message):
        print(f"Received: {message}")

sub = Subject()
obs1 = Observer()
obs2 = Observer()
sub.attach(obs1)
sub.attach(obs2)
sub.notify("Event happened")           # both observers receive

# === Strategy ===
class Strategy:
    def execute(self, a, b):
        pass

class Add(Strategy):
    def execute(self, a, b): return a + b

class Multiply(Strategy):
    def execute(self, a, b): return a * b

class Context:
    def __init__(self, strategy):
        self.strategy = strategy

    def execute(self, a, b):
        return self.strategy.execute(a, b)

ctx = Context(Add())
print(ctx.execute(5, 3))               # 8
ctx.strategy = Multiply()
print(ctx.execute(5, 3))               # 15

# === Iterator (Pythonic) ===
class Range:
    def __init__(self, n):
        self.n = n

    def __iter__(self):
        self.i = 0
        return self

    def __next__(self):
        if self.i >= self.n:
            raise StopIteration
        val = self.i
        self.i += 1
        return val

for x in Range(5):
    print(x)                           # 0, 1, 2, 3, 4

# === Decorator Pattern (structural) ===
class Coffee:
    def cost(self): return 5
    def desc(self): return "Coffee"

class MilkDecorator:
    def __init__(self, coffee):
        self._coffee = coffee

    def cost(self):
        return self._coffee.cost() + 1

    def desc(self):
        return self._coffee.desc() + " + Milk"

order = MilkDecorator(Coffee())
print(order.desc(), order.cost())      # Coffee + Milk 6
```

---

## 49. Data Classes (Python 3.7+)

```java
// Java record (Java 16+)
record Person(String name, int age) {}
Person p = new Person("Alice", 25);
System.out.println(p.name());
```

```python
from dataclasses import dataclass, field, asdict, astuple

@dataclass
class Person:
    name: str
    age: int
    email: str = ""                    # default value

p = Person("Alice", 25)
print(p)                               # Person(name='Alice', age=25, email='')
print(p.name)                          # Alice
print(p == Person("Alice", 25))        # True (auto __eq__)

# Immutable dataclass (like Java record)
@dataclass(frozen=True)
class Point:
    x: float
    y: float

p = Point(1.0, 2.0)
# p.x = 3.0                           # Error: frozen

# Inheritance
@dataclass
class Employee(Person):
    employee_id: int
    department: str = "Engineering"

e = Employee("Bob", 30, 1234)
print(e)                               # Employee(name='Bob', age=30, email='', employee_id=1234, department='Engineering')

# Field customization
@dataclass
class Config:
    name: str
    version: int = field(default=1)
    debug: bool = field(default=False, repr=False)  # hidden in repr
    cache: list = field(default_factory=list)        # mutable default

# asdict / astuple
data = asdict(p)                       # {'x': 1.0, 'y': 2.0}
tup = astuple(p)                       # (1.0, 2.0)

# Post-init processing
@dataclass
class Rectangle:
    width: float
    height: float
    area: float = field(init=False)

    def __post_init__(self):
        self.area = self.width * self.height

r = Rectangle(3, 4)
print(r.area)                          # 12

# Ordering
@dataclass(order=True)
class Score:
    value: int
    name: str = field(compare=False)   # ignore in comparisons

scores = [Score(85, "A"), Score(92, "B"), Score(78, "C")]
scores.sort()
print([s.value for s in scores])       # [78, 85, 92]
```

---

## 50. Enum

```java
// Java
enum Day { MON, TUE, WED }
Day d = Day.MON;
```

```python
from enum import Enum, auto, IntEnum, Flag

class Day(Enum):
    MON = 1
    TUE = 2
    WED = 3
    THU = 4
    FRI = 5
    SAT = 6
    SUN = 7

print(Day.MON)                         # Day.MON
print(Day.MON.name)                    # MON
print(Day.MON.value)                   # 1

# Iteration
for d in Day:
    print(d)

# Access by value
print(Day(1))                          # Day.MON

# Access by name
print(Day["MON"])                      # Day.MON

# Auto values
class Color(Enum):
    RED = auto()                       # 1
    GREEN = auto()                     # 2
    BLUE = auto()                      # 3

# IntEnum — behaves like int
class Priority(IntEnum):
    LOW = 1
    MEDIUM = 2
    HIGH = 3

print(Priority.HIGH > Priority.LOW)    # True (can compare as int)

# Flag (bitwise combinations)
class Permission(Flag):
    READ = 1
    WRITE = 2
    EXECUTE = 4

perm = Permission.READ | Permission.WRITE
print(perm)                            # Permission.READ|WRITE
print(Permission.READ in perm)         # True
print(Permission.EXECUTE in perm)      # False

# Methods in enum
class Status(Enum):
    PENDING = "pending"
    ACTIVE = "active"
    INACTIVE = "inactive"

    def is_active(self):
        return self in (Status.ACTIVE,)

    @classmethod
    def active_values(cls):
        return [m.value for m in cls if m.is_active()]

print(Status.ACTIVE.is_active())       # True
print(Status.active_values())          # ['active']
```

---

## 51. Type Hints & mypy

```python
# Python type hints (not enforced at runtime, checked by mypy)

# Basic types
def greet(name: str, age: int) -> str:
    return f"{name} is {age} years old"

# Optional
from typing import Optional

def find_user(user_id: int) -> Optional[str]:
    if user_id == 1:
        return "Alice"
    return None                        # Optional means str or None

# Union
from typing import Union

def parse_number(s: str) -> Union[int, float]:
    try:
        return int(s)
    except ValueError:
        return float(s)

# List, Dict, Tuple, Set
from typing import List, Dict, Tuple, Set

def process(items: List[int]) -> Dict[str, int]:
    return {"count": len(items)}

def transform() -> Tuple[int, str, float]:
    return (1, "hello", 3.14)

def unique() -> Set[int]:
    return {1, 2, 3}

# Any
from typing import Any

def log(obj: Any) -> None:
    print(obj)

# Callable
from typing import Callable

def run(func: Callable[[int, int], int], a: int, b: int) -> int:
    return func(a, b)

print(run(lambda x, y: x + y, 5, 3))   # 8

# TypeVar (generics)
from typing import TypeVar, Sequence

T = TypeVar("T")

def first(items: Sequence[T]) -> T:
    return items[0]

print(first([1, 2, 3]))                # 1 (inferred as int)
print(first(["a", "b"]))               # "a" (inferred as str)

# Custom types (NewType)
from typing import NewType

UserID = NewType("UserID", int)
def get_user(uid: UserID) -> str:
    return f"User {uid}"

uid = UserID(42)
print(get_user(uid))

# Literal (specific values)
from typing import Literal

def set_mode(mode: Literal["r", "w", "a"]) -> None:
    pass

set_mode("r")                          # OK
# set_mode("x")                       # mypy error

# TypedDict (dict with specific keys)
from typing import TypedDict

class Movie(TypedDict):
    title: str
    year: int
    rating: float

movie: Movie = {"title": "Inception", "year": 2010, "rating": 8.8}

# Protocol (structural subtyping)
from typing import Protocol

class Flyable(Protocol):
    def fly(self) -> str: ...

class Bird:
    def fly(self) -> str:
        return "Flapping wings"

class Airplane:
    def fly(self) -> str:
        return "Jet engines"

def take_off(f: Flyable) -> None:
    print(f.fly())

take_off(Bird())                       # OK
take_off(Airplane())                   # OK (structural)

# Run mypy: mypy script.py
# Install mypy: pip install mypy
```

---

## 52. Working with ZIP & Archives

```python
import zipfile
import tarfile
import shutil

# === ZIP ===
# Writing
with zipfile.ZipFile("archive.zip", "w", zipfile.ZIP_DEFLATED) as zf:
    zf.write("file1.txt")
    zf.write("file2.txt", arcname="renamed.txt")  # different name in archive
    zf.writestr("data.txt", "Hello from string")  # write string as file

# Reading
with zipfile.ZipFile("archive.zip", "r") as zf:
    print(zf.namelist())               # list of files in archive
    info = zf.getinfo("file1.txt")
    print(info.file_size, info.compress_size)

    # Extract all
    zf.extractall("output_dir")
    # Extract single
    zf.extract("file1.txt", "output_dir")
    # Read without extracting
    content = zf.read("data.txt")

# === TAR ===
# Writing
with tarfile.open("archive.tar.gz", "w:gz") as tf:
    tf.add("file1.txt")
    tf.add("directory", arcname="renamed")

# Reading
with tarfile.open("archive.tar.gz", "r:gz") as tf:
    tf.extractall("output_dir")
    for member in tf.getmembers():
        print(member.name, member.size)

# shutil shortcuts
shutil.make_archive("archive", "zip", "source_dir")
shutil.make_archive("archive", "gztar", "source_dir")
shutil.unpack_archive("archive.zip", "extract_dir")
```

---

## 53. Working with JSON & YAML

```python
import json
import csv
import yaml                              # pip install pyyaml

# === JSON ===
data = {
    "name": "Alice",
    "age": 25,
    "skills": ["Python", "Java"],
    "address": None,
    "active": True,
}

# Serialize
json_str = json.dumps(data)              # compact
json_str = json.dumps(data, indent=2)    # pretty
json_str = json.dumps(data, ensure_ascii=False)  # handles unicode

# Deserialize
parsed = json.loads(json_str)

# File I/O
with open("data.json", "w") as f:
    json.dump(data, f, indent=2)

with open("data.json") as f:
    data = json.load(f)

# Custom serialization
from datetime import datetime

def json_serial(obj):
    if isinstance(obj, datetime):
        return obj.isoformat()
    raise TypeError(f"Type {type(obj)} not serializable")

data = {"time": datetime.now()}
json_str = json.dumps(data, default=json_serial)

# === YAML ===
# Reading
with open("config.yaml") as f:
    config = yaml.safe_load(f)           # safe_load preferred

# Writing
config = {"name": "app", "version": 2, "debug": False}
with open("config.yaml", "w") as f:
    yaml.dump(config, f, default_flow_style=False)
```

---

## 54. Multiprocessing (CPU-bound parallelism)

```python
import multiprocessing
import time

def cpu_heavy(n):
    """CPU-bound task"""
    total = 0
    for i in range(n):
        total += i ** 2
    return total

# Process pool
if __name__ == "__main__":
    with multiprocessing.Pool(processes=4) as pool:
        results = pool.map(cpu_heavy, [10_000_000] * 8)
        print(results)

# Manual process
def worker(q):
    q.put("result from process")

if __name__ == "__main__":
    q = multiprocessing.Queue()
    p = multiprocessing.Process(target=worker, args=(q,))
    p.start()
    print(q.get())                      # receive from child
    p.join()

# Shared memory (Value, Array)
if __name__ == "__main__":
    counter = multiprocessing.Value("i", 0)

    def increment(c):
        with c.get_lock():              # Lock automatically
            c.value += 1

    procs = [multiprocessing.Process(target=increment, args=(counter,))
             for _ in range(10)]
    for p in procs: p.start()
    for p in procs: p.join()
    print(counter.value)                # 10

# Difference from threading:
# threading: I/O-bound tasks (network, disk)
# multiprocessing: CPU-bound tasks (computation, loops)
# concurrent.futures: unified interface for both
```

---

## 55. Logging

```java
// Java
import java.util.logging.Logger;
Logger logger = Logger.getLogger("MyApp");
logger.info("Hello");
```

```python
import logging

# Basic configuration
logging.basicConfig(
    level=logging.DEBUG,
    format="%(asctime)s [%(levelname)s] %(name)s: %(message)s",
    datefmt="%Y-%m-%d %H:%M:%S",
)

logger = logging.getLogger("my_app")
logger.debug("Debug message")           # hidden if level > DEBUG
logger.info("Info message")
logger.warning("Warning message")
logger.error("Error message")
logger.critical("Critical message")

# Log to file
logging.basicConfig(
    filename="app.log",
    filemode="a",
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(message)s"
)

# Exception logging
try:
    1 / 0
except ZeroDivisionError:
    logger.exception("Division failed")  # logs with full traceback

# Multiple handlers
logger = logging.getLogger("my_app")
logger.setLevel(logging.DEBUG)

console = logging.StreamHandler()
console.setLevel(logging.INFO)
console.setFormatter(logging.Formatter("%(levelname)s: %(message)s"))

file_handler = logging.FileHandler("app.log")
file_handler.setLevel(logging.DEBUG)
file_handler.setFormatter(logging.Formatter(
    "%(asctime)s - %(name)s - %(levelname)s - %(message)s"
))

logger.addHandler(console)
logger.addHandler(file_handler)

# Logger hierarchy (dot-separated names)
parent = logging.getLogger("app")
child = logging.getLogger("app.sub")
child.propagate = True                 # passes to parent (default)
```

---

## 56. Packaging & Distribution

```python
# Minimal setup.py
# project/
#   mypackage/
#       __init__.py
#       core.py
#   setup.py

# setup.py
from setuptools import setup, find_packages

setup(
    name="my-package",
    version="1.0.0",
    packages=find_packages(),
    install_requires=[
        "requests>=2.25",
        "click>=8.0",
    ],
    entry_points={
        "console_scripts": [
            "myapp=mypackage.__main__:main",
        ],
    },
    author="Your Name",
    description="A sample package",
    python_requires=">=3.8",
)

# Build & install
# pip install -e .          # editable install
# pip install .             # regular install
# python setup.py sdist     # source distribution
# python setup.py bdist_wheel  # wheel distribution

# Modern packaging (pyproject.toml — Python 3.11+)
# pyproject.toml
# [build-system]
# requires = ["setuptools>=61.0"]
# build-backend = "setuptools.backends._legacy:_Backend"
#
# [project]
# name = "my-package"
# version = "1.0.0"
# dependencies = ["requests>=2.25"]

# __main__.py — allows: python -m mypackage
# mypackage/__main__.py:
# def main():
#     print("Running mypackage")
# if __name__ == "__main__":
#     main()

# pip install from GitHub
# pip install git+https://github.com/user/repo.git

# requirements.txt
# requests==2.28.1
# numpy>=1.21
# pytest; extra == "testing"

# Create requirements.txt
# pip freeze > requirements.txt
```

---

## 57. Asyncio (Async/Await — Python's async like JS/C#)

```python
import asyncio

# Basic async function
async def say_hello():
    print("Hello")
    await asyncio.sleep(1)             # non-blocking sleep
    print("World")

# Run
asyncio.run(say_hello())

# Multiple tasks concurrently
async def fetch_data(n):
    await asyncio.sleep(n)
    return f"Data {n}"

async def main():
    tasks = [
        asyncio.create_task(fetch_data(2)),
        asyncio.create_task(fetch_data(1)),
        asyncio.create_task(fetch_data(3)),
    ]
    results = await asyncio.gather(*tasks)
    print(results)                     # ['Data 2', 'Data 1', 'Data 3']

asyncio.run(main())

# Async context manager
class AsyncResource:
    async def __aenter__(self):
        print("Acquiring async resource")
        await asyncio.sleep(0.1)
        return self

    async def __aexit__(self, *args):
        print("Releasing async resource")
        await asyncio.sleep(0.1)

async def use_resource():
    async with AsyncResource() as r:
        print("Using resource")

# Async generator
async def count_up_to(n):
    for i in range(n):
        await asyncio.sleep(0.5)
        yield i

async def consume():
    async for x in count_up_to(5):
        print(x)

# Async iterators
class AsyncRange:
    def __init__(self, n):
        self.n = n
        self.i = 0

    def __aiter__(self):
        return self

    async def __anext__(self):
        if self.i >= self.n:
            raise StopAsyncIteration
        await asyncio.sleep(0.1)
        val = self.i
        self.i += 1
        return val

# Timeout
async def slow_task():
    await asyncio.sleep(10)
    return "Done"

async def with_timeout():
    try:
        result = await asyncio.wait_for(slow_task(), timeout=2)
    except asyncio.TimeoutError:
        print("Timed out")

# asyncio.gather vs asyncio.wait
# gather: returns results in order
# wait: returns (done, pending) sets

# Semaphore (limit concurrency)
sem = asyncio.Semaphore(3)

async def limited_task(n):
    async with sem:
        await asyncio.sleep(1)
        return n

async def run_limited():
    tasks = [limited_task(i) for i in range(10)]
    results = await asyncio.gather(*tasks)

# asyncio + subprocess
async def run_cmd(cmd):
    proc = await asyncio.create_subprocess_shell(
        cmd,
        stdout=asyncio.subprocess.PIPE,
        stderr=asyncio.subprocess.PIPE,
    )
    stdout, stderr = await proc.communicate()
    return stdout.decode()

# aiohttp for async HTTP (pip install aiohttp)
# import aiohttp
# async with aiohttp.ClientSession() as session:
#     async with session.get("https://api.github.com") as resp:
#         data = await resp.json()
```

---

## 58. Useful One-liners & Idioms

```python
# Swap
a, b = b, a

# Reverse string
s = s[::-1]

# Check palindrome
is_pal = s == s[::-1]

# Flatten list of lists
flat = [item for sublist in nested for item in sublist]

# Transpose matrix
matrix = [[1, 2, 3], [4, 5, 6]]
transposed = list(zip(*matrix))        # [(1, 4), (2, 5), (3, 6)]

# Unique elements preserving order
unique = list(dict.fromkeys([1, 2, 2, 3, 1, 3]))  # [1, 2, 3]

# Most common element
from statistics import mode
most_common = mode([1, 2, 2, 3, 3, 3])  # 3

# Chaining comparisons
if 0 < x < 10:                         # Java: if (0 < x && x < 10)

# For-else
for x in items:
    if found(x):
        break
else:
    print("Not found")                 # runs if no break

# Truthy default
name = input() or "default"

# Any / all
all(x > 0 for x in nums)               # True if all positive
any(x < 0 for x in nums)               # True if any negative

# Map with multiple lists
list(map(lambda a, b: a + b, [1, 2], [3, 4]))  # [4, 6]

# Merge dicts (Python 3.9+)
merged = a | b                         # {**a, **b} for older versions

# Group by key
from itertools import groupby
groups = {k: list(v) for k, v in groupby(sorted(data, key=key_fn), key_fn)}

# Partition list into chunks
chunks = [lst[i:i+n] for i in range(0, len(lst), n)]

# Sliding window
windows = [lst[i:i+3] for i in range(len(lst) - 2)]

# Read file into list of lines
lines = open("f.txt").read().splitlines()

# Count occurrences
count = lst.count(x)
count = s.count(substring)

# Factorial (math or reduce)
from functools import reduce
fact = reduce(lambda a, b: a * b, range(1, n + 1), 1)

# Check if all equal
all_equal = len(set(lst)) <= 1

# Find index of max
idx = max(range(len(lst)), key=lambda i: lst[i])

# Min/Max with key
person = max(people, key=lambda p: p.age)

# File extension
ext = filename.rsplit(".", 1)[-1] if "." in filename else ""

# Safe dict access
val = d.get(key, default)

# Sort dict by value
sorted(d.items(), key=lambda x: x[1])

# Remove duplicates (list -> set -> list)
list(set(lst))

# Dict from two lists
d = dict(zip(keys, values))

# Inline if-else (ternary)
max_val = a if a > b else b

# Filter None
filtered = [x for x in lst if x is not None]

# Current time as string
import time
timestamp = time.strftime("%Y%m%d_%H%M%S")

# Random choice
import random
random.choice(lst)
random.sample(lst, k=3)
random.shuffle(lst)

# HTML escape
import html
escaped = html.escape("<tag>")

# UUID
import uuid
uid = str(uuid.uuid4())                # e.g. "550e8400-e29b-41d4-a716-446655440000"

# Pretty print
import pprint
pprint.pprint(complex_data)
```

---

## 59. 10 Beginner Projects (Full Code)

### Project 1 — Number Guessing Game

```python
import random

target = random.randint(1, 100)
attempts = 0

print("Guess a number between 1 and 100")

while True:
    try:
        guess = int(input("Your guess: "))
        attempts += 1

        if guess < target:
            print("Too low!")
        elif guess > target:
            print("Too high!")
        else:
            print(f"Correct! You got it in {attempts} tries.")
            break
    except ValueError:
        print("Enter a valid number")
```

---

### Project 2 — To-Do List CLI

```python
import json
import os

FILE = "todos.json"

def load():
    if os.path.exists(FILE):
        with open(FILE) as f:
            return json.load(f)
    return []

def save(todos):
    with open(FILE, "w") as f:
        json.dump(todos, f, indent=2)

def show(todos):
    if not todos:
        print("No todos")
        return
    for i, t in enumerate(todos, 1):
        status = "[x]" if t["done"] else "[ ]"
        print(f"{i}. {status} {t['task']}")

todos = load()

while True:
    cmd = input("\n> ").strip().lower()
    if cmd == "list":
        show(todos)
    elif cmd.startswith("add "):
        todos.append({"task": cmd[4:], "done": False})
        save(todos)
        print("Added")
    elif cmd.startswith("done "):
        idx = int(cmd[5:]) - 1
        if 0 <= idx < len(todos):
            todos[idx]["done"] = True
            save(todos)
            print("Marked done")
    elif cmd.startswith("del "):
        idx = int(cmd[4:]) - 1
        if 0 <= idx < len(todos):
            todos.pop(idx)
            save(todos)
            print("Deleted")
    elif cmd == "quit":
        break
```

---

### Project 3 — Weather App (CLI)

```python
import requests

API_KEY = "YOUR_API_KEY"  # get free key from openweathermap.org
CITY = input("Enter city: ")

url = f"https://api.openweathermap.org/data/2.5/weather?q={CITY}&appid={API_KEY}&units=metric"

resp = requests.get(url)

if resp.status_code == 200:
    data = resp.json()
    temp = data["main"]["temp"]
    feels = data["main"]["feels_like"]
    desc = data["weather"][0]["description"]
    humidity = data["main"]["humidity"]
    wind = data["wind"]["speed"]

    print(f"\nWeather in {CITY}:")
    print(f"Temperature: {temp}°C (feels like {feels}°C)")
    print(f"Conditions: {desc}")
    print(f"Humidity: {humidity}%")
    print(f"Wind: {wind} m/s")
else:
    print("City not found")
```

---

### Project 4 — Password Generator

```python
import random
import string

def generate_password(length=12, upper=True, digits=True, symbols=True):
    chars = string.ascii_lowercase
    if upper:
        chars += string.ascii_uppercase
    if digits:
        chars += string.digits
    if symbols:
        chars += string.punctuation

    password = "".join(random.choice(chars) for _ in range(length))
    return password

length = int(input("Length (default 12): ") or 12)
upper = input("Include uppercase? (y/n): ").lower() == "y"
digits = input("Include digits? (y/n): ").lower() == "y"
symbols = input("Include symbols? (y/n): ").lower() == "y"

password = generate_password(length, upper, digits, symbols)
print(f"Generated password: {password}")
```

---

### Project 5 — File Organizer (Sort by extension)

```python
from pathlib import Path
import shutil

DIR = input("Enter directory to organize: ")
path = Path(DIR)

if not path.is_dir():
    print("Invalid directory")
    exit()

for file in path.iterdir():
    if file.is_file():
        ext = file.suffix.lower().lstrip(".") or "no_extension"
        target_dir = path / ext
        target_dir.mkdir(exist_ok=True)
        shutil.move(str(file), str(target_dir / file.name))

print("Organized!")
```

---

### Project 6 — Markdown to HTML Converter

```python
import re

def md_to_html(md):
    md = re.sub(r"^### (.+)$", r"<h3>\1</h3>", md, flags=re.MULTILINE)
    md = re.sub(r"^## (.+)$", r"<h2>\1</h2>", md, flags=re.MULTILINE)
    md = re.sub(r"^# (.+)$", r"<h1>\1</h1>", md, flags=re.MULTILINE)
    md = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", md)
    md = re.sub(r"\*(.+?)\*", r"<em>\1</em>", md)
    md = re.sub(r"`(.+?)`", r"<code>\1</code>", md)
    md = re.sub(r"^- (.+)$", r"<li>\1</li>", md, flags=re.MULTILINE)
    md = re.sub(r"^$", r"</p><p>", md, flags=re.MULTILINE)
    return "<p>" + md + "</p>"

print("Enter Markdown (Ctrl+D to finish):")
import sys
md_content = sys.stdin.read()
html = md_to_html(md_content)
print("\n--- HTML ---\n")
print(html)
```

---

### Project 7 — URL Shortener (using pyshorteners)

```python
# pip install pyshorteners
import pyshorteners

url = input("Enter URL to shorten: ")
s = pyshorteners.Shortener()

try:
    short_url = s.tinyurl.short(url)
    print(f"Short URL: {short_url}")

    back = s.tinyurl.expand(short_url)
    print(f"Original: {back}")
except Exception as e:
    print(f"Error: {e}")
```

---

### Project 8 — Quiz App

```python
import json

questions = [
    {"q": "What is the capital of France?", "options": ["London", "Paris", "Berlin", "Madrid"], "answer": 1},
    {"q": "Which planet is known as the Red Planet?", "options": ["Venus", "Jupiter", "Mars", "Saturn"], "answer": 2},
    {"q": "What is 2 + 2?", "options": ["3", "4", "5", "6"], "answer": 1},
]

score = 0

for i, q in enumerate(questions, 1):
    print(f"\n{i}. {q['q']}")
    for j, opt in enumerate(q["options"]):
        print(f"   {j + 1}. {opt}")

    try:
        ans = int(input("Your answer (1-4): ")) - 1
        if ans == q["answer"]:
            score += 1
            print("Correct!")
        else:
            print(f"Wrong. The answer was {q['answer'] + 1}")
    except ValueError:
        print("Invalid input")

print(f"\nFinal Score: {score}/{len(questions)}")
```

---

### Project 9 — Expense Tracker

```python
import json
from datetime import date
from collections import defaultdict

FILE = "expenses.json"

def load():
    try:
        with open(FILE) as f:
            return json.load(f)
    except (FileNotFoundError, json.JSONDecodeError):
        return []

def save(expenses):
    with open(FILE, "w") as f:
        json.dump(expenses, f, indent=2)

def add(amount, category, note=""):
    expenses = load()
    expenses.append({
        "date": str(date.today()),
        "amount": amount,
        "category": category,
        "note": note,
    })
    save(expenses)
    print("Expense added")

def summary():
    expenses = load()
    by_category = defaultdict(float)
    total = 0
    for e in expenses:
        by_category[e["category"]] += e["amount"]
        total += e["amount"]
    print(f"\nTotal: ${total:.2f}")
    for cat, amt in sorted(by_category.items()):
        print(f"  {cat}: ${amt:.2f}")

def show():
    expenses = load()
    for i, e in enumerate(expenses, 1):
        print(f"{i}. [{e['date']}] {e['category']}: ${e['amount']:.2f} — {e['note']}")

while True:
    cmd = input("\n> ").strip().lower()
    if cmd == "show":
        show()
    elif cmd == "summary":
        summary()
    elif cmd.startswith("add "):
        try:
            parts = cmd[4:].rsplit(" ", 2)
            amt = float(parts[0])
            cat = parts[1] if len(parts) > 1 else "general"
            note = parts[2] if len(parts) > 2 else ""
            add(amt, cat, note)
        except (ValueError, IndexError):
            print("Usage: add <amount> <category> [note]")
    elif cmd == "quit":
        break
```

---

### Project 10 — File Backup Script

```python
import shutil
import os
from pathlib import Path
from datetime import datetime
import zipfile

def backup_directory(src, dest=None):
    src = Path(src)
    if not src.exists():
        print(f"Source '{src}' does not exist")
        return

    if dest is None:
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        dest = src.parent / f"{src.name}_backup_{timestamp}"

    dest = Path(dest)
    shutil.copytree(src, dest)
    print(f"Backed up to {dest}")
    return dest

def backup_to_zip(src, dest=None):
    src = Path(src)
    if dest is None:
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        dest = src.parent / f"{src.name}_backup_{timestamp}.zip"

    shutil.make_archive(str(dest).replace(".zip", ""), "zip", src)
    print(f"Backup zip created: {dest}")

def incremental_backup(src, backup_root, max_backups=5):
    src = Path(src)
    backup_root = Path(backup_root)
    backup_root.mkdir(parents=True, exist_ok=True)

    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    dest = backup_root / f"{src.name}_{timestamp}"

    shutil.copytree(src, dest)

    backups = sorted(backup_root.glob(f"{src.name}_*"))
    while len(backups) > max_backups:
        shutil.rmtree(backups[0])
        backups.pop(0)
        print(f"Removed old backup: {backups[0]}")

    print(f"Incremental backup: {dest}")

# === CLI Menu ===
print("1. Full directory backup")
print("2. Zip backup")
print("3. Incremental backup")
choice = input("Choose: ").strip()
src = input("Source directory: ").strip()

if choice == "1":
    backup_directory(src)
elif choice == "2":
    backup_to_zip(src)
elif choice == "3":
    backup_root = input("Backup root: ").strip() or "backups"
    max_b = int(input("Max backups (default 5): ") or 5)
    incremental_backup(src, backup_root, max_b)
else:
    print("Invalid choice")
```

---

---

## 60. More Basic Projects (Full Code)

### Project 11 — BMI Calculator

```python
weight = float(input("Weight (kg): "))
height = float(input("Height (m): "))

bmi = weight / (height ** 2)

print(f"BMI: {bmi:.1f}")

if bmi < 18.5:
    print("Underweight")
elif bmi < 25:
    print("Normal")
elif bmi < 30:
    print("Overweight")
else:
    print("Obese")
```

---

### Project 12 — Simple Calculator (CLI)

```python
def add(a, b): return a + b
def sub(a, b): return a - b
def mul(a, b): return a * b
def div(a, b): return a / b if b != 0 else "Error: divide by zero"

ops = {"+": add, "-": sub, "*": mul, "/": div}

while True:
    expr = input("Enter (num op num) or 'q': ").strip()
    if expr.lower() == "q":
        break
    try:
        a, op, b = expr.split()
        a, b = float(a), float(b)
        if op in ops:
            print(f"= {ops[op](a, b)}")
        else:
            print("Invalid operator. Use +, -, *, /")
    except ValueError:
        print("Format: <number> <op> <number>")
    except ZeroDivisionError:
        print("Cannot divide by zero")
```

---

### Project 13 — Countdown Timer

```python
import time
import os

def countdown(t):
    while t:
        mins, secs = divmod(t, 60)
        timer = f"{mins:02d}:{secs:02d}"
        print(timer, end="\r")
        time.sleep(1)
        t -= 1
    print("Time's up!     ")

try:
    t = int(input("Enter seconds: "))
    countdown(t)
except ValueError:
    print("Enter a valid number")
```

---

### Project 14 — Dice Roll Simulator

```python
import random

def roll_dice(sides=6, count=1):
    return [random.randint(1, sides) for _ in range(count)]

while True:
    cmd = input("Roll? (y/n): ").strip().lower()
    if cmd != "y":
        break
    sides = int(input("Sides (default 6): ") or 6)
    count = int(input("How many dice: ") or 1)
    results = roll_dice(sides, count)
    print(f"Rolled: {results} (total: {sum(results)})")
```

---

### Project 15 — Rock, Paper, Scissors

```python
import random

choices = ["rock", "paper", "scissors"]  # 0, 1, 2
user_score = comp_score = 0

while True:
    user = input("Rock, Paper, Scissors or 'q': ").strip().lower()
    if user == "q":
        break
    if user not in choices:
        print("Invalid")
        continue

    comp = random.choice(choices)
    print(f"Computer: {comp}")

    if user == comp:
        print("Tie")
    elif (user == "rock" and comp == "scissors") or \
         (user == "paper" and comp == "rock") or \
         (user == "scissors" and comp == "paper"):
        print("You win!")
        user_score += 1
    else:
        print("You lose!")
        comp_score += 1

    print(f"Score — You: {user_score}, Computer: {comp_score}")
```

---

### Project 16 — Hangman

```python
import random

words = ["python", "java", "programming", "computer", "algorithm", "database"]
word = random.choice(words)
guessed = set()
attempts = 6

while attempts > 0:
    display = "".join(c if c in guessed else "_" for c in word)
    print(f"\nWord: {display}")
    print(f"Guessed: {', '.join(sorted(guessed)) if guessed else 'none'}")
    print(f"Attempts left: {attempts}")

    if "_" not in display:
        print("You win!")
        break

    guess = input("Guess a letter: ").strip().lower()
    if len(guess) != 1 or not guess.isalpha():
        print("Enter one letter")
        continue

    if guess in guessed:
        print("Already guessed")
        continue

    guessed.add(guess)

    if guess not in word:
        attempts -= 1
        print("Wrong!")
else:
    print(f"\nGame over! The word was: {word}")
```

---

### Project 17 — Simple Text-Based Adventure

```python
import time

def slow_print(text):
    print(text)
    time.sleep(1)

def choose(prompt, options):
    print(prompt)
    for i, opt in enumerate(options, 1):
        print(f"{i}. {opt}")
    while True:
        try:
            return int(input("> ")) - 1
        except ValueError:
            print("Enter a number")

slow_print("You wake up in a dark forest.")
slow_print("You see a path leading left and right.")

choice = choose("Which way?", ["Left", "Right"])

if choice == 0:  # left
    slow_print("You find a treasure chest!")
    choice2 = choose("Open it?", ["Yes", "No"])
    if choice2 == 0:
        slow_print("It's full of gold! You win!")
    else:
        slow_print("You walk away. The end.")
else:  # right
    slow_print("A dragon appears!")
    choice2 = choose("What do you do?", ["Fight", "Run"])
    if choice2 == 0:
        slow_print("You bravely fight... and the dragon befriends you!")
    else:
        slow_print("You run back to safety. The end.")
```

---

### Project 18 — Unit Converter

```python
def convert(value, from_unit, to_unit, category):
    length = {"mm": 0.001, "cm": 0.01, "m": 1.0, "km": 1000, "in": 0.0254, "ft": 0.3048}
    weight = {"mg": 0.001, "g": 1.0, "kg": 1000, "oz": 28.35, "lb": 453.592}
    temp_categories = {"c": "f", "f": "c"}

    if category == "temp":
        if from_unit == "c" and to_unit == "f":
            return value * 9/5 + 32
        elif from_unit == "f" and to_unit == "c":
            return (value - 32) * 5/9
        return value

    units = {"length": length, "weight": weight}
    base = value * units[category][from_unit]
    return base / units[category][to_unit]

print("1. Length  2. Weight  3. Temperature")
cat_map = {"1": "length", "2": "weight", "3": "temp"}
cat = cat_map[input("Choose category: ").strip()]

val = float(input("Value: "))
frm = input("From unit: ").strip().lower()
to = input("To unit: ").strip().lower()

result = convert(val, frm, to, cat)
print(f"{val} {frm} = {result:.4f} {to}")
```

---

### Project 19 — Contact Book

```python
import json
import os

FILE = "contacts.json"

def load():
    if os.path.exists(FILE):
        with open(FILE) as f:
            return json.load(f)
    return {}

def save(contacts):
    with open(FILE, "w") as f:
        json.dump(contacts, f, indent=2)

def add(contacts):
    name = input("Name: ").strip()
    phone = input("Phone: ").strip()
    email = input("Email: ").strip()
    contacts[name] = {"phone": phone, "email": email}
    save(contacts)
    print("Contact added")

def search(contacts):
    q = input("Search: ").strip().lower()
    found = [(n, d) for n, d in contacts.items() if q in n.lower() or q in d["phone"]]
    if found:
        for name, info in found:
            print(f"{name} — {info['phone']}, {info['email']}")
    else:
        print("No matches")

def list_all(contacts):
    if not contacts:
        print("No contacts")
        return
    for name, info in sorted(contacts.items()):
        print(f"{name}: {info['phone']}, {info['email']}")

def delete(contacts):
    name = input("Name to delete: ").strip()
    if name in contacts:
        del contacts[name]
        save(contacts)
        print("Deleted")
    else:
        print("Not found")

contacts = load()

while True:
    print("\n1. Add  2. Search  3. List  4. Delete  5. Quit")
    c = input("> ").strip()
    if c == "1": add(contacts)
    elif c == "2": search(contacts)
    elif c == "3": list_all(contacts)
    elif c == "4": delete(contacts)
    elif c == "5": break
```

---

### Project 20 — Simple Stopwatch

```python
import time

input("Press Enter to START")
start = time.perf_counter()
input("Press Enter to STOP")
end = time.perf_counter()

elapsed = end - start
mins, secs = divmod(elapsed, 60)
hours, mins = divmod(mins, 60)

print(f"Elapsed: {int(hours):02d}:{int(mins):02d}:{secs:.2f}")
```

---

### Project 21 — Mood Tracker

```python
import json
from datetime import date
from collections import Counter

FILE = "mood.json"

def load():
    try:
        with open(FILE) as f:
            return json.load(f)
    except (FileNotFoundError, json.JSONDecodeError):
        return []

def save(entries):
    with open(FILE, "w") as f:
        json.dump(entries, f, indent=2)

def add(entries):
    mood = input("Mood (happy/sad/angry/anxious/neutral): ").strip().lower()
    note = input("Note (optional): ").strip()
    entries.append({"date": str(date.today()), "mood": mood, "note": note})
    save(entries)
    print("Logged")

def stats(entries):
    if not entries:
        print("No data")
        return
    moods = Counter(e["mood"] for e in entries)
    total = len(entries)
    print(f"\nTotal entries: {total}")
    for mood, count in moods.most_common():
        print(f"  {mood}: {count} ({count*100//total}%)")

def show(entries):
    if not entries:
        print("No entries")
        return
    for e in entries[-10:]:
        print(f"[{e['date']}] {e['mood'].upper()}: {e['note']}")

entries = load()

while True:
    print("\n1. Log mood  2. Stats  3. Recent  4. Quit")
    c = input("> ").strip()
    if c == "1": add(entries)
    elif c == "2": stats(entries)
    elif c == "3": show(entries)
    elif c == "4": break
```

---

### Project 22 — Typing Speed Test

```python
import time
import random

sentences = [
    "The quick brown fox jumps over the lazy dog",
    "Python is a powerful programming language for beginners",
    "Practice makes perfect when learning to code",
    "Always write clean and readable code",
    "Programming is the art of solving problems",
]

sentence = random.choice(sentences)
print("Type this as fast as you can:\n")
print(sentence)
input("\nPress Enter when ready...")
start = time.perf_counter()
typed = input("\n> ")
end = time.perf_counter()

elapsed = end - start
words = len(sentence.split())
wpm = int(words / (elapsed / 60))

correct = sum(1 for a, b in zip(sentence, typed) if a == b)
accuracy = correct / len(sentence) * 100 if len(sentence) > 0 else 0

print(f"\nTime: {elapsed:.2f}s")
print(f"Speed: {wpm} WPM")
print(f"Accuracy: {accuracy:.1f}%")
```

---

### Project 23 — Alarm Clock

```python
import time
import os
from datetime import datetime

alarm_time = input("Set alarm (HH:MM 24h): ").strip()

while True:
    now = datetime.now().strftime("%H:%M")
    if now == alarm_time:
        print("\n*** WAKE UP! ***")
        for _ in range(5):
            print("\a", end="")          # beep sound
            time.sleep(0.5)
        break
    time.sleep(30)
```

---

### Project 24 — Palindrome Checker

```python
def is_palindrome(s):
    s = "".join(c.lower() for c in s if c.isalnum())
    return s == s[::-1]

while True:
    text = input("Enter text (or 'q'): ").strip()
    if text.lower() == "q":
        break
    if is_palindrome(text):
        print("YES — it's a palindrome")
    else:
        print("NO — not a palindrome")
```

---

### Project 25 — Flash Card Quiz

```python
import random

cards = [
    {"q": "What is the capital of France?", "a": "Paris"},
    {"q": "What is 2 + 2?", "a": "4"},
    {"q": "What color is the sky?", "a": "Blue"},
    {"q": "What planet is known as the Red Planet?", "a": "Mars"},
    {"q": "What is H2O?", "a": "Water"},
]

random.shuffle(cards)
score = 0

for i, card in enumerate(cards, 1):
    print(f"\n{i}. {card['q']}")
    answer = input("> ").strip().lower()
    if answer == card['a'].lower():
        print("Correct!")
        score += 1
    else:
        print(f"Wrong. Answer: {card['a']}")

print(f"\nFinal: {score}/{len(cards)}")
```

---

### Project 26 — Temperature Converter (Visual)

```python
def celsius_to_fahrenheit(c):
    return c * 9/5 + 32

def fahrenheit_to_celsius(f):
    return (f - 32) * 5/9

def celsius_to_kelvin(c):
    return c + 273.15

def kelvin_to_celsius(k):
    return k - 273.15

print("1. C → F  2. F → C  3. C → K  4. K → C")
choice = input("Choose: ").strip()
val = float(input("Temperature: "))
conversions = {
    "1": (celsius_to_fahrenheit, "°F"),
    "2": (fahrenheit_to_celsius, "°C"),
    "3": (celsius_to_kelvin, "K"),
    "4": (kelvin_to_celsius, "°C"),
}
if choice in conversions:
    func, unit = conversions[choice]
    print(f"Result: {func(val):.2f} {unit}")
else:
    print("Invalid choice")
```

---

### Project 27 — Simple Notepad

```python
import os
from datetime import datetime

DIR = "notes"
os.makedirs(DIR, exist_ok=True)

def new_note():
    title = input("Title: ").strip().replace(" ", "_") + ".txt"
    path = os.path.join(DIR, title)
    if os.path.exists(path):
        print("Note already exists")
        return
    print("Enter content (type 'END' on a new line to finish):")
    lines = []
    while True:
        line = input()
        if line == "END":
            break
        lines.append(line)
    with open(path, "w") as f:
        f.write(f"Created: {datetime.now()}\n\n")
        f.write("\n".join(lines))
    print(f"Saved: {path}")

def list_notes():
    notes = os.listdir(DIR)
    if not notes:
        print("No notes")
        return
    for n in sorted(notes):
        size = os.path.getsize(os.path.join(DIR, n))
        print(f"{n} ({size} bytes)")

def read_note():
    name = input("Filename: ").strip()
    path = os.path.join(DIR, name)
    if not os.path.exists(path):
        path = os.path.join(DIR, name + ".txt")
    if os.path.exists(path):
        with open(path) as f:
            print(f.read())
    else:
        print("Not found")

while True:
    print("\n1. New  2. List  3. Read  4. Quit")
    c = input("> ").strip()
    if c == "1": new_note()
    elif c == "2": list_notes()
    elif c == "3": read_note()
    elif c == "4": break
```

---

### Project 28 — Simple Chatbot

```python
import random

responses = {
    "hello": ["Hi!", "Hey!", "Hello!", "Hey there!"],
    "how are you": ["I'm good!", "Doing great!", "All good!"],
    "name": ["I'm PyBot!", "Call me PyBot", "PyBot at your service"],
    "bye": ["Goodbye!", "See you!", "Bye!"],
    "default": ["Interesting!", "Tell me more!", "I see!", "Hmm...", "Cool!"],
}

def get_response(msg):
    msg = msg.lower()
    for key in responses:
        if key in msg:
            return random.choice(responses[key])
    return random.choice(responses["default"])

print("PyBot: Hi! Say something (or 'bye' to quit)")
while True:
    user = input("You: ").strip()
    if not user:
        continue
    bot = get_response(user)
    print(f"PyBot: {bot}")
    if any(w in user.lower() for w in ["bye", "quit", "exit"]):
        break
```

---

### Project 29 — Multiplication Table Generator

```python
def print_table(n, up_to=10):
    print(f"\n--- {n} Times Table ---")
    for i in range(1, up_to + 1):
        print(f"{n} × {i:2d} = {n * i:3d}")

def print_all_tables(up_to=10, limit=10):
    for n in range(1, up_to + 1):
        print_table(n, limit)

print("1. Single table  2. All tables")
choice = input("> ").strip()

if choice == "1":
    n = int(input("Number: "))
    limit = int(input("Up to (default 10): ") or 10)
    print_table(n, limit)
elif choice == "2":
    upto = int(input("Tables up to (default 10): ") or 10)
    limit = int(input("Each up to (default 10): ") or 10)
    print_all_tables(upto, limit)
```

---

### Project 30 — Simple Vigenère Cipher

```python
def encrypt(text, key):
    result = []
    key_idx = 0
    for c in text:
        if c.isalpha():
            shift = ord(key[key_idx % len(key)].lower()) - ord('a')
            base = ord('A') if c.isupper() else ord('a')
            result.append(chr((ord(c) - base + shift) % 26 + base))
            key_idx += 1
        else:
            result.append(c)
    return "".join(result)

def decrypt(text, key):
    result = []
    key_idx = 0
    for c in text:
        if c.isalpha():
            shift = ord(key[key_idx % len(key)].lower()) - ord('a')
            base = ord('A') if c.isupper() else ord('a')
            result.append(chr((ord(c) - base - shift) % 26 + base))
            key_idx += 1
        else:
            result.append(c)
    return "".join(result)

mode = input("Encrypt (e) or Decrypt (d): ").strip().lower()
msg = input("Message: ").strip()
key = input("Key: ").strip()

if mode == "e":
    print(f"Encrypted: {encrypt(msg, key)}")
elif mode == "d":
    print(f"Decrypted: {decrypt(msg, key)}")
else:
    print("Invalid choice")
```

---

*End of Python 101 — Full Reference for Java Programmers*
