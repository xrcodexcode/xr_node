# Level 19 — Cheat Sheet

### Big O Notation (Complexity)
- **O(1)**: Constant. Map lookup, Array index access. `map.get('key')`, `arr[0]`
- **O(log n)**: Logarithmic. Binary search.
- **O(n)**: Linear. Loops, `.forEach`, `.map`.
- **O(n log n)**: Linearithmic. Sorting `.sort()`.
- **O(n²)**: Quadratic. Nested loops `for(.. for(..))`.

### DOM Optimization Checklist
1. Use **DocumentFragment** for multiple append operations.
2. Avoid `.innerHTML += ...` in loops.
3. Batch style changes by adding a CSS class instead of setting `el.style` multiple times.
4. Cache DOM queries: `const btn = document.getElementById('btn');` instead of querying it every time.
5. Use **Event Delegation** for multiple similar children.

### Memoization Pattern
```javascript
const memoize = (fn) => {
  const cache = {};
  return (...args) => {
    const key = JSON.stringify(args);
    if (key in cache) return cache[key];
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
};
```
