# Level 11 — Exercises (`this` Keyword)

## 🟢 Beginner

1. **Predict Output 1**
   ```javascript
   const person = {
     name: "John",
     getName: function() { return this.name; }
   };
   console.log(person.getName());
   ```

2. **Predict Output 2**
   ```javascript
   function strictFunc() {
     "use strict";
     return this;
   }
   console.log(strictFunc());
   ```

3. **Predict Output 3**
   ```javascript
   const car = {
     brand: "Toyota",
     getBrand: () => { return this.brand; }
   };
   console.log(car.getBrand());
   ```

## 🟡 Intermediate

4. **Predict Output 4**
   ```javascript
   const obj1 = { val: 10 };
   const obj2 = { val: 20 };
   
   function getVal() { return this.val; }
   
   obj1.get = getVal;
   obj2.get = getVal;
   
   console.log(obj1.get());
   console.log(obj2.get());
   ```

5. **Fix the Context**
   Fix the code below so it logs `"Connecting to db..."`
   ```javascript
   const database = {
     name: "db",
     connect() {
       setTimeout(function() {
         console.log(`Connecting to ${this.name}...`);
       }, 100);
     }
   };
   database.connect();
   ```

6. **Call vs Apply**
   Write a function `sum(a, b)` and invoke it using `call` and `apply` with an object `{ offset: 10 }` as `this`, returning `this.offset + a + b`.

## 🔴 Advanced

7. **Predict Output 5 (Tricky)**
   ```javascript
   const length = 4;
   function callback() {
     console.log(this.length);
   }
   const object = {
     length: 5,
     method(callback) {
       callback();
     }
   };
   object.method(callback, 1, 2);
   ```

8. **Predict Output 6 (Bind)**
   ```javascript
   const user = { name: "Alice" };
   function sayName() { console.log(this.name); }
   const bound1 = sayName.bind(user);
   const bound2 = bound1.bind({ name: "Bob" }); // Can you re-bind?
   bound2();
   ```

9. **Implementation**
   Implement your own simplified version of `Function.prototype.bind` called `myBind`.

## 🔥 Challenge
10. **The Event Emitter**
    Create a class-like object `EventEmitter` where listeners are called with a specific context passed during subscription.
