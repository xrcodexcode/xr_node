---
id: 9fae155e-e47c-47b2-a4f6-8c9e54a5a549
title: DSA Hashing
type: atomic-note
status: learning
domain: general
source_type: course
created: 2026-07-24
updated: 2026-07-24
review: 2026-08-24
confidence: 85
version: 1
aliases: [Hash Maps, Hash Tables, Sets, Hashing]
tags: [implementation, example]
owner_moc: Python DSA ML Mastery MOC
sources: []
related: ["[[DSA Arrays and Strings]]", "[[DSA Linked Lists]]", "[[Python Data Structures Builtins]]"]
schema_version: 4
---

Hashing is arguably the single most important concept in Data Structures and Algorithms for Machine Learning Engineering. The ability to achieve $O(1)$ average time complexity for lookups, insertions, and deletions allows you to dramatically optimize everything from frequency counts in NLP tokenization to caching expensive model inferences. Mastering hash maps and hash sets shifts your algorithmic thinking from "How do I search for this?" to "How do I map this for instant access?".

## 1. How Hashing Works

At its core, a hash table is an array. A **hash function** maps keys (like strings or objects) to integer indices in that array.

### The Hash Function & Collisions
Since the array size is finite but the key space is infinite, two different keys will inevitably hash to the same index. This is a **collision**.

Two main ways to handle collisions:
1. **Chaining**: Each array index holds a linked list of entries.
2. **Open Addressing**: If an index is full, probe for the next empty slot (linear probing, quadratic probing).

### Load Factor
The load factor $\alpha = \frac{n}{k}$ where $n$ is the number of elements and $k$ is the number of buckets. When the load factor exceeds a threshold (e.g., 0.75), the hash table resizes itself (usually doubling in size) and rehashes all elements to maintain $O(1)$ operations.

## 2. Python `dict` Internals

Python's `dict` uses a highly optimized hash table with **open addressing** (specifically randomized probing).

🤖 **ML Connection**: In machine learning, you frequently use dictionaries to map categorical string labels to integer IDs for embedding layers. Understanding dict performance helps you process massive datasets efficiently.

```python
# To be hashable in Python, an object must implement __hash__() and __eq__()
class CustomModelConfig:
    def __init__(self, layers, lr):
        self.layers = layers
        self.lr = lr
        
    def __hash__(self):
        # Hash based on immutable properties
        return hash((self.layers, self.lr))
        
    def __eq__(self, other):
        # Define when two configs are considered equal
        if not isinstance(other, CustomModelConfig):
            return False
        return self.layers == other.layers and self.lr == other.lr

# Now we can use it as a dict key
config1 = CustomModelConfig(3, 0.01)
config2 = CustomModelConfig(5, 0.001)

cache = {config1: "Model A weights", config2: "Model B weights"}
print(cache[CustomModelConfig(3, 0.01)]) 
# Output: Model A weights
```

## 3. Hash Map Patterns

### Frequency Counting
The most basic pattern. Count occurrences to solve problems.

```python
def count_chars(s: str) -> dict:
    counts = {}
    for char in s:
        # get() with default 0 handles missing keys elegantly
        counts[char] = counts.get(char, 0) + 1
    return counts

# Output: {'m': 1, 'l': 2, ' ': 1, 'r': 1, 'u': 1, 'l': 1, 'e': 1, 's': 1}
print(count_chars("ml rules"))
```

### The Two Sum Pattern (Complement Search)
Instead of nesting loops ($O(n^2)$), use a hash map to store what you've seen and look for the complement ($O(n)$).

🎯 **Interview Tip**: Anytime a problem asks for pairs that satisfy a condition, think "Hash Map Complement".

```python
def two_sum(nums: list[int], target: int) -> list[int]:
    seen = {} # val -> index
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []

# Output: [1, 2]
print(two_sum([3, 2, 4], 6))
```

### Group Anagrams
Use sorted strings or character frequency tuples as keys to group similar items.

```python
def group_anagrams(strs: list[str]) -> list[list[str]]:
    groups = {}
    for s in strs:
        # Sort string to create a canonical key
        key = "".join(sorted(s))
        if key not in groups:
            groups[key] = []
        groups[key].append(s)
    return list(groups.values())

# Output: [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]
print(group_anagrams(["eat","tea","tan","ate","nat","bat"]))
```

### Subarray Sum Equals K (Prefix Sum + Hash Map)
A very common pattern for contiguous subarrays. Keep a running sum (prefix sum) and use a hash map to count how many times we've seen `current_sum - k`.

```python
def subarray_sum(nums: list[int], k: int) -> int:
    # Initialize with 0:1 to handle subarrays starting at index 0
    prefix_counts = {0: 1} 
    current_sum = 0
    count = 0
    
    for num in nums:
        current_sum += num
        # If we saw (current_sum - k) before, it means the subarray 
        # from that point to here sums to k!
        if current_sum - k in prefix_counts:
            count += prefix_counts[current_sum - k]
            
        prefix_counts[current_sum] = prefix_counts.get(current_sum, 0) + 1
        
    return count

# Output: 2
print(subarray_sum([1, 1, 1], 2)) 
```

### Longest Consecutive Sequence
Turn an array into a hash set for $O(1)$ lookups, then only build sequences starting from the "start" of a sequence (elements where `num - 1` doesn't exist).

```python
def longest_consecutive(nums: list[int]) -> int:
    num_set = set(nums)
    longest = 0
    
    for num in num_set:
        # Check if it's the start of a sequence
        if (num - 1) not in num_set:
            current_num = num
            current_streak = 1
            
            while (current_num + 1) in num_set:
                current_num += 1
                current_streak += 1
                
            longest = max(longest, current_streak)
            
    return longest

# Output: 4 (sequence is 1, 2, 3, 4)
print(longest_consecutive([100, 4, 200, 1, 3, 2]))
```

## 4. Hash Set Patterns

Use sets when you only care about *existence* and don't need a value associated with a key.

### Duplicate Detection
```python
def has_duplicate(nums: list[int]) -> bool:
    # A set is smaller than the list if duplicates exist
    return len(set(nums)) < len(nums)
```

### Intersection/Union
Sets support highly optimized mathematical operations.

```python
def common_elements(arr1: list[int], arr2: list[int]) -> list[int]:
    set1, set2 = set(arr1), set(arr2)
    # Fast intersection using &
    return list(set1 & set2)

# Union: set1 | set2
# Difference: set1 - set2
```

## 5. `Counter` from collections

`Counter` is a subclass of `dict` designed specifically for counting hashable objects. It is incredibly useful in ML for analyzing dataset distributions or vocabulary frequencies.

```python
from collections import Counter

# Automatically counts frequencies
doc_tokens = ['model', 'data', 'model', 'training', 'data', 'model']
freq = Counter(doc_tokens)
print(freq) 
# Output: Counter({'model': 3, 'data': 2, 'training': 1})

# Get top K frequent elements easily
print(freq.most_common(2)) 
# Output: [('model', 3), ('data', 2)]

# Math operations are supported!
c1 = Counter(a=3, b=1)
c2 = Counter(a=1, b=2)
print(c1 + c2) # Output: Counter({'a': 4, 'b': 3})
print(c1 - c2) # Output: Counter({'a': 2}) (negative/zero counts are dropped)
```

## 6. `defaultdict` Patterns

A `defaultdict` automatically creates a new entry with a default value if the key doesn't exist, preventing `KeyError`.

### Graph Adjacency List
```python
from collections import defaultdict

edges = [("A", "B"), ("A", "C"), ("B", "D")]
# Create a dictionary where every missing key gets an empty list
graph = defaultdict(list)

for u, v in edges:
    graph[u].append(v)
    
print(dict(graph))
# Output: {'A': ['B', 'C'], 'B': ['D']}
```

## 7. Building a Hash Map from Scratch

Implementing a hash map is a classic interview question to test your understanding of collision handling and resizing. Here's a chaining implementation.

```python
class Node:
    def __init__(self, key, value):
        self.key = key
        self.value = value
        self.next = None

class MyHashMap:
    def __init__(self, capacity=16):
        self.capacity = capacity
        self.size = 0
        self.buckets = [None] * self.capacity
        
    def _hash(self, key):
        # Use Python's built-in hash, map it to bucket index
        return hash(key) % self.capacity
        
    def put(self, key, value):
        index = self._hash(key)
        head = self.buckets[index]
        
        # Update if exists
        current = head
        while current:
            if current.key == key:
                current.value = value
                return
            current = current.next
            
        # Insert at head of linked list
        new_node = Node(key, value)
        new_node.next = head
        self.buckets[index] = new_node
        self.size += 1
        
        # Real implementations would check load factor and resize here
        
    def get(self, key):
        index = self._hash(key)
        current = self.buckets[index]
        while current:
            if current.key == key:
                return current.value
            current = current.next
        return -1
        
    def remove(self, key):
        index = self._hash(key)
        current = self.buckets[index]
        prev = None
        
        while current:
            if current.key == key:
                if prev:
                    prev.next = current.next
                else:
                    self.buckets[index] = current.next
                self.size -= 1
                return
            prev = current
            current = current.next

# Usage
hm = MyHashMap()
hm.put("ML", "Awesome")
print(hm.get("ML")) # Output: Awesome
```

## 8. Hashing in Competitive Programming

### Rolling Hash (Rabin-Karp)
Used to find string matches in $O(N)$ time instead of $O(N \cdot M)$. Computes a hash for a sliding window.

```python
def rabin_karp(text: str, pattern: str) -> list[int]:
    if len(pattern) > len(text):
        return []
        
    base = 256
    mod = 10**9 + 7
    n, m = len(text), len(pattern)
    
    # Calculate hash for pattern and first window of text
    pattern_hash = 0
    window_hash = 0
    h = pow(base, m - 1, mod) # base^(m-1) % mod
    
    for i in range(m):
        pattern_hash = (base * pattern_hash + ord(pattern[i])) % mod
        window_hash = (base * window_hash + ord(text[i])) % mod
        
    matches = []
    
    # Slide window
    for i in range(n - m + 1):
        if pattern_hash == window_hash:
            # Hash match! Verify to avoid false positives (hash collision)
            if text[i:i+m] == pattern:
                matches.append(i)
                
        # Calculate hash for next window
        if i < n - m:
            # Remove leading digit, add trailing digit
            window_hash = (window_hash - ord(text[i]) * h) % mod
            window_hash = (window_hash * base + ord(text[i + m])) % mod
            # Handle negative modulo in some languages, python handles it fine but good practice
            window_hash = (window_hash + mod) % mod
            
    return matches

# Output: [0, 10]
print(rabin_karp("AABAACAADAABAABA", "AABA"))
```

## 9. Common Interview Problems

### Valid Anagram
Are two strings anagrams of each other?

```python
# Complexity: Time O(N), Space O(1) (26 characters max)
def is_anagram(s: str, t: str) -> bool:
    if len(s) != len(t): return False
    return Counter(s) == Counter(t)
```

### Top K Frequent Elements
Return the `k` most frequent elements.

```python
import heapq
# Complexity: Time O(N log K), Space O(N)
def top_k_frequent(nums: list[int], k: int) -> list[int]:
    counts = Counter(nums)
    # Using a heap is better than sorting if K is small relative to N
    return heapq.nlargest(k, counts.keys(), key=counts.get)
```

### Longest Substring Without Repeating Characters
Sliding window + Hash Set/Map.

```python
# Complexity: Time O(N), Space O(min(N, M)) where M is charset size
def length_of_longest_substring(s: str) -> int:
    char_index = {} # stores last seen index of char
    left = 0
    longest = 0
    
    for right, char in enumerate(s):
        if char in char_index and char_index[char] >= left:
            # Move left pointer past the previous occurrence
            left = char_index[char] + 1
            
        char_index[char] = right
        longest = max(longest, right - left + 1)
        
    return longest
```

### Word Pattern
Given a pattern and a string `s`, find if `s` follows the same pattern. Bijection map.

```python
# Complexity: Time O(N), Space O(N)
def word_pattern(pattern: str, s: str) -> bool:
    words = s.split()
    if len(pattern) != len(words):
        return False
        
    char_to_word = {}
    word_to_char = {}
    
    for c, w in zip(pattern, words):
        if c in char_to_word and char_to_word[c] != w:
            return False
        if w in word_to_char and word_to_char[w] != c:
            return False
            
        char_to_word[c] = w
        word_to_char[w] = c
        
    return True
```

### LRU Cache (Intro)
Often built with a Hash Map + Doubly Linked List in interviews. Python's `OrderedDict` does this internally.

```python
from collections import OrderedDict

class LRUCache:
    def __init__(self, capacity: int):
        self.cache = OrderedDict()
        self.capacity = capacity

    def get(self, key: int) -> int:
        if key not in self.cache:
            return -1
        # Move to end to show it was recently used
        self.cache.move_to_end(key)
        return self.cache[key]

    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            self.cache.move_to_end(key)
        self.cache[key] = value
        if len(self.cache) > self.capacity:
            # popitem(last=False) pops the first item (least recently used)
            self.cache.popitem(last=False)
```

## Practice Problems
1. Implement an LRU Cache without using `OrderedDict`.
2. Find the First Unique Character in a String (LeetCode 387).
3. Find All Anagrams in a String (LeetCode 438) - Sliding window + hash map.
4. Isomorphic Strings (LeetCode 205).
5. Happy Number (LeetCode 202).
6. Maximum Size Subarray Sum Equals k (LeetCode 325).
7. Copy List with Random Pointer (LeetCode 138).
8. Minimum Window Substring (LeetCode 76) - Hard but essential sliding window + hash map.
9. Contiguous Array (LeetCode 525) - Max length subarray with equal 0s and 1s.
10. LFU Cache (LeetCode 460) - Next level up from LRU cache.
