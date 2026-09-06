# Worksheet: JavaScript Fundamentals

## Part A — Predict the Output (10)
1. `console.log(typeof null);`
2. `console.log(typeof NaN);`
3. `console.log("3" * "3");`
4. `console.log(1 + 2 + "3");`
5. `console.log(null == undefined);`
6. `let x = 5; x = x++; console.log(x);`
7. `console.log(!! "false");`
8. `console.log(0 || "Fallback");`
9. `console.log("" ?? "Fallback");`
10. `console.log([] == false);`

## Part B — Complete the Code (8)
1. Complete the condition to check if age is >= 18: `let canVote = age ___ 18;`
2. Convert this string to a number: `let num = _____("42");`
3. Fallback to default: `let name = userInput ___ "Anonymous";`
4. Strict equality: `if (value ____ "100")`
5. Template literal: `let greeting = \`Hello ${____}\`;`
6. Remainder: `let isEven = number % __ === 0;`
7. Exponentiation: `let squared = base __ 2;`
8. Type check: `if (____ value === "string")`

## Part C — Write from Scratch (8)
1. Declare a variable `cartTotal`, initialize to 0. Add 50 to it.
2. Create a ternary operator that sets `access` to "Granted" if `isAdmin` is true, else "Denied".
3. Write an expression that checks if a string is not empty and not null.
4. Convert a boolean to a string explicitly.
5. Create a variable `user` and set it to null.
6. Calculate the area of a rectangle given `width = 10` and `height = 5`.
7. Write a logical expression checking if a user is online AND has premium status.
8. Store the maximum allowed users as a constant and try to change it (write the code to prove it errors).

## Part D — Debug (8)
1. 
```javascript
const userAge = 25;
userAge = 26; // Why is this broken?
```
2.
```javascript
let total = "10" + 5;
console.log(total); // Expects 15, gets "105"
```
3.
```javascript
if (score = 100) { console.log("Max score!"); } // Always logs true
```
4.
```javascript
let name;
console.log(name.length); // TypeError
```
5.
```javascript
let isReady = "false";
if (isReady) { console.log("Go!"); } // Runs unexpectedly
```
6.
```javascript
let price = $10.99; // SyntaxError
```
7.
```javascript
let val = null;
let fallback = val || "default"; // Expecting null, gets "default"
```
8.
```javascript
console.log(myVar);
let myVar = 5; // ReferenceError
```

## Part E — Modify (5)
1. Modify `if (user == null)` to explicitly check for BOTH null and undefined strictly.
2. Modify `let greeting = "Hello " + firstName + "!";` to use template literals.
3. Modify `let nextId = id ? id : 1;` to use the nullish coalescing operator.
4. Modify `let count = count + 1;` to use the increment operator.
5. Modify `let isValid = true; let isInvalid = !isValid;` to not use the NOT operator but still represent the opposite state.

## Part F — Challenge (5)
1. Write a one-liner to parse a URL query parameter string `"?price=100"` and extract the `100` as a Number.
2. Given a total number of seconds, calculate hours, minutes, and remaining seconds using basic math operators.
3. Write an expression that evaluates to true ONLY if exactly one of `a` or `b` is true (Logical XOR).
4. Predict what happens when you do `Number(undefined)` vs `Number(null)`.
5. Use compound assignment and increment operators in a single line to advance an array index by 2 and return the new index.

## Part G — Mini Project
**Build a Basic Tip Calculator (Logic Only)**
Write a script that takes a `billAmount` (Number) and a `serviceQuality` (String: "excellent", "good", "poor").
Using only fundamentals (if/else logic simulated via ternaries or short-circuiting, basic math):
- Calculate the tip: 20% for excellent, 15% for good, 10% for poor.
- Calculate the total amount.
- Print formatted output using template literals.
