# The 'this' Keyword Cheat Sheet

> `this` behaves differently depending on **HOW** a function is called, not where it is defined.

## Rule 1: Global Context / Free Function Invocation
If a regular function is called simply as `func()`, `this` is the global object (window in browsers). In "strict mode", it is `undefined`.

```javascript
function showThis() {
  console.log(this);
}
showThis(); // Window (or undefined in strict mode)
```

## Rule 2: Implicit Binding (Method Invocation)
When a function is called as a method of an object (`obj.method()`), `this` refers to the object to the left of the dot.

```javascript
const user = {
  name: "Jon",
  greet() {
    console.log(this.name);
  }
};
user.greet(); // 'this' is user object. Logs "Jon".

// GOTCHA: Losing context
const detachedGreet = user.greet;
detachedGreet(); // 'this' is lost (falls back to Rule 1). Logs undefined.
```

## Rule 3: Explicit Binding (call, apply, bind)
You can force `this` to be a specific object.

```javascript
function greet() {
  console.log(this.name);
}
const person = { name: "Alice" };

greet.call(person);  // Executes immediately. Logs "Alice"
greet.apply(person); // Executes immediately. (Takes array of args)

const boundGreet = greet.bind(person); // Returns a new function
boundGreet(); // Logs "Alice"
```

## Rule 4: 'new' Binding (Constructors/Classes)
When a function/class is called with `new`, `this` refers to the newly created instance object.

```javascript
function User(name) {
  this.name = name;
}
const jon = new User("Jon"); // 'this' inside User points to 'jon'
```

## Rule 5: Arrow Functions (Lexical Binding)
Arrow functions DO NOT have their own `this`. They inherit `this` from the enclosing lexical scope (the outer function or global scope).

```javascript
const user = {
  name: "Jon",
  greet() {
    // Regular function sets 'this' to 'user'
    setTimeout(() => {
      // Arrow function inherits 'this' from greet()
      console.log(this.name); 
    }, 1000);
  }
};
user.greet(); // Logs "Jon"
```

### When NOT to use Arrow Functions:
Do not use arrow functions as object methods, because they will inherit the global scope's `this` instead of the object.

```javascript
const wrongUser = {
  name: "Bob",
  greet: () => {
    console.log(this.name); // 'this' is Window. Logs undefined.
  }
};
```

## Summary Table

| Invocation Type | `this` refers to... | Example |
| :--- | :--- | :--- |
| Regular Function | Window (undefined in strict) | `myFunc()` |
| Object Method | The object owning the method | `obj.myFunc()` |
| Explicit Binding | The object passed in | `myFunc.call(obj)` |
| Constructor / Class| The new instance created | `new MyFunc()` |
| Arrow Function | The surrounding lexical scope | `() => {}` |
