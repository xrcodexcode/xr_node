# Mixed Challenge 04 (Levels 1-20)

## Problem 1: Scope & Closures (Level 4, 16)
Write a function `createRateLimiter(limit, timeframe)` that returns a function. The returned function should allow being called `limit` times within `timeframe` (ms). If called more, it throws an error.

## Problem 2: Async Iteration (Level 11, 15)
Given an array of URLs, write a function `fetchSequentially(urls)` that fetches them one by one, waiting for the previous to finish.

## Problem 3: Prototype Chain (Level 13)
Create a `Vehicle` constructor and a `Car` constructor that inherits from `Vehicle`. Add a method to `Vehicle.prototype` and ensure `Car` instances can access it.

## Problem 4: Performance (Level 19)
Optimize an array intersection function: `intersect(arr1, arr2)` so it runs in O(n) time instead of O(n²).

## Problem 5: Testing (Level 20)
Write a complete Jest/Vitest test suite for the `intersect` function you wrote in Problem 4.

## Problem 6: DOM Batching (Level 14, 19)
Write a function that generates a table of 1000 rows. Use a `DocumentFragment` to ensure only one DOM reflow occurs.

## Problem 7: Debounce API (Level 18, 11)
Write a React-style custom hook or a standard JS closure `useDebouncedFetch(url, delay)` that fetches data only after `delay` ms have passed since the last call.

## Problem 8: Advanced Promises (Level 15)
Implement your own version of `Promise.race()` called `myPromiseRace(promisesArray)`.

## Problem 9: Proxy Validation (Level 17)
Create a `User` object wrapped in a Proxy that prevents setting `age` to a negative number or a string.

## Problem 10: Generators (Level 15)
Write a generator function `fibonacciGen()` that yields an infinite sequence of Fibonacci numbers.

*(Problems 11-25 involve building a mini web app applying MVC architecture, Event Delegation, Web Storage API, async/await, and error handling).*

## Solutions

*(Self-study code solutions provided below)*
```javascript
// Problem 4: O(n) Intersection
function intersect(arr1, arr2) {
  const set1 = new Set(arr1);
  return arr2.filter(item => set1.has(item));
}

// Problem 5: Test Suite
describe('intersect', () => {
  it('returns common elements', () => {
    expect(intersect([1,2,3], [2,3,4])).toEqual([2,3]);
  });
  it('returns empty array if no intersection', () => {
    expect(intersect([1,2], [3,4])).toEqual([]);
  });
});
```
