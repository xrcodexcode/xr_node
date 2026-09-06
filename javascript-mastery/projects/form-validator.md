# Project: Form Validator

**Level:** Intermediate
**File Path:** `projects/form-validator.md`

## Requirements
Build a registration form (username, email, password, confirm password).
Provide real-time error feedback (red borders, error text below inputs) as the user types or leaves fields.

## HTML Structure
```html
<form id="reg-form">
  <div class="form-control">
    <label>Username</label>
    <input type="text" id="username">
    <small class="error-msg"></small>
  </div>
  <!-- Repeat for email, pwd, confirm_pwd -->
  <button type="submit">Register</button>
</form>
```

## Core Concepts Used
- DOM Selection (`getElementById`, `parentElement`, `querySelector`)
- Events (`submit`, `input`, `blur`)
- DOM Modification (`classList.add('error')`, `innerText`)

## Hint
Write helper functions: `showError(input, message)` and `showSuccess(input)`. 
`showError` will find the `parentElement` of the input, add an error class, and set the text of the `<small>` tag.
