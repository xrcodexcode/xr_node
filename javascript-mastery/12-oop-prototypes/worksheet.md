# Level 12 Worksheet

## Part A — Predict the Output
```javascript
class Task {
  constructor(name) { this.name = name; }
  log() { console.log(this.name); }
}
const t = new Task("Test");
setTimeout(t.log, 100); 
// Predict what happens and how to fix it!
```

## Part B — Complete the Code
```javascript
class Product {
  constructor(price) { this.price = price; }
}
class DiscountedProduct extends Product {
  constructor(price, discount) {
    // TODO: Complete constructor
  }
  // TODO: Add getter for finalPrice
}
```

## Part C — Write from Scratch
Write a `Queue` class with:
- private array `#items`
- `enqueue(item)`
- `dequeue()`
- getter `isEmpty`

## Part D — Debug
```javascript
function Animal(name) {
  this.name = name;
}
Animal.speak = function() { // Intended as instance method
  console.log(this.name + " makes a noise.");
}
const dog = new Animal("Dog");
dog.speak(); // TypeError!
```

## Part E — Modify
Refactor a legacy factory function into an ES6 Class.
```javascript
function createCounter() {
  let count = 0;
  return {
    inc() { count++; },
    get() { return count; }
  }
}
```
Convert this to a `Counter` class using private fields.

## Part F — Challenge
Implement the **Mixin** pattern. Create a `flyable` mixin with a `fly()` method, and apply it to a `Bird` class using `Object.assign`.

## Part G — Mini Project (Library System)
Build a class-based Library system.
- `Book` class (title, author, isCheckedOut)
- `User` class (name, checkedOutBooks array)
- `Library` class (books array, users array)
  - `addBook(book)`
  - `registerUser(user)`
  - `checkoutBook(user, bookTitle)` -> finds book, marks checked out, adds to user's list.
