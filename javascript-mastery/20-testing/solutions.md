# Level 20: Testing - Solutions

## Part A — Predict the Output
### Exercise 1: Assertions 🟢
**Output:** Test passes, or test fails with exact mismatch.

## Part B — Complete the Code
### Exercise 2: Unit Testing a Helper 🟡
**Solution:**
```js
test('returns correctly formatted currency', () => {
  expect(formatCurrency(100)).toBe('$100.00');
  expect(formatCurrency(0)).toBe('$0.00');
});
```
**Why it works:** Standard jest `expect().toBe()` assertion.

## Part C — Write from Scratch
### Exercise 3: Mocking an API 🔴
**Solution:**
```js
jest.mock('./api'); // Mock module
test('fetches user data', async () => {
  api.getUser.mockResolvedValue({ id: 1, name: 'Alice' });
  const user = await fetchUserProfile(1);
  expect(user.name).toBe('Alice');
  expect(api.getUser).toHaveBeenCalledWith(1);
});
```
**Why it works:** `mockResolvedValue` simulates an async API call without hitting the network.

## Part D — Debug
### Exercise 4: Async Test Fails Before Awaiting 🔴
**Solution:**
Remember to return the promise or use `await`.
```js
test('async function test', async () => {
  const data = await fetchData();
  expect(data).toBeDefined();
});
```
**Why it works:** If you don't return the promise or use `await`, Jest finishes the test immediately and considers it passed before the async operation finishes.

## Part F — Challenge
### Exercise 5: Cypress E2E Login 🔥
**Solution:**
```js
describe('Login Flow', () => {
  it('should login successfully', () => {
    cy.visit('/login');
    cy.get('input[name="email"]').type('test@test.com');
    cy.get('input[name="password"]').type('password123');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/dashboard');
    cy.contains('Welcome back').should('be.visible');
  });
});
```
**Why it works:** Standard e2e flow selecting DOM elements, simulating user input, and asserting on UI state.
