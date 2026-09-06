# Solutions: Error Handling and Debugging

## Exercises Solutions

### 🟢 Basic
1. SyntaxError
2. ReferenceError
3. TypeError
4. RangeError
5. `try { JSON.parse('{"a":1') } catch (e) { console.error(e) }`
... (and so on)

### 🟡 Intermediate
11. 
```javascript
function divide(a, b) {
  if (b === 0) throw new Error("Division by zero");
  return a / b;
}
```
12.
```javascript
class DatabaseError extends Error {
  constructor(message) {
    super(message);
    this.name = "DatabaseError";
  }
}
```
... (and so on)

## Worksheet Solutions

### Part A
Prediction: A, C, D

### Part D
Fix: `return user ? user.profile.name : "Unknown User";`

... (Detailed solutions for all parts)
