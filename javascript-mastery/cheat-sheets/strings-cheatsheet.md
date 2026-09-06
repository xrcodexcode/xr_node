# Strings Cheat Sheet

> **Crucial Rule:** Strings are IMMUTABLE. All string methods return a *new* string; they do not modify the original string.

## Basic Properties
```javascript
const str = "JavaScript";
str.length; // 10
str[0];     // "J"
```

## Finding & Checking
```javascript
const text = "Hello world";

text.indexOf("o");      // 4 (first occurrence)
text.lastIndexOf("o");  // 7 (last occurrence)
text.includes("world"); // true
text.startsWith("He");  // true
text.endsWith("ld");    // true
```

## Extracting Substrings
```javascript
const word = "Developer";

// slice(startIdx, endIdx) - End index not included. Accepts negative indices.
word.slice(0, 3);   // "Dev"
word.slice(-2);     // "er"

// substring(startIdx, endIdx) - Similar to slice, but treats negatives as 0.
word.substring(0, 3); // "Dev"
```

## Modifying (Returns New String)
```javascript
const raw = "   Code   ";

raw.toLowerCase();     // "   code   "
raw.toUpperCase();     // "   CODE   "
raw.trim();            // "Code" (removes start/end whitespace)
raw.trimStart();       // "Code   "
raw.trimEnd();         // "   Code"

const sentence = "I like apples and apples.";
sentence.replace("apples", "oranges");    // "I like oranges and apples." (first only)
sentence.replaceAll("apples", "oranges"); // "I like oranges and oranges."
```

## Converting to/from Arrays
```javascript
// String to Array
const csv = "a,b,c";
csv.split(",");     // ["a", "b", "c"]
"word".split("");   // ["w", "o", "r", "d"]

// Array to String
const arr = ["H", "i"];
arr.join("");       // "Hi"
arr.join("-");      // "H-i"
```

## Padding
```javascript
const id = "5";
id.padStart(3, "0"); // "005"
id.padEnd(3, "0");   // "500"
```

## Template Literals (ES6)
Use backticks (``) for interpolation and multi-line strings.
```javascript
const name = "Jon";
const greeting = `Hello,
my name is ${name} and 2+2 is ${2+2}.`;
```
