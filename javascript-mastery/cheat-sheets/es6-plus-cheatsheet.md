# ES6+ Quick Reference Cheat Sheet

## 1. Let & Const (Block Scoped)
- `const`: Constant reference (use by default).
- `let`: Reassignable variable.
- Stop using `var`.

## 2. Arrow Functions
Lexical `this`, concise syntax.
```javascript
const add = (a, b) => a + b;
```

## 3. Template Literals
Multi-line strings and interpolation.
```javascript
const str = `Result is ${add(2, 2)}`;
```

## 4. Destructuring Assignment
Extract values into variables easily.
```javascript
// Arrays
const [first, second] = [10, 20];

// Objects
const { name, age } = { name: "Bob", age: 30 };
```

## 5. Spread Operator (`...`)
Expands arrays/objects.
```javascript
const arr2 = [...arr1, 4, 5];
const obj2 = { ...obj1, newProp: true };
```

## 6. Rest Parameters (`...`)
Condenses multiple arguments into an array.
```javascript
function sum(...nums) { /* nums is an array */ }
```

## 7. Default Parameters
```javascript
function greet(name = "Guest") { }
```

## 8. Object Property Shorthand
```javascript
const age = 30;
const person = { age }; // { age: 30 }
```

## 9. Modules (ESM)
```javascript
// util.js
export const helper = () => {};

// app.js
import { helper } from './util.js';
```

## 10. Optional Chaining (`?.`)
Safely access nested properties.
```javascript
const zip = user?.address?.zipCode;
```

## 11. Nullish Coalescing (`??`)
Fallback for `null`/`undefined` only.
```javascript
const count = 0 ?? 10; // count is 0
```

## 12. Promises & Async/Await
Cleaner asynchronous code.
```javascript
async function doTask() {
  const result = await somePromise;
}
```
