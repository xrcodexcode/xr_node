# Strings Cheat Sheet

| Method | Description | Example |
|---|---|---|
| `length` | Property, gets length | `'hi'.length` // 2 |
| `charAt(idx)` | Get char at index | `'hi'.charAt(0)` // 'h' |
| `at(idx)` | Get char (supports -) | `'hi'.at(-1)` // 'i' |
| `indexOf(str)` | Find first index | `'hi'.indexOf('i')` // 1 |
| `includes(str)` | True if contains | `'hi'.includes('h')` // true |
| `startsWith(str)`| True if starts with | `'hi'.startsWith('h')` // true |
| `endsWith(str)`| True if ends with | `'hi'.endsWith('i')` // true |
| `slice(start, end)`| Extract part | `'hello'.slice(1, 3)` // 'el' |
| `split(sep)` | Split to array | `'a,b'.split(',')` // ['a', 'b'] |
| `replace(a, b)`| Replace first | `'hi hi'.replace('h', 'w')` // 'wi hi' |
| `replaceAll(a, b)`| Replace all | `'hi hi'.replaceAll('h', 'w')` // 'wi wi' |
| `toUpperCase()`| Convert to upper | `'hi'.toUpperCase()` // 'HI' |
| `toLowerCase()`| Convert to lower | `'HI'.toLowerCase()` // 'hi' |
| `trim()` | Remove edge whitespace| `' hi '.trim()` // 'hi' |
| `repeat(n)` | Repeat string | `'a'.repeat(3)` // 'aaa' |
| `padStart(n, s)`| Pad start | `'5'.padStart(2, '0')` // '05' |
| `match(regex)` | Regex search | `'hi'.match(/h/g)` // ['h'] |
