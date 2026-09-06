# Control Flow Worksheet

## Part A: Predict the Output (10 Problems)
*Don't run the code! Guess the output first.*
1.
```javascript
let x = 5;
if (x = 10) console.log(x);
```
*(Think about = vs ===)*

2.
```javascript
for(let i=0; i<3; i++) {
  setTimeout(() => console.log(i), 100);
}
```

*(Add 8 more similar tricky snippets here...)*

## Part B: Complete the Code (8 Problems)
1. Complete the `for` loop to print elements backward.
```javascript
const arr = [1, 2, 3];
for(let i = ____; i ____; i____) {
  console.log(arr[i]);
}
```

*(Add 7 more...)*

## Part C: Write from Scratch (8 Problems)
1. Write a `while` loop that halves a number (starting at 100) until it is less than 1.
2. Write a `switch` statement for days of the week.

*(Add 6 more...)*

## Part D: Debug (8 Problems)
1. Why does this cause an infinite loop?
```javascript
let count = 0;
while (count < 5) {
  console.log(count);
}
```

*(Add 7 more broken snippets...)*

## Part E: Modify (5 Problems)
1. Change this `if/else` chain into a `switch` statement.
2. Change this `for` loop into a `for...of` loop.

*(Add 3 more...)*

## Part F: Challenge (5 Problems)
1. Write a script that checks a chess board (8x8 2D array) and counts how many pawns are on the board.
*(Add 4 more...)*

## Part G: Mini Project
**Interactive Menu System**
Create a text-based menu (using Node.js `readline` or browser `prompt`) that loops until the user chooses to "Exit".
Options:
1. View Balance
2. Deposit Money
3. Withdraw Money
4. Exit
Implement the logic using `while` and `switch`.
