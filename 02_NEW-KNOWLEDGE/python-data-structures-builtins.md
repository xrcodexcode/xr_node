---
id: 541faac0-dc0f-cd54-2ebf-56b54c64ab10
title: Python Data Structures Builtins
type: atomic-note
status: learning
domain: general
source_type: course
created: 2026-07-24
updated: 2026-07-24
review: 2026-08-24
confidence: 85
version: 1
aliases: [python data structures]
tags: [implementation, reference]
owner_moc: Python DSA ML Mastery MOC
sources: []
related: ["[[Python Syntax Power Moves]]", "[[Python Standard Library Gems]]", "[[DSA Arrays and Strings]]"]
schema_version: 4
---

Mastering Python's built-in data structures is non-negotiable for Machine Learning engineering. When processing massive datasets, writing training loops, or implementing complex algorithms like BFS/DFS, using the wrong data structure (like using a List for queue operations instead of a Deque) can turn an $O(N)$ operation into $O(N^2)$, bottlenecking your entire pipeline. This note dives into advanced, performant usage of Python's core structures to ensure your code is both elegant and blindingly fast.

## 1. Lists Advanced

Lists are dynamic arrays. They are great for stacks, but terrible for queues because inserting/deleting at the beginning requires shifting all other elements ($O(N)$ time).

```python
# List as Stack (Fast - O(1) append/pop)
stack = []
stack.append(10) # Push
stack.append(20)
top = stack.pop() # Pop -> 20

# List as Queue (BAD IDEA - O(N) pop(0))
queue = [1, 2, 3]
queue.pop(0) # Avoid this in interviews! Use collections.deque instead.

# 🎯 Interview Tip: Maintaining sorted lists efficiently
import bisect
sorted_lst = [1, 3, 4, 7]
bisect.insort(sorted_lst, 5) # O(N) insertion, but O(log N) search
# Output: [1, 3, 4, 5, 7]

# 🤖 ML Connection: The mutable default trap
# Be careful when initializing matrices or lists of lists
bad_matrix = [[0] * 3] * 3
bad_matrix[0][0] = 1
# Output of bad_matrix: [[1, 0, 0], [1, 0, 0], [1, 0, 0]] (All rows reference the same list!)

# Correct way:
good_matrix = [[0] * 3 for _ in range(3)]
good_matrix[0][0] = 1
# Output: [[1, 0, 0], [0, 0, 0], [0, 0, 0]]

# Negative Indexing Patterns
arr = [10, 20, 30, 40, 50]
last = arr[-1]           # 50
reversed_arr = arr[::-1] # [50, 40, 30, 20, 10]
```

## 2. List Comprehensions

List comprehensions offer a highly optimized, C-level implementation for creating lists. Use them over `for` loops with `append()` whenever possible.

```python
# Simple
squares = [x**2 for x in range(5)] 
# Output: [0, 1, 4, 9, 16]

# Conditional
evens = [x for x in range(10) if x % 2 == 0] 
# Output: [0, 2, 4, 6, 8]

# Nested (Flattening a 2D matrix)
matrix = [[1, 2], [3, 4], [5, 6]]
flat = [num for row in matrix for num in row]
# Output: [1, 2, 3, 4, 5, 6]

# With enumerate
names = ["Alice", "Bob", "Charlie"]
name_map = [f"{i}: {name}" for i, name in enumerate(names)]
# Output: ['0: Alice', '1: Bob', '2: Charlie']

# 🎯 Interview Tip: Generator Expressions vs List Comprehensions
# List comp loads everything into memory. Generator doesn't.
# ML models often read terabytes of data; generators are your best friend.
import sys
list_comp = [x for x in range(10000)]
gen_expr = (x for x in range(10000))
print(sys.getsizeof(list_comp)) # ~80096 bytes
print(sys.getsizeof(gen_expr))  # ~104 bytes
```

## 3. Dictionary Mastery

Dictionaries are hash maps, offering $O(1)$ average time complexity for lookups, insertions, and deletions.

```python
# Dictionary Comprehensions
squares_dict = {x: x**2 for x in range(5)} 
# Output: {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}

# defaultdict: Handles missing keys automatically
from collections import defaultdict
word_counts = defaultdict(int) # defaults to 0
for word in ["apple", "banana", "apple"]:
    word_counts[word] += 1
# Output: defaultdict(<class 'int'>, {'apple': 2, 'banana': 1})

list_dict = defaultdict(list)
list_dict['fruits'].append('apple') # No KeyError!

# Counter: Ideal for frequency mapping
from collections import Counter
freq = Counter(["a", "b", "a", "c", "a", "b"])
# Output: Counter({'a': 3, 'b': 2, 'c': 1})
print(freq.most_common(1)) # Output: [('a', 3)]

# Merging dictionaries (Python 3.9+)
dict1 = {'a': 1, 'b': 2}
dict2 = {'b': 3, 'c': 4}
merged = dict1 | dict2 
# Output: {'a': 1, 'b': 3, 'c': 4}

# setdefault: Similar to defaultdict but for specific keys on standard dicts
d = {}
d.setdefault('key', []).append(1)

# Iteration
for k, v in merged.items():
    pass # Iterate keys and values simultaneously

# 🎯 Interview Tip: Sorting Dicts
# Sort by value instead of key
scores = {'Alice': 88, 'Bob': 95, 'Charlie': 70}
sorted_scores = dict(sorted(scores.items(), key=lambda item: item[1], reverse=True))
# Output: {'Bob': 95, 'Alice': 88, 'Charlie': 70}
```

## 4. Sets

Sets are hash tables containing only keys. They guarantee uniqueness and offer $O(1)$ lookups. Perfect for "seen" or "visited" collections in graph traversal (BFS/DFS).

```python
set_a = {1, 2, 3, 4}
set_b = {3, 4, 5, 6}

# Set Operations
union = set_a | set_b         # {1, 2, 3, 4, 5, 6}
intersection = set_a & set_b  # {3, 4}
difference = set_a - set_b    # {1, 2}
sym_diff = set_a ^ set_b      # {1, 2, 5, 6} (Elements in either, but not both)

# 🤖 ML Connection: O(1) Lookups
# When checking if words in a document belong to a stopword vocabulary:
vocab_list = ["the", "a", "and"] # O(N) lookup
vocab_set = set(vocab_list)      # O(1) lookup (Always use sets for this!)

# frozenset: Immutable set, can be used as a dictionary key
frozen = frozenset([1, 2, 3])
d = {frozen: "value"}
```

## 5. Tuples

Tuples are immutable sequences. Because they are immutable, they are hashable, meaning they can be used as dictionary keys or stored in sets.

```python
# Tuple Unpacking
coordinates = (10, 20, 30)
x, y, z = coordinates

# Advanced unpacking
first, *middle, last = (1, 2, 3, 4, 5)
# first: 1, middle: [2, 3, 4], last: 5

# Named Tuples (Like lightweight classes)
from collections import namedtuple
Point = namedtuple('Point', ['x', 'y'])
p = Point(10, 20)
print(p.x, p.y) # Output: 10 20

# Tuples as Dict Keys
grid = {}
grid[(0, 0)] = "Start"
grid[(1, 1)] = "Obstacle"
```

## 6. Deque (Double-Ended Queue)

`collections.deque` is a doubly-linked list. It provides $O(1)$ time complexity for append and pop operations from *both* ends.

```python
from collections import deque

# Deque operations
dq = deque([1, 2, 3])
dq.append(4)      # [1, 2, 3, 4]
dq.appendleft(0)  # [0, 1, 2, 3, 4]
dq.pop()          # returns 4 -> [0, 1, 2, 3]
dq.popleft()      # returns 0 -> [1, 2, 3]

# Rotate
dq.rotate(1)      # Moves last element to first: [3, 1, 2]
dq.rotate(-1)     # Moves first element to last: [1, 2, 3]

# 🤖 ML Connection: Sliding Windows
# Deques are perfect for sliding window problems, e.g., moving average over time-series data
window = deque(maxlen=3) # Automatically drops oldest items when full
for i in range(5):
    window.append(i)
    # Output trace: deque([0]), deque([0, 1]), deque([0, 1, 2]), deque([1, 2, 3]), deque([2, 3, 4])
```

## 7. Heapq

`heapq` provides min-heap functionality. A heap is a binary tree where the parent is smaller than its children. Essential for Priority Queues (Dijkstra's, A*, scheduling).

```python
import heapq

# Min Heap
nums = [5, 7, 9, 1, 3]
heapq.heapify(nums) # Modifies list in-place in O(N) time
# nums becomes [1, 3, 9, 7, 5]
smallest = heapq.heappop(nums) # 1
heapq.heappush(nums, 2)

# Max Heap Trick
# Python only has min-heap. Multiply by -1 to simulate max-heap.
max_nums = [-5, -7, -9, -1, -3]
heapq.heapify(max_nums)
largest = -heapq.heappop(max_nums) # 9

# nlargest / nsmallest (More efficient than sorting for small N)
big_list = [10, 2, 34, 54, 21, 99, 1]
top_3 = heapq.nlargest(3, big_list)     # [99, 54, 34]
bottom_2 = heapq.nsmallest(2, big_list) # [1, 2]

# Priority Queue Pattern
pq = []
heapq.heappush(pq, (2, "Task B")) # (Priority, Task)
heapq.heappush(pq, (1, "Task A"))
heapq.heappush(pq, (3, "Task C"))
# Popping will yield (1, "Task A") first
```

## 8. Nested Data Structures

ML requires manipulating complex states. Combining structures is key.

```python
# List of Dicts (Common in JSON responses / Dataset records)
dataset = [
    {"id": 1, "feature": [0.1, 0.5]},
    {"id": 2, "feature": [0.9, 0.2]}
]
features = [row["feature"] for row in dataset]

# Dict of Lists (Feature Columns)
dataframe = {
    "age": [25, 30, 22],
    "salary": [50000, 70000, 45000]
}

# Matrix representation
# Use 1D lists with math for heavy ops, but 2D lists are common for DP (Dynamic Programming)
rows, cols = 3, 4
dp_table = [[0] * cols for _ in range(rows)]
```

## 9. When to Use What?

| Structure | Best For | Time Complexity (Key Ops) | Mutable? | Ordered? |
| :--- | :--- | :--- | :--- | :--- |
| **List** | Ordered collections, Stacks, Iteration | Append $O(1)$, Pop/Insert $O(N)$ | Yes | Yes |
| **Tuple** | Fixed-size records, Dict keys | Access $O(1)$ | No | Yes |
| **Dict** | Key-value mapping, Caching/Memoization | Lookup/Insert $O(1)$ avg | Yes | Yes (Python 3.7+) |
| **Set** | Uniqueness, Fast Membership Testing | Lookup/Insert $O(1)$ avg | Yes | No |
| **Deque** | Queues, BFS, Sliding Windows | Pop/Append both ends $O(1)$ | Yes | Yes |
| **Heap** | Priority Queues, Top K Elements | Push/Pop $O(\log N)$, Find Min $O(1)$ | Yes | Weakly Ordered |

## 10. Practice Problems

1. Implement a queue using two stacks (lists).
2. Given a list of words, use `Counter` to find the top $K$ most frequent words.
3. Write a function that flattens a deeply nested list of lists using a generator.
4. Implement a sliding window maximum algorithm using `collections.deque`.
5. Create an LRU (Least Recently Used) cache using `collections.OrderedDict` or standard dict.
6. Use sets to find all unique characters shared across 3 different strings.
7. Implement Dijkstra's shortest path algorithm using a dictionary for graphs and `heapq` for the priority queue.
8. Merge a list of dictionaries into a single dictionary, summing values for duplicate keys using `defaultdict`.
9. Use tuple unpacking to swap two variables, then rotate 3 variables ($A \rightarrow B, B \rightarrow C, C \rightarrow A$).
10. Find the $K^{th}$ largest element in an unsorted array using a heap in $O(N \log K)$ time.

Related notes: [[Python Syntax Power Moves]], [[Python Standard Library Gems]], [[DSA Arrays and Strings]]
