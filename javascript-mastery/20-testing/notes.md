# Level 20 — Testing

⏱️ **Estimated Learning Time:** 5 hours
🛠️ **Minimum Practice Time:** 7 hours
🏆 **Mastery Checkpoint:** Can you write unit tests for synchronous and asynchronous functions using Jest/Vitest, and mock dependencies?

## 1. Why Testing Matters

**What is it?**
Automated testing means writing code to test your code.

**Why?**
- Catch bugs before they reach production.
- Refactor with confidence (if tests pass, you didn't break it).
- Tests serve as live documentation.

## 2. Testing Concepts

- **Unit Tests:** Test an isolated piece of code (e.g., a single function).
- **Integration Tests:** Test how multiple units work together.
- **E2E (End-to-End) Tests:** Test the entire application flow in a real browser.
- **TDD (Test-Driven Development):** Write the test *before* you write the code.
- **AAA Pattern:** Arrange (setup), Act (run the code), Assert (check the result).

## 3. Writing Tests (Jest/Vitest Syntax)

### Basic Structure
```javascript
// math.js
export const add = (a, b) => a + b;

// math.test.js
import { add } from './math.js';

describe('math utilities', () => { // Group related tests
  it('should add two numbers correctly', () => { // The specific test
    // Arrange
    const a = 5;
    const b = 10;
    
    // Act
    const result = add(a, b);
    
    // Assert
    expect(result).toBe(15);
  });
});
```

### Common Matchers
```javascript
expect(value).toBe(exactValue);        // Primitives (===)
expect(object).toEqual(exactObject);   // Deep equality for objects/arrays
expect(value).toBeTruthy();            // Truthy check
expect(value).toBeNull();
expect(array).toContain(item);
expect(() => { throwError() }).toThrow();
```

### Setup and Teardown
```javascript
let db;
beforeEach(() => { db = connect() });
afterEach(() => { db.clear() });
```

## 4. Testing Async Code

Return the promise or use async/await.

```javascript
it('should fetch user data', async () => {
  const user = await fetchUser(1);
  expect(user.name).toEqual('Alice');
});
```

## 5. Mocking Basics

Sometimes a function relies on a database, an API, or `Date.now()`. You don't want tests hitting real APIs. You use Mocks.

```javascript
// Using Jest/Vitest mock functions
const mockCallback = jest.fn(); // or vi.fn()
mockCallback('hello');

expect(mockCallback).toHaveBeenCalled();
expect(mockCallback).toHaveBeenCalledWith('hello');
```

Mocking `fetch`:
```javascript
global.fetch = jest.fn(() => 
  Promise.resolve({
    json: () => Promise.resolve({ data: 'mocked' })
  })
);
```
