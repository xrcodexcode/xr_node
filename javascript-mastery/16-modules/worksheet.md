# Worksheet: Modules and Code Organization

## Part A — Predict the Output
```javascript
// a.js
export const name = "Alice";

// b.js
import { name } from './a.js';
// name = "Bob"; // What happens if we try to reassign?
console.log(name);
```

## Part B — Complete the Code
```javascript
// utils.js
// Export this function as the default
function capitalize(str) { return str.toUpperCase(); }

// app.js
// Import capitalize here from utils.js
```

## Part C — Write from Scratch
Create a file structure for an e-commerce app. Write just the import/export headers for:
- `constants.js`
- `cartService.js`
- `ui.js`
- `index.js` (entry point)

## Part D — Debug
```javascript
// math.js
export default function add(a, b) { return a + b; }

// app.js
import { add } from './math.js'; 
// Uncaught SyntaxError: The requested module does not provide an export named 'add'
```

## Part E — Modify
Change a static import at the top of a file into a dynamic `import()` that only loads if a user clicks a button.

## Part F — Mini Project
Build a simple modular calculator. 
- `math.js` (pure math functions)
- `parser.js` (parses string input into numbers and operators)
- `app.js` (ties it together)
