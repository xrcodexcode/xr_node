# Mini Project: GitHub Finder

## Objective
Build an app that lets a user search for GitHub profiles and view their avatar, bio, and repositories.

## Requirements
1. Input field with debounced search (or a submit button).
2. Fetch user profile from `https://api.github.com/users/{username}`.
3. Display user avatar, name, and bio.
4. Fetch top 5 recent repos from `https://api.github.com/users/{username}/repos?sort=created&per_page=5`.
5. Display links to the repos.
6. Display a "User not found" message on a 404 error.

## Step-by-Step Hints
1. You can do this without an API key, but you may hit rate limits.
2. Use `Promise.all` to fetch the user profile and the repos concurrently if you want to optimize!
3. Check `res.status === 404` to specifically show a "Not Found" message vs a general network error.

## Complete Solution Snippet
```javascript
async function getGitHubUser(username) {
  try {
    const [profileRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`),
      fetch(`https://api.github.com/users/${username}/repos?sort=created&per_page=5`)
    ]);

    if (!profileRes.ok) throw new Error("User not found");

    const profile = await profileRes.json();
    const repos = await reposRes.json();
    
    return { profile, repos };
  } catch (error) {
    console.error(error.message);
  }
}
```
