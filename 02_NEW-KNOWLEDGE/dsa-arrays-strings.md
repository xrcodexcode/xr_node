---
id: 54134764-a62c-47bc-bb39-db3edc32d431
title: DSA Arrays And Strings
type: atomic-note
status: learning
domain: general
source_type: course
created: 2026-07-24
updated: 2026-07-24
review: 2026-08-24
confidence: 85
version: 1
aliases: ["Arrays and Strings", "Python Arrays"]
tags: [implementation, example]
owner_moc: Python DSA ML Mastery MOC
sources: []
related: ["[[DSA Complexity Analysis]]", "[[DSA Hashing]]", "[[DSA Two Pointers and Sliding Window]]", "[[Python Data Structures Builtins]]"]
schema_version: 4
---

Arrays and Strings are the fundamental building blocks of almost all other data structures. In the context of Machine Learning engineering, manipulating multidimensional arrays (tensors) efficiently is the core of model training and inference. Understanding memory layout, contiguous memory access, and efficient traversal patterns like sliding windows and two pointers directly translates to writing performant vectorization logic in NumPy or PyTorch, preventing OOM errors and maximizing hardware utilization.

## 1. Array Fundamentals in Python

Python's built-in `list` acts as a dynamic array. Under the hood, it's a contiguous array of pointers to the actual objects in memory. When the list fills up, Python allocates a larger array (usually 1.125x to 2x the size), copies elements over, and updates references.

🎯 **Interview Tip:** Always clarify if the interviewer wants you to modify arrays in-place (Space complexity $O(1)$) or if returning a new array is acceptable.

```python
import sys

# Dynamic sizing in action
my_list = []
print(f"Empty list size: {sys.getsizeof(my_list)} bytes") # Output: varies, typically ~56 bytes
my_list.append(1)
print(f"Size after 1 element: {sys.getsizeof(my_list)} bytes") # Output: ~88 bytes

# Common Time Complexities:
# Access: O(1) - array[i]
# Append: O(1) amortized - array.append(val)
# Insert/Delete at beginning/middle: O(N) - involves shifting elements
# Search: O(N) for unsorted, O(log N) if sorted

# Edge cases: 
# Accessing out of bounds raises IndexError. 
# Negative indexing (-1 is last element).
```

🤖 **ML Connection:** Standard Python lists are slow for heavy math because of pointer indirection and type checking overhead. This is why we use `numpy.ndarray` in ML, which stores contiguous block of actual typed data (like int32 or float32), enabling CPU caching and SIMD vector operations.

## 2. Two Pointer Technique

Two pointers is a pattern where two references step through a data structure in a coordinated way, typically saving $O(N)$ space or reducing time complexity from $O(N^2)$ to $O(N)$.

### Opposite Direction: Palindrome Check
Check if a string reads the same forwards and backwards.

```python
def is_palindrome(s: str) -> bool:
    """
    Time: O(N), Space: O(1)
    """
    left, right = 0, len(s) - 1
    while left < right:
        # Ignore non-alphanumeric (common interview twist)
        while left < right and not s[left].isalnum():
            left += 1
        while left < right and not s[right].isalnum():
            right -= 1
            
        if s[left].lower() != s[right].lower():
            return False
        left += 1
        right -= 1
    return True

print(is_palindrome("A man, a plan, a canal: Panama")) # Output: True
```

### Opposite Direction: Container With Most Water
Given an array of heights, find two lines that together with x-axis form a container, such that it contains the most water.

```python
def max_area(height: list[int]) -> int:
    """
    Time: O(N), Space: O(1)
    Intuition: Start with widest container. Move the pointer of the shorter line 
    inwards, hoping to find a taller line to compensate for reduced width.
    """
    left, right = 0, len(height) - 1
    max_water = 0
    
    while left < right:
        width = right - left
        h = min(height[left], height[right])
        max_water = max(max_water, width * h)
        
        if height[left] < height[right]:
            left += 1
        else:
            right -= 1
            
    return max_water

print(max_area([1,8,6,2,5,4,8,3,7])) # Output: 49
```

### Same Direction: Remove Duplicates from Sorted Array
```python
def remove_duplicates(nums: list[int]) -> int:
    """
    Time: O(N), Space: O(1)
    """
    if not nums: return 0
    
    slow = 0
    # Fast pointer explores the array
    for fast in range(1, len(nums)):
        # When we find a new unique element
        if nums[fast] != nums[slow]:
            slow += 1
            nums[slow] = nums[fast]
            
    # Return length of unique elements
    return slow + 1

arr = [0,0,1,1,1,2,2,3,3,4]
k = remove_duplicates(arr)
print(f"Unique count: {k}, Array: {arr[:k]}") # Output: Unique count: 5, Array: [0, 1, 2, 3, 4]
```

## 3. Sliding Window

Useful for finding subarrays/substrings that satisfy certain conditions.

### Fixed Window: Max Sum Subarray of Size K
```python
def max_sum_subarray(arr: list[int], k: int) -> int:
    """
    Time: O(N), Space: O(1)
    """
    if not arr or k <= 0 or k > len(arr): return 0
    
    # Calculate sum of first window
    window_sum = sum(arr[:k])
    max_sum = window_sum
    
    # Slide the window
    for i in range(len(arr) - k):
        # Subtract outgoing element, add incoming element
        window_sum = window_sum - arr[i] + arr[i + k]
        max_sum = max(max_sum, window_sum)
        
    return max_sum

print(max_sum_subarray([2, 1, 5, 1, 3, 2], 3)) # Output: 9 (subarray [5, 1, 3])
```

### Variable Window: Longest Substring Without Repeating Characters
```python
def length_of_longest_substring(s: str) -> int:
    """
    Time: O(N), Space: O(min(N, charset))
    """
    char_index = {} # Tracks the latest index of each char
    max_len = 0
    left = 0
    
    for right, char in enumerate(s):
        # If seen before, shrink window from left
        if char in char_index and char_index[char] >= left:
            left = char_index[char] + 1
            
        char_index[char] = right
        max_len = max(max_len, right - left + 1)
        
    return max_len

print(length_of_longest_substring("abcabcbb")) # Output: 3 ("abc")
```

## 4. Prefix Sum

Prefix sum array `P` of array `A` is defined as `P[i] = A[0] + A[1] + ... + A[i]`. Allows querying sum of any subarray `A[i:j]` in $O(1)$ time as `P[j] - P[i-1]`.

### Subarray Sum Equals K
```python
def subarray_sum(nums: list[int], k: int) -> int:
    """
    Time: O(N), Space: O(N)
    Intuition: If current prefix sum is S, and we want a subarray ending here with sum K,
    we need to find if there was a previous prefix sum of (S - K).
    """
    prefix_counts = {0: 1} # Base case: prefix sum of 0 occurs 1 time
    current_sum = 0
    count = 0
    
    for num in nums:
        current_sum += num
        # Have we seen (current_sum - k) before?
        if current_sum - k in prefix_counts:
            count += prefix_counts[current_sum - k]
            
        # Add current sum to counts
        prefix_counts[current_sum] = prefix_counts.get(current_sum, 0) + 1
        
    return count

print(subarray_sum([1, 1, 1], 2)) # Output: 2
```

## 5. Kadane's Algorithm

Dynamic programming approach to find the maximum sum contiguous subarray.

```python
def max_sub_array(nums: list[int]) -> int:
    """
    Time: O(N), Space: O(1)
    """
    # Initialize with first element to handle all-negative arrays
    current_max = global_max = nums[0]
    
    for i in range(1, len(nums)):
        # Do we extend the previous subarray or start a new one?
        current_max = max(nums[i], current_max + nums[i])
        global_max = max(global_max, current_max)
        
    return global_max

print(max_sub_array([-2,1,-3,4,-1,2,1,-5,4])) # Output: 6 ([4,-1,2,1])
```

## 6. String Manipulation

### Valid Anagram
```python
def is_anagram(s: str, t: str) -> bool:
    """
    Time: O(N), Space: O(1) since charset is fixed (usually 26 lower case letters)
    """
    if len(s) != len(t): return False
    
    counts = {}
    for char in s:
        counts[char] = counts.get(char, 0) + 1
    for char in t:
        if char not in counts: return False
        counts[char] -= 1
        if counts[char] < 0: return False
        
    return True

print(is_anagram("anagram", "nagaram")) # Output: True
```

## 7. Array Rotation
Rotate array to right by `k` steps.

```python
def rotate_array(nums: list[int], k: int) -> None:
    """
    Do not return anything, modify nums in-place instead.
    Reversal Algorithm.
    Time: O(N), Space: O(1)
    """
    k = k % len(nums)
    if k == 0: return
    
    def reverse(arr, start, end):
        while start < end:
            arr[start], arr[end] = arr[end], arr[start]
            start, end = start + 1, end - 1
            
    # 1. Reverse entire array
    reverse(nums, 0, len(nums) - 1)
    # 2. Reverse first k elements
    reverse(nums, 0, k - 1)
    # 3. Reverse rest
    reverse(nums, k, len(nums) - 1)

arr = [1,2,3,4,5,6,7]
rotate_array(arr, 3)
print(arr) # Output: [5, 6, 7, 1, 2, 3, 4]
```

## 8. Dutch National Flag (Sort Colors)
Sort an array containing 0s, 1s, and 2s in $O(N)$ time and $O(1)$ space.

```python
def sort_colors(nums: list[int]) -> None:
    """
    Time: O(N), Space: O(1)
    Three pointers partition array into <1, ==1, >1
    """
    low, curr, high = 0, 0, len(nums) - 1
    
    while curr <= high:
        if nums[curr] == 0:
            nums[low], nums[curr] = nums[curr], nums[low]
            low += 1
            curr += 1
        elif nums[curr] == 2:
            nums[high], nums[curr] = nums[curr], nums[high]
            high -= 1
            # We don't increment curr here because the swapped element needs to be checked
        else:
            curr += 1

arr = [2,0,2,1,1,0]
sort_colors(arr)
print(arr) # Output: [0, 0, 1, 1, 2, 2]
```

## 9. Merge Intervals
```python
def merge_intervals(intervals: list[list[int]]) -> list[list[int]]:
    """
    Time: O(N log N) for sorting, Space: O(N) for output
    """
    if not intervals: return []
    
    # Sort based on start time
    intervals.sort(key=lambda x: x[0])
    merged = [intervals[0]]
    
    for i in range(1, len(intervals)):
        last_interval = merged[-1]
        current_interval = intervals[i]
        
        # If overlap, update end of the last merged interval
        if current_interval[0] <= last_interval[1]:
            last_interval[1] = max(last_interval[1], current_interval[1])
        else:
            merged.append(current_interval)
            
    return merged

print(merge_intervals([[1,3],[2,6],[8,10],[15,18]])) # Output: [[1, 6], [8, 10], [15, 18]]
```

## 10. Matrix Operations

### Spiral Matrix Traversal
```python
def spiral_order(matrix: list[list[int]]) -> list[int]:
    """
    Time: O(M*N), Space: O(1) (excluding output array)
    """
    res = []
    if not matrix: return res
    
    top, bottom = 0, len(matrix) - 1
    left, right = 0, len(matrix[0]) - 1
    
    while left <= right and top <= bottom:
        # Traverse top row
        for j in range(left, right + 1):
            res.append(matrix[top][j])
        top += 1
        
        # Traverse right col
        for i in range(top, bottom + 1):
            res.append(matrix[i][right])
        right -= 1
        
        if top <= bottom:
            # Traverse bottom row
            for j in range(right, left - 1, -1):
                res.append(matrix[bottom][j])
            bottom -= 1
            
        if left <= right:
            # Traverse left col
            for i in range(bottom, top - 1, -1):
                res.append(matrix[i][left])
            left += 1
            
    return res

print(spiral_order([[1,2,3],[4,5,6],[7,8,9]])) # Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]
```

## 11. Common Interview Problems

### Product of Array Except Self
```python
def product_except_self(nums: list[int]) -> list[int]:
    """
    Time: O(N), Space: O(1) (excluding output array)
    """
    n = len(nums)
    res = [1] * n
    
    # Forward pass: res[i] stores product of all elements to the left
    prefix = 1
    for i in range(n):
        res[i] = prefix
        prefix *= nums[i]
        
    # Backward pass: multiply res[i] with product of elements to the right
    postfix = 1
    for i in range(n - 1, -1, -1):
        res[i] *= postfix
        postfix *= nums[i]
        
    return res

print(product_except_self([1,2,3,4])) # Output: [24, 12, 8, 6]
```

### Trapping Rain Water
```python
def trap(height: list[int]) -> int:
    """
    Time: O(N), Space: O(1)
    """
    if not height: return 0
    
    left, right = 0, len(height) - 1
    left_max, right_max = height[left], height[right]
    res = 0
    
    while left < right:
        if left_max < right_max:
            left += 1
            left_max = max(left_max, height[left])
            res += left_max - height[left]
        else:
            right -= 1
            right_max = max(right_max, height[right])
            res += right_max - height[right]
            
    return res

print(trap([0,1,0,2,1,0,1,3,2,1,2,1])) # Output: 6
```

## Practice Problems

1. Find Minimum in Rotated Sorted Array (Binary Search twist)
2. Search in Rotated Sorted Array
3. Three Sum (Extend Two Sum logic)
4. Minimum Size Subarray Sum
5. Longest Repeating Character Replacement
6. Permutation in String
7. Find All Anagrams in a String
8. Merge Sorted Array
9. Valid Sudoku
10. Longest Consecutive Sequence
