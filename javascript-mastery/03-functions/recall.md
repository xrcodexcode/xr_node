# Level 3 — Active Recall

## Questions (5-Min Review)
1. What is the difference between a function declaration and a function expression?
2. How does hoisting affect function declarations vs expressions?
3. What are the three main syntax differences between standard functions and arrow functions?
4. Explain the difference between parameters and arguments.
5. What does the `return` keyword do inside a function?
6. What happens if a function doesn't explicitly return a value?
7. How do default parameters work?
8. What is the rest parameter (`...args`) and when would you use it?
9. Define a higher-order function.
10. What is a callback function?
11. Explain what a closure is in your own words.
12. Why are closures useful in JavaScript?
13. What is a pure function?
14. Give an example of a side effect in a function.
15. What are the two mandatory components of a recursive function?

---

## Answers (Do not peek until attempted!)
1. Declaration: `function name() {}`. Expression: `const name = function() {}`.
2. Declarations are fully hoisted (callable before definition). Expressions are hoisted as variables (usually `undefined` or throwing TDZ errors).
3. `this` binding (arrow inherits lexical `this`), concise syntax (omitting parens/braces), and `arguments` object (arrow functions lack it).
4. Parameters are variables in the function signature. Arguments are actual values passed when invoked.
5. Exits the function immediately and outputs a specified value.
6. It returns `undefined`.
7. They assign a default value to a parameter if `undefined` is passed or no argument is given.
8. It collects all remaining arguments into an array. Useful for variable-length argument lists.
9. A function that accepts another function as an argument, or returns a function.
10. A function passed into another function to be executed later.
11. A function that remembers the variables from its lexical scope, even after the outer function has returned.
12. Useful for data privacy, state preservation, currying, and event handlers.
13. A function that returns the same output for the same input and causes no side effects.
14. Modifying a global variable, logging to the console, changing the DOM, or fetching from an API.
15. A base case (stopping condition) and a recursive case (calling itself).
