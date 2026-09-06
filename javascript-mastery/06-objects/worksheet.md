# Level 6 — Objects Worksheet

## Part A: Predict the Output
```javascript
// 1.
const obj1 = { a: 1 };
const obj2 = obj1;
obj2.a = 2;
console.log(obj1.a);

// 2.
const user = { name: "John" };
const admin = { name: "John" };
console.log(user === admin);

// 3.
const key = "level";
const player = { name: "Zelda", [key]: 10 };
console.log(player.level);

// 4.
const config = { speed: 100 };
Object.freeze(config);
config.speed = 200;
console.log(config.speed);

// 5.
const obj = { x: 1, y: 2 };
const { x: a, y: b } = obj;
console.log(a, b);

// 6.
const data = { val: 5 };
const copy = { ...data, val: 10 };
console.log(copy.val);

// 7.
const original = { nest: { count: 1 } };
const shallow = { ...original };
shallow.nest.count = 2;
console.log(original.nest.count);

// 8.
const response = {};
console.log(response.user?.id);

// 9.
const student = { name: "Tom", age: 20 };
console.log("age" in student);

// 10.
const cart = {
  total: 50,
  getTotal() { return this.total; }
};
console.log(cart.getTotal());
```

## Part B: Complete the Code
1. Destructure `price` from `item` and give it a default value of `0`.
```javascript
const item = { name: "Pen" };
const { _______ = _______ } = item;
```

2. Merge `objA` and `objB` using spread.
```javascript
const objA = { x: 1 };
const objB = { y: 2 };
const merged = _______________;
```

3. Iterate over the keys and values of `car`.
```javascript
const car = { make: "Ford", year: 2020 };
for (const [key, value] of _____________(car)) {
  console.log(key, value);
}
```

## Part C: Write from Scratch
1. Create an object `bankAccount` with `balance` and a method `deposit(amount)` that increases balance.
2. Write a function `hasProperty(obj, prop)` that returns true if the object has the property.
3. Write a function that takes `{a: 1, b: 2}` and returns an array of its keys capitalized: `["A", "B"]`.

## Part D: Debug
```javascript
// 1. Broken destructuring
const user = { details: { age: 30 } };
const { age } = user; 
console.log(age); // Expected: 30
```

```javascript
// 2. Broken dynamic key
const myKey = "color";
const theme = {
  myKey: "blue"
};
console.log(theme.color); // Expected: "blue"
```

## Part E: Modify
Take this code:
```javascript
function greet(user) {
  return "Hello " + user.name + " from " + user.city;
}
```
Modify it to use object destructuring in the function parameters.

## Part F: Challenge
Write a function `deepFreeze(obj)` that recursively freezes an object and all its nested objects.

## Part G: Mini Project
**Product Catalog System**
Create an object `catalog` that manages products.
- `products`: An array of product objects `{id, name, price, stock}`
- `addProduct(product)`: Adds to the array
- `findProduct(id)`: Returns the product
- `updateStock(id, qty)`: Updates stock
- `getInventoryValue()`: Returns total value (price * stock) of all products.
