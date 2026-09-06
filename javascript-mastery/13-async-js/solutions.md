# Level 13 Solutions

## Part A — Predict the Output
Output: `1, 4, 3, 2`
Trace:
1. `1` is logged (Call stack)
2. `setTimeout` goes to Web APIs -> Macrotask queue.
3. `Promise.resolve` goes to Microtask queue.
4. `4` is logged (Call stack).
5. Call stack empty. Event loop checks Microtask queue -> logs `3`.
6. Event loop checks Macrotask queue -> logs `2`.

## Part B — Complete the Code
```javascript
const delay = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};
```

## Part D — Debug
*Why it happens:* `forEach` does not wait for promises. It fires them all off and immediately finishes.
*Correct code:*
```javascript
async function getItems(ids) {
  const results = [];
  for (const id of ids) {
    const data = await fetchItem(id);
    results.push(data);
  }
  return results;
}
```
