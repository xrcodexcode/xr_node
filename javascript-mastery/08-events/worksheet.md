# Level 8: Events - Worksheet

## Part A — Predict the Output
```javascript
const btn = document.createElement('button');
btn.addEventListener('click', () => console.log('A'));
btn.onclick = () => console.log('B');
btn.onclick = () => console.log('C');
btn.addEventListener('click', () => console.log('D'));
btn.click();
// Predict the exact output order and explain why.
```

## Part B — Complete the Code
```javascript
// Goal: Close modal if user clicks outside of the modal-content
const modal = document.querySelector('.modal-overlay');
modal.addEventListener('click', (e) => {
  // TODO: Only close if they clicked the overlay itself, not its children
});
```

## Part C — Write from Scratch
Write a script for an accordion. You have multiple `<div class="accordion-header">`. When clicked, it should find its `nextElementSibling` (the content) and toggle a class `show`. Close all other open accordions.

## Part D — Debug
```javascript
const list = document.querySelector('ul');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
  const li = document.createElement('li');
  li.textContent = 'New Item';
  li.addEventListener('click', () => li.remove()); // What is wrong with this approach?
  list.appendChild(li);
});
```

## Part E — Modify
Modify the code in Part D to use Event Delegation instead of binding listeners in a loop/on creation.

## Part F — Challenge
Build a generic dropdown handler. Clicking a `.dropdown-toggle` toggles `.dropdown-menu`. Clicking anywhere else on the document closes all open dropdowns.

## Part G — Mini Project
**Keyboard Drum Kit:** Map keys (A, S, D, F) to play different audio files using `keydown`. Add a CSS `.playing` class to the corresponding DOM element, and remove it on `transitionend`.
