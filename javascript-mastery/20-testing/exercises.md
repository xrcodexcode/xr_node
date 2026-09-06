# Level 20 — Exercises

## 🟢 Beginner

1. **Basic Unit Test:** Write a test for a `multiply(a, b)` function.
2. **String Test:** Write a test for a `capitalize(str)` function using `toBe()`.
3. **Array Test:** Write a test for a `removeFalsy(arr)` function using `toEqual()`.
4. **Boolean Test:** Write a test for an `isAdult(age)` function using `toBeTruthy()` and `toBeFalsy()`.
5. **Throw Error:** Write a test that expects a `divide(a, b)` function to throw an error if `b` is 0.

## 🟡 Intermediate

6. **Async Test:** Write an async test for a function that returns a Promise resolving to a user object.
7. **Setup/Teardown:** Use `beforeEach` to reset an array `shoppingCart` before each test in a test suite.
8. **toContain:** Write a test verifying that `getAvailableRoles()` returns an array containing `'admin'`.
9. **Mocking Callbacks:** Test a `mapArray(arr, callback)` function. Pass a mock function as the callback and assert it was called the correct number of times.
10. **TDD:** Write tests FIRST for a function `isPalindrome(str)`. Then implement the function.

## 🔴 Advanced

11. **Mock Fetch:** Mock `global.fetch` to return fake JSON data. Test a `getUser(id)` function to ensure it processes the mocked data correctly.
12. **Mocking Modules:** Mock a `logger.js` module so that testing a `processor.js` file doesn't actually print to the console.
13. **DOM Testing:** Use Jest/Vitest (with jsdom) to test a function that creates a button, clicks it, and checks if a counter increased.
14. **Timer Mocks:** Test a `debounce` function by using fake timers (`jest.useFakeTimers()` / `vi.useFakeTimers()`).
15. **Spying:** Use a spy (`jest.spyOn`) on `Math.random` to force it to return `0.5` during a test of a dice roll function.

## 🔥 Challenge

16. **TDD Shopping Cart:** Use TDD to build a `Cart` class. Tests needed: add item, remove item, calculate total (with taxes), apply discount code.
17. **Mock API Integration:** Test a complex function that fetches from 3 different APIs concurrently, handles errors if one fails, and merges the data.
18. **Testing Event Emitters:** Test a custom `EventEmitter` class. Ensure listeners are called with correct arguments when events are emitted.
19. **Snapshot Testing:** (Concept) Write a test that compares a generated complex object to a saved "snapshot" using `.toMatchSnapshot()`.
20. **Coverage Analysis:** Run a test suite with coverage enabled. Identify untested branches in an `if/else/else if` block and write tests to hit 100% coverage.
