# Level 17 Exercises

## 🟢 Beginner (CLI & Core Modules)
1. Write a script that prints all environment variables to the console.
2. Create a script that reads a filename from `process.argv` and logs its contents using `fs/promises`.
3. Build a script that uses `os` to print your computer's platform, CPU architecture, and total memory.
4. Write a script that uses `path` to get the extension of a file path passed via command line.
5. Create an event emitter that emits a 'greet' event, and a listener that logs a message when emitted.

## 🟡 Intermediate (File Processing & HTTP)
6. Write a program that reads a `.txt` file line by line and outputs the number of lines.
7. Create an HTTP server that returns a simple HTML string on the root route `/`.
8. Expand the server to return a JSON object (e.g., `{"status": "ok"}`) on `/api/status`.
9. Write a script that lists all files in a directory (passed as an argument) and categorizes them by extension.
10. Create a basic CSV parser using Node.js `fs` module that converts a CSV string into an array of objects.

## 🔴 Advanced (Async & Streams)
11. Write a script that reads a large file using Streams and writes its contents to a new file, transforming all text to uppercase.
12. Create a robust HTTP server that handles POST requests to `/users`, reads the JSON body, and saves it to a file.
13. Implement a simple file watcher that monitors a specific directory and logs a message whenever a file is added or modified.
14. Create a custom command-line tool (using `commander` or basic `argv` parsing) that takes a directory path and outputs the total size of all files inside it.

## 🔥 Challenge
15. Build a basic Markdown to HTML converter CLI. It takes an input markdown file path and an output HTML file path, reads the markdown, converts basic syntax (like headers `#` and bold `**`), and writes the HTML to the output file.
