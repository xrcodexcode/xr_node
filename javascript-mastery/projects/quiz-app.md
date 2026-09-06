# Project: Quiz App

**Level:** Intermediate
**File Path:** `projects/quiz-app.md`

## Requirements
1. Array of question objects `{ question: '...', options: ['A','B','C','D'], answer: 1 }`.
2. Display one question at a time.
3. User selects an option, clicks "Next".
4. Track score. Show final score at the end.

## DOM / Events Focus
- Dynamic rendering: Wiping innerHTML and building new buttons for each option.
- Storing state (`currentQuestionIndex`, `score`).
- Event Delegation on the options container to detect answer selection.

## Guide
1. Define your `quizData` array.
2. Create `loadQuestion()`: inject question text, loop through options and create `<button>` elements.
3. Listen for clicks on option buttons. Validate against `quizData[currentIndex].answer`. Add a class for right/wrong feedback.
4. Show/enable a "Next" button.
5. On "Next" click, `currentIndex++`, call `loadQuestion()`. If out of questions, show score screen.
