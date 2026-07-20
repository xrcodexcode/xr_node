# Naming Rules

To keep the knowledge graph clean, portable, and easily queryable, all files in the vault must adhere to these naming rules.

## File Names (Basenames)
- **Kebab Case Only**: Use only lowercase alphanumeric characters and hyphens (e.g., `neural-networks.md`, not `Neural Networks.md` or `neural_networks.md`).
- **No Special Characters**: Avoid punctuation, question marks, brackets, or apostrophes in file paths.
- **Title Alignment**: The file name must match the slugified version of the note H1 title.
  - H1 Title: `# Big O Notation` -> Filename: `big-o-notation.md`
  - H1 Title: `# Anne Thorndike Cafeteria Study` -> Filename: `anne-thorndike-cafeteria-study.md`

## Note H1 Titles
- **Title Case**: H1 headers must be written in standard Title Case.
- **Concise**: Titles should be 5-7 words maximum.
- **Noun/Concept Focused**: Titles should reflect the core concept or entity (e.g., `Habit Loop` instead of `How habits are formed`).

## Folder Structure Constraints
- **Flat Nodes Folder**: All atomic notes must reside in the flat `02_NODES/` directory. Subfolders are strictly forbidden under `02_NODES/`.
- **Flat MOC Folder**: All Maps of Content must reside in `03_MOC/` with no subfolders.
