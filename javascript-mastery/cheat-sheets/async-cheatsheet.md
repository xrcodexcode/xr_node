# Async JS & APIs Cheat Sheet

## Promises
A Promise represents the eventual completion (or failure) of an asynchronous operation.
States: `Pending` -> `Fulfilled` (Resolved) OR `Rejected`.

### Creating a Promise
```javascript
const myPromise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("Data fetched");
  } else {
    reject("Error occurred");
  }
});
```

### Consuming a Promise (.then / .catch)
```javascript
myPromise
  .then(data => console.log(data))
  .catch(err => console.error(err))
  .finally(() => console.log("Done regardless"));
```

## Async / Await (Syntactic Sugar for Promises)
Makes asynchronous code look synchronous.

```javascript
async function getData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Fetch failed:", error);
  }
}
```

## Fetch API
Used to make network requests. `fetch` returns a Promise.

### GET Request
```javascript
fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => {
    if (!res.ok) throw new Error("Network response was not ok");
    return res.json();
  })
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

### POST Request
```javascript
async function createUser(userObj) {
  const response = await fetch("https://api.example.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userObj)
  });
  return await response.json();
}
```

## Promise Combinators

### Promise.all()
Waits for ALL promises to resolve. Rejects if ANY promise rejects.
```javascript
const [users, posts] = await Promise.all([
  fetch("/users").then(r => r.json()),
  fetch("/posts").then(r => r.json())
]);
```

### Promise.race()
Returns as soon as the FIRST promise resolves OR rejects.

### Promise.allSettled()
Waits for all promises to finish, regardless of success/failure. Returns array of objects with status and value/reason.

## Web Storage API (Local vs Session)
Synchronous API to store data in the browser. Must be strings.

```javascript
// LocalStorage (Persists until explicitly deleted)
localStorage.setItem("token", "12345");
const token = localStorage.getItem("token");
localStorage.removeItem("token");
localStorage.clear();

// Storing Objects (requires JSON parsing)
localStorage.setItem("user", JSON.stringify({ name: "Jon" }));
const user = JSON.parse(localStorage.getItem("user"));

// SessionStorage (Cleared when tab/window is closed)
sessionStorage.setItem("temp", "data");
```
