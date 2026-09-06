# Level 20: Testing Cheat Sheet

## The Testing Pyramid
| Level | Scope | Speed | Cost | Tool |
|---|---|---|---|---|
| E2E | Entire App + UI | Slow | High | Cypress, Playwright |
| Integration | Multiple Units | Medium | Medium | React Testing Library |
| Unit | Single Function/Class | Fast | Low | Jest, Vitest |

## Jest Syntax Quick Reference 🟢
```js
describe('Calculator', () => {
  beforeEach(() => { /* run before every test */ });
  afterAll(() => { /* run after all tests */ });

  it('should add numbers', () => {
    const result = add(1, 2);
    expect(result).toBe(3); // Exact match
    expect(result).toEqual(3); // Deep equality (objects/arrays)
    expect(result).not.toBeNull();
  });
});
```

## Mocking & Spying 🔴
```js
// Mock a function
const mockFn = jest.fn().mockReturnValue('mocked');
// Spy on an object method
const spy = jest.spyOn(console, 'log').mockImplementation(() => {});

// Assertions on mocks
expect(mockFn).toHaveBeenCalledTimes(1);
expect(mockFn).toHaveBeenCalledWith('arg1');
```

## Cypress E2E Basics 🔥
```javascript
cy.visit('http://localhost:3000') // Navigate
cy.get('.btn-submit').click() // Interact
cy.get('.error-msg').should('be.visible') // Assert
```
