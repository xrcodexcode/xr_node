# Cheat Sheet: Prototypes and OOP

### Creating a Class
```javascript
class Person {
  #ssn; // private
  static count = 0; // static

  constructor(name) {
    this.name = name;
    Person.count++;
  }

  // Instance method
  greet() { console.log(this.name); }
  
  // Getter
  get info() { return this.name; }
}
```

### Inheritance
```javascript
class Employee extends Person {
  constructor(name, title) {
    super(name); // Call parent constructor
    this.title = title;
  }
}
```

### Prototype Checking
- `obj instanceof Class` (true/false)
- `Object.getPrototypeOf(obj)`
- `obj.hasOwnProperty('prop')` (true only if prop is ON the object, not chain)
