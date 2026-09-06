# Level 9: Solutions

### Exercise 1
```javascript
const title = "Modern JS";
const text = `Welcome to ${title}.
Enjoy learning!`;
```

### Exercise 2
```javascript
const { title, author, year: publishYear } = book;
```

### Exercise 3
```javascript
function mergeAndAdd(obj1, obj2, ...numbers) {
  const sum = numbers.reduce((a, b) => a + b, 0);
  return { ...obj1, ...obj2, sum };
}
```

### Exercise 4
```javascript
const timer = {
  seconds: 0,
  start() {
    setInterval(() => {
      this.seconds++;
      console.log(this.seconds);
    }, 1000);
  }
};
```

### Exercise 5
```javascript
const email = res?.data?.user?.email ?? "no-email@test.com";
```

### Exercise 6
```javascript
[a, b] = [b, a];
```

## Worksheet Solutions

### Part A: Predict the Output
1. `[20, 30]` (rest operator gathers remaining elements into an array).
2. `1 3` (`c` is not in object, so it defaults to 3).
3. `0` (`??` only falls back for `null` or `undefined`, `0` is valid).

### Part B
```javascript
const user = {
  [keyName]: 1,
  name,
  isActive: true
};
```

### Part D
```javascript
// Function didn't return anything. Either remove `{}` or add `return`.
const multiply = (x, y) => x * y;
```
