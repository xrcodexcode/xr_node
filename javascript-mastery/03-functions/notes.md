# Level 3 — Functions

**Time to Complete:** 4-6 hours | **Practice Time:** 10+ hours | **Mastery Checkpoint:** Building a mini-library

## 1. Function Basics [MUST KNOW]

### Function Declaration vs Expression

**What is it?** Two ways to define a function.
**Why?** Declarations are hoisted (can be called before defined). Expressions are not.

```javascript
// Function Declaration
function greet(name) {
  return `Hello ${name}`;
}

// Function Expression
const greetExpr = function(name) {
  return `Hello ${name}`;
};
```

**Comparison:**
| Feature | Declaration | Expression |
| :--- | :--- | :--- |
| Syntax | `function name() {}` | `const name = function() {}` |
| Hoisting | Yes (entire function) | No (only variable declaration) |
| Use Case | General reusable logic | Passing as callbacks, closures |

### Arrow Functions
**What is it?** A shorter syntax for function expressions.
**Why?** Less code, and it inherits `this` from the surrounding scope (crucial for React/callbacks).

```javascript
// Basic Arrow Function
const add = (a, b) => {
  return a + b;
};

// Implicit Return (One liner)
const subtract = (a, b) => a - b;

// Single Parameter (Parens optional)
const double = x => x * 2;

// No Parameters
const sayHi = () => "Hi!";

// Returning an Object (Must wrap in parens)
const createObj = (val) => ({ id: val });
```

### Parameters vs Arguments
- **Parameters:** Variables in function definition (`function sum(a, b)` -> a, b)
- **Arguments:** Actual values passed in (`sum(5, 10)` -> 5, 10)

### Return Values & Early Returns
**What is it?** A function stops executing when it hits `return`.
**Why?** Useful for validation (Guard Clauses).

```javascript
function processUser(user) {
  // Early return
  if (!user) return "No user found";
  if (user.age < 18) return "Too young";
  
  return "Welcome!";
}
```

### Default Parameters
```javascript
function greet(name = "Guest") {
  return `Hello ${name}`;
}
```

### Rest Parameters (`...args`)
```javascript
function sumAll(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sumAll(1, 2, 3, 4)); // 10
```

---

## 2. Function Concepts [SHOULD KNOW]

### Callback Functions
**What is it?** A function passed as an argument to another function.
**Why?** To execute code later (asynchronous) or after a process finishes.

```javascript
function fetchData(callback) {
  // Simulate delay
  setTimeout(() => {
    callback("Data loaded");
  }, 1000);
}

fetchData(data => console.log(data));
```

### Higher-Order Functions
**What is it?** A function that takes a function as an argument OR returns a function.

```javascript
function multiplyBy(factor) {
  return function(number) {
    return number * factor;
  }
}
const double = multiplyBy(2);
console.log(double(5)); // 10
```

### Pure Functions vs Side Effects
- **Pure Function:** Same input always gives same output. No external state modified.
- **Side Effect:** Modifying external variables, logging to console, fetching APIs.

```javascript
// Pure
const add = (a, b) => a + b;

// Impure (Side Effect)
let total = 0;
const addToTotal = (x) => {
  total += x; // modifies external state
};
```

### Function Scope & Closures
**Scope ASCII:**
```text
Global Scope
  └── Function Scope (Outer)
        └── Function Scope (Inner) -> Can access Outer & Global
```

**Closures:**
**What is it?** A function that remembers variables from its outer scope, even after the outer function has finished running.
**Why?** Data privacy, state retention, factories.

```text
Closure Memory Map:
Outer Function() -> creates variable `count` -> returns Inner Function
Inner Function -> maintains reference to `count` (Closure)
```

```javascript
function createCounter() {
  let count = 0; // Private variable
  return function() {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```

### IIFE (Immediately Invoked Function Expressions)
```javascript
(function() {
  console.log("Runs immediately!");
})();
```

---

## 3. Recursion [ADVANCED]

**What is it?** A function calling itself.
**Why?** Navigating trees (DOM, file systems), complex math.

**Rules:**
1. Base Case (when to stop)
2. Recursive Case (calling itself with modified input)

```text
Call Stack (Recursion):
countdown(3)
  countdown(2)
    countdown(1)
      countdown(0) -> BASE CASE (stops and returns)
```

```javascript
function factorial(n) {
  if (n <= 1) return 1; // Base case
  return n * factorial(n - 1); // Recursive case
}
console.log(factorial(5)); // 120
```
