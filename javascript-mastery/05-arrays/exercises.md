# Level 5 — Arrays Exercises

## 🟢 Basic (15 Exercises)
1. Create an array of your top 3 favorite fruits.
2. Access the second element of `[10, 20, 30]`.
3. Add 'orange' to the end of `['apple', 'banana']`.
4. Remove the last element from `['x', 'y', 'z']`.
5. Add 'first' to the beginning of `['second', 'third']`.
6. Remove the first element of `['a', 'b', 'c']`.
7. Find the length of `[1, 2, 3, 4, 5]`.
8. Change the second element of `[1, 2, 3]` to `99`.
9. Use `.at()` to get the last element of `[5, 10, 15]`.
10. Check if `['cat', 'dog']` includes 'bird'.
11. Find the index of 'target' in `['a', 'b', 'target', 'c']`.
12. Create a shallow copy of `[1, 2, 3]` using the spread operator.
13. Combine `[1, 2]` and `[3, 4]` using `concat`.
14. Convert `['h', 'e', 'y']` to a string 'hey' using `join`.
15. Use `forEach` to print each item in `[10, 20, 30]`.

## 🟡 Intermediate (15 Exercises)
16. Use `map` to double all numbers in `[1, 2, 3]`.
17. Use `filter` to keep only numbers greater than 10 in `[5, 15, 25, 3]`.
18. Use `reduce` to find the sum of `[1, 2, 3, 4]`.
19. Find the first number > 10 in `[5, 8, 12, 15]` using `find`.
20. Check if ANY number is negative in `[1, -2, 3]` using `some`.
21. Check if ALL numbers are positive in `[1, 2, 3]` using `every`.
22. Sort `[3, 1, 4, 1, 5, 9]` in ascending order.
23. Sort `['banana', 'apple', 'cherry']` alphabetically.
24. Reverse the array `[1, 2, 3, 4]`.
25. Extract `[2, 3]` from `[1, 2, 3, 4]` using `slice`.
26. Remove 'b' from `['a', 'b', 'c']` using `splice`.
27. Insert 'x' at index 1 in `['a', 'b']` using `splice`.
28. Destructure the first two elements of `[10, 20, 30]` into variables `x` and `y`.
29. Use rest operator to get all elements after the first one: `[1, 2, 3, 4]`.
30. Flatten `[[1, 2], [3, 4]]` using `flat`.

## 🔴 Advanced (10 Exercises)
31. Use `reduce` to find the maximum number in `[1, 5, 3, 9, 2]`.
32. Chain `filter` and `map` to get names of users over 18 from `[{name: 'A', age: 20}, {name: 'B', age: 15}]`.
33. Sort an array of objects by a specific property (e.g., price).
34. Implement your own version of `map` using `reduce`.
35. Create an array of length 5 filled with 0s using `Array().fill()`.
36. Flatten a 3-deep nested array `[1, [2, [3, 4]]]` completely.
37. Find the index of the last even number in `[1, 2, 3, 4, 5]` using `findLastIndex`.
38. Calculate the average of an array of numbers using `reduce`.
39. Remove duplicates from an array using `Set` and spread operator.
40. Use `flatMap` to duplicate each item in an array: `[1, 2]` -> `[1, 1, 2, 2]`.

## 🔥 Challenge (10 Exercises)
41. Group an array of objects by a property (e.g., group people by age) using `reduce`.
42. Implement a `chunk` function that splits an array into chunks of a given size.
43. Implement a `zip` function that combines two arrays `[1, 2]`, `['a', 'b']` into `[[1, 'a'], [2, 'b']]`.
44. Find the intersection of two arrays (elements present in both).
45. Find the difference of two arrays (elements in A but not in B).
46. Write a function to deeply flatten an array of unknown depth without using `.flat(Infinity)`.
47. Implement a custom sorting function for strings that ignores case and leading spaces.
48. Write a function that takes an array of strings and returns an object counting the frequency of each string.
49. Create a pipeline of 5 array methods that takes raw text data, cleans it, and transforms it into structured objects.
50. Implement `Array.prototype.map` from scratch using a `for` loop.
