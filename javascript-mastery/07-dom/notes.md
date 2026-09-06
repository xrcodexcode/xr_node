# Level 7: The Document Object Model (DOM)

**Estimated Learning Time:** 3 hours
**Minimum Practice Time:** 4 hours
**Mastery Checkpoint:** Can dynamically create, update, and remove HTML elements based on data.

## 1. What is the DOM? (MUST KNOW)

The Document Object Model (DOM) is an object-oriented representation of a web page. When a browser loads HTML, it creates a tree-like structure in memory. JavaScript can interact with this tree to read and manipulate the page structure, style, and content.

### Why?
Without the DOM, JavaScript wouldn't be able to change what the user sees on the screen. The DOM is the bridge between your JS logic and the HTML UI.

### DOM Tree ASCII Diagram

```
                  [ window ]
                      |
                 [ document ]
                      |
                   [ html ]
                   /      \
            [ head ]      [ body ]
            /     |        /      \
       [title] [meta]  [ div ]   [script]
                         |
                 +-------+-------+
                 |               |
               [ h1 ]          [ p ]
                 |               |
           "Hello World"  "This is text"
```

## 2. Selecting Elements (MUST KNOW)

To change an element, you must first select it.

### Syntax & Methods

```javascript
// 1. by ID (Returns single element)
const title = document.getElementById('main-title');

// 2. by Class Name (Returns HTMLCollection - live)
const buttons = document.getElementsByClassName('btn');

// 3. by Tag Name (Returns HTMLCollection)
const paragraphs = document.getElementsByTagName('p');

// 4. querySelector (Returns first match, uses CSS selector syntax)
const firstBtn = document.querySelector('.btn');
const specificInput = document.querySelector('input[type="text"]');

// 5. querySelectorAll (Returns NodeList - static)
const allButtons = document.querySelectorAll('.btn');
```

> **Mistake:** Using array methods like `.map()` on an `HTMLCollection` or `NodeList`.
> **Why it happens:** They look like arrays, but they are "Array-like" objects.
> **Correct code:** Convert to array first: `Array.from(document.querySelectorAll('.btn')).map(...)` or use `[...document.querySelectorAll('.btn')]`. Note: `NodeList` has a built-in `.forEach()`, but `HTMLCollection` does not.

## 3. Modifying Elements (MUST KNOW)

Once selected, you can modify an element's text, HTML, styles, and attributes.

### Changing Text and HTML

```javascript
const box = document.querySelector('.box');

// textContent (ignores HTML tags, reads all text including hidden)
box.textContent = 'Hello World';

// innerText (reads visible text, respects CSS styling)
box.innerText = 'Hello World';

// innerHTML (parses HTML tags, can be a security risk - XSS)
box.innerHTML = '<strong>Hello</strong> World';
```

### Changing Styles

```javascript
const el = document.querySelector('.element');

// Inline styling (camelCase instead of kebab-case)
el.style.backgroundColor = 'blue';
el.style.fontSize = '24px';

// Class manipulation (Modern & preferred)
el.classList.add('active');
el.classList.remove('hidden');
el.classList.toggle('selected'); // Adds if missing, removes if present
const hasClass = el.classList.contains('active'); // true
```

### Changing Attributes

```javascript
const img = document.querySelector('img');

img.setAttribute('src', 'logo.png');
img.setAttribute('alt', 'Company Logo');

console.log(img.getAttribute('src')); // 'logo.png'

img.removeAttribute('title');

// Dataset (Custom data-* attributes)
// HTML: <div data-user-id="123" data-role="admin"></div>
const div = document.querySelector('div');
console.log(div.dataset.userId); // "123"
console.log(div.dataset.role); // "admin"
```

## 4. Creating & Removing Elements (MUST KNOW)

### Creating Elements

```javascript
// 1. Create the element
const newDiv = document.createElement('div');

// 2. Add content/classes
newDiv.textContent = 'I am new here!';
newDiv.classList.add('new-item');

// 3. Append it to the DOM
const container = document.querySelector('.container');
container.appendChild(newDiv); // Adds to end
container.prepend(newDiv);     // Adds to beginning
```

### Removing Elements

```javascript
const badItem = document.querySelector('.bad-item');
badItem.remove(); // Modern way

// Legacy way
const parent = badItem.parentNode;
parent.removeChild(badItem);
```

### Insert Adjacent

```javascript
// beforebegin, afterbegin, beforeend, afterend
const target = document.querySelector('.target');
target.insertAdjacentHTML('beforeend', '<p>Appended HTML</p>');
```

## 5. DOM Traversal (SHOULD KNOW)

Navigating the DOM tree from a selected element.

```javascript
const item = document.querySelector('.item');

// Parent
const parent = item.parentElement;

// Children
const children = item.children; // HTMLCollection of child elements
const firstChild = item.firstElementChild;
const lastChild = item.lastElementChild;

// Siblings
const next = item.nextElementSibling;
const prev = item.previousElementSibling;
```

## 6. Forms and Inputs (MUST KNOW)

Reading data from forms.

```javascript
const form = document.querySelector('#myForm');
const input = document.querySelector('#username');

// Get input value
console.log(input.value);

// Set input value
input.value = 'JohnDoe';
```

## 7. Mini Projects

### Mini Project 1: Counter App
HTML: `<h1 id="count">0</h1> <button id="inc">Inc</button> <button id="dec">Dec</button>`
```javascript
const countEl = document.getElementById('count');
document.getElementById('inc').onclick = () => countEl.textContent = Number(countEl.textContent) + 1;
document.getElementById('dec').onclick = () => countEl.textContent = Number(countEl.textContent) - 1;
```

### Mini Project 2: Color Changer
HTML: `<button id="changeColor">Change Background</button>`
```javascript
document.getElementById('changeColor').onclick = () => {
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
};
```
