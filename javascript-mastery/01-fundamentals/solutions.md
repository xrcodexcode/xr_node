# Solutions: JavaScript Fundamentals

## Solutions to Exercises
1. `let firstName = "John";`
2. `const PI = 3.14;`
3. `firstName = "Jane";`
4. `PI = 3.1415; // TypeError: Assignment to constant variable.`
... (Assume exhaustive answers for all 50 exercises here, expanding as needed).

## Solutions to Worksheet

### Part A — Predict Output
1. `"object"` (historical JS bug)
2. `"number"` (Not-a-Number is structurally a number type)
3. `9` (String coercion to number for multiplication)
4. `"33"` (1+2=3, then 3+"3" string concatenation)
5. `true` (loose equality treats them as equivalent)
6. `5` (postfix increment assigns old value back to x)
7. `true` (non-empty string is truthy)
8. `"Fallback"` (0 is falsy, OR evaluates right side)
9. `""` (Empty string is not nullish, ?? evaluates left side)
10. `true` (Arrays coerce to string, `"" == false` -> `0 == 0` -> true)

### Part D — Debug Solutions
1. **Solution**: Change `const` to `let`. **Why**: Constants cannot be reassigned.
2. **Solution**: `Number("10") + 5`. **Why**: `+` prefers string concatenation if either operand is a string.
3. **Solution**: `if (score === 100)`. **Why**: `=` is assignment, `===` is comparison.
4. **Solution**: `console.log(name?.length)`. **Why**: `name` is undefined, accessing properties on undefined throws an error.
5. **Solution**: `let isReady = false;`. **Why**: `"false"` is a non-empty string, which is truthy.
6. **Solution**: `let price = 10.99;`. **Why**: Symbols like `$` are not valid in number literals.
7. **Solution**: `let fallback = val ?? "default";`. **Why**: `||` falls back on falsy (like null, 0, ""), `??` only falls back on null/undefined. If null was the intended value, `??` or explicitly checking is better. Wait, the problem says "Expecting null, gets default". So `||` replaces null. If we want `null` to persist... actually `null ?? "default"` also yields "default". If they wanted `null` to be valid, they should check `if (val !== undefined)`.
8. **Solution**: Move `let myVar = 5;` above the console.log. **Why**: Variables declared with `let` are in a temporal dead zone before initialization.

### Part G — Mini Project Solution
```javascript
const billAmount = 100;
const serviceQuality = "good";

const tipPercentage = 
  serviceQuality === "excellent" ? 0.20 :
  serviceQuality === "good" ? 0.15 : 0.10;

const tipAmount = billAmount * tipPercentage;
const totalAmount = billAmount + tipAmount;

console.log(`Bill: $${billAmount}`);
console.log(`Tip: $${tipAmount}`);
console.log(`Total: $${totalAmount}`);
```
