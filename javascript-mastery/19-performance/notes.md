# Level 19 — Performance

⏱️ **Estimated Learning Time:** 4 hours
🛠️ **Minimum Practice Time:** 5 hours
🏆 **Mastery Checkpoint:** Can you identify Big O complexity, optimize DOM updates, and memoize expensive functions?

## 1. Time & Space Complexity Basics

**What is it?**
Big O notation describes how the runtime (time complexity) or memory usage (space complexity) of an algorithm grows as the input size grows.

**Why?**
To write efficient code, especially when dealing with large datasets (thousands of users, products, etc.).

### Common Big O Patterns

1. **O(1) - Constant Time**
   The execution time is the same regardless of input size.
   ```javascript
   // FASTEST
   const getFirstItem = (arr) => arr[0];
   const user = { id: 1, name: 'Alice' };
   const getName = (obj) => obj.name; // Direct property access
   ```

2. **O(log n) - Logarithmic Time**
   Execution time grows logarithmically. Common in binary search.
   ```javascript
   // VERY FAST
   // (Binary search example omitted for brevity, but it halves the dataset each step)
   ```

3. **O(n) - Linear Time**
   Execution time grows linearly with input size.
   ```javascript
   // FAST
   const findUser = (users, id) => {
     for (let i = 0; i < users.length; i++) { // Must check every item in worst case
       if (users[i].id === id) return users[i];
     }
   };
   // Also: .map(), .filter(), .forEach(), .find()
   ```

4. **O(n log n) - Linearithmic Time**
   Typical for efficient sorting algorithms (like Chrome's `.sort()`).
   ```javascript
   // DECENT
   const sortUsers = (users) => users.sort((a, b) => a.age - b.age);
   ```

5. **O(n²) - Quadratic Time**
   Execution time grows quadratically. Usually nested loops.
   ```javascript
   // SLOW (Avoid for large datasets)
   const findDuplicates = (arr) => {
     const duplicates = [];
     for (let i = 0; i < arr.length; i++) {
       for (let j = i + 1; j < arr.length; j++) {
         if (arr[i] === arr[j]) duplicates.push(arr[i]);
       }
     }
     return duplicates;
   };
   ```

## 2. JavaScript Performance

### Efficient Loops
`for` loop is historically the fastest, but modern engines highly optimize `.forEach()`, `.map()`, and `for...of`. Choose readability first, optimize when proven slow.

### Object Property Access Patterns
Creating new objects repeatedly or dynamically adding properties can be slow. Pre-allocating or reusing objects helps.

### Avoiding Unnecessary Work (Caching)
If a computation is expensive, save the result.

```javascript
// Slow version: Recalculating
function processData(data) {
  return data.filter(d => d.active).map(d => heavyComputation(d));
}

// Fast version: Memoization (Caching)
const cache = {};
function heavyComputation(item) {
  if (cache[item.id]) return cache[item.id];
  const result = item.value * 2; // expensive computation
  cache[item.id] = result;
  return result;
}
```

## 3. DOM Performance

**What is it?**
Updating the DOM is one of the slowest operations in the browser.

**Why?**
Every time you change the DOM, the browser has to recalculate styles, layout, and repaint the screen (Reflow and Repaint).

### DocumentFragment (Batch DOM Updates)
Instead of appending elements one by one, append them to an invisible container first.

```javascript
// ❌ SLOW: Triggers multiple reflows
const listEl = document.getElementById('list');
for (let i = 0; i < 1000; i++) {
  const li = document.createElement('li');
  li.textContent = `Item ${i}`;
  listEl.appendChild(li); // Reflow every loop
}

// ✅ FAST: One reflow
const targetList = document.getElementById('list');
const fragment = document.createDocumentFragment();
for (let i = 0; i < 1000; i++) {
  const li = document.createElement('li');
  li.textContent = `Item ${i}`;
  fragment.appendChild(li); // No DOM reflow
}
targetList.appendChild(fragment); // ONE single reflow
```

## 4. Optimization Patterns

### Debouncing (Recap)
Ensures a function isn't called again until a certain amount of time has passed without it being called. (e.g., Search input).

### Throttling (Recap)
Ensures a function is called at most once in a specified time period. (e.g., Scroll event).

### Web Workers (Concept)
JavaScript is single-threaded. If you do heavy math, the UI freezes. Web Workers run scripts in background threads.

## 5. Measurement Tools

Use `performance.now()` for micro-benchmarks.

```javascript
const start = performance.now();
heavyTask();
const end = performance.now();
console.log(`Task took ${end - start} milliseconds.`);
```

### Chrome DevTools Performance Tab
Record your page while interacting to see flame charts of what is taking time (Scripting, Rendering, Painting).
