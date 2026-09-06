# THE MASTER CHEAT SHEET

> The absolute most critical syntax and patterns in modern JavaScript. If you only memorize one page, make it this one.

## Variables & Scoping
```javascript
const name = "Jon"; // Default choice. Immutable reference.
let age = 30;       // Use when reassignment is needed. Block scoped.
// NEVER use var.
```

## Array Methods (The Big 3)
```javascript
const nums = [1, 2, 3, 4, 5];

// MAP: Transform every element -> returns NEW array of SAME length
const doubled = nums.map(n => n * 2);

// FILTER: Keep elements that match condition -> returns NEW array
const evens = nums.filter(n => n % 2 === 0);

// REDUCE: Accumulate array into a single value
const sum = nums.reduce((acc, curr) => acc + curr, 0);
```

## Object & Array Destructuring
```javascript
const user = { id: 1, profile: { name: "Jon" } };
const { id, profile: { name } } = user;

const coords = [10, 20];
const [x, y] = coords;
```

## Spread & Rest Operator (`...`)
```javascript
// Spread: Expand (copying objects/arrays)
const newArr = [...oldArr, 4];
const updatedUser = { ...user, age: 31 };

// Rest: Condense (function params)
function handleArgs(first, ...restOfArgs) {}
```

## DOM Manipulation Core
```javascript
// Select
const btn = document.querySelector("#myBtn");

// Event Listener
btn.addEventListener("click", (e) => {
  e.preventDefault(); // Stop form submit
  
  // Modify
  const msg = document.createElement("p");
  msg.textContent = "Clicked!";
  msg.classList.add("success");
  
  // Append
  document.body.appendChild(msg);
});
```

## Promises & Async/Await (Fetching Data)
```javascript
async function fetchUser(userId) {
  try {
    const response = await fetch(`https://api.com/users/${userId}`);
    if (!response.ok) throw new Error("Network error");
    
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Fetch failed:", err);
  }
}
```

## Arrow Functions & 'this'
```javascript
// Concise syntax, implicit return
const square = x => x * x;

class UI {
  constructor() {
    this.btn = document.querySelector("button");
    // Arrow function preserves lexical 'this' (UI instance)
    this.btn.addEventListener("click", () => {
      this.handleClick(); 
    });
  }
  handleClick() { console.log("Clicked"); }
}
```

## Nullish Coalescing & Optional Chaining
```javascript
// ?. Safely read nested properties (returns undefined if nullish)
const zip = user?.address?.zipCode;

// ?? Fallback only if left side is null or undefined (not just falsy like 0)
const limit = config?.limit ?? 10;
```
