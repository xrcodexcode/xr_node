# Level 4 — Strings

**Learning Time:** 2 hours | **Practice Time:** 3 hours | **Mastery Checkpoint:** 5 hours

## 1. String Basics

### What is a String?
A string is a sequence of characters used to represent text. 
It is also an array of characters.
### Why do we need Strings?
To store and manipulate text like names, emails, descriptions, messages, and HTML content.

### Creating Strings
You can create strings using single quotes `''`, double quotes `""`, or backticks ` `` `.

```javascript
// MUST KNOW
const single = 'Hello';
const double = "World";
const backticks = `Hello World`; // Template literals
```

### String Indexing and Length
Strings are zero-indexed. The `length` property tells you how many characters are in the string.

```javascript
const name = 'Alice';
console.log(name[0]); // 'A' (Zero-based indexing)
console.log(name.length); // 5
```

### Immutability of Strings
Strings in JavaScript are **immutable**. You cannot change a specific character of a string directly.

```javascript
let str = 'cat';
str[0] = 'b'; // Does nothing in non-strict mode, throws error in strict mode
console.log(str); // 'cat'

// To change it, you must create a new string:
str = 'bat'; 
```

### Template Literals (ES6+)
Backticks allow embedded expressions and multiline strings.

```javascript
const user = 'John';
const age = 30;

// Embedded expressions
const greeting = `Hello, my name is ${user} and I am ${age} years old.`;

// Multiline strings
const multiline = `This is line 1.
This is line 2.`;
```

### Escape Characters
When using quotes, sometimes you need to "escape" characters.
- `\n` - New line
- `\t` - Tab
- `\\` - Backslash
- `\'` or `\"` - Quotes

### String Concatenation
```javascript
const str1 = 'Hello';
const str2 = 'World';
console.log(str1 + ' ' + str2); // 'Hello World' (Legacy pattern)
console.log(`${str1} ${str2}`); // 'Hello World' (Modern pattern)
```

---

## 2. String Methods

### `charAt(index)` & `charCodeAt(index)`
- **What:** Gets the character or its Unicode value at a specific index.
- **Syntax:** `str.charAt(index)`
- **Example:**
```javascript
const text = 'Hello';
console.log(text.charAt(1)); // 'e'
console.log(text.charCodeAt(1)); // 101
```

### `indexOf(searchString)` & `lastIndexOf(searchString)`
- **What:** Finds the first/last index of a substring. Returns `-1` if not found.
- **Example:**
```javascript
const sentence = 'Find the needle in the haystack. The needle is sharp.';
console.log(sentence.indexOf('needle')); // 9
console.log(sentence.lastIndexOf('needle')); // 37
```

### `includes(searchString)`, `startsWith(searchString)`, `endsWith(searchString)`
- **What:** Checks if a string contains, starts with, or ends with another string. Returns boolean.
- **Example:**
```javascript
const email = 'user@example.com';
console.log(email.includes('@')); // true
console.log(email.startsWith('user')); // true
console.log(email.endsWith('.net')); // false
```

### `slice(startIndex, endIndex)` & `substring(startIndex, endIndex)`
- **What:** Extracts a portion of a string. `slice` supports negative indexes.
- **Example:**
```javascript
const text = 'JavaScript';
console.log(text.slice(0, 4)); // 'Java'
console.log(text.slice(-6)); // 'Script' (from end)
console.log(text.substring(0, 4)); // 'Java'
```

### `split(separator)` & `join(separator)`
- **What:** Converts string to array (`split`), and array to string (`join`).
- **Example:**
```javascript
const csv = 'apple,banana,orange';
const fruits = csv.split(','); // ['apple', 'banana', 'orange']
console.log(fruits.join(' | ')); // 'apple | banana | orange'
```

### `replace(searchFor, replaceWith)` & `replaceAll()`
- **What:** Replaces substring(s).
- **Example:**
```javascript
const text = 'I like cats. Cats are great.';
console.log(text.replace('cats', 'dogs')); // 'I like dogs. Cats are great.'
console.log(text.replaceAll(/cats/gi, 'dogs')); // 'I like dogs. dogs are great.'
```

### `trim()`, `trimStart()`, `trimEnd()`
- **What:** Removes whitespace from ends.
- **Example:**
```javascript
const input = '   hello   ';
console.log(input.trim()); // 'hello'
```

### `toUpperCase()` & `toLowerCase()`
- **What:** Changes case.
- **Example:**
```javascript
const text = 'Hello';
console.log(text.toUpperCase()); // 'HELLO'
```

### `repeat(count)`
- **What:** Repeats a string.
- **Example:**
```javascript
console.log('ha'.repeat(3)); // 'hahaha'
```

### `padStart(targetLength, padString)`, `padEnd()`
- **What:** Pads a string with another string until it reaches a target length.
- **Example:**
```javascript
const str = '5';
console.log(str.padStart(3, '0')); // '005'
```

### `match(regex)`, `search(regex)`
- **What:** Regex searching.
- **Example:**
```javascript
const text = 'The price is $50';
console.log(text.match(/\$\d+/)); // ['$50']
console.log(text.search(/\$/)); // 13
```

### `at(index)` (Modern)
- **What:** Gets character at index, allows negative indexing.
- **Example:**
```javascript
const word = 'JavaScript';
console.log(word.at(-1)); // 't'
```

---

## 3. Regex Basics

### What is Regex?
Regular Expressions are patterns used to match character combinations in strings.

### Basics
- `/pattern/flags`
- `.` : Any character
- `\d` : Digit
- `\w` : Word character (alphanumeric)
- `+` : 1 or more
- `*` : 0 or more
- `^` : Start
- `$` : End
- Flags: `g` (global), `i` (case-insensitive)

### Common Patterns
```javascript
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const isEmail = emailRegex.test('test@test.com'); // true
```

---

## Common Mistakes

```
Mistake → Modifying string by index directly
Why it happens → Confusing strings with arrays
Incorrect code → let s = 'hi'; s[0] = 'H';
Correct code → let s = 'hi'; s = 'H' + s.slice(1);
How to remember → Strings are Set in Stone (Immutable).
```
