# Level 18 Worksheet

## Part A — Predict the Output
```js
let count = 0;
const increment = () => ++count;
console.log(increment());
console.log(increment());
// Prediction: ?
```

## Part B — Complete the Code
```js
// Complete the debounce function
function debounce(fn, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(_______);
    timeoutId = setTimeout(() => {
      fn.apply(this, ____);
    }, ______);
  };
}
```

## Part C — Write from Scratch
Write a Proxy that logs every property access on an object.

## Part D — Debug
```js
const map = new Map();
map.set({}, 'Value 1');
map.set({}, 'Value 2');
console.log(map.size); // Why is this 2 instead of 1? How to fix it if we wanted 1?
```

## Part E — Challenge
Write a generator that produces the Fibonacci sequence infinitely.
