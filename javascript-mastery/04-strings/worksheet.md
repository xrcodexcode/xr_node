# Worksheet: Strings

## Part A — Predict the Output
Predict the output of the following snippets before running them.

1.
```javascript
let str = "Hello";
str[0] = "J";
console.log(str);
```
2.
```javascript
console.log("JavaScript".slice(-6));
```
3.
```javascript
console.log("apple".indexOf("z"));
```
4.
```javascript
console.log("cat".padEnd(5, "!"));
```
5.
```javascript
const name = "Alice";
console.log(`Hello ${name}`);
```
6.
```javascript
console.log("one,two,three".split(",").join("-"));
```
7.
```javascript
console.log("  test  ".trim().toUpperCase());
```
8.
```javascript
console.log("hello".replace("l", "w"));
```

## Part B — Complete the Code
Fill in the blanks.

1. Get the last character of a string using `.at()`.
```javascript
const str = "Code";
const last = str._____; 
```

2. Make it uppercase.
```javascript
const lower = "hi";
const upper = lower.________();
```

3. Split by spaces.
```javascript
const sentence = "I love JS";
const words = sentence._______(____);
```

4. Repeat "Ha" 3 times.
```javascript
const laugh = "Ha".______(3);
```

5. Check if it ends with ".com".
```javascript
const url = "google.com";
const isCom = url._______(".com");
```

6. Replace all spaces with dashes.
```javascript
const text = "a b c";
const dashed = text._________(/ /g, "-");
```

7. Extract "World" from "Hello World".
```javascript
const text = "Hello World";
const world = text._____(6);
```

8. Pad with zeros to length 4.
```javascript
const num = "5";
const padded = num.________(4, "0");
```

## Part C — Write from Scratch
Write the full logic.

1. Write a function `isQuestion(str)` that returns true if the string ends with `?`.
2. Write a function `firstThree(str)` that returns the first 3 characters.
3. Write a function `shout(str)` that makes it uppercase and adds `!!!`.
4. Write a function `countSpaces(str)` that counts the spaces.
5. Write a function `swapCase(str)` (e.g. 'aB' -> 'Ab').
6. Write a function `containsWord(str, word)` returning true if word is in str.
7. Write a function `removeVowels(str)`.
8. Write a function `reverseWords(sentence)` (reverse word order, not characters).

## Part D — Debug
Find and fix the errors.

1. 
```javascript
let name = 'Bob"; // Error
```
2.
```javascript
let str = "Hello";
str.push("!"); // Error
```
3.
```javascript
let s = "hi";
s[0] = "H"; // Doesn't change
```
4.
```javascript
let a = 5, b = 10;
console.log('Sum is ${a + b}'); // Prints literally
```
5.
```javascript
let word = "apple";
word.toUpperCase; // Does nothing
```
6.
```javascript
"banana".replace("a", "o"); // Only replaces first 'a'
```

## Part E — Modify
Modify the code to meet the new requirement.

1. Modify `str.split(',')` to split by comma OR space.
2. Modify `str.substring(0, 5)` to get the LAST 5 characters instead.
3. Modify `` `Hello ${name}` `` to also include their age.
4. Modify `str.replace('bad', 'good')` to replace ALL instances case-insensitively.

## Part F — Challenge
1. Write a function that takes a string like `"width: 100px; height: 200px;"` and returns an object `{ width: "100px", height: "200px" }`.
2. Write a function that converts `"I love JavaScript"` to `"#ILoveJavaScript"` (hashtag generator).
3. Check if a string is a valid hexadecimal color (e.g. `#FFAA00` or `#fac`).
4. Find the most frequent character in a string.

## Part G — Mini Project: Text Analyzer Tool
Write a function `analyzeText(text)` that returns an object containing:
- `charCount`: total characters
- `charCountNoSpaces`: characters excluding spaces
- `wordCount`: number of words
- `sentenceCount`: number of sentences (split by `.`, `!`, `?`)
- `mostFrequentWord`: the word that appears the most

```javascript
// Test it:
console.log(analyzeText("Hello there. How are you? I am fine, thank you."));
```
