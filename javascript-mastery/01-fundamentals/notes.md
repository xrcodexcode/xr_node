# Level 1 — JavaScript Fundamentals

*Learning Path Marker: MUST KNOW*
*Estimated Total Learning Time: 3-4 hours*
*Minimum Practice Time: 4-5 hours*
*Mastery Checkpoint: Can confidently explain truthy/falsy values, predict output of type coercion, and use let/const correctly.*

---

## 1. Variables (let, const, var)
**[ MUST KNOW ]** | *Estimated Time: 30 mins*

### What is it?
Variables are containers for storing data values. In JavaScript, we declare variables using `let`, `const`, or `var`.

### Why?
To store, retrieve, and manipulate data throughout the lifecycle of an application.

### Syntax
```javascript
let age = 25; // can be reassigned
const name = "Alice"; // cannot be reassigned
var legacy = true; // older, function-scoped (avoid using)
```

### Practical Example (Real-World Data)
```javascript
const maxUsers = 100;
let currentActiveUsers = 42;

// User logs in
currentActiveUsers = currentActiveUsers + 1;
console.log(currentActiveUsers); // 43
```

### Common Mistake
```text
Mistake → Reassigning a const variable.
Why it happens → Forgetting that const stands for constant.
Incorrect code → const taxRate = 0.05; taxRate = 0.08;
Correct code → let taxRate = 0.05; taxRate = 0.08;
How to remember → Use `const` by default. Change to `let` only if you know the value will change.
```

---

## 2. Data Types
**[ MUST KNOW ]** | *Estimated Time: 45 mins*

JavaScript has primitive and reference data types.
Primitives: `string`, `number`, `bigint`, `boolean`, `undefined`, `null`, `symbol`.
Reference: `object`.

### Practical Example
```javascript
const productName = "Wireless Mouse"; // string
const price = 29.99; // number
const inStock = true; // boolean
const discountCode = null; // null (explicitly nothing)
let customerRating; // undefined (not assigned yet)
```

### Common Mistake
```text
Mistake → Confusing null and undefined.
Why it happens → Both represent "no value".
Incorrect code → let user = null; if (user === undefined) { ... }
Correct code → let user = null; if (user === null) { ... }
How to remember → `undefined` is JavaScript's default for "I don't know yet". `null` is the developer's way of saying "I intentionally set this to nothing."
```

---

## 3. Operators
**[ MUST KNOW ]** | *Estimated Time: 60 mins*

### Arithmetic, Assignment, Comparison, Logical
```javascript
// Arithmetic
let total = 10 + 5; // 15
let remainder = 10 % 3; // 1

// Comparison (Strict vs Loose)
console.log(5 == "5");  // true (Loose - checks value)
console.log(5 === "5"); // false (Strict - checks value and type)

// Logical
const isLoggedIn = true;
const hasPremium = false;
console.log(isLoggedIn && hasPremium); // false (AND)
console.log(isLoggedIn || hasPremium); // true (OR)
```

### Nullish Coalescing (`??`) & Optional Chaining (`?.`)
**[ SHOULD KNOW ]**
```javascript
let savedTheme = null;
let defaultTheme = "dark";
// ?? returns the right side if the left is null or undefined
let theme = savedTheme ?? defaultTheme; 
console.log(theme); // "dark"
```

### Common Mistake
```text
Mistake → Using == instead of ===
Why it happens → Forgetting that loose equality performs unpredictable type coercion.
Incorrect code → if (userInput == 0)
Correct code → if (Number(userInput) === 0)
How to remember → Always use === and !==.
```

---

## 4. Type Conversion & Coercion
**[ MUST KNOW ]** | *Estimated Time: 45 mins*

### Implicit Coercion vs Explicit Conversion
```javascript
// Implicit Coercion (JS does it for you - can be dangerous)
let sum = "5" + 2; // "52" (String concatenation)
let diff = "5" - 2; // 3 (Numeric subtraction)

// Explicit Coercion (You do it - safer)
let explicitSum = Number("5") + 2; // 7
```

### Truthy / Falsy
```text
+-------------------+-------------------------------------+
| Falsy Values      | Truthy Values                       |
+-------------------+-------------------------------------+
| false             | true                                |
| 0                 | 1, -1, 42                           |
| "" (empty string) | "hello", "false", "0" (non-empty)   |
| null              | {} (empty object)                   |
| undefined         | [] (empty array)                    |
| NaN               | function(){}                        |
+-------------------+-------------------------------------+
```

---

## 5. Input/Output
**[ SHOULD KNOW ]** | *Estimated Time: 15 mins*

```javascript
console.log("Standard output");
console.warn("Warning output");
console.error("Error output");
// Browser only:
// let name = prompt("What is your name?");
// alert("Hello " + name);
```

---

## 6. Comments
**[ MUST KNOW ]** | *Estimated Time: 10 mins*

```javascript
// This is a single-line comment

/*
  This is a
  multi-line comment.
  Great for documenting complex logic.
*/
```
