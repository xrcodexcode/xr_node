# Level 6 — Objects Solutions

## Exercises

**🟢 Beginner**
1. `const movie = { title: "Inception", director: "Nolan", year: 2010 };`
2. `console.log(movie.director);`
3. `console.log(movie["year"]);`
4. `movie.rating = 8.5;`
5. `movie.year = 2024;`
6. `delete movie.rating;`
7. `movie.getSummary = function() { return \`${this.title} by ${this.director}, ${this.year}\`; };`
8. `const brand = 'Dell', model = 'XPS'; const laptop = { brand, model };`
9. `console.log("price" in laptop);`
10. `console.log(laptop.hasOwnProperty("brand"));`

**🟡 Intermediate**
11. `const { title, director } = movie;`
12. `const { year: releaseYear } = movie;`
13. `const { profile: { email } } = user;`
14. `const employee = { ...person, ...details };`
15. `const newMovie = { ...movie, year: 2025 };`
16. `Object.keys(movie);`
17. `Object.values(movie);`
18. `for (const key in movie) { console.log(key, movie[key]); }`
19. `const name = apiResponse.data?.user?.name;`
20. `Object.assign({}, {a: 1}, {b: 2});`

**🔴 Advanced**
21. `const countProperties = obj => Object.keys(obj).length;`
22. `const invertObject = obj => Object.fromEntries(Object.entries(obj).map(([k, v]) => [v, k]));`
23. `const total = Object.values(expenses).reduce((sum, val) => sum + val, 0);`
24. `const cloneDeep = obj => structuredClone(obj);`
25. `const mapUsers = users => users.reduce((acc, user) => ({...acc, [user.id]: user}), {});`
26. `const cleanObject = obj => Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null));`
27. `const config = Object.freeze({ db: "mysql" }); config.db = "pg"; // ignores change`
28. `const settings = Object.seal({ theme: "dark" }); settings.theme = "light"; // works`

**🔥 Challenge**
29. `const UserManager = { users: [], addUser(u) { this.users.push(u); } /* ... */ };`
30. `const inventory = { items: {}, addItem(n, q) { this.items[n] = (this.items[n]||0)+q; } };`
31. `const diff = (o1, o2) => Object.fromEntries(Object.keys(o2).filter(k => o1[k] !== o2[k]).map(k => [k, o2[k]]));`
32. `const flatten = (obj, prefix='') => Object.entries(obj).reduce((acc, [k,v]) => typeof v === 'object' ? {...acc, ...flatten(v, prefix+k+'.')} : {...acc, [prefix+k]: v}, {});`
33. `const wordFreq = str => str.split(' ').reduce((acc, w) => { acc[w] = (acc[w]||0)+1; return acc; }, {});`
34. `const groupCart = items => items.reduce((acc, item) => { acc[item.category] = (acc[item.category]||0) + (item.price*item.qty); return acc; }, {});`
35. `const transform = api => api.users.reduce((acc, u) => { acc[u.id] = {name: u.name, isAdmin: u.roles.includes('admin')}; return acc; }, {});`

---

## Worksheet Solutions

**Part A: Predict Output**
1. `2` (Copied reference, mutation affects both)
2. `false` (Different references)
3. `10` (Computed property key)
4. `100` (Object is frozen, mutation ignored)
5. `1 2` (Renaming variables via destructuring)
6. `10` (val is overwritten)
7. `2` (Shallow copy, nested object reference is shared)
8. `undefined` (Optional chaining prevents error)
9. `true`
10. `50` (this refers to cart)

**Part B: Complete the Code**
1. `const { price = 0 } = item;`
2. `const merged = { ...objA, ...objB };`
3. `for (const [key, value] of Object.entries(car))`

**Part C: Write from Scratch**
1. 
```javascript
const bankAccount = {
  balance: 0,
  deposit(amount) { this.balance += amount; }
};
```
2. `const hasProperty = (obj, prop) => prop in obj;` // or `obj.hasOwnProperty(prop)`
3. `const getKeysCap = obj => Object.keys(obj).map(k => k.toUpperCase());`

**Part D: Debug**
1. Cannot destructure deeply in one flat step like that if you only want the nested property.
Correct: `const { details: { age } } = user;`
2. Missing square brackets for computed property.
Correct: `const theme = { [myKey]: "blue" };`

**Part E: Modify**
```javascript
function greet({ name, city }) {
  return "Hello " + name + " from " + city;
}
```

**Part F: Challenge**
```javascript
function deepFreeze(obj) {
  Object.keys(obj).forEach(prop => {
    if (typeof obj[prop] === 'object' && obj[prop] !== null) {
      deepFreeze(obj[prop]);
    }
  });
  return Object.freeze(obj);
}
```

**Part G: Mini Project**
```javascript
const catalog = {
  products: [],
  addProduct(product) {
    this.products.push(product);
  },
  findProduct(id) {
    return this.products.find(p => p.id === id);
  },
  updateStock(id, qty) {
    const product = this.findProduct(id);
    if (product) product.stock = qty;
  },
  getInventoryValue() {
    return this.products.reduce((total, p) => total + (p.price * p.stock), 0);
  }
};
```
