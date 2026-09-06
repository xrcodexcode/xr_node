# DOM & Events Cheat Sheet

## Selecting Elements
```javascript
// Single Elements (Returns first match or null)
document.getElementById("myId");
document.querySelector(".my-class"); // CSS selector (RECOMMENDED)

// Multiple Elements (Returns NodeList/HTMLCollection)
document.querySelectorAll("li"); // Returns static NodeList (RECOMMENDED)
document.getElementsByClassName("btn"); // Returns live HTMLCollection
```

## Modifying Elements
```javascript
const el = document.querySelector("#title");

// Text & HTML
el.textContent = "New Text"; // Safe, text only
el.innerHTML = "<span>HTML content</span>"; // Vulnerable to XSS, parses HTML

// Attributes
el.setAttribute("href", "/new-link");
el.getAttribute("href");
el.removeAttribute("disabled");
el.id = "newId"; // Direct property access

// Classes
el.classList.add("active");
el.classList.remove("active");
el.classList.toggle("active");
el.classList.contains("active"); // returns true/false
```

## Creating & Appending Elements
```javascript
// 1. Create
const newDiv = document.createElement("div");
newDiv.textContent = "Hello";

// 2. Select parent
const container = document.querySelector("#container");

// 3. Append/Insert
container.appendChild(newDiv); // Adds to end
container.prepend(newDiv);     // Adds to start
container.insertBefore(newDiv, referenceElement);
newDiv.remove();               // Remove the element itself
```

## Traversing the DOM
```javascript
const el = document.querySelector(".child");

el.parentElement;      // Parent node
el.children;           // HTMLCollection of child elements
el.nextElementSibling; // Next sibling
el.previousElementSibling; // Previous sibling
el.closest(".parent-class"); // Goes up DOM tree to find nearest match
```

## Events

### Adding Listeners
```javascript
const btn = document.querySelector("button");

btn.addEventListener("click", function(event) {
  console.log("Clicked!");
  console.log(event.target); // Element that triggered the event
});
```

### Common Event Types
- **Mouse:** `click`, `dblclick`, `mouseenter`, `mouseleave`
- **Keyboard:** `keydown`, `keyup`, `keypress`
- **Form:** `submit`, `change`, `input`, `focus`, `blur`
- **Window:** `load`, `DOMContentLoaded`, `resize`, `scroll`

### Event Object Details
```javascript
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevents default form submission/page reload
});

div.addEventListener("click", (e) => {
  e.stopPropagation(); // Stops event bubbling up to parent elements
});
```

### Event Delegation
Attach ONE listener to a parent element to handle events on its children (efficient).
```javascript
const list = document.querySelector("ul");

list.addEventListener("click", (e) => {
  // Check if the clicked target was an <li>
  if (e.target.tagName === "LI") {
    console.log(e.target.textContent);
  }
});
```
