# Level 3 — Exercises (40 Problems)

## 🟢 Basic Function Exercises (10)

1. **greetUser:** Write a function that takes a name and time of day, returning "Good [time], [name]!".
2. **calculateArea:** Write a function calculating rectangle area. Default width to 10 if not provided.
3. **isEven:** Write a function that returns true if a number is even, false otherwise.
4. **findMax:** Write a function that takes two numbers and returns the larger one.
5. **celsiusToFahrenheit:** Write an arrow function to convert Celsius to Fahrenheit.
6. **reverseString:** Write a function to reverse a string.
7. **countVowels:** Write a function that counts vowels in a string.
8. **sumArray:** Write a function that takes an array of numbers and returns their sum.
9. **isPalindrome:** Write a function that checks if a word is a palindrome.
10. **getFirstElement:** Write an arrow function that returns the first element of an array.

## 🟡 Intermediate Function Exercises (10)

11. **filterEvens:** Write a function that takes an array and a callback, returning only even numbers.
12. **createMultiplier:** Write a higher-order function that returns a function to multiply by a given number.
13. **logger:** Write a closure that keeps track of how many times it was called.
14. **concatAll:** Write a function using `...args` to concatenate any number of strings.
15. **buildUser:** Write a function taking name, age, and role. Role should default to "user".
16. **mapArray:** Re-implement `Array.prototype.map` as a standalone function taking an array and a callback.
17. **safeDivide:** Write a function with early return if the denominator is 0.
18. **bankAccount:** Create a closure that holds a balance. Return an object with deposit and withdraw methods.
19. **timer:** Write a function that takes a callback and calls it after 2 seconds.
20. **passwordValidator:** Write a function returning true if a string has >8 chars and at least one number.

## 🔴 Advanced Function Exercises (10)

21. **factorial:** Write a recursive function to find the factorial of N.
22. **fibonacci:** Write a recursive function to find the Nth Fibonacci number.
23. **compose:** Write a function that takes two functions `f` and `g` and returns a function that computes `f(g(x))`.
24. **curryAdd:** Write a curried add function: `add(1)(2)(3)` returns 6.
25. **memoize:** Write a function that takes a function and returns a memoized version of it.
26. **flattenArray:** Write a recursive function to flatten a deeply nested array.
27. **debounce:** Write a basic debounce function that delays execution until after `n` milliseconds have elapsed since the last time it was invoked.
28. **throttle:** Write a throttle function.
29. **deepCopy:** Write a recursive function to deep copy an object.
30. **pipe:** Write a function that takes multiple functions and pipes a value through them left-to-right.

## 🔥 Challenge Problems (10)

31. **Calculator Engine:** Build a function `calculator` that takes an initial value and returns methods to `add`, `subtract`, `multiply`, `divide`, and `getResult` (chainable).
32. **Validation Library:** Create a higher-order function `createValidator` that takes validation rules and returns a function to validate user objects.
33. **Recursive Object Search:** Find a key in a deeply nested JSON object.
34. **Retry Logic:** Write a function that takes a function returning a Promise, and retries it up to `n` times if it fails.
35. **Event Emitter:** Write a closure-based pub/sub system.
36. **Curried Logger:** Create a logger `log(level)(module)(message)`.
37. **Array groupBy:** Recreate `Object.groupBy` using functions and closures.
38. **Recursive Permutations:** Find all string permutations.
39. **State Management:** Write a simple Redux-like `createStore` function using closures.
40. **Async Pipeline:** Write an async pipe function handling Promises.
