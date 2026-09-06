# Level 6 — Objects Recall

## Quick Revision (Active Recall)

1. What is the difference between dot notation and bracket notation? When MUST you use bracket notation?
2. What does the `in` operator do compared to `hasOwnProperty()`?
3. How do you create a dynamic property name inside an object literal?
4. Explain object destructuring syntax. How do you set a default value during destructuring?
5. How do you rename a variable during object destructuring?
6. What is the spread operator `...` used for in objects? What happens if there are duplicate keys?
7. Explain the difference between `Object.keys()`, `Object.values()`, and `Object.entries()`.
8. What is the difference between `Object.freeze()` and `Object.seal()`?
9. Explain how optional chaining `?.` works and why it is useful.
10. What is a shallow copy versus a deep copy?
11. Are objects compared by value or by reference in JavaScript? Explain with an example.
12. How do you iterate over an object's properties?

---

## Answer Key

1. **Dot notation** (`obj.key`) is used for standard property access. **Bracket notation** (`obj['key']`) MUST be used when the property name is stored in a variable, contains spaces/special characters, or starts with a number.
2. The `in` operator checks if a property exists on the object OR anywhere in its prototype chain. `hasOwnProperty()` strictly checks if the property exists on the object itself.
3. Using square brackets around the expression in the object literal: `const obj = { [dynamicKey]: value };`
4. Destructuring extracts properties into variables: `const { name, age } = user;`. To set a default: `const { role = 'guest' } = user;`.
5. Using a colon: `const { originalKey: newVariableName } = obj;`.
6. `...` copies enumerable properties from one object to another. If there are duplicate keys, the last one spread overwrites the previous ones.
7. `Object.keys()` returns an array of property names. `Object.values()` returns an array of property values. `Object.entries()` returns an array of `[key, value]` pairs.
8. `Object.freeze()` makes an object completely immutable (no adding, removing, or changing properties). `Object.seal()` prevents adding or removing properties, but allows modifying existing ones.
9. `?.` safely accesses deeply nested properties. If a reference is nullish (`null` or `undefined`), the expression short-circuits and returns `undefined` instead of throwing an error.
10. A **shallow copy** creates a new top-level object, but nested objects are still references to the original. A **deep copy** creates an entirely independent clone of the object and all nested objects.
11. By **reference**. `const a = {}; const b = {}; console.log(a === b); // false`. They point to different memory addresses.
12. Use a `for...in` loop, or `for (const [key, value] of Object.entries(obj))` (preferred modern method).
