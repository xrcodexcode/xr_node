---
id: 8f7b3a1d-2c9e-4b5a-9d8c-7f6e5d4c3b2a
title: DSA Sorting and Searching
type: atomic-note
status: learning
domain: general
source_type: course
created: 2026-07-24
updated: 2026-07-24
review: 2026-08-24
confidence: 85
version: 1
aliases: [Sorting and Searching, DSA Sorting, Binary Search]
tags: [implementation, reference]
owner_moc: Python DSA ML Mastery MOC
sources: []
related: ["[[DSA Complexity Analysis]]", "[[DSA Arrays and Strings]]", "[[Python Standard Library Gems]]"]
schema_version: 4
---

Sorting and searching are fundamental operations that underpin countless data processing and machine learning tasks. For an ML engineer, sorting is not just about organizing arrays; it's the foundation of k-nearest neighbors (KNN), determining feature importance (top-k selection), clustering, and efficient database querying for data ingestion pipelines. Mastering binary search variations expands beyond searching sorted arrays—it provides a crucial optimization framework for finding optimal hyperparameters and thresholds in continuous search spaces ("binary search on answer").

## 1. Sorting Overview

Understanding the tradeoffs between sorting algorithms is vital for choosing the right tool. Space complexity and stability (whether equal elements retain their relative input order) are often as important as time complexity.

| Algorithm | Best Time | Avg Time | Worst Time | Space | Stable | Use Case |
|-----------|-----------|----------|------------|-------|--------|----------|
| **Bubble** | $O(N)$ | $O(N^2)$ | $O(N^2)$ | $O(1)$ | Yes | Educational, detecting already sorted arrays. |
| **Selection**| $O(N^2)$ | $O(N^2)$ | $O(N^2)$ | $O(1)$ | No | When memory writes are costly. |
| **Insertion**| $O(N)$ | $O(N^2)$ | $O(N^2)$ | $O(1)$ | Yes | Small datasets, nearly sorted arrays. |
| **Merge** | $O(N \log N)$ | $O(N \log N)$ | $O(N \log N)$ | $O(N)$ | Yes | Guaranteed $O(N \log N)$, linked lists, external sorting. |
| **Quick** | $O(N \log N)$ | $O(N \log N)$ | $O(N^2)$ | $O(\log N)$ | No | Default in many libraries, cache-friendly. |
| **Counting**| $O(N+K)$ | $O(N+K)$ | $O(N+K)$ | $O(K)$ | Yes | Integers with a small known range $K$. |
| **Radix** | $O(d(N+K))$| $O(d(N+K))$| $O(d(N+K))$| $O(N+K)$| Yes | Fixed length strings/numbers. |

> 🎯 **Interview Tip:** When asked to implement sorting, if stability is needed and extra memory is available, lean towards Merge Sort. If in-place sorting is required and stability doesn't matter, Quick Sort is your best bet.

## 2. Bubble Sort

Repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. We optimize it with an `early_exit` flag.

```python
def bubble_sort(arr: list[int]) -> None:
    """
    Time: O(N^2) Worst/Avg, O(N) Best (already sorted)
    Space: O(1)
    """
    n = len(arr)
    for i in range(n):
        swapped = False
        # Last i elements are already in place
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                # Swap if adjacent elements are out of order
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        
        # If no two elements were swapped by inner loop, then break
        if not swapped:
            break

# Example usage
nums = [64, 34, 25, 12, 22, 11, 90]
bubble_sort(nums)
print(f"Bubble Sorted: {nums}")
# Output: Bubble Sorted: [11, 12, 22, 25, 34, 64, 90]
```

## 3. Selection Sort

Finds the minimum element from the unsorted part and puts it at the beginning. Useful when write operations to memory are extremely expensive (Flash memory, EEPROM).

```python
def selection_sort(arr: list[int]) -> None:
    """
    Time: O(N^2) Best/Worst/Avg
    Space: O(1)
    """
    n = len(arr)
    for i in range(n):
        min_idx = i
        # Find the minimum element in remaining unsorted array
        for j in range(i + 1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
                
        # Swap the found minimum element with the first element
        arr[i], arr[min_idx] = arr[min_idx], arr[i]

# Example usage
nums = [64, 25, 12, 22, 11]
selection_sort(nums)
print(f"Selection Sorted: {nums}")
# Output: Selection Sorted: [11, 12, 22, 25, 64]
```

## 4. Insertion Sort

Builds the final sorted array one item at a time. It is highly efficient for small data sets and nearly sorted arrays.

> 🤖 **ML Connection:** Timsort (Python's built-in sort) switches to Insertion Sort for small partitions because the constant factors are very small.

```python
def insertion_sort(arr: list[int]) -> None:
    """
    Time: O(N^2) Worst/Avg, O(N) Best (nearly sorted)
    Space: O(1)
    """
    # Traverse from 1 to len(arr)
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        
        # Move elements of arr[0..i-1], that are greater than key,
        # to one position ahead of their current position
        while j >= 0 and key < arr[j]:
            arr[j + 1] = arr[j]
            j -= 1
            
        arr[j + 1] = key

# Example usage
nums = [12, 11, 13, 5, 6]
insertion_sort(nums)
print(f"Insertion Sorted: {nums}")
# Output: Insertion Sorted: [5, 6, 11, 12, 13]
```

## 5. Merge Sort

A Divide and Conquer algorithm. It divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves.

```python
def merge_sort(arr: list[int]) -> None:
    """
    Time: O(N log N)
    Space: O(N) - due to auxiliary arrays
    Stability: Stable
    """
    if len(arr) > 1:
        # Finding the mid of the array
        mid = len(arr) // 2
        
        # Dividing the array elements
        L = arr[:mid]
        R = arr[mid:]
        
        # Sorting the first half
        merge_sort(L)
        # Sorting the second half
        merge_sort(R)
        
        i = j = k = 0
        
        # Copy data to temp arrays L[] and R[]
        while i < len(L) and j < len(R):
            # Stability is maintained by using <=
            if L[i] <= R[j]:
                arr[k] = L[i]
                i += 1
            else:
                arr[k] = R[j]
                j += 1
            k += 1
            
        # Checking if any element was left
        while i < len(L):
            arr[k] = L[i]
            i += 1
            k += 1
            
        while j < len(R):
            arr[k] = R[j]
            j += 1
            k += 1

# Example usage
nums = [38, 27, 43, 3, 9, 82, 10]
merge_sort(nums)
print(f"Merge Sorted: {nums}")
# Output: Merge Sorted: [3, 9, 10, 27, 38, 43, 82]
```

## 6. Quick Sort

Also Divide and Conquer. Picks an element as a pivot and partitions the given array around the picked pivot.
We show Lomuto's partition scheme where the pivot is the last element. To prevent worst-case $O(N^2)$ on already sorted arrays, we can pick a random pivot or median-of-three.

```python
import random

def quick_sort(arr: list[int], low: int, high: int) -> None:
    """
    Time: O(N log N) Avg, O(N^2) Worst
    Space: O(log N) - recursive stack space
    """
    if low < high:
        # pi is partitioning index, arr[pi] is now at right place
        pi = partition(arr, low, high)
        
        # Separately sort elements before partition and after partition
        quick_sort(arr, low, pi - 1)
        quick_sort(arr, pi + 1, high)

def partition(arr: list[int], low: int, high: int) -> int:
    # Random pivot to avoid worst case O(N^2)
    pivot_idx = random.randint(low, high)
    arr[pivot_idx], arr[high] = arr[high], arr[pivot_idx]
    
    pivot = arr[high]
    i = low - 1  # Index of smaller element
    
    for j in range(low, high):
        # If current element is smaller than or equal to pivot
        if arr[j] <= pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
            
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1

# Example usage
nums = [10, 7, 8, 9, 1, 5]
quick_sort(nums, 0, len(nums) - 1)
print(f"Quick Sorted: {nums}")
# Output: Quick Sorted: [1, 5, 7, 8, 9, 10]
```

## 7. Counting Sort

Non-comparison based sort. Assumes elements are in a range `[0, K]`. 

```python
def counting_sort(arr: list[int]) -> list[int]:
    """
    Time: O(N + K) where K is the range of inputs
    Space: O(N + K)
    """
    if not arr: return []
    
    max_val = max(arr)
    min_val = min(arr)
    range_of_elements = max_val - min_val + 1
    
    # Create count array to store count of individual elements
    count = [0] * range_of_elements
    output = [0] * len(arr)
    
    # Store count of each character
    for num in arr:
        count[num - min_val] += 1
        
    # Change count[i] so that count[i] now contains actual
    # position of this element in output array (Prefix Sum)
    for i in range(1, len(count)):
        count[i] += count[i - 1]
        
    # Build the output array (backward to maintain stability)
    for i in range(len(arr) - 1, -1, -1):
        num = arr[i]
        output[count[num - min_val] - 1] = num
        count[num - min_val] -= 1
        
    # Copy the output array to arr
    for i in range(len(arr)):
        arr[i] = output[i]

    return arr

# Example usage
nums = [4, 2, 2, 8, 3, 3, 1]
counting_sort(nums)
print(f"Counting Sorted: {nums}")
# Output: Counting Sorted: [1, 2, 2, 3, 3, 4, 8]
```

## 8. Radix Sort

Sorts integer keys by grouping keys by the individual digits which share the same significant position and value.
Uses counting sort as a subroutine. Beats comparison sorts for large arrays of numbers with a small number of digits.

```python
def counting_sort_for_radix(arr: list[int], exp: int) -> None:
    n = len(arr)
    output = [0] * n
    count = [0] * 10 # Base 10
    
    # Store count of occurrences in count[]
    for i in range(n):
        index = (arr[i] // exp) % 10
        count[index] += 1
        
    # Change count[i] so that count[i] now contains actual
    # position of this digit in output[]
    for i in range(1, 10):
        count[i] += count[i - 1]
        
    # Build the output array
    for i in range(n - 1, -1, -1):
        index = (arr[i] // exp) % 10
        output[count[index] - 1] = arr[i]
        count[index] -= 1
        
    for i in range(n):
        arr[i] = output[i]

def radix_sort(arr: list[int]) -> None:
    """
    Time: O(d * (N + b)) where d is max digits, b is base (10)
    Space: O(N + b)
    """
    if not arr: return
    max_num = max(arr)
    
    # Do counting sort for every digit.
    # exp is 10^i where i is current digit number
    exp = 1
    while max_num // exp > 0:
        counting_sort_for_radix(arr, exp)
        exp *= 10

# Example usage
nums = [170, 45, 75, 90, 802, 24, 2, 66]
radix_sort(nums)
print(f"Radix Sorted: {nums}")
# Output: Radix Sorted: [2, 24, 45, 66, 75, 90, 170, 802]
```

## 9. Python's Built-in Sort

Python uses **Timsort**, a hybrid of Merge Sort and Insertion Sort designed to perform well on many kinds of real-world data. Time complexity: $O(N \log N)$ worst/avg, $O(N)$ best.

```python
import functools

# sorted() returns a new list, .sort() modifies in-place
arr = [5, 2, 9, 1]
new_arr = sorted(arr) 
arr.sort(reverse=True)
print(f"new_arr: {new_arr}, arr (reversed): {arr}")
# Output: new_arr: [1, 2, 5, 9], arr (reversed): [9, 5, 2, 1]

# Custom sorting with `key`
words = ["apple", "banana", "kiwi", "pear"]
words.sort(key=len) # Sort by length
print(f"Sorted by length: {words}")
# Output: Sorted by length: ['kiwi', 'pear', 'apple', 'banana']

# Using functools.cmp_to_key for complex custom logic (Python 2 legacy style)
def compare_items(a, b):
    # Sort evens before odds, then ascending
    if a % 2 == 0 and b % 2 != 0:
        return -1 # a comes first
    elif a % 2 != 0 and b % 2 == 0:
        return 1  # b comes first
    else:
        return a - b # regular comparison

nums = [7, 4, 1, 8, 3, 2]
nums.sort(key=functools.cmp_to_key(compare_items))
print(f"Custom sorted: {nums}")
# Output: Custom sorted: [2, 4, 8, 1, 3, 7]
```

## 10. Binary Search Mastery

Binary search is essential for logarithmic time complexity $O(\log N)$ in searching operations. The space must be sorted or monotonic.

### Standard Binary Search
```python
def binary_search(arr: list[int], target: int) -> int:
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = left + (right - left) // 2 # Prevents overflow in other languages
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1
```

### Find First / Last Occurrence
```python
def find_first_occurrence(arr: list[int], target: int) -> int:
    left, right = 0, len(arr) - 1
    result = -1
    while left <= right:
        mid = left + (right - left) // 2
        if arr[mid] == target:
            result = mid
            right = mid - 1 # Keep searching left
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return result

def find_last_occurrence(arr: list[int], target: int) -> int:
    left, right = 0, len(arr) - 1
    result = -1
    while left <= right:
        mid = left + (right - left) // 2
        if arr[mid] == target:
            result = mid
            left = mid + 1 # Keep searching right
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return result
```

### Lower Bound / Upper Bound (Bisect Module Equivalent)
Lower bound: First index where `arr[i] >= target`
Upper bound: First index where `arr[i] > target`
```python
import bisect

arr = [1, 2, 4, 4, 4, 6, 8]
# Lower bound
lb = bisect.bisect_left(arr, 4) # Returns 2
# Upper bound
ub = bisect.bisect_right(arr, 4) # Returns 5
```

### Search in Rotated Sorted Array
```python
def search_rotated(arr: list[int], target: int) -> int:
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = left + (right - left) // 2
        if arr[mid] == target:
            return mid
            
        # Left half is sorted
        if arr[left] <= arr[mid]:
            if arr[left] <= target < arr[mid]:
                right = mid - 1
            else:
                left = mid + 1
        # Right half is sorted
        else:
            if arr[mid] < target <= arr[right]:
                left = mid + 1
            else:
                right = mid - 1
    return -1
```

### Minimum in Rotated Sorted Array
```python
def find_min_rotated(arr: list[int]) -> int:
    left, right = 0, len(arr) - 1
    while left < right:
        mid = left + (right - left) // 2
        if arr[mid] > arr[right]:
            # Min must be in the right half
            left = mid + 1
        else:
            # Min is mid or in the left half
            right = mid
    return arr[left]
```

### Peak Element
Element greater than its neighbors.
```python
def find_peak(arr: list[int]) -> int:
    left, right = 0, len(arr) - 1
    while left < right:
        mid = left + (right - left) // 2
        if arr[mid] > arr[mid + 1]:
            # Peak is in left half (including mid)
            right = mid
        else:
            # Peak is in right half
            left = mid + 1
    return left # Returns index of peak
```

### Square Root (Integer)
```python
def my_sqrt(x: int) -> int:
    if x < 2: return x
    left, right = 2, x // 2
    while left <= right:
        mid = left + (right - left) // 2
        sq = mid * mid
        if sq == x:
            return mid
        elif sq < x:
            left = mid + 1
        else:
            right = mid - 1
    return right
```

### Search in 2D Matrix
Matrix sorted row-wise and column-wise.
```python
def search_matrix(matrix: list[list[int]], target: int) -> bool:
    if not matrix or not matrix[0]: return False
    rows, cols = len(matrix), len(matrix[0])
    
    # Start at top-right corner
    r, c = 0, cols - 1
    while r < rows and c >= 0:
        if matrix[r][c] == target:
            return True
        elif matrix[r][c] > target:
            c -= 1 # Eliminate column
        else:
            r += 1 # Eliminate row
    return False
```

## 11. Binary Search on Answer Template

Used when finding a minimum or maximum optimal value that satisfies a monotonic condition.

```python
def binary_search_on_answer(low: int, high: int) -> int:
    def is_valid(candidate: int) -> bool:
        # Check if candidate satisfies the problem constraints
        pass
        
    ans = -1
    while low <= high:
        mid = low + (high - low) // 2
        if is_valid(mid):
            ans = mid
            # If we want the MINIMUM valid candidate, search left
            high = mid - 1
            # If we want MAXIMUM valid candidate, search right: low = mid + 1
        else:
            # Shift search space
            low = mid + 1
            
    return ans
```

## 12. Sorting in ML

Sorting is ubiquitous in Machine Learning pipelines:
1. **Feature Ranking:** Sorting features by importance score (e.g., Random Forest feature importances) to select top-K features.
2. **K-Nearest Neighbors (KNN):** Requires calculating distances from query point to all training points, then sorting distances to find the $K$ smallest.
3. **Data Preprocessing:** Time-series models require temporally sorted data.
4. **Recommendation Systems:** Re-ranking item scores generated by the model to present the Top-N list to users.

> 🤖 **ML Connection:** Often in ML, we don't need a full sort. `np.partition` or `heapq.nlargest` allows selecting the Top-K elements in $O(N \log K)$ or $O(N)$ time instead of full $O(N \log N)$ sorting. Always evaluate if a full sort is necessary.

---

## Practice Problems

1. **LeetCode 75:** Sort Colors (Dutch National Flag problem)
2. **LeetCode 215:** Kth Largest Element in an Array (QuickSelect / Heap)
3. **LeetCode 56:** Merge Intervals
4. **LeetCode 33:** Search in Rotated Sorted Array
5. **LeetCode 153:** Find Minimum in Rotated Sorted Array
6. **LeetCode 34:** Find First and Last Position of Element in Sorted Array
7. **LeetCode 74:** Search a 2D Matrix
8. **LeetCode 875:** Koko Eating Bananas (Binary Search on Answer)
9. **LeetCode 410:** Split Array Largest Sum (Binary Search on Answer)
10. **LeetCode 162:** Find Peak Element

## Related Notes
- [[DSA Complexity Analysis]]
- [[DSA Arrays and Strings]]
- [[Python Standard Library Gems]]
