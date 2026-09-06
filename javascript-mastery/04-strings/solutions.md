# String Solutions

*(Selected solutions for Exercises)*

### 🟢 Beginner
```javascript
// 1. Reverse String
const reverseString = str => str.split('').reverse().join('');

// 2. Count Vowels
const countVowels = str => (str.match(/[aeiou]/gi) || []).length;

// 3. Capitalize First Letter
const capitalize = str => str ? str[0].toUpperCase() + str.slice(1) : '';

// 4. Truncate
const truncate = (str, num) => str.length > num ? str.slice(0, num) + '...' : str;
```

### 🟡 Intermediate
```javascript
// 11. Palindrome Check
const isPalindrome = str => {
  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return clean === clean.split('').reverse().join('');
};

// 13. Slug Generator
const generateSlug = str => str.toLowerCase().trim().replace(/[\s\W-]+/g, '-');

// 15. Camel Case
const toCamelCase = str => str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
```

### 🔴 Advanced
```javascript
// 21. Template Engine
const render = (template, data) => template.replace(/{{(.*?)}}/g, (_, key) => data[key.trim()] || '');

// 22. String Compression
const compress = str => {
  let res = '', count = 1;
  for(let i=0; i<str.length; i++) {
    if(str[i] === str[i+1]) count++;
    else { res += str[i] + count; count = 1; }
  }
  return res.length < str.length ? res : str;
};
```

### 🔥 Challenge
```javascript
// 27. Search Highlight
const highlight = (str, term) => {
  const regex = new RegExp(`(${term})`, 'gi');
  return str.replace(regex, '<mark>$1</mark>');
};
```

*(See code repository for full solutions of all 30 exercises and worksheet parts)*
