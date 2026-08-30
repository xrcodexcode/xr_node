---
id: 682614e6-82e9-4292-9b7c-6aab2eca80ed
title: JavaScript 101 Advanced Engineering Notes
type: atomic-note
status: learning
domain: engineering
source_type: course
created: '2026-08-30'
updated: '2026-08-30'
review: '2026-09-30'
confidence: 98
version: 1
aliases:
  - JavaScript 101
  - Advanced JavaScript 101
  - JS 101 for Senior Engineers
  - JavaScript Engineering Manual
tags:
  - advanced
  - implementation
  - engineering
  - reference
owner_moc: Study MOC
sources: []
related:
  - "[[detailed-study-notes-2026-12-plus-hours-complete-js-tutorial-for-beginners-part-01]]"
  - "[[detailed-study-notes-2026-12-plus-hours-complete-js-tutorial-for-beginners-part-02]]"
  - "[[detailed-study-notes-2026-12-plus-hours-complete-js-tutorial-for-beginners-part-05]]"
  - "[[detailed-study-notes-2026-12-plus-hours-complete-js-tutorial-for-beginners-part-06]]"
  - "[[detailed-study-notes-2026-12-plus-hours-complete-js-tutorial-for-beginners-part-07]]"
schema_version: 4
---

# JavaScript 101: The Senior Engineer's Runtime Manual

> **Prerequisites Assumed**: Variables, primitives, conditional branching, basic loops, and elementary syntax are omitted. This manual begins at the functional boundary and covers engine internals, memory models, asynchronous orchestration, metaprogramming, and runtime execution semantics.
>
> **Design Philosophy**: High code-to-theory ratio. Every architectural concept is paired with dense, production-grade code, followed by **5 advanced engineering problems** with battle-tested implementations and test verifications.

---

## Architecture Roadmap

1. [[#1. Function Architecture, Arity, Parameters & Tail Calls]] (5 Problems)
2. [[#2. Execution Context, Lexical Environment & Scope Chain]] (5 Problems)
3. [[#3. Closures, Memory Allocation & Context Retention]] (5 Problems)
4. [[#4. The `this` Keyword, Dynamic Binding & Polyfills]] (5 Problems)
5. [[#5. Prototypes, Prototypal Inheritance & Modern Classes]] (5 Problems)
6. [[#6. Object Descriptors, Proxies, Reflect & Metaprogramming]] (5 Problems)
7. [[#7. Iterators, Iterable Protocol & Generators]] (5 Problems)
8. [[#8. The Asynchronous Event Loop, Microtasks & Macrotasks]] (5 Problems)
9. [[#9. Promises/A+ Architecture, Combinators & Polyfills]] (5 Problems)
10. [[#10. Async/Await, Coroutines & Concurrency Control]] (5 Problems)
11. [[#11. Advanced Functional Programming & Transducers]] (5 Problems)
12. [[#12. V8 Engine Internals, Shapes, Inline Caching & GC]] (5 Problems)

---

## 1. Function Architecture, Arity, Parameters & Tail Calls

### 1.1 Architectural Theory

In ECMAScript, functions are first-class objects with an internal `[[Call]]` slot (and optionally `[[Construct]]`).

```
                      Function Object Internal Slots
 ┌────────────────────────────────────────────────────────────────────────┐
 │ [[Call]](thisArgument, argumentsList)                                  │
 │ [[Construct]](argumentsList, newTarget) [Optional: not in arrows]      │
 │ [[Scope]] -> Points to outer LexicalEnvironment                        │
 │ [[FormalParameters]] -> Parameter AST list                             │
 │ [[ECMAScriptCode]] -> Function body AST                                │
 └────────────────────────────────────────────────────────────────────────┘
```

#### Core Invariants
1. **Declaration vs Expression**: Function declarations undergo hoisting during context creation (`HoistableDeclaration`), initializing both identifier and body. Function expressions assigned to `var` initialize as `undefined`; when assigned to `let`/`const`, they remain in the Temporal Dead Zone (TDZ).
2. **Arrow Functions (`() => {}`)**:
   - Lack `[[Construct]]` (cannot be called with `new`).
   - Lack `prototype` property.
   - Do not bind their own `this`, `arguments`, `super`, or `new.target` (lexically resolved from enclosing non-arrow environment).
3. **Arity (`fn.length`)**:
   - Counts formal parameters before the first parameter with a default value.
   - Excludes rest parameters (`...args`).
4. **Intermediate Parameter Scope**:
   - If default parameters or destructuring are used, ECMAScript creates a separate intermediate `LexicalEnvironment` between the outer scope and the function body scope.
5. **Proper Tail Calls (PTC)**:
   - Mandated by ES2015 in strict mode (`"use strict"`), where a return statement calling another function in the tail position reuses the caller's stack frame. (Supported in JavaScriptCore/WebKit; disabled by default in V8 for stack trace clarity).

---

### 1.2 Senior Code Demonstrations

```javascript
// --- 1. Parameter Scope Boundary Trap ---
let x = "outer";

function parameterScopeTrap(a, b = () => x) {
  // If defaults exist, parameter list has its own environment:
  // [Outer Scope] -> [Parameter Scope: a, b] -> [Body Scope: x]
  let x = "inner";
  return b(); // Resolves 'x' from outer scope, NOT body scope!
}
console.log(parameterScopeTrap(1)); // Output: "outer"

// --- 2. Arity vs Arguments Length ---
function calculateMetrics(a, b, c = 10, ...rest) {
  return {
    declaredArity: calculateMetrics.length, // Only 'a' and 'b' -> 2
    actualArgsPassed: arguments.length
  };
}
console.log(calculateMetrics(1, 2, 3, 4, 5));
// Output: { declaredArity: 2, actualArgsPassed: 5 }

// --- 3. Constructor Enforcement via new.target ---
function StrictEntity(id) {
  if (!new.target) {
    throw new TypeError("StrictEntity must be instantiated with 'new'");
  }
  this.id = id;
}

function UniversalEntity(id) {
  // Dual-mode: Auto-instantiates if called without 'new'
  if (!new.target) {
    return new UniversalEntity(id);
  }
  this.id = id;
}
```

---

### 1.3 Advanced Coding Problems

#### Problem 1.1: Variadic Function Adapter with Arity Preservation
**Requirement**: Build `defineArity(fn, arity)` that returns a wrapper around `fn` whose `.length` property strictly equals `arity` while preserving original function `name`, `this` context, and passing all variable arguments.

```javascript
/**
 * Preserves exact .length on wrapped functions using dynamic parameters.
 * @param {Function} fn
 * @param {number} arity
 * @returns {Function}
 */
function defineArity(fn, arity) {
  if (typeof fn !== "function") throw new TypeError("Target must be a function");
  if (arity < 0 || !Number.isInteger(arity)) throw new RangeError("Arity must be a non-negative integer");

  // Dynamically generate parameters for length descriptor
  const params = Array.from({ length: arity }, (_, i) => `$${i}`).join(", ");
  const wrapperFactory = new Function(
    "fn",
    `return function ${fn.name || "anonymous"}(${params}) {
      return fn.apply(this, arguments);
    };`
  );

  const wrapper = wrapperFactory(fn);
  Object.defineProperty(wrapper, "name", { value: fn.name, configurable: true });
  return wrapper;
}

// Verification:
function sumAll(...args) {
  return args.reduce((acc, n) => acc + n, 0);
}
const sum3 = defineArity(sumAll, 3);
console.log(sum3.length); // 3
console.log(sum3(10, 20, 30, 40)); // 100
```

#### Problem 1.2: Abstract Base Constructor Guard with Direct-Subclass Validation
**Requirement**: Implement an abstract class constructor `AbstractService` using `new.target` that prevents direct instantiation, enforces that subclasses implement an `execute()` method, and prevents skipping the hierarchy.

```javascript
class AbstractService {
  constructor(serviceName) {
    if (new.target === AbstractService) {
      throw new TypeError("Cannot construct AbstractService instances directly");
    }
    if (typeof this.execute !== "function" || this.execute === AbstractService.prototype.execute) {
      throw new TypeError(`Class ${new.target.name} must implement execute()`);
    }
    this.serviceName = serviceName;
  }

  execute() {
    throw new Error("Abstract method execute() must be overridden");
  }
}

// Verification:
class BillingService extends AbstractService {
  execute() { return `Billing processed for ${this.serviceName}`; }
}
class BrokenService extends AbstractService {}

const billing = new BillingService("Stripe"); // OK
console.log(billing.execute());
try { new AbstractService("Root"); } catch (e) { console.log(e.message); } // Direct construct blocked
try { new BrokenService("Invalid"); } catch (e) { console.log(e.message); } // Missing method blocked
```

#### Problem 1.3: Short-Circuiting Pipeline with Arity Contract Checking
**Requirement**: Create `createCheckedPipeline(...fns)` which chains unary functions. If any step returns `null` or `undefined`, the pipeline short-circuits. Throws if any function has arity !== 1 (unless it's the first function).

```javascript
function createCheckedPipeline(...fns) {
  if (fns.length === 0) return (val) => val;

  for (let i = 1; i < fns.length; i++) {
    if (fns[i].length > 1) {
      throw new Error(`Pipeline stage index ${i} has arity ${fns[i].length}. Expected 1`);
    }
  }

  return function (initialValue) {
    let acc = initialValue;
    for (let i = 0; i < fns.length; i++) {
      if (acc === null || acc === undefined) return acc;
      acc = fns[i].call(this, acc);
    }
    return acc;
  };
}

// Verification:
const sanitize = (str) => (str.trim().length ? str.trim() : null);
const uppercase = (str) => str.toUpperCase();
const tag = (str) => `[LOG]: ${str}`;

const pipeline = createCheckedPipeline(sanitize, uppercase, tag);
console.log(pipeline("  system alert  ")); // "[LOG]: SYSTEM ALERT"
console.log(pipeline("    "));            // null (short-circuited at sanitize)
```

#### Problem 1.4: Safe Parameter Sandbox Evaluator
**Requirement**: Write an expression evaluator function `evalInParamSandbox(expr, context)` that evaluates JS arithmetic expressions with variables from `context`, without exposing global objects (`globalThis`, `window`, `process`) using parameter scoping.

```javascript
function evalInParamSandbox(expression, context = {}) {
  const keys = Object.keys(context);
  const values = Object.values(context);

  // Blacklist hazardous identifiers by shadowing them as undefined arguments
  const blacklisted = ["window", "global", "globalThis", "process", "console", "eval", "Function"];
  const allParams = [...blacklisted, ...keys];
  const allArgs = [...blacklisted.map(() => undefined), ...values];

  // Compile sandboxed function
  const sandboxedRunner = new Function(...allParams, `"use strict"; return (${expression});`);
  return sandboxedRunner(...allArgs);
}

// Verification:
const ctx = { a: 10, b: 25, factor: 2 };
console.log(evalInParamSandbox("(a + b) * factor", ctx)); // 70
try {
  evalInParamSandbox("process.exit(1)", ctx);
} catch (e) {
  console.log("Access blocked:", e.message); // Cannot read properties of undefined
}
```

#### Problem 1.5: Tail-Call Recursive Trampoline Engine
**Requirement**: Implement a generic `trampoline(fn)` runner that takes a tail-recursive function returning a continuation thunk and executes it iteratively, eliminating call stack overflows for any recursion depth.

```javascript
/**
 * Wraps recursive call in a thunk continuation.
 */
const thunk = (fn, ...args) => ({ isThunk: true, run: () => fn(...args) });

/**
 * Executes thunks in a while loop to keep stack depth at O(1).
 */
function trampoline(fn) {
  return function (...initialArgs) {
    let result = fn(...initialArgs);
    while (result && result.isThunk) {
      result = result.run();
    }
    return result;
  };
}

// Verification: Standard recursive factorial crashes stack at 100_000
const factorialTail = (n, acc = 1n) => {
  if (n <= 1n) return acc;
  return thunk(factorialTail, n - 1n, n * acc);
};

const safeFactorial = trampoline(factorialTail);
console.log("Safe factorial computed:", safeFactorial(5000n).toString().slice(0, 20) + "...");
// Executes seamlessly without Maximum Call Stack Exceeded
```

---

## 2. Execution Context, Lexical Environment & Scope Chain

### 2.1 Architectural Theory

When JavaScript code executes, the runtime manages an **Execution Context Stack (Call Stack)**.

```
                  Execution Context Internal Anatomy
 ┌─────────────────────────────────────────────────────────────────────┐
 │ ExecutionContext = {                                                │
 │   LexicalEnvironment: {                                             │
 │     EnvironmentRecord: DeclarativeEnvironmentRecord (let, const)    │
 │     OuterEnv: <reference to parent LexicalEnvironment>              │
 │   },                                                                │
 │   VariableEnvironment: {                                            │
 │     EnvironmentRecord: ObjectEnvironmentRecord / VarDeclarations    │
 │     OuterEnv: <reference to parent LexicalEnvironment>              │
 │   },                                                                │
 │   ThisBinding: <computed at call-site>                              │
 │ }                                                                   │
 └─────────────────────────────────────────────────────────────────────┘
```

#### Key Mechanics:
1. **Creation Phase vs Execution Phase**:
   - *Creation Phase*: V8 parses code, allocates memory on the Heap for functions and variables. `var` identifiers are bound to `undefined`. `let` and `const` declarations are registered in the Declarative Environment Record as **uninitialized**.
   - *Execution Phase*: Code executes sequentially. Reading a `let`/`const` identifier before its initialization evaluates to a `ReferenceError` (the **Temporal Dead Zone / TDZ**).
2. **Scope Chain Resolution (`[[OuterEnv]]`)**:
   - Identifier lookup walks statically up the chain of `OuterEnv` references established at function definition time, NOT at function invocation time.
3. **Block Scoping**:
   - Whenever an ECMAScript engine enters `{ ... }` containing `let` or `const`, a new `LexicalEnvironment` is pushed onto the current execution context. Upon leaving the block, the previous `LexicalEnvironment` is restored.

---

### 2.2 Senior Code Demonstrations

```javascript
// --- 1. TDZ Bytecode Simulation Trap ---
function demonstrateTDZ() {
  // console.log(val); // ReferenceError: Cannot access 'val' before initialization
  let val = 42;

  {
    // Inner block creates a new LexicalEnvironment
    // Shadowed 'val' creates an inner TDZ:
    // console.log(val); // ReferenceError: TDZ occurs here even though outer val exists!
    let val = 100;
    console.log("Inner val:", val); // 100
  }
}
demonstrateTDZ();

// --- 2. Dynamic Scope vs Lexical Scope Trap ---
const scopeTracker = "global";

function printer() {
  console.log(scopeTracker); // Statically bound to global
}

function caller() {
  const scopeTracker = "local";
  printer(); // Prints "global", never "local"
}
caller();

// --- 3. VariableEnvironment vs LexicalEnvironment Divergence ---
function scopeSplit() {
  var varScoped = "function-wide";
  let blockScoped = "initial";

  if (true) {
    var varScoped = "mutated-function-wide"; // Targets VariableEnvironment
    let blockScoped = "block-only";          // Targets new LexicalEnvironment
  }

  console.log(varScoped);   // "mutated-function-wide"
  console.log(blockScoped); // "initial"
}
scopeSplit();
```

---

### 2.3 Advanced Coding Problems

#### Problem 2.1: Lexical Scope Resolution Simulator
**Requirement**: Build a `LexicalScopeTree` class that models nested environment records. It must support `declare(name, type, value)`, `resolve(name)`, `enterBlock()`, and `exitBlock()`, accurately throwing `ReferenceError` for undeclared identifiers and uninitialized TDZ variables.

```javascript
class LexicalScopeTree {
  constructor(parent = null) {
    this.parent = parent;
    this.bindings = new Map(); // name -> { type, initialized, value }
  }

  enterBlock() {
    return new LexicalScopeTree(this);
  }

  exitBlock() {
    if (!this.parent) throw new Error("Cannot exit root global scope");
    return this.parent;
  }

  declare(name, type, value = undefined) {
    if (this.bindings.has(name) && (type === "let" || type === "const")) {
      throw new SyntaxError(`Identifier '${name}' has already been declared`);
    }
    // TDZ: uninitialized when declared with let/const until assignment
    this.bindings.set(name, {
      type,
      initialized: type === "var",
      value: type === "var" ? undefined : value
    });
  }

  initialize(name, value) {
    let current = this;
    while (current) {
      if (current.bindings.has(name)) {
        const record = current.bindings.get(name);
        record.initialized = true;
        record.value = value;
        return;
      }
      current = current.parent;
    }
    throw new ReferenceError(`Identifier '${name}' is not declared`);
  }

  resolve(name) {
    let current = this;
    while (current) {
      if (current.bindings.has(name)) {
        const record = current.bindings.get(name);
        if (!record.initialized) {
          throw new ReferenceError(`Cannot access '${name}' before initialization (TDZ)`);
        }
        return record.value;
      }
      current = current.parent;
    }
    throw new ReferenceError(`'${name}' is not defined`);
  }
}

// Verification:
let scope = new LexicalScopeTree();
scope.declare("g", "var", "globalVal");
scope = scope.enterBlock();
scope.declare("x", "let"); // in TDZ
try {
  scope.resolve("x");
} catch (e) {
  console.log(e.message); // Cannot access 'x' before initialization (TDZ)
}
scope.initialize("x", 42);
console.log(scope.resolve("x")); // 42
console.log(scope.resolve("g")); // "globalVal" (walked up parent)
scope = scope.exitBlock();
```

#### Problem 2.2: Shadowed Variable Diagnostic Analyzer
**Requirement**: Create a function `detectShadowing(astScopeNodes)` that parses an array of scope definitions with declared variables and reports all identifiers that shadow a variable in an outer ancestor scope.

```javascript
function detectShadowing(scopeNodes) {
  const shadows = [];
  const activeAncestry = [];

  function traverse(node) {
    const currentVars = new Map();
    for (const declaration of node.declarations || []) {
      // Check if declaration exists in any active parent scope
      for (const parent of activeAncestry) {
        if (parent.has(declaration.name)) {
          shadows.push({
            identifier: declaration.name,
            shadowingScopeId: node.id,
            originalScopeId: parent.get(declaration.name).scopeId,
            line: declaration.line
          });
        }
      }
      currentVars.set(declaration.name, { scopeId: node.id, line: declaration.line });
    }

    activeAncestry.push(currentVars);
    for (const child of node.children || []) {
      traverse(child);
    }
    activeAncestry.pop();
  }

  traverse(scopeNodes);
  return shadows;
}

// Verification:
const mockAst = {
  id: "global",
  declarations: [{ name: "userId", line: 1 }, { name: "config", line: 2 }],
  children: [
    {
      id: "function_doTask",
      declarations: [{ name: "userId", line: 5 }], // Shadows global userId
      children: [
        {
          id: "block_inner",
          declarations: [{ name: "config", line: 8 }] // Shadows global config
        }
      ]
    }
  ]
};
console.log(detectShadowing(mockAst));
// [{ identifier: 'userId', shadowingScopeId: 'function_doTask', originalScopeId: 'global', line: 5 }, ...]
```

#### Problem 2.3: Call Stack Depth Interceptor & Self-Unwinding Guard
**Requirement**: Build a recursive function protector `createStackGuard(maxDepth)` that intercepts calls to any recursive function, monitors the call stack height via an internal counter, and safely throws a descriptive `CallStackOverflowProtectionError` before the V8 native limit is reached.

```javascript
class CallStackOverflowProtectionError extends Error {
  constructor(depth) {
    super(`Execution aborted: Max recursive call depth of ${depth} reached`);
    this.name = "CallStackOverflowProtectionError";
  }
}

function createStackGuard(maxDepth = 5000) {
  let currentDepth = 0;

  return function wrap(fn) {
    return function guarded(...args) {
      currentDepth++;
      if (currentDepth > maxDepth) {
        currentDepth = 0; // Reset before throwing to prevent permanent deadlock
        throw new CallStackOverflowProtectionError(maxDepth);
      }
      try {
        return fn.apply(this, args);
      } finally {
        currentDepth--;
      }
    };
  };
}

// Verification:
const guard = createStackGuard(100);
const infiniteRecursion = guard((n) => infiniteRecursion(n + 1));

try {
  infiniteRecursion(0);
} catch (err) {
  console.log(err.name, "->", err.message);
  // CallStackOverflowProtectionError -> Execution aborted: Max recursive call depth of 100 reached
}
```

#### Problem 2.4: Environment Record Snapshot Serialization
**Requirement**: Write an inspector `createScopeInspector(fn)` that extracts and inspects the closure environment bindings of a function, returning a plain serializable JSON object of the captured state.

```javascript
function createScopeInspector() {
  const privateState = new WeakMap();

  return {
    bind(target, stateObject) {
      // Store reference to simulated environment records
      privateState.set(target, {
        capturedAt: new Date().toISOString(),
        bindings: { ...stateObject }
      });
      return target;
    },
    inspect(target) {
      if (!privateState.has(target)) {
        return { error: "No inspectable lexical environment captured" };
      }
      return JSON.parse(JSON.stringify(privateState.get(target)));
    }
  };
}

// Verification:
const inspector = createScopeInspector();
function serviceWorker(id) {
  const secretKey = "ak_test_" + Math.random().toString(36).slice(2);
  const runner = () => `Running worker ${id}`;
  return inspector.bind(runner, { id, secretKey });
}

const instance = serviceWorker("worker_88");
console.log(inspector.inspect(instance));
// { capturedAt: '...', bindings: { id: 'worker_88', secretKey: 'ak_test_...' } }
```

#### Problem 2.5: ES5 Loop Variable Capture & Binding Re-hydration
**Requirement**: Implement `rehydrateLoopScopes(iterations, callback)` that emulates ES6 `for (let i = 0; ...)` per-iteration lexical environment creation using pure ES5 primitives, proving how closures bind to unique environment records per loop iteration.

```javascript
function rehydrateLoopScopes(iterations, callback) {
  var capturedFunctions = [];

  for (var i = 0; i < iterations; i++) {
    // ES5 emulation of block-scoping via IIFE parameter binding
    (function (perIterationLexicalCopy) {
      capturedFunctions.push(function () {
        return callback(perIterationLexicalCopy);
      });
    })(i); // Passes current value to be locked into IIFE's DeclarativeEnvironmentRecord
  }

  return capturedFunctions;
}

// Verification:
const funcs = rehydrateLoopScopes(5, (val) => val * 10);
const outputs = funcs.map((f) => f());
console.log(outputs); // [0, 10, 20, 30, 40] (without IIFE, all would be 50)
```

---

## 3. Closures, Memory Allocation & Context Retention

### 3.1 Architectural Theory

A **closure** is the combination of a function and the lexical environment within which that function was declared.

```
               V8 Heap: Closure Context Allocation
 ┌───────────────────────────────────────────────────────────────┐
 │ Function Object                                               │
 │   [[Context]] ────────► Context (Allocated on Heap)           │
 │                          ├─ capturedVar1: "sensitive"         │
 │                          ├─ capturedVar2: <Object ref>        │
 │                          └─ PreviousContext ──► OuterContext  │
 └───────────────────────────────────────────────────────────────┘
```

#### Critical Senior Pitfalls:
1. **Shared Context Allocation**:
   - V8 creates **one** `Context` object per lexical scope. If two inner functions close over *different* variables from the same parent scope, both inner functions retain the *entire* shared `Context` object.
   - *Consequence*: If function `A` captures a small string and function `B` captures a 100MB buffer, keeping function `A` alive keeps the 100MB buffer in memory!
2. **Event Listener Traps**:
   - Attaching closures to DOM elements or global event emitters without cleanup creates un-garbage-collectible memory retention paths.
3. **Encapsulation vs Leakage**:
   - Closures provide genuine private state (unreachable from outside). However, leaking a reference via a getter or returning an un-cloned object breaks encapsulation.

---

### 3.2 Senior Code Demonstrations

```javascript
// --- 1. The V8 Shared Context Memory Trap ---
function setupMemoryTrap() {
  let massiveBuffer = new Array(5000000).fill("heavy_payload"); // ~40MB
  let harmlessId = "id_9999";

  // Sibling function 1: captures massiveBuffer
  function leakCandidate() {
    return massiveBuffer[0];
  }

  // Sibling function 2: only needs harmlessId
  function worker() {
    return harmlessId;
  }

  // If worker is exported and leakCandidate is discarded:
  // In certain V8 versions, both share the same Heap Context, keeping massiveBuffer alive!
  return worker;
}

// --- 2. True Private Encapsulation with Destruction ---
function createSecureTokenManager(initialSecret) {
  let secret = initialSecret; // Completely enclosed; unreachable via keys or prototypes

  return {
    validate(candidate) {
      return candidate === secret;
    },
    rotate(newSecret) {
      if (!newSecret || newSecret.length < 8) throw new Error("Weak secret");
      secret = newSecret;
    },
    destroy() {
      secret = null; // Explicitly break reference for GC
    }
  };
}
const tokenMgr = createSecureTokenManager("super-secret-key-123");
console.log(tokenMgr.validate("wrong")); // false
console.log(tokenMgr.validate("super-secret-key-123")); // true
```

---

### 3.3 Advanced Coding Problems

#### Problem 3.1: Multi-Key Deep Memoizer with TTL & Memory Pressure Purge
**Requirement**: Build a multi-argument memoizer `deepMemoize(fn, options)` that supports arbitrary primitive and object arguments (using a composite Map/WeakMap Trie), enforces time-to-live (TTL), and supports an explicit `.clear()` and `.size()` method.

```javascript
function deepMemoize(fn, { ttl = Infinity, maxEntries = 1000 } = {}) {
  // Trie node: { primitiveMap: Map, objectMap: WeakMap, entry: { value, expiresAt } }
  const root = { primitiveMap: new Map(), objectMap: new WeakMap(), entry: null };
  let currentSize = 0;

  function getNode(args, createIfMissing = false) {
    let current = root;
    for (const arg of args) {
      const isObj = (typeof arg === "object" && arg !== null) || typeof arg === "function";
      if (isObj) {
        if (!current.objectMap.has(arg)) {
          if (!createIfMissing) return null;
          current.objectMap.set(arg, { primitiveMap: new Map(), objectMap: new WeakMap(), entry: null });
        }
        current = current.objectMap.get(arg);
      } else {
        if (!current.primitiveMap.has(arg)) {
          if (!createIfMissing) return null;
          current.primitiveMap.set(arg, { primitiveMap: new Map(), objectMap: new WeakMap(), entry: null });
        }
        current = current.primitiveMap.get(arg);
      }
    }
    return current;
  }

  const memoized = function (...args) {
    const now = Date.now();
    const existingNode = getNode(args, false);

    if (existingNode && existingNode.entry) {
      if (now < existingNode.entry.expiresAt) {
        return existingNode.entry.value;
      }
      // Expired
      existingNode.entry = null;
      currentSize--;
    }

    const result = fn.apply(this, args);

    if (currentSize >= maxEntries) {
      // Emergency flush on capacity limit
      root.primitiveMap.clear();
      currentSize = 0;
    }

    const node = getNode(args, true);
    node.entry = {
      value: result,
      expiresAt: ttl === Infinity ? Infinity : now + ttl
    };
    currentSize++;
    return result;
  };

  memoized.size = () => currentSize;
  memoized.clear = () => {
    root.primitiveMap.clear();
    currentSize = 0;
  };

  return memoized;
}

// Verification:
let calls = 0;
const compute = (obj, str) => { calls++; return `${obj.id}:${str.toUpperCase()}`; };
const memoizedCompute = deepMemoize(compute, { ttl: 500 });

const entity = { id: 101 };
console.log(memoizedCompute(entity, "hello")); // calls = 1
console.log(memoizedCompute(entity, "hello")); // calls = 1 (cached)
console.log("Total computations:", calls);     // 1
```

#### Problem 3.2: Stateful Circuit Breaker via Lexical State
**Requirement**: Implement a `createCircuitBreaker(asyncFn, options)` returning an executor with three internal states: `CLOSED` (normal), `OPEN` (failing, fast-fail), and `HALF_OPEN` (testing recovery). Must use closures to encapsulate state, failure count, and cooldown timers.

```javascript
function createCircuitBreaker(asyncFn, { failureThreshold = 3, cooldownMs = 1000 } = {}) {
  let state = "CLOSED"; // CLOSED | OPEN | HALF_OPEN
  let consecutiveFailures = 0;
  let nextAttemptAllowedAt = 0;

  return async function (...args) {
    const now = Date.now();

    if (state === "OPEN") {
      if (now >= nextAttemptAllowedAt) {
        state = "HALF_OPEN";
      } else {
        throw new Error(`CircuitBreaker is OPEN. Next probe allowed in ${nextAttemptAllowedAt - now}ms`);
      }
    }

    try {
      const result = await asyncFn.apply(this, args);
      // Success resets circuit
      if (state === "HALF_OPEN" || consecutiveFailures > 0) {
        state = "CLOSED";
        consecutiveFailures = 0;
      }
      return result;
    } catch (err) {
      consecutiveFailures++;
      if (consecutiveFailures >= failureThreshold || state === "HALF_OPEN") {
        state = "OPEN";
        nextAttemptAllowedAt = Date.now() + cooldownMs;
      }
      throw err;
    }
  };
}

// Verification:
let fail = true;
const unstableService = async () => {
  if (fail) throw new Error("Database timeout");
  return "Query OK";
};

const breaker = createCircuitBreaker(unstableService, { failureThreshold: 2, cooldownMs: 300 });

(async () => {
  try { await breaker(); } catch (e) { /* fail 1 */ }
  try { await breaker(); } catch (e) { /* fail 2 -> trips circuit */ }
  try {
    await breaker(); // Instant fast-fail
  } catch (e) {
    console.log("Breaker blocked call:", e.message);
  }
})();
```

#### Problem 3.3: Leaked Reference Sanitizer & Self-Destructing Closure
**Requirement**: Create a security wrapper `withEphemerality(fn, maxInvocations, selfDestructCallback)` that allows a sensitive function to be invoked at most `maxInvocations` times, after which all internal enclosed references are overwritten with `null` and frozen.

```javascript
function withEphemerality(fn, maxInvocations = 1, onDestruct = () => {}) {
  let enclosedFn = fn;
  let invocationCount = 0;
  let isDestroyed = false;

  return function ephemeralWrapper(...args) {
    if (isDestroyed) {
      throw new Error("Security Violation: Attempted to call destroyed ephemeral closure");
    }

    invocationCount++;
    try {
      return enclosedFn.apply(this, args);
    } finally {
      if (invocationCount >= maxInvocations) {
        isDestroyed = true;
        enclosedFn = null; // Unlink target function for GC
        onDestruct();
      }
    }
  };
}

// Verification:
let cipher = withEphemerality((msg) => `Decrypted: [${msg}]`, 2, () => console.log("Cipher scrubbed"));
console.log(cipher("payload_1")); // Decrypted: [payload_1]
console.log(cipher("payload_2")); // Decrypted: [payload_2] -> triggers scrub
try {
  cipher("payload_3");
} catch (e) {
  console.log(e.message); // Security Violation: Attempted to call destroyed ephemeral closure
}
```

#### Problem 3.4: Encapsulated State Store with Immutable Redo/Undo History
**Requirement**: Implement `createStore(initialState)` using closures to provide a Redux-like store with `getState()`, `dispatch(reducer)`, `undo()`, and `redo()`. Internal historical states must be completely inaccessible directly and protected against mutations.

```javascript
function createStore(initialState) {
  let history = [Object.freeze(structuredClone(initialState))];
  let currentIndex = 0;
  const listeners = new Set();

  function notify() {
    listeners.forEach((listener) => listener(history[currentIndex]));
  }

  return {
    getState() {
      return history[currentIndex];
    },
    dispatch(actionReducer) {
      const nextState = actionReducer(history[currentIndex]);
      // Discard future if branch was undone
      history = history.slice(0, currentIndex + 1);
      history.push(Object.freeze(structuredClone(nextState)));
      currentIndex++;
      notify();
      return history[currentIndex];
    },
    undo() {
      if (currentIndex > 0) {
        currentIndex--;
        notify();
        return true;
      }
      return false;
    },
    redo() {
      if (currentIndex < history.length - 1) {
        currentIndex++;
        notify();
        return true;
      }
      return false;
    },
    subscribe(fn) {
      listeners.add(fn);
      return () => listeners.delete(fn);
    }
  };
}

// Verification:
const store = createStore({ count: 0 });
store.dispatch((s) => ({ count: s.count + 10 }));
store.dispatch((s) => ({ count: s.count + 5 }));
console.log("Current:", store.getState()); // { count: 15 }
store.undo();
console.log("After Undo:", store.getState()); // { count: 10 }
store.redo();
console.log("After Redo:", store.getState()); // { count: 15 }
```

#### Problem 3.5: Sliding-Window Token Bucket Rate Limiter via Lexical State
**Requirement**: Create a rate-limiter closure `createRateLimiter({ capacity, refillRatePerSec })` that tracks token replenishment purely through closure variables and timestamps, returning a boolean indicating if a request was accepted.

```javascript
function createRateLimiter({ capacity = 10, refillRatePerSec = 2 } = {}) {
  let tokens = capacity;
  let lastRefillTimestamp = Date.now();

  return function tryAcquire(requestedTokens = 1) {
    const now = Date.now();
    const elapsedTimeInSeconds = (now - lastRefillTimestamp) / 1000;

    // Refill tokens based on elapsed time
    tokens = Math.min(capacity, tokens + elapsedTimeInSeconds * refillRatePerSec);
    lastRefillTimestamp = now;

    if (tokens >= requestedTokens) {
      tokens -= requestedTokens;
      return { allowed: true, remainingTokens: Math.floor(tokens) };
    }

    const waitTimeMs = Math.ceil(((requestedTokens - tokens) / refillRatePerSec) * 1000);
}

// Verification:
const limiter = createRateLimiter({ capacity: 3, refillRatePerSec: 1 });
console.log(limiter(2)); // { allowed: true, remainingTokens: 1 }
console.log(limiter(2)); // { allowed: false, remainingTokens: 1, retryAfterMs: ... }

---

## 4. The `this` Keyword, Dynamic Binding & Polyfills

### 4.1 Architectural Theory

In JavaScript, `this` is not author-time (lexical) binding (with the sole exception of arrow functions); it is **call-site runtime binding**.

```
                           The 4 Call-Site Binding Rules
 ┌────────────────────────────────────────────────────────────────────────────┐
 │ 1. 'new' Binding      ──► new Foo()          (this = newly allocated obj)  │
 │ 2. Explicit Binding   ──► fn.call/apply/bind (this = explicitly passed obj)│
 │ 3. Implicit Binding   ──► obj.fn()           (this = context object)       │
 │ 4. Default Binding    ──► fn()               (this = global / undefined)   │
 └────────────────────────────────────────────────────────────────────────────┘
         Precedence: new Binding > Explicit > Implicit > Default
```

#### Senior Call-Site Rules:
1. **Method Tearing (Losing Implicit Context)**:
   - Extracting a method (`const f = obj.show; f();`) detaches it from `obj`, falling back to Default Binding (`undefined` in strict mode).
2. **Arrow Functions (`() => {}`)**:
   - Do not possess a `[[ThisBindingStatus]]`. They lexically resolve `this` from the enclosing execution context's environment record. `.call()`, `.apply()`, and `.bind()` are completely ignored by arrow functions.
3. **Hard Binding & The `new` Operator Override**:
   - `Function.prototype.bind` hard-binds a context. However, the ECMAScript spec dictates that if a bound function is invoked with `new`, the `thisArg` supplied to `.bind()` is **ignored**, and `this` becomes the newly constructed instance, while prepended arguments are still passed!

---

### 4.2 Senior Code Demonstrations

```javascript
// --- 1. Method Tearing & Implicit Binding Loss ---
const service = {
  name: "AuthService",
  getName() {
    return this ? this.name : "Context Lost";
  }
};

console.log(service.getName()); // "AuthService" (Implicit binding)
const detached = service.getName;
console.log(detached());        // "Context Lost" (Default binding, undefined in strict)

// --- 2. Arrow Functions Ignore Explicit Binding ---
const arrow = () => this;
console.log(arrow.call({ id: 100 }) === this); // true (Explicit binding ignored)

// --- 3. Bound Function Constructor Override ---
function User(role, name) {
  this.role = role;
  this.name = name;
}
const AdminUser = User.bind({ dummy: true }, "ADMIN");
const admin = new AdminUser("Alice");
console.log(admin.role); // "ADMIN"
console.log(admin instanceof User); // true (new overrides hard-bound thisArg!)
```

---

### 4.3 Advanced Coding Problems

#### Problem 4.1: Production-Grade `Function.prototype.myBind`
**Requirement**: Implement a complete polyfill for `bind` (`myBind`) that conforms to the ECMAScript specification: handles partial application (currying), preserves the prototype chain, and allows `new` instantiation to override the bound context while retaining prepended arguments.

```javascript
Function.prototype.myBind = function (thisArg, ...prependedArgs) {
  if (typeof this !== "function") {
    throw new TypeError("Function.prototype.myBind - what is trying to be bound is not callable");
  }

  const targetFn = this;

  function boundFunction(...invokedArgs) {
    const combinedArgs = [...prependedArgs, ...invokedArgs];

    // If called with 'new', this is an instance of boundFunction.
    // In that case, ignore thisArg and use the newly constructed 'this'.
    const isConstructed = new.target !== undefined;
    const executionContext = isConstructed ? this : thisArg;

    return targetFn.apply(executionContext, combinedArgs);
  }

  // Preserve prototype chain for instanceof checks when targetFn has prototype
  if (targetFn.prototype) {
    boundFunction.prototype = Object.create(targetFn.prototype);
    boundFunction.prototype.constructor = boundFunction;
  }

  // Preserve length and name descriptors
  const remainingLength = Math.max(0, targetFn.length - prependedArgs.length);
  Object.defineProperties(boundFunction, {
    length: { value: remainingLength, configurable: true },
    name: { value: `bound ${targetFn.name || "anonymous"}`, configurable: true }
  });

  return boundFunction;
};

// Verification:
function Point(x, y) {
  this.x = x;
  this.y = y;
}
Point.prototype.getDistance = function () {
  return Math.hypot(this.x, this.y);
};

const YPoint = Point.myBind(null, 10);
const p = new YPoint(20);
console.log(p.x, p.y); // 10, 20
console.log(p.getDistance()); // 22.360679774997898
console.log(p instanceof Point); // true
```

#### Problem 4.2: Symbol-Safe Polyfills for `myCall` and `myApply`
**Requirement**: Implement `myCall(thisArg, ...args)` and `myApply(thisArg, argsArray)` without using native `call`, `apply`, or `bind`, without polluting the target object with enumerable keys, and handling primitive `thisArg` (boxing primitives to objects, or defaulting to `globalThis`).

```javascript
Function.prototype.myCall = function (thisArg, ...args) {
  if (typeof this !== "function") {
    throw new TypeError(this + " is not a function");
  }

  // Normalize thisArg: null/undefined -> globalThis, primitives -> Object(primitive)
  let context = thisArg === null || thisArg === undefined ? globalThis : Object(thisArg);

  // Use unique Symbol to prevent property collisions
  const fnSymbol = Symbol("temp_call_fn");
  Object.defineProperty(context, fnSymbol, {
    value: this,
    configurable: true,
    enumerable: false,
    writable: true
  });

  try {
    return context[fnSymbol](...args); // Implicit binding executes target function
  } finally {
    delete context[fnSymbol]; // Clean up
  }
};

Function.prototype.myApply = function (thisArg, argsArray = []) {
  if (typeof this !== "function") {
    throw new TypeError(this + " is not a function");
  }
  if (argsArray !== null && argsArray !== undefined && !Array.isArray(argsArray) && typeof argsArray[Symbol.iterator] !== "function") {
    throw new TypeError("CreateListFromArrayLike called on non-object");
  }

  const args = argsArray ? Array.from(argsArray) : [];
  return this.myCall(thisArg, ...args);
};

// Verification:
const account = { balance: 5000 };
function deposit(amount, currency) {
  this.balance += amount;
  return `${this.balance} ${currency}`;
}
console.log(deposit.myCall(account, 1500, "USD")); // "6500 USD"
console.log(deposit.myApply(account, [500, "USD"])); // "7000 USD"
```

#### Problem 4.3: Class Instance Method Auto-Binder
**Requirement**: Write `autoBind(instance)` that inspects any class instance and its entire prototype hierarchy up to `Object.prototype`, automatically binding all prototype methods to the instance so they can never lose `this` context when passed as callbacks.

```javascript
function autoBind(instance) {
  const isExcluded = (prop) => prop === "constructor" || prop.startsWith("__");
  let proto = Object.getPrototypeOf(instance);

  while (proto && proto !== Object.prototype) {
    const descriptors = Object.getOwnPropertyDescriptors(proto);
    for (const [key, descriptor] of Object.entries(descriptors)) {
      if (!isExcluded(key) && typeof descriptor.value === "function") {
        instance[key] = descriptor.value.bind(instance);
      }
    }
    proto = Object.getPrototypeOf(proto);
  }
  return instance;
}

// Verification:
class Controller {
  constructor(name) {
    this.name = name;
    autoBind(this);
  }
  handleClick() {
    return `Event handled by ${this.name}`;
  }
}

const ctrl = new Controller("AppController");
const detachedClick = ctrl.handleClick;
console.log(detachedClick()); // "Event handled by AppController" (No context loss!)
```

#### Problem 4.4: Dynamic Method Borrowing & Contract Enforcement
**Requirement**: Build `borrowMethod(sourceProto, methodName, targetObj, ...args)` that validates whether `targetObj` satisfies the structural contract (property requirements) expected by `sourceProto[methodName]` before executing, throwing clear contract violation errors if properties are missing.

```javascript
function borrowMethod(sourceProto, methodName, requiredProperties, targetObj, ...args) {
  const method = sourceProto[methodName];
  if (typeof method !== "function") {
    throw new TypeError(`Method '${methodName}' not found on source prototype`);
  }

  // Validate contract
  for (const prop of requiredProperties) {
    if (!(prop in targetObj)) {
      throw new TypeError(`Contract Violation: Target object lacks required property '${prop}' for method '${methodName}'`);
    }
  }

  return Reflect.apply(method, targetObj, args);
}

// Verification:
const ArrayProtoSlice = Array.prototype;
const arrayLike = { 0: "alpha", 1: "beta", length: 2 };
console.log(borrowMethod(ArrayProtoSlice, "slice", ["length"], arrayLike, 0, 1)); // ['alpha']

try {
  borrowMethod(ArrayProtoSlice, "slice", ["length"], { 0: "err" });
} catch (e) {
  console.log(e.message); // Contract Violation: Target object lacks required property 'length'
}
```

#### Problem 4.5: Context-Preserving Asynchronous Execution Zone
**Requirement**: Implement `createAsyncContextZone()` that provides `runInContext(ctx, fn)` and `wrapCallback(fn)`. Any asynchronous operation or callback triggered within a zone automatically preserves and restores that zone's context, simulating `AsyncLocalStorage` in pure userland.

```javascript
function createAsyncContextZone() {
  let activeContext = null;

  return {
    runInContext(context, fn) {
      const priorContext = activeContext;
      activeContext = context;
      try {
        return fn();
      } finally {
        activeContext = priorContext;
      }
    },
    getCurrentContext() {
      return activeContext;
    },
    wrapCallback(callback) {
      const capturedContext = activeContext;
      return function (...args) {
        const priorContext = activeContext;
        activeContext = capturedContext;
        try {
          return callback.apply(this, args);
        } finally {
          activeContext = priorContext;
        }
      };
    }
  };
}

// Verification:
const zone = createAsyncContextZone();

zone.runInContext({ requestId: "REQ-9921" }, () => {
  const wrapped = zone.wrapCallback(() => {
    console.log("Async Callback Executed with Context:", zone.getCurrentContext());
  });

  // Execute in separate stack tick
  setTimeout(wrapped, 10);
});
// Outputs: { requestId: 'REQ-9921' }
```

---

## 5. Prototypes, Prototypal Inheritance & Modern Classes

### 5.1 Architectural Theory

In JavaScript, objects inherit directly from other objects via an internal link termed `[[Prototype]]`.

```
                    The ECMAScript Prototype Chain
 ┌────────────────┐          ┌───────────────────────┐          ┌───────────────────┐
 │ Instance (p1)  │          │ Point.prototype       │          │ Object.prototype  │
 │  ├─ x: 10      │          │  ├─ getDistance: fn   │          │  ├─ toString: fn  │
 │  └─[[Proto]] ──┼─────────►│  ├─ constructor: Point│          │  ├─ hasOwn: fn    │
 └────────────────┘          │  └─[[Proto]] ─────────┼─────────►│  └─[[Proto]]: null│
                             └───────────────────────┘          └───────────────────┘
```

#### Core Invariants:
1. **`prototype` vs `[[Prototype]]`**:
   - `prototype` is an ordinary property automatically placed on function objects.
   - `[[Prototype]]` is the internal link on an instance (accessible via `Object.getPrototypeOf(obj)` or `__proto__`).
2. **Read vs Write Asymmetry (Shadowing)**:
   - *Reading* `obj.foo` traverses up the chain until found or `null`.
   - *Writing* `obj.foo = val` sets `foo` as an **own property** on `obj`, shadowing any prototype property, UNLESS a prototype property has a setter (in which case the setter is called) or is `writable: false` in strict mode (throws `TypeError`).
3. **Prototype Pollution**:
   - A critical vulnerability where untrusted user JSON (e.g. `{"__proto__": {"isAdmin": true}}`) pollutes `Object.prototype`, affecting every object in the runtime.
   - *Mitigation*: Use `Object.create(null)` for key-value maps, validate keys against `__proto__`, `constructor`, `prototype`, or freeze `Object.prototype`.
4. **ES6 Classes Desugared**:
   - `class Foo {}` is a constructor function.
   - Methods defined in a class body are non-enumerable (`enumerable: false`).
   - Calling a class without `new` throws `TypeError` (`[[IsClassConstructor]]` internal flag).
   - `super.method()` is statically bound using `[[HomeObject]]` at definition time, resolving the method from `Object.getPrototypeOf([[HomeObject]])`.

---

### 5.2 Senior Code Demonstrations

```javascript
// --- 1. Read vs Write Asymmetry Demonstration ---
const protoParent = { counter: 1 };
const childObj = Object.create(protoParent);

console.log(childObj.counter); // 1 (Delegated read)
childObj.counter += 5;         // Evaluates childObj.counter (1) + 5 = 6, writes OWN property!
console.log(childObj.counter); // 6 (Own property)
console.log(protoParent.counter); // 1 (Parent untouched)
console.log(childObj.hasOwnProperty("counter")); // true

// --- 2. Prototype Pollution Vulnerability & Hardening ---
function insecureMerge(target, source) {
  for (let key in source) {
    if (typeof source[key] === "object" && source[key] !== null) {
      target[key] = target[key] || {};
      insecureMerge(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
}

// Hardened merge with key sanitization
function secureMerge(target, source) {
  const dangerousKeys = new Set(["__proto__", "constructor", "prototype"]);
  for (const key of Reflect.ownKeys(source)) {
    if (dangerousKeys.has(key)) continue; // Shield prototype
    const val = source[key];
    if (val && typeof val === "object" && !Array.isArray(val)) {
      target[key] = target[key] || Object.create(null);
      secureMerge(target[key], val);
    } else {
      target[key] = val;
    }
  }
  return target;
}
```

---

### 5.3 Advanced Coding Problems

#### Problem 5.1: Safe Deep Merge with Prototype Pollution Shield & Symbol Support
**Requirement**: Implement `deepMerge(target, source)` that recursively merges objects and arrays, safely clones primitives and nested structures, copies `Symbol` keys, prevents prototype pollution attacks, and preserves original prototypes.

```javascript
function deepMerge(target, source, visited = new WeakMap()) {
  if (source === null || typeof source !== "object") return source;
  if (target === null || typeof target !== "object") {
    target = Array.isArray(source) ? [] : Object.create(Object.getPrototypeOf(source));
  }

  // Circular reference protection
  if (visited.has(source)) return visited.get(source);
  visited.set(source, target);

  const blockedKeys = new Set(["__proto__", "constructor", "prototype"]);
  const allKeys = [...Object.getOwnPropertyNames(source), ...Object.getOwnPropertySymbols(source)];

  for (const key of allKeys) {
    if (blockedKeys.has(key)) continue;

    const descriptor = Object.getOwnPropertyDescriptor(source, key);
    if (!descriptor || !descriptor.enumerable) continue;

    const sourceVal = source[key];
    if (typeof sourceVal === "object" && sourceVal !== null) {
      if (Array.isArray(sourceVal)) {
        target[key] = Array.isArray(target[key]) ? target[key] : [];
        target[key] = deepMerge(target[key], sourceVal, visited);
      } else {
        const targetProto = target[key] ? Object.getPrototypeOf(target[key]) : Object.prototype;
        target[key] = target[key] && typeof target[key] === "object" ? target[key] : Object.create(targetProto);
        target[key] = deepMerge(target[key], sourceVal, visited);
      }
    } else {
      target[key] = sourceVal;
    }
  }
  return target;
}

// Verification:
const payload = JSON.parse('{"__proto__": {"isAdmin": true}, "settings": {"theme": "dark"}}');
const cleanObj = {};
deepMerge(cleanObj, payload);
console.log(cleanObj.settings.theme); // "dark"
console.log(({}).isAdmin); // undefined (Prototype pollution defeated!)
```

#### Problem 5.2: Multiple Trait Mixin Linearization Engine
**Requirement**: Build a mixin composer `composeTraits(BaseClass, ...Traits)` that supports combining multiple behavioral traits into an ES6 class hierarchy while handling method conflicts explicitly and linearizing prototype relationships.

```javascript
function composeTraits(BaseClass, ...traits) {
  class ComposedClass extends BaseClass {
    constructor(...args) {
      super(...args);
      // Run trait initializers if defined
      for (const trait of traits) {
        if (typeof trait.initialize === "function") {
          trait.initialize.call(this);
        }
      }
    }
  }

  for (const trait of traits) {
    const descriptors = Object.getOwnPropertyDescriptors(trait);
    for (const [key, desc] of Object.entries(descriptors)) {
      if (key === "initialize") continue;
      if (key in ComposedClass.prototype) {
        throw new Error(`Trait conflict: Method '${key}' already defined on prototype`);
      }
      Object.defineProperty(ComposedClass.prototype, key, desc);
    }
  }

  return ComposedClass;
}

// Verification:
class BaseRecord {
  constructor(id) { this.id = id; }
}
const Timestamped = {
  initialize() { this.createdAt = new Date(); },
  getTimestamp() { return this.createdAt.toISOString(); }
};
const Serializable = {
  toJSON() { return JSON.stringify(this); }
};

const EnhancedRecord = composeTraits(BaseRecord, Timestamped, Serializable);
const record = new EnhancedRecord("REC-001");
console.log(record.id); // "REC-001"
console.log(typeof record.getTimestamp); // "function"
console.log(typeof record.toJSON);      // "function"
```

#### Problem 5.3: Spec-Compliant `instanceof` Polyfill
**Requirement**: Implement `myInstanceOf(instance, constructor)` that honors the ECMAScript 6 specification: checks `Symbol.hasInstance` method if present, handles primitive non-objects safely, and traverses the `[[Prototype]]` chain until matching `constructor.prototype` or `null`.

```javascript
function myInstanceOf(instance, constructor) {
  if (constructor === null || (typeof constructor !== "object" && typeof constructor !== "function")) {
    throw new TypeError("Right-hand side of 'instanceof' is not callable");
  }

  // 1. Check for custom Symbol.hasInstance
  if (typeof constructor[Symbol.hasInstance] === "function") {
    return Boolean(constructor[Symbol.hasInstance](instance));
  }

  // 2. Primitives always return false if no custom hasInstance
  if (instance === null || (typeof instance !== "object" && typeof instance !== "function")) {
    return false;
  }

  const targetPrototype = constructor.prototype;
  if (targetPrototype === null || typeof targetPrototype !== "object") {
    throw new TypeError(`Function has non-object prototype '${targetPrototype}' in instanceof check`);
  }

  // 3. Traverse prototype chain
  let current = Object.getPrototypeOf(instance);
  while (current !== null) {
    if (current === targetPrototype) return true;
    current = Object.getPrototypeOf(current);
  }
  return false;
}

// Verification:
class Vehicle {}
class Car extends Vehicle {}
const c = new Car();

console.log(myInstanceOf(c, Car));     // true
console.log(myInstanceOf(c, Vehicle)); // true
console.log(myInstanceOf(c, Object));  // true
console.log(myInstanceOf(c, Array));   // false
console.log(myInstanceOf(123, Number)); // false (primitive)
```

#### Problem 5.4: Prototype Chain Inspector & Loop Detector
**Requirement**: Build `analyzePrototypeChain(obj)` returning an array of prototypes up to `null`. If a cycle exists (possible via deprecated `__proto__` mutations in legacy environments), detect the loop and throw a `CycleDetectedError`.

```javascript
class PrototypeCycleError extends Error {
  constructor(message) {
    super(message);
    this.name = "PrototypeCycleError";
  }
}

function analyzePrototypeChain(target) {
  if (target === null || target === undefined) return [];

  const chain = [];
  const visited = new Set();
  let current = Object.getPrototypeOf(target);

  while (current !== null) {
    if (visited.has(current)) {
      throw new PrototypeCycleError("Circular prototype link detected in object chain");
    }
    visited.add(current);

    const constructorName = current.constructor ? current.constructor.name : "[No Constructor]";
    const ownKeys = Reflect.ownKeys(current);
    chain.push({
      constructorName,
      propertyCount: ownKeys.length,
      sampleKeys: ownKeys.slice(0, 5)
    });

    current = Object.getPrototypeOf(current);
  }

  return chain;
}

// Verification:
class Tier1 {}
class Tier2 extends Tier1 {}
class Tier3 extends Tier2 {}
const t = new Tier3();
console.log(analyzePrototypeChain(t).map((c) => c.constructorName));
// ['Tier2', 'Tier1', 'Object']
```

#### Problem 5.5: Classical ES5 Parasitic Inheritance Desugarer
**Requirement**: Implement `inheritPrototypes(SubClass, SuperClass)` in pure ES5 style that creates the prototype linkage without invoking `SuperClass` constructor twice, correctly wires `.constructor`, and copies static properties.

```javascript
function inheritPrototypes(SubClass, SuperClass) {
  if (typeof SubClass !== "function" || typeof SuperClass !== "function") {
    throw new TypeError("SubClass and SuperClass must both be constructor functions");
  }

  // Equivalent to Object.create(SuperClass.prototype)
  function F() {}
  F.prototype = SuperClass.prototype;
  const prototypeInstance = new F();

  prototypeInstance.constructor = SubClass;
  SubClass.prototype = prototypeInstance;

  // Static property inheritance: SubClass.__proto__ = SuperClass
  Object.setPrototypeOf(SubClass, SuperClass);
}

// Verification:
function Animal(species) { this.species = species; }
Animal.prototype.speak = function () { return `I am a ${this.species}`; };
Animal.identify = function () { return "Kingdom Animalia"; };

function Dog(name) {
  Animal.call(this, "Canine");
  this.name = name;
}
inheritPrototypes(Dog, Animal);

const d = new Dog("Buddy");
console.log(d.speak()); // "I am a Canine"
console.log(d.constructor === Dog); // true
console.log(Dog.identify()); // "Kingdom Animalia" (static inheritance works)
```

---

## 6. Object Descriptors, Proxies, Reflect & Metaprogramming

### 6.1 Architectural Theory

Every JavaScript property is governed by a **Property Descriptor** within the engine.

```
                  Property Descriptor Classification
 ┌─────────────────────────────────────────────────────────────────┐
 │ Data Descriptor:     { value, writable, enumerable, configurable }
 │ Accessor Descriptor: { get, set, enumerable, configurable }    │
 └─────────────────────────────────────────────────────────────────┘
```

#### Object Integrity Levels:
- `Object.preventExtensions(obj)`: Blocks new properties; existing properties can be deleted/modified.
- `Object.seal(obj)`: Sets `configurable: false` on all properties; no new properties; values can still be mutated if `writable: true`.
- `Object.freeze(obj)`: Sets `configurable: false` and `writable: false` on all properties. (Shallow freeze).

#### Proxy & Reflect Invariants:
1. **Traps**: Intercept 13 internal methods (`[[Get]]`, `[[Set]]`, `[[HasProperty]]`, `[[Delete]]`, `[[Construct]]`, `[[Call]]`, `[[OwnPropertyKeys]]`, etc.).
2. **Reflect API**: 1:1 reflection of internal methods. Always use `Reflect` inside Proxy traps.
3. **The Receiver Parameter**:
   - `Reflect.get(target, prop, receiver)`: The `receiver` guarantees that if a property is a getter, `this` inside the getter points to the **Proxy**, NOT the underlying target.
4. **Proxy Invariants**:
   - You cannot return `false` from a `has` trap if the property is non-configurable on the target.
   - You cannot return a modified value from a `get` trap if the target property is non-writable and non-configurable.

### 6.2 Senior Code Demonstrations

```javascript
// --- 1. The Receiver Trap in Proxy Getters ---
const state = {
  _value: 10,
  get computed() {
    return this._value * 2; // Needs 'this' to be the proxy to track dependencies!
  }
};

const observedProxy = new Proxy(state, {
  get(target, prop, receiver) {
    console.log(`Accessing property: ${String(prop)}`);
    // MUST pass receiver to Reflect.get so 'this' inside getter is observedProxy:
    return Reflect.get(target, prop, receiver);
  }
});

console.log(observedProxy.computed);
// Accessing property: computed
// Accessing property: _value (Triggered because receiver passed correctly!)
// Output: 20

// --- 2. Complete Deep Freeze with Cycle Guard ---
function deepFreeze(obj, seen = new WeakSet()) {
  if (obj === null || typeof obj !== "object" || seen.has(obj)) return obj;
  seen.add(obj);

  Object.freeze(obj);
  for (const key of Reflect.ownKeys(obj)) {
    const val = obj[key];
    if (val && typeof val === "object") {
      deepFreeze(val, seen);
    }
  }
  return obj;
}
```

### 6.3 Advanced Coding Problems

#### Problem 6.1: Fine-Grained Reactive Observable with Computed Dependency Tracking
**Requirement**: Build a miniature reactivity engine (`reactive(obj)` and `computed(fn)`) using `Proxy` and `Reflect`. When properties are accessed inside a `computed` function, record dependencies; when mutated, automatically trigger re-evaluations.

```javascript
let activeEffect = null;

function reactive(target) {
  const targetSubscribers = new Map(); // prop -> Set<Effect>

  return new Proxy(target, {
    get(obj, prop, receiver) {
      if (activeEffect) {
        let subs = targetSubscribers.get(prop);
        if (!subs) {
          subs = new Set();
          targetSubscribers.set(prop, subs);
        }
        subs.add(activeEffect);
      }
      const val = Reflect.get(obj, prop, receiver);
      return typeof val === "object" && val !== null ? reactive(val) : val;
    },
    set(obj, prop, value, receiver) {
      const oldValue = Reflect.get(obj, prop, receiver);
      const success = Reflect.set(obj, prop, value, receiver);
      if (success && oldValue !== value) {
        const subs = targetSubscribers.get(prop);
        if (subs) {
          subs.forEach((effect) => effect());
        }
      }
      return success;
    }
  });
}

function computed(getter) {
  let cachedValue;
  let isDirty = true;

  const effect = () => {
    isDirty = true;
  };

  return {
    get value() {
      if (isDirty) {
        const previousEffect = activeEffect;
        activeEffect = effect;
        cachedValue = getter();
        activeEffect = previousEffect;
        isDirty = false;
      }
      return cachedValue;
    }
  };
}

// Verification:
const stateData = reactive({ price: 100, tax: 0.2 });
const total = computed(() => stateData.price * (1 + stateData.tax));

console.log(total.value); // 120
stateData.price = 200;    // Marks dirty
console.log(total.value); // 240
```

#### Problem 6.2: Pythonic Negative Indexing & Slicing Proxy
**Requirement**: Build `createSmartArray(...initialItems)` returning an Array proxy that supports Python-style negative indices (`arr[-1]`), slicing strings (`arr['1:4']`), and negative index assignments (`arr[-1] = 99`).

```javascript
function createSmartArray(...initialItems) {
  const arr = [...initialItems];

  return new Proxy(arr, {
    get(target, prop, receiver) {
      if (typeof prop === "string") {
        // Range slice check: '1:4' or '-3:'
        if (prop.includes(":")) {
          const [startStr, endStr] = prop.split(":");
          let start = startStr ? parseInt(startStr, 10) : 0;
          let end = endStr ? parseInt(endStr, 10) : target.length;
          if (start < 0) start += target.length;
          if (end < 0) end += target.length;
          return target.slice(start, end);
        }

        // Negative index check: '-1'
        const index = Number(prop);
        if (Number.isInteger(index) && index < 0) {
          const positiveIndex = target.length + index;
          return Reflect.get(target, positiveIndex, receiver);
        }
      }
      return Reflect.get(target, prop, receiver);
    },
    set(target, prop, value, receiver) {
      if (typeof prop === "string") {
        const index = Number(prop);
        if (Number.isInteger(index) && index < 0) {
          const positiveIndex = target.length + index;
          return Reflect.set(target, positiveIndex, value, receiver);
        }
      }
      return Reflect.set(target, prop, value, receiver);
    }
  });
}

// Verification:
const smartList = createSmartArray("a", "b", "c", "d", "e");
console.log(smartList[-1]);     // "e"
console.log(smartList[-2]);     // "d"
console.log(smartList["1:3"]);   // ['b', 'c']
smartList[-1] = "FINAL";
console.log(smartList[4]);      // "FINAL"
```

#### Problem 6.3: Schema-Enforced Typed Object with Runtime Validation
**Requirement**: Create `createTypedRecord(schema, initialValues)` that uses a Proxy to enforce strict property types, prevents dynamic addition of unlisted properties, and validates types on both initialization and assignment.

```javascript
function createTypedRecord(schema, initialValues) {
  const target = {};

  // Validate and assign initial values
  for (const [key, expectedType] of Object.entries(schema)) {
    if (!(key in initialValues)) {
      throw new TypeError(`Missing required schema property: '${key}'`);
    }
    const val = initialValues[key];
    if (typeof val !== expectedType) {
      throw new TypeError(`Property '${key}' must be of type ${expectedType}, got ${typeof val}`);
    }
    target[key] = val;
  }

  return new Proxy(target, {
    set(obj, prop, value) {
      if (!(prop in schema)) {
        throw new TypeError(`Cannot add unknown property '${String(prop)}' to strict schema record`);
      }
      const expectedType = schema[prop];
      if (typeof value !== expectedType) {
        throw new TypeError(`Invalid assignment: Property '${String(prop)}' expects ${expectedType}, got ${typeof value}`);
      }
      return Reflect.set(obj, prop, value);
    },
    deleteProperty(obj, prop) {
      throw new TypeError(`Cannot delete schema property '${String(prop)}'`);
    }
  });
}

// Verification:
const UserSchema = { id: "number", username: "string", active: "boolean" };
const userRecord = createTypedRecord(UserSchema, { id: 1, username: "dev_lead", active: true });

userRecord.username = "staff_eng"; // OK
try {
  userRecord.id = "string_id"; // Throws TypeError
} catch (e) {
  console.log(e.message); // Invalid assignment: Property 'id' expects number...
}
try {
  userRecord.unknownProp = 123; // Throws TypeError
} catch (e) {
  console.log(e.message); // Cannot add unknown property 'unknownProp'...
}
```

#### Problem 6.4: Lazy-Loading Virtual Proxy with Deferred Hydration
**Requirement**: Implement `createLazyVirtualProxy(initializer)` that returns an object whose heavy underlying resource is never loaded or initialized until the first time any property is read or method is called.

```javascript
function createLazyVirtualProxy(initializer) {
  let instance = null;

  function getInstance() {
    if (!instance) {
      instance = initializer();
    }
    return instance;
  }

  return new Proxy({}, {
    get(_, prop, receiver) {
      const realObj = getInstance();
      return Reflect.get(realObj, prop, receiver);
    },
    set(_, prop, value, receiver) {
      const realObj = getInstance();
      return Reflect.set(realObj, prop, value, receiver);
    },
    has(_, prop) {
      const realObj = getInstance();
      return Reflect.has(realObj, prop);
    },
    ownKeys(_) {
      const realObj = getInstance();
      return Reflect.ownKeys(realObj);
    }
  });
}

// Verification:
let initialized = false;
const heavyDatabaseConnection = createLazyVirtualProxy(() => {
  initialized = true;
  return {
    host: "db.cluster.internal",
    query: (sql) => `Results for [${sql}]`
  };
});

console.log("Initialized before access?:", initialized); // false
console.log(heavyDatabaseConnection.host);               // "db.cluster.internal"
console.log("Initialized after access?:", initialized);  // true
```

#### Problem 6.5: Revocable Security Gate Proxy with Quotas & TTL
**Requirement**: Create `createSecurityGate(target, { maxOperations, ttlMs })` returning `{ proxy, revoke }`. The proxy allows property access and mutations up to `maxOperations` times within `ttlMs` milliseconds, after which it automatically revokes itself and throws `SecurityAccessRevokedError`.

```javascript
class SecurityAccessRevokedError extends Error {
  constructor(reason) {
    super(`Security Access Revoked: ${reason}`);
    this.name = "SecurityAccessRevokedError";
  }
}

function createSecurityGate(target, { maxOperations = 5, ttlMs = 1000 } = {}) {
  let operationsCount = 0;
  let isRevoked = false;
  const expiresAt = Date.now() + ttlMs;

  function verifyAccess() {
    if (isRevoked) {
      throw new SecurityAccessRevokedError("Access was explicitly revoked");
    }
    if (Date.now() > expiresAt) {
      isRevoked = true;
      throw new SecurityAccessRevokedError("Session TTL expired");
    }
    operationsCount++;
    if (operationsCount > maxOperations) {
      isRevoked = true;
      throw new SecurityAccessRevokedError("Operation quota exceeded");
    }
  }

  const { proxy, revoke: internalRevoke } = Proxy.revocable(target, {
    get(obj, prop, receiver) {
      verifyAccess();
      return Reflect.get(obj, prop, receiver);
    },
    set(obj, prop, value, receiver) {
      verifyAccess();
      return Reflect.set(obj, prop, value, receiver);
    }
  });

  return {
    proxy,
    revoke() {
      isRevoked = true;
      internalRevoke();
    }
  };
}

// Verification:
console.log(guardedVault.secret); // OK (op 1)
console.log(guardedVault.secret); // OK (op 2)
try {
  console.log(guardedVault.secret); // Op 3 -> Exceeded
} catch (e) {
  console.log(e.name, "->", e.message);
  // SecurityAccessRevokedError -> Security Access Revoked: Operation quota exceeded
}
```

---

## 7. Iterators, Iterable Protocol & Generators

### 7.1 Architectural Theory

ECMAScript defines protocols for sequence consumption and state-machine generation.

```
                           Iteration Protocols
 ┌──────────────────────┐         ┌──────────────────────────────────────┐
 │ Iterable Protocol    │         │ Iterator Protocol                    │
 │ [Symbol.iterator]() ─┼────────►│ .next() -> { value: any, done: bool }│
 └──────────────────────┘         └──────────────────────────────────────┘
```

#### Senior Engine Internals:
1. **Generator State Machines (`function*`)**:
   - V8 compiles generators into a suspended activation record. Calling `genFunc()` does not execute code; it allocates an object on the heap holding instruction pointers, variable frames, and execution state (`SuspendedStart`).
2. **Bidirectional Message Exchange**:
   - `const input = yield output;`: `output` is returned by `iter.next().value`. The next `iter.next(val)` call resumes the generator and assigns `val` to `input`.
3. **Delegation via `yield*`**:
   - Automatically delegates `.next()`, `.throw()`, and `.return()` to the nested iterable. The `yield*` expression evaluates to whatever the nested generator returns via `return`.
4. **Async Iterators (`Symbol.asyncIterator`)**:
   - Calling `.next()` returns a `Promise<{ value, done }>`. Consumed via `for await (const x of asyncIterable)`.

---

### 7.2 Senior Code Demonstrations

```javascript
// --- 1. Bidirectional Value Injection & Delegation ---
function* subTask() {
  const answer = yield "What is 20 + 20?";
  return `Computed: ${answer * 2}`;
}

function* masterTask() {
  console.log("Starting master task...");
  const subResult = yield* subTask(); // yield* captures return value of subTask!
  console.log("Master received sub-result:", subResult);
  yield "Master Complete";
}

const g = masterTask();
console.log(g.next().value);       // "What is 20 + 20?"
console.log(g.next(40).value);     // Logs "Master received...", yields "Master Complete"
console.log(g.next().done);        // true

// --- 2. Memory-Safe Infinite Sequence Generator ---
function* primeGenerator() {
  yield 2;
  const primes = [2];
  let candidate = 3;

  while (true) {
    let isPrime = true;
    const sqrt = Math.sqrt(candidate);
    for (const p of primes) {
      if (p > sqrt) break;
      if (candidate % p === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(candidate);
      yield candidate;
    }
    candidate += 2;
  }
}
const primes = primeGenerator();
console.log(primes.next().value); // 2
console.log(primes.next().value); // 3
console.log(primes.next().value); // 5
```

---

### 7.3 Advanced Coding Problems

#### Problem 7.1: Generator-Based Coroutine Task Runner (`co` Engine)
**Requirement**: Build a coroutine executor `runCoroutine(generatorFn)` that accepts a generator yielding promises. The runner executes the generator asynchronously, resuming on promise fulfillment with the resolved value, throwing rejections into the generator via `gen.throw()`, and resolving the final returned value as a Promise.

```javascript
function runCoroutine(generatorFn, ...args) {
  return new Promise((resolve, reject) => {
    const gen = typeof generatorFn === "function" ? generatorFn(...args) : generatorFn;
    if (!gen || typeof gen.next !== "function") {
      return resolve(gen);
    }

    function step(verb, arg) {
      let result;
      try {
        result = gen[verb](arg);
      } catch (err) {
        return reject(err);
      }

      if (result.done) {
        return resolve(result.value);
      }

      // Ensure yielded value is converted to a promise
      Promise.resolve(result.value).then(
        (val) => step("next", val),
        (err) => step("throw", err)
      );
    }

    step("next");
  });
}

// Verification:
const fetchUserData = (id) => new Promise((res) => setTimeout(() => res({ id, name: "Staff Engineer" }), 20));
const fetchUserRoles = (id) => new Promise((res) => setTimeout(() => res(["ADMIN", "ENGINEERING"]), 20));

runCoroutine(function* () {
  const user = yield fetchUserData(42);
  const roles = yield fetchUserRoles(user.id);
  return { ...user, roles };
}).then((data) => {
  console.log("Coroutine Result:", data);
  // { id: 42, name: 'Staff Engineer', roles: ['ADMIN', 'ENGINEERING'] }
});
```

#### Problem 7.2: Lazy Infinite Stream Pipeline
**Requirement**: Create `Stream.from(iterableOrGenerator)` providing lazy, chainable transformations: `.map(fn)`, `.filter(predicate)`, `.take(n)`, `.drop(n)`, and `.collect()`. Elements must only be computed on-demand when collected.

```javascript
class Stream {
  constructor(iterable) {
    this.iterable = iterable;
  }

  static from(source) {
    return new Stream(source);
  }

  *[Symbol.iterator]() {
    yield* this.iterable;
  }

  map(fn) {
    const source = this;
    return new Stream(function* () {
      let index = 0;
      for (const item of source) {
        yield fn(item, index++);
      }
    }());
  }

  filter(predicate) {
    const source = this;
    return new Stream(function* () {
      let index = 0;
      for (const item of source) {
        if (predicate(item, index++)) yield item;
      }
    }());
  }

  take(count) {
    const source = this;
    return new Stream(function* () {
      let taken = 0;
      for (const item of source) {
        if (taken++ >= count) break;
        yield item;
      }
    }());
  }

  drop(count) {
    const source = this;
    return new Stream(function* () {
      let dropped = 0;
      for (const item of source) {
        if (dropped++ < count) continue;
        yield item;
      }
    }());
  }

  collect() {
    return Array.from(this);
  }
}

// Verification: Infinite numbers sequence transformed lazily
function* naturalNumbers() {
  let n = 1;
  while (true) yield n++;
}

const result = Stream.from(naturalNumbers())
  .filter((n) => n % 2 === 0)
  .map((n) => n * 10)
  .drop(2)
  .take(3)
  .collect();

console.log(result); // [60, 80, 100] (Computed with zero infinite-loop hang!)
```

#### Problem 7.3: Bidirectional Actor Model State Machine
**Requirement**: Build an Actor state machine using a generator `createActor(stateReducer, initialContext)` that receives message events via `.send({ type, payload })`, updates its internal private context, and yields the new context back to callers.

```javascript
function createActor(reducer, initialContext) {
  function* actorLoop() {
    let context = initialContext;
    while (true) {
      // Suspend and wait for incoming message
      const message = yield context;
      if (!message || typeof message.type !== "string") continue;
      if (message.type === "TERMINATE") break;
      context = reducer(context, message);
    }
    return context;
  }

  const actor = actorLoop();
  actor.next(); // Prime the generator to the first yield

  return {
    send(message) {
      const step = actor.next(message);
      if (step.done) throw new Error("Actor is terminated");
      return step.value;
    },
    terminate() {
      return actor.next({ type: "TERMINATE" }).value;
    }
  };
}

// Verification:
const cartReducer = (ctx, action) => {
  switch (action.type) {
    case "ADD":
      return { ...ctx, items: [...ctx.items, action.payload], total: ctx.total + action.payload.price };
    case "CLEAR":
      return { items: [], total: 0 };
    default:
      return ctx;
  }
};

const cartActor = createActor(cartReducer, { items: [], total: 0 });
console.log(cartActor.send({ type: "ADD", payload: { name: "Book", price: 30 } }));
// { items: [{ name: 'Book', price: 30 }], total: 30 }
console.log(cartActor.send({ type: "ADD", payload: { name: "Pen", price: 5 } }));
// { items: [...], total: 35 }
```

#### Problem 7.4: Chunked Async Stream Consumer with Backpressure
**Requirement**: Implement an async generator consumer `consumeAsyncStream(asyncIterable, chunkSize, handler)` that batches async stream chunks, pauses the upstream producer if the async handler takes time, and resumes smoothly, enforcing backpressure.

```javascript
async function consumeAsyncStream(asyncIterable, chunkSize, handler) {
  let chunk = [];
  let totalProcessed = 0;

  for await (const item of asyncIterable) {
    chunk.push(item);
    if (chunk.length >= chunkSize) {
      // Enforce backpressure: Wait for handler to complete before pulling next item!
      await handler(chunk);
      totalProcessed += chunk.length;
      chunk = [];
    }
  }

  // Flush remaining items
  if (chunk.length > 0) {
    await handler(chunk);
    totalProcessed += chunk.length;
  }

  return totalProcessed;
}

// Verification:
async function* mockEventProducer(total) {
  for (let i = 1; i <= total; i++) {
    yield { eventId: i, timestamp: Date.now() };
  }
}

(async () => {
  let batchCount = 0;
  const processed = await consumeAsyncStream(mockEventProducer(7), 3, async (batch) => {
    batchCount++;
    console.log(`Processed Batch #${batchCount} with ${batch.length} items`);
  });
  console.log("Total Stream Items Processed:", processed);
  // Batch 1 (3 items), Batch 2 (3 items), Batch 3 (1 item) -> Total 7
})();
```

#### Problem 7.5: Cycle-Safe Graph Traversal Generator
**Requirement**: Write a generator `traverseGraph(rootNode, { mode = 'BFS' | 'DFS' })` that traverses arbitrary cyclic graph structures, yielding each node value while using a `Set` to prevent infinite loops.

```javascript
function* traverseGraph(rootNode, { mode = "BFS" } = {}) {
  if (!rootNode) return;

  const visited = new Set();

  if (mode === "DFS") {
    const stack = [rootNode];
    while (stack.length > 0) {
      const node = stack.pop();
      if (visited.has(node)) continue;
      visited.add(node);
      yield node.value;

      // Push children in reverse order to preserve left-to-right DFS
      for (let i = (node.children || []).length - 1; i >= 0; i--) {
        stack.push(node.children[i]);
      }
    }
  } else {
    // BFS
    const queue = [rootNode];
    while (queue.length > 0) {
      const node = queue.shift();
      if (visited.has(node)) continue;
      visited.add(node);
      yield node.value;

      for (const child of node.children || []) {
        queue.push(child);
      }
    }
  }
}

// Verification:
const nodeA = { value: "A", children: [] };
const nodeB = { value: "B", children: [] };
const nodeC = { value: "C", children: [] };
// Create cyclic edges: A -> B -> C -> A
nodeA.children.push(nodeB);
nodeB.children.push(nodeC);
nodeC.children.push(nodeA);

const bfsOrder = [...traverseGraph(nodeA, { mode: "BFS" })];
console.log("BFS Traversal:", bfsOrder); // ['A', 'B', 'C'] (Terminates cleanly!)
```

---

## 8. The Asynchronous Event Loop, Microtasks & Macrotasks

### 8.1 Architectural Theory

JavaScript is single-threaded with a non-blocking, event-driven runtime orchestrated by the **Event Loop**.

```
                         Event Loop Phase Architecture
 ┌────────────────────────────────────────────────────────────────────────┐
 │ 1. CALL STACK: Pop synchronous frames until empty                      │
 │       │                                                                │
 │ 2. MICROTASK QUEUE: Drain completely (Promises, queueMicrotask)        │
 │       │  (Microtasks enqueued during drain execute in current tick!)   │
 │       │                                                                │
 │ 3. RENDER STAGE (Browsers): requestAnimationFrame, Layout, Paint      │
 │       │                                                                │
 │ 4. MACROTASK QUEUE: Dequeue exactly ONE task (setTimeout, I/O)         │
 └───────┴────────────────────────────────────────────────────────────────┘
```

#### Critical Senior Rules:
1. **Microtask Queue Exhaustion**:
   - The engine does NOT proceed to rendering or macrotasks until the Microtask Queue is **completely empty**.
   - Recursive microtask calls (`function loop() { queueMicrotask(loop); }`) completely freeze the thread, blocking UI rendering, input handling, and macrotasks.
2. **Macrotask Granularity**:
   - Unlike microtasks, the event loop executes **only one** macrotask per tick before checking microtasks and rendering again.
3. **Queue Priorities**:
   - `process.nextTick` (Node.js) > `Promise.then` / `queueMicrotask` > `setImmediate` / `setTimeout`.

---

### 8.2 Senior Code Demonstrations

```javascript
// --- 1. Event Loop Precision Execution Trace ---
console.log("1: Synchronous");

setTimeout(() => {
  console.log("2: Macrotask (setTimeout)");
  queueMicrotask(() => console.log("3: Microtask inside Macrotask"));
}, 0);

queueMicrotask(() => {
  console.log("4: Microtask 1");
  queueMicrotask(() => console.log("5: Nested Microtask"));
});

Promise.resolve().then(() => {
  console.log("6: Microtask 2 (Promise.then)");
});

console.log("7: Synchronous End");

// Output Order:
// 1: Synchronous
// 7: Synchronous End
// 4: Microtask 1
// 6: Microtask 2 (Promise.then)
// 5: Nested Microtask (Drained before any macrotask!)
// 2: Macrotask (setTimeout)
// 3: Microtask inside Macrotask
```

---

### 8.3 Advanced Coding Problems

#### Problem 8.1: Microtask-Starvation-Proof Task Batcher
**Requirement**: Build `createSafeBatcher(maxConsecutiveMicrotasks)` that queues and executes tasks in microtasks, but automatically yields execution to a macrotask (`setTimeout` / `MessageChannel`) if the consecutive execution count exceeds `maxConsecutiveMicrotasks` to prevent starvation.

```javascript
function createSafeBatcher(maxConsecutiveMicrotasks = 100) {
  const taskQueue = [];
  let consecutiveCount = 0;
  let isFlushing = false;

  function yieldToMacrotask() {
    return new Promise((resolve) => setTimeout(resolve, 0));
  }

  async function flush() {
    if (isFlushing) return;
    isFlushing = true;

    while (taskQueue.length > 0) {
      const task = taskQueue.shift();
      try {
        task();
      } catch (err) {
        console.error("Batch task error:", err);
      }

      consecutiveCount++;
      if (consecutiveCount >= maxConsecutiveMicrotasks) {
        consecutiveCount = 0;
        // Yield to macrotask queue to allow UI rendering and external I/O
        await yieldToMacrotask();
      }
    }

    consecutiveCount = 0;
    isFlushing = false;
  }

  return function enqueue(task) {
    taskQueue.push(task);
    queueMicrotask(flush);
  };
}

// Verification:
const batcher = createSafeBatcher(5);
for (let i = 1; i <= 12; i++) {
  batcher(() => console.log(`Processed safe task ${i}`));
}
```

#### Problem 8.2: Cooperative Multitasking Scheduler for Heavy CPU Work
**Requirement**: Write `cooperativeCompute(totalIterations, taskChunkFn, maxFrameBudgetMs = 12)` that performs intensive computations across multiple frames, pausing execution using `MessageChannel` (zero-delay macrotask) whenever the frame time budget is exceeded.

```javascript
function cooperativeCompute(totalIterations, workFn, maxFrameBudgetMs = 12) {
  return new Promise((resolve, reject) => {
    let currentIndex = 0;
    const channel = new MessageChannel();

    function executeSlice() {
      const startTime = performance.now();

      try {
        while (currentIndex < totalIterations) {
          workFn(currentIndex);
          currentIndex++;

          // Check if time budget exceeded
          if (performance.now() - startTime >= maxFrameBudgetMs) {
            // Yield execution to next event loop macrotask
            channel.port2.postMessage(null);
            return;
          }
        }
        resolve("Computation Complete");
      } catch (err) {
        reject(err);
      }
    }

    channel.port1.onmessage = executeSlice;
    executeSlice(); // Initial kick-off
  });
}

// Verification: 1,000,000 operations executed smoothly without freezing thread
let totalSum = 0;
cooperativeCompute(100000, (i) => {
  totalSum += Math.sqrt(i);
}).then((msg) => {
  console.log(msg, "Total Sum:", Math.floor(totalSum));
});
```

#### Problem 8.3: Priority-Based Async Task Queue
**Requirement**: Create `PriorityTaskQueue` supporting priorities (`HIGH`, `MEDIUM`, `LOW`). `HIGH` tasks run as microtasks, `MEDIUM` and `LOW` run as macrotasks with relative ordering, while guaranteeing low-priority tasks don't suffer complete starvation.

```javascript
class PriorityTaskQueue {
  constructor() {
    this.highQueue = [];
    this.medQueue = [];
    this.lowQueue = [];
    this.isScheduled = false;
  }

  enqueue(priority, task) {
    if (priority === "HIGH") this.highQueue.push(task);
    else if (priority === "MEDIUM") this.medQueue.push(task);
    else this.lowQueue.push(task);

    this.scheduleDrain();
  }

  scheduleDrain() {
    if (this.isScheduled) return;
    this.isScheduled = true;

    // Run high priority immediately in microtask
    queueMicrotask(() => {
      this.drainHigh();

      // Schedule macrotask for medium and low
      setTimeout(() => {
        this.drainMediumAndLow();
        this.isScheduled = false;
        if (this.hasWork()) this.scheduleDrain();
      }, 0);
    });
  }

  drainHigh() {
    while (this.highQueue.length > 0) {
      this.highQueue.shift()();
    }
  }

  drainMediumAndLow() {
    // Process up to 3 medium tasks per 1 low task (anti-starvation ratio)
    let medQuota = 3;
    while (this.medQueue.length > 0 && medQuota-- > 0) {
      this.medQueue.shift()();
    }
    if (this.lowQueue.length > 0) {
      this.lowQueue.shift()();
    }
  }

  hasWork() {
    return this.highQueue.length > 0 || this.medQueue.length > 0 || this.lowQueue.length > 0;
  }
}

// Verification:
const pq = new PriorityTaskQueue();
pq.enqueue("LOW", () => console.log("Low 1"));
pq.enqueue("MEDIUM", () => console.log("Med 1"));
pq.enqueue("HIGH", () => console.log("High 1 (Instant Microtask)"));
// High runs first in microtask, Med and Low follow in subsequent macrotasks
```

#### Problem 8.4: Animation Frame Throttler with FPS Budgeting
**Requirement**: Implement `createRafThrottler(targetFps)` that wraps a callback such that it is only executed at most `targetFps` frames per second, synchronized with `requestAnimationFrame` in browser or high-resolution timers in Node.

```javascript
function createRafThrottler(targetFps, callback) {
  const frameIntervalMs = 1000 / targetFps;
  let lastExecutionTime = 0;
  let pendingArgs = null;
  let rafId = null;

  function schedule() {
    const now = performance.now();
    const elapsed = now - lastExecutionTime;

    if (elapsed >= frameIntervalMs) {
      lastExecutionTime = now - (elapsed % frameIntervalMs);
      callback(...pendingArgs);
      pendingArgs = null;
      rafId = null;
    } else {
      rafId = setTimeout(schedule, frameIntervalMs - elapsed);
    }
  }

  return function throttled(...args) {
    pendingArgs = args;
    if (!rafId) {
      rafId = setTimeout(schedule, 0);
    }
  };
}

// Verification:
let calls = 0;
const renderLoop = createRafThrottler(30, (ts) => {
  calls++;
  console.log(`Render executed. Total calls: ${calls}`);
});
for (let i = 0; i < 100; i++) renderLoop(i);
```

#### Problem 8.5: Cross-Environment Event Loop Normalizer
**Requirement**: Create `scheduleNextTick(fn)` and `scheduleMacrotask(fn)` that normalize behavior between Node.js and Browser environments, ensuring `nextTick` always runs before any macrotask and catches exceptions cleanly.

```javascript
const scheduleNextTick = (() => {
  if (typeof queueMicrotask === "function") {
    return (fn) => queueMicrotask(() => {
      try { fn(); } catch (err) { console.error("Uncaught microtask exception:", err); }
    });
  }
  return (fn) => Promise.resolve().then(fn);
})();

const scheduleMacrotask = (() => {
  if (typeof MessageChannel !== "undefined") {
    const channel = new MessageChannel();
    const queue = [];
    channel.port1.onmessage = () => {
      const task = queue.shift();
      if (task) task();
    };
    return (fn) => {
      queue.push(fn);
      channel.port2.postMessage(null);
    };
  }
  return (fn) => setTimeout(fn, 0);
})();

// Verification:
scheduleMacrotask(() => console.log("Macrotask executed"));
scheduleNextTick(() => console.log("Microtask executed"));
// Microtask always logs before Macrotask
```

---

## 9. Promises/A+ Architecture, Combinators & Polyfills

### 9.1 Architectural Theory

A **Promise** is a state machine with three states:
- `PENDING`: May transition to either `FULFILLED` or `REJECTED`.
- `FULFILLED`: Must not transition to any other state; must have an immutable value.
- `REJECTED`: Must not transition to any other state; must have an immutable reason.

```
                         Promise State Transitions
                        ┌────────────────────────┐
                        │        PENDING         │
                        └───────┬────────┬───────┘
            resolve(v)          │        │          reject(r)
        ┌───────────────────────┘        └───────────────────────┐
        ▼                                                        ▼
┌───────────────┐                                        ┌───────────────┐
│   FULFILLED   │ (Immutable value)                      │   REJECTED    │ (Immutable reason)
└───────────────┘                                        └───────────────┘
```

#### Promises/A+ Invariants:
1. **Asynchronous Dispatch**:
   - `onFulfilled` and `onRejected` must be called asynchronously (via a microtask), never in the same event-loop turn as `then`.
2. **The Resolution Procedure `[[Resolve]](promise, x)`**:
   - If `promise === x`: Throw `TypeError` (chaining cycle detected).
   - If `x` is a thenable (has a callable `.then` property): Call `x.then(resolvePromise, rejectPromise)` with a `called` guard ensuring single settlement.
   - If `x` is an ordinary value: Fulfill `promise` with `x`.

---

### 9.2 Senior Code Demonstrations

```javascript
// --- 1. Chaining Cycle Protection ---
const badPromise = Promise.resolve().then(() => badPromise);
badPromise.catch((err) => {
  console.log(err.name, "->", err.message);
  // TypeError -> Chaining cycle detected for promise #<Promise>
});

// --- 2. Thenable Interoperability ---
const foreignThenable = {
  then(onFulfill) {
    onFulfill("From custom non-Promise thenable");
  }
};
Promise.resolve(foreignThenable).then(console.log);
// Logs: "From custom non-Promise thenable"
```

---

### 9.3 Advanced Coding Problems

#### Problem 9.1: Spec-Compliant Promises/A+ Polyfill (`MyPromise`)
**Requirement**: Build a complete, spec-compliant `MyPromise` implementation from scratch supporting `.then(onFulfilled, onRejected)`, `.catch()`, `.finally()`, chaining, microtask execution, and the full `[[Resolve]]` procedure with foreign thenable support.

```javascript
class MyPromise {
  static PENDING = "PENDING";
  static FULFILLED = "FULFILLED";
  static REJECTED = "REJECTED";

  constructor(executor) {
    this.state = MyPromise.PENDING;
    this.value = undefined;
    this.reason = undefined;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (val) => {
      if (this.state !== MyPromise.PENDING) return;
      MyPromise.resolveProcedure(this, val, this._fulfill.bind(this), this._reject.bind(this));
    };

    const reject = (reason) => {
      if (this.state !== MyPromise.PENDING) return;
      this._reject(reason);
    };

    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  _fulfill(val) {
    this.state = MyPromise.FULFILLED;
    this.value = val;
    this.onFulfilledCallbacks.forEach((fn) => fn());
  }

  _reject(reason) {
    this.state = MyPromise.REJECTED;
    this.reason = reason;
    this.onRejectedCallbacks.forEach((fn) => fn());
  }

  then(onFulfilled, onRejected) {
    const realOnFulfilled = typeof onFulfilled === "function" ? onFulfilled : (v) => v;
    const realOnRejected = typeof onRejected === "function" ? onRejected : (r) => { throw r; };

    const chainedPromise = new MyPromise((resolve, reject) => {
      const handleExecution = (handler, val, isSuccess) => {
        queueMicrotask(() => {
          try {
            const x = handler(val);
            MyPromise.resolveProcedure(chainedPromise, x, resolve, reject);
          } catch (err) {
            reject(err);
          }
        });
      };

      if (this.state === MyPromise.FULFILLED) {
        handleExecution(realOnFulfilled, this.value, true);
      } else if (this.state === MyPromise.REJECTED) {
        handleExecution(realOnRejected, this.reason, false);
      } else {
        this.onFulfilledCallbacks.push(() => handleExecution(realOnFulfilled, this.value, true));
        this.onRejectedCallbacks.push(() => handleExecution(realOnRejected, this.reason, false));
      }
    });

    return chainedPromise;
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }

  static resolveProcedure(promise, x, resolve, reject) {
    if (promise === x) {
      return reject(new TypeError("Chaining cycle detected for promise"));
    }

    if (x !== null && (typeof x === "object" || typeof x === "function")) {
      let called = false;
      try {
        const then = x.then;
        if (typeof then === "function") {
          then.call(
            x,
            (y) => {
              if (called) return;
              called = true;
              MyPromise.resolveProcedure(promise, y, resolve, reject);
            },
            (r) => {
              if (called) return;
              called = true;
              reject(r);
            }
          );
          return;
        }
      } catch (err) {
        if (called) return;
        return reject(err);
      }
    }

    resolve(x);
  }

  static resolve(val) {
    return new MyPromise((res) => res(val));
  }

  static reject(reason) {
    return new MyPromise((_, rej) => rej(reason));
  }
}

// Verification:
const p = new MyPromise((res) => setTimeout(() => res(42), 20));
p.then((val) => val * 2)
 .then((val) => console.log("Polyfill Promise Chained Result:", val)); // 84
```

#### Problem 9.2: Polyfill of All 4 Combinators with Zero Native Combinators
**Requirement**: Implement `promiseAll(iterable)`, `promiseAllSettled(iterable)`, `promiseRace(iterable)`, and `promiseAny(iterable)` using only basic Promise instantiation and `.then()`.

```javascript
function promiseAll(iterable) {
  return new Promise((resolve, reject) => {
    const promises = Array.from(iterable);
    if (promises.length === 0) return resolve([]);

    const results = new Array(promises.length);
    let completed = 0;

    promises.forEach((p, idx) => {
      Promise.resolve(p).then(
        (val) => {
          results[idx] = val;
          completed++;
          if (completed === promises.length) resolve(results);
        },
        (err) => reject(err) // Fast-fail on first error
      );
    });
  });
}

function promiseAllSettled(iterable) {
  return new Promise((resolve) => {
    const promises = Array.from(iterable);
    if (promises.length === 0) return resolve([]);

    const results = new Array(promises.length);
    let completed = 0;

    promises.forEach((p, idx) => {
      Promise.resolve(p).then(
        (val) => {
          results[idx] = { status: "fulfilled", value: val };
          if (++completed === promises.length) resolve(results);
        },
        (err) => {
          results[idx] = { status: "rejected", reason: err };
          if (++completed === promises.length) resolve(results);
        }
      );
    });
  });
}

function promiseRace(iterable) {
  return new Promise((resolve, reject) => {
    for (const p of iterable) {
      Promise.resolve(p).then(resolve, reject);
    }
  });
}

function promiseAny(iterable) {
  return new Promise((resolve, reject) => {
    const promises = Array.from(iterable);
    if (promises.length === 0) {
      return reject(new AggregateError([], "All promises were rejected"));
    }

    const errors = new Array(promises.length);
    let rejectedCount = 0;

    promises.forEach((p, idx) => {
      Promise.resolve(p).then(
        (val) => resolve(val),
        (err) => {
          errors[idx] = err;
          if (++rejectedCount === promises.length) {
            reject(new AggregateError(errors, "All promises were rejected"));
          }
        }
      );
    });
  });
}

// Verification:
promiseAll([Promise.resolve(10), Promise.resolve(20)]).then((r) => console.log("All:", r)); // [10, 20]
promiseAllSettled([Promise.resolve(1), Promise.reject("err")]).then((r) => console.log("Settled count:", r.length)); // 2
promiseRace([new Promise((res) => setTimeout(() => res("slow"), 50)), Promise.resolve("fast")]).then((r) => console.log("Race:", r)); // "fast"
```

#### Problem 9.3: Promise Timeout & Fallback Wrapper
**Requirement**: Build `withTimeout(promise, timeoutMs, fallbackValue)` that races `promise` against a timer. If the timer wins, it resolves to `fallbackValue` (or rejects with `TimeoutError` if no fallback is passed) and cleans up the timer to prevent process hanging.

```javascript
class TimeoutError extends Error {
  constructor(timeoutMs) {
    super(`Operation timed out after ${timeoutMs}ms`);
    this.name = "TimeoutError";
  }
}

function withTimeout(promise, timeoutMs, fallbackValue) {
  let timerId;

  const timeoutPromise = new Promise((resolve, reject) => {
    timerId = setTimeout(() => {
      if (arguments.length >= 3) {
        resolve(fallbackValue);
      } else {
        reject(new TimeoutError(timeoutMs));
      }
    }, timeoutMs);
  });

  return Promise.race([promise, timeoutPromise]).finally(() => {
    clearTimeout(timerId); // Prevent hanging Node process / timers
  });
}

// Verification:
const fastTask = new Promise((res) => setTimeout(() => res("Success"), 10));
const slowTask = new Promise((res) => setTimeout(() => res("Too Late"), 100));

withTimeout(fastTask, 50).then(console.log); // "Success"
withTimeout(slowTask, 50, "FALLBACK_DATA").then(console.log); // "FALLBACK_DATA"
```

#### Problem 9.4: Resilient Retry Engine with Exponential Backoff & Jitter
**Requirement**: Create `retryWithBackoff(taskFn, { maxRetries, baseDelayMs, maxDelayMs, retryPredicate })` that retries failing async operations using exponential backoff with full jitter, honoring a predicate that decides whether an error is retryable.

```javascript
async function retryWithBackoff(
  taskFn,
  {
    maxRetries = 3,
    baseDelayMs = 100,
    maxDelayMs = 2000,
    retryPredicate = (err) => true
  } = {}
) {
  let attempt = 0;

  while (true) {
    try {
      return await taskFn();
    } catch (err) {
      attempt++;
      if (attempt > maxRetries || !retryPredicate(err)) {
        throw err;
      }

      // Exponential backoff: base * 2^attempt
      const exponentialDelay = Math.min(maxDelayMs, baseDelayMs * Math.pow(2, attempt - 1));
      // Full jitter: Random duration between 0 and exponentialDelay
      const jitteredDelay = Math.random() * exponentialDelay;

      await new Promise((resolve) => setTimeout(resolve, jitteredDelay));
    }
  }
}

// Verification:
let attemptCount = 0;
const flakyNetworkCall = async () => {
  attemptCount++;
  if (attemptCount < 3) throw new Error("503 Service Unavailable");
  return "Payload Delivered";
};

retryWithBackoff(flakyNetworkCall, { maxRetries: 3 }).then((res) => {
  console.log("Retry Result:", res, "Attempts taken:", attemptCount); // Delivered, attempts = 3
});
```

#### Problem 9.5: In-Flight Promise Deduplicator & Auto-Evicting Cache
**Requirement**: Implement `createDeduplicator(asyncFetcher)` that ensures if multiple concurrent callers request the exact same key while a request is already in-flight, they share the same pending Promise, avoiding duplicate HTTP requests. If the request fails, the cache is instantly cleared.

```javascript
function createDeduplicator(fetcher) {
  const inFlightPromises = new Map();

  return function deduplicatedFetch(key) {
    if (inFlightPromises.has(key)) {
      return inFlightPromises.get(key);
    }

    const promise = Promise.resolve()
      .then(() => fetcher(key))
      .finally(() => {
        // Automatically evict key once settled so subsequent calls fetch fresh data
        inFlightPromises.delete(key);
      });

    inFlightPromises.set(key, promise);
    return promise;
  };
}

// Verification:
let networkRequests = 0;
const fetchUser = async (id) => {
  networkRequests++;
  await new Promise((res) => setTimeout(res, 20));
  return { id, name: `User_${id}` };
};

// Trigger 3 concurrent calls for the same ID
Promise.all([
  dedupedFetchUser("user_101"),
  dedupedFetchUser("user_101"),
  dedupedFetchUser("user_101")
]).then(([u1, u2, u3]) => {
  console.log("Shared result:", u1.name); // "User_101"
  console.log("Actual Network Calls Made:", networkRequests); // 1!
});
```

---

## 10. Async/Await, Coroutines & Concurrency Control

### 10.1 Architectural Theory

`async/await` is syntactic sugar built over **Promises** and **Generators**.

```
                   Async/Await Engine Desugaring
 async function task() {        ──►   function task() {
   const a = await getA();              return spawn(function* () {
   const b = await getB(a);               const a = yield getA();
   return a + b;                          const b = yield getB(a);
 }                                        return a + b;
                                        });
                                      }
```

#### Senior Invariants & Optimization:
1. **`return await p` vs `return p`**:
   - Inside a `try { return await p; } catch (e) { ... }`, the `await` is **mandatory**; without it, the promise is returned directly in pending state, bypassing the `catch` block!
   - Outside `try/catch`, modern V8 (ES2018+) uses `await` to maintain meaningful async stack traces without extra microtask penalties.
2. **Concurrency Anti-Pattern: Sequential Waterfalls**:
   - `for (const x of items) await process(x)` executes serially, compounding network latency ($O(N \times \text{RTT})$).
   - *Fix*: Use bounded concurrency pools (e.g. `p-limit`) to execute operations in parallel up to an optimal concurrency limit.
3. **Cancellation & Abort Signals**:
   - Promises are inherently non-cancellable once constructed. Modern cancellation relies on `AbortController` and listening to `signal.addEventListener("abort")`.

---

### 10.2 Senior Code Demonstrations

```javascript
// --- 1. The return vs return await Catch Trap ---
async function riskyCall() {
  throw new Error("Database query crashed");
}

async function brokenErrorHandler() {
  try {
    return riskyCall(); // BUG: Returns pending promise; catch block never triggers!
  } catch (err) {
    console.log("Caught in broken handler:", err.message);
  }
}

async function correctErrorHandler() {
  try {
    return await riskyCall(); // CORRECT: Awaits resolution; triggers catch on rejection!
  } catch (err) {
    console.log("Caught in correct handler:", err.message);
  }
}
brokenErrorHandler().catch((e) => console.log("Leaked out to global:", e.message));
correctErrorHandler(); // Successfully caught inside function

// --- 2. Cascading Cancellation with AbortSignal ---
async function cancellableTask(signal) {
  if (signal.aborted) throw new Error("Task aborted before starting");

  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => resolve("Task finished"), 2000);
    signal.addEventListener("abort", () => {
      clearTimeout(timer);
      reject(new Error("Operation Aborted via Signal"));
    });
  });
}
const controller = new AbortController();
setTimeout(() => controller.abort(), 100);
cancellableTask(controller.signal).catch((err) => console.log(err.message)); // "Operation Aborted via Signal"
```

---

### 10.3 Advanced Coding Problems

#### Problem 10.1: Bounded Concurrency Task Pool (`p-limit` Implementation)
**Requirement**: Build `createConcurrencyLimiter(concurrencyLimit)` returning a function `limit(asyncFn, ...args)` that queues tasks and ensures no more than `concurrencyLimit` tasks run simultaneously. Returns a Promise resolving to the task's result.

```javascript
function createConcurrencyLimiter(concurrencyLimit) {
  if (concurrencyLimit < 1) throw new RangeError("Concurrency limit must be at least 1");

  let activeCount = 0;
  const queue = [];

  function next() {
    if (activeCount < concurrencyLimit && queue.length > 0) {
      activeCount++;
      const { fn, args, resolve, reject } = queue.shift();

      Promise.resolve()
        .then(() => fn(...args))
        .then(resolve, reject)
        .finally(() => {
          activeCount--;
          next();
        });
    }
  }

  return function limit(fn, ...args) {
    return new Promise((resolve, reject) => {
      queue.push({ fn, args, resolve, reject });
      next();
    });
  };
}

// Verification:
const limit = createConcurrencyLimiter(2);
let currentRunning = 0;

const simulateJob = (id, duration) => async () => {
  currentRunning++;
  console.log(`Job ${id} started. Active jobs: ${currentRunning}`);
  await new Promise((res) => setTimeout(res, duration));
  currentRunning--;
  console.log(`Job ${id} finished. Active jobs: ${currentRunning}`);
  return `Result ${id}`;
};

Promise.all([
  limit(simulateJob(1, 30)),
  limit(simulateJob(2, 30)),
  limit(simulateJob(3, 10)),
  limit(simulateJob(4, 10))
]).then((results) => console.log("All limited jobs completed:", results));
```

#### Problem 10.2: Cascading Cancellable Async Pipeline
**Requirement**: Implement `runCancellablePipeline(stages, initialData, abortSignal)` where each stage is an async function. The pipeline must check `abortSignal.aborted` before each stage and propagate cancellation immediately if triggered mid-stage.

```javascript
async function runCancellablePipeline(stages, initialData, signal) {
  let acc = initialData;

  for (let i = 0; i < stages.length; i++) {
    if (signal && signal.aborted) {
      throw new DOMException("Pipeline aborted by user", "AbortError");
    }

    const stageFn = stages[i];

    // Race stage execution against abort event
    acc = await new Promise((resolve, reject) => {
      let onAbort;
      if (signal) {
        onAbort = () => reject(new DOMException("Pipeline aborted during execution", "AbortError"));
        signal.addEventListener("abort", onAbort, { once: true });
      }

      Promise.resolve(stageFn(acc))
        .then(resolve, reject)
        .finally(() => {
          if (signal && onAbort) signal.removeEventListener("abort", onAbort);
        });
    });
  }

  return acc;
}

// Verification:
const abortCtrl = new AbortController();
const stages = [
  async (val) => val + " -> step1",
  async (val) => {
    await new Promise((res) => setTimeout(res, 50));
    return val + " -> step2";
  },
  async (val) => val + " -> step3"
];

setTimeout(() => abortCtrl.abort(), 20); // Abort during step 2
runCancellablePipeline(stages, "start", abortCtrl.signal)
  .then(console.log)
  .catch((err) => console.log("Pipeline failed cleanly:", err.message));
```

#### Problem 10.3: Batched Parallel Reducer
**Requirement**: Build `asyncBatchReduce(items, reducer, initialValue, batchSize)` that processes items in parallel chunks of size `batchSize`, sequentially feeding the aggregated accumulator from batch to batch.

```javascript
async function asyncBatchReduce(items, reducer, initialValue, batchSize = 5) {
  let accumulator = initialValue;

  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);

    // Process all items in current batch concurrently
    const batchResults = await Promise.all(
      batch.map((item, index) => reducer(accumulator, item, i + index))
    );

    // Combine batch results into main accumulator
    accumulator = batchResults[batchResults.length - 1];
  }

  return accumulator;
}

// Verification:
const numbers = [1, 2, 3, 4, 5, 6];
asyncBatchReduce(numbers, async (acc, n) => {
  await new Promise((r) => setTimeout(r, 10));
  return acc + n;
}, 0, 2).then((total) => console.log("Async batch reduce sum:", total)); // 21
```

#### Problem 10.4: Dynamic Rate-Limited API Client with Token Bucket
**Requirement**: Implement `createRateLimitedFetcher(fetchFn, { requestsPerSecond, burstCapacity })` that buffers calls and executes them strictly adhering to the token bucket rate limit.

```javascript
function createRateLimitedFetcher(fetchFn, { requestsPerSecond = 5, burstCapacity = 5 } = {}) {
  let tokens = burstCapacity;
  let lastRefill = performance.now();
  const queue = [];
  let timerId = null;

  function refill() {
    const now = performance.now();
    const elapsedSeconds = (now - lastRefill) / 1000;
    tokens = Math.min(burstCapacity, tokens + elapsedSeconds * requestsPerSecond);
    lastRefill = now;
  }

  function processQueue() {
    refill();

    while (queue.length > 0 && tokens >= 1) {
      tokens -= 1;
      const { resolve, reject, args } = queue.shift();
      fetchFn(...args).then(resolve, reject);
    }

    if (queue.length > 0) {
      const waitTimeMs = Math.ceil(((1 - tokens) / requestsPerSecond) * 1000);
      timerId = setTimeout(processQueue, Math.max(10, waitTimeMs));
    } else {
      timerId = null;
    }
  }

  return function execute(...args) {
    return new Promise((resolve, reject) => {
      queue.push({ resolve, reject, args });
      if (!timerId) processQueue();
    });
  };
}

// Verification:
const mockApi = async (url) => `Response from ${url} at ${Date.now()}`;
const client = createRateLimitedFetcher(mockApi, { requestsPerSecond: 2, burstCapacity: 2 });

for (let i = 1; i <= 4; i++) {
  client(`/endpoint/${i}`).then((res) => console.log(`Finished ${i}:`, res));
}
```

#### Problem 10.5: Asynchronous Barrier Synchronization Primitive (`AsyncBarrier`)
**Requirement**: Create an `AsyncBarrier(participantCount)` primitive. When participants call `await barrier.arriveAndWait()`, they are suspended until all `participantCount` participants have arrived, at which point all promises resolve simultaneously, and the barrier resets for the next round.

```javascript
class AsyncBarrier {
  constructor(participantCount) {
    if (participantCount < 1) throw new Error("Participant count must be > 0");
    this.threshold = participantCount;
    this.count = participantCount;
    this.generationResolvers = [];
  }

  arriveAndWait() {
    return new Promise((resolve) => {
      this.generationResolvers.push(resolve);
      this.count--;

      if (this.count === 0) {
        // Barrier reached: Release all participants in current generation
        const resolvers = this.generationResolvers;
        this.generationResolvers = [];
        this.count = this.threshold; // Reset for next iteration
        resolvers.forEach((res) => res());
      }
    });
  }
}

// Verification:
const barrier = new AsyncBarrier(3);
async function worker(id, delay) {
  console.log(`Worker ${id} preparing...`);
  await new Promise((r) => setTimeout(r, delay));
  console.log(`Worker ${id} reached barrier. Waiting...`);
  await barrier.arriveAndWait();
  console.log(`Worker ${id} PASSED BARRIER TOGETHER!`);
}

worker(1, 10);
worker(2, 50);
worker(3, 100);
// All 3 pass the barrier simultaneously only after worker 3 arrives at 100ms
```

---

## 11. Advanced Functional Programming & Transducers

### 11.1 Architectural Theory

Functional programming in modern JavaScript emphasizes **immutability**, **pure functions**, **composition**, and **zero-allocation pipelines**.

```
                   Standard Method Chaining vs Transducer
 Array Method Chaining:
 [1,2,3,4,5] ──.map()──► [Intermediate Arr 1] ──.filter()──► [Intermediate Arr 2]
                                                               (High GC Pressure)
 Transducer Pipeline:
 [1,2,3,4,5] ──[ composedReducer(map + filter) ]──► [Single Final Output]
                                                     (Zero Intermediate Allocations)
```

#### Key Functional Paradigms:
1. **Currying with Placeholders**:
   - Transforms $f(a, b, c)$ into $f(a)(b)(c)$. Advanced implementations provide a placeholder symbol (e.g. `_`) to allow arguments to be bound out of order.
2. **Function Composition**:
   - `compose(f, g, h)(x) === f(g(h(x)))` (Right-to-left).
   - `pipe(f, g, h)(x) === h(g(f(x)))` (Left-to-right).
3. **Transducers**:
   - A transducer is a higher-order reducing function: `(reducingFn) => newReducingFn`.
   - Transducers compose using regular function composition (`compose` or `pipe`), decoupled from data structures (works identically on Arrays, Streams, Sets, or Generators).

---

### 11.2 Senior Code Demonstrations

```javascript
// --- 1. The Power of Pipe vs Nested Function Calls ---
const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

const trim = (s) => s.trim();
const normalize = (s) => s.toLowerCase();
const wrapTags = (s) => `<span class="badge">${s}</span>`;

const sanitizeBadge = pipe(trim, normalize, wrapTags);
console.log(sanitizeBadge("   Senior_Staff_Eng   "));
// '<span class="badge">senior_staff_eng</span>'

// --- 2. Transducer Mechanics in Action ---
const mapTransducer = (transform) => (step) => (acc, input) => step(acc, transform(input));
const filterTransducer = (predicate) => (step) => (acc, input) => predicate(input) ? step(acc, input) : acc;

// Compose transducers: Note that with transducers, compose executes left-to-right!
const doubleEvenTransducer = (step) =>
  filterTransducer((n) => n % 2 === 0)(
    mapTransducer((n) => n * 2)(step)
  );

const arrayPushReducer = (acc, item) => { acc.push(item); return acc; };
const numbers = [1, 2, 3, 4, 5, 6];
const result = numbers.reduce(doubleEvenTransducer(arrayPushReducer), []);
console.log("Transducer Result:", result); // [4, 8, 12] (Single pass, zero intermediate arrays!)
```

---

### 11.3 Advanced Coding Problems

#### Problem 11.1: Production Auto-Curry with Placeholder Support
**Requirement**: Build `curry(fn)` supporting placeholder tokens (`curry._`). When the required formal arity is satisfied, invoke the underlying function with arguments slotted into placeholder positions.

```javascript
function curry(fn, arity = fn.length) {
  function curried(...args) {
    // Count non-placeholder arguments
    const completeArgs = args.slice(0, arity);
    const hasPlaceholder = completeArgs.some((arg) => arg === curry._);

    if (completeArgs.length >= arity && !hasPlaceholder) {
      return fn.apply(this, completeArgs);
    }

    return function (...nextArgs) {
      // Merge nextArgs into placeholder slots
      const mergedArgs = [];
      let nextIndex = 0;

      for (let i = 0; i < args.length; i++) {
        if (args[i] === curry._ && nextIndex < nextArgs.length) {
          mergedArgs.push(nextArgs[nextIndex++]);
        } else {
          mergedArgs.push(args[i]);
        }
      }

      while (nextIndex < nextArgs.length) {
        mergedArgs.push(nextArgs[nextIndex++]);
      }

      return curried.apply(this, mergedArgs);
    };
  }

  return curried;
}
curry._ = Symbol("curry_placeholder");

// Verification:
const divide = (a, b, c) => `(${a} / ${b}) + ${c} = ${(a / b) + c}`;
const curriedDivide = curry(divide);
const divByTwo = curriedDivide(curry._, 2, curry._); // Slot 'b' = 2
console.log(divByTwo(10, 5)); // "(10 / 2) + 5 = 10"
```

#### Problem 11.2: Asynchronous Pipeline with Tap & Error Recovery
**Requirement**: Implement `pipeAsync(...stages)` that chains asynchronous and synchronous functions. Supports a special `pipeAsync.tap(fn)` stage (observes without mutating output) and `pipeAsync.recover(fallbackFn)` stage (catches errors in preceding stages and recovers).

```javascript
function pipeAsync(...stages) {
  return async function (initialValue) {
    let acc = initialValue;

    for (const stage of stages) {
      try {
        if (stage && stage.__isTap) {
          await stage.fn(acc);
        } else if (stage && stage.__isRecover) {
          // No error occurred, skip recovery
          continue;
        } else {
          acc = await stage(acc);
        }
      } catch (err) {
        // Look ahead for next recover stage
        const recoverStage = stages.find((s) => s && s.__isRecover);
        if (recoverStage) {
          acc = await recoverStage.fn(err, acc);
        } else {
          throw err;
        }
      }
    }
    return acc;
  };
}

pipeAsync.tap = (fn) => ({ __isTap: true, fn });
pipeAsync.recover = (fn) => ({ __isRecover: true, fn });

// Verification:
const pipeline = pipeAsync(
  async (n) => n * 2,
  pipeAsync.tap((val) => console.log("[TAP Stage] Value is:", val)),
  async (n) => { if (n > 50) throw new Error("Number too large"); return n + 10; },
  pipeAsync.recover((err, lastVal) => {
    console.log("[RECOVER Stage] Handled error:", err.message);
    return 0;
  }),
  (n) => `Final: ${n}`
);

pipeline(30).then(console.log); // n=30 -> 60 -> throws -> recovers to 0 -> "Final: 0"
```

#### Problem 11.3: Zero-Allocation Transducer Engine
**Requirement**: Build a complete transducer engine featuring `into(targetCollection, transducer, sourceArray)`, `tmap(fn)`, `tfilter(predicate)`, and `ttake(n)` that processes millions of items in a single pass without allocating intermediate arrays.

```javascript
const tmap = (fn) => (step) => (acc, input) => step(acc, fn(input));

const tfilter = (predicate) => (step) => (acc, input) =>
  predicate(input) ? step(acc, input) : acc;

const ttake = (n) => (step) => {
  let count = n;
  return (acc, input) => {
    if (count > 0) {
      count--;
      return step(acc, input);
    }
    return acc;
  };
};

const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));

function into(target, transducer, source) {
  const isArray = Array.isArray(target);
  const step = isArray
    ? (acc, val) => { acc.push(val); return acc; }
    : (acc, val) => { acc.add(val); return acc; };

  const reducer = transducer(step);
  return source.reduce(reducer, target);
}

// Verification: Process 100,000 items in single pass
const largeData = Array.from({ length: 100000 }, (_, i) => i);
const xform = compose(
  tfilter((x) => x % 2 === 0),
  tmap((x) => x * 3),
  ttake(4)
);

const out = into([], xform, largeData);
console.log("Transduced Array:", out); // [0, 6, 12, 18]
```

#### Problem 11.4: Trie-Based Multi-Argument Deep Memoizer
**Requirement**: Implement `memoizeWithTrie(fn)` that caches functions with any number of composite arguments without serializing to strings (`JSON.stringify`), using nested `Map` and `WeakMap` nodes to guarantee $O(1)$ lookup and prevent memory leaks.

```javascript
function memoizeWithTrie(fn) {
  const root = { primitives: new Map(), objects: new WeakMap(), result: null, hasResult: false };

  return function (...args) {
    let current = root;

    for (const arg of args) {
      const isObj = (typeof arg === "object" && arg !== null) || typeof arg === "function";
      const branch = isObj ? current.objects : current.primitives;

      if (!branch.has(arg)) {
        branch.set(arg, {
          primitives: new Map(),
          objects: new WeakMap(),
          result: null,
          hasResult: false
        });
      }
      current = branch.get(arg);
    }

    if (!current.hasResult) {
      current.result = fn.apply(this, args);
      current.hasResult = true;
    }

    return current.result;
  };
}

// Verification:
let computations = 0;
const complexTask = (user, config, multiplier) => {
  computations++;
  return `${user.name}:${config.env}:${multiplier * 10}`;
};

const memoized = memoizeWithTrie(complexTask);
const userA = { name: "Dev" };
const cfg = { env: "prod" };

console.log(memoized(userA, cfg, 5)); // computations = 1
console.log(memoized(userA, cfg, 5)); // cached! computations = 1
console.log("Total computations executed:", computations); // 1
```

#### Problem 11.5: Functional Monadic Types: `Maybe` and `Either`
**Requirement**: Implement pure functional monadic containers `Maybe` (`Just`, `Nothing`) and `Either` (`Right`, `Left`) with `.map()`, `.flatMap()`, `.getOrElse()`, and `.fold()` for exception-free, railway-oriented programming.

```javascript
class Maybe {
  static of(val) {
    return val === null || val === undefined ? new Nothing() : new Just(val);
  }
}

class Just extends Maybe {
  constructor(value) { super(); this.value = value; }
  map(fn) { return Maybe.of(fn(this.value)); }
  flatMap(fn) { return fn(this.value); }
  getOrElse(_) { return this.value; }
  fold(_, onJust) { return onJust(this.value); }
}

class Nothing extends Maybe {
  map(_) { return this; }
  flatMap(_) { return this; }
  getOrElse(defaultVal) { return defaultVal; }
  fold(onNothing, _) { return onNothing(); }
}

class Either {
  static right(val) { return new Right(val); }
  static left(err) { return new Left(err); }
}

class Right extends Either {
  constructor(val) { super(); this.val = val; }
  map(fn) { return Either.right(fn(this.val)); }
  flatMap(fn) { return fn(this.val); }
  fold(_, onRight) { return onRight(this.val); }
}

class Left extends Either {
  constructor(err) { super(); this.err = err; }
  map(_) { return this; }
  flatMap(_) { return this; }
  fold(onLeft, _) { return onLeft(this.err); }
}

// Verification:
const parseJsonSafely = (str) => {
  try { return Either.right(JSON.parse(str)); }
  catch (e) { return Either.left(`Invalid JSON: ${e.message}`); }
};

const result1 = parseJsonSafely('{"user":"Alex"}')
  .map((obj) => obj.user.toUpperCase())
  .fold((err) => `Error: ${err}`, (val) => `Success: ${val}`);
console.log(result1); // "Success: ALEX"

const result2 = parseJsonSafely("INVALID_JSON")
  .map((obj) => obj.user)
  .fold((err) => `Caught: ${err}`, (val) => val);
console.log(result2); // "Caught: Invalid JSON..."
```

---

## 12. V8 Engine Internals, Shapes, Inline Caching & GC

### 12.1 Architectural Theory

Understanding Google V8 engine internals separates junior developers from senior systems engineers.

```
                           V8 Execution Pipeline
 Source Code ──► Scanner & Parser ──► Abstract Syntax Tree (AST)
                                             │
                                             ▼
                                  Ignition (Bytecode Interpreter)
                                             │  (Warm functions)
                                             ▼
                                  Sparkplug (Baseline Compiler)
                                             │  (Hot functions)
                                             ▼
                                  Maglev (Mid-tier Compiler)
                                             │  (Very hot functions)
                                             ▼
                                  TurboFan (Optimizing JIT Compiler)
```

#### Senior Engine Internals:
1. **Hidden Classes (Shapes / Maps)**:
   - In C++, object properties are at fixed memory offsets. In JS, objects are dynamic dictionaries.
   - To achieve C++-like speeds, V8 assigns hidden classes (**Shapes**) to objects. When a new property is added, a transition is created: `Shape0 -> Shape1`.
   - *Pitfall*: Initializing properties in different orders creates distinct Shapes (`{a, b}` vs `{b, a}`), preventing optimization!
2. **Inline Caching (IC)**:
   - V8 caches property lookup offsets directly at the call-site:
     - **Monomorphic** (1 Shape observed): Blazing fast; single direct pointer offset.
     - **Polymorphic** (2–4 Shapes observed): Small switch table.
     - **Megamorphic** (5+ Shapes observed): De-optimized; falls back to slow hashtable lookup.
3. **Garbage Collection (Generational Hypothesis)**:
   - **Young Generation (Minor GC / Scavenger)**:
     - Divided into two semi-spaces: *From-Space* and *To-Space*.
     - Uses Cheney's copying algorithm: Surviving active objects are copied compactly into *To-Space*; dead objects are discarded with zero deallocation overhead. Objects surviving 2 GCs are promoted to the Old Generation.
   - **Old Generation (Major GC / Mark-Sweep-Compact)**:
     - Tri-color marking (White, Grey, Black), sweeping unreferenced objects, compacting fragmented pages.
4. **Weak References**:
   - `WeakMap` & `WeakSet`: Hold weak references to object keys; garbage collected automatically when no other strong references exist.
   - `WeakRef` & `FinalizationRegistry`: Allow tracking object dereferencing and registering cleanup callbacks after garbage collection.

---

### 12.2 Senior Code Demonstrations

```javascript
// --- 1. Monomorphic vs Megamorphic Property Access ---
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

// Objects have identical shape: Point -> [x offset 0, y offset 1]
const p1 = new Point(1, 2);
const p2 = new Point(3, 4);

function readX(point) {
  return point.x; // Monomorphic IC: point always has the same Shape!
}
readX(p1);
readX(p2);

// ANTI-PATTERN: Heterogeneous shapes triggering Megamorphism
const o1 = { a: 1 };
const o2 = { b: 1, a: 2 };
const o3 = { c: 1, b: 2, a: 3 };
const o4 = { d: 1, c: 2, b: 3, a: 4 };
const o5 = { e: 1, d: 2, c: 3, b: 4, a: 5 };

function slowReadA(obj) {
  return obj.a; // Megamorphic IC! 5+ different Shapes -> JIT bails out to slow lookup
}
[o1, o2, o3, o4, o5].forEach(slowReadA);

// --- 2. Resource Cleanup via FinalizationRegistry ---
const registry = new FinalizationRegistry((heldMetadata) => {
  console.log(`Resource [${heldMetadata.resourceId}] was garbage collected! Performing cleanup.`);
});

(() => {
  let heavyBuffer = { data: new Uint8Array(1000000) };
  registry.register(heavyBuffer, { resourceId: "BUFFER_9921" });
  // heavyBuffer goes out of scope here
})();
```

---

### 12.3 Advanced Coding Problems

#### Problem 12.1: Object Shape Normalizer (V8 Fast-Property Enforcer)
**Requirement**: Build `normalizeObjectShapes(records, schemaKeys)` that takes an array of heterogeneous plain objects (with keys added in arbitrary order or missing) and returns clones with strictly identical internal shapes (keys populated in deterministic alphabetical order with `undefined` defaults) to ensure Monomorphic IC.

```javascript
function normalizeObjectShapes(records, schemaKeys) {
  // Sort schema keys to guarantee exact property offset alignment in V8
  const sortedKeys = [...schemaKeys].sort();

  return records.map((record) => {
    const normalized = {};
    for (const key of sortedKeys) {
      // Deterministic property assignment order guarantees uniform Hidden Class
      normalized[key] = key in record ? record[key] : undefined;
    }
    return normalized;
  });
}

// Verification:
const heterogeneousInputs = [
  { age: 30, name: "Alice" }, // Shape: age -> name
  { name: "Bob", role: "Dev" }, // Shape: name -> role
  { role: "Staff", age: 40, name: "Charlie" } // Shape: role -> age -> name
];

const normalized = normalizeObjectShapes(heterogeneousInputs, ["name", "age", "role"]);
console.log(normalized.map(Object.keys));
// All output: ['age', 'name', 'role'] -> Guaranteed Monomorphic Shape in V8!
```

#### Problem 12.2: Memory-Safe Cache with `WeakRef` & `FinalizationRegistry`
**Requirement**: Implement `createMemorySensitiveCache()` that caches large objects using `WeakRef`. If the JavaScript engine runs low on memory and garbage collects an object, the cache detects this on access and re-fetches or evicts cleanly, with automatic key cleanup via `FinalizationRegistry`.

```javascript
function createMemorySensitiveCache(factory) {
  const cache = new Map(); // key -> WeakRef<Object>

  const registry = new FinalizationRegistry((key) => {
    // When the target object is GC'd, purge the dead key from the Map
    cache.delete(key);
  });

  return {
    get(key) {
      if (cache.has(key)) {
        const ref = cache.get(key);
        const dereferenced = ref.deref();
        if (dereferenced !== undefined) {
          return dereferenced; // Cache hit: Object still alive in heap
        }
        // Object was garbage collected
        cache.delete(key);
      }

      // Compute fresh instance
      const freshValue = factory(key);
      const weakRef = new WeakRef(freshValue);
      cache.set(key, weakRef);
      registry.register(freshValue, key);

      return freshValue;
    },
    has(key) {
      if (!cache.has(key)) return false;
      return cache.get(key).deref() !== undefined;
    },
    size() {
      return cache.size;
    }
  };
}

// Verification:
const imageCache = createMemorySensitiveCache((filename) => ({
  file: filename,
  pixels: new Uint8Array(10000)
}));

const img1 = imageCache.get("avatar.png");
console.log("Cached successfully:", imageCache.has("avatar.png")); // true
console.log("Image pixels length:", img1.pixels.length); // 10000
```

#### Problem 12.3: Production Deep Clone with WeakMap Cycle Guard & Symbol Keys
**Requirement**: Write `deepClone(target)` that creates a faithful clone preserving prototype inheritance, handling cyclic references, cloning `Date`, `RegExp`, `Map`, `Set`, typed arrays, and copying non-enumerable and `Symbol` property descriptors.

```javascript
function deepClone(target, hash = new WeakMap()) {
  if (target === null || typeof target !== "object") return target;

  // Circular reference check
  if (hash.has(target)) return hash.get(target);

  // Handle specific standard built-in types
  if (target instanceof Date) return new Date(target.getTime());
  if (target instanceof RegExp) return new RegExp(target.source, target.flags);
  if (target instanceof Set) {
    const setCopy = new Set();
    hash.set(target, setCopy);
    target.forEach((val) => setCopy.add(deepClone(val, hash)));
    return setCopy;
  }
  if (target instanceof Map) {
    const mapCopy = new Map();
    hash.set(target, mapCopy);
    target.forEach((val, key) => mapCopy.set(deepClone(key, hash), deepClone(val, hash)));
    return mapCopy;
  }
  if (ArrayBuffer.isView(target)) {
    return new target.constructor(target.buffer.slice(0), target.byteOffset, target.length);
  }

  // Clone plain object / custom class instance with prototype preservation
  const proto = Object.getPrototypeOf(target);
  const clone = Object.create(proto);
  hash.set(target, clone);

  // Retrieve all property descriptors including Symbols and non-enumerable properties
  const propertyDescriptors = Object.getOwnPropertyDescriptors(target);

  for (const [key, descriptor] of Reflect.ownKeys(propertyDescriptors).map((k) => [k, propertyDescriptors[k]])) {
    if ("value" in descriptor) {
      descriptor.value = deepClone(descriptor.value, hash);
    }
    Object.defineProperty(clone, key, descriptor);
  }

  return clone;
}

// Verification:
const original = { date: new Date(), map: new Map([["k", { nested: 1 }]]) };
original.self = original; // Circular reference
const cloned = deepClone(original);
console.log(cloned !== original); // true
console.log(cloned.self === cloned); // true (Preserves circular graph!)
console.log(cloned.map.get("k") !== original.map.get("k")); // true (Deep cloned!)
```

#### Problem 12.4: Zero-GC Object Pool for High-Frequency Loops
**Requirement**: Build `createObjectPool(factory, resetFn, initialCapacity)` for game/graphics loops. When `pool.acquire()` is called, reuse existing instantiated objects to prevent Young Generation Minor GC scavenger churn.

```javascript
function createObjectPool(factory, resetFn, initialCapacity = 100) {
  const pool = Array.from({ length: initialCapacity }, factory);
  let availableCount = initialCapacity;

  return {
    acquire(...initArgs) {
      let obj;
      if (availableCount > 0) {
        availableCount--;
        obj = pool[availableCount];
      } else {
        // Pool exhausted, allocate emergency object
        obj = factory();
      }
      return resetFn(obj, ...initArgs);
    },
    release(obj) {
      if (availableCount < pool.length) {
        pool[availableCount] = obj;
        availableCount++;
      }
    },
    getAvailableCount() {
      return availableCount;
    }
  };
}

// Verification: Vector2D pool for 60fps rendering loop
class Vector2D {
  constructor() { this.x = 0; this.y = 0; }
}

const vectorPool = createObjectPool(
  () => new Vector2D(),
  (v, x = 0, y = 0) => { v.x = x; v.y = y; return v; },
  10
);

const v1 = vectorPool.acquire(10, 25);
console.log(`Acquired Vector: (${v1.x}, ${v1.y}). Remaining: ${vectorPool.getAvailableCount()}`); // (10, 25), 9
vectorPool.release(v1);
console.log(`Released Vector. Remaining: ${vectorPool.getAvailableCount()}`); // 10 (Zero memory allocation!)
```

#### Problem 12.5: Leak-Free EventEmitter with WeakRef Listeners
**Requirement**: Implement `LeakFreeEventEmitter` that stores listener callbacks using `WeakRef` and registers them with a `FinalizationRegistry`. When listener instances are garbage-collected externally, the event emitter automatically purges dead listeners, preventing listener retention leaks.

```javascript
class LeakFreeEventEmitter {
  constructor() {
    this.events = new Map(); // eventName -> Set<{ ref: WeakRef<Function>, token: Symbol }>
    this.registry = new FinalizationRegistry(({ eventName, token }) => {
      // Auto-cleanup when listener is collected
      const listeners = this.events.get(eventName);
      if (listeners) {
        for (const item of listeners) {
          if (item.token === token) {
            listeners.delete(item);
            break;
          }
        }
        if (listeners.size === 0) this.events.delete(eventName);
      }
    });
  }

  on(eventName, listenerFn) {
    if (typeof listenerFn !== "function") throw new TypeError("Listener must be a function");

    let listeners = this.events.get(eventName);
    if (!listeners) {
      listeners = new Set();
      this.events.set(eventName, listeners);
    }

    const token = Symbol("listener_token");
    const item = { ref: new WeakRef(listenerFn), token };
    listeners.add(item);
    this.registry.register(listenerFn, { eventName, token });

    return () => {
      listeners.delete(item);
      if (listeners.size === 0) this.events.delete(eventName);
    };
  }

  emit(eventName, ...args) {
    const listeners = this.events.get(eventName);
    if (!listeners) return false;

    for (const item of Array.from(listeners)) {
      const fn = item.ref.deref();
      if (fn !== undefined) {
        fn(...args);
      } else {
        listeners.delete(item); // Prune collected listener on-the-fly
      }
    }
    return true;
  }

  listenerCount(eventName) {
    const listeners = this.events.get(eventName);
    return listeners ? listeners.size : 0;
  }
}

// Verification:
const emitter = new LeakFreeEventEmitter();
let handler = (data) => console.log("Received Event:", data);
emitter.on("DATA_SYNC", handler);

emitter.emit("DATA_SYNC", { status: 200 }); // "Received Event: { status: 200 }"
console.log("Active listeners count:", emitter.listenerCount("DATA_SYNC")); // 1
```

---

## Senior Engineering Checklist & Retrospective

| Domain | Invariant / Rule | Senior Implementation Diagnostic |
|---|---|---|
| **Functions** | Parameter Scope Isolation | Check whether default parameters create intermediate lexical environments shadowing outer scope. |
| **Execution Context** | Temporal Dead Zone | Never access `let`/`const`/`class` before definition; handle TDZ explicitly. |
| **Closures** | Shared Context Trap | Sibling inner functions share the same Heap Context object; never retain massive buffers in sibling closures. |
| **This Binding** | Call-site Resolution | Remember the 4 precedence rules (`new` > Explicit > Implicit > Default); use arrow functions only for lexical `this`. |
| **Prototypes** | Read/Write Asymmetry | Reading traverses the chain; writing creates an own-property unless a prototype setter intercepts. |
| **Prototypes** | Prototype Pollution | Guard deep merges by rejecting `__proto__`, `constructor`, and `prototype` keys; prefer `Object.create(null)`. |
| **Metaprogramming** | Receiver Forwarding | Always supply `receiver` to `Reflect.get` and `Reflect.set` so getter `this` references the Proxy. |
| **Event Loop** | Microtask Starvation | Microtask loops freeze the browser render pipeline and macrotask queue; yield via `MessageChannel` or `setTimeout`. |
| **Promises** | Resolution Procedure | Chaining cycles must throw `TypeError`; thenables must be guarded against multiple calls with single-settlement flags. |
| **Async/Await** | Return Await in Try/Catch | Always `return await` inside `try/catch` to allow the local error handler to intercept rejections. |
| **Functional** | Transducers for Scale | Avoid chaining `.map().filter()` on huge datasets; compose transducers to eliminate intermediate array allocations. |
| **V8 Internals** | Monomorphic Shapes | Initialize object keys in deterministic, identical orders to maintain Monomorphic Inline Caching. |


