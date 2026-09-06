# Delayed Revision (Cumulative)

> Harder problems that test multiple concepts at once. Do these periodically to ensure deep integration of concepts.

## Checkpoint 1: After Level 3 (Variables + Conditions + Loops)
1. **FizzBuzz Variant:** Print numbers 1-50. If divisible by 4, print "Quad". If divisible by 6, print "Hexa". If both, print "QuadHexa".
2. **Prime Checker:** Write a loop that checks if a given variable `num` is a prime number. Console log true or false.
3. **Number Reverser:** Given a number like `12345`, use a `while` loop to construct a reversed version `54321`.
4. **Sum of Evens:** Write a loop to calculate the sum of all even numbers between 1 and 100.
5. **Pattern Printer:** Use nested loops to print a right-angled triangle pattern of asterisks (`*`) of height 5.

## Checkpoint 2: After Level 7 (+ Functions + Strings + Arrays + Objects)
1. **Word Frequency:** Write a function that takes a string sentence and returns an object showing the frequency of each word.
2. **Array Analyzer:** Function that takes an array of numbers and returns an object with `min`, `max`, `average`, and `sum`.
3. **Palindrome Checker:** Function that ignores spaces and punctuation when checking if a string is a palindrome.
4. **Inventory Manager:** Create an array of product objects. Write functions to add a product, remove by ID, and update stock.
5. **Deep Clone Intro:** Write a function that creates a copy of an object (assuming it only has primitive values and arrays, no nested objects yet).

## Checkpoint 3: After Level 13 (+ DOM + Events + Modern JS + Scope + Closures)
1. **To-Do List:** Build a simple DOM to-do list. Use an array to manage state. Add, delete, and mark as complete.
2. **Debounce Function:** Implement a generic debounce closure. Test it with a DOM input event.
3. **Data Transformer:** Use `reduce` and object destructuring to transform an array of raw user data arrays `[['id1', 'John'], ['id2', 'Jane']]` into an object keyed by ID: `{ id1: { name: 'John' }, ... }`.
4. **Modal Component:** Create a reusable modal using a closure to manage its open/closed state and event listeners.
5. **Tabbed Interface:** Build a tabbed UI using event delegation.

## Checkpoint 4: After Level 18 (+ 'this' + OOP + Async + APIs)
1. **Github User Card:** Create a class `UserFetcher`. It takes a username, fetches data from GitHub API (`async/await`), and renders a user card to the DOM.
2. **Timer Class:** Build an OOP Timer that can start, pause, and reset. Use accurate intervals and proper `this` binding.
3. **Paginated Fetch:** Write a function that fetches paginated data. It should automatically fetch the next page if a `next` URL is provided in the response, accumulating results until all pages are loaded.
4. **Promise.all Implement:** Try to implement a function that behaves like `Promise.all` using basic Promises.
5. **Local Storage Manager:** Create a singleton class that manages reading/writing JSON to localStorage with error handling.

## Checkpoint 5: The Ultimate Challenge (All Concepts)
1. **Weather Dashboard:** Build a complete app.
    - Fetch weather data based on user input.
    - Save search history in localStorage.
    - Use OOP for UI components.
    - Use async/await for API calls.
    - Implement robust error handling (invalid city, network down).
    - Organize code logically (pretend it's in modules).
2. **Custom Array Method:** Add a `.myFilter()` method to `Array.prototype` that works exactly like the native `.filter()`.
3. **Retry Fetch:** Write an async function `fetchWithRetry(url, retries = 3)` that attempts to fetch, and if it fails, waits 1 second and tries again up to `retries` times before finally throwing an error.
