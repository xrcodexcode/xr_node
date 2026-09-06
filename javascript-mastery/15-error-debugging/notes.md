# Level 15: Error Handling and Debugging

**Learning Time:** 2 hours | **Practice Time:** 4 hours | **Mastery Checkpoint:** Debugging multi-bug async programs.

## 1. Error Types

### What is it?
JavaScript throws specific error objects when things go wrong.

### Why?
Knowing the type of error helps you immediately locate the problem.

### Common Error Types (MUST KNOW)
- **SyntaxError**: You typed something JS doesn't understand (e.g., missing brackets).
- **ReferenceError**: You tried to use a variable that doesn't exist.
- **TypeError**: You tried to do something to a value that isn't allowed for that type.
- **RangeError**: A number is outside an allowable range (e.g., infinite recursion).

```javascript
// SyntaxError
// const obj = { name: 'John' ; // Missing closing brace

// ReferenceError
// console.log(nonExistentVar);

// TypeError
const num = 10;
// num.toUpperCase(); // num.toUpperCase is not a function

// RangeError
function recurse() { recurse(); }
// recurse(); // Maximum call stack size exceeded
```

## 2. Error Handling (try/catch/finally)

### What is it?
A way to "catch" errors so they don't crash your entire program.

```javascript
try {
  // Code that might throw an error
  const user = JSON.parse('{"broken json');
} catch (error) {
  // Code that runs if an error occurs
  console.error("Failed to parse user:", error.message);
} finally {
  // Code that ALWAYS runs, error or not
  console.log("Parsing attempt finished.");
}
```

## 3. Throwing Errors & Custom Errors

### What is it?
You can create and throw your own errors to enforce rules in your code.

```javascript
function withdraw(amount, balance) {
  if (amount > balance) {
    throw new Error("Insufficient funds"); // Throw a standard error
  }
  return balance - amount;
}

// Custom Error Class
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function createUser(age) {
  if (age < 18) throw new ValidationError("Must be 18 or older");
  return { age };
}
```

## 4. Async Error Handling

```javascript
// Promises
fetch('/api/data')
  .then(res => res.json())
  .catch(err => console.error("Network error:", err));

// Async/Await
async function getData() {
  try {
    const res = await fetch('/api/data');
    const data = await res.json();
  } catch (err) {
    console.error("Async error:", err);
  }
}
```

## 5. Debugging Techniques

### Console Methods
```javascript
console.log("Standard output");
console.error("Error formatting");
console.warn("Warning formatting");
console.table([{id: 1, name: 'Alice'}, {id: 2, name: 'Bob'}]);
console.time("LoopTime");
// ... slow code ...
console.timeEnd("LoopTime");
console.trace("Show call stack");
```

### The Debugging Mental Model
1. What did I expect?
2. What actually happened?
3. Where did the difference begin?
4. What variable/value changed?
5. What caused it?
6. How do I fix it?

### Common Mistake
**Mistake** -> Swallowing errors without logging or handling.
**Incorrect** -> `try { doSomething(); } catch (e) {}`
**Correct** -> `try { doSomething(); } catch (e) { console.error(e); reportError(e); }`
