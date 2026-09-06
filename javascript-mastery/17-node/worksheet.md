# Level 17 Worksheet

## Part A — Predict the Output
```js
const path = require('path');
console.log(path.basename('/users/admin/data.csv', '.csv'));
// Prediction: ?
```

## Part B — Complete the Code
```js
const fs = require('fs/promises');

async function writeMessage() {
  // Complete this code to write 'Hello Node' to 'msg.txt'
  await ___________________________;
}
```

## Part C — Write from Scratch
Write a Node.js script that takes an argument from the command line and logs "Hello [Name]".

## Part D — Debug
```js
const http = require('http');
const server = http.createServer((req, res) => {
  res.send('Hello'); // What is wrong here?
});
server.listen(3000);
```

## Part E — Challenge
Write a script that reads all files in the current directory and logs only those ending in `.js`.
