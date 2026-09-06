# Level 10: Exercises

### Exercise 1: Hoisting Predictor
What is logged? Why?
```javascript
console.log(foo);
var foo = 10;
console.log(bar);
let bar = 20;
```

### Exercise 2: Scope Chain
What does this print?
```javascript
let name = "Alice";
function one() {
  let name = "Bob";
  function two() {
    console.log(name);
  }
  two();
}
one();
```

### Exercise 3: Closure Counter
Write a function `createBank()` that takes an initial balance. It returns an object with `deposit(amount)`, `withdraw(amount)`, and `getBalance()`. The balance variable should NOT be accessible directly.

### Exercise 4: Loop Closures
Fix the following code without using `let` (use an IIFE - Immediately Invoked Function Expression).
```javascript
for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, 100);
}
```

*(...21 more exercises on execution context, TDZ, and advanced closures)*
