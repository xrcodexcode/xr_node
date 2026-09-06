# FINAL CAPSTONE PROJECT: TaskFlow — Project Management Dashboard

## 1. Project Overview
Welcome to the Final Capstone! You will build **TaskFlow**, a comprehensive project management dashboard. This project combines all the JavaScript concepts you've learned: DOM manipulation, ES6+ modules, Fetch API, async/await, state management, form validation, error handling, localStorage, and clean architecture.

## 2. Feature Requirements
1. **Dynamic Rendering**: Render tasks and projects from a data source.
2. **ES6 Modules**: Split code into logical files (app.js, api.js, store.js, ui.js).
3. **API Integration**: Fetch initial tasks from `https://jsonplaceholder.typicode.com/todos`.
4. **Async/Await**: Handle asynchronous API calls elegantly.
5. **State Management**: A centralized store with a publish-subscribe pattern.
6. **Form Validation**: Real-time validation when adding tasks.
7. **Error Handling**: Custom errors and `try/catch` blocks for API failures.
8. **localStorage persistence**: Save user-added tasks locally.
9. **Reusable Components**: Functions to generate DOM elements.
10. **Clean Architecture**: Separation of concerns.
11. **Event Delegation**: Attach single event listeners for multiple dynamic elements.
12. **OOP Classes**: `Task` and `Project` classes for data modeling.
13. **Debounced Search**: Search tasks with a delay to optimize performance.
14. **Loading States**: Show spinners during API calls.
15. **Filter & Sort**: Filter tasks by status, sort by name or date.

## 3. Architecture Diagram
```text
           +------------------+
           |     app.js       | (Main Entry, coordinates modules)
           +--------+---------+
                    |
      +-------------+-------------+
      |             |             |
+-----v----+  +-----v----+  +-----v----+
|  api.js  |  | store.js |  |  ui.js   |
| (Network)|  | (State)  |  | (DOM/UI) |
+----------+  +----------+  +----------+
```

## 4. File Structure
```text
/final-capstone
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── app.js
│   ├── api.js
│   ├── store.js
│   ├── ui.js
│   └── utils.js
└── README.md
```

## 5. Phase 1: Project Setup & HTML Structure
`index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>TaskFlow</title>
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <div class="container">
    <header>
      <h1>TaskFlow</h1>
      <input type="text" id="searchInput" placeholder="Search tasks...">
    </header>
    <main>
      <section class="add-task">
        <form id="taskForm">
          <input type="text" id="taskTitle" placeholder="Task Title">
          <button type="submit">Add Task</button>
        </form>
        <div id="errorBox" class="hidden"></div>
      </section>
      <section class="task-list">
        <div id="loading" class="hidden">Loading...</div>
        <ul id="taskList"></ul>
      </section>
    </main>
  </div>
  <script type="module" src="js/app.js"></script>
</body>
</html>
```

## 6. Phase 2: State Management Module
`js/store.js`
```javascript
export default class Store {
  constructor() {
    this.state = { tasks: [], loading: false, error: null };
    this.listeners = [];
  }
  subscribe(listener) {
    this.listeners.push(listener);
  }
  notify() {
    this.listeners.forEach(listener => listener(this.state));
  }
  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.notify();
  }
}
```

## 7. Phase 3: API Service Module
`js/api.js`
```javascript
const API_URL = 'https://jsonplaceholder.typicode.com/todos';
export const fetchTasks = async () => {
  try {
    const res = await fetch(`${API_URL}?_limit=10`);
    if (!res.ok) throw new Error('Failed to fetch');
    return await res.json();
  } catch (error) {
    throw error;
  }
};
```

## 8. Phase 4: UI Components Module
`js/ui.js`
```javascript
export const renderTasks = (tasks, container) => {
  container.innerHTML = tasks.map(task => `
    <li class="${task.completed ? 'completed' : ''}" data-id="${task.id}">
      <span>${task.title}</span>
      <button class="delete-btn">Delete</button>
    </li>
  `).join('');
};

export const showError = (message, container) => {
  container.textContent = message;
  container.classList.remove('hidden');
};
```

## 9. Phase 5: Main App & Integration
`js/app.js`
```javascript
import Store from './store.js';
import { fetchTasks } from './api.js';
import { renderTasks, showError } from './ui.js';

const store = new Store();
const elements = {
  form: document.getElementById('taskForm'),
  input: document.getElementById('taskTitle'),
  list: document.getElementById('taskList'),
  error: document.getElementById('errorBox'),
  loading: document.getElementById('loading')
};

store.subscribe(state => {
  elements.loading.classList.toggle('hidden', !state.loading);
  if (state.error) showError(state.error, elements.error);
  else renderTasks(state.tasks, elements.list);
});

async function init() {
  store.setState({ loading: true });
  try {
    const tasks = await fetchTasks();
    store.setState({ tasks, loading: false });
  } catch (e) {
    store.setState({ error: e.message, loading: false });
  }
}

elements.form.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = elements.input.value.trim();
  if (!title) return;
  const newTask = { id: Date.now(), title, completed: false };
  store.setState({ tasks: [newTask, ...store.state.tasks] });
  elements.input.value = '';
});

init();
```

## 10. Phase 6: Polish — Search, Filter, Sort, Debounce
`js/utils.js`
```javascript
export const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};
```

## 11. Complete CSS
`css/styles.css`
```css
body { font-family: sans-serif; margin: 0; padding: 20px; }
.hidden { display: none !important; }
.completed { text-decoration: line-through; color: gray; }
li { display: flex; justify-content: space-between; margin-bottom: 5px; }
```

## 12. Testing your app
1. Verify API tasks load on refresh.
2. Add a task with empty input (should be prevented).
3. Add a valid task (should appear at the top).
4. Simulate network failure (disconnect internet and refresh) -> Should see error message.

## 13. Extension ideas
1. Implement local storage saving.
2. Allow editing tasks.
3. Add task prioritization.
4. Drag and drop reordering.
5. Add dark mode toggle.
