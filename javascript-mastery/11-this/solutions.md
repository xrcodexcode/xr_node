# Level 11 — Solutions

### Exercises

1. "John"
2. `undefined` (in strict mode, `this` in a regular function is undefined)
3. `undefined` (Arrow functions inherit `this` from enclosing scope, which is global here, and global has no `brand`)
4. 10, then 20
5. Fix: Use an arrow function in setTimeout: `setTimeout(() => { ... })`
6. `sum.call({offset: 10}, 5, 5); sum.apply({offset: 10}, [5, 5]);`
7. In a browser environment, it logs the global `length` or undefined depending on environment. Since `callback` is called as a regular function `callback()`, `this` is global/window.
8. "Alice". You cannot re-bind an already bound function!
9. myBind:
```javascript
Function.prototype.myBind = function(context, ...args1) {
  const fn = this;
  return function(...args2) {
    return fn.apply(context, [...args1, ...args2]);
  }
}
```

### Worksheet

**Part A**: 
- "active"
- "global" (or undefined if `var` is not used in a browser)
- "global" (or undefined)

**Part B**:
```javascript
const counter = {
  count: 0,
  increment() {
    setTimeout(() => {
      this.count++;
    }, 1000);
  }
};
```

**Part D**:
```javascript
// Fix: Bind the method in the constructor
this.onClick = this.onClick.bind(this);
// OR use an arrow function for the method
onClick = () => { console.log(`Clicked: ${this.text}`); }
```

**Part F**:
```javascript
function debounce(fn, ms) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args); // Preserve this and args
    }, ms);
  };
}
```
