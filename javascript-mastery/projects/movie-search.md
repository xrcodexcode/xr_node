# Mini Project: Movie Search App

## Objective
Search for movies and display a grid of results using the OMDB API.

## Requirements
1. Search input for movie titles.
2. Fetch from `http://www.omdbapi.com/?s={title}&apikey={your_key}`.
3. Map over the results (`Search` array) and render posters and titles.
4. Handle cases where the API returns a successful 200 HTTP code, but the JSON body contains `"Response": "False"` (OMDB specific behavior).

## Step-by-Step Hints
1. Get a free API key from OMDB.
2. OMDB does not use HTTP status codes for all errors. E.g., searching for a gibberish string returns a 200 OK, but the JSON contains `Error: "Movie not found!"`. Handle this custom error logic.
3. Handle missing posters (OMDB returns `"N/A"` for missing images).

## Complete Solution Snippet
```javascript
const apiKey = 'YOUR_API_KEY';
async function searchMovies(query) {
  const res = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=${apiKey}`);
  const data = await res.json();
  
  // OMDB custom error handling
  if (data.Response === "False") {
    throw new Error(data.Error);
  }
  
  return data.Search; // Returns array of movies
}
```
