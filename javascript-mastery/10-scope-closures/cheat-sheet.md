# Level 10: Cheat Sheet (Scope, Execution & Closures)

## Scope Rules
- **Global:** Available anywhere.
- **Function:** Variables declared with `var`, `let`, `const` inside a function. Available inside that function.
- **Block:** Variables declared with `let`, `const` inside `{}` (if, for, while). Available ONLY in that block.

## Hoisting
- **Function Declarations:** Completely hoisted. Can call before defining.
- **`var`:** Hoisted but initialized to `undefined`.
- **`let` / `const`:** Hoisted but NOT initialized (Temporal Dead Zone).

## Closures
A function combined with its lexical environment. It "remembers" the variables from the place where it was defined.
```javascript
function outer() {
  let count = 0; // The closure remembers this
  return function inner() {
    count++;
    return count;
  }
}
const myCounter = outer();
myCounter(); // 1
```

## The Loop Problem (`var` vs `let`)
When using async code (like `setTimeout`) in a loop:
- `var` will cause the callback to reference the final value of the loop variable.
- `let` will bind a fresh block-scoped variable for each iteration, correctly capturing the value.
