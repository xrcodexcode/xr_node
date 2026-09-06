# Level 18 — Advanced JavaScript

## 1. Closures & Patterns
A closure is a function that remembers its outer variables even after the outer function has finished executing.

**Use Case: Module Pattern**
```js
const createCounter = () => {
  let count = 0; // Private state
  return {
    increment: () => ++count,
    getCount: () => count
  };
};
```

## 2. Functional Programming Patterns
### Currying
Transforming a function that takes multiple arguments into a chain of functions that each take a single argument.
```js
const multiply = a => b => c => a * b * c;
```

### Composition
Combining multiple functions into one.
```js
const compose = (f, g) => x => f(g(x));
```

## 3. Memoization
Caching function results to optimize expensive operations.
```js
function memoize(fn) {
  const cache = new Map();
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}
```

## 4. Debouncing & Throttling
- **Debounce:** Wait `n` ms after the last call before executing. Useful for search inputs.
- **Throttle:** Execute at most once every `n` ms. Useful for scroll events.

## 5. Generators & Iterators
Generators (`function*`) can pause execution and yield values lazily.
```js
function* idMaker() {
  let index = 0;
  while (true) yield index++;
}
```

## 6. Advanced Data Structures
- **Map:** Key-value pairs where keys can be *any* type (not just strings).
- **Set:** Collection of unique values.
- **WeakMap/WeakSet:** Don't prevent garbage collection if the only reference to an object is in the WeakMap.

## 7. Proxy & Reflect
Intercept and redefine fundamental operations (like property lookup).
```js
const target = {};
const proxy = new Proxy(target, {
  get: (obj, prop) => prop in obj ? obj[prop] : 'Not Found!'
});
```
