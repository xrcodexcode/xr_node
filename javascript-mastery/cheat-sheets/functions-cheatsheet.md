# Functions Cheat Sheet

## Function Types

### 1. Function Declaration
Hoisted to the top of scope (can be called before defined).
```javascript
function add(a, b) {
  return a + b;
}
```

### 2. Function Expression
Not hoisted. Assigned to a variable.
```javascript
const subtract = function(a, b) {
  return a - b;
};
```

### 3. Arrow Function (ES6)
Concise syntax. `this` is lexically bound (inherits `this` from surrounding scope).
```javascript
// Multiple params, explicit return
const multiply = (a, b) => {
  return a * b;
};

// Implicit return (no curly braces, returns expression)
const divide = (a, b) => a / b;

// Single param (parentheses optional, but recommended)
const square = x => x * x;
```

## Parameters & Arguments

### Default Parameters
```javascript
function greet(name = "Guest") {
  return `Hello, ${name}`;
}
```

### Rest Parameters (`...`)
Collects all remaining arguments into an array. Must be the last parameter.
```javascript
function sumAll(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}
sumAll(1, 2, 3, 4); // 10
```

## Closures
A function bundled together with references to its surrounding lexical environment. It "remembers" variables from where it was created.

```javascript
function makeCounter() {
  let count = 0; // Private variable
  return function() {
    return ++count;
  };
}

const counter = makeCounter();
counter(); // 1
counter(); // 2
```

## IIFE (Immediately Invoked Function Expression)
Runs as soon as it's defined. Used for data privacy (mostly legacy before ES Modules).
```javascript
(function() {
  const privateVar = "Secret";
  console.log("Ran immediately");
})();
```

## Higher-Order Functions
Functions that take other functions as arguments or return functions.
```javascript
function doMath(a, b, operation) {
  return operation(a, b);
}
doMath(5, 5, add); // 10
```
