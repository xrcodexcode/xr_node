# Level 12 — Prototypes and OOP

**Learning Time**: 4 hours
**Practice Time**: 6 hours
**Mastery Checkpoint**: Can build class hierarchies, understand the prototype chain, and explain `new` and `this` in OOP contexts.

---

## 1. The Prototype System (What is it?)
Every JavaScript object has a hidden property called `[[Prototype]]` (accessible via `__proto__` or `Object.getPrototypeOf()`). It points to another object. If a property is not found on an object, JS looks up the **prototype chain**.

### The Prototype Chain (ASCII Diagram)
```text
myObject  -->  Object.prototype  -->  null
  (id: 1)        (.toString())
```

### Why?
Memory efficiency. Instead of every object carrying its own copy of a method, they share methods from a central prototype.

---

## 2. Constructor Functions (Legacy Pattern)
Before classes, we used Constructor Functions with the `new` keyword.

```javascript
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() {
  console.log(`Hi, I'm ${this.name}`);
};

const p1 = new Person("Alice");
p1.greet();
```

### What does `new` do? (4 Steps)
1. Creates a brand new empty object `{}`.
2. Sets its `[[Prototype]]` to the constructor's `prototype` property.
3. Binds `this` to the new object and executes the constructor.
4. Returns the new object.

---

## 3. ES6 Classes (Modern Pattern)
Syntactic sugar over the prototype system.

```javascript
class User {
  // Constructor
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  // Instance method (added to User.prototype)
  login() {
    console.log(`${this.email} logged in`);
  }

  // Static method (on the class itself, not instances)
  static generateId() {
    return Math.random().toString(36).substr(2, 9);
  }
}

const u1 = new User("Bob", "bob@example.com");
u1.login();
```

---

## 4. Inheritance (`extends` and `super`)

```javascript
class Admin extends User {
  constructor(name, email, role) {
    super(name, email); // Calls User constructor
    this.role = role;
  }

  // Method overriding
  login() {
    super.login(); // Call parent method
    console.log(`Admin dashboard loaded for ${this.role}`);
  }
}
```

### Class Hierarchy
```text
User (name, email, login())
  ^
  | extends
  |
Admin (role, login() override)
```

---

## 5. Encapsulation (Private Fields)
Use `#` to make properties/methods private.

```javascript
class BankAccount {
  #balance = 0; // Private field

  deposit(amount) {
    this.#balance += amount;
  }

  get balance() { // Getter
    return this.#balance;
  }
}
```

---

## 6. Common Mistakes

**Mistake** -> Forgetting `super()` in a child class constructor.
```javascript
class Child extends Parent {
  constructor() {
    this.name = "Kid"; // ReferenceError: Must call super constructor
  }
}
```
**Correct** -> Always call `super()` before using `this`.

---
