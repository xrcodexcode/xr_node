# Level 13 Cheat Sheet: Async JavaScript

| Concept | Syntax / Example | Notes |
|---|---|---|
| **Promise Creation** | `new Promise((res, rej) => {})` | Creates a new Promise |
| **Promise Consumption**| `.then(cb).catch(cb).finally(cb)` | Handles resolution/rejection |
| **async/await** | `async () => { const x = await p; }`| Syntactic sugar for Promises |
| **Promise.all** | `Promise.all([p1, p2])` | Fails fast, waits for all |
| **Promise.allSettled** | `Promise.allSettled([p1, p2])` | Never fails fast, gets statuses |
| **Promise.race** | `Promise.race([p1, p2])` | First to settle wins |
| **Promise.any** | `Promise.any([p1, p2])` | First to resolve wins |

### Event Loop Rule of Thumb:
1. Run synchronous code in Call Stack.
2. Run all Microtasks (Promises).
3. Run one Macrotask (setTimeout, DOM events), then check Microtasks again.
