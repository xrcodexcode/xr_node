# Level 13: Asynchronous JavaScript

## 1. The Runtime Model

JavaScript is **single-threaded**, meaning it executes one operation at a time. To handle long-running operations like network requests or file reads without blocking the main thread, JavaScript uses an **asynchronous** model powered by the Event Loop.

### Call Stack, Web APIs, and Queues

```text
+-----------------------+     +-----------------------+
|      Call Stack       |     |       Web APIs        |
|                       |     | (DOM, setTimeout,     |
| [ functionB()      ]  |---->|  fetch, etc.)         |
| [ functionA()      ]  |     +-----------------------+
| [ global execution ]  |                |
+-----------------------+                v
           ^                  +-----------------------+
           |                  |   Callback Queue      |
           |                  |  [ callback1() ]      |
      Event Loop              +-----------------------+
           |                  +-----------------------+
           |------------------|   Microtask Queue     |
                              |  [ promise.then() ]   |
                              +-----------------------+
```

1. **Call Stack**: Where code is executed.
2. **Web APIs**: Browser environments handle async tasks (like `setTimeout`) in the background.
3. **Macrotask Queue (Callback Queue)**: Holds callbacks from `setTimeout`, DOM events, etc.
4. **Microtask Queue**: Holds callbacks from Promises and `queueMicrotask`. **Higher priority** than the Macrotask queue.
5. **Event Loop**: Continuously checks if the Call Stack is empty. If empty, it pushes tasks from the Microtask Queue first, then the Macrotask Queue to the Call Stack.

## 2. Callbacks
A function passed to another function to be executed later.

```javascript
// Callback Hell / Pyramid of Doom
getUser(id, (user) => {
  getPosts(user.username, (posts) => {
    getComments(posts[0].id, (comments) => {
      console.log(comments);
    });
  });
});
```

## 3. Promises
A Promise represents the eventual completion (or failure) of an asynchronous operation.
States: `Pending` -> `Fulfilled` or `Rejected`

```text
        +------------+
        |  Pending   |
        +------------+
         /          \
  resolve()        reject()
     /                \
+-----------+    +------------+
| Fulfilled |    |  Rejected  |
+-----------+    +------------+
```

```javascript
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Data loaded!"), 1000);
});

myPromise
  .then(data => console.log(data))
  .catch(error => console.error(error))
  .finally(() => console.log("Done"));
```

### Promise Static Methods
- `Promise.all([p1, p2])`: Fails if *any* fail. Resolves when *all* resolve.
- `Promise.allSettled([p1, p2])`: Resolves when all finish, regardless of success.
- `Promise.race([p1, p2])`: Resolves/rejects with the *first* one to finish.
- `Promise.any([p1, p2])`: Resolves with the *first* one to succeed.

## 4. async / await
Syntactic sugar over Promises.

```javascript
async function fetchUserData() {
  try {
    const user = await getUser();
    const posts = await getPosts(user.id);
    return posts;
  } catch (error) {
    console.error("Failed:", error);
  }
}
```
