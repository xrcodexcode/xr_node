# Functions Cheat Sheet

### Syntax Forms
```javascript
// Declaration (Hoisted)
function funcA(x) { return x; }

// Expression
const funcB = function(x) { return x; };

// Arrow (Single param, implicit return)
const funcC = x => x;

// Arrow (Multi param, explicit return)
const funcD = (x, y) => { return x + y; };
```

### Important Patterns

**Default Params**
```javascript
function init(config = { theme: 'dark' }) {}
```

**Rest Params**
```javascript
function combine(...elements) { return elements; }
```

**Closure Structure**
```javascript
function outer(outerVar) {
  return function inner(innerVar) {
    return outerVar + innerVar;
  }
}
```

**IIFE**
```javascript
(() => {
  // isolated scope
})();
```
