# Objects Cheat Sheet

## Creation & Access
```javascript
const user = {
  name: "Jon",
  age: 30,
  "home address": "123 Main St", // Quotes needed for spaces
  greet() {                      // Method shorthand
    return `Hi, I am ${this.name}`;
  }
};

// Dot notation (standard)
user.name;

// Bracket notation (for dynamic keys or invalid identifiers)
user["home address"];
const key = "age";
user[key];
```

## Modification
```javascript
user.email = "jon@test.com"; // Add/Update
delete user.age;             // Remove property
```

## Object Static Methods

### Keys, Values, Entries
```javascript
const car = { make: "Ford", model: "Mustang" };

Object.keys(car);    // ["make", "model"]
Object.values(car);  // ["Ford", "Mustang"]
Object.entries(car); // [["make", "Ford"], ["model", "Mustang"]]
```

### Freezing & Sealing
```javascript
Object.freeze(obj); // Cannot add, delete, or change properties
Object.seal(obj);   // Cannot add or delete, BUT can change existing properties
```

## Modern Syntax (ES6+)

### Object Shorthand
```javascript
const name = "Jon";
const obj = { name }; // equivalent to { name: name }
```

### Destructuring
```javascript
const { make, model } = car;
// Rename while destructuring
const { make: carBrand } = car;
// Default values
const { year = 2020 } = car;
```

### Spread Operator (Shallow Copy)
```javascript
const obj1 = { a: 1, b: 2 };
const clone = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }
```

### Optional Chaining (`?.`)
Safely access deeply nested properties without throwing errors if intermediate properties are null/undefined.
```javascript
const company = { admin: { name: "Bob" } };
// Returns undefined instead of throwing error if 'manager' doesn't exist
const managerName = company.manager?.name;
```

### Nullish Coalescing (`??`)
Returns right-hand side ONLY if left is `null` or `undefined` (unlike `||` which checks for any falsy value like `0` or `""`).
```javascript
const limit = 0;
const val = limit || 10; // val is 10 (0 is falsy)
const trueVal = limit ?? 10; // trueVal is 0
```
