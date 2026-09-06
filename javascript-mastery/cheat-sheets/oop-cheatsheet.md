# OOP Cheat Sheet

## Classes (ES6)
Syntactic sugar over JS's prototype-based inheritance.

```javascript
class Person {
  // Constructor runs when 'new' is used
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Method (added to Prototype, shared across instances)
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const p1 = new Person("Jon", "Snow");
p1.getFullName(); // "Jon Snow"
```

## Inheritance
Use `extends` to inherit and `super()` to call the parent constructor.

```javascript
class Employee extends Person {
  constructor(firstName, lastName, role) {
    super(firstName, lastName); // MUST call super before using 'this'
    this.role = role;
  }

  // Method overriding
  getFullName() {
    return `Employee: ${super.getFullName()}`;
  }
}

const e1 = new Employee("Jane", "Doe", "Dev");
```

## Encapsulation (Private Fields)
Use `#` prefix to make fields/methods private (ES2022).

```javascript
class BankAccount {
  #balance = 0; // Private field

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount();
acc.deposit(100);
// acc.#balance; // SyntaxError: Private field
```

## Getters and Setters
Bind a property to a function that will be called when that property is looked up or set.

```javascript
class User {
  constructor(name) {
    this._name = name; // Convention for internal property
  }

  get name() {
    return this._name.toUpperCase();
  }

  set name(newName) {
    if (newName.length > 0) {
      this._name = newName;
    }
  }
}

const u = new User("bob");
u.name = "alice"; // Triggers setter
console.log(u.name); // "ALICE" (Triggers getter)
```

## Static Methods
Methods that exist on the class itself, not on instances. Often used for utilities.

```javascript
class MathUtil {
  static square(x) {
    return x * x;
  }
}

// MathUtil.square(5); // 25
// const m = new MathUtil(); m.square(5); // Error
```

## Prototypes (Under the Hood)
Every function has a `.prototype` property. Every object has a `.__proto__` pointing to its constructor's prototype.

```javascript
// Legacy pre-ES6 way
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function() {
  console.log(this.name + " makes a noise.");
};
```
