import React from "react";

const Profile = ( props ) => {
  const [loadMore, setLoadMore] = React.useState(false);

  return loadMore ? (
    <div>
      <h2>{props.user.name}</h2>
      {/* <p>Age: {user.age}</p>
      <img src={user.avatarUrl} alt="Avatar" width={150} />
      <p>{user.bio}</p> */}
    </div>
  ) : (
    <p>
      Username: {props.user.name} <br />
      <button onClick={() => setLoadMore((prev) => !prev)}>Load more...</button>
    </p>
  );
};

export default Profile;
