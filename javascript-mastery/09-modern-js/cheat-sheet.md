# Level 9: Cheat Sheet (Modern JS ES6+)

## Variables
- **`let`:** Block-scoped, reassignable.
- **`const`:** Block-scoped, NOT reassignable (but objects/arrays are mutable).
- **`var`:** Don't use it. Function-scoped, hoisted.

## Arrow Functions
```javascript
const add = (a, b) => a + b;
const getObj = () => ({ key: 'value' }); // Wrap in parens to return object
```

## Destructuring
```javascript
// Object
const { name, age = 18 } = user;
const { name: fullName } = user; // Rename

// Array
const [first, , third] = array;
```

## Spread and Rest (`...`)
```javascript
// Spread (Unpack)
const newArr = [...oldArr, 4, 5];
const newObj = { ...oldObj, newKey: true };

// Rest (Pack)
const [first, ...rest] = array;
function func(arg1, ...restArgs) {}
```

## Operators
- **`?.` (Optional Chaining):** `obj?.prop?.subProp` (returns undefined if missing)
- **`??` (Nullish Coalescing):** `value ?? fallback` (falls back ONLY if value is null/undefined)
- **`||` (Logical OR):** `value || fallback` (falls back for ANY falsy value: 0, "", false)

## Classes
```javascript
class Animal {
  constructor(name) { this.name = name; }
  speak() { console.log(this.name); }
}
class Dog extends Animal {
  constructor(name) { super(name); } // Must call super!
}
```
