# Level 7: DOM - Worksheet

## Part A — Predict the Output
```javascript
// HTML: <div id="app"><p class="text">Hello</p></div>
const app = document.getElementById('app');
app.innerHTML += '<p class="text">World</p>';
const texts = document.querySelectorAll('.text');
console.log(texts.length);
// What is printed? Why is modifying innerHTML with += dangerous for performance/events?
```

## Part B — Complete the Code
```javascript
// Goal: Add 'active' class to all links
const links = document.querySelectorAll('a');
// TODO: loop through links and add class
```

## Part C — Write from Scratch
Write a script that creates a 3x3 grid of `div` elements, adds a class `cell` to each, and appends them to `#grid-container`.

## Part D — Debug
```javascript
// Goal: Remove all list items
const items = document.getElementsByClassName('item');
for (let i = 0; i < items.length; i++) {
  items[i].remove();
}
// Why does this leave half the items in the DOM? Fix it.
```

## Part E — Modify
You have a script that sets `.innerHTML`. Modify it to use `document.createElement` and `append` to avoid XSS vulnerabilities.

## Part F — Challenge
Create a dynamic table generation script. Given an array of objects `[{id:1, name:'Alice'}, {id:2, name:'Bob'}]`, generate a `<table>` with a header row and data rows.

## Part G — Mini Project
**Dynamic List Builder:**
HTML provides an input and a button. When clicked, read the input, create an `li`, append to `ul`, and clear the input field.
