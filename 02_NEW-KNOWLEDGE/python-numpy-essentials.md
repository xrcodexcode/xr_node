---
id: a5f1e83f-67a3-4b62-9e12-c2e8a1d5e6f2
title: Python NumPy Essentials
type: atomic-note
status: learning
domain: general
source_type: course
created: 2026-07-24
updated: 2026-07-24
review: 2026-08-24
confidence: 85
version: 1
aliases: [NumPy, numpy basics]
tags: [implementation]
owner_moc: Python DSA ML Mastery MOC
sources: []
related: ["[[Python Pandas Essentials]]", "[[Python OOP Mastery]]", "[[DSA Arrays and Strings]]"]
schema_version: 4
---

NumPy (Numerical Python) is the foundational library for all machine learning computation. It provides high-performance multidimensional arrays and tools to operate on them. Without NumPy, libraries like Pandas, Scikit-learn, TensorFlow, and PyTorch would not exist in their current form. Mastering NumPy means mastering the fundamental language of ML engineering.

## 1. Why NumPy?
> 🤖 **ML Connection:** Standard Python lists are too slow and consume too much memory for large-scale data (like images or millions of rows of tabular data). NumPy uses contiguous C arrays under the hood, enabling "vectorization" — applying operations to entire arrays at once without explicit Python loops.

```python
import numpy as np
import time

# Create a large list and a NumPy array
size = 1_000_000
py_list = list(range(size))
np_arr = np.arange(size)

# Python List comprehension
start = time.time()
py_result = [x * 2 for x in py_list]
print(f"List time: {time.time() - start:.4f} sec")  # Output: List time: ~0.08 sec

# NumPy Vectorization
start = time.time()
np_result = np_arr * 2
print(f"NumPy time: {time.time() - start:.4f} sec") # Output: NumPy time: ~0.002 sec (40x faster!)
```

## 2. Array Creation
Creating arrays from scratch or standard Python iterables.

```python
# From Python lists
arr1 = np.array([1, 2, 3, 4], dtype=np.float32)

# Common Initializations
zeros = np.zeros((3, 3))       # 3x3 matrix of zeros
ones = np.ones((2, 4))         # 2x4 matrix of ones
filled = np.full((2, 2), 7)    # 2x2 matrix filled with 7
identity = np.eye(3)           # 3x3 identity matrix

# Sequences
range_arr = np.arange(0, 10, 2)     # [0, 2, 4, 6, 8]
lin_space = np.linspace(0, 1, 5)    # [0.0, 0.25, 0.5, 0.75, 1.0]

print(filled)
# Output:
# [[7 7]
#  [7 7]]
```

## 3. Array Properties
Understanding the metadata of your data structure.

```python
matrix = np.array([[1, 2, 3], [4, 5, 6]], dtype=np.int32)

print(f"Shape: {matrix.shape}")       # Output: (2, 3) - rows, cols
print(f"Data type: {matrix.dtype}")   # Output: int32
print(f"Dimensions: {matrix.ndim}")   # Output: 2
print(f"Total elements: {matrix.size}") # Output: 6
print(f"Bytes per element: {matrix.itemsize}") # Output: 4
print(f"Total bytes: {matrix.nbytes}")         # Output: 24
```

## 4. Indexing & Slicing
> 🎯 **Interview Tip:** Practice fancy indexing and boolean masking. They are heavily used in data filtering and preparation steps.

```python
arr = np.arange(10) # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

# Slicing
print(arr[2:7:2])  # Output: [2 4 6] (start:stop:step)

# Boolean Indexing (Masking)
mask = arr > 5
print(arr[mask])   # Output: [6 7 8 9]

# Fancy Indexing
indices = [1, 4, 5]
print(arr[indices]) # Output: [1 4 5]

# np.where (Ternary operator for arrays)
# np.where(condition, x, y)
modified = np.where(arr % 2 == 0, -1, arr)
print(modified) # Output: [-1  1 -1  3 -1  5 -1  7 -1  9]

# Argmax / Argmin
scores = np.array([4.2, 9.5, 1.1, 7.8])
print(np.argmax(scores)) # Output: 1 (Index of max value, useful for classification)
```

## 5. Reshaping
Reshaping changes the view of the data without copying the underlying memory.

```python
# Reshape
arr = np.arange(12)
matrix = arr.reshape(3, 4)
print(matrix)
# Output:
# [[ 0  1  2  3]
#  [ 4  5  6  7]
#  [ 8  9 10 11]]

# Flattening (ravel is generally faster as it returns a view if possible)
flat = matrix.ravel()
print(flat.shape) # Output: (12,)

# Transpose
transposed = matrix.T
print(transposed.shape) # Output: (4, 3)

# Adding dimensions (Crucial for deep learning!)
# Often you need to add a batch or channel dimension
vec = np.array([1, 2, 3])
expanded = np.expand_dims(vec, axis=0) 
print(expanded.shape) # Output: (1, 3)

# Alternative with np.newaxis
expanded_alt = vec[:, np.newaxis] 
print(expanded_alt.shape) # Output: (3, 1)

# Squeeze (Remove 1-D axes)
squeezed = np.squeeze(expanded)
print(squeezed.shape) # Output: (3,)
```

## 6. Broadcasting
> 🤖 **ML Connection:** Broadcasting allows operations between arrays of different shapes. It's how we add bias vectors to weight matrices effortlessly.

**Rule:** Two dimensions are compatible if they are equal, or one of them is 1.

```python
mat = np.ones((3, 3))
vec = np.array([0, 1, 2])

# mat is (3, 3)
# vec is (3,) -> (1, 3)
# The vector is 'broadcast' across the rows of the matrix
result = mat + vec
print(result)
# Output:
# [[1. 2. 3.]
#  [1. 2. 3.]
#  [1. 2. 3.]]
```

## 7. Vectorized Operations
Applying operations element-wise.

```python
a = np.array([1, 2, 3])
b = np.array([4, 5, 6])

# Element-wise operations
print(a * b)    # Output: [4 10 18]
print(a ** 2)   # Output: [1 4 9]
print(a > 1)    # Output: [False  True  True]

# Universal Functions (ufuncs)
print(np.exp(a))  # Output: [ 2.71828183  7.3890561  20.08553692]
print(np.log(a))  # Output: [0.         0.69314718 1.09861229]
```

## 8. Aggregation
Collapsing arrays into scalars or lower-dimensional arrays. Always pay attention to `axis`.

```python
mat = np.arange(1, 7).reshape(2, 3)
# [[1, 2, 3],
#  [4, 5, 6]]

print(mat.sum())         # Output: 21 (Global sum)
print(mat.sum(axis=0))   # Output: [5 7 9] (Sum along columns)
print(mat.mean(axis=1))  # Output: [2. 5.] (Mean along rows)

# Cumulative operations
print(np.cumsum(mat, axis=0))
# Output:
# [[ 1  2  3]
#  [ 5  7  9]]
```

## 9. Linear Algebra
> 🎯 **Interview Tip:** Know the difference between `np.dot` and `np.matmul` / `@`. `@` is preferred for matrix multiplication, especially in >2D arrays (like batch processing).

```python
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])

# Matrix Multiplication
print(A @ B)
# Output:
# [[19 22]
#  [43 50]]

# Dot product (Vector)
v1 = np.array([1, 2])
v2 = np.array([3, 4])
print(np.dot(v1, v2)) # Output: 11

# Inverses and Determinants
A_inv = np.linalg.inv(A)
print(np.linalg.det(A)) # Output: -2.0000000000000004

# Norms (Magnitude of a vector)
print(np.linalg.norm(v1)) # Output: 2.23606797749979 (L2 norm)
```

## 10. Stacking & Splitting
Building datasets from parts or chunking them up.

```python
a = np.array([1, 2])
b = np.array([3, 4])

# Stacking
print(np.vstack((a, b)))
# Output:
# [[1 2]
#  [3 4]]

print(np.hstack((a, b)))
# Output: [1 2 3 4]

# Splitting
arr = np.arange(10)
print(np.split(arr, 2))  # Output: [array([0, 1, 2, 3, 4]), array([5, 6, 7, 8, 9])]
```

## 11. Random Module
Essential for initializing weights, splitting datasets, and data augmentation.

```python
# Always set a seed for reproducibility!
np.random.seed(42)

# Uniform distribution [0, 1)
print(np.random.rand(2, 2))

# Standard Normal Distribution (mean=0, std=1)
print(np.random.randn(3))

# Random Integers
print(np.random.randint(0, 10, size=(2, 2)))

# Random Choice (Sampling)
options = ['Cat', 'Dog', 'Bird']
print(np.random.choice(options, size=2, replace=True))

# Shuffling (In-place)
data = np.arange(5)
np.random.shuffle(data)
print(data) # e.g., [1, 4, 3, 2, 0]
```

## 12. NumPy for ML (Practical Use Cases)

```python
# 1. Min-Max Normalization
X = np.array([[10, 20], [100, 200], [50, 50]])
X_norm = (X - np.min(X, axis=0)) / (np.max(X, axis=0) - np.min(X, axis=0))

# 2. Euclidean Distance Calculation (Vectorized)
pt1 = np.array([1, 2])
points = np.array([[1, 2], [4, 6], [0, 0]])
distances = np.linalg.norm(points - pt1, axis=1)

# 3. Softmax Function (Used in classification output layers)
logits = np.array([2.0, 1.0, 0.1])
exp_logits = np.exp(logits - np.max(logits)) # Subtract max for numerical stability
softmax_probs = exp_logits / np.sum(exp_logits)
print(softmax_probs) # Output: [0.65900114 0.24243297 0.09856589]

# 4. One-Hot Encoding
labels = np.array([0, 2, 1, 0])
num_classes = 3
one_hot = np.eye(num_classes)[labels]
print(one_hot)
# Output:
# [[1. 0. 0.]
#  [0. 0. 1.]
#  [0. 1. 0.]
#  [1. 0. 0.]]
```

## Practice Problems
1. Create a 3x3 matrix with values ranging from 0 to 8.
2. Given a 1D array, negate all elements which are between 3 and 8, in place.
3. Extract all odd numbers from an array `arr = np.arange(20)`.
4. Swap rows 1 and 2 in the array `A = np.arange(9).reshape(3,3)`.
5. Compute the L2 norm of the vector `[3, 4]`.
6. Create an 8x8 matrix and fill it with a checkerboard pattern of zeros and ones.
7. Normalize a 5x5 random matrix (subtract mean and divide by standard deviation).
8. Find the index of the 5th maximum value in a random array.
9. Implement a vectorized moving average of length 3 over a 1D array.
10. Given two matrices `A (5, 3)` and `B (3, 2)`, multiply them and verify the shape is `(5, 2)`.
