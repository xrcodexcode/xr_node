# Worksheet: Error Handling and Debugging

## Part A — Predict the Output
```javascript
try {
  console.log("A");
  throw new Error("B");
} catch (e) {
  console.log("C");
} finally {
  console.log("D");
}
// Prediction: ?
```

## Part B — Complete the Code
```javascript
// Complete the retry logic
async function fetchWithRetry(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      // ______ fetch ______
    } catch (err) {
      // ______ log and continue unless last iteration ______
    }
  }
}
```

## Part C — Write from Scratch
Write a function `validateForm(data)` that throws an `InvalidEmailError` if `data.email` is missing an '@' sign, and an `InvalidPasswordError` if `data.password` is < 8 chars.

## Part D — Debug
```javascript
// Broken
async function getUserInfo(id) {
  let user;
  try {
    user = await fetchUser(id);
  } catch (err) {
    console.error(err);
  }
  return user.profile.name; // What happens if fetchUser failed?
}
```

## Part E — Modify
Modify the function in Part D to return a default string `"Unknown User"` if an error occurs.

## Part F — Challenge
Write a global error handler for your application that categorizes errors into "Network", "Validation", and "Unknown", and formats them for a reporting dashboard.

## Part G — Mini Project
Build a simple math quiz in the console. Ask users to evaluate expressions. Use custom errors (`TimeoutError`, `InvalidInputError`) to manage bad input or slow responses. Catch these errors and prompt the user to try again.
