# Project: To-Do List App

**Level:** Intermediate
**File Path:** `projects/todo-app.md`

## Requirements
1. Input field and "Add" button.
2. Render items in a `<ul>`.
3. Each item has a checkbox (to mark done) and a "Delete" button.
4. Filter buttons: All, Active, Completed.

## HTML Structure
```html
<form id="todo-form">
  <input type="text" id="todo-input" required>
  <button type="submit">Add</button>
</form>
<div class="filters">
  <button data-filter="all">All</button>
  <button data-filter="active">Active</button>
  <button data-filter="completed">Completed</button>
</div>
<ul id="todo-list"></ul>
```

## Step-by-Step Guide
1. Select form, input, and list.
2. Listen for form `submit`, `e.preventDefault()`. Read input, create an object `{ id: Date.now(), text: val, done: false }`, push to a state array.
3. Write a `render()` function that clears `ul.innerHTML` and maps over the array to create `<li>` elements.
4. Use Event Delegation on `<ul>` to listen for clicks on delete buttons and checkboxes.
5. Update state array on delete/toggle, then call `render()`.
6. Wire up filter buttons to change a `currentFilter` variable, and adjust `render()` to filter the array before displaying.

## Solution Snippet
*(Omitted for brevity - focus on state-driven UI where DOM always reflects the JavaScript array data).*
