# Active Recall Questions

1. What is the difference between `=` and `===` in an `if` statement condition?
2. When should you use a `while` loop instead of a `for` loop?
3. What happens if you forget the `break` statement in a `switch` case?
4. What is the syntax for the ternary operator?
5. When is it a bad idea to use the ternary operator?
6. What is the difference between `for...of` and `for...in`?
7. Explain what `continue` does in a loop.
8. What is a "truthy" value in JavaScript? Name two "falsy" values.
9. How do you prematurely exit a `for` loop?
10. Can you use `const` in a standard `for` loop initialization (e.g., `for (const i = 0; ...)`? Why or why not?

---
*(Answers are in the Answer Key section below)*

## Answer Key
1. `=` is assignment (sets a value). `===` is strict equality comparison (checks a value).
2. Use `while` when the number of iterations is unknown before the loop starts.
3. "Fall-through" occurs: the program will execute the code for the matched case and ALL subsequent cases until it hits a `break` or the end of the `switch`.
4. `condition ? expressionIfTrue : expressionIfFalse;`
5. It is a bad idea when logic is complex or requires nested conditions, as it destroys readability.
6. `for...of` iterates over iterable values (like array elements). `for...in` iterates over enumerable string properties (like object keys).
7. `continue` skips the rest of the current iteration and jumps to the next evaluation/iteration of the loop.
8. A truthy value is anything that evaluates to `true` in a boolean context. Falsy values include `0`, `""`, `null`, `undefined`, `NaN`, `false`.
9. By using the `break` keyword.
10. No, because the variable `i` needs to be reassigned (updated) on every iteration. `let` must be used. `for...of` and `for...in` CAN use `const`.
