# Level 18 Solutions

## Worksheet Solutions

### Part A
`1`
`2`

### Part B
```js
function debounce(fn, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}
```

### Part C
```js
const target = { name: 'Alice' };
const proxy = new Proxy(target, {
  get: (obj, prop) => {
    console.log(`Accessing ${prop}`);
    return obj[prop];
  }
});
```

### Part D
Object references. Two separate `{}` literals are distinct objects in memory. Maps compare objects by reference. To make them the same key, store the object in a variable first.
```js
const obj = {};
map.set(obj, 'Value 1');
map.set(obj, 'Value 2'); // Overwrites
```

### Part E
```js
function* fibonacci() {
  let [prev, curr] = [0, 1];
  while (true) {
    yield curr;
    [prev, curr] = [curr, prev + curr];
  }
}
```
