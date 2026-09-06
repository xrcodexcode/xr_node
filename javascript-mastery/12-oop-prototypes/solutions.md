# Level 12 — Solutions

### Exercises
2. `true`, `false` (it inherits it, it doesn't own it)
6. `1 2`
8. Prototypal Inheritance:
```javascript
function Vehicle(make) { this.make = make; }
Vehicle.prototype.start = function() {};

function Car(make, doors) {
  Vehicle.call(this, make);
  this.doors = doors;
}
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;
```

### Worksheet
**Part A**: 
Fails (logs undefined or error) due to lost `this`. Fix: `setTimeout(() => t.log(), 100);` or bind in constructor.

**Part B**:
```javascript
class DiscountedProduct extends Product {
  constructor(price, discount) {
    super(price);
    this.discount = discount;
  }
  get finalPrice() {
    return this.price - this.discount;
  }
}
```

**Part D**:
```javascript
// Fix: Add to prototype, not the constructor function object itself.
Animal.prototype.speak = function() {
  console.log(this.name + " makes a noise.");
};
```

**Part E**:
```javascript
class Counter {
  #count = 0;
  inc() { this.#count++; }
  get() { return this.#count; }
}
```
