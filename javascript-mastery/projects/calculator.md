# Project: JavaScript Calculator

**Level:** Intermediate (DOM + Events)
**File Path:** `projects/calculator.md`

## Requirements
Build a functioning on-screen calculator.
1. Numbers 0-9 and operators (+, -, *, /)
2. Display screen that updates on click.
3. Equals (=) button to calculate result.
4. Clear (C) button to reset.

## HTML Structure
```html
<div class="calculator">
  <div class="display" id="display">0</div>
  <div class="keys">
    <button data-action="clear">C</button>
    <button data-action="divide">/</button>
    <button data-action="multiply">*</button>
    <button data-action="subtract">-</button>
    <button>7</button> <button>8</button> <button>9</button>
    <button data-action="add">+</button>
    <button>4</button> <button>5</button> <button>6</button>
    <button data-action="calculate">=</button>
    <button>1</button> <button>2</button> <button>3</button>
    <button class="zero">0</button>
  </div>
</div>
```

## Step-by-Step Guide
1. Select the `.keys` container and the `#display`.
2. Add an event listener to `.keys` (Event Delegation!).
3. In the event listener, check `if (e.target.matches('button'))`.
4. Get the text of the button clicked. Check if it has a `data-action`.
5. Maintain state variables: `firstValue`, `operator`, `awaitingNextValue`.
6. Update display for numbers. If it's an operator, save `firstValue` and `operator`, set `awaitingNextValue = true`.
7. On `=`, perform calculation, update display.

## Complete Solution Snippet
```javascript
const keys = document.querySelector('.keys');
const display = document.getElementById('display');
let firstVal = '';
let operator = '';
let awaitingNext = false;

keys.addEventListener('click', e => {
  if (!e.target.matches('button')) return;
  const key = e.target;
  const action = key.dataset.action;
  const keyContent = key.textContent;
  const dispNum = display.textContent;

  if (!action) {
    // Number key
    if (dispNum === '0' || awaitingNext) {
      display.textContent = keyContent;
      awaitingNext = false;
    } else {
      display.textContent = dispNum + keyContent;
    }
  } else if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {
    firstVal = dispNum;
    operator = action;
    awaitingNext = true;
  } else if (action === 'calculate') {
    const secondVal = dispNum;
    let result = 0;
    if (operator === 'add') result = parseFloat(firstVal) + parseFloat(secondVal);
    if (operator === 'subtract') result = parseFloat(firstVal) - parseFloat(secondVal);
    if (operator === 'multiply') result = parseFloat(firstVal) * parseFloat(secondVal);
    if (operator === 'divide') result = parseFloat(firstVal) / parseFloat(secondVal);
    display.textContent = result;
  } else if (action === 'clear') {
    display.textContent = '0';
    firstVal = ''; operator = ''; awaitingNext = false;
  }
});
```
