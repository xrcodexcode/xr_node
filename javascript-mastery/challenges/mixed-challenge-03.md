# Mixed Challenge 03 (Levels 13-16)

**Concepts Covered:** Async/Await, API Fetching, Error Handling & Debugging, ES Modules.

## The Challenge

You are building a weather dashboard that fetches data from multiple APIs. The codebase is broken, unorganized, and fails silently.

### Setup (Mental Model)
Imagine this file structure:
- `api.js` (Handles fetches)
- `parser.js` (Formats data)
- `app.js` (Main UI logic)

### Problems (1-15)

**1. Modularize API Call:** Extract `fetchWeather(city)` into `api.js` and export it as a named export.
**2. Import Syntax:** In `app.js`, import `fetchWeather` from `api.js` correctly.
**3. Async Error Handling:** Inside `fetchWeather`, wrap the `fetch` call in a try/catch.
**4. Custom Errors:** If `response.status === 404`, throw a custom `NotFoundError`.
**5. Promise.all:** Write a function `compareWeather(cityA, cityB)` that fetches both simultaneously using `Promise.all`.
**6. Default Export:** Export `compareWeather` as the default export of a new file `compare.js`.
**7. Debugging:** Why does `await Promise.all([fetchWeather('NYC'), fetchWeather('Unknown')])` fail completely if one city is invalid? Fix it using `Promise.allSettled`.
**8. Re-exporting:** Create an `index.js` barrel file that exports everything from `api.js` and `compare.js`.
**9. JSON Parsing Error:** Data from the API sometimes contains trailing commas causing `JSON.parse` to fail. Write a safe parser in `parser.js` that catches `SyntaxError` and returns `null`.
**10. Dynamic Import:** In `app.js`, dynamically import an `analytics.js` script only if the user clicks a "View Stats" button.
**11. Finally Block:** Ensure that a `loading = false` state is set regardless of whether `fetchWeather` succeeds or fails.
**12. Circular Dependency:** `api.js` imports a logging function from `app.js`, and `app.js` imports `api.js`. Refactor the logger into a separate `logger.js` module.
**13. Network Timeout:** Implement a timeout feature in `fetchWeather`. If the fetch takes longer than 5 seconds, throw a `TimeoutError`.
**14. Browser Module Setup:** Write the HTML `<script>` tag required to run `app.js` as an ES module.
**15. Advanced Debugging:** You have an async function inside a `.forEach` loop. Why doesn't the surrounding code wait for the loop to finish? Rewrite it using a `for...of` loop.

---

## Solutions

### 1 & 2
```javascript
// api.js
export const fetchWeather = async (city) => {
  return { city, temp: 20 };
};

// app.js
import { fetchWeather } from './api.js';
```

### 3 & 4
```javascript
// api.js
class NotFoundError extends Error {}

export const fetchWeather = async (city) => {
  try {
    const res = await fetch(`https://api.weather.com/${city}`);
    if (res.status === 404) throw new NotFoundError("City not found");
    return await res.json();
  } catch (err) {
    console.error(err);
    throw err;
  }
}
```

### 5 & 6
```javascript
// compare.js
import { fetchWeather } from './api.js';

export default async function compareWeather(cityA, cityB) {
  return await Promise.all([fetchWeather(cityA), fetchWeather(cityB)]);
}
```

### 7
`Promise.all` fails fast if any promise rejects. `Promise.allSettled` waits for all and returns statuses.
```javascript
const results = await Promise.allSettled([fetchWeather('NYC'), fetchWeather('Unknown')]);
```

### 8
```javascript
// index.js
export * from './api.js';
export { default as compareWeather } from './compare.js';
```

### 9
```javascript
// parser.js
export const safeParse = (jsonStr) => {
  try {
    return JSON.parse(jsonStr);
  } catch (e) {
    if (e instanceof SyntaxError) return null;
    throw e;
  }
}
```

### 10
```javascript
button.addEventListener('click', async () => {
  const analytics = await import('./analytics.js');
  analytics.trackEvent();
});
```

### 11
```javascript
try {
  loading = true;
  await fetchWeather();
} catch (e) {
  // handle
} finally {
  loading = false; // Always runs
}
```

### 13
```javascript
const fetchWithTimeout = async (url, ms) => {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), ms);
  
  try {
    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(id);
    return res;
  } catch (err) {
    if (err.name === 'AbortError') throw new Error("TimeoutError");
    throw err;
  }
}
```

### 14
```html
<script type="module" src="app.js"></script>
```

### 15
`.forEach` is not promise-aware.
```javascript
// Broken
// cities.forEach(async city => await fetchWeather(city)); 

// Fixed
for (const city of cities) {
  await fetchWeather(city);
}
```
