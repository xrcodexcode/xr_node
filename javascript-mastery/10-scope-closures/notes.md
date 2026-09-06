# Level 10: Scope, Execution & Closures

## 1. Scope (Where do variables live?)
Scope determines the accessibility/visibility of variables.

### Types of Scope:
1. **Global Scope:** Outside all functions/blocks. Accessible everywhere.
2. **Function Scope:** Inside a function. Accessible only within that function (`var`, `let`, `const`).
3. **Block Scope:** Inside `{}`. Accessible only within the block (only `let` and `const`).

### Lexical Scope (Static Scope)
Inner functions have access to outer function variables because of *where they are written* in the code, not where they are called.

```text
Global Scope
│
└── Outer Function Scope
    │
    └── Inner Function Scope (Can access Outer and Global)
```

## 2. Hoisting & The Temporal Dead Zone (TDZ)
JS conceptually moves declarations to the top of their scope before execution.

- `var`: Hoisted and initialized with `undefined`.
- `let`/`const`: Hoisted but NOT initialized. Accessing them before declaration causes a ReferenceError (TDZ).
- `function`: Fully hoisted (can be called before defined).

```javascript
console.log(a); // undefined
var a = 5;

console.log(b); // ReferenceError!
let b = 10;
```

## 3. Execution Context & Call Stack
Whenever code runs, it runs inside an **Execution Context**.
- **Global Execution Context (GEC):** Created when script starts.
- **Function Execution Context (FEC):** Created when a function is *called*.

**Phases:**
1. **Creation Phase:** Memory allocated for variables/functions (Hoisting happens here).
2. **Execution Phase:** Code is executed line by line.

**Call Stack:** Tracks execution contexts (LIFO - Last In, First Out).

```text
|               |
| innerFunc()   | <-- Top of stack (executing)
| outerFunc()   |
| Global Context|
|_______________|
```

## 4. Closures (MUST KNOW 🔥)
**What is it?** A closure is a function that remembers its outer variables and can access them even after the outer function has finished executing.

```javascript
function makeCounter() {
  let count = 0; // Lexical environment variable
  
  return function() { // This inner function is the closure
    count++;
    return count;
  }
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```

### Why use Closures?
1. **Data Privacy (Encapsulation):** Variables can be hidden and modified only via specific methods.
2. **State Retention:** Functions can "remember" data between calls.
3. **Currying / Partial Application:** `const add5 = add(5);`

### The Classic Closure Mistake
```javascript
// Legacy problem with 'var'
for (var i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 1000); 
}
// Outputs: 4, 4, 4 (because var is function-scoped, loop mutates the SAME i)

// Fix: Use 'let'
for (let i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Outputs: 1, 2, 3 (let is block-scoped, creates a new i for each iteration)
```

## 5. Garbage Collection basics
JS uses "mark-and-sweep". If an object is not reachable from the "root" (global object), it is deleted. Closures prevent their referenced variables from being garbage collected.
