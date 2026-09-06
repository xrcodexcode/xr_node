# Level 17 Solutions

## Worksheet Solutions

### Part A
`data`

### Part B
`await fs.writeFile('msg.txt', 'Hello Node');`

### Part C
```js
const name = process.argv[2] || 'World';
console.log(`Hello ${name}`);
```

### Part D
Node's `res` object does not have a `send` method (that's Express). It should be:
```js
res.end('Hello');
```

### Part E
```js
const fs = require('fs/promises');
const path = require('path');

async function listJSFiles() {
  const files = await fs.readdir(__dirname);
  const jsFiles = files.filter(f => path.extname(f) === '.js');
  console.log(jsFiles);
}
listJSFiles();
```
