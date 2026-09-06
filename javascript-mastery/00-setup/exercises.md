# Level 0 Exercises: Setup & Environment

Follow the instructions carefully. Verify the output for each exercise.

### 🟢 Beginner

**Exercise 1: The Browser Console**
1. Open your web browser's Developer Tools (F12 or Right Click -> Inspect).
2. Go to the Console tab.
3. Type `console.log("Hello, Browser!");` and press Enter. What happens?

**Exercise 2: Basic Math in Console**
1. In the browser console, type `5 + 10` and press Enter.
2. Type `100 / 4` and press Enter.

**Exercise 3: Your First Node.js Script**
1. Create a file named `hello.js` in your current directory.
2. Add the following code: `console.log("Hello, Node.js!");`
3. Open your terminal, navigate to the folder, and run: `node hello.js`.

**Exercise 4: Verify Node Version**
Write the terminal command to check the currently installed version of Node.js.

**Exercise 5: Initialize a Project**
Write the terminal command to generate a default `package.json` file without being asked interactive questions.

### 🟡 Intermediate

**Exercise 6: Running Multiple Scripts**
1. Create `script1.js` with `console.log("Running script 1");`
2. Create `script2.js` with `console.log("Running script 2");`
3. Figure out how to run both scripts one after the other in a single terminal line using the `&&` operator.

**Exercise 7: External Script in HTML**
1. Create `index.html`.
2. Create `main.js` with `console.log("External script loaded!");`
3. Link `main.js` to `index.html` using the `<script>` tag. Open `index.html` in the browser and check the console.

**Exercise 8: Intentional Error (Debugging First!)**
1. Create a file `error.js`.
2. Type `console.log(myUndefinedVariable);`
3. Run it using Node.js. Read the error message. What does it say?

### 🔴 Advanced

**Exercise 9: Simple Node.js REPL**
1. Open your terminal and simply type `node` and press Enter. You are now in the Node REPL (Read-Eval-Print Loop).
2. Create a variable: `let x = 50;`
3. Multiply it: `x * 2;`
4. Exit the REPL (Hint: try pressing Ctrl+C twice, or typing `.exit`).

**Exercise 10: Enable ES Modules in Node**
1. Create a file `math.js` with: `export const add = (a, b) => a + b;`
2. Create a file `app.js` with: `import { add } from './math.js'; console.log(add(5, 5));`
3. Run `node app.js`. You will get an error about modules.
4. Fix the error by creating a `package.json` and adding the appropriate field to enable ES modules. Run `node app.js` again to verify it works.
