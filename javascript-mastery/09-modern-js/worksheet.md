# Level 9 Worksheet

## Part A: Predict the Output (Do not run the code!)
```javascript
// 1
const arr = [10, 20, 30];
const [x, ...y] = arr;
console.log(y); // ?

// 2
const obj = { a: 1, b: 2 };
const { a, c = 3 } = obj;
console.log(a, c); // ?

// 3
const val = 0 ?? 42;
console.log(val); // ?
```

## Part B: Complete the Code
```javascript
// Use object shorthand and computed properties
const keyName = 'id';
const user = {
  // complete here
};
```

## Part C: Write from Scratch
Write a class `Product` with `name` and `price`. Write a subclass `DiscountedProduct` that takes `discount` and has a `getFinalPrice()` method.

## Part D: Debug
```javascript
// Broken
const multiply = (x, y) => { x * y };
```

## Part E: Modify
Change the function to use default parameters instead of `||`.
```javascript
function greet(name) {
  name = name || 'Stranger';
  return `Hi ${name}`;
}
```

## Part F: Challenge
Given an array of objects representing nested folder structures, use destructuring, recursion, and optional chaining to extract all file paths.

## Part G: Mini Project
Build a simple cart system using a `Cart` class. Implement methods for `addItem(item)`, `removeItem(id)`, and `getTotal()`. Use modern array methods, arrow functions, and destructuring heavily.
