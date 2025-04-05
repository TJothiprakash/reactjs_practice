import React from "react";

function UserList() {
  const users = [
    {
      id: 1,
      username: "john_doe",
      avatarUrl: "/avatars/john.jpg",
      bio: "Software Engineer",
    },
    {
      id: 2,
      username: "jane_smith",
      avatarUrl: "/avatars/jane.jpg",
      bio: "Web Developer",
    },
    {
      id: 3,
      username: "peter_jones",
      avatarUrl: "/avatars/peter.jpg",
      bio: "Data Scientist",
    },
  ];

  return (
    <div className="user-list">
      {users.map((user) => (
        <div key={user.id} className="user">
          <img src={user.avatarUrl} alt={user.username} />
          <h3>{user.username}</h3>
          <p>{user.bio}</p>
          <button>Follow</button>
        </div>
      ))}
    </div>
  );
}

export default UserList;
