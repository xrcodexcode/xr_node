# Level 19: Performance - Solutions

## Part A — Predict the Output
### Exercise 1: Debounce vs Throttle
**Output:**
Throttled func will run every X ms if events keep firing. Debounced func will only run X ms AFTER events STOP firing.

**Why it works:**
Debounce clears the timer on every call, pushing execution to the end. Throttle uses a flag or timestamp to block execution until the delay passes.

## Part B — Complete the Code
### Exercise 2: Basic Memoization 🟡
**Solution:**
```js
function memoize(fn) {
  const cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache[key]) return cache[key];
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}
```
**Why it works:**
It uses a closure to maintain the `cache` object. The arguments are stringified as a unique key. If the key exists, return the cached result. Otherwise, run the function, store it, and return.
**Better solution:** Use `Map` for arbitrary keys instead of `JSON.stringify` if objects are passed, but `JSON.stringify` works well for primitive args.

## Part C — Write from Scratch
### Exercise 3: DOM Batching 🔴
**Solution:**
```js
function createList(items) {
  const fragment = document.createDocumentFragment();
  items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    fragment.appendChild(li);
  });
  document.getElementById('list-container').appendChild(fragment);
}
```
**Why it works:**
Using a `DocumentFragment` updates the DOM tree only once instead of on every iteration.
**Better solution:** If there are thousands of items, virtualization (rendering only visible items) is required.

## Part D — Debug
### Exercise 4: Memory Leak 🔴
**Solution:**
Remove event listeners when a component unmounts or before re-attaching.
```js
function setupButton() {
  const btn = document.getElementById('btn');
  // Need to use named function to be able to remove it
  btn.removeEventListener('click', handleClick);
  btn.addEventListener('click', handleClick);
}
function handleClick() { console.log('clicked'); }
```
**Why it works:** Unremoved event listeners hold references to DOM elements and closures, preventing garbage collection.

## Part E — Challenge
### Exercise 5: RAF Animation 🔥
**Solution:**
```js
function animateBox(element, distance, duration) {
  let start = null;
  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    const percentage = Math.min(progress / duration, 1);
    element.style.transform = `translateX(${percentage * distance}px)`;
    if (progress < duration) {
      window.requestAnimationFrame(step);
    }
  }
  window.requestAnimationFrame(step);
}
```
**Why it works:** `requestAnimationFrame` syncs with the browser's refresh rate (typically 60fps), avoiding layout thrashing.
