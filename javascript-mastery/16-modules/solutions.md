# Solutions: Modules and Code Organization

## Exercises Solutions

### 🟢 Basic
1. `export const PI = 3.14159;` / `import { PI } from './constants.js';`
2. `export default class User {}` / `import User from './User.js';`
3. `import User, { login } from './auth.js';` (relative path needed in browser).

### 🟡 Intermediate
6. `export * from './math.js'; export * from './string.js';`
8. 
```javascript
if (user.isAdmin) {
  const adminTools = await import('./admin.js');
  adminTools.init();
}
```

## Worksheet Solutions

### Part A
Prediction: TypeError (Assignment to constant variable). Imported bindings are read-only.

### Part D
Fix: `import add from './math.js';` (It was exported as default, not named).
