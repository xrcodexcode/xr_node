  
Sheryians AI School

# NumPy — from first principles  
to your first dataset

A complete, interactive course for absolute beginners. Every concept starts with why, builds intuition visually, and only then shows you the code.

18

Chapters

3

Project Levels

200

Row Dataset

PythonOpen-Source PackagesNumPymath corePandastabular dataMatplotlibvisualsScikit-learnclassic MLTF / PyTorchdeep learningMachine LearningArtificial Intelligence

Course Map

## 18 chapters, one straight line to Pandas

Chapter 1 is live below. The rest are being built next — locked cards will unlock as we go.

[Ready01Why Python Became the Language of Data ScienceThe ecosystem story behind every library you're about to use.](#ch1)[Ready02Modules & PackagesHow Python code is organized and imported.](#ch2)[Ready03Why Data Science Uses NotebooksJupyter, Colab, VS Code, and the cell-based workflow.](#ch3)[Ready04Introduction to NumPyWhy lists are slow and arrays are fast.](#ch4)[Ready05Installing & Importing NumPypip, import, and the "np" convention.](#ch5)[Ready06Creating ArraysEvery array-creation function, with a live playground.](#ch6)[Ready07Array Anatomyshape, dtype, ndim, and how arrays describe themselves.](#ch7)[Ready08Indexing & SlicingIncluding boolean and fancy indexing.](#ch8)[Ready09Reshaping Arraysreshape, flatten, transpose, and why size stays fixed.](#ch9)[Ready10VectorizationWhy NumPy avoids loops entirely.](#ch10)[Ready11BroadcastingHow different shapes combine, visually.](#ch11)[Ready12Aggregation Functionssum, mean, std, and the axis parameter.](#ch12)[Ready13Universal FunctionsFast math without writing a single loop.](#ch13)[Ready14Random ModuleSeeds, shuffling, and generating datasets.](#ch14)[Ready15Tensors, IntroducedScalar → vector → matrix → tensor.](#ch15)[Ready16Performance ComparisonLists vs arrays, measured.](#ch16)[Ready17Real-World ApplicationsWhere NumPy actually shows up on the job.](#ch17)[Ready18Capstone: Student PerformanceA 200-student dataset, 3 levels of analysis.](#ch18)

Chapter 01Story, no code yet

## Why Python Became the Language of Data Science

Why do we need this

Before you write a single line of NumPy, it helps to know **why NumPy exists at all** — and why it's written in Python instead of any other language.

Real-world intuition

Python itself is a small, general-purpose language. It doesn't know how to build a neural network, plot a graph, or load a spreadsheet — none of that is "built in." What Python has instead is one of the largest communities of developers in the world, and for over two decades, that community has been publishing free, open-source **packages** that add exactly those abilities.

NumPy, Pandas, Matplotlib, Scikit-learn, TensorFlow, PyTorch — none of these ship with Python. Someone built each one, gave it away for free, and the rest of the world built on top of it. That's the entire reason a "Data Science stack" exists: not because Python was designed for data science, but because enough people needed it to be, and had the freedom to build it.

Visual explanation

The diagram above this chapter is the whole story in one flow. Python sits at the bottom of everything. Packages sit on top of Python. A handful of those packages became the Data Science standard. And Machine Learning, and eventually AI, are built on _those_.

Data Science Insight

Every library in that diagram is maintained by people, not by Python itself. When NumPy gets faster, or Pandas gets a new feature, it's because a real person opened a pull request — the same way any of us could.

Common mistake

Common Mistake

Beginners often think they need to "learn Python deeply" before touching NumPy or Pandas. In practice, you only need enough Python to be comfortable — variables, loops, functions — and you pick up the rest of each library as you use it.

Best practice

Remember

You will never memorize an entire library, and you're not supposed to. Even experienced data scientists look up function names constantly. What matters is knowing **what's possible**, so you know what to search for.

Mini challenge

Quick check: Is NumPy part of core Python, or a separate package someone built?

It ships with core Python by defaultIt's a separate, open-source package you install

Summary

Python's role in Data Science isn't about the language's built-in power — it's about the ecosystem built around it. Next, before we get to NumPy itself, we'll look at how that ecosystem is actually organized: modules and packages.

Chapter 02Conceptual

## Modules & Packages

Why do we need this

Every time you write import numpy as np, you're relying on a system for organizing and reusing code. Before that line makes sense, it helps to know what's actually being imported.

What problem does it solve

If every project lived in one giant file, reusing code between projects would mean copy-pasting it everywhere — and fixing a bug would mean fixing it in a dozen places. Python solves this with two building blocks: **modules** and **packages**.

Real-world intuition

A **module** is just a single Python file — one drawer in a filing cabinet. A **package** is a folder full of related modules, with a special file that tells Python "treat this folder as one importable unit." NumPy itself is a package: dozens of modules, imported as one thing.

Visual explanation

Single ModulePackage

📄 math_utils.py

Syntax

import styles

Copy

import math_utils
from mypackage import math_utils
from mypackage.math_utils import add
import numpy as np   # alias — avoids typing "numpy." every time

That last line is the one you'll type in almost every notebook you ever write. np isn't required — it's a convention so strong that every tutorial, every Stack Overflow answer, and every course assumes you're using it.

Common Mistake

Don't worry about memorizing folder structures like __init__.py right now — this chapter is conceptual. You'll actually create a module and a package hands-on later in VS Code, where it'll click much faster than reading about it.

Remember

The alias after as creates a **namespace** — a short name you use instead of the full one. It's not magic, just a nickname the rest of your file agrees to use.

Mini challenge

Quick check: what does a package need that a single module doesn't?

A .py file extensionA folder structure with multiple modules inside it

Summary

Modules and packages are how Python code stays organized — and it's exactly what NumPy, Pandas, and every other library are built from. Next: the environment where you'll actually write and run this code.

Chapter 03Conceptual

## Why Data Science Uses Notebooks

Why do we need this

Regular software development runs on scripts — write the whole program, run it top to bottom. Data Science doesn't work that way, and notebooks exist because of that difference.

What problem does it solve

Exploring a dataset means testing one idea, looking at the result, then deciding what to try next. Re-running an entire script for every small check would be painfully slow. A notebook lets you run code in small pieces called **cells**, keeping every result visible as you go.

Real-world intuition

Think of it like a lab notebook, not a finished report. You run an experiment, record what happened, and move to the next one — without starting the whole lab over each time.

Your options

All of these give you the same core cell-based experience — pick whichever fits how you work:

Data Science Insight

**Jupyter Notebook / JupyterLab** — the original, installed via pip. **Google Colab** — zero install, runs in your browser, free GPU access. **Jupyter in VS Code** — notebooks inside your regular editor. **Anaconda** — a full distribution that installs Python, Jupyter, and most Data Science libraries together.

How a notebook actually runs

Every notebook is backed by a **kernel** — the running Python process that remembers every variable you've created so far. Cells don't have to run top to bottom; you can run cell 5, then go back and run cell 2 again. That flexibility is powerful, and it's also where the most common notebook mistake comes from.

Common Mistake

Running cells out of order and getting a result that only works because of something you ran earlier — then finding your notebook breaks the moment you restart and run it top to bottom. If it doesn't survive "Restart Kernel & Run All," it isn't actually working yet.

Performance Tip

Before calling any notebook "done," restart the kernel and run all cells once, in order. It's the only way to be sure your result doesn't secretly depend on a leftover variable from three cells ago.

Mini challenge

Quick check: your notebook works fine, but breaks after "Restart Kernel & Run All." What does that usually mean?

The notebook software is buggySome cells were run out of order and depend on leftover state

Summary

You now know where this code will actually live and run. Time to meet the star of this course.

Chapter 04Conceptual

## Introduction to NumPy

Why do we need this

Python lists can hold numbers just fine. So why does an entire library exist just to hold numbers differently? The answer is memory.

What problem does it solve

A Python list can hold mixed types — a number, a string, another list — because each element is really just a **pointer** to somewhere else in memory. That flexibility has a cost: Python has to check each element's type every time you touch it, and the elements themselves can be scattered anywhere in memory.

A NumPy array gives up that flexibility on purpose. Every element is the **same type**, stored back-to-back in one continuous block. No type-checking per element, no chasing scattered pointers — just raw, uniform data the CPU can process in bulk.

Visual explanation

#### Python List

7

"a"

3.2

9

Pointers scattered across memory, each with its own type tag.

#### NumPy Array

7

2

3

9

One contiguous block, one fixed type, ready for bulk computation.

Illustrative comparison

Python list (loop)~1.8s

NumPy array (vectorized)~0.015s

Illustrative only, summing a million numbers — you'll run the real benchmark yourself in Chapter 16.

Data Science Insight

This "do it to the whole array at once" style is called **vectorization**. Instead of Python looping element-by-element, NumPy hands the whole operation to optimized, low-level code — which is the real source of the speedup, not just fewer lines.

Common Mistake

Assuming a NumPy array behaves exactly like a list with extra features. Mix an integer and a string when creating an array, and NumPy won't error — it silently converts everything to one shared type, because homogeneity is the whole point.

Mini challenge

Quick check: why are NumPy arrays faster than Python lists for numeric work?

NumPy arrays are written in Python 4Same-type, contiguous memory lets operations run on the whole array at once

Summary

That's the "why" fully covered. Next, the two-line ritual you'll type at the top of every NumPy notebook you ever write.

Chapter 05First real code

## Installing & Importing NumPy

Syntax

Two lines, and you're set up for the rest of this course.

terminal

Copy

pip install numpy

notebook cell

CopyRun

import numpy as np
print(np.__version__)

Real-world intuition

np isn't a rule the language enforces — it's a convention so universal that every course, every doc page, and every answer online assumes it. Use anything else, and you'll spend energy translating other people's code back to your own naming.

Common Mistake

Running pip install numpy in a terminal, then getting "No module named numpy" inside the notebook. This almost always means the install went into a different Python environment than the kernel your notebook is actually running — the same kernel concept from Chapter 3.

Remember

If import numpy ever fails unexpectedly, checking np.__version__ right after is the fastest way to confirm it's actually installed and visible to your current kernel.

Mini challenge

Quick check: you installed NumPy, but the notebook still says "No module named numpy." What's the most likely cause?

NumPy is broken and needs reinstalling twiceIt was installed into a different environment than the notebook's kernel

Summary

Environment ready, import working. Next chapter, we start actually creating arrays — every function, one at a time.

Chapter 06Reference + playground

## Creating Arrays

Why do we need this

Every array starts one of two ways: built from data you already have, or generated on the spot with a shape you specify. NumPy gives you a function for almost every situation.

From your own data

from_data.py

Copy

np.array([1, 2, 3])
np.array([[1, 2], [3, 4]])

Placeholder arrays — you give the shape

These fill a shape with a constant, before you know the real values yet.

placeholders.py

Copy

np.zeros((2, 3))     # all zeros
np.ones((2, 3))      # all ones
np.full((2, 3), 7)  # all sevens
np.empty((2, 3))     # uninitialized — whatever was already in memory, NOT zero

Structured & identity arrays

structured.py

Copy

np.eye(4)          # identity matrix, 1s on the diagonal
np.identity(4)     # same idea, always square
np.diag([1,2,3])  # builds a diagonal matrix from a list

Sequences

sequences.py

Copy

np.arange(0, 10, 2)     # step by step: [0 2 4 6 8]
np.linspace(0, 1, 5)    # 5 evenly spaced points between 0 and 1
np.logspace(0, 2, 3)    # evenly spaced on a log scale: [1 10 100]

Random arrays

random_arrays.py

Copy

np.random.seed(42)            # same "random" values every run
np.random.rand(3)             # uniform floats between 0 and 1
np.random.randn(3)            # standard normal distribution
np.random.randint(0, 10, size=3) # random integers
np.random.uniform(1, 5, size=3) # random floats in a range
np.random.choice([10,20,30])   # sample from existing values

Interactive: array playground

Pick a function, set its shape, and generate a real array.

Function             np.zeros()             np.ones()             np.eye()             np.arange()             np.linspace()             np.random.randint()           

Rows

Cols

playground

result = np.zeros((3, 3))  
print(result)

0

0

0

0

0

0

0

0

0

Common Mistake

Writing np.zeros(3, 3) instead of np.zeros((3, 3)). The shape is a single tuple argument, not two separate ones — miss the extra parentheses and you'll get a confusing error.

Performance Tip

Always call np.random.seed(n) before generating random data in a tutorial, a test, or a shared notebook. Without it, everyone gets different numbers and "look at row 3" stops meaning anything.

Mini challenge

Quick check: which line correctly creates a 2×3 array of zeros?

np.zeros(2, 3)np.zeros((2, 3))

Summary

You can now generate an array for almost any situation. Next: reading what an array can tell you about itself.

Chapter 07Live inspector

## Understanding Array Anatomy

Why do we need this

Before transforming an array, get comfortable reading what it already tells you about itself — every array carries its own metadata.

Syntax

anatomy.py

Copy

arr.shape      # dimensions, e.g. (2, 3)
arr.ndim       # number of dimensions
arr.size       # total element count
arr.dtype      # data type of every element
arr.itemsize   # bytes per element
arr.nbytes     # total bytes = size * itemsize
arr.T          # transposed view

There's also strides — how many bytes NumPy skips to move to the next element in each dimension. You won't need to compute it by hand; just know it's the internal detail that makes slicing so fast.

Interactive: array inspector

Edit the values below (comma-separated, one row per line), then inspect what NumPy sees.

Array values  Inspect

Common Mistake

Confusing shape with size. Shape tells you the dimensions — like (2, 3). Size tells you the total count of elements — 6. They answer different questions.

Data Science Insight

dtype matters more than it looks. A million float64 values take twice the memory of the same million as float32 — a real consideration once your dataset stops being a toy example.

Mini challenge

Quick check: an array has shape (4, 5). What is its size?

920

Summary

You can now read any array's vitals at a glance. Next: actually reaching into an array and pulling out exactly what you need.

Chapter 08Live filtering

## Indexing & Slicing

Why do we need this

This is the chapter you'll reach for constantly — pulling out single values, rows, columns, or entire subsets based on a condition.

Basic & 2D indexing

indexing.py

CopyRun

grid = np.array([[1,2,3],[4,5,6]])
print(grid[1, 2])    # single element
print(grid[:, 1])     # whole column
print(grid[0, ::-1]) # reversed first row

Interactive: boolean indexing

This is the one that replaces loops entirely. Change the condition below and watch the array filter itself live.

45

78

92

34

88

67

55

91

40

73

85

60

Condition             >             <             >=             <=             ==           

Value

boolean_mask

arr[arr > 75]

Output

[78, 92, 88, 91, 85]

Real datasets use this exact pattern constantly: students scoring above a cutoff, people over a certain age, transactions above a price, pixels above a brightness threshold.

Fancy indexing

fancy_indexing.py

CopyRun

nums = np.array([10, 20, 30, 40, 50])
print(nums[[0, 2, 4]])  # pick specific positions, any order

Slicing takes a continuous range. Fancy indexing takes whatever positions you list, in whatever order you list them.

Common Mistake

A basic slice returns a **view**, not a copy. Edit the slice, and you edit the original array too. If you need an independent copy, call .copy() explicitly.

Data Science Insight

Unlike basic slicing, both boolean indexing and fancy indexing always return a **copy** — editing the result never touches the original array.

Mini challenge

Quick check: you slice an array with arr[1:3] and modify the result. What happens to the original array?

Nothing — slices are always independent copiesIt changes too — a basic slice is a view into the same memory

Summary

You can now pull out exactly what you need, by position or by condition. Next: reshaping that data into whatever form the rest of your pipeline expects.

Chapter 09Live reshape

## Reshaping Arrays

Why do we need this

Same data, different shape. This matters once arrays start feeding into functions and models that expect a specific number of dimensions.

Interactive: reshape playground

This array has exactly 12 elements: np.arange(12). Try reshaping it — and try breaking it.

Rows

Cols

reshape

arr.reshape(3, 4)

0

1

2

3

4

5

6

7

8

9

10

11

Try rows = 5, cols = 3 — NumPy refuses, because 5 × 3 = 15 ≠ 12. Reshaping only rearranges elements; it never adds or removes them.

Related functions

reshaping.py

Copy

grid.flatten()      # collapse to 1D — always returns a copy
grid.ravel()        # collapse to 1D — a view when possible, faster
grid.transpose()    # swap rows and columns (same as .T)
grid.swapaxes(0, 1) # swap any two axes, useful beyond 2D
arr.reshape(-1, 3)     # -1 means "figure this dimension out for me"

Performance Tip

Use -1 for one dimension when you don't want to do the arithmetic yourself — arr.reshape(-1, 3) means "as many rows as needed, 3 columns each."

Data Science Insight

flatten() always copies the data. ravel() returns a view when it can — slightly faster, but edits can leak back to the original array.

Mini challenge

Quick check: can you reshape a 12-element array into shape (5, 3)?

Yes, NumPy pads the missing valuesNo — 5 × 3 = 15, which doesn't match the original 12 elements

Summary

You can now reshape data into whatever form you need. Next up: why NumPy avoids loops entirely, and what "vectorization" actually means under the hood.

Chapter 10Animated comparison

## Vectorization

Why do we need this

Every chapter so far has quietly relied on this idea: operate on the whole array at once, never one element at a time. Here's why that rule exists.

What problem does it solve

A Python for loop pays a small tax on every single iteration — checking types, managing the loop machinery, calling back into the interpreter. For 5 elements that tax is invisible. For 5 million, it adds up to real, noticeable time.

Syntax

loop_vs_vectorized.py

Copy

# the loop way
result = []
for x in arr:
    result.append(x * 2)

# the vectorized way
result = arr * 2

Interactive: watch the difference

Same array, same operation — doubling every value. Run it both ways and watch how each one actually executes.

4

8

15

16

23

42

Run as Python LoopRun Vectorized

Click a button to see the difference.

Common Mistake

Switching to NumPy but still writing for x in arr: result.append(...) out of habit. If you're looping over a NumPy array element by element, you're throwing away the entire reason to use NumPy.

Data Science Insight

Vectorized operations don't just have less Python code — they hand the whole loop to pre-compiled C code under the hood, where it runs without the interpreter's per-element overhead.

Performance Tip

If you catch yourself writing a for loop over a NumPy array, pause and search for the vectorized version first — there's almost always one.

Mini challenge

Quick check: why is arr * 2 faster than looping and multiplying each element?

Because * is a special Python keywordBecause it runs as one compiled operation instead of many interpreted steps

Summary

You've now seen why NumPy is fast, not just that it is. Next: what happens when you vectorize an operation between two arrays of _different_ shapes.

Chapter 11Shape checker

## Broadcasting

Why do we need this

Vectorized operations are easy when both arrays are the same shape. Broadcasting is what happens when they're not — and NumPy still finds a way.

Real-world intuition

Think of the smaller array as being **stretched**, not copied, to match the larger one. NumPy never actually duplicates the data in memory — it just reuses it as if it were repeated.

The rule

Compare shapes from the **right**, one dimension at a time. Two dimensions are compatible if they're equal, or if either one is 1. If every dimension pair clears that bar, the shapes broadcast together.

broadcasting.py

CopyRun

grid = np.ones((3, 4))
row = np.array([1, 2, 3, 4])
print(grid + row)  # row is applied to every row of grid

Interactive: shape checker

Type any two shapes and see if NumPy would accept them.

Shape A

Shape B

(3,4) + (4,)(3,1) + (1,4)(5,1,3) + (3,)(3,4) + (3,) — fails

3

4

+

1

4

Result:

3

4

Compatible — broadcasts to shape (3, 4).

Common Mistake

Assuming any two arrays will broadcast together as long as one is "smaller." Shape matters at the dimension level — try the failing preset above and watch exactly which pair of dimensions breaks it.

Data Science Insight

Broadcasting is a virtual stretch, not a real copy — this is exactly why it's fast. NumPy computes as if the smaller array were repeated, without ever allocating that repeated memory.

Mini challenge

Quick check: do shapes (4, 3) and (3,) broadcast together?

Yes — the (3,) aligns with the last dimension of (4, 3)No — they have a different number of dimensions

Summary

You can now predict whether two shapes will combine before you even run the code. Next: collapsing an array down into the summary numbers that actually answer questions.

Chapter 12Live calculator

## Aggregation Functions

Why do we need this

Raw arrays are rarely the answer you need — usually you need one number that summarizes them: a total, an average, a spread.

Syntax

aggregations.py

Copy

arr.sum(), arr.mean(), np.median(arr)
arr.std(), arr.var()
arr.min(), arr.max(), arr.argmin(), arr.argmax()
np.percentile(arr, 90), np.quantile(arr, 0.9)
np.unique(arr), np.count_nonzero(arr)

Interactive: aggregation calculator

Edit the values, pick an axis, and watch the numbers update.

Whole arrayaxis=0 (columns)axis=1 (rows)

sum: **47**

mean: **7.83**

median: **7.5**

std: **4.37**

min: **2**

max: **15**

result

arr.sum()   -> 47  
arr.mean()  -> 7.83  
arr.std()   -> 4.37

Common Mistake

Forgetting that axis defaults to None — meaning "flatten and aggregate everything." Switch to axis=0 or axis=1 above and notice the result changes shape entirely, not just its values.

Data Science Insight

Median is **robust to outliers** — mean isn't. One extreme value can drag a mean far from what "typical" actually looks like, while the median barely moves.

Performance Tip

np.unique(arr, return_counts=True) gives you distinct values and their frequency counts in a single call — no manual counting loop needed.

Mini challenge

Quick check: on a 2D array, what does axis=0 collapse?

Rows — giving one result per columnColumns — giving one result per row

Summary

You can now turn any array into the numbers that actually answer a question. Next: fast, elementwise math — square roots, logs, and trig, all without writing a loop.

Chapter 13Live calculator

## Universal Functions (ufuncs)

Why do we need this

Beyond +, -, *, / — real data work needs square roots, logs, exponentials, and trig, applied to an entire array at once.

Syntax

ufuncs.py

Copy

np.add(a, b), np.subtract(a, b), np.multiply(a, b), np.divide(a, b)
np.sqrt(arr), np.log(arr), np.exp(arr)
np.sin(arr), np.cos(arr)
np.abs(arr), np.round(arr), np.clip(arr, low, high)

Interactive: ufunc calculator

Edit the values or pick a different function — the result recalculates instantly.

Values

Function             np.sqrt             np.abs             np.exp             np.log             np.sin             np.round             np.clip           

ufunc

arr = np.array([-4, 1, 4, 9, 16])  
result = np.sqrt(arr)

Output

[nan, 1, 2, 3, 4]

Try sqrt on the default values — notice -4 returns nan. NumPy warns you, but still gives back a full array instead of crashing.

Common Mistake

Using Python's built-in math.sqrt(arr) on a whole array — it crashes, because math functions expect a single number. np.sqrt(arr) is built to work on the whole array at once.

Data Science Insight

Ufuncs support broadcasting automatically — the same rule from Chapter 11 applies here too, so np.add(matrix, row) works even when the shapes don't match exactly.

Mini challenge

Quick check: what does np.sqrt(-4) return?

It raises an error and stops executionnan, with a warning — execution continues

Summary

Fast elementwise math, no loops, broadcasting built in. Next: generating random data on purpose — for shuffling, sampling, and building test datasets.

Chapter 14Seeded & reproducible

## Random Module

Why do we need this

Shuffling training data, sampling a subset to inspect, generating a synthetic dataset to practice on — all of it needs controlled randomness, not chaos.

Interactive: shuffle & sample

Set a seed, then shuffle or sample. Use the exact same seed twice and you'll get the exact same result both times — that's the whole point of seeding.

1

2

3

4

5

6

7

8

9

10

Seed

Reset OrderShuffleSample 3, no repeatSample 3, with repeat

random_ops

arr = np.arange(1, 11)

Common Mistake

np.random.shuffle(arr) shuffles **in place** and returns None. Writing arr = np.random.shuffle(arr) silently throws away your array and replaces it with nothing.

Data Science Insight

Fixing a seed isn't just a demo trick — it's how ML experiments stay comparable. If two model runs use different random splits or initializations, you can't tell whether a result improved because of your change or because of luck.

Performance Tip

Prefer np.random.permutation(arr) over shuffle() when you want a shuffled **copy** and need to keep the original array untouched.

Mini challenge

Quick check: what does np.random.shuffle(arr) return?

A new, shuffled arrayNone — it shuffles arr in place

Summary

Randomness, under control. Next: a short conceptual detour into a word you'll hear constantly once you touch deep learning — tensor.

Chapter 15Conceptual

## Tensors, Introduced

Why do we need this

The moment you open a PyTorch or TensorFlow tutorial, you'll see the word "tensor" everywhere. Here's the short version: you already know what it is.

Visual explanation

7

Scalar · 0D

→

5

3

8

Vector · 1D

→

1

2

3

4

5

6

7

8

9

Matrix · 2D

→

Tensor · 3D+

A tensor is just NumPy's word for "an array with 3 or more dimensions." Nothing more exotic than that — everything you've learned so far already applies.

|Dims|Name|Real Example|
|---|---|---|
|0D|Scalar|A single pixel's brightness|
|1D|Vector|One pixel's RGB values: [255, 0, 0]|
|2D|Matrix|One grayscale image|
|3D|Tensor|One color image (height × width × 3 channels)|
|4D|Tensor|A batch of color images (batch × height × width × channels)|
|5D|Tensor|A video clip (frames × batch × height × width × channels)|

Common Mistake

Treating "tensor" as some separate, more advanced data structure than what you've already been using. In NumPy, it's the exact same ndarray — just with more dimensions.

Data Science Insight

PyTorch and TensorFlow tensors add GPU support and automatic differentiation on top — but the underlying shape, indexing, and broadcasting rules are the same ones you just learned.

Performance Tip

When a tutorial shows a shape like (32, 224, 224, 3), read it as batch × height × width × channels. That reading habit alone resolves most early deep-learning confusion.

Mini challenge

Quick check: what's a tensor, really?

A completely different data structure from a NumPy arrayAn array with 3 or more dimensions

Summary

One less intimidating word in your vocabulary. Next: proving, with real numbers, why any of this speed talk has been worth it.

Chapter 16Live benchmark

## Performance Comparison

Why do we need this

Chapter 4 promised a real measurement instead of a claim. Here it is — run it yourself, right now, in this page.

Interactive: live benchmark

This runs a genuine timed comparison in your browser: a generic array of boxed numbers vs a typed array of raw contiguous memory — the same "scattered pointers vs one solid block" idea from Chapter 4, just measured live instead of illustrated.

Array Size             100,000             1,000,000             5,000,000           

Run Benchmark

Generic array (boxed numbers)—

Typed array (contiguous memory)—

Real timings, measured live just now. Results vary by machine and browser — try a bigger size for a clearer gap.

Doing this for real, in Python

benchmark.py

Copy

import time
import numpy as np

py_list = list(range(1_000_000))
np_array = np.arange(1_000_000)

start = time.time()
result = [x * 2 for x in py_list]
print("List:", time.time() - start)

start = time.time()
result = np_array * 2
print("Array:", time.time() - start)

In a notebook specifically, %timeit gives a more reliable reading than manual time.time() calls — it runs the code several times and averages out noise.

Common Mistake

Benchmarking on an array of 10 elements and concluding "NumPy isn't really faster." At tiny sizes, fixed overhead dominates. The gap only becomes obvious once you're operating on thousands or millions of elements.

Data Science Insight

Speed isn't the only win — memory matters just as much. A million Python float objects each carry their own type and reference-count overhead; a million float64 values in a NumPy array don't.

Mini challenge

Quick check: you benchmark a 5-element array and see almost no difference between a list and a NumPy array. What's the likely explanation?

The array is too small for the vectorization advantage to show upNumPy doesn't actually help with speed

Summary

You've now proven the speed claim yourself, live. Next: a quick tour of exactly where all of this shows up in the real world.

Chapter 17Survey

## Real-World Applications

Why do we need this

Every field below is doing exactly what you've already learned — shape, indexing, aggregation, broadcasting — just on data that means something different each time.

🤖

#### Machine Learning

Training data, features, and model weights are all just NumPy arrays underneath.

🧠

#### Deep Learning

Every neural network layer is matrix multiplication — the vectorized ops from Chapter 10.

📷

#### Computer Vision

Images ARE arrays. A photo is a matrix or tensor of pixel values, straight from Chapter 15.

💬

#### NLP

Text gets converted into arrays of numbers (embeddings) before any model can touch it.

💹

#### Finance

Analyzing years of price data means filtering and aggregating huge arrays — Chapters 8 and 12.

🏥

#### Medical AI

MRI and CT scans are stored as 3D tensors — literally a stack of matrices.

🦾

#### Robotics

Sensor readings arrive as arrays continuously; decisions come from doing math on them in real time.

🔬

#### Scientific Computing

Physics simulations run as huge array operations, generation after generation.

🌦️

#### Weather Prediction

Forecasting models crunch grids of temperature, pressure, and humidity across the globe.

🚀

#### Space Research

Telescope images and satellite data are enormous multi-dimensional arrays.

🎮

#### Game Development

Physics engines, collision detection, and rendering all lean on fast array math.

Data Science Insight

Notice the pattern: none of these fields needed a "new" skill from you. Shape, indexing, aggregation, and broadcasting — the same four ideas, applied to data that means something different each time.

Mini challenge

Quick check: true or false — NumPy is mostly an academic tool, rarely used in production.

TrueFalse — it's foundational to production ML, CV, and data pipelines everywhere

Summary

You've seen where this goes. Time to prove it yourself — the capstone project is next: a 200-student dataset, and three levels of real analysis.

Chapter 18Capstone · tasks (solutions next)

## Capstone: Student Performance Analysis System

Why do we need this

Every earlier chapter used one array at a time. Real datasets are never that simple — they're several arrays, each describing a different attribute of the _same_ entities, all the same length. That's exactly what a spreadsheet row represents, and it's exactly what you're about to build with nothing but NumPy.

Dataset generation

200 students. Five arrays — IDs, marks, attendance, study hours, assignments completed — all the same length, all describing the same 200 people.

generate_dataset.py

Copy

import numpy as np

np.random.seed(42)
student_ids = np.arange(1, 201)
attendance = np.clip(np.random.normal(85, 10, 200), 50, 100).round(1)
study_hours = np.clip(np.random.normal(4, 2, 200), 0, 10).round(1)
assignments_completed = np.random.randint(0, 11, 200)
noise = np.random.normal(0, 8, 200)

marks = np.clip(
    40 + attendance * 0.3 + study_hours * 4 + assignments_completed * 1.5 + noise,
    0, 100
).round(1)

Marks aren't random noise here — they're deliberately built from attendance, study hours, and assignments, plus some randomness on top, so the patterns you find while filtering are genuine, not coincidental.

Live preview (generated below, right now)

|ID|Marks|Attendance|Study Hrs|Assignments|
|---|---|---|---|---|
|1|76.8|75.4|3.5|1|
|2|94.8|91.4|4|9|
|3|76|67|2.7|0|
|4|76.1|64.6|3.4|0|
|5|98.5|96.1|6.1|5|
|6|70|97.3|0|6|
|7|88.2|79.2|5|5|
|8|95.6|99|3.2|7|
|9|68.9|81.9|4.4|1|
|10|91.9|75.8|4.8|7|

Generated live in your browser using the same logic as the Python above. Exact numbers differ slightly from NumPy's own random generator, but the structure and relationships are identical — first 10 of 200 students shown.

Interactive: look up a student

Student ID (1–200)

marks: **76.8**

attendance: **75.4%**

study_hours: **3.5**

assignments_completed: **1**

Use this to sanity-check your own code as you work through the levels below — pick a student ID and compare what your NumPy code gives you against what's shown here.

Common Mistake

Combining multiple conditions with Python's and / or instead of NumPy's & / |. You'll need this for Level 3 — remember to wrap each condition in parentheses: (marks > 80) & (attendance > 90).

Data Science Insight

Five separate same-length arrays describing one group of people is exactly the problem Pandas exists to solve — a DataFrame is this same idea, with row and column labels attached. You're about to feel why that's useful.

The project — 3 levels

Work through these yourself before the solutions arrive. Use the arrays from the generation code above — marks, attendance, study_hours, assignments_completed — and the student lookup tool to check specific cases as you go.

Level 1Basic Analysis

- Find the highest marks in the dataset.
- Find the lowest marks in the dataset.
- Calculate the average marks.
- Calculate the median marks.
- Calculate the standard deviation of marks.
- Calculate the variance of marks.

Level 2Boolean Indexing

- Find all students scoring above 90.
- Find all students scoring below 40.
- Find all students with attendance above 90%.
- Find all students studying more than 5 hours.
- Find all students who completed more than 8 assignments.

Level 3Multiple Conditions

- Students with marks > 80 AND attendance > 90.
- Students with marks < 40 AND attendance < 75.
- Students with high attendance but low marks — what does that group look like?
- Students with low study hours but high marks — how many are there?

Performance Tip

Comment your reasoning as you go, not just your code. This project is meant to be explained, not just solved — that habit is what separates "it ran" from "I understand why it ran."

Mini challenge

Quick check: why do all five arrays (ids, marks, attendance, study_hours, assignments) need to be exactly the same length?

NumPy requires all arrays in a program to match lengthBecause index i in every array describes the same student

What's next

Try all 3 levels yourself first — use the lookup tool above to spot-check individual students. The full Solution Section, with every line of code explained, is coming in the next build pass.

Sheryians AI School — NumPy: The Complete Course · Chapter 18 of 18 tasks live · solutions next