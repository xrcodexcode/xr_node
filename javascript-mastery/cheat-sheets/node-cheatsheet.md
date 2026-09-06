# Node.js Basics Cheat Sheet

## Global Objects
In Node, the global object is `global`, not `window`.
```javascript
__dirname  // Path to current directory
__filename // Path to current file
process    // Info about current process (env vars, exit)
module, exports, require // CommonJS module system
```

## Module Systems

### CommonJS (Default/Legacy Node)
```javascript
// math.js
module.exports = { add: (a,b) => a+b };

// app.js
const math = require('./math');
```

### ES Modules (Modern)
Requires `"type": "module"` in `package.json` or `.mjs` extension.
```javascript
// math.js
export const add = (a,b) => a+b;

// app.js
import { add } from './math.js'; // Extension usually required
```

## Core Modules (Built-in)
You don't need to install these, just import them.

### `fs` (File System)
```javascript
const fs = require('fs');

// 1. Synchronous (blocks execution, bad for web servers)
const syncData = fs.readFileSync('file.txt', 'utf8');

// 2. Asynchronous Callback
fs.readFile('file.txt', 'utf8', (err, callbackData) => {
  if (err) console.error(err);
});

// 3. Promises version (RECOMMENDED)
const fsPromises = require('fs').promises;
const promiseData = await fsPromises.readFile('file.txt', 'utf8');
```

### `path`
```javascript
const path = require('path');
const fullPath = path.join(__dirname, 'public', 'index.html');
// Normalizes slashes across Windows/Mac/Linux
```

### `http`
```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World');
});

server.listen(3000);
```

## NPM (Node Package Manager)

### Commands
```bash
npm init -y          # Create default package.json
npm install express  # Install dependency (adds to node_modules and package.json)
npm install -D nodemon # Install dev dependency
npm uninstall axios  # Remove dependency
npm start            # Runs "start" script from package.json
npm run dev          # Runs custom "dev" script
```

### package.json Scripts
```json
{
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  }
}
```
