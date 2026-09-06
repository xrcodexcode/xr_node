# Level 17 Cheat Sheet

## Core Modules
- `fs/promises`: `readFile`, `writeFile`, `appendFile`, `readdir`, `stat`, `unlink`
- `path`: `join`, `resolve`, `extname`, `basename`, `dirname`
- `os`: `platform`, `cpus`, `homedir`, `freemem`
- `process`: `argv`, `env`, `exit`, `cwd`

## HTTP Module
```js
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello');
});
server.listen(3000);
```

## `package.json`
- `npm init -y`
- `npm install <package>` (dependencies)
- `npm install -D <package>` (devDependencies)
- Scripts: `"start": "node index.js"`

## CLI Arguments
`process.argv` is an array:
0: Path to Node executable
1: Path to executed script
2+: Custom arguments
