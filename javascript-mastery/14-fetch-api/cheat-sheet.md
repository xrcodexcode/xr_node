# Level 14 Cheat Sheet: Fetch & APIs

| Method | Purpose | Has Body? | Idempotent? |
|---|---|---|---|
| **GET** | Read data | No | Yes |
| **POST** | Create data | Yes | No |
| **PUT** | Update/Replace | Yes | Yes |
| **PATCH** | Partial Update | Yes | No |
| **DELETE**| Delete data | No | Yes |

### Common Status Codes
- `200`: OK
- `201`: Created
- `204`: No Content (often returned by DELETE)
- `400`: Bad Request (client sent bad data)
- `401`: Unauthorized (needs auth login)
- `403`: Forbidden (has auth, but lacks permissions)
- `404`: Not Found
- `500`: Internal Server Error

### Fetch Boilerplate
```javascript
const res = await fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_TOKEN'
  },
  body: JSON.stringify({ key: 'value' })
});

if (!res.ok) throw new Error('Failed');
const data = await res.json();
```
