# Cheat Sheet: Error Handling and Debugging

## Error Types
- `SyntaxError`: Code parsing failed.
- `ReferenceError`: Undefined variable used.
- `TypeError`: Invalid operation on a value.
- `RangeError`: Value out of allowed range (e.g., call stack).

## Try/Catch Syntax
```javascript
try {
  // Risky code
} catch (error) {
  // Handle error (error.name, error.message, error.stack)
} finally {
  // Always runs
}
```

## Custom Errors
```javascript
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}
```

## Console Methods
- `console.log()`: General info.
- `console.error()`: Highlights as error in dev tools.
- `console.warn()`: Highlights as warning.
- `console.table(arr/obj)`: Prints tabular data.
- `console.time(label)` / `console.timeEnd(label)`: Benchmarking.
- `console.trace()`: Dumps call stack to console.

## Debugging Flow
1. Check dev tools console.
2. Read the error message & stack trace.
3. Identify line number.
4. Place `console.log()` or breakpoint *before* the error.
5. Inspect variable values.
6. Fix and test.
