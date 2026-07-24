---
id: 9d73d2a4-b0a3-4876-b9e1-6380693d25d1
title: DSA Greedy Algorithms
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
related: ["[[DSA Dynamic Programming]]", "[[DSA Sorting and Searching]]", "[[DSA Arrays and Strings]]"]
schema_version: 4
---

Greedy algorithms are a paradigm where we make the locally optimal choice at each step with the hope of finding a global optimum. For ML engineering, mastering greedy algorithms is essential because many real-world optimizations (like decision tree splits or beam search in NLP) rely on greedy heuristics when computing an exact global optimum is computationally intractable. Understanding when a greedy approach works (and when it fails!) helps you design efficient, approximate algorithms for large-scale ML systems.

## 1. Greedy vs Dynamic Programming (DP)

### Intuition
A greedy algorithm makes a choice that looks best at the moment and *never looks back*. DP, on the other hand, evaluates multiple choices and keeps track of overlapping subproblems to find the global optimum.

For a greedy algorithm to yield an optimal solution, the problem must possess two properties:
1. **Greedy Choice Property:** A global optimum can be arrived at by selecting a local optimum.
2. **Optimal Substructure:** An optimal solution to the problem contains optimal solutions to subproblems.

> 🤖 **ML Connection:** In Decision Trees (like CART or XGBoost), we use a greedy approach at each node to find the best split (maximizing Information Gain). We don't look ahead to see how this split affects deep branches, because finding the globally optimal tree is NP-complete.

### When Greedy Fails: The Coin Change Problem
If coins are `[1, 5, 10, 20, 25, 50]`, greedy works for US currency. But if coins are `[1, 3, 4]` and you need 6:
- Greedy chooses 4, then 1, then 1 (3 coins).
- DP chooses 3, then 3 (2 coins - optimal).

## 2. Activity Selection

### Intuition
You are given $n$ activities with start and finish times. You want to select the maximum number of non-overlapping activities.
**Greedy Strategy:** Always pick the next activity that *finishes earliest* and doesn't overlap with the last chosen activity. This leaves the maximum possible time for remaining activities.

```python
def activity_selection(start, finish):
    """
    Finds the maximum number of activities that can be performed.
    Time: O(N log N) for sorting, Space: O(N)
    """
    n = len(start)
    # Combine and sort by finish time
    activities = sorted(list(zip(start, finish)), key=lambda x: x[1])
    
    selected = [activities[0]]
    last_finish = activities[0][1]
    
    for i in range(1, n):
        if activities[i][0] >= last_finish:
            selected.append(activities[i])
            last_finish = activities[i][1]
            
    return selected

# Example Usage
start  = [1, 3, 0, 5, 8, 5]
finish = [2, 4, 6, 7, 9, 9]
# Output: [(1, 2), (3, 4), (5, 7), (8, 9)]
print(activity_selection(start, finish))
```

## 3. Interval Scheduling

### Non-overlapping Intervals
Similar to Activity Selection. Given a collection of intervals, find the minimum number of intervals you need to remove to make the rest non-overlapping.
**Greedy Strategy:** Sort by end times. If an interval starts before the current end time, it overlaps, so we "remove" it (count it). Otherwise, update the current end time.

```python
def eraseOverlapIntervals(intervals: list[list[int]]) -> int:
    """
    Time: O(N log N), Space: O(1)
    """
    if not intervals: return 0
    
    intervals.sort(key=lambda x: x[1])
    end_time = intervals[0][1]
    removed = 0
    
    for i in range(1, len(intervals)):
        if intervals[i][0] < end_time:
            # Overlap found!
            removed += 1
        else:
            # No overlap, update end_time
            end_time = intervals[i][1]
            
    return removed

# Example: [[1,2], [2,3], [3,4], [1,3]]
# Output: 1 (remove [1,3])
print(eraseOverlapIntervals([[1,2], [2,3], [3,4], [1,3]]))
```

### Merge Intervals (Greedy Perspective)
Sort by start times. Iterate and maintain the current interval. If the next interval overlaps, merge them greedily by taking the maximum end time.

### Meeting Rooms I and II
**Meeting Rooms I:** Can a person attend all meetings? (Just check for any overlap).
**Meeting Rooms II:** Minimum number of conference rooms required?

**Greedy Strategy (Chronological Ordering):** Treat start times as "+1 room needed" and end times as "-1 room needed". Sort all events and keep a running sum!

```python
def minMeetingRooms(intervals: list[list[int]]) -> int:
    """
    Time: O(N log N), Space: O(N)
    """
    events = []
    for start, end in intervals:
        events.append((start, 1))  # 1 means meeting starts
        events.append((end, -1))   # -1 means meeting ends
        
    # Sort by time. If times are equal, end (-1) comes before start (1)
    events.sort(key=lambda x: (x[0], x[1]))
    
    max_rooms = 0
    current_rooms = 0
    
    for time, change in events:
        current_rooms += change
        max_rooms = max(max_rooms, current_rooms)
        
    return max_rooms

# Output: 2
print(minMeetingRooms([[0, 30], [5, 10], [15, 20]]))
```

## 4. Fractional Knapsack

### Intuition
Unlike 0/1 Knapsack where you must take the whole item or none (which requires DP), Fractional Knapsack allows you to break items into fractions.
**Greedy Strategy:** Sort items by their value-to-weight ratio in descending order. Take as much of the high-ratio items as possible.

```python
class Item:
    def __init__(self, value, weight):
        self.value = value
        self.weight = weight

def fractional_knapsack(W: int, items: list[Item]) -> float:
    """
    Time: O(N log N), Space: O(1)
    """
    # Sort by value/weight ratio descending
    items.sort(key=lambda x: x.value / x.weight, reverse=True)
    
    total_value = 0.0
    
    for item in items:
        if W >= item.weight:
            # Take full item
            W -= item.weight
            total_value += item.value
        else:
            # Take fractional part
            total_value += item.value * (W / item.weight)
            break # Knapsack is full
            
    return total_value

items = [Item(60, 10), Item(100, 20), Item(120, 30)]
# Output: 240.0
print(fractional_knapsack(50, items))
```

## 5. Jump Game (I & II)

### Jump Game I (Can Reach End?)
You have an array of maximum jump lengths. Can you reach the last index?
**Greedy Strategy:** Maintain the `max_reachable` index. If at any point your current index is greater than `max_reachable`, you're stuck.

```python
def canJump(nums: list[int]) -> bool:
    """
    Time: O(N), Space: O(1)
    """
    max_reachable = 0
    for i, jump in enumerate(nums):
        if i > max_reachable:
            return False
        max_reachable = max(max_reachable, i + jump)
        if max_reachable >= len(nums) - 1:
            return True
    return True
```

### Jump Game II (Minimum Jumps)
**Greedy Strategy:** Instead of standard BFS, keep track of the `current_jump_end` and the `farthest` we can reach. When we hit `current_jump_end`, we must make a jump.

```python
def jump(nums: list[int]) -> int:
    """
    Time: O(N), Space: O(1)
    """
    jumps = 0
    current_jump_end = 0
    farthest = 0
    
    # Don't iterate the last element, we are already there
    for i in range(len(nums) - 1):
        farthest = max(farthest, i + nums[i])
        
        if i == current_jump_end:
            jumps += 1
            current_jump_end = farthest
            
    return jumps
```

## 6. Huffman Coding

### Intuition
Used in data compression. We want to assign variable-length codes to characters such that more frequent characters get shorter codes.
**Greedy Strategy:** Repeatedly merge the two least frequent characters/nodes to build a binary tree from the bottom up. A Min-Heap (Priority Queue) is perfect for this.

```python
import heapq

class Node:
    def __init__(self, char, freq):
        self.char = char
        self.freq = freq
        self.left = None
        self.right = None
        
    # Define comparison for Priority Queue
    def __lt__(self, other):
        return self.freq < other.freq

def huffman_coding(frequencies: dict) -> dict:
    """
    Time: O(N log N) where N is number of unique characters
    """
    heap = [Node(char, freq) for char, freq in frequencies.items()]
    heapq.heapify(heap)
    
    while len(heap) > 1:
        left = heapq.heappop(heap)
        right = heapq.heappop(heap)
        
        # Internal node with sum of frequencies
        merged = Node(None, left.freq + right.freq)
        merged.left = left
        merged.right = right
        heapq.heappush(heap, merged)
        
    # Tree is built. Now generate codes via DFS
    root = heap[0]
    codes = {}
    
    def generate_codes(node, current_code):
        if not node: return
        if node.char is not None: # Leaf node
            codes[node.char] = current_code
        generate_codes(node.left, current_code + "0")
        generate_codes(node.right, current_code + "1")
        
    generate_codes(root, "")
    return codes

# Output: {'f': '0', 'c': '100', 'd': '101', 'a': '1100', 'b': '1101', 'e': '111'}
print(huffman_coding({'a': 5, 'b': 9, 'c': 12, 'd': 13, 'e': 16, 'f': 45}))
```

## 7. Job Sequencing

### Intuition
Given jobs with deadlines and profits, maximize profit. Each job takes 1 unit of time.
**Greedy Strategy:** Sort jobs by descending profit. Try to schedule each job as late as possible (closest to its deadline) to keep earlier slots open for other jobs.

```python
def job_sequencing(jobs: list[tuple]) -> tuple:
    """
    jobs = [(id, deadline, profit)]
    Time: O(N^2) worst case, can be optimized to O(N log N) using Disjoint Set
    """
    # Sort by profit descending
    jobs.sort(key=lambda x: x[2], reverse=True)
    
    max_deadline = max(job[1] for job in jobs)
    # Slots to keep track of filled time slots
    slots = [-1] * (max_deadline + 1) 
    
    total_profit = 0
    jobs_done = 0
    
    for job in jobs:
        # Start from the deadline and find an empty slot before it
        for j in range(job[1], 0, -1):
            if slots[j] == -1:
                slots[j] = job[0]
                total_profit += job[2]
                jobs_done += 1
                break
                
    return jobs_done, total_profit

jobs = [('J1', 2, 60), ('J2', 1, 100), ('J3', 3, 20), ('J4', 2, 40), ('J5', 1, 20)]
# Output: (3, 200) -> Jobs J2, J1, J3
print(job_sequencing(jobs))
```

## 8. Minimum Platforms

### Intuition
Given arrival and departure times of trains, find the minimum platforms needed. This is exactly the same logic as Meeting Rooms II!
**Greedy Strategy:** Sort arrival and departure times independently. Use two pointers to iterate through them, tracking overlapping trains.

```python
def find_platform(arr: list[int], dep: list[int]) -> int:
    """
    Time: O(N log N)
    """
    arr.sort()
    dep.sort()
    
    platforms_needed = 1
    max_platforms = 1
    
    i = 1 # Pointer for arrival
    j = 0 # Pointer for departure
    n = len(arr)
    
    while i < n and j < n:
        if arr[i] <= dep[j]:
            # A train arrives before or when the previous train leaves
            platforms_needed += 1
            i += 1
        else:
            # A train leaves
            platforms_needed -= 1
            j += 1
            
        max_platforms = max(max_platforms, platforms_needed)
        
    return max_platforms

# Output: 3
print(find_platform([900, 940, 950, 1100, 1500, 1800], 
                    [910, 1200, 1120, 1130, 1900, 2000]))
```

## 9. Gas Station

### Intuition
You have a circular route with gas stations. Can you complete the circuit?
**Greedy Strategy:** If total gas < total cost, it's impossible. Otherwise, a solution exists. We iterate through the stations. If at any point our tank goes below 0, the starting station couldn't have been anything we've traversed so far, so we set the next station as the starting candidate and reset tank.

```python
def canCompleteCircuit(gas: list[int], cost: list[int]) -> int:
    """
    Time: O(N), Space: O(1)
    """
    if sum(gas) < sum(cost):
        return -1
        
    current_gas = 0
    start_index = 0
    
    for i in range(len(gas)):
        current_gas += gas[i] - cost[i]
        
        if current_gas < 0:
            start_index = i + 1
            current_gas = 0
            
    return start_index
```

## 10. Candy Distribution

### Intuition
Distribute candies to children based on ratings. Each child must have at least 1 candy. Children with a higher rating get more candies than their neighbors.
**Greedy Strategy:** Do a two-pass greedy scan. Left-to-right (ensure right child gets more if rating is higher) and right-to-left (ensure left child gets more if rating is higher).

```python
def candy(ratings: list[int]) -> int:
    """
    Time: O(N), Space: O(N)
    """
    n = len(ratings)
    candies = [1] * n
    
    # Left to right pass
    for i in range(1, n):
        if ratings[i] > ratings[i-1]:
            candies[i] = candies[i-1] + 1
            
    # Right to left pass
    for i in range(n-2, -1, -1):
        if ratings[i] > ratings[i+1]:
            candies[i] = max(candies[i], candies[i+1] + 1)
            
    return sum(candies)
```

## 11. Common Interview Problems

### Best Time to Buy and Sell Stock II
**Problem:** Can buy/sell multiple times. Maximize profit.
**Greedy Approach:** If tomorrow's price is higher than today's, buy today and sell tomorrow. Accumulate all upward slopes.
```python
def maxProfit(prices: list[int]) -> int:
    profit = 0
    for i in range(1, len(prices)):
        if prices[i] > prices[i-1]:
            profit += prices[i] - prices[i-1]
    return profit
```

### Assign Cookies
**Problem:** Maximize number of content children. Each child has a greed factor, each cookie has a size.
**Greedy Approach:** Sort both arrays. Give the smallest cookie that can satisfy the least greedy child.
```python
def findContentChildren(g: list[int], s: list[int]) -> int:
    g.sort()
    s.sort()
    i, j = 0, 0
    while i < len(g) and j < len(s):
        if s[j] >= g[i]:
            i += 1 # Child is content
        j += 1 # Move to next cookie
    return i
```

### Lemonade Change
**Problem:** Provide change ($5, $10) for $5, $10, $20 bills.
**Greedy Approach:** Always try to give back a $10 bill instead of two $5 bills when giving change for $20, because $5 bills are more versatile.

### Task Scheduler
**Problem:** Schedule tasks with cooling period.
**Greedy Approach:** Schedule the most frequent tasks first.

### Valid Parenthesis String
**Problem:** Contains '(', ')', and '*'. Determine if valid.
**Greedy Approach:** Maintain the minimum and maximum possible number of open parentheses.

## 12. Greedy in Machine Learning

### 🤖 Why this matters for ML

1. **Greedy Feature Selection (Forward Selection):**
   Instead of testing all $2^N$ combinations of features, start with an empty set. At each step, add the feature that improves model performance the most. This is a greedy heuristic that scales well for high-dimensional data.
   
2. **Beam Search in NLP:**
   In Sequence-to-Sequence models (like Transformers for translation), finding the globally optimal sentence (highest probability) requires exhaustively generating all sequences. Instead, Beam Search greedily keeps the top-K most probable partial sequences at each step.

3. **Greedy Splitting in Decision Trees (CART/XGBoost):**
   When growing a tree, evaluating every possible tree structure is impossible. Trees use a greedy approach: at the current node, find the single feature and threshold that maximizes Information Gain (or minimizes Gini Impurity) right now.

## Practice Problems
1. LeetCode 435: Non-overlapping Intervals
2. LeetCode 452: Minimum Number of Arrows to Burst Balloons
3. LeetCode 134: Gas Station
4. LeetCode 135: Candy
5. LeetCode 406: Queue Reconstruction by Height
6. LeetCode 763: Partition Labels
7. LeetCode 621: Task Scheduler
8. LeetCode 55: Jump Game
9. LeetCode 45: Jump Game II
10. LeetCode 678: Valid Parenthesis String
