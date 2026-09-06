# Level 6 — Objects Cheat Sheet

## Creating Objects
```javascript
// Literal
const obj = { name: "Ali", age: 25 };

// Shorthand Property
const name = "Ali";
const obj2 = { name }; // { name: "Ali" }

// Computed Property Name
const key = "id";
const obj3 = { [key]: 101 }; // { id: 101 }
```

## Accessing & Modifying
```javascript
// Dot Notation
obj.name;

// Bracket Notation (Dynamic)
obj["age"];
const prop = "name";
obj[prop];

// Adding / Modifying
obj.role = "admin";
obj["isActive"] = true;

// Deleting
delete obj.age;
```

## Destructuring
```javascript
const user = { id: 1, userRole: "admin" };

// Basic
const { id } = user;

// Renaming
const { userRole: role } = user;

// Defaults
const { status = "active" } = user;

// Nested
const profile = { data: { email: "a@a.com" } };
const { data: { email } } = profile;
```

## Spread Operator & Merging
```javascript
const defaults = { theme: "light", font: "arial" };
const custom = { font: "roboto", size: 14 };

// Shallow copy & merge (Right side overwrites left)
const config = { ...defaults, ...custom };
// { theme: "light", font: "roboto", size: 14 }
```

## Built-in Methods
```javascript
const obj = { a: 1, b: 2 };

Object.keys(obj);    // ['a', 'b']
Object.values(obj);  // [1, 2]
Object.entries(obj); // [['a', 1], ['b', 2]]

Object.freeze(obj);  // Immutable
Object.seal(obj);    // Values mutable, keys fixed
```

## Iteration
```javascript
// Modern way
for (const [key, value] of Object.entries(obj)) {
  console.log(key, value);
}

// for...in
for (const key in obj) {
  console.log(key, obj[key]);
}
```

## Safe Access & Cloning
```javascript
// Optional Chaining (Avoids errors if nested object is null/undefined)
const nestedVal = data?.user?.profile?.name;

// Shallow Clone
const shallow = { ...obj };

// Deep Clone (Modern)
const deep = structuredClone(obj);
```
