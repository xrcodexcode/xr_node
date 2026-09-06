# Level 0: Setup - Active Recall

## Recall Questions
1. What is NVM and why should you use it instead of installing Node directly?
2. What command checks your current Node version?
3. What is the difference between Prettier and ESLint?
4. How do you format a document in VS Code using a shortcut?
5. What is the purpose of the Chrome DevTools 'Sources' tab?
6. How do you open the Command Palette in VS Code?
7. What does the Live Server extension do?
8. How do you run a JavaScript file (e.g., `app.js`) from the terminal using Node?
9. Why should you avoid checking `node_modules` into Git?
10. What is `package.json` used for?

---

## Answer Key
1. **NVM** (Node Version Manager) allows you to install and switch between multiple versions of Node.js on the same machine.
2. `node -v` (or `node --version`).
3. **Prettier** is purely a code formatter (spaces, quotes). **ESLint** is a linter that finds logical errors and enforces coding standards.
4. `Shift + Alt + F` (Win/Linux) or `Shift + Option + F` (Mac).
5. It allows you to view source files, set debug breakpoints, and step through JavaScript execution line-by-line.
6. `Ctrl + Shift + P` (Win/Linux) or `Cmd + Shift + P` (Mac).
7. It spins up a local development server with a live reload feature for static pages.
8. By running `node app.js`.
9. It's massive, easily reproducible with `npm install`, and can contain OS-specific binaries.
10. It keeps track of project dependencies, scripts, and metadata.
