# Level 14: Fetch API & APIs

## 1. HTTP Fundamentals
- **API (Application Programming Interface)**: A way for programs to talk to each other.
- **Request/Response**: The client sends an HTTP Request; the server sends an HTTP Response.
- **Methods**:
  - `GET`: Retrieve data.
  - `POST`: Create data.
  - `PUT`/`PATCH`: Update data.
  - `DELETE`: Remove data.
- **Status Codes**:
  - `2xx`: Success (`200 OK`, `201 Created`)
  - `4xx`: Client Error (`400 Bad Request`, `401 Unauthorized`, `404 Not Found`)
  - `5xx`: Server Error (`500 Internal Server Error`)

## 2. Fetch API Basics

### GET Request
```javascript
fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => {
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    return res.json();
  })
  .then(data => console.log(data))
  .catch(err => console.error("Network or parsing error", err));
```

### POST Request
```javascript
async function createUser(user) {
  const response = await fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  });
  const data = await response.json();
  return data;
}
```

## 3. Advanced Fetch Patterns

### Canceling a Request (AbortController)
```javascript
const controller = new AbortController();
setTimeout(() => controller.abort(), 5000); // Timeout after 5s

fetch('https://api.example.com/data', { signal: controller.signal })
  .catch(err => {
    if (err.name === 'AbortError') console.log('Request timed out');
  });
```

### Async/Await Error Handling Wrapper
```javascript
async function apiCall(url, options) {
  try {
    const res = await fetch(url, options);
    if (!res.ok) throw new Error(`Status: ${res.status}`);
    return { data: await res.json(), error: null };
  } catch (error) {
    return { data: null, error: error.message };
  }
}
```
