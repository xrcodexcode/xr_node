# Level 7: DOM - Cheat Sheet

## Selection
- `document.getElementById('id')` -> Element | null
- `document.querySelector('.class')` -> Element | null
- `document.querySelectorAll('tag')` -> NodeList
- `document.getElementsByClassName('cls')` -> HTMLCollection

## NodeList vs HTMLCollection
- **NodeList**: Can be static or live. `querySelectorAll` returns a static NodeList. Has `.forEach()`.
- **HTMLCollection**: Live (updates automatically). No `.forEach()`.

## Modification
- Text: `el.textContent = 'text'`
- HTML: `el.innerHTML = '<span>text</span>'`
- Styles: `el.style.color = 'red'`
- Classes: `el.classList.add('a')`, `.remove('b')`, `.toggle('c')`, `.contains('d')`
- Attributes: `el.setAttribute('id', 'newId')`, `el.getAttribute('id')`
- Dataset: `el.dataset.customName` (maps to `data-custom-name`)

## Creation & Insertion
- `document.createElement('div')`
- `parent.appendChild(child)` (appends node to end)
- `parent.append('text', child)` (appends string or node to end)
- `parent.prepend(child)` (inserts at beginning)
- `el.insertAdjacentHTML('beforeend', '<p>html</p>')`

## Traversal
- `el.parentElement`
- `el.children`
- `el.nextElementSibling`
- `el.previousElementSibling`

## Removal
- `el.remove()` (Modern)
- `el.parentElement.removeChild(el)` (Legacy)
