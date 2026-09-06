# Level 8: Events

**Estimated Learning Time:** 3 hours
**Minimum Practice Time:** 4 hours
**Mastery Checkpoint:** Can implement event delegation and handle form submissions dynamically.

## 1. What are Events? (MUST KNOW)

Events are "things" that happen in the browser—a user clicks a button, types in an input, scrolls the page, or the page finishes loading. JavaScript can "listen" for these events and run code in response.

### Syntax

```javascript
const btn = document.querySelector('button');

// Modern & Preferred (Allows multiple listeners)
btn.addEventListener('click', function(event) {
  console.log('Button clicked!');
});

// Legacy (Overwrites previous listeners)
btn.onclick = function() {
  console.log('Clicked');
};
```

## 2. The Event Object (MUST KNOW)

When an event fires, the browser passes an `Event` object to your callback function containing details about what happened.

```javascript
document.querySelector('input').addEventListener('keydown', (e) => {
  console.log(e.type); // "keydown"
  console.log(e.key);  // e.g., "Enter", "a", "Escape"
  console.log(e.target.value); // The current value of the input
});
```

- `e.target`: The element that actually triggered the event.
- `e.currentTarget`: The element the listener is attached to.

## 3. Event Propagation: Bubbling & Capturing (ADVANCED)

When an event occurs on an element, it doesn't just fire on that element. It travels through the DOM.

**Phase 1: Capturing (Down)** Document -> HTML -> Body -> Target
**Phase 2: Target** The actual element clicked
**Phase 3: Bubbling (Up)** Target -> Body -> HTML -> Document

### Bubbling Example

```javascript
// HTML: <div class="outer"><button class="inner">Click</button></div>
document.querySelector('.outer').addEventListener('click', () => console.log('Outer clicked'));
document.querySelector('.inner').addEventListener('click', () => console.log('Inner clicked'));
// Output on button click: "Inner clicked", then "Outer clicked" (Bubbling up)
```

### stopPropagation

Stop an event from bubbling up:

```javascript
document.querySelector('.inner').addEventListener('click', (e) => {
  e.stopPropagation(); // Outer will NOT fire now
  console.log('Inner clicked');
});
```

## 4. Event Delegation (MUST KNOW / CRITICAL)

Attaching event listeners to many child elements is bad for performance and breaks if new children are added dynamically. Instead, attach ONE listener to the parent.

### Event Delegation Pattern

```javascript
// HTML: <ul id="list"> <li>Item 1</li> <li>Item 2</li> </ul>
document.getElementById('list').addEventListener('click', (e) => {
  // Check if what was actually clicked (e.target) is an li
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('completed');
  }
});
```
*Why?* If we dynamically create `<li>Item 3</li>`, we don't need to attach a new event listener to it! The parent `#list` handles it.

## 5. preventDefault (MUST KNOW)

Stops the browser's default behavior for an event (e.g., following a link, refreshing on form submit).

```javascript
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault(); // Page will NOT refresh
  console.log('Form data processed via JS instead');
});

document.querySelector('a').addEventListener('click', (e) => {
  e.preventDefault(); // Link will NOT navigate
});
```

## 6. Removing Event Listeners

To remove an event listener, you MUST pass the exact same function reference. Anonymous functions cannot be removed.

```javascript
const btn = document.querySelector('button');

function handleClick() {
  console.log('Clicked');
  // Remove itself after one click
  btn.removeEventListener('click', handleClick);
}

btn.addEventListener('click', handleClick);
```

> **Tip:** You can also use `{ once: true }` as the 3rd argument to `addEventListener` to fire it only once.
