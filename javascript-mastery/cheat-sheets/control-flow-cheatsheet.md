# Control Flow Cheat Sheet

## Conditionals

### If / Else If / Else
```javascript
const age = 20;

if (age < 13) {
  console.log("Child");
} else if (age < 18) {
  console.log("Teenager");
} else {
  console.log("Adult");
}
```

### Ternary Operator (Shorthand if/else)
```javascript
// condition ? exprIfTrue : exprIfFalse
const status = age >= 18 ? "Allowed" : "Denied";
```

### Switch Statement
```javascript
const day = "Mon";

switch (day) {
  case "Mon":
    console.log("Monday");
    break; // Important: prevents fallthrough
  case "Tue":
    console.log("Tuesday");
    break;
  default:
    console.log("Unknown day");
}
```

## Loops

### For Loop
Use when you know exactly how many times to loop.
```javascript
// for (initialization; condition; increment/decrement)
for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}
```

### While Loop
Use when the number of iterations is unknown.
```javascript
let count = 0;
while (count < 3) {
  console.log(count);
  count++; // Must update condition variable to avoid infinite loop
}
```

### Do...While Loop
Guarantees execution AT LEAST once.
```javascript
let i = 10;
do {
  console.log(i); // Prints 10 once, then condition fails
  i++;
} while (i < 5);
```

### For...of (Arrays/Iterables)
```javascript
const colors = ["red", "green", "blue"];
for (const color of colors) {
  console.log(color);
}
```

### For...in (Objects)
Iterates over object keys.
```javascript
const user = { name: "Jon", age: 30 };
for (const key in user) {
  console.log(`${key}: ${user[key]}`);
}
```

## Loop Control
- `break`: Exits the loop entirely.
- `continue`: Skips the current iteration and moves to the next.
