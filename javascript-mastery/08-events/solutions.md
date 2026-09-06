# Level 8: Events - Solutions

## Worksheet - Part A
**Output:** A, C, D
**Why:**
- `addEventListener` ('A') attaches the first listener.
- `onclick = () => console.log('B')` assigns a property.
- `onclick = () => console.log('C')` overwrites the 'B' assignment.
- `addEventListener` ('D') attaches a second listener.
`addEventListener` does not overwrite previous listeners, whereas setting the `.onclick` property overwrites whatever was previously assigned to `.onclick`.

## Worksheet - Part B
```javascript
const modal = document.querySelector('.modal-overlay');
modal.addEventListener('click', (e) => {
  if (e.target === e.currentTarget) {
    modal.classList.add('hidden');
  }
});
// Alternatively: if (e.target.classList.contains('modal-overlay'))
```

## Worksheet - Part E (Event Delegation Fix)
```javascript
const list = document.querySelector('ul');
const btn = document.querySelector('button');

// One listener on the parent (Delegation)
list.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.remove();
  }
});

btn.addEventListener('click', () => {
  const li = document.createElement('li');
  li.textContent = 'New Item';
  list.appendChild(li);
});
```
