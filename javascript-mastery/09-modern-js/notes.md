# Level 9: Modern JavaScript (ES6+)

## The Evolution of JavaScript
JavaScript has evolved massively since 2015 (ES6 or ECMAScript 2015). Modern JavaScript makes code shorter, safer, and easier to read.

---

### 1. let/const vs var (MUST KNOW)
**Legacy (var):** Function-scoped, hoisted, allows re-declaration.
**Modern (let/const):** Block-scoped, Temporal Dead Zone (TDZ), no re-declaration.

```javascript
// Legacy
var name = 'John';
var name = 'Jane'; // Allowed

// Modern
let age = 30;
age = 31; // Allowed

const dob = '2000-01-01';
// dob = '2001-01-01'; // TypeError!
```
*Rule of thumb:* Always use `const`. Use `let` only if the value will change. Never use `var`.

---

### 2. Template Literals (MUST KNOW)
String interpolation and multi-line strings.

```javascript
const user = 'Alice';
const greeting = `Hello ${user},
Welcome to the app!`; // Multi-line works naturally!
```

---

### 3. Destructuring (MUST KNOW)
Extract values from objects or arrays into distinct variables.

**Objects:**
```javascript
const user = { id: 1, name: 'Bob', role: 'admin' };
const { id, name: userName, status = 'active' } = user;
```

**Arrays:**
```javascript
const rgb = [255, 0, 128];
const [r, , b] = rgb; // Skip green
```

---

### 4. Spread and Rest Operators (`...`) (MUST KNOW)
**Spread:** Unpacks elements.
```javascript
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]

const obj1 = { a: 1 };
const obj2 = { ...obj1, b: 2 }; // { a: 1, b: 2 }
```

**Rest:** Packs elements into an array (in parameters or destructuring).
```javascript
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
const [first, ...rest] = [1, 2, 3, 4]; // rest = [2, 3, 4]
```

---

### 5. Arrow Functions (MUST KNOW)
Shorter syntax and lexical `this`.

```javascript
// Legacy
const addLegacy = function(a, b) { return a + b; };

// Modern
const add = (a, b) => a + b;
const double = x => x * 2;
```
*Mistake:* Using arrow functions for object methods where you need `this`.
```javascript
const obj = {
  value: 10,
  // Bad - 'this' refers to outer scope (window/global)
  getValue: () => this.value, 
  // Good
  getValueRight() { return this.value; }
};
```

---

### 6. Default Parameters (MUST KNOW)
```javascript
function greet(name = 'Guest') {
  console.log(`Hi ${name}`);
}
```

---

### 7. Enhanced Object Literals (SHOULD KNOW)
```javascript
const name = 'Dave';
const dynamicKey = 'status';

const user = {
  name, // Shorthand for name: name
  [dynamicKey]: 'active', // Computed property
  sayHi() { console.log('Hi'); } // Method shorthand
};
```

---

### 8. Optional Chaining (`?.`) & Nullish Coalescing (`??`) (MUST KNOW)
**Optional Chaining:** Safely access nested properties.
```javascript
const user = { profile: { email: 'test@test.com' } };
const zip = user?.address?.zip; // undefined, no crash
```

**Nullish Coalescing:** Fallback for `null` or `undefined` only (unlike `||` which checks falsy).
```javascript
const count = 0;
const total = count ?? 10; // 0
const fallback = count || 10; // 10 (because 0 is falsy)
```

---

### 9. Logical Assignment (SHOULD KNOW)
```javascript
let a = 1;
a ||= 2; // a = a || 2; (Keeps 1)
a &&= 2; // a = a && 2; (Becomes 2)
a ??= 3; // a = a ?? 3;
```

---

### 10. Classes (SHOULD KNOW)
Syntactic sugar over prototypes.
```javascript
class Person {
  constructor(name) { this.name = name; }
  speak() { console.log(`${this.name} speaks`); }
  static info() { console.log('Person class'); }
}

class Employee extends Person {
  constructor(name, role) {
    super(name);
    this.role = role;
  }
}
```

---

### 11. Array/Object Modern Methods Recap (MUST KNOW)
- Arrays: `map`, `filter`, `reduce`, `find`, `some`, `every`, `includes`
- Objects: `Object.keys`, `Object.values`, `Object.entries`

---

### 12. for...of vs for...in (SHOULD KNOW)
- `for...of`: Iterates over iterable *values* (Arrays, Strings).
- `for...in`: Iterates over enumerable *keys* (Objects).

---

### 13. Symbols & Iterators (ADVANCED)
- **Symbol:** Unique, immutable primitive often used as hidden object keys.
- **Generators:** Functions that can pause (`yield`) and resume (`function*`).
