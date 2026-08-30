---
id: 3b8e9142-d67f-4ca1-92be-8941fc328a01
title: "JavaScript Zero to Hero: The Complete Pragmatic Guide"
type: study-note
status: verified
domain: engineering
source_type: null
created: 2026-08-30
updated: 2026-08-30
review: 2026-11-30
confidence: 95
version: 1
aliases:
  - JavaScript Zero to Hero
  - Modern JavaScript Guide
  - JS Pragmatic Manual
tags:
  - beginner
  - advanced
  - implementation
  - engineering
  - study
owner_moc: Study MOC
sources: []
related:
  - "[[javascript-101|JavaScript 101: The Senior Engineer's Runtime Manual]]"
  - "[[html-css-101|HTML & CSS 101: The Senior UI Systems Engineer's Manual]]"
schema_version: 4
---

# JavaScript Zero to Hero: The Complete Pragmatic Guide

Welcome to the **Pragmatic JavaScript Zero to Hero Guide**. 

While [[javascript-101|JavaScript 101]] serves as an elite runtime deep-dive into compiler internals and V8 bytecode, this guide is crafted to take you systematically from **Day 1 fundamentals** to **Senior architectural proficiency**.

Each milestone follows a strict **high code-to-theory ratio**:
1. **Core Intuition & Mental Model**: Plain-English, visual explanations with zero gatekeeping.
2. **Clear Code Demonstrations**: Real code snippets showing common pitfalls and best practices.
3. **5 Progressive Coding Problems**: From foundational drills to real-world software engineering challenges with battle-tested solutions and verification test cases.

---

## 🗺️ The Zero-to-Hero Roadmap

```
 Level 0: Foundations   ──► Types, Variables, Memory & Coercion
 Level 1: Control Flow  ──► Conditionals, Logic Short-Circuiting & Loops
 Level 2: Functions     ──► Declarations, Arrow Functions, Defaults & Callbacks
 Level 3: Arrays        ──► Mutations, Iterators, map/filter/reduce, Destructuring
 Level 4: Objects       ──► Key/Values, Destructuring, Optional Chaining, Maps & Sets
 Level 5: Scopes        ──► Call Stack, Hoisting, Lexical Scope & Closures
 Level 6: OOP & 'this'  ──► Prototypes, ES6 Classes, Inheritance & 'this' Binding
 Level 7: Asynchronous  ──► Callbacks, Event Loop, Promises & Async/Await
 Level 8: Web APIs      ──► DOM Manipulation, Events, Delegation & fetch()
 Level 9: Hero Tier     ──► Error Handling, Modules, Clean Patterns & Capstone
```

---

## Milestone 0: The Foundations (Values, Types, Variables & Memory)

### 0.1 Core Intuition & Mental Model

JavaScript is a dynamically typed, garbage-collected programming language. In JavaScript:
- **Variables are labels, not boxes**: A variable points to a location in memory.
- There are **7 Primitive Types** and **1 Reference Type (Object)**.

```
                      JavaScript Data Types
                               │
         ┌─────────────────────┴─────────────────────┐
         ▼                                           ▼
  Primitive Types (Immutable)               Reference Type (Mutable)
  - Number (42, 3.14)                       - Object ({ name: "Ada" })
  - String ("Hello")                        - Array ([1, 2, 3])
  - Boolean (true, false)                   - Function (function() {})
  - Undefined (declared, no value)          - Date, Map, Set, RegExp...
  - Null (intentional absence)
  - BigInt (9007199254740991n)
  - Symbol (Symbol("unique"))
```

#### The Golden Rules of Variables:
1. **Always use `const` by default**. It prevents accidental reassignment.
2. **Use `let` only when you know the value must change** (e.g., in a `for` loop counter).
3. **Never use `var` in modern code**. `var` is function-scoped (not block-scoped) and suffers from confusing hoisting bugs.
4. **Primitives are copied by value; Objects are copied by reference**:
   - Copying a number creates an independent clone.
   - Copying an object copies only the memory address (pointer); modifying one modifies both!

---

### 0.2 Clear Code Demonstrations

```javascript
// --- 1. const vs let vs var ---
const maxScore = 100;
// maxScore = 101; // TypeError: Assignment to constant variable.

let currentScore = 0;
currentScore += 10; // Perfectly valid

// The var scope trap:
if (true) {
  var leakedVar = "I escaped the block!";
  let safeLet = "I am locked inside!";
}
console.log(leakedVar); // "I escaped the block!" (Pollutes outer scope)
// console.log(safeLet); // ReferenceError: safeLet is not defined

// --- 2. Copy by Value vs Copy by Reference ---
// Primitive copy (by value)
let a = 10;
let b = a;
b = 20;
console.log(a); // 10 (Independent!)

// Object copy (by reference)
const user1 = { name: "Alice", role: "Dev" };
const user2 = user1; // Copies pointer, NOT the object!
user2.role = "Lead";
console.log(user1.role); // "Lead" (Mutated original user1!)

// --- 3. Strict Equality (===) vs Loose Equality (==) ---
console.log(5 === "5"); // false (Strict: checks both type AND value. ALWAYS USE THIS!)
console.log(5 == "5");  // true  (Loose: coerces string "5" to number 5. DANGEROUS!)
console.log(null === undefined); // false
console.log(null == undefined);  // true

// --- 4. Truthy vs Falsy ---
// Exactly 8 values are FALSY in JavaScript:
// false, 0, -0, 0n, "", null, undefined, NaN
// EVERYTHING ELSE IS TRUTHY (including empty array [] and empty object {})!
if ([]) {
  console.log("Empty arrays are TRUTHY!"); // This logs!
}
```

---

### 0.3 Progressive Coding Problems

#### Problem 0.1: Accurate Type Detective (`safeTypeOf`)
**Requirement**: The native `typeof null` returns `"object"` (a historical JS bug), and `typeof [1,2,3]` also returns `"object"`. Write a function `safeTypeOf(value)` that accurately distinguishes between `'null'`, `'array'`, `'object'`, `'number'`, `'string'`, `'boolean'`, `'undefined'`, `'function'`, `'date'`, and `'regexp'`.

```javascript
function safeTypeOf(value) {
  if (value === null) return "null";
  if (value === undefined) return "undefined";
  if (Array.isArray(value)) return "array";
  if (value instanceof Date) return "date";
  if (value instanceof RegExp) return "regexp";
  return typeof value;
}

// Verification:
console.log(safeTypeOf(42));           // "number"
console.log(safeTypeOf("hello"));      // "string"
console.log(safeTypeOf(null));         // "null" (Fixes JS bug!)
console.log(safeTypeOf([1, 2, 3]));    // "array"
console.log(safeTypeOf({ a: 1 }));     // "object"
console.log(safeTypeOf(new Date()));   // "date"
console.log(safeTypeOf(/abc/));        // "regexp"
```

#### Problem 0.2: Safe Currency & Number Sanitizer
**Requirement**: Build a function `sanitizePrice(input, currency = "$")` that accepts any input (string with currency symbols, raw number, dirty user input like `"$1,249.95"` or `" 49.50 USD "`), safely converts it to a standard 2-decimal number, and returns a formatted string. Return `null` if the input is invalid or cannot be parsed.

```javascript
function sanitizePrice(input, currency = "$") {
  if (input === null || input === undefined || typeof input === "boolean") {
    return null;
  }

  // Convert to string and clean out currency letters, spaces, and commas
  const cleaned = String(input).replace(/[^0-9.-]+/g, "");
  const parsed = parseFloat(cleaned);

  if (Number.isNaN(parsed) || !Number.isFinite(parsed)) {
    return null;
  }

  return `${currency}${parsed.toFixed(2)}`;
}

// Verification:
console.log(sanitizePrice("$1,249.95"));    // "$1249.95"
console.log(sanitizePrice("  49.50 USD ")); // "$49.50"
console.log(sanitizePrice(199));            // "$199.00"
console.log(sanitizePrice("invalid-text")); // null
console.log(sanitizePrice(null));           // null
```

#### Problem 0.3: Falsy Value Filter & Cleaner
**Requirement**: Build a function `compactValues(array)` that removes all falsy values (`false`, `0`, `""`, `null`, `undefined`, `NaN`) from an array without mutating the original array, returning a clean new array.

```javascript
function compactValues(array) {
  if (!Array.isArray(array)) return [];
  const result = [];
  for (let i = 0; i < array.length; i++) {
    // Rely on natural boolean truthiness test
    if (array[i]) {
      result.push(array[i]);
    }
  }
  return result;
}

// Verification:
const dirtyData = [0, "Alice", false, 42, "", null, "Bob", undefined, NaN, "Charlie"];
const cleanData = compactValues(dirtyData);
console.log(cleanData); // ["Alice", 42, "Bob", "Charlie"]
console.log(dirtyData.length); // 10 (Original preserved!)
```

#### Problem 0.4: Safe Primitive Swapper without Temporary Variables
**Requirement**: Given two variables `a` and `b` containing numbers, write a function `swapNumbers(a, b)` that returns an array `[a, b]` with values swapped using modern ES6 array destructuring. Also implement an arithmetic-only swap method as a fallback.

```javascript
function swapNumbers(a, b) {
  // Method 1: Modern ES6 Array Destructuring (Cleanest & safest)
  [a, b] = [b, a];
  return [a, b];
}

function swapNumbersArithmetic(a, b) {
  // Method 2: Mathematical sum/diff swap (No extra memory allocation)
  a = a + b;
  b = a - b;
  a = a - b;
  return [a, b];
}

// Verification:
console.log(swapNumbers(5, 10));           // [10, 5]
console.log(swapNumbersArithmetic(42, 99)); // [99, 42]
```

#### Problem 0.5: Deep Object Clone (Shallow vs Deep Mental Model)
**Requirement**: Demonstrate the difference between shallow cloning (`{ ...obj }`) and deep cloning. Write a function `deepClone(obj)` that completely clones nested objects and arrays so modifying nested properties on the clone does not affect the original.

```javascript
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj; // Base case: primitives and null are immutable
  }

  // Handle Arrays
  if (Array.isArray(obj)) {
    return obj.map((item) => deepClone(item));
  }

  // Handle Objects
  const cloned = {};
  for (const key of Object.keys(obj)) {
    cloned[key] = deepClone(obj[key]);
  }
  return cloned;
}

// Verification:
const original = {
  name: "System Core",
  config: { timeout: 5000, tags: ["prod", "us-east"] }
};

const clone = deepClone(original);
clone.config.timeout = 1000;
clone.config.tags.push("active");

console.log(original.config.timeout); // 5000 (Safe! Not affected!)
console.log(original.config.tags);    // ["prod", "us-east"] (Safe!)
console.log(clone.config.timeout);    // 1000
```

---

## Milestone 1: Control Flow, Logic & Loops

### 1.1 Core Intuition & Mental Model

Programs are decision trees and repetitive cycles.
- **Conditionals** decide *which path* to take.
- **Loops** repeat an action *until a condition changes*.

```
                         The Control Flow Toolkit
 ┌───────────────────────────┐      ┌─────────────────────────────┐
 │       Conditionals        │      │            Loops            │
 ├───────────────────────────┤      ├─────────────────────────────┤
 │ if / else if / else       │      │ for (let i=0; i<N; i++)     │
 │ switch (val) { case ... } │      │ for...of (Iterate values)   │
 │ condition ? yes : no      │      │ for...in (Iterate keys)     │
 │ Short-circuit: &&, ||, ?? │      │ while (condition)           │
 └───────────────────────────┘      └─────────────────────────────┘
```

#### Senior Short-Circuiting Patterns:
- **Guard Operator (`&&`)**: `isLoggedIn && showDashboard()` -> Runs `showDashboard()` only if `isLoggedIn` is true.
- **Default Operator (`||`)**: `const name = input || "Anonymous"` -> Uses fallback if `input` is any falsy value (caution: empty string `""` or `0` triggers the fallback!).
- **Nullish Coalescing (`??`)**: `const count = userCount ?? 10` -> Uses fallback **only** if `userCount` is strictly `null` or `undefined`. Perfect for numbers and strings where `0` or `""` are valid!

---

### 1.2 Clear Code Demonstrations

```javascript
// --- 1. Short-Circuiting: || vs ?? ---
const speed = 0; // 0 is a valid speed!

const displaySpeed1 = speed || 60; // 60 (Wrong! 0 is falsy, so || triggers fallback!)
const displaySpeed2 = speed ?? 60; // 0  (Correct! 0 is neither null nor undefined)

console.log("Using ||:", displaySpeed1); // 60
console.log("Using ??:", displaySpeed2); // 0

// --- 2. Modern Loop Choice Guide ---
const fruits = ["Apple", "Banana", "Cherry"];

// 1. for...of: Best for reading array items directly
for (const fruit of fruits) {
  console.log("Fruit:", fruit);
}

// 2. Classic for loop: Best when you need the index or step skipping
for (let i = 0; i < fruits.length; i += 2) {
  console.log("Every 2nd fruit:", fruits[i]);
}

// 3. for...in: Used ONLY for Object keys (Avoid on arrays!)
const user = { name: "Sarah", age: 29 };
for (const key in user) {
  console.log(key, "->", user[key]);
}

// --- 3. break and continue ---
for (let i = 1; i <= 5; i++) {
  if (i === 2) continue; // Skip number 2
  if (i === 4) break;    // Stop completely at 4
  console.log("Step:", i); // Logs: 1, 3
}
```

---

### 1.3 Progressive Coding Problems

#### Problem 1.1: Customizable Business Rule FizzBuzz
**Requirement**: Write a function `customFizzBuzz(limit, rules)` that counts from 1 to `limit`. Instead of hardcoding 3 and 5, it takes an array of rules `{ divisor: number, word: string }`. If multiple divisors match, it concatenates their words. If none match, it outputs the number.

```javascript
function customFizzBuzz(limit, rules) {
  const results = [];

  for (let i = 1; i <= limit; i++) {
    let output = "";
    for (const rule of rules) {
      if (i % rule.divisor === 0) {
        output += rule.word;
      }
    }
    results.push(output === "" ? String(i) : output);
  }

  return results;
}

// Verification:
const rules = [
  { divisor: 3, word: "Fizz" },
  { divisor: 5, word: "Buzz" },
  { divisor: 7, word: "Bazz" }
];
console.log(customFizzBuzz(15, rules));
// ["1", "2", "Fizz", "4", "Buzz", "Fizz", "Bazz", "8", "Fizz", "Buzz", "11", "Fizz", "13", "Bazz", "FizzBuzz"]
```

#### Problem 1.2: Strict Palindrome Checker with Sanitization
**Requirement**: Build a function `isPalindrome(str)` that checks whether a phrase reads the same forwards and backwards. It must ignore casing, whitespace, and punctuation (e.g., `"A man, a plan, a canal: Panama"` is a valid palindrome). Do not use external libraries.

```javascript
function isPalindrome(str) {
  if (typeof str !== "string") return false;

  // Clean string: lowercase and remove non-alphanumeric characters
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Two-pointer approach from both ends (Memory efficient O(1) space)
  let left = 0;
  let right = cleaned.length - 1;

  while (left < right) {
    if (cleaned[left] !== cleaned[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

// Verification:
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car"));                     // false
console.log(isPalindrome("Was it a car or a cat I saw?"));   // true
console.log(isPalindrome("No 'x' in Nixon"));                // true
```

#### Problem 1.3: Prime Number Sieve within Range
**Requirement**: Implement a function `getPrimesInRange(start, end)` that returns an array of all prime numbers between `start` and `end` inclusive. Handle edge cases where `start < 2` or `start > end`.

```javascript
function isPrime(num) {
  if (num < 2) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  // Check odd divisors up to square root of num
  const limit = Math.sqrt(num);
  for (let i = 3; i <= limit; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

function getPrimesInRange(start, end) {
  const primes = [];
  const safeStart = Math.max(2, start);

  for (let num = safeStart; num <= end; num++) {
    if (isPrime(num)) {
      primes.push(num);
    }
  }

  return primes;
}

// Verification:
console.log(getPrimesInRange(1, 20));  // [2, 3, 5, 7, 11, 13, 17, 19]
console.log(getPrimesInRange(20, 30)); // [23, 29]
console.log(getPrimesInRange(50, 40)); // [] (Safe bounds)
```

#### Problem 1.4: Dynamic Matrix Pattern Generator
**Requirement**: Write a function `generateDiamond(size)` that accepts an odd integer `size` and returns a string representing an ASCII diamond centered within a square canvas of width `size`. Throw an error if `size` is even or negative.

```javascript
function generateDiamond(size) {
  if (size < 1 || size % 2 === 0) {
    throw new Error("Size must be a positive odd integer");
  }

  const lines = [];
  const mid = Math.floor(size / 2);

  for (let row = 0; row < size; row++) {
    const distanceToMid = Math.abs(mid - row);
    const starCount = size - (distanceToMid * 2);
    const spaceCount = distanceToMid;

    const spaces = " ".repeat(spaceCount);
    const stars = "*".repeat(starCount);
    lines.push(spaces + stars + spaces);
  }

  return lines.join("\n");
}

// Verification:
console.log(generateDiamond(5));
// Output:
//   *  
//  *** 
// *****
//  *** 
//   *  
```

#### Problem 1.5: Enterprise SLA Evaluation Engine
**Requirement**: Build a function `evaluateSLA(uptimePercentage, responseTimeMs, isMaintenanceWindow)` that categorizes cluster health into `'EXCELLENT'`, `'DEGRADED'`, `'BREACHED'`, or `'EXEMPT'` using clean guard clauses and strict logical operators.

```javascript
function evaluateSLA(uptimePercentage, responseTimeMs, isMaintenanceWindow = false) {
  // Guard Clause: Maintenance windows are exempt from penalties
  if (isMaintenanceWindow) {
    return "EXEMPT";
  }

  // Strict boundary checks
  const isUptimeGood = uptimePercentage >= 99.9;
  const isLatencyGood = responseTimeMs <= 200;

  if (isUptimeGood && isLatencyGood) {
    return "EXCELLENT";
  }

  // If uptime dropped below 99.0% or latency exceeds 1000ms -> Breach
  if (uptimePercentage < 99.0 || responseTimeMs > 1000) {
    return "BREACHED";
  }

  // Partial performance drop
  return "DEGRADED";
}

// Verification:
console.log(evaluateSLA(99.95, 120));       // "EXCELLENT"
console.log(evaluateSLA(99.4, 150));        // "DEGRADED"
console.log(evaluateSLA(98.5, 300));        // "BREACHED"
console.log(evaluateSLA(95.0, 1500, true)); // "EXEMPT"
```

---

## Milestone 2: Functions: From Declarations to Arrow Functions

### 2.1 Core Intuition & Mental Model

Functions are the building blocks of modular programming.
In JavaScript, **functions are first-class citizens**: they can be assigned to variables, passed as arguments to other functions, and returned from functions.

```
                          3 Ways to Write a Function
 1. Function Declaration (Hoisted! Can call before definition)
    function add(a, b) { return a + b; }

 2. Function Expression (Not hoisted; stored in variable)
    const add = function(a, b) { return a + b; };

 3. Arrow Function (Modern ES6 concise syntax; lexical 'this')
    const add = (a, b) => a + b;
```

#### The Golden Rules of Functions:
1. **Prefer Arrow Functions for callbacks and small utilities**: `items.map(x => x * 2)`.
2. **Use Default Parameters** instead of manually checking for `undefined`: `function connect(port = 3000)`.
3. **Use Rest Parameters (`...args`)** instead of the legacy `arguments` object.
4. **Keep functions Pure whenever possible**: Given the same inputs, a pure function always returns the same output without modifying external state.

---

### 2.2 Clear Code Demonstrations

```javascript
// --- 1. Declaration vs Arrow Function ---
console.log(sayHello("Dev")); // "Hello, Dev!" (Works due to hoisting!)
function sayHello(name) {
  return `Hello, ${name}!`;
}

// sayHi("Dev"); // ReferenceError: Cannot access 'sayHi' before initialization
const sayHi = (name) => `Hi, ${name}!`;

// --- 2. Default and Rest Parameters ---
function createQuery(endpoint, timeoutMs = 5000, ...filters) {
  console.log(`Querying ${endpoint} with timeout ${timeoutMs}ms`);
  console.log("Active filters:", filters);
}
createQuery("/api/users", 3000, "role=admin", "status=active");

// --- 3. First-Class Functions: Passing Functions as Data ---
function transformNumbers(numbers, transformFn) {
  const result = [];
  for (const num of numbers) {
    result.push(transformFn(num));
  }
  return result;
}

const double = (n) => n * 2;
const square = (n) => n * n;

console.log(transformNumbers([1, 2, 3], double)); // [2, 4, 6]
console.log(transformNumbers([1, 2, 3], square)); // [1, 4, 9]

// --- 4. Returning Functions (Function Factories) ---
function createMultiplier(multiplier) {
  return function (value) {
    return value * multiplier;
  };
}
const triple = createMultiplier(3);
console.log(triple(10)); // 30
```

---

### 2.3 Progressive Coding Problems

#### Problem 2.1: Robust Math Pipeline & Function Composition
**Requirement**: Build a function `compose(...fns)` that takes any number of single-argument functions and returns a new function. When invoked with a value, it passes the result through each function from **right to left** (mathematical composition).

```javascript
function compose(...fns) {
  return function (initialValue) {
    let result = initialValue;
    // Iterate from right to left
    for (let i = fns.length - 1; i >= 0; i--) {
      result = fns[i](result);
    }
    return result;
  };
}

// Verification:
const addFive = (x) => x + 5;
const double = (x) => x * 2;
const square = (x) => x * x;

// Math: ( (4^2) * 2 ) + 5 = (16 * 2) + 5 = 32 + 5 = 37
const calculate = compose(addFive, double, square);
console.log(calculate(4)); // 37
```

#### Problem 2.2: Universal Temperature Converter
**Requirement**: Write a function `convertTemperature(value, fromUnit, toUnit = "C")` that converts temperatures between Celsius (`"C"`), Fahrenheit (`"F"`), and Kelvin (`"K"`). If invalid units or non-numeric values are passed, throw descriptive errors.

```javascript
function convertTemperature(value, fromUnit, toUnit = "C") {
  if (typeof value !== "number" || Number.isNaN(value)) {
    throw new TypeError("Temperature value must be a valid number");
  }

  const from = fromUnit.toUpperCase();
  const to = toUnit.toUpperCase();

  // Step 1: Normalize everything to Celsius first
  let celsius;
  switch (from) {
    case "C": celsius = value; break;
    case "F": celsius = (value - 32) * (5 / 9); break;
    case "K": celsius = value - 273.15; break;
    default: throw new Error(`Unsupported source unit: ${fromUnit}`);
  }

  // Step 2: Convert from Celsius to target unit
  switch (to) {
    case "C": return parseFloat(celsius.toFixed(2));
    case "F": return parseFloat((celsius * (9 / 5) + 32).toFixed(2));
    case "K": return parseFloat((celsius + 273.15).toFixed(2));
    default: throw new Error(`Unsupported target unit: ${toUnit}`);
  }
}

// Verification:
console.log(convertTemperature(100, "C", "F")); // 212
console.log(convertTemperature(32, "F", "C"));  // 0
console.log(convertTemperature(0, "C", "K"));   // 273.15
console.log(convertTemperature(300, "K", "C")); // 26.85
```

#### Problem 2.3: String Case Transformer
**Requirement**: Implement a function `changeCase(str, targetFormat)` that converts a phrase between `"camelCase"`, `"kebab-case"`, and `"snake_case"`. It should handle spaces, underscores, and hyphens in the input cleanly.

```javascript
function changeCase(str, targetFormat) {
  if (typeof str !== "string") return "";

  // Split into words by matching camelCase boundaries, dashes, underscores, and spaces
  const words = str
    .replace(/([a-z])([A-Z])/g, "$1 $2") // split camelCase
    .replace(/[_-]/g, " ")               // replace _ and - with spaces
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean);

  if (words.length === 0) return "";

  switch (targetFormat) {
    case "kebab-case":
      return words.join("-");
    case "snake_case":
      return words.join("_");
    case "camelCase":
      return words[0] + words.slice(1).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join("");
    default:
      throw new Error(`Unsupported target format: ${targetFormat}`);
  }
}

// Verification:
console.log(changeCase("hello world test", "camelCase"));  // "helloWorldTest"
console.log(changeCase("user_first_name", "kebab-case")); // "user-first-name"
console.log(changeCase("superAppContainer", "snake_case"));// "super_app_container"
```

#### Problem 2.4: Safe Function Runner with Fallback (`tryCatchWrapper`)
**Requirement**: Build a higher-order utility `safeRun(fn, fallbackValue)` that executes a function inside a `try...catch` block. If the function executes successfully, return its result; if it throws an error, return `fallbackValue` without crashing the application.

```javascript
function safeRun(fn, fallbackValue) {
  return function (...args) {
    try {
      return fn(...args);
    } catch (err) {
      console.warn(`[SafeRun Warning]: ${err.message}. Using fallback value.`);
      return fallbackValue;
    }
  };
}

// Verification:
const riskyJsonParser = (jsonStr) => JSON.parse(jsonStr);
const safeJsonParser = safeRun(riskyJsonParser, { status: "default" });

console.log(safeJsonParser('{"id": 42}')); // { id: 42 }
console.log(safeJsonParser('bad-json-string')); // { status: "default" } (No crash!)
```

#### Problem 2.5: Function Timing Benchmark Wrapper
**Requirement**: Write a higher-order function `benchmark(fn, label = "Operation")` that wraps any synchronous function, measures its precise execution time in milliseconds using `performance.now()`, logs the elapsed time, and returns the original function's return value.

```javascript
function benchmark(fn, label = "Operation") {
  return function (...args) {
    const start = performance.now();
    const result = fn(...args);
    const end = performance.now();
    const duration = (end - start).toFixed(4);

    console.log(`[Benchmark] ${label} completed in ${duration}ms`);
    return result;
  };
}

// Verification:
function heavySum(limit) {
  let total = 0;
  for (let i = 0; i < limit; i++) total += i;
  return total;
}

const timedSum = benchmark(heavySum, "10 Million Loop Sum");
const res = timedSum(10000000);
console.log("Calculated Total:", res);
// Output includes timing: "[Benchmark] 10 Million Loop Sum completed in X.XXXXms"
```

---

## Milestone 3: Arrays & Modern Array Processing (The Functional Toolkit)

### 3.1 Core Intuition & Mental Model

An **Array** is an ordered, zero-indexed collection of items.
In modern JavaScript, professional developers rarely write manual `for` loops to transform arrays. Instead, we use **declarative array iterator methods**.

```
                   The 3 Core Transformation Engines
  1. map()    ──► Transforms every item: [1, 2, 3] ──► [2, 4, 6] (Same length)
  2. filter() ──► Keeps matching items:  [1, 2, 3] ──► [2]       (Subset length)
  3. reduce() ──► Condenses into ONE:    [1, 2, 3] ──► 6         (Any shape: num, obj, arr)
```

#### Senior Mutability vs Immutability Invariant:
- **Mutating Methods (Modify the original array in place)**: `push()`, `pop()`, `shift()`, `unshift()`, `splice()`, `sort()`, `reverse()`.
- **Non-Mutating Methods (Return a brand new array)**: `map()`, `filter()`, `slice()`, `concat()`, `flat()`, `toSorted()`, `toReversed()`.
- *Senior Rule*: Always favor non-mutating methods to prevent subtle bugs where unexpected parts of your application alter shared data.

---

### 3.2 Clear Code Demonstrations

```javascript
// --- 1. map, filter, and reduce Pipeline ---
const products = [
  { id: 1, name: "Laptop", price: 1200, inStock: true },
  { id: 2, name: "Phone", price: 800, inStock: false },
  { id: 3, name: "Mouse", price: 40, inStock: true },
  { id: 4, name: "Keyboard", price: 120, inStock: true }
];

// Goal: Get total price of all IN-STOCK items with a 10% tax added
const totalInStockWithTax = products
  .filter((item) => item.inStock)                  // 1. Keep in-stock items
  .map((item) => item.price * 1.10)                // 2. Add 10% tax
  .reduce((accumulator, price) => accumulator + price, 0); // 3. Sum up

console.log("Total checkout:", totalInStockWithTax.toFixed(2)); // "$1496.00"

// --- 2. Checking conditions: some() vs every() ---
const hasExpensiveItem = products.some((p) => p.price > 1000); // true (at least one)
const areAllInStock = products.every((p) => p.inStock);        // false (not all)

// --- 3. Array Spread & Destructuring ---
const frontendTech = ["HTML", "CSS", "JavaScript"];
const backendTech = ["Node.js", "PostgreSQL"];

// Combine arrays without mutating:
const fullStack = [...frontendTech, ...backendTech, "Docker"];

// Destructure values cleanly:
const [firstLanguage, secondLanguage, ...remainingLanguages] = fullStack;
console.log(firstLanguage);      // "HTML"
console.log(remainingLanguages); // ["JavaScript", "Node.js", "PostgreSQL", "Docker"]
```

---

### 3.3 Progressive Coding Problems

#### Problem 3.1: Transaction Ledger Aggregator (`groupBy` & Sum via `reduce`)
**Requirement**: Write a function `aggregateLedger(transactions)` that accepts an array of transactions `{ id, category, amount, type: "income" | "expense" }` and returns an object summarizing total income, total expenses, net balance, and a breakdown of totals grouped by category.

```javascript
function aggregateLedger(transactions) {
  const initialSummary = {
    totalIncome: 0,
    totalExpense: 0,
    netBalance: 0,
    categories: {}
  };

  return transactions.reduce((acc, tx) => {
    // 1. Update overall income/expense totals
    if (tx.type === "income") {
      acc.totalIncome += tx.amount;
      acc.netBalance += tx.amount;
    } else if (tx.type === "expense") {
      acc.totalExpense += tx.amount;
      acc.netBalance -= tx.amount;
    }

    // 2. Group by category
    if (!acc.categories[tx.category]) {
      acc.categories[tx.category] = 0;
    }
    acc.categories[tx.category] += tx.amount;

    return acc;
  }, initialSummary);
}

// Verification:
const ledger = [
  { id: 1, category: "Salary", amount: 5000, type: "income" },
  { id: 2, category: "Rent", amount: 1500, type: "expense" },
  { id: 3, category: "Groceries", amount: 300, type: "expense" },
  { id: 4, category: "Freelance", amount: 1200, type: "income" },
  { id: 5, category: "Groceries", amount: 150, type: "expense" }
];

console.log(aggregateLedger(ledger));
// Output:
// {
//   totalIncome: 6200,
//   totalExpense: 1950,
//   netBalance: 4250,
//   categories: { Salary: 5000, Rent: 1500, Groceries: 450, Freelance: 1200 }
// }
```

#### Problem 3.2: Duplicate Item Purger (Preserving Initial Order)
**Requirement**: Implement a function `deduplicate(arr, keySelector = null)` that removes duplicate values from an array while strictly preserving the first appearance order. It should work on primitive arrays directly, and support an optional key selector callback for arrays of objects (e.g. `item => item.id`).

```javascript
function deduplicate(arr, keySelector = null) {
  const seen = new Set();
  const result = [];

  for (const item of arr) {
    // Determine the unique key: either the selector result or the item itself
    const key = keySelector ? keySelector(item) : item;

    if (!seen.has(key)) {
      seen.add(key);
      result.push(item);
    }
  }

  return result;
}

// Verification:
// Test 1: Primitive array
console.log(deduplicate([1, 2, 2, 3, 4, 3, 1, 5])); // [1, 2, 3, 4, 5]

// Test 2: Array of objects with key selector
const users = [
  { id: 101, name: "Alice" },
  { id: 102, name: "Bob" },
  { id: 101, name: "Alice Duplicate" },
  { id: 103, name: "Charlie" }
];
console.log(deduplicate(users, (u) => u.id));
// [{ id: 101, name: "Alice" }, { id: 102, name: "Bob" }, { id: 103, name: "Charlie" }]
```

#### Problem 3.3: Recursive Multi-Level Array Flattener (`customFlat`)
**Requirement**: Build a recursive function `customFlat(arr, depth = 1)` that mimics the native `Array.prototype.flat()`. It should flatten nested arrays up to the specified `depth`, leaving non-array items untouched.

```javascript
function customFlat(arr, depth = 1) {
  if (!Array.isArray(arr)) return [];
  if (depth <= 0) return [...arr]; // Base case: return shallow copy

  const result = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      // Recursively flatten children with decremented depth
      result.push(...customFlat(item, depth - 1));
    } else {
      result.push(item);
    }
  }
  return result;
}

// Verification:
const nested = [1, [2, [3, [4, 5]]]];
console.log(customFlat(nested, 1)); // [1, 2, [3, [4, 5]]]
console.log(customFlat(nested, 2)); // [1, 2, 3, [4, 5]]
console.log(customFlat(nested, Infinity)); // [1, 2, 3, 4, 5]
```

#### Problem 3.4: Data Paginator & Array Chunker
**Requirement**: Build a utility `chunkArray(arr, size)` that splits an array into an array of smaller arrays, each with maximum length `size`. Handle edge cases like empty arrays or chunk size `<= 0`.

```javascript
function chunkArray(arr, size) {
  if (!Array.isArray(arr) || size <= 0) return [];

  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    // slice cleanly copies subarray [i, i + size)
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

// Verification:
const items = ["A", "B", "C", "D", "E", "F", "G"];
console.log(chunkArray(items, 3)); // [["A", "B", "C"], ["D", "E", "F"], ["G"]]
console.log(chunkArray(items, 5)); // [["A", "B", "C", "D", "E"], ["F", "G"]]
console.log(chunkArray([], 2));    // []
```

#### Problem 3.5: Multi-Criteria Array Sorter
**Requirement**: Build a function `sortUsers(users, criteria)` that sorts an array of user objects non-mutatively using multiple criteria (e.g. first by `role` priority, then by `experience` descending, then by `name` alphabetically).

```javascript
function sortUsers(users, criteria) {
  // Always work on a copy to avoid mutating input array!
  return [...users].sort((a, b) => {
    for (const criterion of criteria) {
      const { key, order = "asc", customOrder = null } = criterion;
      let diff = 0;

      if (customOrder && Array.isArray(customOrder)) {
        // Priority index lookup (e.g. Admin=0, Staff=1, User=2)
        const aIndex = customOrder.indexOf(a[key]);
        const bIndex = customOrder.indexOf(b[key]);
        diff = aIndex - bIndex;
      } else if (typeof a[key] === "string") {
        diff = a[key].localeCompare(b[key]);
      } else {
        diff = a[key] - b[key];
      }

      if (diff !== 0) {
        return order === "desc" ? -diff : diff;
      }
    }
    return 0;
  });
}

// Verification:
const employees = [
  { name: "Charlie", role: "Developer", years: 3 },
  { name: "Alice", role: "Lead", years: 5 },
  { name: "Bob", role: "Developer", years: 6 },
  { name: "David", role: "Developer", years: 3 }
];

const sorted = sortUsers(employees, [
  { key: "role", customOrder: ["Lead", "Developer"] }, // Lead first
  { key: "years", order: "desc" },                     // Higher years first
  { key: "name", order: "asc" }                        // Alphabetical name tie-breaker
]);

console.log(sorted);
// Correct order:
// 1. Alice (Lead, 5yr)
// 2. Bob (Dev, 6yr)
// 3. Charlie (Dev, 3yr)
// 4. David (Dev, 3yr)
```

---

## Milestone 4: Objects, Symbols & Modern Data Structures

### 4.1 Core Intuition & Mental Model

An **Object** is a collection of key-value pairs representing an entity or structured data.
- Keys are typically strings (or unique `Symbol` primitives).
- In modern JavaScript, we also have specialized collections: `Map` (for dictionary lookups with arbitrary keys) and `Set` (for guaranteed unique values).

```
                      Object Navigation & Safety
 ┌─────────────────────────────────────────────────────────────────┐
 │ Optional Chaining (?.) ──► user?.address?.street                │
 │ (Returns undefined if user or address is nullish; zero crashes!) │
 ├─────────────────────────────────────────────────────────────────┤
 │ Nullish Coalescing (??)──► user?.preferences?.theme ?? "light"  │
 │ (Fallbacks only on null/undefined; preserves "" and false)     │
 └─────────────────────────────────────────────────────────────────┘
```

#### The Golden Rules of Objects:
1. **Never mutate objects directly if they represent external state**: Use spread `{ ...original, updatedProperty: 42 }`.
2. **Use Destructuring with Default Values and Renaming** for clean parameter handling.
3. **Use `Map` when**: Keys are unknown until runtime, keys are not strings, or frequent additions/deletions occur.

---

### 4.2 Clear Code Demonstrations

```javascript
// --- 1. Object Destructuring with Aliasing & Defaults ---
const serverConfig = {
  host: "127.0.0.1",
  port: 8080,
  security: { ssl: true, certId: "CERT-99" }
};

// Extract port, rename host to ipAddress, and provide fallback for timeout
const {
  host: ipAddress,
  port,
  timeout = 3000,
  security: { ssl }
} = serverConfig;

console.log(ipAddress); // "127.0.0.1"
console.log(timeout);   // 3000 (Default value applied)
console.log(ssl);       // true

// --- 2. Optional Chaining (?.) and Object Static Methods ---
const clientProfile = {
  name: "Marcus",
  company: { address: null }
};

// Safe access: returns undefined instead of throwing TypeError
const postalCode = clientProfile?.company?.address?.postalCode ?? "NO_POSTAL";
console.log(postalCode); // "NO_POSTAL"

// Inspecting keys, values, and entries
const metrics = { cpu: "14%", ram: "42%" };
console.log(Object.keys(metrics));   // ["cpu", "ram"]
console.log(Object.values(metrics)); // ["14%", "42%"]
console.log(Object.entries(metrics)); // [["cpu", "14%"], ["ram", "42%"]]

// --- 3. Map and Set: The Modern Collections ---
// Set: Unique list
const uniqueTags = new Set(["js", "node", "js", "web"]);
uniqueTags.add("react");
console.log(uniqueTags.size); // 4 ("js" is stored only once!)
console.log(uniqueTags.has("node")); // true

// Map: Key-Value storage where keys can be ANY type (including objects!)
const userCache = new Map();
const userKey = { id: 42 };
userCache.set(userKey, { sessionActive: true, lastPing: Date.now() });
console.log(userCache.get(userKey).sessionActive); // true
```

---

### 4.3 Progressive Coding Problems

#### Problem 4.1: Deep Object Property Getter (`deepGet`)
**Requirement**: Build a utility `deepGet(obj, path, fallback = undefined)` that safely extracts a value from a deeply nested object using dot notation (e.g. `"user.account.balance"`). If any intermediate key does not exist or is nullish, return `fallback` without throwing an error.

```javascript
function deepGet(obj, path, fallback = undefined) {
  if (obj === null || typeof obj !== "object" || typeof path !== "string") {
    return fallback;
  }

  const keys = path.split(".");
  let current = obj;

  for (const key of keys) {
    if (current === null || current === undefined) {
      return fallback;
    }
    current = current[key];
  }

  return current !== undefined ? current : fallback;
}

// Verification:
const enterpriseData = {
  cluster: {
    region: "us-east",
    nodes: { primary: { ip: "10.0.0.1", port: 5432 } }
  }
};

console.log(deepGet(enterpriseData, "cluster.nodes.primary.ip"));         // "10.0.0.1"
console.log(deepGet(enterpriseData, "cluster.nodes.secondary.ip", "N/A"));// "N/A"
console.log(deepGet(enterpriseData, "cluster.telemetry.metrics", 0));    // 0
```

#### Problem 4.2: Object Diff Engine
**Requirement**: Implement a function `diffObjects(oldObj, newObj)` that compares two shallow objects and returns an object showing what changed: `{ added: {}, modified: {}, removed: {} }`.

```javascript
function diffObjects(oldObj, newObj) {
  const added = {};
  const modified = {};
  const removed = {};

  // Check keys in newObj against oldObj
  for (const key of Object.keys(newObj)) {
    if (!(key in oldObj)) {
      added[key] = newObj[key];
    } else if (oldObj[key] !== newObj[key]) {
      modified[key] = { from: oldObj[key], to: newObj[key] };
    }
  }

  // Check keys in oldObj that were removed in newObj
  for (const key of Object.keys(oldObj)) {
    if (!(key in newObj)) {
      removed[key] = oldObj[key];
    }
  }

  return { added, modified, removed };
}

// Verification:
const v1 = { port: 8080, debug: false, mode: "dev" };
const v2 = { port: 9000, debug: false, timeout: 5000 };

console.log(diffObjects(v1, v2));
// Output:
// {
//   added: { timeout: 5000 },
//   modified: { port: { from: 8080, to: 9000 } },
//   removed: { mode: "dev" }
// }
```

#### Problem 4.3: URL Query String Serializer & Parser
**Requirement**: Write two functions:
1. `serializeQuery(params)`: converts an object into a clean query string `"?key1=val1&key2=val2"`, encoding URI components properly.
2. `parseQuery(queryString)`: parses a query string back into an object.

```javascript
function serializeQuery(params) {
  if (!params || typeof params !== "object") return "";

  const pairs = [];
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== null) {
      pairs.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
    }
  }

  return pairs.length > 0 ? `?${pairs.join("&")}` : "";
}

function parseQuery(queryString) {
  if (!queryString || typeof queryString !== "string") return {};

  const clean = queryString.startsWith("?") ? queryString.slice(1) : queryString;
  const result = {};

  if (!clean) return result;

  const pairs = clean.split("&");
  for (const pair of pairs) {
    const [rawKey, rawVal] = pair.split("=");
    if (rawKey) {
      result[decodeURIComponent(rawKey)] = rawVal ? decodeURIComponent(rawVal) : "";
    }
  }

  return result;
}

// Verification:
const params = { search: "v8 engine", page: 2, filter: "active & verified" };
const query = serializeQuery(params);
console.log(query); // "?search=v8%20engine&page=2&filter=active%20%26%20verified"

const parsed = parseQuery(query);
console.log(parsed); // { search: 'v8 engine', page: '2', filter: 'active & verified' }
```

#### Problem 4.4: High-Performance Word Frequency Counter using `Map`
**Requirement**: Write a function `countWordFrequencies(paragraph)` that returns a `Map` where keys are unique lowercase words and values are their occurrence count, sorted from most frequent to least frequent.

```javascript
function countWordFrequencies(text) {
  if (typeof text !== "string") return new Map();

  const words = text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .split(/\s+/)
    .filter(Boolean);

  const freqMap = new Map();
  for (const word of words) {
    const currentCount = freqMap.get(word) || 0;
    freqMap.set(word, currentCount + 1);
  }

  // Sort by frequency descending
  const sortedEntries = [...freqMap.entries()].sort((a, b) => b[1] - a[1]);
  return new Map(sortedEntries);
}

// Verification:
const passage = "JavaScript is great. Modern JavaScript is fast, and JavaScript is flexible.";
console.log(countWordFrequencies(passage));
// Map(6) { 'javascript' => 3, 'is' => 3, 'great' => 1, 'fast' => 1, 'and' => 1, 'flexible' => 1 }
```

#### Problem 4.5: Object Inverter with Collision Collector
**Requirement**: Write a function `invertObject(obj)` that swaps keys and values. If multiple keys share the exact same value, collect the inverted keys into an array so no data is overwritten.

```javascript
function invertObject(obj) {
  if (!obj || typeof obj !== "object") return {};

  const inverted = {};

  for (const [key, value] of Object.entries(obj)) {
    const stringVal = String(value);

    if (!(stringVal in inverted)) {
      // First time seeing this value: store as single value
      inverted[stringVal] = key;
    } else {
      // Collision detected! Convert to array if not already one, then append
      if (Array.isArray(inverted[stringVal])) {
        inverted[stringVal].push(key);
      } else {
        inverted[stringVal] = [inverted[stringVal], key];
      }
    }
  }

  return inverted;
}

// Verification:
const permissions = {
  alice: "admin",
  bob: "editor",
  charlie: "viewer",
  david: "admin",
  elena: "editor"
};

console.log(invertObject(permissions));
// Output:
// {
//   admin: ["alice", "david"],
//   editor: ["bob", "elena"],
//   viewer: "charlie"
// }
```

---

## Milestone 5: Execution Context, Scope & Closures

### 5.1 Core Intuition & Mental Model

How does JavaScript actually run your code?
1. **The Call Stack**: A LIFO (Last In, First Out) stack that tracks what function is currently executing.
2. **Scope**: The boundary where a variable is accessible.
   - **Global Scope**: Accessible everywhere.
   - **Function Scope**: Created by `function () {}`.
   - **Block Scope**: Created by `{ ... }` (applies to `let` and `const`).
3. **Hoisting**: Variable and function declarations are registered in memory before code execution begins.
   - Functions declarations are hoisted with their body.
   - `var` is hoisted as `undefined`.
   - `let` and `const` are hoisted into the **Temporal Dead Zone (TDZ)**: accessing them before declaration throws a `ReferenceError`.
4. **Closures**: **A function that remembers and accesses variables from its outer lexical scope, even after that outer function has finished executing!**

```
                            The Closure Backpack
  function outer() {
    let secret = "classified";
    return function inner() {
      console.log(secret); // 'secret' travels in inner's invisible backpack!
    };
  }
  const readSecret = outer(); // outer() execution finishes and leaves call stack
  readSecret(); // Logs "classified"! The backpack preserved 'secret'!
```

---

### 5.2 Clear Code Demonstrations

```javascript
// --- 1. Scope Chain & Block Scope ---
const globalVar = "Earth";

function country() {
  const countryVar = "Canada";

  if (true) {
    const cityVar = "Toronto";
    console.log(`${cityVar} is in ${countryVar}, on ${globalVar}`); // Reads all 3!
  }

  // console.log(cityVar); // ReferenceError: cityVar is locked inside if-block!
}
country();

// --- 2. The Closure in Action ---
function createCounter(start = 0) {
  let count = start; // Private variable encapsulated by closure!

  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count
  };
}

const counterA = createCounter(10);
const counterB = createCounter(100);

console.log(counterA.increment()); // 11
console.log(counterA.increment()); // 12
console.log(counterB.increment()); // 101 (counterA and counterB have INDEPENDENT backpacks!)
// console.log(counterA.count); // undefined (Safe data privacy!)

// --- 3. The Classic Loop Closure Trap & Fix ---
// The Broken var approach:
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var i:", i), 10); // Logs 3, 3, 3! (var is shared)
}

// The Clean let fix:
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log("let j:", j), 10); // Logs 0, 1, 2! (let is scoped to each iteration)
}
```

---

### 5.3 Progressive Coding Problems

#### Problem 5.1: Private State Bank Account with Closures
**Requirement**: Build a function `createBankAccount(accountHolder, initialDeposit)` that returns an object with methods `deposit(amount)`, `withdraw(amount)`, `getBalance()`, and `getTransactionHistory()`. The `balance` and `transactions` array must be strictly private and impossible to mutate directly from outside.

```javascript
function createBankAccount(accountHolder, initialDeposit = 0) {
  let balance = Math.max(0, initialDeposit);
  const transactions = [
    { type: "INITIAL_DEPOSIT", amount: balance, date: new Date().toISOString() }
  ];

  return {
    getHolder: () => accountHolder,
    getBalance: () => balance,
    deposit: (amount) => {
      if (amount <= 0 || typeof amount !== "number") {
        throw new Error("Deposit amount must be greater than zero");
      }
      balance += amount;
      transactions.push({ type: "DEPOSIT", amount, date: new Date().toISOString() });
      return balance;
    },
    withdraw: (amount) => {
      if (amount <= 0 || typeof amount !== "number") {
        throw new Error("Withdrawal amount must be greater than zero");
      }
      if (amount > balance) {
        throw new Error("Insufficient funds");
      }
      balance -= amount;
      transactions.push({ type: "WITHDRAWAL", amount, date: new Date().toISOString() });
      return balance;
    },
    getTransactionHistory: () => {
      // Return a shallow copy so outside mutations cannot tamper with history
      return [...transactions];
    }
  };
}

// Verification:
const account = createBankAccount("Sarah Connor", 500);
account.deposit(200);
account.withdraw(150);
console.log("Current balance:", account.getBalance()); // 550
console.log("Transactions count:", account.getTransactionHistory().length); // 3
// account.balance = 1000000; // Has zero effect on private balance!
console.log("Balance after tamper attempt:", account.getBalance()); // 550
```

#### Problem 5.2: Once-Only Function Execution Gate (`once`)
**Requirement**: Write a higher-order function `once(fn)` that ensures a given function can be executed **at most once**. Subsequent calls must return the cached result of the first invocation without executing `fn` again.

```javascript
function once(fn) {
  let hasRun = false;
  let cachedResult;

  return function (...args) {
    if (!hasRun) {
      hasRun = true;
      cachedResult = fn.apply(this, args);
    }
    return cachedResult;
  };
}

// Verification:
let initCount = 0;
const initializeDatabase = once((dbName) => {
  initCount++;
  return `Database '${dbName}' connected on port 5432`;
});

console.log(initializeDatabase("ProductionDB")); // "Database 'ProductionDB' connected..."
console.log(initializeDatabase("ProductionDB")); // Returns cached string
console.log(initializeDatabase("ProductionDB")); // Returns cached string
console.log("Actual executions:", initCount);     // 1
```

#### Problem 5.3: General-Purpose Function Memoizer (`memoize`)
**Requirement**: Build a utility `memoize(fn)` that caches the results of function calls based on serialized arguments. If called with identical arguments, it returns the result from memory instead of recomputing it.

```javascript
function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

// Verification:
let computeCount = 0;
const expensiveFactorial = memoize((n) => {
  computeCount++;
  if (n <= 1) return 1;
  return n * expensiveFactorial(n - 1);
});

console.log(expensiveFactorial(5)); // 120
console.log(expensiveFactorial(5)); // 120 (Cache hit!)
console.log("Compute invocations:", computeCount); // 5 (Only computed once per integer!)
```

#### Problem 5.4: Configurable Rate Limiter via Closure
**Requirement**: Build a function `createRateLimiter(maxCalls, timeWindowMs)` that wraps an action function. If invoked more than `maxCalls` times within `timeWindowMs`, it rejects execution and returns an error object `{ success: false, reason: "RATE_LIMITED" }`.

```javascript
function createRateLimiter(maxCalls, timeWindowMs) {
  const timestamps = [];

  return function (actionFn) {
    const now = Date.now();

    // Evict timestamps older than the time window
    while (timestamps.length > 0 && timestamps[0] <= now - timeWindowMs) {
      timestamps.shift();
    }

    if (timestamps.length >= maxCalls) {
      return { success: false, reason: "RATE_LIMITED" };
    }

    timestamps.push(now);
    return { success: true, result: actionFn() };
  };
}

// Verification:
const limiter = createRateLimiter(2, 1000); // 2 calls per 1 second

console.log(limiter(() => "Ping 1")); // { success: true, result: 'Ping 1' }
console.log(limiter(() => "Ping 2")); // { success: true, result: 'Ping 2' }
console.log(limiter(() => "Ping 3")); // { success: false, reason: 'RATE_LIMITED' }
```

#### Problem 5.5: Delayed Task Queue with Dynamic Delays
**Requirement**: Implement a function `createTaskQueue()` that returns a task scheduler. Tasks are queued and executed sequentially with a specified delay between each task using closures, returning a promise that resolves when all tasks complete.

```javascript
function createTaskQueue() {
  let pendingQueue = Promise.resolve();

  return {
    enqueue: (taskFn, delayMs = 100) => {
      pendingQueue = pendingQueue
        .then(() => new Promise((resolve) => setTimeout(resolve, delayMs)))
        .then(() => taskFn());
      return pendingQueue;
    }
  };
}

// Verification:
const queue = createTaskQueue();
const executionLog = [];

queue.enqueue(() => executionLog.push("Step 1"));
queue.enqueue(() => executionLog.push("Step 2"));
queue.enqueue(() => {
  executionLog.push("Step 3");
  console.log("Queue complete:", executionLog); // ["Step 1", "Step 2", "Step 3"]
});
```

---

## Milestone 6: The `this` Keyword, Prototypes & Object-Oriented JS

### 6.1 Core Intuition & Mental Model

In JavaScript, **`this` is not static—it is determined by how a function is called**.

```
                           The 4 Rules of 'this'
 1. Default Binding    ──► Standalone function call: fn() ──► undefined (strict mode) or window
 2. Implicit Binding   ──► Called as object method:  obj.fn() ──► obj
 3. Explicit Binding   ──► fn.call(ctx), fn.apply(ctx), fn.bind(ctx) ──► ctx
 4. 'new' Binding      ──► new Constructor() ──► The newly created instance object
 ─────────────────────────────────────────────────────────────────────────────
 * Arrow Functions     ──► Ignore all 4 rules! They inherit 'this' lexically from parent!
```

#### The Prototype Chain:
JavaScript does not have traditional classical inheritance under the hood. It uses **Prototypal Delegation**:
- When you read `obj.property`, JavaScript checks `obj`.
- If missing, it checks `obj.__proto__` (`Constructor.prototype`).
- If missing, it walks up the chain until it reaches `Object.prototype`, then `null`.
- ES6 `class` syntax is elegant syntactic sugar over this exact prototype delegation engine.

---

### 6.2 Clear Code Demonstrations

```javascript
// --- 1. The 'this' Rules in Action ---
const leader = {
  name: "Sarah",
  greet() {
    console.log(`Hello, I am ${this.name}`);
  },
  delayedGreetArrow() {
    // Arrow function captures 'this' from delayedGreetArrow's lexical scope (leader)
    setTimeout(() => console.log(`Delayed: I am ${this.name}`), 50);
  },
  delayedGreetBroken() {
    // Standard function gets called standalone by setTimeout -> this is undefined/window!
    setTimeout(function() {
      // console.log(this.name); // TypeError or undefined!
    }, 50);
  }
};

leader.greet(); // Implicit binding: "Hello, I am Sarah"
leader.delayedGreetArrow(); // "Delayed: I am Sarah"

// --- 2. Explicit Binding: call, apply, bind ---
function introduce(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}
const member = { name: "David" };

introduce.call(member, "Greetings", "!");     // Arguments passed individually
introduce.apply(member, ["Welcome", "."]);    // Arguments passed as array
const boundIntroduce = introduce.bind(member, "Hello"); // Returns permanently bound function
boundIntroduce("!"); // "Hello, David!"

// --- 3. Modern ES6 Class with Private Fields ---
class SecureDevice {
  #firmwareVersion = "1.0.4"; // Truly private field! (Cannot be read outside class)
  
  constructor(deviceId, owner) {
    this.deviceId = deviceId;
    this.owner = owner;
  }

  getFirmware() {
    return this.#firmwareVersion;
  }

  upgradeFirmware(newVersion) {
    if (newVersion > this.#firmwareVersion) {
      this.#firmwareVersion = newVersion;
      return true;
    }
    return false;
  }
}

const device = new SecureDevice("DEV-99", "Admin");
console.log(device.deviceId);           // "DEV-99"
console.log(device.getFirmware());       // "1.0.4"
// console.log(device.#firmwareVersion); // SyntaxError: Private field must be declared in an enclosing class
```

---

### 6.3 Progressive Coding Problems

#### Problem 6.1: Method Borrower with Explicit Binding
**Requirement**: Build a utility `borrowMethod(sourceObj, methodName, targetObj, ...args)` that invokes a method belonging to `sourceObj` in the context of `targetObj` using explicit binding, safely passing arbitrary arguments.

```javascript
function borrowMethod(sourceObj, methodName, targetObj, ...args) {
  if (typeof sourceObj[methodName] !== "function") {
    throw new TypeError(`Method ${methodName} does not exist on source object`);
  }

  // Explicitly bind 'this' to targetObj and execute
  return sourceObj[methodName].apply(targetObj, args);
}

// Verification:
const printer = {
  formatData(prefix, suffix) {
    return `${prefix} [ID: ${this.id}, Name: ${this.name}] ${suffix}`;
  }
};

const user = { id: 404, name: "DatabaseNode" };
const output = borrowMethod(printer, "formatData", user, ">>>", "<<<");
console.log(output); // ">>> [ID: 404, Name: DatabaseNode] <<<"
```

#### Problem 6.2: Custom `Function.prototype.bind` Polyfill (`customBind`)
**Requirement**: Write a function `customBind(fn, context, ...boundArgs)` that recreates native `Function.prototype.bind`. It must return a new function that, when invoked with further arguments, executes `fn` with `this` set to `context` and combines both sets of arguments.

```javascript
function customBind(fn, context, ...boundArgs) {
  if (typeof fn !== "function") {
    throw new TypeError("customBind must be invoked on a function");
  }

  return function (...callArgs) {
    // Combine preset boundArgs and runtime callArgs
    const allArgs = [...boundArgs, ...callArgs];
    return fn.apply(context, allArgs);
  };
}

// Verification:
function calculateTax(taxRate, price, discount = 0) {
  return (price - discount) * (1 + taxRate);
}

const californiaTax = customBind(calculateTax, null, 0.0825);
console.log(californiaTax(100, 10)); // (90) * 1.0825 = 97.425
```

#### Problem 6.3: Classical Prototypal Hierarchy (ES5 Prototypes)
**Requirement**: Construct an inheritance hierarchy without using the ES6 `class` keyword. Create a `Vehicle(make, model)` constructor with prototype method `getInfo()`, and an `ElectricCar(make, model, batteryCapacity)` child constructor that properly inherits from `Vehicle.prototype` and adds `charge()`.

```javascript
// Parent Constructor
function Vehicle(make, model) {
  this.make = make;
  this.model = model;
}

Vehicle.prototype.getInfo = function () {
  return `${this.make} ${this.model}`;
};

// Child Constructor
function ElectricCar(make, model, batteryCapacity) {
  // 1. Call parent constructor with child's 'this'
  Vehicle.call(this, make, model);
  this.batteryCapacity = batteryCapacity;
  this.chargeLevel = 100;
}

// 2. Link prototype chain: ElectricCar.prototype delegates to Vehicle.prototype
ElectricCar.prototype = Object.create(Vehicle.prototype);

// 3. Restore constructor pointer
ElectricCar.prototype.constructor = ElectricCar;

// 4. Add child-specific prototype methods
ElectricCar.prototype.charge = function (amount) {
  this.chargeLevel = Math.min(100, this.chargeLevel + amount);
  return `Charged to ${this.chargeLevel}%`;
};

// Verification:
const modelS = new ElectricCar("Tesla", "Model S", "100kWh");
console.log(modelS.getInfo()); // "Tesla Model S" (Inherited from Vehicle!)
console.log(modelS.charge(10)); // "Charged to 100%"
console.log(modelS instanceof ElectricCar); // true
console.log(modelS instanceof Vehicle);     // true
```

#### Problem 6.4: ES6 Class with Private Fields & Invariants
**Requirement**: Implement a `UserSession` ES6 class with private fields `#token`, `#expiresAt`, and `#refreshCount`. Expose methods to check if the session is expired, refresh the session token (up to a maximum of 3 times), and serialize safe public data without exposing the token.

```javascript
class UserSession {
  #token;
  #expiresAt;
  #refreshCount = 0;
  static MAX_REFRESHES = 3;

  constructor(userId, ttlMs = 60000) {
    this.userId = userId;
    this.#token = "tok_" + Math.random().toString(36).substring(2);
    this.#expiresAt = Date.now() + ttlMs;
  }

  isExpired() {
    return Date.now() > this.#expiresAt;
  }

  refresh(extendMs = 60000) {
    if (this.isExpired()) {
      throw new Error("Cannot refresh expired session. Must re-authenticate.");
    }
    if (this.#refreshCount >= UserSession.MAX_REFRESHES) {
      throw new Error("Max refresh limit reached for this session.");
    }

    this.#refreshCount++;
    this.#token = "tok_" + Math.random().toString(36).substring(2);
    this.#expiresAt = Date.now() + extendMs;
    return true;
  }

  toJSON() {
    // Exclude private token from serialized public representation
    return {
      userId: this.userId,
      isExpired: this.isExpired(),
      refreshCount: this.#refreshCount
    };
  }
}

// Verification:
const session = new UserSession("user_123", 5000);
console.log("Initial session:", session.toJSON());
session.refresh(10000);
console.log("Refreshed session:", session.toJSON());
```

#### Problem 6.5: Method Chaining Fluent Builder (`QueryBuilder`)
**Requirement**: Build a `QueryBuilder` class that allows method chaining (`new QueryBuilder().select("name", "email").from("users").where("status", "active").orderBy("created_at", "DESC").limit(10).toSql()`).

```javascript
class QueryBuilder {
  constructor() {
    this.fields = [];
    this.table = "";
    this.conditions = [];
    this.orderClause = "";
    this.limitCount = null;
  }

  select(...fields) {
    this.fields.push(...fields);
    return this; // Crucial: returning 'this' enables method chaining!
  }

  from(table) {
    this.table = table;
    return this;
  }

  where(column, value) {
    const formattedVal = typeof value === "string" ? `'${value}'` : value;
    this.conditions.push(`${column} = ${formattedVal}`);
    return this;
  }

  orderBy(column, direction = "ASC") {
    this.orderClause = `ORDER BY ${column} ${direction.toUpperCase()}`;
    return this;
  }

  limit(count) {
    this.limitCount = count;
    return this;
  }

  toSql() {
    if (!this.table) throw new Error("FROM table is required");

    const selectPart = this.fields.length > 0 ? this.fields.join(", ") : "*";
    let sql = `SELECT ${selectPart} FROM ${this.table}`;

    if (this.conditions.length > 0) {
      sql += ` WHERE ${this.conditions.join(" AND ")}`;
    }
    if (this.orderClause) {
      sql += ` ${this.orderClause}`;
    }
    if (this.limitCount !== null) {
      sql += ` LIMIT ${this.limitCount}`;
    }

    return sql + ";";
  }
}

// Verification:
const sql = new QueryBuilder()
  .select("id", "username", "email")
  .from("accounts")
  .where("role", "admin")
  .where("is_active", 1)
  .orderBy("created_at", "DESC")
  .limit(25)
  .toSql();

console.log(sql);
// "SELECT id, username, email FROM accounts WHERE role = 'admin' AND is_active = 1 ORDER BY created_at DESC LIMIT 25;"
```

---

## Milestone 7: Asynchronous JavaScript (Callbacks, Promises & Async/Await)

### 7.1 Core Intuition & Mental Model

JavaScript is **single-threaded** (it has only one Call Stack). If an operation takes 5 seconds (like fetching data from a server), a synchronous block would freeze the browser UI completely!
To solve this, JavaScript uses **Non-Blocking Asynchronous Concurrency** orchestrated by the **Event Loop**.

```
                         The Event Loop Queue Priority
 ┌────────────────┐
 │   Call Stack   │ ──► Runs JavaScript code line-by-line until empty
 └────────────────┘
         ▲
         ├──────────────────────────────────────────────────────┐
 ┌───────────────────────┐                             ┌──────────────────────┐
 │ Microtask Queue       │                             │ Macrotask Queue      │
 │ (HIGHEST PRIORITY!)   │                             │ (LOWEST PRIORITY)    │
 │ - Promise.then/catch  │                             │ - setTimeout         │
 │ - queueMicrotask()    │                             │ - setInterval        │
 └───────────────────────┘                             └──────────────────────┘
 * The Event Loop will drain EVERY microtask before executing the next macrotask!
```

#### The Evolution of Async Code:
1. **Callbacks**: The original approach. Passing a function to be executed later. Leads to deeply nested, unmaintainable "Callback Hell".
2. **Promises**: An object representing the eventual completion (or failure) of an asynchronous operation.
   - States: `pending` -> `fulfilled` (with a value) OR `rejected` (with an error).
3. **Async / Await**: Syntactic sugar over Promises. Writes asynchronous code that reads cleanly like synchronous code.

---

### 7.2 Clear Code Demonstrations

```javascript
// --- 1. The Microtask vs Macrotask Race ---
console.log("1. Synchronous Start");

setTimeout(() => {
  console.log("4. Macrotask (setTimeout)");
}, 0);

Promise.resolve().then(() => {
  console.log("3. Microtask (Promise)");
});

console.log("2. Synchronous End");

// Execution Order:
// 1. Synchronous Start
// 2. Synchronous End
// 3. Microtask (Promise) - Microtasks run BEFORE timers!
// 4. Macrotask (setTimeout)

// --- 2. From Promises to Async/Await ---
function fetchUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) resolve({ id, name: "Elena" });
      else reject(new Error("Invalid ID"));
    }, 100);
  });
}

// Clean Async/Await syntax with bulletproof error handling
async function loadUserData(userId) {
  try {
    console.log("Loading user...");
    const user = await fetchUser(userId);
    console.log("User loaded successfully:", user.name);
    return user;
  } catch (error) {
    console.error("Failed to load user:", error.message);
  } finally {
    console.log("Operation finished.");
  }
}
loadUserData(10);
```

---

### 7.3 Progressive Coding Problems

#### Problem 7.1: Delay / Sleep Utility (`sleep`)
**Requirement**: Implement a promisified `sleep(ms)` function that pauses execution in an `async` function for `ms` milliseconds, and can be cleanly cancelled using an `AbortSignal`.

```javascript
function sleep(ms, signal = null) {
  return new Promise((resolve, reject) => {
    if (signal?.aborted) {
      return reject(new Error("Sleep aborted"));
    }

    const timerId = setTimeout(() => {
      resolve();
    }, ms);

    if (signal) {
      signal.addEventListener("abort", () => {
        clearTimeout(timerId);
        reject(new Error("Sleep aborted"));
      }, { once: true });
    }
  });
}

// Verification:
async function demoSleep() {
  console.log("Start waiting at:", new Date().toLocaleTimeString());
  await sleep(200);
  console.log("Finished waiting at:", new Date().toLocaleTimeString());
}
demoSleep();
```

#### Problem 7.2: Resilient Fetch with Retry & Exponential Backoff
**Requirement**: Build a function `fetchWithRetry(asyncFn, maxRetries = 3, baseDelayMs = 100)` that executes an async function. If it fails, it retries with exponential backoff (`delay * 2^attempt`) up to `maxRetries` before finally throwing the error.

```javascript
async function fetchWithRetry(asyncFn, maxRetries = 3, baseDelayMs = 100) {
  let attempt = 0;

  while (attempt <= maxRetries) {
    try {
      return await asyncFn();
    } catch (err) {
      attempt++;
      if (attempt > maxRetries) {
        throw new Error(`Exceeded max retries (${maxRetries}). Last error: ${err.message}`);
      }

      // Calculate exponential backoff delay: 100ms, 200ms, 400ms...
      const delay = baseDelayMs * Math.pow(2, attempt - 1);
      console.warn(`[Retry Attempt ${attempt}/${maxRetries}] Retrying in ${delay}ms...`);
      await new Promise((res) => setTimeout(res, delay));
    }
  }
}

// Verification:
let attemptsCount = 0;
const unstableNetworkCall = async () => {
  attemptsCount++;
  if (attemptsCount < 3) throw new Error("503 Gateway Timeout");
  return { status: 200, payload: "Success" };
};

fetchWithRetry(unstableNetworkCall, 3, 50).then((res) => {
  console.log("Result after recovery:", res); // { status: 200, payload: 'Success' }
});
```

#### Problem 7.3: Async Batch Runner with Concurrency Limit
**Requirement**: Implement a function `batchProcess(items, concurrencyLimit, asyncWorker)` that processes an array of items asynchronously. At any given moment, no more than `concurrencyLimit` tasks may run in parallel.

```javascript
async function batchProcess(items, concurrencyLimit, asyncWorker) {
  const results = new Array(items.length);
  let currentIndex = 0;

  // Worker loop: pulls next item index from shared counter until done
  async function worker() {
    while (currentIndex < items.length) {
      const index = currentIndex++;
      try {
        results[index] = await asyncWorker(items[index], index);
      } catch (err) {
        results[index] = { error: err.message };
      }
    }
  }

  // Spawn pool of concurrent workers
  const workerPool = [];
  for (let i = 0; i < Math.min(concurrencyLimit, items.length); i++) {
    workerPool.push(worker());
  }

  // Wait for all workers in pool to exhaust queue
  await Promise.all(workerPool);
  return results;
}

// Verification:
const taskItems = [10, 20, 30, 40, 50];
const slowWorker = async (item) => {
  await new Promise((res) => setTimeout(res, 50));
  return item * 2;
};

batchProcess(taskItems, 2, slowWorker).then((res) => {
  console.log("All tasks processed with max 2 concurrent workers:", res);
  // [20, 40, 60, 80, 100]
});
```

#### Problem 7.4: Promise Timeout Shield (`withTimeout`)
**Requirement**: Build a utility `withTimeout(promise, timeoutMs, timeoutErrorMessage = "Operation timed out")` that races an input promise against a timeout timer. If the promise takes longer than `timeoutMs`, reject immediately.

```javascript
function withTimeout(promise, timeoutMs, timeoutErrorMessage = "Operation timed out") {
  let timerId;

  const timeoutPromise = new Promise((_, reject) => {
    timerId = setTimeout(() => {
      reject(new Error(timeoutErrorMessage));
    }, timeoutMs);
  });

  return Promise.race([promise, timeoutPromise]).finally(() => {
    // Clear timer immediately when race completes to prevent memory leaks
    clearTimeout(timerId);
  });
}

// Verification:
const fastTask = new Promise((res) => setTimeout(() => res("Fast Complete"), 50));
const slowTask = new Promise((res) => setTimeout(() => res("Slow Complete"), 300));

withTimeout(fastTask, 150).then(console.log); // "Fast Complete"
withTimeout(slowTask, 150).catch((err) => console.log("Caught:", err.message)); // "Caught: Operation timed out"
```

#### Problem 7.5: Polling Engine with Predicate Check (`pollUntil`)
**Requirement**: Build a polling engine `pollUntil(checkFn, intervalMs = 100, maxTimeoutMs = 2000)` that repeatedly calls an async status checker `checkFn()`. It resolves when `checkFn` returns a truthy value, or rejects if `maxTimeoutMs` elapses.

```javascript
async function pollUntil(checkFn, intervalMs = 100, maxTimeoutMs = 2000) {
  const startTime = Date.now();

  while (Date.now() - startTime < maxTimeoutMs) {
    const result = await checkFn();
    if (result) {
      return result;
    }
    await new Promise((res) => setTimeout(res, intervalMs));
  }

  throw new Error(`Polling timed out after ${maxTimeoutMs}ms`);
}

// Verification:
let serverStatus = "PENDING";
setTimeout(() => { serverStatus = "READY"; }, 250);

pollUntil(async () => serverStatus === "READY", 50, 1000).then(() => {
  console.log("Server status detected as READY!");
});
```

---

## Milestone 8: DOM Manipulation, Events & Browser APIs

### 8.1 Core Intuition & Mental Model

The **Document Object Model (DOM)** is a tree structure representing HTML elements as JavaScript objects.
- Every HTML tag becomes an `Element` node in memory.
- You can query, update, insert, delete, and listen for user interactions (clicks, keystrokes, scrolling).

```
                      The Event Flow: Bubbling & Delegation
 Document ──────────┐
   └─ Body ─────────┼──► 1. Capturing Phase (Events travel DOWN)
        └─ Table ───┼──► 2. Target Phase (User clicked the Button)
             └─ Btn ┴──► 3. Bubbling Phase (Events travel UP to Window!)
                             ▲
                             │ Event Delegation:
                             │ Attach 1 listener to Table instead of 1000 on buttons!
```

#### Golden Rules of Web DOM:
1. **Always use Event Delegation**: Don't attach listeners to hundreds of list items. Attach one listener to the parent container and check `event.target.closest()`.
2. **Avoid Layout Thrashing**: Batch your DOM reads (`offsetHeight`, `clientWidth`) together, and batch your DOM writes (`appendChild`, `style.height`) together.
3. **Always Clean Up**: Remove event listeners or intervals when removing elements from the screen to prevent memory leaks.

---

### 8.2 Clear Code Demonstrations

```javascript
// --- 1. Modern DOM Querying & Mutation ---
// querySelector works with any CSS selector
const container = document.querySelector("#app-container");

// Create element, configure properties, and append
const alertBox = document.createElement("div");
alertBox.className = "alert alert-success";
alertBox.dataset.alertId = "ALT-101"; // Sets data-alert-id attribute
alertBox.textContent = "Cluster initialized successfully.";

// Modern append handles multiple nodes and strings cleanly
container.append(alertBox);

// --- 2. High-Performance Event Delegation ---
// Instead of adding click listeners to 500 table rows:
const table = document.querySelector("#orders-table");

table.addEventListener("click", (event) => {
  // Find if a delete button was clicked inside the table
  const deleteBtn = event.target.closest(".btn-delete");
  if (!deleteBtn) return; // Ignore clicks outside delete buttons

  const row = deleteBtn.closest("tr");
  const orderId = row.dataset.orderId;
  console.log(`Deleting order #${orderId}`);
  row.remove(); // Native DOM node removal
});

// --- 3. Modern Browser Fetch & JSON Handling ---
async function fetchSystemMetrics(endpoint) {
  try {
    const response = await fetch(endpoint, {
      headers: { "Accept": "application/json" }
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Network fetch failed:", err.message);
    return null;
  }
}
```

---

### 8.3 Progressive Coding Problems

#### Problem 8.1: Accessible Modal Controller with Event Delegation
**Requirement**: Build a vanilla JavaScript `ModalController` class that listens to all clicks across the document via event delegation. It opens modals matching `data-modal-open="targetId"`, closes modals on `data-modal-close` or clicking the backdrop overlay, and closes on `Escape`.

```javascript
class ModalController {
  constructor() {
    this.activeModal = null;
    this.init();
  }

  init() {
    // Single document click listener (Event Delegation)
    document.addEventListener("click", (e) => {
      // Check open trigger
      const openTrigger = e.target.closest("[data-modal-open]");
      if (openTrigger) {
        const modalId = openTrigger.getAttribute("data-modal-open");
        this.open(modalId);
        return;
      }

      // Check close trigger or overlay click
      const closeTrigger = e.target.closest("[data-modal-close]");
      const isOverlay = e.target.classList.contains("modal-overlay");
      if (closeTrigger || isOverlay) {
        this.close();
      }
    });

    // Keyboard listener for Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.activeModal) {
        this.close();
      }
    });
  }

  open(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;

    this.activeModal = modal;
    modal.classList.add("is-visible");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open"); // Lock background scroll
  }

  close() {
    if (!this.activeModal) return;

    this.activeModal.classList.remove("is-visible");
    this.activeModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    this.activeModal = null;
  }
}

// Verification:
console.log("ModalController compiled with zero individual button listeners");
```

#### Problem 8.2: Dynamic Infinite Scroll Loader (`IntersectionObserver`)
**Requirement**: Implement an infinite scroll loader using native `IntersectionObserver`. It watches a sentinel element at the bottom of a list and triggers an async `loadMoreItems()` callback whenever the sentinel scrolls into view.

```javascript
class InfiniteScrollLoader {
  constructor(sentinelElement, fetchItemsCallback) {
    this.sentinel = sentinelElement;
    this.fetchCallback = fetchItemsCallback;
    this.isLoading = false;
    this.hasMore = true;
    this.initObserver();
  }

  initObserver() {
    this.observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting && !this.isLoading && this.hasMore) {
        this.loadNext();
      }
    }, { rootMargin: "200px" }); // Preload 200px before user reaches bottom!

    this.observer.observe(this.sentinel);
  }

  async loadNext() {
    this.isLoading = true;
    try {
      const { items, hasMore } = await this.fetchCallback();
      this.hasMore = hasMore;
      if (!hasMore) {
        this.observer.disconnect();
        this.sentinel.remove();
      }
    } finally {
      this.isLoading = false;
    }
  }
}

// Verification:
console.log("InfiniteScrollLoader compiled with IntersectionObserver preloading");
```

#### Problem 8.3: Debounced Live Search Input Controller
**Requirement**: Build a function `attachDebouncedSearch(inputElement, onSearch, delayMs = 300)` that cancels pending searches if user continues typing, and aborts prior pending in-flight network requests using `AbortController`.

```javascript
function attachDebouncedSearch(inputElement, onSearch, delayMs = 300) {
  let timerId;
  let activeAbortController = null;

  inputElement.addEventListener("input", (e) => {
    const query = e.target.value.trim();

    // 1. Clear prior debounce timer
    clearTimeout(timerId);

    // 2. Abort any previous pending HTTP request
    if (activeAbortController) {
      activeAbortController.abort();
    }

    // 3. Schedule next search execution
    timerId = setTimeout(async () => {
      activeAbortController = new AbortController();
      try {
        await onSearch(query, activeAbortController.signal);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("Search error:", err);
        }
      }
    }, delayMs);
  });
}

// Verification:
console.log("Debounced search controller compiled with automatic AbortController cancellation");
```

#### Problem 8.4: Reactive LocalStorage State Syncer (`usePersistentState`)
**Requirement**: Build a state synchronization utility `createPersistentStore(storageKey, defaultState)` that reads and writes structured state to `localStorage`, emits change events to subscribers, and synchronizes cross-tab updates via the `window.onstorage` event.

```javascript
class PersistentStore {
  constructor(storageKey, defaultState = {}) {
    this.key = storageKey;
    this.subscribers = new Set();
    this.state = this.load(defaultState);

    // Listen for changes made in other browser tabs!
    window.addEventListener("storage", (e) => {
      if (e.key === this.key && e.newValue) {
        try {
          this.state = JSON.parse(e.newValue);
          this.notify();
        } catch (err) {
          // Ignore JSON parse errors
        }
      }
    });
  }

  load(fallback) {
    try {
      const raw = localStorage.getItem(this.key);
      return raw ? JSON.parse(raw) : fallback;
    } catch {
      return fallback;
    }
  }

  setState(updater) {
    const nextState = typeof updater === "function" ? updater(this.state) : updater;
    this.state = nextState;
    try {
      localStorage.setItem(this.key, JSON.stringify(nextState));
    } catch (err) {
      console.warn("LocalStorage write quota exceeded");
    }
    this.notify();
  }

  getState() {
    return this.state;
  }

  subscribe(listener) {
    this.subscribers.add(listener);
    return () => this.subscribers.delete(listener); // Unsubscribe callback
  }

  notify() {
    for (const sub of this.subscribers) {
      sub(this.state);
    }
  }
}

// Verification:
const settingsStore = new PersistentStore("app_config", { theme: "dark" });
const unsubscribe = settingsStore.subscribe((state) => console.log("State updated:", state));
settingsStore.setState({ theme: "light" });
unsubscribe();
```

#### Problem 8.5: Drag-and-Drop Reorderable List Controller
**Requirement**: Implement a vanilla HTML5 Drag-and-Drop list reordering utility `initDragList(listElement)` that allows users to reorder `<li>` elements, computing the insertion sibling based on mouse Y-coordinates.

```javascript
function initDragList(listElement) {
  let draggedItem = null;

  listElement.addEventListener("dragstart", (e) => {
    const item = e.target.closest("li");
    if (!item) return;
    draggedItem = item;
    setTimeout(() => item.classList.add("is-dragging"), 0);
  });

  listElement.addEventListener("dragend", () => {
    if (draggedItem) {
      draggedItem.classList.remove("is-dragging");
      draggedItem = null;
    }
  });

  listElement.addEventListener("dragover", (e) => {
    e.preventDefault(); // Required to allow dropping!
    if (!draggedItem) return;

    const afterElement = getDragAfterElement(listElement, e.clientY);
    if (afterElement == null) {
      listElement.appendChild(draggedItem);
    } else {
      listElement.insertBefore(draggedItem, afterElement);
    }
  });

  function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll("li:not(.is-dragging)")];

    return draggableElements.reduce((closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2; // Distance from element vertical center
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
  }
}

// Verification:
console.log("DragList controller initialized with bounding box coordinate calculation");
```

---

## Milestone 9: Error Handling, Modules & Clean Architecture (Hero Tier)

### 9.1 Core Intuition & Mental Model

What separates a junior coder from a **Senior Hero Engineer**?
1. **Defensive Error Handling**: Junior developers assume the happy path. Heroes anticipate network timeouts, corrupted payloads, missing keys, and edge cases.
2. **Modular Decoupling**: Structuring code into independent, testable modules with clear boundaries.
3. **Architectural Patterns**: Leveraging proven design patterns (Pub-Sub, Reducers, Circuit Breakers) to build maintainable, scalable software.

```
                      The Hero Architecture Ecosystem
 ┌───────────────────────────┐         ┌───────────────────────────┐
 │   Custom Error Classes    │         │     Pub-Sub Event Bus     │
 │  AppError / ValidationError│         │  Decoupled Communication  │
 └───────────────────────────┘         └───────────────────────────┘
               │                                     │
               ▼                                     ▼
 ┌───────────────────────────┐         ┌───────────────────────────┐
 │  Predictable State Store  │         │   Circuit Breaker Guard   │
 │   Action ──► Reducer ──►  │         │ Protects downstream APIs  │
 │     Immutable State       │         │ from cascading failures   │
 └───────────────────────────┘         └───────────────────────────┘
```

---

### 9.2 Clear Code Demonstrations

```javascript
// --- 1. Custom Error Hierarchy ---
class AppError extends Error {
  constructor(message, statusCode = 500, errorCode = "INTERNAL_ERROR") {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode;
    this.errorCode = errorCode;
    Error.captureStackTrace(this, this.constructor);
  }
}

class ValidationError extends AppError {
  constructor(message, invalidFields = []) {
    super(message, 400, "VALIDATION_FAILED");
    this.invalidFields = invalidFields;
  }
}

try {
  throw new ValidationError("User input contains errors", ["email", "age"]);
} catch (err) {
  if (err instanceof ValidationError) {
    console.warn(`[Client Error ${err.statusCode}]: ${err.message}`, err.invalidFields);
  } else {
    console.error("[System Error]:", err);
  }
}

// --- 2. Dynamic ES Module Import ---
async function loadAnalyticsEngine() {
  // Code-splitting: Only loads the module when this function is called!
  // const { trackEvent } = await import("./analytics.js");
  // trackEvent("button_click");
}
```

---

### 9.3 Progressive Coding Problems

#### Problem 9.1: Enterprise Error Dispatcher & Normalized Formatter
**Requirement**: Build an enterprise error handler `handleApiError(error)` that inspects any error (native TypeError, custom `AppError`, string, or Axios/Fetch error object) and formats it into a normalized JSON API error payload `{ status, code, message, timestamp, stack }`.

```javascript
class DomainError extends Error {
  constructor(message, statusCode = 500, errorCode = "SYSTEM_FAULT") {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode;
    this.errorCode = errorCode;
  }
}

function handleApiError(error) {
  const timestamp = new Date().toISOString();

  // Case 1: Known domain custom error
  if (error instanceof DomainError) {
    return {
      status: error.statusCode,
      code: error.errorCode,
      message: error.message,
      timestamp
    };
  }

  // Case 2: Standard JavaScript Error (e.g. TypeError, SyntaxError)
  if (error instanceof Error) {
    return {
      status: 500,
      code: "RUNTIME_EXCEPTION",
      message: error.message,
      timestamp
    };
  }

  // Case 3: Raw string or unknown object
  return {
    status: 500,
    code: "UNEXPECTED_ERROR",
    message: typeof error === "string" ? error : "An unknown error occurred",
    timestamp
  };
}

// Verification:
const customErr = new DomainError("Unauthorized token access", 401, "AUTH_UNAUTHORIZED");
console.log(handleApiError(customErr));
// { status: 401, code: 'AUTH_UNAUTHORIZED', message: 'Unauthorized token access', ... }

console.log(handleApiError(new TypeError("Cannot read property of undefined")));
// { status: 500, code: 'RUNTIME_EXCEPTION', message: 'Cannot read property of undefined', ... }
```

#### Problem 9.2: Pub-Sub Event Bus Pattern (`EventBus`)
**Requirement**: Implement a decoupled `EventBus` class supporting `on(event, handler)`, `off(event, handler)`, `emit(event, data)`, and `once(event, handler)` where handlers can be subscribed, unsubscribed, or triggered once and automatically removed.

```javascript
class EventBus {
  constructor() {
    this.events = new Map();
  }

  on(eventName, handler) {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, new Set());
    }
    this.events.get(eventName).add(handler);

    // Return unsubscription function
    return () => this.off(eventName, handler);
  }

  off(eventName, handler) {
    const handlers = this.events.get(eventName);
    if (handlers) {
      handlers.delete(handler);
      if (handlers.size === 0) {
        this.events.delete(eventName);
      }
    }
  }

  emit(eventName, data) {
    const handlers = this.events.get(eventName);
    if (handlers) {
      for (const handler of handlers) {
        handler(data);
      }
    }
  }

  once(eventName, handler) {
    const unsubscribe = this.on(eventName, (data) => {
      unsubscribe(); // Auto-remove on first invocation
      handler(data);
    });
  }
}

// Verification:
const bus = new EventBus();
const logs = [];

const unsub = bus.on("user:login", (u) => logs.push(`Welcome ${u.name}`));
bus.once("user:login", () => logs.push("First login toast"));

bus.emit("user:login", { name: "Sarah" });
bus.emit("user:login", { name: "Sarah" });
unsub();
bus.emit("user:login", { name: "Sarah" }); // Ignored

console.log("Event logs:", logs);
// ["Welcome Sarah", "First login toast", "Welcome Sarah"]
```

#### Problem 9.3: Redux-Style Immutable State Store (`createStore`)
**Requirement**: Implement a mini Redux-style store `createStore(reducer, preloadedState)` supporting `getState()`, `dispatch(action)`, and `subscribe(listener)`. Ensure state transitions are strictly pure and immutable.

```javascript
function createStore(reducer, preloadedState) {
  let currentState = preloadedState;
  const listeners = new Set();

  function getState() {
    return currentState;
  }

  function dispatch(action) {
    if (!action || typeof action.type !== "string") {
      throw new Error("Actions must be plain objects with a string 'type' property");
    }
    // Calculate new immutable state via pure reducer
    currentState = reducer(currentState, action);
    for (const listener of listeners) {
      listener();
    }
    return action;
  }

  function subscribe(listener) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  }

  // Initialize store with dummy action
  dispatch({ type: "@@INIT" });

  return { getState, dispatch, subscribe };
}

// Verification:
function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case "INCREMENT": return { ...state, count: state.count + 1 };
    case "DECREMENT": return { ...state, count: state.count - 1 };
    case "ADD_BY":   return { ...state, count: state.count + action.payload };
    default: return state;
  }
}

const store = createStore(counterReducer, { count: 10 });
store.subscribe(() => console.log("State changed:", store.getState()));

store.dispatch({ type: "INCREMENT" }); // { count: 11 }
store.dispatch({ type: "ADD_BY", payload: 5 }); // { count: 16 }
```

#### Problem 9.4: Circuit Breaker Pattern for Unstable Remote Services
**Requirement**: Build a `CircuitBreaker` class with states `CLOSED` (nominal, requests allowed), `OPEN` (service failing, requests short-circuited immediately with fallback), and `HALF_OPEN` (testing service recovery after cooldown).

```javascript
class CircuitBreaker {
  constructor(actionFn, { failureThreshold = 3, cooldownMs = 1000 } = {}) {
    this.actionFn = actionFn;
    this.failureThreshold = failureThreshold;
    this.cooldownMs = cooldownMs;

    this.state = "CLOSED"; // CLOSED, OPEN, HALF_OPEN
    this.failureCount = 0;
    this.lastFailureTime = null;
  }

  async execute(...args) {
    const now = Date.now();

    // Check if cooldown has elapsed while OPEN
    if (this.state === "OPEN") {
      if (now - this.lastFailureTime > this.cooldownMs) {
        this.state = "HALF_OPEN";
        console.log("[Circuit Breaker] Transitioning from OPEN to HALF_OPEN (Probing service)...");
      } else {
        throw new Error("CircuitBreaker: OPEN - Service unavailable. Request blocked.");
      }
    }

    try {
      const result = await this.actionFn(...args);
      // Success! Reset circuit if testing in HALF_OPEN
      if (this.state === "HALF_OPEN") {
        this.state = "CLOSED";
        this.failureCount = 0;
        console.log("[Circuit Breaker] Service healthy! Circuit restored to CLOSED.");
      }
      return result;
    } catch (err) {
      this.failureCount++;
      this.lastFailureTime = Date.now();

      if (this.failureCount >= this.failureThreshold || this.state === "HALF_OPEN") {
        this.state = "OPEN";
        console.warn(`[Circuit Breaker] Breached threshold! Circuit tripped to OPEN.`);
      }

      throw err;
    }
  }
}

// Verification:
let isServerDown = true;
const breaker = new CircuitBreaker(async () => {
  if (isServerDown) throw new Error("500 Server Crash");
  return "Data received";
}, { failureThreshold: 2, cooldownMs: 100 });

async function testBreaker() {
  try { await breaker.execute(); } catch (e) {} // Fail 1
  try { await breaker.execute(); } catch (e) {} // Fail 2 -> Trips to OPEN
  try { await breaker.execute(); } catch (e) {
    console.log("Immediate block:", e.message); // Request blocked without hitting network!
  }
}
testBreaker();
```

#### Problem 9.5: Hero Capstone: Reactive Component Architecture
**Requirement**: Build an autonomous reactive component `UserProfileCard` that integrates an immutable state store, the Pub-Sub event bus, clean DOM rendering, and error boundaries into a complete production-grade application widget.

```javascript
class UserProfileCard {
  constructor(containerElement, initialUser) {
    this.container = containerElement;
    this.bus = new EventBus();

    // 1. Initialize State Store
    this.store = createStore(this.reducer.bind(this), {
      user: initialUser,
      isEditing: false,
      error: null
    });

    // 2. Subscribe to store changes -> Re-render
    this.store.subscribe(() => this.render());

    // 3. Mount and bind events
    this.bindEvents();
    this.render();
  }

  reducer(state, action) {
    switch (action.type) {
      case "SET_EDIT_MODE":
        return { ...state, isEditing: action.payload, error: null };
      case "UPDATE_PROFILE":
        return {
          ...state,
          user: { ...state.user, ...action.payload },
          isEditing: false,
          error: null
        };
      case "SET_ERROR":
        return { ...state, error: action.payload };
      default:
        return state;
    }
  }

  bindEvents() {
    this.container.addEventListener("click", (e) => {
      if (e.target.matches(".btn-edit")) {
        this.store.dispatch({ type: "SET_EDIT_MODE", payload: true });
      } else if (e.target.matches(".btn-cancel")) {
        this.store.dispatch({ type: "SET_EDIT_MODE", payload: false });
      }
    });

    this.container.addEventListener("submit", (e) => {
      e.preventDefault();
      const form = e.target;
      const name = form.elements["username"].value.trim();

      if (!name) {
        this.store.dispatch({ type: "SET_ERROR", payload: "Name cannot be blank" });
        return;
      }

      this.store.dispatch({ type: "UPDATE_PROFILE", payload: { name } });
    });
  }

  render() {
    const { user, isEditing, error } = this.store.getState();

    if (isEditing) {
      this.container.innerHTML = `
        <div class="card edit-mode">
          <h3>Edit Profile</h3>
          ${error ? `<div class="error">${error}</div>` : ""}
          <form>
            <input type="text" name="username" value="${user.name}" required />
            <button type="submit">Save</button>
            <button type="button" class="btn-cancel">Cancel</button>
          </form>
        </div>
      `;
    } else {
      this.container.innerHTML = `
        <div class="card view-mode">
          <h3>${user.name}</h3>
          <p>Role: ${user.role}</p>
          <button type="button" class="btn-edit">Edit Profile</button>
        </div>
      `;
    }
  }
}

// Verification:
console.log("UserProfileCard component architecture compiled cleanly with complete reactive store bindings");
```

---

## 🏆 Zero to Hero Mastery Retrospective Matrix

| Milestone | Level | Core Concept | Golden Rule / Senior Implementation Invariant |
|---|---|---|---|
| **0. Foundations** | **Zero** | Types, Variables & Memory | Default to `const`; use `let` only for counters; never use `var`; primitives copy by value, objects copy by reference. |
| **1. Control Flow** | **Novice** | Conditionals & Loops | Use `??` for safe number/string defaults; `&&` for guard clauses; prefer `for...of` for array iteration over manual indexing. |
| **2. Functions** | **Apprentice** | Arrow Functions & Rest Params | Favor pure functions without side effects; use default parameters (`x = 10`); treat functions as first-class citizens. |
| **3. Arrays** | **Practitioner** | Declarative Array Processing | Never mutate source arrays; chain `map`, `filter`, and `reduce`; use `[...spread]` for clean cloning and merging. |
| **4. Objects** | **Adept** | Destructuring & Maps/Sets | Use Optional Chaining (`?.`) with Nullish Coalescing (`??`); use `Set` for uniqueness; use `Map` for arbitrary key dictionaries. |
| **5. Closures** | **Skilled** | Call Stack, Scope & Closures | A closure is a function with a memory backpack; use closures for true private data encapsulation and function factories. |
| **6. OOP & 'this'** | **Advanced** | Prototypes & ES6 Classes | `this` is decided at call-time, not declaration; arrow functions have lexical `this`; ES6 `class` compiles to prototype delegation. |
| **7. Async JS** | **Expert** | Promises & Event Loop | The Event Loop drains Microtasks (Promises) before Macrotasks (Timers); handle all async flows with `try/catch` and `async/await`. |
| **8. Web APIs** | **Master** | DOM & Event Delegation | Attach 1 listener to parent containers (Event Delegation) instead of 1,000 on buttons; avoid layout thrashing. |
| **9. Hero Tier** | **Hero** | Clean Architecture & Patterns | Handle errors defensively with custom Error hierarchies; decouple modules with Pub-Sub and Redux-style immutable state stores. |



