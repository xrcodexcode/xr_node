# Level 17 — JavaScript in Node.js

## 1. Runtime & Environment
Node.js is a runtime that lets you run JavaScript outside the browser. It uses the V8 engine (same as Chrome).

### Node.js vs Browser
- **Browser:** Has `window`, `document`, DOM API.
- **Node.js:** Has `global`, `process`, file system, network API. No DOM.

### REPL (Read-Eval-Print Loop)
Type `node` in your terminal to start a JS sandbox.

### Running Scripts
`node script.js`

---

## 2. npm & Package Management
`npm` (Node Package Manager) is used to install and manage third-party packages.

- `npm init -y`: Creates `package.json`.
- `package.json`: Contains metadata, scripts, and dependencies.
- `npm install express`: Installs a package (saves to dependencies).
- `npm install --save-dev jest`: Installs a development tool (saves to devDependencies).
- `npx <tool>`: Runs a package without installing it globally.

Semantic Versioning: Major.Minor.Patch (e.g., `1.0.4`).

---

## 3. Node.js Core Modules
Node has built-in modules for common tasks.

### `path`
```js
const path = require('path');
path.join(__dirname, 'folder', 'file.txt'); // Safe path concatenation
path.basename('/foo/bar/baz/asdf/quux.html'); // Returns 'quux.html'
```

### `fs` (File System)
```js
const fs = require('fs/promises'); // Use promises version

async function readFile() {
  const data = await fs.readFile('data.txt', 'utf8');
  console.log(data);
}
```

### `os`
```js
const os = require('os');
console.log(os.platform(), os.cpus().length);
```

### `process`
```js
// Access environment variables
console.log(process.env.NODE_ENV);

// Access command line arguments
console.log(process.argv);
```

---

## 4. Async Patterns in Node
- **Callbacks:** Older pattern. First argument is an error.
- **Promises:** Modern approach (`fs/promises`).
- **async/await:** Cleanest way to handle async code.
- **Streams:** For handling large data chunk by chunk (e.g., reading a massive file).

---

## 5. Building a Simple HTTP Server
```js
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Hello World' }));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(3000, () => console.log('Server running on port 3000'));
```
