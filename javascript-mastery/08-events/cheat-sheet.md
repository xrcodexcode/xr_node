# Level 8: Events - Cheat Sheet

## Adding / Removing
```javascript
el.addEventListener('click', callback);
el.removeEventListener('click', callback); // Callback must be the exact same function reference
```

## Common Event Types
- **Mouse**: `click`, `dblclick`, `mousedown`, `mouseup`, `mousemove`, `mouseover`, `mouseout`, `mouseenter`, `mouseleave`
- **Keyboard**: `keydown`, `keyup`, `keypress` (deprecated)
- **Form**: `submit`, `input`, `change`, `focus`, `blur`
- **Window/Doc**: `DOMContentLoaded`, `load`, `resize`, `scroll`

## The Event Object (e)
- `e.target`: Element that triggered event
- `e.currentTarget`: Element listener is attached to
- `e.type`: Type of event ("click")
- `e.preventDefault()`: Stops default behavior (link navigation, form submission)
- `e.stopPropagation()`: Stops event from bubbling up the tree
- `e.key` / `e.code`: Key pressed (for keyboard events)
- `e.clientX` / `e.clientY`: Mouse coordinates relative to viewport

## Event Delegation Pattern
```javascript
parentElement.addEventListener('click', (e) => {
  if (e.target.matches('.child-selector')) { // Or e.target.tagName === 'LI'
    // Do something
  }
});
```

## Custom Events
```javascript
const myEvent = new CustomEvent('userReady', { detail: { id: 1 } });
window.dispatchEvent(myEvent);

window.addEventListener('userReady', (e) => console.log(e.detail.id));
```
