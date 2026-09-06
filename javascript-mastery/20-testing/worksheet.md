# Level 20 — Worksheet

## Part A — Predict the Output
```javascript
// math.test.js
describe('math', () => {
  let count = 0;
  beforeEach(() => { count += 1; });
  
  it('test 1', () => { expect(count).toBe(1); });
  it('test 2', () => { expect(count).toBe(2); });
});
```
Will test 1 and test 2 pass? (Yes, count increments before each test).

## Part B — Complete the Code
```javascript
// Test if the array contains 'apple'
it('checks fruit array', () => {
  const fruits = ['banana', 'apple', 'orange'];
  expect(fruits)._______('apple');
});
```

## Part C — Write from Scratch
Write a full test suite (`describe`) for a function `filterEvens(arr)`. Test with positive numbers, negative numbers, and an empty array.

## Part D — Debug
Why does this test fail?
```javascript
const user = { name: 'Bob' };
it('checks user', () => {
  expect(user).toBe({ name: 'Bob' });
});
```
*(Hint: Object references vs value equality)*

## Part E — Modify
Modify this test to use `async/await` instead of `.then()`.
```javascript
it('fetches data', () => {
  return getData().then(data => {
    expect(data.id).toBe(1);
  });
});
```

## Part F — Challenge
Write a test for a function that delays execution. You will need to use fake timers (`jest.useFakeTimers()` or Vitest equivalent) and advance time.

## Part G — Mini Project
Build and thoroughly test a `BankAcct` class. It should have `deposit`, `withdraw`, and `getBalance` methods. Ensure `withdraw` throws an error if funds are insufficient. Write the tests first!
