# Level 12 — Exercises (Prototypes and OOP)

## 🟢 Beginner

1. **Class Basics**
   Create a `Rectangle` class with `width`, `height` in constructor, and a method `getArea()`.

2. **Predict Output (Prototype)**
   ```javascript
   const animal = { eats: true };
   const rabbit = Object.create(animal);
   console.log(rabbit.eats);
   console.log(rabbit.hasOwnProperty('eats'));
   ```

3. **Getters/Setters**
   Create a `Circle` class with a `radius` property. Add a getter for `diameter` (radius * 2) and a setter for `diameter` that updates the `radius`.

## 🟡 Intermediate

4. **Inheritance**
   Create a `Vehicle` class (`make`, `model`, `start()`). Create a `Car` class extending `Vehicle` with an extra `numDoors` property and an overridden `start()` method that calls the parent `start()` and adds "Vroom!".

5. **Static Methods**
   Create a `MathHelper` class with static methods `add(a,b)` and `multiply(a,b)`.

6. **Predict Output (Classes)**
   ```javascript
   class A {
     constructor() { this.x = 1; }
   }
   class B extends A {
     constructor() {
       super();
       this.y = 2;
     }
   }
   const obj = new B();
   console.log(obj.x, obj.y);
   ```

## 🔴 Advanced

7. **Private Fields**
   Create a `Wallet` class with a private `#amount`. Expose `add(val)` and `spend(val)` (only if sufficient funds).

8. **Prototypal Inheritance (Without Classes)**
   Recreate the `Vehicle` and `Car` inheritance structure from Exercise 4 using ONLY constructor functions, `Object.create()`, and `prototype` assignments.

9. **Polymorphism**
   Create an array of `Shape` objects (mix of `Rectangle` and `Circle`). Iterate through them and calculate the total area by calling `.getArea()` on each.

## 🔥 Challenge

10. **Custom Error Classes**
    Create a custom error class `ValidationError` extending `Error`. Throw it in a function if input is invalid, catch it, and verify `err instanceof ValidationError`.
