# JS Fundamentals Cheat Sheet

## Variables
```javascript
let score = 10;      // Mutable (can change)
const name = "Jon";  // Immutable (cannot reassign)
var old = true;      // Legacy (avoid using)
```

## Data Types
### Primitives (Passed by Value)
```javascript
const str = "Hello";       // String
const num = 42;            // Number
const isTrue = false;      // Boolean
const empty = null;        // Null (intentional absence)
let notDefined;            // Undefined (variable declared, no value)
const sym = Symbol('id');  // Symbol (unique identifier)
const big = 90071992n;     // BigInt (large integers)
```

### Non-Primitives (Passed by Reference)
```javascript
const obj = { id: 1 };     // Object
const arr = [1, 2, 3];     // Array (technically an object)
```

## Operators
### Arithmetic
`+` (add), `-` (subtract), `*` (multiply), `/` (divide), `%` (modulo/remainder), `**` (exponentiation)

### Comparison
```javascript
5 === 5;   // true  (Strict equality: value and type) - ALWAYS USE THIS
5 !== 3;   // true  (Strict inequality)
5 == "5";  // true  (Loose equality: performs type coercion) - AVOID
5 != "3";  // true  (Loose inequality) - AVOID
10 > 5;    // true  (Greater than)
5 < 10;    // true  (Less than)
10 >= 10;  // true  (Greater than or equal to)
```

### Logical
```javascript
true && false; // false (AND: true if both are true)
true || false; // true  (OR: true if at least one is true)
!true;         // false (NOT: inverts boolean)
```

## Type Conversion
### Explicit (Manual)
```javascript
Number("42");     // 42
String(100);      // "100"
Boolean(1);       // true
```

### Implicit (Coercion Gotchas)
```javascript
"5" + 1; // "51" (Number converted to String)
"5" - 1; // 4    (String converted to Number)
+"5";    // 5    (Unary plus converts to Number)
```

## Truthy vs Falsy
**Falsy values:** `false`, `0`, `""`, `null`, `undefined`, `NaN`.
**Truthy values:** EVERYTHING else (including `[]`, `{}`, `"0"`, `"false"`).
