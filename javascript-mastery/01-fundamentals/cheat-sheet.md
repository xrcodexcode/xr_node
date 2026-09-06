# Cheat Sheet: JavaScript Fundamentals

## Variable Declaration
- `let`: Block-scoped, reassignment allowed.
- `const`: Block-scoped, reassignment NOT allowed (use by default).
- `var`: Function-scoped, hoisted (avoid in modern JS).

## Data Types
- **String**: `"text"`, `'text'`, \`text\`
- **Number**: `42`, `3.14`, `NaN`
- **BigInt**: `9007199254740991n`
- **Boolean**: `true`, `false`
- **Undefined**: Declared but not assigned.
- **Null**: Explicitly empty.
- **Symbol**: Unique identifier `Symbol('id')`.
- **Object**: `{ key: "value" }`

## Operators Reference
- **Arithmetic**: `+`, `-`, `*`, `/`, `%` (remainder), `**` (exponent).
- **Assignment**: `=`, `+=`, `-=`, `*=`, `/=`
- **Comparison**: `===` (strict equal), `!==` (strict not equal), `>`, `<`, `>=`, `<=`
- **Logical**: `&&` (AND), `||` (OR), `!` (NOT)
- **Nullish Coalescing**: `??` (returns right side if left is null/undefined)
- **Optional Chaining**: `?.` (safely accesses properties)

## Truthy vs Falsy
**Falsy Values (The ONLY 6)**
1. `false`
2. `0` (and `-0`, `0n`)
3. `""` (empty string)
4. `null`
5. `undefined`
6. `NaN`

**Truthy Values**
- EVERYTHING ELSE (including `"false"`, `"0"`, `{}`, `[]`).

## Common Gotchas
- `typeof null` is `"object"`
- `NaN === NaN` is `false`
- `0.1 + 0.2 === 0.3` is `false` (floating point math)
- `"5" + 1` = `"51"` but `"5" - 1` = `4`
