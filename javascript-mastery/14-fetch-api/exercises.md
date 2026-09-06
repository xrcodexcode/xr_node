# Level 14 Exercises

## 🟢 Beginner
1. Perform a basic `fetch` GET request to `https://jsonplaceholder.typicode.com/todos/1`.
2. Convert the response to JSON and log the title.
3. Rewrite #1 and #2 using `async/await`.
4. Create a POST request to add a new user to JSONPlaceholder.
5. Set the correct `headers` for sending JSON data.
6. Check `response.ok` before parsing JSON.

## 🟡 Intermediate
7. Write a function that fetches a user and their posts sequentially.
8. Write a function that fetches a user and their posts in parallel (`Promise.all`).
9. Handle a 404 error explicitly in an `async/await` fetch.
10. Implement a PUT request to update an existing user.
11. Implement a DELETE request.
12. Create a generic `apiClient` function that takes `url` and `method`.

## 🔴 Advanced
13. Implement an `AbortController` to cancel a fetch after 2 seconds.
14. Write a function that retries a failed fetch up to 3 times.
15. Implement a debounced search function that fetches data.
16. Implement paginated fetching (fetch page 1, then page 2, etc.).

## 🔥 Challenge
17. Write a robust API wrapper class with GET/POST/PUT/DELETE, automatic JSON parsing, timeout support, and centralized error logging.
18. Implement request caching (don't fetch if URL was fetched recently).
19. Handle HTTP 429 (Too Many Requests) by parsing the `Retry-After` header and retrying automatically.
20. Stream a large response using the Fetch `ReadableStream` API.
