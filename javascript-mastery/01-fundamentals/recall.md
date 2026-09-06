# Active Recall: JavaScript Fundamentals

Test yourself! Try to answer these out loud without looking at your notes.

1. What is the difference between `let`, `const`, and `var`? Which should you use by default?
2. What are the 7 primitive data types in JavaScript?
3. What is the difference between `null` and `undefined`?
4. What does the `typeof` operator do? Name one weird quirk it has.
5. Explain the difference between `==` and `===`. Which is safer?
6. What happens if you try to add a string and a number? (e.g., `"5" + 3`)
7. What happens if you try to subtract a string and a number? (e.g., `"5" - 3`)
8. List all 6 falsy values in JavaScript.
9. Is an empty array `[]` truthy or falsy? What about an empty object `{}`?
10. What does the modulo `%` operator do? Give a practical use case.
11. How does the Logical OR `||` operator work with non-boolean values?
12. How does Nullish Coalescing `??` differ from Logical OR `||`?
13. What is Optional Chaining `?.` and why is it useful?
14. What is the difference between `x++` and `++x`?
15. Why does `0.1 + 0.2 === 0.3` evaluate to false?

---
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

## Answer Key

1. `const` cannot be reassigned, `let` can. `var` is legacy and function-scoped. Use `const` by default.
2. String, Number, BigInt, Boolean, Undefined, Null, Symbol.
3. `undefined` means a variable was declared but not assigned. `null` is an intentional empty value assigned by a developer.
4. Returns the type of a value as a string. Quirk: `typeof null` returns `"object"`.
5. `==` checks value (with type coercion). `===` checks value AND type (no coercion). `===` is safer.
6. The number is coerced into a string and they are concatenated: `"53"`.
7. The string is coerced into a number and subtraction occurs: `2`.
8. `false`, `0`, `""`, `null`, `undefined`, `NaN`.
9. Both `[]` and `{}` are Truthy.
10. It returns the remainder of a division. Use case: checking if a number is even (`num % 2 === 0`).
11. It returns the first truthy value it encounters, or the last value if all are falsy.
12. `||` falls back on ANY falsy value (like `0` or `""`). `??` ONLY falls back on `null` or `undefined`.
13. `?.` safely accesses nested object properties. If the property doesn't exist (is null/undefined), it short-circuits and returns undefined instead of throwing a TypeError.
14. `x++` (postfix) returns the current value, then increments. `++x` (prefix) increments first, then returns the new value.
15. Because of floating-point precision issues in JavaScript (and most programming languages). It evaluates to `0.30000000000000004`.
