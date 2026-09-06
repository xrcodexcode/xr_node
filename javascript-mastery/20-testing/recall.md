# Level 20: Testing - Active Recall

## Recall Questions
1. What is the difference between Unit, Integration, and E2E testing?
2. What does `describe` do in testing frameworks?
3. What is the difference between `toBe()` and `toEqual()` in Jest?
4. How do you test an asynchronous function?
5. What is a "mock" function?
6. When should you use a "spy" instead of replacing a function entirely?
7. What happens if you forget to `await` an async assertion?
8. What is test-driven development (TDD)?
9. Why should you mock external APIs in unit tests?
10. What is a common tool for E2E testing in JS?

---

## Answer Key
1. **Unit**: Tests one function/component. **Integration**: Tests how units work together. **E2E**: Tests the whole flow from a user's perspective.
2. It groups related tests together into a test suite.
3. `toBe` uses strict equality (`===`) (great for primitives). `toEqual` recursively checks object/array properties (deep equality).
4. By using the `async` keyword on the test callback and `await` inside, or by returning the Promise.
5. A fake function used to simulate behavior and track calls (arguments, call count).
6. When you want to track a method's calls but still execute the original behavior, or temporarily mock it and restore it later.
7. The test will finish immediately and pass, even if the promise later rejects. It creates false positives.
8. Writing the test *before* writing the implementation code (Red-Green-Refactor).
9. To make tests fast, deterministic (no network failures), and isolated from external dependencies.
10. Cypress or Playwright.
