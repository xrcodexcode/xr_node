# Quick Revision Sheets

> 5-minute review sheets for each level. Review these regularly.

## Level 0: JS Introduction
- **Key Concepts:** JavaScript adds interactivity to HTML. Runs in the browser or Node.js. Single-threaded, non-blocking.
- **Code Pattern:** `<script src="app.js"></script>` at the end of `<body>`.
- **Gotchas:** Caching issues during dev (use hard refresh).

## Level 1: Variables & Data Types
- **Key Concepts:** `let` (mutable), `const` (immutable), `var` (legacy). Types: String, Number, Boolean, Null, Undefined, Object, Symbol.
- **Code Pattern:** `const user = "Alice"; let score = 0; score++;`
- **Gotchas:** `typeof null === "object"` (a famous bug).

## Level 2: Control Flow
- **Key Concepts:** `if`, `else if`, `else`, `switch`, Ternary Operator. Truthy/Falsy values.
- **Code Pattern:** `const msg = age >= 18 ? "Adult" : "Minor";`
- **Gotchas:** Falsy values: `0`, `""`, `null`, `undefined`, `NaN`, `false`. Everything else is truthy.

## Level 3: Loops
- **Key Concepts:** `for`, `while`, `do...while`. Break and continue.
- **Code Pattern:** `for (let i = 0; i < 5; i++) { console.log(i); }`
- **Gotchas:** Off-by-one errors. Infinite loops with `while` if condition isn't updated.

## Level 4: Functions
- **Key Concepts:** Declarations (hoisted), Expressions, Arrow Functions, Parameters, Return values.
- **Code Pattern:** `const add = (a, b) => a + b;`
- **Gotchas:** Forgetting `return` in non-concise arrow functions `(a) => { a * 2 }` (returns undefined).

## Level 5: Strings
- **Key Concepts:** Immutable. Properties: `length`. Template literals.
- **Code Pattern:** ``const greeting = `Hello, ${name}!`;``
- **Gotchas:** String methods return NEW strings, they don't modify the original.

## Level 6: Arrays
- **Key Concepts:** Ordered lists. Zero-indexed. Mutable.
- **Code Pattern:** `const nums = [1, 2, 3]; nums.push(4);`
- **Gotchas:** `const arr = []; arr[10] = "a";` creates empty slots.

## Level 7: Objects
- **Key Concepts:** Key-value pairs. Properties and methods. Dot vs Bracket notation.
- **Code Pattern:** `const user = { name: "Bob", age: 25 }; user.age = 26;`
- **Gotchas:** Dynamic keys require bracket notation: `user[dynamicKey]`.

## Level 8: DOM Fundamentals
- **Key Concepts:** Document Object Model. Tree structure. Nodes vs Elements.
- **Code Pattern:** `const btn = document.querySelector("#submit-btn"); btn.textContent = "Loading...";`
- **Gotchas:** Querying before the DOM is loaded. Place `<script>` at the bottom or use `DOMContentLoaded`.

## Level 9: DOM Events
- **Key Concepts:** Event Listeners, Event Object, Event Bubbling, Delegation.
- **Code Pattern:** `button.addEventListener("click", (e) => console.log(e.target));`
- **Gotchas:** Adding listeners inside loops instead of using event delegation.

## Level 10: Modern JS (ES6+)
- **Key Concepts:** Destructuring, Spread/Rest operators, Optional Chaining, Nullish Coalescing.
- **Code Pattern:** `const { name, age } = user; const newArr = [...oldArr, 4];`
- **Gotchas:** Spread is shallow copy only.

## Level 11: Scope & Hoisting
- **Key Concepts:** Global, Function, Block scope. Lexical scope. Hoisting of `var` and `function`.
- **Code Pattern:** `let` and `const` are block-scoped. `var` is function-scoped.
- **Gotchas:** Accessing `let`/`const` before declaration throws a ReferenceError (Temporal Dead Zone).

## Level 12: Closures
- **Key Concepts:** Inner function has access to outer function's scope, even after outer has returned.
- **Code Pattern:** `const makeCounter = () => { let count = 0; return () => ++count; };`
- **Gotchas:** Creating closures inside loops with `var` (all closures point to the final value).

## Level 13: Array Methods (Advanced)
- **Key Concepts:** Higher-order functions. `map`, `filter`, `reduce`, `find`, `some`, `every`.
- **Code Pattern:** `const doubled = nums.map(n => n * 2);`
- **Gotchas:** Forgetting to `return` inside the callback.

## Level 14: The 'this' Keyword
- **Key Concepts:** `this` refers to the object executing the current function.
- **Code Pattern:** In a method, `this` is the object. In arrow functions, `this` is lexically bound.
- **Gotchas:** Losing `this` when passing a method as a callback (use `.bind()` or arrow functions).

## Level 15: OOP Basics
- **Key Concepts:** Classes, Constructors, Prototypes, Inheritance, Encapsulation.
- **Code Pattern:** `class User { constructor(name) { this.name = name; } greet() { console.log(this.name); } }`
- **Gotchas:** Modifying instances instead of the prototype for shared methods (pre-ES6 classes).

## Level 16: Asynchronous JS Basics
- **Key Concepts:** Synchronous vs Asynchronous. Event Loop, Call Stack, Callback Queue. Callbacks.
- **Code Pattern:** `setTimeout(() => console.log("Later"), 1000);`
- **Gotchas:** Callback hell (Pyramid of Doom).

## Level 17: Promises & Async/Await
- **Key Concepts:** Promises (Pending, Fulfilled, Rejected). `.then()`, `.catch()`. `async`, `await`.
- **Code Pattern:** `const data = await fetch(url); const json = await data.json();`
- **Gotchas:** Forgetting `await` returns a Promise, not the resolved value. Unhandled rejections.

## Level 18: Fetch & Web APIs
- **Key Concepts:** Fetch API, LocalStorage, SessionStorage. JSON.
- **Code Pattern:** `localStorage.setItem("user", JSON.stringify(userObj));`
- **Gotchas:** Storing non-string data in LocalStorage without JSON serialization.

## Level 19: Error Handling
- **Key Concepts:** `try`, `catch`, `finally`, `throw`. Custom Errors.
- **Code Pattern:** `try { dangerousCode(); } catch (err) { console.error(err.message); }`
- **Gotchas:** Swallowing errors (empty catch blocks).

## Level 20: Modules & Tooling
- **Key Concepts:** ES Modules (`import`/`export`), CommonJS (`require`). Bundlers.
- **Code Pattern:** `export const util = () => {}; import { util } from './util.js';`
- **Gotchas:** Using ES modules in Node.js without `"type": "module"` in package.json.
