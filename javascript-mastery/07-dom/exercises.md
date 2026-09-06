# Level 7: DOM - Exercises

**Focus:** Querying, creating, updating, and removing HTML elements.

## 🟢 Beginner (1-10)
1. Select an element with ID `header` and change its text content to "Welcome to the DOM".
2. Select all elements with class `list-item` and change their color to red.
3. Select the first `<p>` tag using `querySelector` and add a class `highlight`.
4. Check if an element with ID `box` has the class `hidden`. If it does, remove it.
5. Create a new `<li>` element, set its text to "New Item", and append it to an existing `<ul>` with ID `my-list`.
6. Select an `<img>` element and change its `src` attribute to a new URL.
7. Find an element with ID `delete-me` and remove it from the page.
8. Read the value of an input field with ID `username` and console log it.
9. Toggle the class `dark-mode` on the `<body>` element.
10. Read a custom attribute `data-id` from a `<div>` and alert it.

## 🟡 Intermediate (11-20)
11. Write a function `createCards(data)` that takes an array of objects (name, age) and generates a `div` for each, appending them to `#container`.
12. Traverse the DOM: Select `#start`, find its parent, add a border to the parent.
13. Traverse: Select `#start`, find all its element children, and log their text contents.
14. Traverse: Select an `<li>` and highlight its next sibling.
15. Use `insertAdjacentHTML` to add a new row to a table body immediately after the first row.
16. Clone an element with ID `template`, change its text, and append it to the body.
17. Iterate over a `NodeList` of buttons and disable all of them.
18. Clear all contents of a `div` with ID `wrapper` using `innerHTML`.
19. Clear contents of `#wrapper` by looping through and using `removeChild` (better performance).
20. Get the computed style of an element (e.g., actual rendered width) using `window.getComputedStyle`.

## 🔴 Advanced (21-25)
21. Build a helper function `createElement(tag, attributes, text)` that returns a constructed DOM node.
22. Write a script that finds all empty `<p>` tags on a page and removes them.
23. Read an array of nested comment objects and recursively render them into nested `<ul>` lists in the DOM.
24. Implement a simple data-binding: When a variable `state.text` changes, update the DOM automatically. (Hint: use getters/setters or Proxy).
25. Sanitize user input before injecting it into `innerHTML` to prevent XSS (or use textContent appropriately).
