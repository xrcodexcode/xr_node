# Level 10 Worksheet

## Part A: Predict the Output (Execution & Scope)
```javascript
// 1.
let x = 10;
function test() {
  console.log(x);
  let x = 20;
}
test();

// 2.
var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a);

// 3.
function outer() {
  let count = 0;
  return () => count++;
}
const fn1 = outer();
const fn2 = outer();
fn1(); fn1();
console.log(fn2());
```

## Part B: Complete the Code
Implement memoization using a closure.
```javascript
function memoize(fn) {
  // cache goes here
  return function(...args) {
    // logic here
  }
}
```

## Part C: Write from Scratch
Write a `rateLimiter(limit, timeframe)` closure that returns a function. Calling the returned function should return `true` if called under the limit, and `false` otherwise.

## Part D: Debug
```javascript
function setupButtons() {
  var buttons = [];
  for (var i = 0; i < 3; i++) {
    buttons.push(function() {
      console.log("Button " + i);
    });
  }
  return buttons;
}
const btns = setupButtons();
btns[0](); // Expected "Button 0", actually prints "Button 3"
```

## Part E: Modify
Refactor a class-based counter into a factory function returning a closure to enforce true privacy.

## Part F: Challenge
Create a function `pipe(...fns)` that uses closures to return a new function that passes its input through all provided functions sequentially.

## Part G: Mini Project
Build a state management system (like a simplified Redux store) using closures. It needs `getState()`, `dispatch(action)`, and `subscribe(listener)` methods.
