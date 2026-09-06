# Level 2: Control Flow

## Learning Path Markers
- **Estimated Learning Time:** 4 hours
- **Minimum Practice Time:** 6 hours
- **Mastery Checkpoint:** Building a text-based menu system with complex logic

---

## 1. Conditionals

### `if` / `else if` / `else` (MUST KNOW)
**What is it?** Executes a block of code if a specified condition is true.
**Why?** To make decisions in code based on varying data (e.g., is a user logged in?).

**Syntax:**
```javascript
if (condition) {
  // code to run if condition is true
} else if (anotherCondition) {
  // code to run if anotherCondition is true
} else {
  // code to run if all above are false
}
```

**Tiny Example:**
```javascript
let age = 20;
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

**Practical Example:**
```javascript
const user = { role: 'admin', isActive: true };

if (!user.isActive) {
  console.log("Account disabled.");
} else if (user.role === 'admin') {
  console.log("Welcome to the dashboard.");
} else {
  console.log("Welcome back, user!");
}
```

**Common Mistake:**
Mistake → Using assignment `=` instead of equality `===` in condition.
Why it happens → Forgetting the extra equals signs.
Incorrect code → `if (role = 'admin')` (always evaluates to true)
Correct code → `if (role === 'admin')`
How to remember → Ask yourself: Am I *checking* or *setting*? Checking requires `===`.

### Nested Conditions (SHOULD KNOW)
**What is it?** Placing an `if` statement inside another `if` statement.

```text
    [Is it raining?]
       /         \
    Yes           No
    /               \
[Have umbrella?]   [Go outside]
  /       \
Yes        No
 |          |
Go out    Stay home
```

**Practical Example:**
```javascript
const weather = 'raining';
const hasUmbrella = false;

if (weather === 'raining') {
  if (hasUmbrella) {
    console.log("Go outside with umbrella.");
  } else {
    console.log("Stay home.");
  }
} else {
  console.log("Go outside.");
}
```

### Ternary Operator (MUST KNOW)
**What is it?** A one-line shorthand for `if/else`.
**Syntax:** `condition ? exprIfTrue : exprIfFalse`

**Tiny Example:**
```javascript
let age = 16;
let status = (age >= 18) ? "Adult" : "Minor";
```

**When NOT to use:** Do not use for nested conditions; it becomes unreadable.

### `switch` Statement (SHOULD KNOW)
**What is it?** Evaluates an expression and matches it against multiple `case` clauses.

**Syntax:**
```javascript
switch (expression) {
  case value1:
    // statements
    break;
  case value2:
    // statements
    break;
  default:
    // default statements
}
```

**Common Mistake:**
Mistake → Forgetting `break`.
Why it happens → `switch` has "fall-through" behavior. Without `break`, it executes the next cases too.

---

## 2. Loops

### `for` Loop (MUST KNOW)
**What is it?** Repeats code a specific number of times.

**Syntax:**
```javascript
for (initialization; condition; update) {
  // code block
}
```

**Practical Example:**
```javascript
const cart = ['Apple', 'Banana', 'Orange'];
for (let i = 0; i < cart.length; i++) {
  console.log(`Item ${i + 1}: ${cart[i]}`);
}
```

### `while` Loop (MUST KNOW)
**What is it?** Repeats as long as a condition is true. Prefer over `for` when you don't know exactly how many iterations you need.

**Practical Example:**
```javascript
let balance = 100;
while (balance > 0) {
  balance -= 20; // Spend 20
  console.log(`Remaining: $${balance}`);
}
```

### `do...while` Loop (SHOULD KNOW)
**What is it?** Executes the block at least once, then checks condition.

### `for...of` (MUST KNOW)
**What is it?** Iterates over values of iterable objects (arrays, strings).

**Practical Example:**
```javascript
const prices = [10, 20, 30];
for (const price of prices) {
  console.log(`Price: $${price}`);
}
```

### `for...in` (SHOULD KNOW)
**What is it?** Iterates over keys (properties) of an object.

**Practical Example:**
```javascript
const user = { name: "Alice", age: 25 };
for (const key in user) {
  console.log(`${key}: ${user[key]}`);
}
```

### `break` and `continue` (MUST KNOW)
- `break`: Exits the loop entirely.
- `continue`: Skips the current iteration and moves to the next.

### Nested Loops (ADVANCED)
**What is it?** A loop inside a loop.

**ASCII Visualization:**
```text
Outer Loop (i=1)
  Inner Loop (j=1, j=2)
Outer Loop (i=2)
  Inner Loop (j=1, j=2)
```
