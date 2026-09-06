# Level 10: Solutions

### Exercise 1
Logs `undefined` then `ReferenceError`.
`var foo` is hoisted and initialized as undefined. `let bar` is hoisted but stays in the TDZ, causing an error when accessed before declaration.

### Exercise 2
Logs `Bob`.
`two()` looks for `name` in its own scope (not found). It goes up the scope chain to `one()`'s scope, finds `let name = "Bob"` and uses it. It doesn't need to check the global scope.

### Exercise 3
```javascript
function createBank(initialBalance) {
  let balance = initialBalance;
  return {
    deposit: (amount) => balance += amount,
    withdraw: (amount) => balance -= amount,
    getBalance: () => balance
  };
}
```

### Exercise 4
```javascript
for (var i = 0; i < 5; i++) {
  (function(j) {
    setTimeout(function() {
      console.log(j);
    }, 100);
  })(i);
}
```

## Worksheet Solutions

### Part A: Predict the Output
1. **ReferenceError:** `test()` creates its own scope. `let x = 20` hoists `x` to the top of `test()` in the TDZ. The `console.log(x)` tries to access it before initialization.
2. **`1`:** Inside `b()`, `function a() {}` is hoisted to the top of `b`. When `a = 10` executes, it overwrites the local `a` function, not the global `a`. The global `a` remains `1`.
3. **`0`:** `fn1` and `fn2` are separate closures. `fn1` is called twice, its internal count becomes 2. `fn2` is called once, it prints its own count which is `0`.

### Part B
```javascript
function memoize(fn) {
  const cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache[key]) return cache[key];
    const result = fn(...args);
    cache[key] = result;
    return result;
  }
}
```

### Part D Debug Fix
```javascript
function setupButtons() {
  var buttons = [];
  for (let i = 0; i < 3; i++) { // Changed var to let
    buttons.push(function() {
      console.log("Button " + i);
    });
  }
  return buttons;
}
```
