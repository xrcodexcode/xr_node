# Level 7: DOM - Solutions

## Worksheet - Part A
**Output:** 2.
**Why:** Modifying `innerHTML` using `+=` completely destroys and recreates all internal DOM nodes, which clears any event listeners attached to the original child elements and causes a performance hit.

## Worksheet - Part B
```javascript
const links = document.querySelectorAll('a');
links.forEach(link => link.classList.add('active'));
```

## Worksheet - Part D
**Bug:** `getElementsByClassName` returns a *live* HTMLCollection. When you remove `items[0]`, the collection shrinks, elements shift left, and `items[1]` now refers to what was originally `items[2]`. You end up skipping elements.
**Fix:** Convert to array or loop backwards.
```javascript
const items = Array.from(document.getElementsByClassName('item'));
items.forEach(item => item.remove());
// Or using querySelectorAll which is static:
// document.querySelectorAll('.item').forEach(item => item.remove());
```
