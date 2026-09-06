# Level 0 Solutions: Setup & Environment

Here are the solutions to the exercises. Only look at these after you have tried to solve them yourself!

### 🟢 Beginner

**Exercise 1:**
Output in the console: `"Hello, Browser!"` (along with `undefined`, which is the return value of `console.log`).

**Exercise 2:**
Output 1: `15`
Output 2: `25`

**Exercise 3:**
You should see `"Hello, Node.js!"` printed in your terminal.

**Exercise 4:**
```bash
node -v
```
*(or `node --version`)*

**Exercise 5:**
```bash
npm init -y
```

### 🟡 Intermediate

**Exercise 6:**
```bash
node script1.js && node script2.js
```

**Exercise 7:**
In `index.html`:
```html
<!DOCTYPE html>
<html>
<body>
  <script src="main.js"></script>
</body>
</html>
```
When opened in the browser, the console will log `"External script loaded!"`.

**Exercise 8:**
The error will look something like:
```
ReferenceError: myUndefinedVariable is not defined
    at Object.<anonymous> (/path/to/error.js:1:13)
```
This means the JS engine tried to access a variable that hasn't been declared yet.

### 🔴 Advanced

**Exercise 9:**
The REPL evaluates JavaScript in real-time. Typing `x * 2` returns `100`. To exit, you type `.exit` or press `Ctrl + C` twice.

**Exercise 10:**
To fix the ES Module error in Node.js, you need to create a `package.json` file in the same directory:
```json
{
  "type": "module"
}
```
After doing this, running `node app.js` will successfully output `10`.

### Active Recall Answers (from notes.md)
1. **Difference:** Browser JS has access to the DOM (HTML/CSS) but cannot access the local file system. Node.js can access the local file system and OS but does not have a DOM.
2. **Check version:** run `node -v` in the terminal.
3. **Init command:** `npm init -y`
