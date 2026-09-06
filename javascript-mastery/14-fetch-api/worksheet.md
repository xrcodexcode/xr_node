# Level 14 Worksheet

## Part A — Predict the Output
```javascript
try {
  // API returns a 404 response status
  const res = await fetch('https://httpstat.us/404');
  console.log("Success");
} catch(e) {
  console.log("Error");
}
```
*Hint: Does `fetch` throw an error on 404?*

## Part B — Complete the Code
```javascript
// Generic fetch wrapper
async function fetchJSON(url) {
  const res = await fetch(url);
  // TODO: Check if response is NOT ok, and throw an error with the status code
  // TODO: Return parsed JSON
}
```

## Part C — Write from Scratch
Write an `async` function `updateProfile(id, data)` that sends a `PATCH` request to `https://jsonplaceholder.typicode.com/users/${id}`. Send the `data` object as JSON and return the updated user.

## Part D — Debug
```javascript
// Mistake: Forgetting to await the JSON parsing
async function getUser() {
  const res = await fetch('/api/user');
  const data = res.json();
  console.log(data.name); // undefined! Why?
}
```

## Part E — Modify
Take a standard fetch GET request and add an AbortController so it times out after 1000ms.

## Part F — Challenge
Write a function `fetchWithRetry(url, retries = 3)` that attempts to fetch a URL, and if it fails (network error or non-2xx status), waits 1 second and tries again, up to `retries` times.
