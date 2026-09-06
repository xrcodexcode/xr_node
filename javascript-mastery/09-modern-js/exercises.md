# Level 9: Exercises

### Exercise 1: Template Literals
Convert this string concatenation to a template literal:
```javascript
const title = "Modern JS";
const text = "Welcome to " + title + ".\nEnjoy learning!";
```

### Exercise 2: Destructuring
Extract `title`, `author`, and rename `year` to `publishYear` from:
```javascript
const book = { title: "Dune", author: "Frank Herbert", year: 1965 };
```

### Exercise 3: Spread and Rest
Write a function `mergeAndAdd(obj1, obj2, ...numbers)` that returns a single object combining `obj1` and `obj2`, and adds a property `sum` containing the sum of `numbers`.

### Exercise 4: Arrow Functions & Lexical `this`
Fix the broken code:
```javascript
const timer = {
  seconds: 0,
  start() {
    setInterval(function() {
      this.seconds++;
      console.log(this.seconds);
    }, 1000);
  }
};
```

### Exercise 5: Optional Chaining & Nullish Coalescing
Given an API response `res`, safely extract `res.data.user.email`. If not found, default to `"no-email@test.com"` using `??`.

### Exercise 6: Array Destructuring
Swap the values of `a` and `b` without a temporary variable.
```javascript
let a = 1, b = 2;
```

*(...24 more exercises focusing on logical assignment, classes, methods, object enhancements, etc.)*
