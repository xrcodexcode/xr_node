# Level 13 Worksheet

## Part A — Predict the Output

```javascript
console.log('1');
setTimeout(() => console.log('2'), 0);
Promise.resolve().then(() => console.log('3'));
console.log('4');
```
*Hint: Think about Call Stack -> Microtask -> Macrotask.*

## Part B — Complete the Code

```javascript
// Function that pauses execution for ms milliseconds
const delay = (ms) => {
  // TODO: Return a promise that resolves after ms
};
```

## Part C — Write from Scratch
Write an `async` function `fetchSequential(urls)` that takes an array of URL strings, fetches them one by one, and returns an array of the results.

## Part D — Debug
```javascript
// Mistake: Forgetting await inside loop
async function getItems(ids) {
  const results = [];
  ids.forEach(async (id) => {
    const data = await fetchItem(id);
    results.push(data);
  });
  return results; // Returns empty array!
}
```

## Part E — Modify
Change `fetchSequential` to `fetchParallel` using `Promise.all`.

## Part F — Challenge
Implement a `throttleAsync(fn, limit)` that ensures `fn` is not running more than `limit` times concurrently.

## Part G — Mini Project
Build a "Fake Data Loader". Create 3 async functions that simulate fetching user profile, posts, and friends. Create a main function that loads user profile first, then loads posts and friends in parallel, measuring total time taken.
