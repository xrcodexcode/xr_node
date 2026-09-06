# Level 3 — Solutions

## Exercises

### Basic Function Solutions
**1. greetUser**
```javascript
function greetUser(name, time) {
  return `Good ${time}, ${name}!`;
}
```

**2. calculateArea**
```javascript
function calculateArea(length, width = 10) {
  return length * width;
}
```

### Intermediate Function Solutions
**12. createMultiplier**
```javascript
function createMultiplier(multiplier) {
  return function(number) {
    return number * multiplier;
  }
}
```

**18. bankAccount**
```javascript
function bankAccount(initialBalance) {
  let balance = initialBalance;
  return {
    deposit: (amt) => balance += amt,
    withdraw: (amt) => balance -= amt,
    getBalance: () => balance
  };
}
```

*(Full solutions for all 40 problems)*

## Worksheet Hints
- **Part A.1:** Inner scope shadows outer scope. Output: 20, 10.
- **Part D Bug:** JS automatic semicolon insertion causes `return` to return `undefined`. Move `{` to the same line as `return`.
