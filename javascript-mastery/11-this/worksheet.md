# Level 11 Worksheet

## Part A — Predict the Output
```javascript
var status = "global";
const machine = {
  status: "active",
  getStatus() {
    return this.status;
  },
  getArrowStatus: () => {
    return this.status;
  }
};
console.log(machine.getStatus());
console.log(machine.getArrowStatus());
const fn = machine.getStatus;
console.log(fn());
```

## Part B — Complete the Code
```javascript
const counter = {
  count: 0,
  increment() {
    // TODO: use setTimeout to increment count by 1 after 1 second
    // Ensure `this` remains the counter object!
  }
};
```

## Part C — Write from Scratch
Create an object `shoppingCart` with an array of items. 
Add a method `printReceipt` that uses `.forEach` to print each item. 
Ensure `printReceipt` accesses the cart's `taxRate` property correctly inside the `.forEach` callback.

## Part D — Debug
```javascript
class Button {
  constructor(text) {
    this.text = text;
    this.element = document.createElement('button');
    this.element.textContent = this.text;
    this.element.addEventListener('click', this.onClick);
  }
  onClick() {
    console.log(`Clicked: ${this.text}`); // Outputs: Clicked: undefined
  }
}
```

## Part E — Modify
Take a function `greet(msg) { console.log(msg + this.name); }`. 
Modify its execution using `.bind()` so it can be passed safely to a button click handler for a specific user object.

## Part F — Challenge
Write a higher-order function `debounce(fn, ms)` that preserves the `this` context and arguments of the debounced function.

## Part G — Mini Project
Build a simple interactive counter UI. The Counter must be an object with properties `value`, `element`, `incrementBtn`, `decrementBtn`. Use methods for `increment` and `decrement`. Wire them up to DOM buttons, ensuring `this` never drops context.
