# Mini Project: CLI Note App

## Objective
Build a command-line application that allows users to add, read, list, and delete notes. The notes should be stored in a local JSON file (`notes.json`).

## Requirements
1. **Add a note:** `node app.js add "Note title" "Note body"`
2. **Read a note:** `node app.js read "Note title"`
3. **List all notes:** `node app.js list`
4. **Remove a note:** `node app.js remove "Note title"`

## Hints
- Use `process.argv` to read the command and arguments.
- Use `fs/promises` to read and write the `notes.json` file.
- `JSON.parse` and `JSON.stringify` will be necessary.
- Handle cases where `notes.json` does not exist yet.
- Handle duplicate note titles (e.g., throw an error if adding a duplicate).

## 🔥 Challenge Extension
- Use a 3rd-party library like `chalk` to colorize the output (e.g., green for success, red for errors).
- Use `yargs` or `commander` to handle argument parsing more elegantly than manually parsing `process.argv`.
