# JavaScript Mastery: Final Assessment Solutions

## Section A: Concept Questions
1. `var` is function-scoped, `let` and `const` are block-scoped. `let` can be reassigned, `const` cannot.
2. Closure is when a function "remembers" its lexical scope even when executed outside that scope. Analogy: a person holding a backpack (closure) with items (variables) from the room they were created in.
3. If a property isn't found on an object, JS looks up its prototype chain until it finds it or reaches `null`.
4. Event loop manages async execution. Microtasks (Promises) have higher priority than Macrotasks (setTimeout).
(Detailed answers for all 15 questions...)

## Section B: Output Prediction
1. `true` and `false`. `1 < 2` is `true`. `true < 3` coerces `true` to `1`, so `1 < 3` is `true`. `3 > 2` is `true`. `true > 1` coerces to `1 > 1`, which is `false`.
2. `c`, `b`, `a`. Synchronous runs first (`c`), then Microtasks (`b`), then Macrotasks (`a`).
3. `'bar'`. Objects are passed by reference, `a` and `b` point to the same object.
(Detailed solutions...)

## Section C: Debugging
1. Change `i--` to `i++`.
2. Use an arrow function `setTimeout(() => obj.method(), 1000)` or `.bind()`.
(Detailed solutions...)

## Section D: Code Completion
1. `function debounce(fn, ms) { let t; return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), ms); }; }`
(Detailed solutions...)

## Section E: Write from Scratch
1. `const deepClone = obj => JSON.parse(JSON.stringify(obj));` (Simple case)
2. `const flatten = arr => arr.flat(Infinity);`
(Detailed solutions...)

## Section F: DOM Task
```javascript
// Solution code for Shopping Cart Component
```

## Section G: Async/API Task
```javascript
// Solution code for Async Fetching
```

## Section H: Project Task
```javascript
// Full code for Mini Notes App
```
