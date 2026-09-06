# Cheat Sheet: Modules

## ES Modules (Modern)

### Named Export/Import
```javascript
export const x = 1;
export function y() {}

import { x, y } from './file.js';
```

### Default Export/Import
```javascript
export default class MyClass {}

import MyClass from './file.js';
```

### Renaming
```javascript
import { x as myX } from './file.js';
```

### Dynamic Import
```javascript
const module = await import('./module.js');
```

## CommonJS (Legacy Node.js)
```javascript
module.exports = { x, y };
const { x, y } = require('./file.js');
```

## Browser Usage
```html
<!-- Must have type="module" -->
<script type="module" src="app.js"></script>
```
*(Note: Modules in the browser use strict mode by default and defer execution).*
