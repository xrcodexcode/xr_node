# Solutions & Hints

## Exercises Solutions

### 1. Voting Age
```javascript
let age = 20;
if (age >= 18) {
  console.log("Can vote");
} else {
  console.log("Cannot vote");
}
```

*(Include all 40 solutions here...)*

### Hint System for Challenge Problems

**Problem 14: Credit Card Fraud**
- *Hint 1 (Direction):* You need to check multiple conditions. A transaction is fraudulent if ANY of the red flags are true.
- *Hint 2 (Specific):* Use `||` for OR logic, or use multiple `if` statements that return `true` early.
- *Hint 3 (Pseudo-code):*
  `if amount > 10000 -> flag`
  `if country != userCountry -> flag`

**Problem 31: FizzBuzz**
- *Hint 1:* The order of conditions matters.
- *Hint 2:* Check divisibility by both 3 and 5 FIRST.
- *Hint 3:* Use the modulo operator `%`. `i % 3 === 0` means divisible by 3.

---
## Worksheet Solutions
### Part A
1. Outputs `10`. Because `x = 10` is an assignment that evaluates to 10 (truthy).
2. Outputs `0`, `1`, `2`. (Because `let` is block-scoped).

*(Include full worksheet solutions...)*
