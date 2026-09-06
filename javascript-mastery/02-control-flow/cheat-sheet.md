# Control Flow Cheat Sheet

### If / Else
```javascript
if (condition) {
  // run if condition is true
} else if (otherCondition) {
  // run if otherCondition is true
} else {
  // fallback
}
```

### Ternary
```javascript
const result = condition ? trueVal : falseVal;
```

### Switch
```javascript
switch (expr) {
  case 'A':
    // do A
    break;
  default:
    // fallback
}
```

### For Loop
```javascript
for (let i = 0; i < 10; i++) {
  // repeats 10 times (i from 0 to 9)
}
```

### While Loop
```javascript
while (condition) {
  // repeats as long as condition is true
}
```

### For...of (Arrays/Strings)
```javascript
for (const item of array) {
  // iterate over each value
}
```

### For...in (Objects)
```javascript
for (const key in object) {
  // iterate over each property key
}
```

### Break & Continue
- `break;` - Exit loop entirely.
- `continue;` - Skip to next iteration.
