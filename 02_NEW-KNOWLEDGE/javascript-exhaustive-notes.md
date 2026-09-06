# JavaScript Exhaustive Reference

> *A comprehensive, organized cheat‑sheet for modern JavaScript (ES2024).*

---

## 📚 Introduction
JavaScript (often abbreviated **JS**) is a high‑level, dynamic, prototype‑based language that powers the web and increasingly runs on servers, desktop, and embedded platforms. This document captures the core language features, advanced patterns, and modern additions up to **ES2024**, with concise explanations and runnable examples.

---

## 🕰️ Historical Timeline
| Year | Spec | Notable Feature |
|------|------|-----------------|
| 1995 | **ES1** | First edition, basic syntax, `alert` API |
| 1997 | **ES2** | Minor editorial fixes |
| 1999 | **ES3** | `try/catch`, `strict mode` (later) |
| 2009 | **ES5** | `Object.defineProperty`, `Array` methods (`forEach`, `map`), `strict mode` (formal) |
| 2015 | **ES6 / ES2015** | `let/const`, arrow functions, classes, modules, `Promise`, `template literals` |
| 2016‑2024 | **ES2016‑ES2024** | Incremental features: `async/await`, `BigInt`, optional chaining, top‑level `await`, private fields, logical assignment, `WeakRef`, etc |

---

## 🔤 Primitive Types
| Type | Description | Literal Example |
|------|-------------|----------------|
| `Number` | IEEE‑754 double‑precision floating‑point | `42`, `3.14`, `NaN`, `Infinity` |
| `String` | Immutable sequence of UTF‑16 code units | `'hello'`, `"world"` |
| `Boolean` | Logical true/false | `true`, `false` |
| `Symbol` | Unique identifier, optionally with description | `Symbol('id')` |
| `BigInt` | Arbitrary‑precision integer | `123n`, `9007199254740991n` |
| `undefined` | Uninitialized variable or missing property | `let x; // x === undefined` |
| `null` | Intentional absence of any object value | `let y = null;` |

> **Tip:** Use `typeof` for runtime checks, but remember `typeof null === "object"` (legacy quirk).

---

## 📦 Objects & Property Descriptors
```js
const person = {
  name: 'Ada',
  age: 28,
};

// Property descriptor example
Object.defineProperty(person, 'age', {
  writable: false, // makes it read‑only
  configurable: false,
});
```

- **Prototype chain:** every object has an internal `[[Prototype]]` (`__proto__`), accessible via `Object.getPrototypeOf(obj)`. Methods are usually looked up on the prototype.
- **Enum vs non‑enum:** `enumerable: false` hides keys from `for…in` and `Object.keys`.
- **`Object.create(proto, descriptors?)`** creates a new object with a specific prototype.

---

## 🛠️ Functions
### Declaration vs Expression
```js
// Declaration – hoisted
function add(a, b) { return a + b; }

// Expression – not hoisted
const mul = function(a, b) { return a * b; };
```

### Arrow Functions
- Lexical `this` binding (no own `this`, `arguments`, `new.target`).
- Implicit returns for single‑expression bodies.
```js
const squares = [1,2,3].map(x => x * x);
```

### Default & Rest Parameters
```js
function greet(name = 'World', ...extras) {
  console.log(`Hello, ${name}!`, extras);
}
```

### `this` Binding Rules
| Call Type | `this` Value |
|-----------|--------------|
| Simple call | Global object (`undefined` in strict mode) |
| Method call (`obj.fn()`) | `obj` |
| `call`/`apply`/`bind` | Provided argument |
| Arrow function | Lexical `this` from surrounding scope |

---

## 📍 Scope & Hoisting
- **`var`** – function‑scoped, hoisted (initialized as `undefined`).
- **`let` / `const`** – block‑scoped, temporal dead zone (TDZ) until evaluated.
- **Function hoisting** – entire function body is hoisted, allowing calls before definition.

```js
console.log(a); // undefined (var hoisted)
var a = 1;

console.log(b); // ReferenceError (TDZ)
let b = 2;
```

---

## 🔒 Closures
A closure captures variables from its lexical environment.
```js
function makeCounter() {
  let count = 0;
  return () => ++count; // inner arrow retains `count`
}
const inc = makeCounter();
inc(); // 1
inc(); // 2
```
Closures enable data privacy, partial application, and function factories.

---

## 📜 Execution Context & Call Stack
- **Execution Context** holds **Variable Environment**, **Lexical Environment**, and **`this` binding**.
- **Call Stack**: each function call creates a new context, popped when execution finishes.
- **Strict mode** (`'use strict'`) disables sloppy defaults (e.g., implicit globals).

---

## ⏱️ Event Loop, Tasks & Microtasks
1. **Macrotasks** (a.k.a. tasks): `setTimeout`, `setInterval`, I/O, UI rendering.
2. **Microtasks**: `Promise` callbacks, `queueMicrotask`, `MutationObserver`.
3. **Order**: After a macrotask finishes, the engine empties the microtask queue before the next macrotask.

```js
console.log('script start');
setTimeout(() => console.log('macrotask'), 0);
Promise.resolve().then(() => console.log('microtask'));
console.log('script end');
// Output: script start → script end → microtask → macrotask
```

---

## ⚠️ Error Handling
```js
try {
  // code that may throw
} catch (err) {
  console.error('Caught:', err);
} finally {
  // cleanup, always runs
}
```
- **Custom errors:** `class MyError extends Error {}`
- **`Promise` rejection handling:** `catch` or `await try/catch`.
- **`window.onerror` / `process.on('uncaughtException')`** for global handlers.

---

## 🏗️ Advanced Features
### Classes (ES6)
```js
class Animal {
  constructor(name) { this.name = name; }
  speak() { console.log(`${this.name} makes a noise.`); }
}

class Dog extends Animal {
  #secret = 'bark'; // private field (ES2022)
  speak() { console.log(`${this.name} barks.`); }
  getSecret() { return this.#secret; }
}

const fido = new Dog('Fido');
 fido.speak(); // Fido barks.
```
- `static` methods/fields belong to the class, not instances.
- Private fields (`#name`) are truly encapsulated.

### Modules (ES2020+) 
```js
// utils.mjs
export function sum(...nums) { return nums.reduce((a,b)=>a+b,0); }
export const PI = Math.PI;
export default class Circle { constructor(r){ this.r=r; } area(){ return PI*this.r**2; } }
```
```js
// main.mjs
import Circle, { sum, PI } from './utils.mjs';
console.log(sum(1,2,3)); // 6
console.log(PI);
const c = new Circle(2);
console.log(c.area()); // ~12.566
```
- **Dynamic import:** `const module = await import('./foo.js');`
- Node.js distinguishes **CommonJS** (`require`, `module.exports`) from **ESM**.

### Async / Await (ES2017)
```js
async function fetchJson(url) {
  const resp = await fetch(url);
  if (!resp.ok) throw new Error('Network error');
  return resp.json();
}
```
- `await` only works inside `async` functions (or top‑level `await` in modules).
- Errors propagate like normal `try/catch`.

### Generators & Iterators
```js
function* range(n) {
  for (let i = 0; i < n; ++i) yield i;
}
for (const i of range(5)) console.log(i); // 0..4
```
- `Iterator` protocol: `{ next(): { value, done } }`.
- `async function*` yields promises, enabling async iteration (`for await …`).

### Proxy & Reflect
```js
const target = {};
const handler = {
  get(obj, prop) {
    console.log(`Getting ${prop}`);
    return Reflect.get(obj, prop);
  },
};
const p = new Proxy(target, handler);
 p.foo = 42; // Setting works normally
 console.log(p.foo); // logs "Getting foo" then 42
```
- Use for validation, lazy properties, virtualization.

### Collections
| Collection | Characteristics |
|-----------|-----------------|
| `Map` | Ordered key‑value, any value type as key |
| `WeakMap` | Keys must be objects, held weakly (GC‑eligible) |
| `Set` | Unique values |
| `WeakSet` | Weakly held objects |

### Typed Arrays & `ArrayBuffer`
```js
const buffer = new ArrayBuffer(8); // 8 bytes
const view = new Uint32Array(buffer); // 2 unsigned 32‑bit ints
view[0] = 0xdeadbeef;
```
Useful for binary protocols, WebGL, crypto.

### Internationalization (`Intl`)
```js
const fmt = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' });
console.log(fmt.format(1234.5)); // "1.234,50 €"
```
Provides locale‑aware number, date, plural, list formatting.

---

## 🧩 Common Patterns
### Module Pattern (IIFE)
```js
const Counter = (function() {
  let count = 0; // private
  return {
    inc() { ++count; },
    get() { return count; }
  };
})();
```
### Factory Function
```js
function createUser(name) {
  return { name, greet() { console.log(`Hi, ${this.name}`); } };
}
```
### Singleton (ES6 Module)
A module file that exports a single instance is a singleton by virtue of the module cache.
### Observer / Pub‑Sub
```js
class PubSub {
  #subscribers = new Map();
  subscribe(event, fn) {
    if (!this.#subscribers.has(event)) this.#subscribers.set(event, []);
    this.#subscribers.get(event).push(fn);
  }
  publish(event, data) {
    (this.#subscribers.get(event) || []).forEach(fn => fn(data));
  }
}
```
---

## 📦 Modern ECMAScript (ES2020‑2024) Highlights
| Feature | Syntax | Brief Use |
|---------|--------|----------|
| Nullish Coalescing | `a ?? b` | Fallback only when `a` is `null` or `undefined` |
| Optional Chaining | `obj?.prop?.[expr]` | Safe navigation through possibly‑null values |
| Logical Assignment | `a &&= b` | Combine logical test with assignment |
| `Promise.allSettled` | `Promise.allSettled([p1,p2])` | Resolve when *all* promises settle, regardless of rejection |
| `BigInt` | `123n` | Arbitrary‑precision integer arithmetic |
| Dynamic `import()` | `await import('./mod.js')` | Lazy load modules (code‑splitting) |
| Top‑level `await` | `await fetch(...)` at module root | Simplifies scripts that need async initialization |
| Private Class Elements | `#field`, `#method()` | true encapsulation within class body |
| `String.prototype.matchAll` | `'a1 b2'.matchAll(/\d/g)` | Returns iterator of all matches with capture groups |
| `WeakRef` & `FinalizationRegistry` | `new WeakRef(obj)` | Allows weak references, useful for caches |
| `Temporal` (proposal) | `Temporal.Now.plainDateISO()` | Modern date‑time API (stage 3, not final) |
| Decorators (stage 2) | `@readonly class X {}` | Meta‑programming for classes & fields |
---

## ⚡ Performance Tips
- **Prefer native array methods** (`map`, `filter`, `reduce`) over manual loops; they are highly optimized.
- **Avoid unnecessary allocations** in hot loops (e.g., reuse a single array instead of `new Array()` each iteration).
- **Debounce / throttle** high‑frequency events (scroll, resize) using `requestAnimationFrame` or timers.
- **Use `let`/`const`** to enable JavaScript engine optimizations (no accidental re‑assignments).
- **Cache DOM lookups** (`const btn = document.querySelector('#btn')`).
- **Immutable data patterns** (`Object.freeze`) can help V8’s hidden‑class optimizations.
- **Profile with Chrome DevTools** → `Performance` tab → identify long tasks and layout thrash.

---

## 🔐 Security Considerations
- **Never use `eval`** on untrusted input. Prefer safe parsers (`JSON.parse`) or sandboxed Workers.
- **Content Security Policy (CSP):** `script-src 'self'` prevents injection of malicious scripts.
- **Escape user‑generated content** when inserting into HTML (`textContent` vs `innerHTML`).
- **Validate inputs** on both client and server sides. Use trusted libraries like DOMPurify for sanitizing HTML.
- **Avoid exposing secrets** in client bundles; keep them server‑side.

---

## 🧪 Testing Strategies
- **Unit tests** with Jest, Mocha, or Vitest.
- **Mocking** (`jest.fn()`, `sinon.stub`) for external dependencies.
- **Snapshot testing** for UI components (React, Vue).
- **Integration / E2E** with Cypress or Playwright.
- **Code coverage** (`nyc`, `c8`) – aim for high coverage but focus on critical paths.

---

## 🛠️ Tooling Ecosystem
| Category | Tools |
|----------|-------|
| **Transpilers** | Babel (ES5‑compat), TypeScript (adds static typing) |
| **Bundlers** | Webpack, Rollup, Vite, esbuild (fast) |
| **Linters** | ESLint (configurable rules), `eslint-plugin-import` |
| **Formatters** | Prettier (auto‑format) |
| **Package Managers** | npm, Yarn, pnpm |
| **Runtime Environments** | Node.js (LTS), Deno (secure sandbox) |
| **CI/CD** | GitHub Actions, CircleCI, Jenkins (run tests, lint, build) |

---

## 📚 Further Reading & Resources
- **MDN Web Docs** – https://developer.mozilla.org/en-US/docs/Web/JavaScript
- **ECMAScript Spec** – https://tc39.es/ecma262/
- **You Don’t Know JS** (book series) – Kyle Simpson
- **Node.js Docs** – https://nodejs.org/api/
- **JavaScript.info** – https://javascript.info/
- **TC39 Proposals Tracker** – https://github.com/tc39/proposals

---

*End of document.*