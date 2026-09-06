# Level 0: JavaScript Setup & Environment

## What is JavaScript?
JavaScript (JS) is a high-level, dynamic programming language primarily used to add interactivity to web pages. Today, it runs everywhere: browsers, servers (via Node.js), mobile apps, and more.

## JavaScript Runtime: Browser vs Node.js
- **Browser:** Executes JS on the client side. Has access to the Document Object Model (DOM) to manipulate web pages.
- **Node.js:** Executes JS on the server side or your local machine. Has access to the file system and network but NOT the DOM.

## 1. Setup VS Code
Visual Studio Code is the industry standard editor.
1. Download from [code.visualstudio.com](https://code.visualstudio.com/).
2. Install recommended extensions:
   - Prettier (Code formatter)
   - Live Server (For easy browser reloading)
   - ESLint (For catching errors early)

## 2. Setup Node.js
Node.js allows us to run JS outside the browser.
1. Go to [nodejs.org](https://nodejs.org/) and download the LTS (Long Term Support) version.
2. Verify installation in your terminal:
```bash
node -v
npm -v
```

## 3. npm Basics
npm (Node Package Manager) comes with Node.js. It allows you to download libraries.
- Initialize a new project: `npm init -y`
- Install a package: `npm install <package-name>`

## 4. Running JavaScript

### Way A: Browser Console
1. Open Chrome/Edge/Firefox.
2. Right-click anywhere -> Inspect -> Click the "Console" tab.
3. Type: `console.log("Hello from browser!")` and press Enter.

### Way B: An HTML File (`index.html`)
```html
<!DOCTYPE html>
<html>
<body>
  <h1>My JS App</h1>
  <script>
    console.log("Hello from inside HTML!");
  </script>
</body>
</html>
```

### Way C: Node.js (Terminal)
Create a file `app.js` and run it:
```javascript
// app.js
console.log("Hello from Node.js!");
```
Run in terminal: `node app.js`

## 5. Modules Overview (Legacy vs Modern)
- **Legacy (CommonJS - Node default):** `const fs = require('fs');`
- **Modern (ES Modules):** `import fs from 'fs';` (To use this in Node, add `"type": "module"` in `package.json`).

## Common Mistakes

**Mistake:** Getting `node: command not found`
**Why it happens:** Node.js isn't installed or not in your system PATH.
**Incorrect action:** Trying to run node immediately without restarting the terminal.
**Correct action:** Restart your terminal after installing Node.js.
**How to remember:** Always restart terminals after installing CLI tools.

## Active Recall Questions
1. What is the difference between running JS in the browser vs Node.js?
2. How do you check your Node version?
3. What is the shortcut command to initialize a `package.json` file?
