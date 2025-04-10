import React, { useEffect } from "react";
import useFetch from "./useFetch";

const FetchDataUsage = () => {
  const {
    data,
    isLoading,
    error,
    refetch, // using the correct name
  } = useFetch("https://jsonplaceholder.typicode.com/users");

  useEffect(() => {
    if (data) console.log(data);
  }, [data]);

  return (
    <div>
      <h1>Users</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {data && (
        <ul>
          {data.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
      <button onClick={refetch}>Refetch</button>
    </div>
  );
};

export default FetchDataUsage;
