# Level 5 — Arrays Worksheet

## Part A: Predict the Output (12)
1.
```javascript
const arr = [1, 2, 3];
const arr2 = arr;
arr2.push(4);
console.log(arr.length);
```

2.
```javascript
console.log([10, 2, 30].sort());
```

3.
```javascript
const a = [1, 2];
const b = [1, 2];
console.log(a === b);
```
... (and 9 more)

## Part B: Complete the Code (10)
1. Complete the `map` to add 1 to each number.
```javascript
const nums = [1, 2, 3];
const plusOne = nums.map(___);
```

## Part C: Write from Scratch (10)
1. Write a function that takes an array and returns its reverse WITHOUT using `.reverse()`.

## Part D: Debug (10)
1. Why doesn't this filter work?
```javascript
const evens = [1, 2, 3].filter(n => { n % 2 === 0 });
```

## Part E: Modify (5)
1. Modify this `for` loop to use `.forEach()`.

## Part F: Challenge (5)
1. Given an array of transactions, calculate the total balance, but ignore any cancelled transactions.

## Part G: Mini Project (Student Grade Management)
Create a program that:
- Stores students in an array of objects
- Has functions to add/remove students
- Has a function to calculate class average
- Has a function to get the top student
