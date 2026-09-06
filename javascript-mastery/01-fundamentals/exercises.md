# Exercises: JavaScript Fundamentals

## 🟢 Beginner (15)
1. Declare a variable `firstName` using `let` and assign your name to it.
2. Declare a constant `PI` and assign `3.14` to it.
3. Reassign `firstName` to a different name.
4. Try to reassign `PI` to `3.1415`. Note the error.
5. Create a variable `age` as a number.
6. Create a variable `isStudent` as a boolean.
7. Create a variable `emptyValue` and set it to `null`.
8. Create an uninitialized variable `notAssigned`.
9. Use `console.log` to print `firstName`.
10. Add two numbers and store the result in `sum`.
11. Subtract `10` from `50` and store in `difference`.
12. Multiply `5` by `8` and store in `product`.
13. Divide `100` by `4` and store in `quotient`.
14. Find the remainder of `10` divided by `3`.
15. Use the increment operator `++` on a variable.

## 🟡 Intermediate (15)
16. Predict and verify the output of `5 + "5"`.
17. Predict and verify the output of `"10" - 2`.
18. Check if `10 == "10"` and `10 === "10"`.
19. Convert the string `"123"` to a number explicitly.
20. Convert the number `456` to a string explicitly.
21. Use `Boolean()` to check the truthiness of `0`.
22. Use `Boolean()` to check the truthiness of `"hello"`.
23. Write an expression using `&&` that evaluates to true.
24. Write an expression using `||` that evaluates to true.
25. Use the logical NOT operator `!` on `true`.
26. Compare `null == undefined` and `null === undefined`.
27. Calculate `(5 + 3) * 2` vs `5 + 3 * 2`. Note precedence.
28. Use the ternary operator to check if age > 18, return "Adult" else "Minor".
29. Use nullish coalescing `??` to provide a fallback for a null variable.
30. Write a compound assignment `let x = 10; x += 5;`.

## 🔴 Advanced (10)
31. Predict `[] == ![]`. (Hint: coercion magic).
32. Predict `NaN === NaN`.
33. Explain why `0.1 + 0.2 === 0.3` is false.
34. Convert `"100.5px"` to a number (look into `parseInt`/`parseFloat`).
35. Predict `true + false`.
36. Predict `1 + 2 + "3"`.
37. Predict `"1" + 2 + 3`.
38. What is the value of `let a = 1; let b = a++; console.log(a, b);`?
39. What is the value of `let a = 1; let b = ++a; console.log(a, b);`?
40. Use optional chaining `?.` on an undefined object property (e.g., `user?.address?.city`).

## 🔥 Challenge (10)
41. Write an expression to check if a number is even (use `%`).
42. Swap the values of two variables `a` and `b` without using a third variable (hint: arithmetic or destructuring).
43. Determine if a given year is a leap year using logical operators.
44. Create a logic chain for a store discount: If `isMember` and `spend > 100`, discount is 20%. If `!isMember` and `spend > 100`, discount is 10%. Otherwise 0%.
45. Implement a basic temperature converter formula: `(C * 9/5) + 32`.
46. Given `const amount = "1,234.56"`, clean it and parse it to a strict Number.
47. Write an expression that safely accesses a nested property and defaults to "Unknown" if null/undefined (combine `?.` and `??`).
48. Convert a time string `"12:45"` into total minutes since midnight.
49. Using only logical operators, write an expression that returns "Pass" if a score is >= 50, otherwise returns false.
50. Implement an expression that truncates a number to its integer part without using Math methods (hint: bitwise `| 0`).
