# File and Note Naming Conventions

This file defines the strict naming rules for all notes, sources, MOCs, and directories in `nexusdb`.

## 1. Directory Structure Naming
- `01_RAW/capture/` - Raw capture inbox.
- `01_RAW/source/` - Archived sources.
- `02_NODES/` - Flat directory for atomic notes. No subdirectories are allowed.
- `03_MOC/` - Maps of Content layer.

## 2. File Name Conventions
- **Atomic Notes in `02_NODES/`**: Must be lowercased, hyphen-separated slugs derived from the canonical title (e.g. `gradient-descent.md`).
- **MOC Notes in `03_MOC/`**: Must be PascalCase or Space-separated ending with the " MOC" suffix (e.g. `Machine Learning MOC.md`).
- **Source Notes in `01_RAW/source/`**: Keep the original file names or use lowercase-hyphenated identifiers matching the original captured document name (e.g. `attention-is-all-you-need.md`).

## 3. Slug Generation Formula
Slugs are generated from the canonical title by:
1. Stripping file extensions.
2. Converting all characters to lowercase.
3. Replacing spaces and underscores with a single hyphen.
4. Stripping all non-alphanumeric characters (except hyphens).
5. Removing duplicate adjacent hyphens.
