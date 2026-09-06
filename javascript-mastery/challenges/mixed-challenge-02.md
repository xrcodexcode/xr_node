# Mixed Challenge 02 (Levels 7-12)

**Topics Covered**: DOM, Events, Scope, Closures, `this`, OOP.

## The Challenges

1. **Closure + DOM**: Create a function `createToggle(element)` that returns a function. Every time the returned function is called, it toggles a class `"active"` on the element.
2. **Context Loss**: Fix this code:
   ```javascript
   class Logger {
     prefix = "LOG: ";
     print(msg) { console.log(this.prefix + msg); }
     attach(btn) { btn.addEventListener('click', this.print); } 
   }
   ```
3. **OOP Model**: Design a `BankAccount` class with a private `#balance`, a `deposit` method, and a `withdraw` method that throws an `InsufficientFundsError` (a custom error class you must also build).
4. **Event Delegation**: Attach ONE event listener to a `<ul>` that logs the text of any `<li>` clicked inside it.
5. **Class Inheritance & DOM**: 
   - Base Class `UIComponent`: Constructor takes an element ID. Has a `hide()` and `show()` method altering `display`.
   - Subclass `Modal`: Extends `UIComponent`. Adds `open()` (calls `show()` + adds overlay) and `close()`.
6. **Closures for Privacy**: Implement a `createStore()` function that returns an object with `getState()` and `dispatch(action)` without using ES6 classes. The state must be entirely private.
7. **`this` Binding**: Write a polyfill for `.bind()`.
8. **Prototypal Lookup**: Create an object `A` with property `val = 1`. Create `B` inheriting from `A` via `Object.create`. Create `C` inheriting from `B`. Change `A.val = 2`. What is `C.val`? Prove it.
9. **Event Loop vs Scope**: 
   ```javascript
   for (var i = 0; i < 3; i++) { setTimeout(() => console.log(i), 10); }
   ```
   Fix this using `let`, then fix it again using an IIFE closure (ES5 style).
10. **Modern JS + Classes**: Fetch data from `https://jsonplaceholder.typicode.com/users`. Create a `User` class instance for each record. Render them to the DOM.

*(... Problems 11-15 can be expanded similarly targeting combinations of these skills!)*

## Solutions (Brief)
2. Use `.bind(this)` or an arrow function wrapper: `btn.addEventListener('click', () => this.print())` or `this.print.bind(this)`.
4. `ul.addEventListener('click', e => { if(e.target.tagName === 'LI') console.log(e.target.textContent); })`
9. `for (let i = 0; ...)` creates block scope. IIFE: `for(var i=0; i<3; i++) { (function(j){ setTimeout(()=>console.log(j), 10) })(i); }`
