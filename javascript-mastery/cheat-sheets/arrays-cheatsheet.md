# Arrays Cheat Sheet

## Mutating vs Non-Mutating Methods
> **⚠️ CRITICAL:** Mutating methods change the original array. Non-mutating return a new array.

## Adding / Removing Elements (MUTATES)
```javascript
const arr = [1, 2, 3];

arr.push(4);      // Adds to end -> [1, 2, 3, 4] (Returns new length)
arr.pop();        // Removes from end -> [1, 2, 3] (Returns removed item)
arr.unshift(0);   // Adds to start -> [0, 1, 2, 3] (Returns new length)
arr.shift();      // Removes from start -> [1, 2, 3] (Returns removed item)
```

## General Modification (MUTATES)
```javascript
// splice(startIndex, deleteCount, itemsToInsert...)
arr.splice(1, 1);       // Removes 1 item at index 1
arr.splice(1, 0, "a");  // Inserts "a" at index 1 without deleting
arr.reverse();          // Reverses array in place
arr.sort();             // Sorts as STRINGS by default!
// Proper numeric sort:
arr.sort((a, b) => a - b);
```

## Extraction & Copying (NON-MUTATING)
```javascript
// slice(startIdx, endIdx) - returns a shallow copy chunk
arr.slice(1, 3);

// concat() - combines arrays
arr1.concat(arr2);
// (ES6 prefer spread): [...arr1, ...arr2]
```

## Searching (NON-MUTATING)
```javascript
arr.indexOf(value);       // Index of value, or -1
arr.includes(value);      // true/false

// Callbacks (Higher-Order)
arr.find(item => item.id === 1);       // Returns FIRST matching item
arr.findIndex(item => item.id === 1);  // Returns index of FIRST match
arr.some(item => item > 10);           // true if AT LEAST ONE matches
arr.every(item => item > 10);          // true if ALL match
```

## Iteration & Transformation (NON-MUTATING)
```javascript
// map - Transforms each element, returns NEW array of same length
const doubled = nums.map(n => n * 2);

// filter - Returns NEW array with elements that pass condition
const evens = nums.filter(n => n % 2 === 0);

// reduce - Accumulates values into a single result
// reduce((accumulator, currentItem) => ..., initialValue)
const sum = nums.reduce((acc, curr) => acc + curr, 0);

// flat - Flattens nested arrays
const nested = [1, [2, [3]]];
nested.flat(2); // [1, 2, 3] (argument is depth)
```

## Iteration (NO RETURN VALUE)
```javascript
// forEach - Just executes function for each element
arr.forEach(item => console.log(item));
```
