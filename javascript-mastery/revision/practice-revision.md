# Practice Revision Tasks

> 10-15 minute coding tasks to reinforce muscle memory. Complete one session daily or when revisiting a level.

## Level 1: Variables & Data Types
**Task:** Create variables for a product (name, price, isAvailable, categories). Change the price. Try to change the name (if it's a const) to see the error. Log the types of all variables.

## Level 2: Control Flow
**Task:** Write a function `checkDiscount(userAge, isMember)` that returns "20% Off" for members, "10% Off" for non-members over 60, and "No Discount" for others.

## Level 3: Loops
**Task:** Write a loop that prints numbers from 1 to 20, but skips multiples of 3. Use `continue`.

## Level 4: Functions
**Task:** Write an arrow function `calculateTotal(price, taxRate = 0.05)` that returns the final price. Call it with and without the second argument.

## Level 5: Strings
**Task:** Given `const messy = "   apple, BANANA, OrAnGe   ";`, clean it up to return `["apple", "banana", "orange"]` using string methods.

## Level 6: Arrays
**Task:** Create an array of 5 scores. Add one to the end, remove the first, and insert a new score at index 2. Log the final array.

## Level 7: Objects
**Task:** Create a `car` object with make, model, year, and a `start()` method. Add a `color` property dynamically. Call the method.

## Level 8: DOM Fundamentals
**Task:** (HTML needed) Create a `<ul>` with JS, append 3 `<li>` items to it with text "Item 1", "Item 2", "Item 3", and append the `<ul>` to the `body`.

## Level 9: DOM Events
**Task:** (HTML needed) Create a button. Add an event listener that toggles a class "active" on the body when clicked, and changes the button text between "Turn Off" and "Turn On".

## Level 10: Modern JS (ES6+)
**Task:** Given `const user = { details: { name: "Jon", age: 30 } };`. Use destructuring to extract name, and optional chaining to try to extract `user.profile.website`.

## Level 11: Scope & Hoisting
**Task:** Write a snippet demonstrating block scope with `let` vs `var` in a `for` loop containing a `setTimeout`. Explain the output in a comment.

## Level 12: Closures
**Task:** Create a function `createBank(initialBalance)` that returns an object with `deposit(amt)` and `withdraw(amt)` methods. The balance must not be directly accessible.

## Level 13: Array Methods (Advanced)
**Task:** Given an array of users `[{name: 'A', active: true}, {name: 'B', active: false}]`, use `filter` and `map` to get an array of names of active users only.

## Level 14: The 'this' Keyword
**Task:** Create an object with a property and a method that uses `setTimeout`. Fix the `this` binding issue using an arrow function.

## Level 15: OOP Basics
**Task:** Create a `Shape` class with a `getArea()` method. Extend it with a `Rectangle` class that takes width and height and overrides `getArea()`.

## Level 16: Asynchronous JS Basics
**Task:** Write a function `delay(ms, msg)` that takes a callback. It should wait `ms` milliseconds, then call the callback with `msg`.

## Level 17: Promises & Async/Await
**Task:** Convert the previous `delay` function to return a Promise instead. Consume it using `async/await` inside an async function.

## Level 18: Fetch & Web APIs
**Task:** Write a function that fetches data from `https://jsonplaceholder.typicode.com/users/1`, parses it, and logs the user's email. Handle network errors.

## Level 19: Error Handling
**Task:** Write a function that parses JSON strings. Use `try...catch`. If it fails, log "Invalid JSON format" and return a default object.

## Level 20: Modules & Tooling
**Task:** Create `math.js` that exports `add` and `subtract`. Create `app.js` that imports and uses them. (Comment the HTML script tag setup needed).
