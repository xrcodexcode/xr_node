# Level 19 — Worksheet

## Part A — Predict the Output
```javascript
const cache = {};
function double(n) {
  if (cache[n]) {
    console.log('Cached');
    return cache[n];
  }
  console.log('Calculated');
  cache[n] = n * 2;
  return cache[n];
}
double(5);
double(5);
```

## Part B — Complete the Code
Optimize this nested loop using a Set (O(n) instead of O(n²)).
```javascript
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

function findCommon(a, b) {
  // Convert one array to a Set for O(1) lookups
  const setB = new Set(____);
  return a.filter(item => ____.has(____));
}
```

## Part C — Write from Scratch
Write a function `batchRender(items, parentElement)` that takes an array of strings, creates `<li>` elements, and appends them to `parentElement` using a `DocumentFragment`.

## Part D — Debug
Why is this DOM update slow?
```javascript
const container = document.getElementById('container');
for (let i = 0; i < 1000; i++) {
  container.innerHTML += `<div>${i}</div>`;
}
```

## Part E — Modify
Modify this function to use `performance.now()` to log how long it takes to run.
```javascript
function heavyTask() {
  for(let i=0; i<1e7; i++) {}
}
```

## Part F — Challenge
Write a higher-order function `memoize(fn)` that takes any pure function and returns a memoized version of it.

## Part G — Mini Project
Build an "Endless List". An array has 10,000 items. Render only the first 50. Add a "Load More" button that uses a DocumentFragment to efficiently append the next 50 items when clicked. Measure and log the time taken for each render using `performance.now()`.
