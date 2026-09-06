# Level 14 Solutions

## Part A — Predict the Output
Output: `"Success"`
*Why:* `fetch()` only rejects on **network errors** (e.g., no internet). It resolves successfully even for 404 or 500 HTTP status codes. You must manually check `response.ok` or `response.status`.

## Part B — Complete the Code
```javascript
async function fetchJSON(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
  return res.json();
}
```

## Part D — Debug
*Why it happens:* `res.json()` returns a Promise, not the actual object immediately.
*Correct code:*
```javascript
async function getUser() {
  const res = await fetch('/api/user');
  const data = await res.json(); // Added await
  console.log(data.name);
}
```
