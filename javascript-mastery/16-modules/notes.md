# Level 16: Modules and Code Organization

**Learning Time:** 1.5 hours | **Practice Time:** 3 hours | **Mastery Checkpoint:** Building a multi-file architecture with clear separations.

## 1. Why Modules?

### What is it?
Breaking your code into smaller, reusable files rather than one giant `script.js`.

### Why?
- **Separation of concerns:** Each file does one thing.
- **Reusability:** Write once, use everywhere.
- **Namespacing:** Avoid naming collisions.

## 2. ES Modules (ESM) (MUST KNOW)

Modern JavaScript uses `import` and `export`.

### Named Exports
```javascript
// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// app.js
import { add, subtract } from './math.js';
```

### Default Exports
```javascript
// User.js
export default class User {
  constructor(name) {
    this.name = name;
  }
}

// app.js
import User from './User.js';
```

### Mixed Exports & Renaming
```javascript
// utils.js
export default function doThing() {}
export const API_URL = 'https://api.example.com';

// app.js
import doThing, { API_URL as url } from './utils.js';
```

## 3. CommonJS (Node.js Legacy Context)

Before ESM, Node used `require()` and `module.exports`.

```javascript
// math.js
const sum = (a, b) => a + b;
module.exports = { add: sum };

// app.js
const { add } = require('./math.js');
```

## 4. Architecture & Organization

- **Utils / Helpers:** Pure functions (e.g., date formatting).
- **Services:** API calls and data fetching.
- **Constants:** Hardcoded strings or config values.
- **Barrel Files:** An `index.js` that groups and re-exports modules from a folder.

```javascript
// services/index.js
export * from './user.service.js';
export * from './auth.service.js';
```

### Common Mistake
**Mistake** -> Circular Dependencies (File A imports File B, File B imports File A).
**Why** -> It can lead to undefined variables or infinite loops.
**Fix** -> Refactor the shared logic into File C, and have both A and B import C.
