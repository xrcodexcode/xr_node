# Active Recall: Strings

## Questions

1. Are strings mutable or immutable in JavaScript?
2. What property tells you how many characters are in a string?
3. How do you find the last character of a string using a negative index in modern JS?
4. What is the difference between `replace()` and `replaceAll()`?
5. How does `.indexOf()` differ from `.includes()`?
6. Which method converts a string into an array?
7. What is the difference between single/double quotes and backticks?
8. What does `trim()` do?
9. How can you combine multiple strings together (two ways)?
10. What does `.padStart(3, '0')` do to the string `"1"`?

---

## Answer Key

1. **Immutable.** You cannot change characters in-place.
2. `length` (e.g., `str.length`).
3. Using `.at(-1)`.
4. `replace()` replaces only the first occurrence (unless using a global regex). `replaceAll()` replaces all occurrences.
5. `indexOf()` returns the numeric index (or `-1`). `includes()` returns a boolean (`true`/`false`).
6. `split()`.
7. Backticks (template literals) allow multiline strings and embedded expressions (`${}`).
8. Removes whitespace from both the beginning and end of a string.
9. Using the `+` operator (concatenation) or Template Literals (`` `${a} ${b}` ``).
10. It pads the string from the start with `'0'` until the total length is 3, resulting in `"001"`.
