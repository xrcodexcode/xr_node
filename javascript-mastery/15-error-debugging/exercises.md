# Exercises: Error Handling and Debugging

AT LEAST 30 exercises ranging from beginner to challenge level.

## 🟢 10 Basic (Identify & Fix)
1. Identify the error type in `const x = ;`.
2. Identify the error type in `console.log(myVar);` (myVar is not declared).
3. Identify the error type in `const f = 5; f();`.
4. Identify the error type in `const arr = new Array(-1);`.
5. Add try/catch to `JSON.parse('{"a":1')`.
6. Add try/catch to `decodeURIComponent('%')`.
7. Fix syntax error: `if (x == 5) { console.log('five')`.
8. Fix syntax error: `const obj = { name 'Test' }`.
9. Fix reference error: `function test() { console.log(a); let a = 1; }`
10. Fix type error: `const obj = null; console.log(obj.name);`

## 🟡 10 Intermediate (Logical & Handling)
11. Write a function `divide(a, b)` that throws an Error if `b` is 0.
12. Create a custom error class `DatabaseError`.
13. Write a function `connectToDB()` that randomly throws a `DatabaseError`, and handle it with a try/catch.
14. Debug: A loop `for(let i=10; i>0; i++)` (fix the infinite loop).
15. Add a `finally` block to an API call to hide a loading spinner regardless of success/fail.
16. Debug: `const sum = [1,2,3].reduce((acc, curr) => { acc + curr }, 0);`
17. Debug: `function getLength(str) { return str.length; }` handle the case where str is undefined.
18. Write a function `parseUserData(jsonString)` that returns a default object `{}` if parsing fails.
19. Debug: Why does `[1, 2, 10].sort()` result in `[1, 10, 2]`? Fix it.
20. Use `console.table` to log an array of objects clearly.

## 🔴 5 Advanced (Async Errors)
21. Write an async function that uses `Promise.all` and catches if any promise fails.
22. Debug an async function where the `catch` block is not catching unhandled promise rejections inside a callback.
23. Write an API fetch wrapper that throws a custom `HTTPError` based on `response.status`.
24. Implement a retry mechanism: fetch data, and if it fails, retry up to 3 times before giving up.
25. Debug: Using `.forEach` with `async/await` and expecting the loop to wait.

## 🔥 5 Challenge (Multi-bug Programs)
26. Fix a broken shopping cart program that has reference errors, math logic errors, and improper JSON parsing.
27. Debug a user authentication flow that swallows async errors and hangs forever.
28. Fix a recursively failing nested data parser that hits `RangeError` (call stack exceeded).
29. Fix an event listener memory leak by finding the logical flaw using browser dev tools.
30. Refactor a messy nested try/catch callback hell into clean `async/await` with error boundaries.
