# Level 19 — Exercises

## 🟢 Beginner

1. **Identify Complexity:** What is the Big O time complexity of a function that returns the last element of an array?
2. **Identify Complexity:** What is the Big O time complexity of a nested `for` loop iterating over the same array twice?
3. **Measurement:** Write a script that uses `performance.now()` to measure how long a `for` loop takes to run 1,000,000 times.
4. **DOM:** Create a `DocumentFragment`, append 5 `<div>` elements to it, and then append the fragment to the document body.
5. **Array Pre-allocation:** Create an array of 1000 empty slots using `new Array(1000)` and fill it with zeros.

## 🟡 Intermediate

6. **Optimize Loop:** Rewrite a nested `forEach` loop (O(n²)) that finds duplicate IDs in two arrays into an O(n) operation using a `Set`.
7. **Memoization:** Write a memoized version of a function that calculates the factorial of a number.
8. **Debounce Implementation:** Write a basic debounce function and apply it to a `console.log` triggered by a simulated event.
9. **Throttle Implementation:** Write a basic throttle function and apply it to a `console.log` triggered by a simulated event.
10. **Batch Update:** Write a function that takes an array of 500 strings and renders them as `<li>` elements using a `DocumentFragment`.

## 🔴 Advanced

11. **Virtual Scrolling (Concept):** Write a function that, given an array of 10,000 items and a "scroll position", only returns the 20 items that should currently be visible.
12. **DOM Reflow:** Identify the code lines that trigger a synchronous layout (reflow) in a provided snippet and fix them by caching the read values.
13. **Web Worker Simulation:** Write a mock web worker using `setTimeout` to process a large array in chunks without blocking the main thread.
14. **Custom Cache:** Build a cache utility that stores API responses in `localStorage` with an expiration time.
15. **Event Delegation:** Instead of attaching 100 click listeners to 100 buttons, attach one listener to their parent container and use `event.target`.

## 🔥 Challenge

16. **Performance Utility Class:** Build a `PerformanceMonitor` class with methods `.start(label)`, `.end(label)`, and `.report()`. It should track total time, average time, and max time for tasks run multiple times.
17. **Refactoring Legacy Code:** Refactor a provided O(n³) algorithm (triple nested loops finding triplets that sum to 0) into an O(n²) algorithm.
18. **Memoized Fetch:** Create a function `fetchWithCache(url)` that fetches data but returns cached data immediately if the same URL is requested within 1 minute.
19. **Throttled Scroll Progress:** Build a scroll progress bar that updates efficiently using `requestAnimationFrame` instead of firing on every single scroll event.
20. **Data Processing Pipeline:** Optimize a pipeline of `.map().filter().reduce()` on an array of 1,000,000 objects into a single `for` loop or `.reduce()` to avoid creating intermediate arrays.
