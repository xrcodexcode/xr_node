# Mini Project: Weather Dashboard

## Objective
Build a weather application that fetches real-time weather data based on a user's city search using the OpenWeatherMap API.

## Requirements
1. HTML input for city search and a "Search" button.
2. Fetch data from OpenWeatherMap API.
3. Display temperature, weather description, and city name.
4. Handle loading states ("Loading...").
5. Handle errors gracefully (e.g., "City not found").

## API Setup
1. Go to OpenWeatherMap and sign up for a free API key.
2. URL format: `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric`

## Step-by-Step Hints
1. **Setup UI**: Create input, button, and a `div` for output.
2. **Event Listener**: Listen for click on Search. Get input value.
3. **Fetch Call**: `fetch()` the URL. Check `!res.ok` (especially for 404s!).
4. **Update DOM**: Parse JSON and update innerText of DOM elements.
5. **Loading/Errors**: Set text to "Loading" before fetch. Wrap fetch in `try/catch` to display errors.

## Complete Solution Snippet
```javascript
const apiKey = 'YOUR_API_KEY';
async function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("City not found");
    const data = await res.json();
    return data;
  } catch(e) {
    throw e;
  }
}
```
