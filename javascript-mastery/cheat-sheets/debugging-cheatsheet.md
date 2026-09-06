# Debugging & Error Handling Cheat Sheet

## Error Types
- **SyntaxError:** Code violates JS grammar rules (e.g., missing bracket). Found at compile time.
- **ReferenceError:** Trying to access an undeclared variable.
- **TypeError:** Operation on a wrong data type (e.g., `null.length`, or invoking non-function `x()`).
- **RangeError:** Value is out of valid range (e.g., recursive infinite loop exceeding call stack).

## Error Handling (Try / Catch)
Prevents your application from crashing when an error occurs.

```javascript
try {
  // Code that might throw an error
  const data = JSON.parse("invalid json string");
} catch (error) {
  // Runs if an error occurs in the try block
  console.error("Failed to parse JSON:", error.message);
  console.error(error.name); // e.g., "SyntaxError"
} finally {
  // Runs regardless of success or failure (cleanup)
  console.log("Operation complete.");
}
```

## Throwing Custom Errors
```javascript
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}
```

## The Console Object
```javascript
console.log("Standard output");
console.error("Shows as red error in browser");
console.warn("Shows as yellow warning");
console.table([{name: "Jon", age: 30}, {name: "Jane", age: 25}]); // Great for arrays of objects
console.time("TimerName");
// ... slow code ...
console.timeEnd("TimerName"); // Logs time elapsed
```

## Debugger Statement
Place `debugger;` in your code. If developer tools are open, execution will pause precisely at that line, allowing you to inspect variables and step through code.

```javascript
function calcArea(w, h) {
  debugger; // Execution pauses here
  return w * h;
}
```

## Debugging Workflow Tips
1. **Read the Error Message:** It tells you the exact file and line number.
2. **Check the Call Stack:** Look in the dev tools to see what function called the function that crashed.
3. **Isolate:** Comment out code until the error disappears to find the exact line.
4. **Dev Tools Network Tab:** For API/Fetch issues, check the Network tab to see the actual request and response payload.
