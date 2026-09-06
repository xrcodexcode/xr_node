# Level 5 — Arrays

Arrays are one of the most important data structures in JavaScript. They allow you to store multiple values in a single variable.

## Array Basics

### Creating Arrays

```javascript
// 1. Array Literal (Most Common)
const fruits = ['Apple', 'Banana', 'Cherry'];

// 2. Array Constructor
const numbers = new Array(1, 2, 3);
const emptyWithLength = new Array(5); // Creates an array with 5 empty slots

// 3. Array.from() - Create from array-like or iterable object
const fromString = Array.from('hello'); // ['h', 'e', 'l', 'l', 'o']

// 4. Array.of() - Create array from arguments
const ofNumbers = Array.of(7); // [7] (Unlike new Array(7) which creates 7 empty slots)
```

### Indexing

```javascript
const colors = ['red', 'green', 'blue'];

// Read
console.log(colors[0]); // 'red'

// Write
colors[1] = 'yellow'; // ['red', 'yellow', 'blue']

// .at() (Modern way to read, supports negative indices)
console.log(colors.at(-1)); // 'blue'
```

### Length Property

```javascript
const items = [1, 2, 3];
console.log(items.length); // 3
items.length = 1; // Truncates the array: [1]
```

### Mutation vs Immutability

Arrays are reference types. When you assign an array to a new variable, they share the same memory reference.

```javascript
const original = [1, 2, 3];
const copy = original; // Points to same memory
copy.push(4);
console.log(original); // [1, 2, 3, 4] - mutated!
```

### Destructuring Arrays

```javascript
const [first, second] = ['Alice', 'Bob', 'Charlie'];
console.log(first); // 'Alice'
```

### Spread & Rest

```javascript
// Spread (...)
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]

// Rest (...)
const [a, ...rest] = [1, 2, 3, 4];
console.log(rest); // [2, 3, 4]
```

## Array Methods

### Mutating Methods (Modify the original array)

**push()** & **pop()** (End of array)
```javascript
const arr = [1, 2];
arr.push(3); // [1, 2, 3]
arr.pop(); // [1, 2]
```

**unshift()** & **shift()** (Beginning of array)
```javascript
const arr = [2, 3];
arr.unshift(1); // [1, 2, 3]
arr.shift(); // [2, 3]
```

**splice()** (Add/Remove items anywhere)
Syntax: `array.splice(start, deleteCount, item1, item2, ...)`
```javascript
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb'); // Inserts at index 1
// ['Jan', 'Feb', 'March', 'April', 'June']
months.splice(4, 1, 'May'); // Replaces 1 element at index 4
// ['Jan', 'Feb', 'March', 'April', 'May']
```

### Non-Mutating Methods (Return a new array or value)

**slice()** (Extract a section)
Syntax: `array.slice(start, end)`
```javascript
const animals = ['ant', 'bison', 'camel', 'duck'];
console.log(animals.slice(1, 3)); // ['bison', 'camel']
```

**concat()** (Merge arrays)
```javascript
const arr1 = [1];
const arr2 = [2];
console.log(arr1.concat(arr2)); // [1, 2]
```

**includes()**, **indexOf()**
```javascript
const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat')); // true
console.log(pets.indexOf('dog')); // 1
```

### Iteration Methods (EXTRA DETAIL)

**forEach()** - Loop over array (No return value!)
```javascript
['a', 'b'].forEach(item => console.log(item));
```

**map()** - Transform elements into a NEW array
```javascript
const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2); // [2, 4, 6]
```

**filter()** - Select elements that pass a test
```javascript
const nums = [1, 2, 3, 4];
const evens = nums.filter(n => n % 2 === 0); // [2, 4]
```

**reduce()** - Accumulate values into a single value
```javascript
const nums = [1, 2, 3, 4];
const sum = nums.reduce((acc, curr) => acc + curr, 0); // 10
```

### Method Chaining
```javascript
const students = [
  { name: 'Alice', score: 85 },
  { name: 'Bob', score: 92 },
  { name: 'Charlie', score: 45 }
];

const topNames = students
  .filter(s => s.score > 80)
  .map(s => s.name);
// ['Alice', 'Bob']
```
