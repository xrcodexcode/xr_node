# Level 6 — Objects

**Learning Path Markers:**
- Estimated learning time: 3 hours
- Minimum practice time: 5 hours
- Mastery checkpoint: Create, manipulate, deeply copy, and traverse complex nested objects.

---

## What is an Object?
An object is a collection of related data and/or functionality. These usually consist of several variables and functions (which are called properties and methods when they are inside objects).

### Why Objects?
Without objects, we would have to keep track of related variables separately:
```javascript
const userName = "Alice";
const userAge = 25;
const userIsAdmin = true;
```
With objects, we group them into a single entity:
```javascript
const user = {
  name: "Alice",
  age: 25,
  isAdmin: true
};
```

---

## 1. Object Basics [MUST KNOW]

### Object Creation
**Literal (Most Common)**
```javascript
const product = {
  id: 1,
  name: "Laptop",
  price: 999
};
```

**Constructor (Legacy / Specific use cases)**
```javascript
const user = new Object();
user.name = "Bob";
```

**Object.create (Prototypal Inheritance - Advanced)**
```javascript
const animal = { type: "mammal" };
const dog = Object.create(animal);
dog.breed = "Poodle";
```

### Properties and Methods
Properties are values associated with an object. Methods are functions associated with an object.

**Syntax & Practical Example**
```javascript
const shoppingCart = {
  owner: "Alice",                 // Property
  items: ["Apple", "Bread"],      // Property (Array)
  
  // Method
  checkout: function() {
    console.log(`Checking out ${this.items.length} items for ${this.owner}`);
  },
  
  // Method Shorthand (ES6)
  clear() {
    this.items = [];
    console.log("Cart cleared.");
  }
};

shoppingCart.checkout(); // Checking out 2 items for Alice
```

### Accessing Properties
**Dot Notation (Standard)**
```javascript
console.log(product.name); // "Laptop"
```

**Bracket Notation (For dynamic keys or invalid identifiers)**
```javascript
const prop = "price";
console.log(product[prop]); // 999
console.log(product["name"]); // "Laptop"
```

### Computed Property Names [SHOULD KNOW]
You can compute property names dynamically in object literals.
```javascript
const keyName = "status";
const task = {
  id: 101,
  [keyName]: "in-progress"
};
console.log(task.status); // "in-progress"
```

### Property Value Shorthand [MUST KNOW]
If the property name and variable name are the same, you can omit the value.
```javascript
const title = "Developer";
const level = "Mid";

const employee = { title, level };
// Equivalent to: { title: title, level: level }
```

---

## 2. Object Operations [MUST KNOW]

### Adding, Modifying, Deleting
```javascript
const user = { name: "Sam" };

// Adding
user.age = 30;

// Modifying
user.name = "Samuel";

// Deleting
delete user.age;
```

### Checking for Properties
```javascript
const config = { theme: "dark" };

// 'in' operator (checks prototype chain too)
console.log("theme" in config); // true

// hasOwnProperty (checks ONLY the object itself)
console.log(config.hasOwnProperty("theme")); // true
```

### Destructuring [MUST KNOW]
Extracting properties into variables.
```javascript
const student = { name: "Tom", grade: "A", math: 95 };

// Basic
const { name, grade } = student;

// Renaming & Defaults
const { name: studentName, science = 80 } = student;
console.log(studentName); // "Tom"
console.log(science); // 80 (default value used)

// Nested
const profile = { user: { id: 1, handle: "tommy" } };
const { user: { handle } } = profile;
```

### Spread Operator [MUST KNOW]
Used for shallow copying or merging objects.
```javascript
const defaults = { host: "localhost", port: 8080 };
const custom = { port: 3000, secure: true };

// Merging (custom overwrites defaults)
const finalConfig = { ...defaults, ...custom };
// { host: 'localhost', port: 3000, secure: true }
```

---

## 3. Advanced Object Methods [SHOULD KNOW]

### Object.keys, Object.values, Object.entries
```javascript
const car = { make: "Toyota", model: "Camry" };

Object.keys(car);   // ["make", "model"]
Object.values(car); // ["Toyota", "Camry"]
Object.entries(car); // [["make", "Toyota"], ["model", "Camry"]]
```

### Object.freeze vs Object.seal
- **Freeze**: Cannot add, delete, or modify properties.
- **Seal**: Cannot add or delete properties, BUT can modify existing ones.
```javascript
const frozen = Object.freeze({ a: 1 });
frozen.a = 2; // Fails silently (or throws in strict mode)

const sealed = Object.seal({ b: 1 });
sealed.b = 2; // Works
sealed.c = 3; // Fails
```

### Optional Chaining (?.) [MUST KNOW]
Prevents errors when accessing nested properties that might not exist.
```javascript
const response = { data: { user: null } };

// Without optional chaining (Throws Error if user is null)
// const zip = response.data.user.address.zipCode; 

// With optional chaining (Returns undefined)
const zip = response.data.user?.address?.zipCode;
```

---

## 4. Iterating Over Objects [MUST KNOW]

**for...in loop**
```javascript
const scores = { math: 90, english: 85 };
for (const key in scores) {
  console.log(`${key}: ${scores[key]}`);
}
```

**Using Object.entries (Modern Approach)**
```javascript
for (const [subject, score] of Object.entries(scores)) {
  console.log(`${subject}: ${score}`);
}
```

---

## 5. References and Copying [ADVANCED]

Objects are stored by **reference**, not by value.

```text
Memory Diagram:
Variable `obj1` -----> Memory Address (e.g., 0x001) ---> { a: 1 }
Variable `obj2` = `obj1` -----> Points to SAME Address 0x001
```

**Reference Equality Gotcha**
```javascript
const objA = { id: 1 };
const objB = { id: 1 };
console.log(objA === objB); // false! They are different addresses in memory.

const objC = objA;
console.log(objA === objC); // true. Same address.
```

**Shallow vs Deep Copy**
- *Shallow Copy*: Copies top-level properties. Nested objects still share references. (Spread `...`, `Object.assign`)
- *Deep Copy*: Completely independent clone.

```javascript
// The Problem with Shallow Copy
const original = { a: 1, nested: { b: 2 } };
const shallow = { ...original };

shallow.nested.b = 999;
console.log(original.nested.b); // 999! (Reference is shared)

// Deep Copy (Modern approach)
const deep = structuredClone(original);
deep.nested.b = 42;
console.log(original.nested.b); // Still 999
```

---

## Common Mistakes
**Mistake**: Assuming `const` makes an object immutable.
**Why it happens**: `const` only prevents reassignment of the variable, not modification of the object's contents.
**Incorrect Code**:
```javascript
const user = { name: "Bob" };
user.name = "Alice"; // Developer thinks this will throw an error
```
**Correct Code**:
```javascript
const user = Object.freeze({ name: "Bob" });
```
**How to remember**: `const` locks the *box*, `Object.freeze` locks the *contents inside the box*.
