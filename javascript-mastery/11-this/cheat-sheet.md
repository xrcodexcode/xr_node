# Cheat Sheet: The `this` Keyword

| Invocation Type | Example | Value of `this` |
| --- | --- | --- |
| **Method** | `obj.method()` | `obj` (the object on the left of the dot) |
| **Regular Function** | `func()` | `window` / `global` (`undefined` in strict mode) |
| **Arrow Function** | `() => {}` | Inherited from surrounding (lexical) scope |
| **Constructor** | `new Func()` | The newly created instance |
| **Event Listener** | `el.addEventListener('click', fn)` | The element `el` that fired the event |
| **Explicit Binding** | `func.call(obj)` | `obj` (the first argument passed) |

### Quick Fixes for Context Loss
1. **Callbacks in methods**: Use arrow functions.
2. **Event listeners needing object context**: `.bind(this)` or Arrow function wrapper.
3. **Extracting methods**: `const fn = obj.method.bind(obj)`.
