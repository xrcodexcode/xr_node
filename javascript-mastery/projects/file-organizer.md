# Mini Project: File Organizer

## Objective
Create a CLI tool that automatically organizes files in a given directory into subdirectories based on their file extensions.

## Requirements
1. The script should take a directory path as an argument: `node organize.js /path/to/folder`
2. It should read all files in that directory.
3. For each file, it should determine its extension.
4. It should create a folder for that extension if it doesn't exist (e.g., `/path/to/folder/jpg/`, `/path/to/folder/txt/`).
5. It should move the file into the corresponding folder.
6. Ignore directories when iterating.

## Hints
- `fs.readdir` (or its promise version) to get files.
- `fs.stat` to check if it's a file or directory (`stat.isFile()`).
- `path.extname` to get the extension.
- `fs.mkdir` to create directories (use `{ recursive: true }` to avoid errors if it exists).
- `fs.rename` to move files.

## 🔥 Challenge Extension
- Add a configuration file (`organize-config.json`) where the user can specify categories instead of raw extensions. For example: `{"Images": [".jpg", ".png", ".gif"], "Documents": [".pdf", ".docx", ".txt"]}`. Organize files into "Images" and "Documents" folders instead of "jpg" and "pdf" folders.
