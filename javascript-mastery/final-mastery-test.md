# JavaScript Mastery: Final Assessment

## Section A: Concept Questions
1. What is the difference between `var`, `let`, and `const`?
2. Explain the concept of closure with a real-world analogy.
3. How does prototype delegation work in JavaScript?
4. What is the Event Loop? Explain Microtasks vs Macrotasks.
5. How does the `this` keyword behave differently in arrow functions vs regular functions?
6. What are ES modules and how do they differ from CommonJS?
7. Explain event bubbling and capturing.
8. How does `async/await` simplify Promise chains?
9. What is variable hoisting?
10. Describe the strict mode (`"use strict"`) and its benefits.
11. How do you handle errors in async functions?
12. Explain the difference between `==` and `===`.
13. What is garbage collection in JS?
14. Describe the Factory Function vs Class pattern.
15. How does event delegation improve performance?

## Section B: Output Prediction
1. `console.log(1 < 2 < 3); console.log(3 > 2 > 1);`
2. `setTimeout(() => console.log('a'), 0); Promise.resolve().then(() => console.log('b')); console.log('c');`
3. `let a = {}; let b = a; a.foo = 'bar'; console.log(b.foo);`
(More questions inside the actual test environment...)

## Section C: Debugging
1. Fix the infinite loop: `for(let i=0; i<10; i--) { ... }`
2. Fix the `this` binding issue in `setTimeout(obj.method, 1000)`
(8 more debugging challenges...)

## Section D: Code Completion
1. Complete the debounce function.
2. Complete the singleton pattern.
(8 more completion challenges...)

## Section E: Write from Scratch
1. Write a function that deep clones an object.
2. Write a function to flatten a nested array.
(8 more write-from-scratch challenges...)

## Section F: DOM Task
Build a dynamic shopping cart component. Requirements: Add item, remove item, calculate total dynamically, and update DOM without full re-render.

## Section G: Async/API Task
Fetch users from `https://jsonplaceholder.typicode.com/users`, extract their emails, handle network errors gracefully, and render them as a list.

## Section H: Project Task
Build a Mini Notes App:
- CRUD operations for notes.
- Use `localStorage` for persistence.
- Implement search filtering.
- Group notes by categories.
