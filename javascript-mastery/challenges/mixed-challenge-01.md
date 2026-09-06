# Mixed Challenge 01 (Levels 1-6)

**Topics Covered:** Variables, Conditions, Loops, Functions, Strings, Arrays, Objects.
**Rule:** No external libraries.

## Problems

1. **Vowel Counter**: Write a function that takes a string and returns the number of vowels.
2. **Reverse Array In Place**: Write a function that reverses an array without creating a new array.
3. **Palindrome Checker**: Write a function that checks if a string is a palindrome (ignore spaces and case).
4. **FizzBuzz**: Write a function that returns an array of numbers from 1 to N, but replaces multiples of 3 with "Fizz", multiples of 5 with "Buzz", and multiples of both with "FizzBuzz".
5. **Find Maximum**: Write a function that finds the largest number in an array.
6. **Object Property Counter**: Write a function that counts how many properties an object has.
7. **Array Flattening**: Write a function that flattens a 2D array `[[1, 2], [3, 4]]` into a 1D array `[1, 2, 3, 4]`.
8. **Student Grader**: Given an array of student objects `{name, score}`, return an array of objects with `{name, grade}` where grade is 'A'(90+), 'B'(80+), 'C'(70+), 'F'(<70).
9. **Anagram Checker**: Write a function that checks if two strings are anagrams of each other.
10. **Unique Values**: Write a function that returns an array of unique values from a given array.
11. **Word Capitalizer**: Write a function that capitalizes the first letter of every word in a string.
12. **Inventory Value**: Given an array of objects `{name, price, stock}`, calculate the total inventory value.
13. **Key-Value Swapper**: Write a function that swaps the keys and values of an object.
14. **Most Frequent Element**: Find the most frequent element in an array.
15. **URL Slug Generator**: Convert a string like "Hello World 2024" to "hello-world-2024".
16. **Deep Equality Checker**: Write a function that checks if two objects have exactly the same keys and values (1 level deep).
17. **Data Grouper**: Given an array of objects `{name, role}`, return an object grouping names by role. e.g. `{ admin: ["Alice"], user: ["Bob", "Charlie"] }`.
18. **Matrix Diagonal Sum**: Given a square 2D array, calculate the sum of its main diagonal.
19. **Run-Length Encoding**: Compress a string like "AAAABBBCCDAA" to "4A3B2C1D2A".
20. **Bank Account System**: Create an object representing a bank account with properties `balance` and `transactions` (array of objects). Add methods `deposit(amount)`, `withdraw(amount)`, and `getStatement()`.

---

## Solutions

*(Solutions are provided below for self-checking. Try to solve them first!)*

```javascript
// 1. Vowel Counter
const countVowels = str => (str.match(/[aeiou]/gi) || []).length;

// 2. Reverse Array In Place
function reverseInPlace(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
  }
  return arr;
}

// 3. Palindrome Checker
const isPalindrome = str => {
  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return clean === clean.split('').reverse().join('');
};

// 4. FizzBuzz
const fizzBuzz = n => Array.from({length: n}, (_, i) => {
  const num = i + 1;
  if (num % 15 === 0) return "FizzBuzz";
  if (num % 3 === 0) return "Fizz";
  if (num % 5 === 0) return "Buzz";
  return num;
});

// 5. Find Maximum
const findMax = arr => Math.max(...arr);

// 6. Object Property Counter
const countProps = obj => Object.keys(obj).length;

// 7. Array Flattening
const flatten = arr => arr.flat(); // or [].concat(...arr)

// 8. Student Grader
const gradeStudents = students => students.map(s => {
  let grade = 'F';
  if (s.score >= 90) grade = 'A';
  else if (s.score >= 80) grade = 'B';
  else if (s.score >= 70) grade = 'C';
  return { name: s.name, grade };
});

// 9. Anagram Checker
const isAnagram = (str1, str2) => {
  const format = str => str.toLowerCase().replace(/[^a-z0-9]/g, '').split('').sort().join('');
  return format(str1) === format(str2);
};

// 10. Unique Values
const getUnique = arr => [...new Set(arr)];

// 11. Word Capitalizer
const capitalizeWords = str => str.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

// 12. Inventory Value
const getInventoryValue = items => items.reduce((total, item) => total + (item.price * item.stock), 0);

// 13. Key-Value Swapper
const swapKeysValues = obj => Object.fromEntries(Object.entries(obj).map(([k, v]) => [v, k]));

// 14. Most Frequent Element
const mostFrequent = arr => {
  const counts = arr.reduce((acc, val) => { acc[val] = (acc[val] || 0) + 1; return acc; }, {});
  return Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
};

// 15. URL Slug Generator
const generateSlug = str => str.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-');

// 16. Shallow Equality Checker
const shallowEqual = (obj1, obj2) => {
  const keys1 = Object.keys(obj1), keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) return false;
  return keys1.every(key => obj1[key] === obj2[key]);
};

// 17. Data Grouper
const groupData = arr => arr.reduce((acc, cur) => {
  acc[cur.role] = acc[cur.role] || [];
  acc[cur.role].push(cur.name);
  return acc;
}, {});

// 18. Matrix Diagonal Sum
const diagonalSum = matrix => matrix.reduce((sum, row, i) => sum + row[i], 0);

// 19. Run-Length Encoding
const rle = str => str.replace(/(.)\1*/g, match => `${match.length}${match[0]}`);

// 20. Bank Account System
const createAccount = () => ({
  balance: 0,
  transactions: [],
  deposit(amount) {
    this.balance += amount;
    this.transactions.push({ type: 'deposit', amount });
  },
  withdraw(amount) {
    if (amount > this.balance) throw new Error("Insufficient funds");
    this.balance -= amount;
    this.transactions.push({ type: 'withdraw', amount });
  },
  getStatement() {
    return this.transactions;
  }
});
```
