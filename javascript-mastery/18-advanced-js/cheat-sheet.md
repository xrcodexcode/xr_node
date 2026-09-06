# Level 18 Cheat Sheet

## Map vs Set vs WeakMap vs WeakSet

| Feature | Map | Set | WeakMap | WeakSet |
|---------|-----|-----|---------|---------|
| Values | Key-Value pairs | Unique values | Key-Value pairs | Unique objects |
| Key Types | Any type | N/A | Objects only | N/A |
| Iterable | Yes | Yes | No | No |
| GC | Keys prevent GC | Values prevent GC | Keys do NOT prevent GC | Values do NOT prevent GC |
| Size | `.size` | `.size` | N/A | N/A |

## Generators
```js
function* gen() {
  yield 1;
  yield 2;
}
const iterator = gen();
iterator.next(); // { value: 1, done: false }
```

## Functional Patterns

**Currying:** `a => b => a + b`
**Composition:** `x => f(g(x))`
**Memoization:** Cache function results based on arguments.

## Proxies
```js
const proxy = new Proxy({}, {
  get(target, prop) {
    return target[prop] ?? 'default';
  },
  set(target, prop, value) {
    target[prop] = value;
    return true;
  }
});
```
