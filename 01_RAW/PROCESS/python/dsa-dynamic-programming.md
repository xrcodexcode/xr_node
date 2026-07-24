---
id: b5a3f29b-9c74-4b53-9a4d-ef34d8cc73b1
title: DSA Dynamic Programming
type: atomic-note
status: learning
domain: general
source_type: course
created: 2026-07-24
updated: 2026-07-24
review: 2026-08-24
confidence: 85
version: 1
aliases: ["Dynamic Programming", "DP"]
tags: [implementation, advanced]
owner_moc: Python DSA ML Mastery MOC
sources: []
related: ["[[DSA Recursion and Backtracking]]", "[[DSA Greedy Algorithms]]", "[[DSA Arrays and Strings]]"]
schema_version: 4
---

Dynamic Programming (DP) is fundamentally about avoiding redundant work by trading space for time. For an ML Engineer, mastering DP is crucial because many foundational ML algorithms—like the Viterbi algorithm for Hidden Markov Models (HMMs), Connectionist Temporal Classification (CTC) for speech recognition, and sequence alignment for bioinformatics (which inspired attention mechanisms)—are just domain-specific applications of dynamic programming. By understanding state definition and transitions, you build the intuitive foundation for reinforcement learning (Markov Decision Processes and Bellman equations).

## 1. What is Dynamic Programming?

Dynamic Programming solves complex problems by breaking them down into simpler subproblems. A problem must have two properties to be solvable by DP:
1. **Overlapping Subproblems**: The problem can be broken down into subproblems which are reused several times.
2. **Optimal Substructure**: The optimal solution to the overall problem can be constructed from the optimal solutions of its subproblems.

### Memoization vs Tabulation
- **Memoization (Top-Down)**: Start from the target, recurse down to base cases, and cache (memoize) the results.
- **Tabulation (Bottom-Up)**: Start from the base cases, build a table, and iteratively compute the results up to the target.

## 2. The 5-Step DP Framework

Whenever you face a DP problem, follow this structured approach:
1. **Define the State**: What variables define the current subproblem? Let `dp[i]` or `dp[i][j]` represent the optimal answer for this state.
2. **Determine the Recurrence Relation**: How do you transition from smaller states to larger ones? (e.g., `dp[i] = dp[i-1] + dp[i-2]`)
3. **Identify Base Cases**: What are the simplest possible subproblems? (e.g., `dp[0] = 0`, `dp[1] = 1`)
4. **Determine the Iteration Order**: For bottom-up, ensure smaller subproblems are computed before larger ones depending on them.
5. **Extract the Answer**: Where is the final answer stored? (e.g., `dp[n]`)

🎯 **Interview Tip**: Always start by writing the recursive recurrence relation. Once you have that, memoizing or tabulating is just boilerplate code!

## 3. Top-Down vs Bottom-Up: Fibonacci

Let's look at the classic Fibonacci sequence to understand the core concepts and Space Optimization.
- **Recurrence**: `F(n) = F(n-1) + F(n-2)`
- **Base cases**: `F(0) = 0`, `F(1) = 1`

```python
# 1. Naive Recursion (O(2^n) time, O(n) space)
def fib_naive(n: int) -> int:
    if n <= 1: return n
    return fib_naive(n-1) + fib_naive(n-2)

# 2. Top-Down Memoization (O(n) time, O(n) space)
def fib_memo(n: int, memo=None) -> int:
    if memo is None: memo = {}
    if n in memo: return memo[n]
    if n <= 1: return n
    
    memo[n] = fib_memo(n-1, memo) + fib_memo(n-2, memo)
    return memo[n]

# 3. Bottom-Up Tabulation (O(n) time, O(n) space)
def fib_tab(n: int) -> int:
    if n <= 1: return n
    dp = [0] * (n + 1)
    dp[1] = 1
    
    for i in range(2, n + 1):
        dp[i] = dp[i-1] + dp[i-2]
    return dp[n]

# 4. Space Optimized Bottom-Up (O(n) time, O(1) space)
def fib_optimized(n: int) -> int:
    if n <= 1: return n
    prev2, prev1 = 0, 1
    
    for _ in range(2, n + 1):
        curr = prev1 + prev2
        prev2, prev1 = prev1, curr
        
    return prev1

# Output: 55 for fib_optimized(10)
```

## 4. 1D DP Problems

### House Robber
**Problem**: Rob non-adjacent houses to maximize money.
- **State**: `dp[i]` = max money from first `i` houses.
- **Recurrence**: `dp[i] = max(dp[i-1], dp[i-2] + nums[i])`

```python
def rob(nums: list[int]) -> int:
    if not nums: return 0
    if len(nums) == 1: return nums[0]
    
    # Space optimized (O(1) space, O(N) time)
    prev2, prev1 = 0, 0
    for num in nums:
        temp = prev1
        prev1 = max(prev1, prev2 + num)
        prev2 = temp
        
    return prev1
```

### Coin Change (Minimum Coins)
**Problem**: Minimum coins to make amount.
- **Recurrence**: `dp[a] = min(dp[a], dp[a - coin] + 1)`

```python
def coinChange(coins: list[int], amount: int) -> int:
    # Initialize DP array with a value > max possible coins
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0
    
    for a in range(1, amount + 1):
        for c in coins:
            if a - c >= 0:
                dp[a] = min(dp[a], dp[a - c] + 1)
                
    return dp[amount] if dp[amount] != float('inf') else -1
```

### Longest Increasing Subsequence (LIS)
**Problem**: Find length of strictly increasing subsequence.
- **Recurrence**: `dp[i] = max(dp[i], dp[j] + 1) for j < i if nums[j] < nums[i]`

```python
def lengthOfLIS(nums: list[int]) -> int:
    if not nums: return 0
    
    dp = [1] * len(nums)
    
    for i in range(1, len(nums)):
        for j in range(i):
            if nums[i] > nums[j]:
                dp[i] = max(dp[i], dp[j] + 1)
                
    return max(dp) # O(N^2) time, O(N) space
    # Note: O(N log N) solution exists using Binary Search (Patience Sorting)
```

## 5. 2D DP Problems & Grid DP

### 0/1 Knapsack
**Problem**: Maximize value within weight limit `W`.
- **State**: `dp[i][w]` = max value using first `i` items with capacity `w`.
- **Recurrence**: `dp[i][w] = max(dp[i-1][w], dp[i-1][w-wt[i-1]] + val[i-1])`

```python
def knapsack(wt: list[int], val: list[int], W: int) -> int:
    n = len(wt)
    dp = [[0] * (W + 1) for _ in range(n + 1)]
    
    for i in range(1, n + 1):
        for w in range(1, W + 1):
            if wt[i-1] <= w:
                # Include or Exclude
                dp[i][w] = max(val[i-1] + dp[i-1][w-wt[i-1]], dp[i-1][w])
            else:
                # Exclude
                dp[i][w] = dp[i-1][w]
                
    return dp[n][W]
```

### Space Optimization in 2D (Rolling Array)
Notice in Knapsack, `dp[i]` only depends on `dp[i-1]`. We can reduce to 1D array, but we must iterate weights *backwards* to avoid overwriting `dp[w-wt[i-1]]` from the current step.

```python
def knapsack_1d(wt: list[int], val: list[int], W: int) -> int:
    n = len(wt)
    dp = [0] * (W + 1)
    
    for i in range(n):
        for w in range(W, wt[i] - 1, -1): # Backwards!
            dp[w] = max(dp[w], val[i] + dp[w - wt[i]])
            
    return dp[W]
```

### Unique Paths
**Problem**: Ways to reach bottom-right from top-left.
- **Recurrence**: `dp[i][j] = dp[i-1][j] + dp[i][j-1]`

## 6. DP on Strings

### Longest Common Subsequence (LCS)
**Problem**: Length of longest subsequence present in both strings.
- **Recurrence**: 
  - If `s1[i] == s2[j]`: `dp[i][j] = 1 + dp[i-1][j-1]`
  - Else: `dp[i][j] = max(dp[i-1][j], dp[i][j-1])`

```python
def longestCommonSubsequence(text1: str, text2: str) -> int:
    m, n = len(text1), len(text2)
    # dp[i][j] uses prefixes text1[:i] and text2[:j]
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if text1[i-1] == text2[j-1]:
                dp[i][j] = dp[i-1][j-1] + 1
            else:
                dp[i][j] = max(dp[i-1][j], dp[i][j-1])
                
    return dp[m][n]
```

## 7. DP Patterns: State Machine (Buy/Sell Stock)

Many advanced problems require keeping track of a "state" (e.g., holding stock vs not holding).

### Best Time to Buy and Sell Stock with Cooldown
- `hold[i]`: Max profit on day `i` holding a stock.
- `not_hold[i]`: Max profit on day `i` not holding a stock.

```python
def maxProfit(prices: list[int]) -> int:
    if not prices: return 0
    
    n = len(prices)
    hold = [0] * n
    not_hold = [0] * n
    
    hold[0] = -prices[0]
    not_hold[0] = 0
    
    if n > 1:
        hold[1] = max(-prices[0], -prices[1])
        not_hold[1] = max(0, prices[1] - prices[0])
        
    for i in range(2, n):
        # Keep holding, or buy today (must have sold >= 2 days ago)
        hold[i] = max(hold[i-1], not_hold[i-2] - prices[i])
        # Keep not holding, or sell today
        not_hold[i] = max(not_hold[i-1], hold[i-1] + prices[i])
        
    return not_hold[-1]
```

## 8. DP in ML 🤖

DP is deeply integrated into classical Machine Learning and modern NLP.
1. **Viterbi Algorithm**: Used in HMMs for POS tagging or Speech Recognition. It is essentially DP finding the most likely sequence of hidden states.
2. **CTC Decoding (Connectionist Temporal Classification)**: Used to map audio frames to characters. CTC uses DP (Forward-Backward algorithm) to marginalize over all valid alignments of audio frames to the target text.
3. **Dynamic Time Warping (DTW)**: Used for measuring similarity between two temporal sequences (like speech patterns). Very similar to the Edit Distance DP problem!
4. **Reinforcement Learning**: The Bellman equation is a DP recurrence relation `V(s) = max_a [ R(s,a) + gamma * V(s') ]`. Value Iteration is essentially bottom-up tabulation.

## 9. Practice Problems

To truly master DP, implementation is key. Try these on LeetCode:
1. Fibonacci Number (Easy)
2. Climbing Stairs (Easy)
3. House Robber (Medium)
4. Coin Change (Medium)
5. Longest Increasing Subsequence (Medium)
6. Longest Common Subsequence (Medium)
7. Edit Distance (Hard)
8. Word Break (Medium)
9. Target Sum (Medium)
10. Best Time to Buy and Sell Stock with Cooldown (Medium)
