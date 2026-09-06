# Level 8: Events - Exercises

## 🟢 Beginner (1-8)
1. Add a click event to a button that logs "Clicked!"
2. Add a `dblclick` event to a `div` that changes its background color.
3. Attach a `mouseover` and `mouseout` event to an image to swap its `src`.
4. Listen for the `input` event on a text field and mirror its value into a `<p>` tag in real-time.
5. Create a form with a submit button. Use `preventDefault()` to stop page refresh on submit.
6. Log the `e.key` when a user presses a key anywhere on the `window`.
7. Add a click listener to a button using an anonymous function, then try to remove it (observe why it fails).
8. Use `{ once: true }` to create a button that can only be clicked exactly one time.

## 🟡 Intermediate (9-15)
9. Create a list of 5 items. Use a `for` loop to attach a click listener to each item that toggles a strikethrough class.
10. Refactor exercise 9 to use **Event Delegation** (one listener on the `<ul>`).
11. Build a character counter: An `<textarea>` that updates a span with `currentLength / 140` on every keystroke.
12. Prevent typing numbers in an input field using the `keydown` event and `e.preventDefault()`.
13. Create an outer `div` and inner `button`. Log messages for both clicks. Observe bubbling.
14. Add `e.stopPropagation()` to the button from ex 13. Observe the change.
15. Listen for `DOMContentLoaded` on the `document`. Console log "DOM is ready".

## 🔴 Advanced (16-20)
16. Implement drag-and-drop: Use `mousedown`, `mousemove`, and `mouseup` to make a small `div` draggable around the screen.
17. Create a custom event called `userLogin`, dispatch it on the `window`, and listen for it to update the UI.
18. Implement a simple "debouncer" for a window `resize` event (only run the callback after 300ms of no resizing).
19. Build a context menu: Listen for `contextmenu` (right click), `preventDefault`, and show a custom absolute positioned `div` at `e.clientX` and `e.clientY`.
20. Handle dynamic data: Fetch items (mocked via setTimeout), render them to the DOM, and ensure clicking them works using Event Delegation.
