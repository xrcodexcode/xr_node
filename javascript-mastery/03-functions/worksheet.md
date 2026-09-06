# Level 3 — Functions Worksheet

## Part A: Predict the Output (12)
1.
```javascript
let x = 10;
function foo() {
  let x = 20;
  console.log(x);
}
foo();
console.log(x);
```
2.
```javascript
const add = (a) => (b) => a + b;
console.log(add(5)(3));
```
*(and 10 more problems covering hoisting, closures, and side-effects)*

## Part B: Complete the Code (10)
Fill in the blanks:
```javascript
// A function that returns a greeting
const greet = (name) ___ {
  ___ `Hello ${name}`;
}
```

## Part C: Write from Scratch (10)
Write a function `sumNumbers` that takes any number of arguments and returns the sum.
*(and 9 more)*

## Part D: Debug (10)
Identify and fix the bug:
```javascript
function getDetails() {
  return
  {
    name: "John"
  };
}
```

## Part E: Modify (5)
Modify this function to use default parameters instead of `||`.
```javascript
function setup(options) {
  let config = options || {};
}
```

## Part F: Challenge (5)
Build a recursive function that counts the total number of files in a nested directory object structure.

## Part G: Mini Project
**Utility Library**
Build a utility module (using closures) containing these functions:
- `isString(val)`
- `chunkArray(arr, size)`
- `randomInt(min, max)`
- `capitalize(str)`
- `pluck(arr, key)`
