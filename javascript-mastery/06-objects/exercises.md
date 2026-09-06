# Level 6 — Objects Exercises

## 🟢 Beginner (10 Exercises)
1. Create an object `movie` with properties `title`, `director`, and `year`.
2. Access the `director` property using dot notation and log it.
3. Access the `year` property using bracket notation and log it.
4. Add a `rating` property to `movie` with a value of 8.5.
5. Change the `year` property to 2024.
6. Delete the `rating` property from the object.
7. Create a method `getSummary` inside `movie` that returns "Title by Director, Year".
8. Create an object `laptop` using variables `brand = 'Dell'` and `model = 'XPS'` using property shorthand.
9. Check if the property `price` exists in `laptop` using the `in` operator.
10. Check if `laptop` has a `brand` property using `hasOwnProperty`.

## 🟡 Intermediate (10 Exercises)
11. Destructure `title` and `director` from the `movie` object.
12. Destructure `year` from `movie` and rename it to `releaseYear`.
13. Given `user = { profile: { email: 'a@a.com' } }`, destructure the `email`.
14. Use the spread operator to combine `person = { name: 'Ali' }` and `details = { age: 25 }` into `employee`.
15. Use the spread operator to create a copy of `movie`, but change the `year` to 2025.
16. Get an array of all keys in `movie` using `Object.keys`.
17. Get an array of all values in `movie` using `Object.values`.
18. Loop through `movie` using `for...in` and log "key: value".
19. Given `apiResponse = { data: null }`, use optional chaining to safely read `apiResponse.data?.user?.name` without throwing an error.
20. Use `Object.assign()` to merge `{a: 1}` and `{b: 2}`.

## 🔴 Advanced (8 Exercises)
21. Write a function `countProperties(obj)` that returns the number of properties in an object.
22. Write a function `invertObject(obj)` that swaps keys and values. Assume values are unique strings/numbers.
23. Given an object of expenses `{ food: 50, rent: 1000, transport: 100 }`, calculate the total using `Object.values` and `reduce`.
24. Write a function `cloneDeep(obj)` using `structuredClone` to create a deep copy.
25. Given an array of objects `users = [{id: 1, name: 'A'}, {id: 2, name: 'B'}]`, convert it to an object keyed by ID: `{ 1: {id: 1, name: 'A'}, 2: {id: 2, name: 'B'} }`.
26. Write a function `cleanObject(obj)` that removes any properties whose values are `null` or `undefined`.
27. Create a `config` object and use `Object.freeze()`. Prove it can't be mutated.
28. Create a `settings` object and use `Object.seal()`. Prove you can change existing props but not add new ones.

## 🔥 Challenge (7 Exercises)
29. **User Management**: Write a class-like function or object `UserManager` with a `users` array, and methods `addUser(user)`, `removeUser(id)`, and `getUser(id)`.
30. **Inventory System**: Create an object `inventory` with properties as item names and values as quantities. Write methods `addItem(name, qty)` and `sellItem(name, qty)`.
31. **Object Difference**: Write a function `diff(obj1, obj2)` that returns a new object containing only the keys that have different values between the two objects.
32. **Nested Flattening**: Write a function `flatten(obj)` that converts `{ a: { b: 1 } }` to `{ "a.b": 1 }`.
33. **Word Frequency Counter**: Write a function that takes a string and returns an object counting the occurrences of each word.
34. **Shopping Cart Analyzer**: Given an array of cart items `{id, price, qty, category}`, write a function that returns an object grouped by category, with total spent per category.
35. **Data Transformation**: Convert an API response `{ users: [ { id: 1, name: 'A', roles: ['admin'] } ] }` into a lookup object `{ 1: { name: 'A', isAdmin: true } }`.
