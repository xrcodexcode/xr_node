# Level 13 Exercises

## 🟢 Beginner
1. Write a `setTimeout` that logs "Hello" after 2 seconds.
2. Create a Promise that resolves with "Success" after 1 second.
3. Consume the Promise from #2 using `.then()`.
4. Create a Promise that rejects with "Error" immediately.
5. Consume the Promise from #4 using `.catch()`.
6. Write an `async` function that returns "Hello Async".
7. Call the function from #6 and `.then()` the result.
8. Use `await` inside an `async` function to wait for a 1-second delay.
9. Convert a Promise chain to `async/await`.
10. Use `try/catch` inside an `async` function.

## 🟡 Intermediate
11. Fetch 3 URLs sequentially using `async/await`.
12. Fetch 3 URLs in parallel using `Promise.all`.
13. Write a function that uses `Promise.race` on two timers.
14. Handle a rejected promise in `Promise.all`.
15. Use `Promise.allSettled` and filter only fulfilled results.
16. Write a function that delays execution for `N` milliseconds.
17. Chain 3 Promises that each add a number to a total.
18. Write an `async` function that retries a failed operation once.
19. Implement a basic callback-based function.
20. Promisify the callback function from #19.

## 🔴 Advanced
21. Predict the output (Macrotask vs Microtask).
22. Implement `Promise.all` from scratch.
23. Write an async sequence runner that takes an array of async functions.
24. Implement a custom `race` function.
25. Predict output involving nested `setTimeout` and `Promise.resolve`.

## 🔥 Challenge
26. Implement an async retry function with exponential backoff.
27. Write a concurrent task runner that limits concurrency to 2.
28. Implement a rate limiter.
29. Create a promise that times out after X seconds if not resolved.
30. Write a mini reactive state library that triggers async updates.
