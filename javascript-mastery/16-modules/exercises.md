# Exercises: Modules and Code Organization

15+ exercises to master imports and file structuring.

## 🟢 5 Basic
1. Create a file `constants.js` with a named export `PI = 3.14159`. Import it into `app.js`.
2. Create a file `User.js` that has a default export of a User class. Import it in `main.js`.
3. Fix the syntax: `import User, { login } from 'auth.js'` (Hint: might need `./`).
4. Rename an import: Import `getData` from `api.js` but call it `fetchUsers` in your local file.
5. Create an HTML file and link `app.js` as a module `<script type="module" src="app.js"></script>`.

## 🟡 5 Intermediate
6. Create a barrel file `index.js` in a `utils` folder that re-exports functions from `math.js` and `string.js`.
7. Refactor a single 100-line script into: `config.js`, `api.js`, and `app.js`.
8. Write a function that uses a **dynamic import** (`await import('./module.js')`) based on a condition.
9. Identify and fix a circular dependency between `cart.js` and `user.js`.
10. Differentiate CommonJS and ESM syntax by translating a CommonJS module into an ES Module.

## 🔴 5 Advanced & 🔥 Challenge
11. Build a mini service layer: Create `api.js` that handles generic fetches, and `userService.js` that imports `api.js` to get users.
12. Implement a simple pub/sub event bus in a singleton module, import it across 3 different files to communicate.
13. Challenge: Organize a full "To-Do" app into modules (`storage.js`, `ui.js`, `logic.js`, `app.js`).
14. Challenge: Write a script that dynamically loads different language packs (JSON objects exported as modules) depending on user selection.
15. Challenge: Debug a broken module setup where a default import is used as a named import, causing `TypeError: X is not a function`.
