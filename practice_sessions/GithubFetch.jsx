// 🔹 Problem 4: Fetch GitHub User (30 mins)
// Goal: Build a mini-app to search for a GitHub user and show their profile.
// API: https://api.github.com/users/<username>
// Features:

// Input box + button

// On search → fetch data

// Show: avatar, name, followers, public repos

// Concepts Covered:
// ✅ useEffect
// ✅ Fetch API / Axios
// ✅ Error handling
// ✅ Conditional UI (loading, error, data)

import React from "react";

const GithubFetch = () => {
  const [user, setUser] = React.useState(null);
  const [username, setUsername] = React.useState("");
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const fetchData = async () => {
    if (!username.trim()) {
      setError("Please enter a username");
      return;
    }

    setIsLoading(true);
    setError(null);
    setUser(null);

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error("User not found");
      }
      const data = await response.json();
      setUser(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>GitHub User Finder</h1>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={handleInputChange}
      />
      <button onClick={fetchData} disabled={isLoading}>
        {isLoading ? "Searching..." : "Search"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {user && (
        <div style={{ marginTop: "1rem" }}>
          <img
            src={user.avatar_url}
            alt="avatar"
            width={120}
            style={{ borderRadius: "50%" }}
          />
          <h2>{user.name || user.login}</h2>
          <p>Followers: {user.followers}</p>
          <p>Public Repos: {user.public_repos}</p>
        </div>
      )}
    </div>
  );
};

export default GithubFetch;
