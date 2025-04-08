import React from "react";
// Button Toggle (Microsoft)

// Build a component with a button that toggles between “Login” and “Logout”.
// Show a message like "Welcome back, User" only when logged in.
const ButtonToggle = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [message, setMessage] = React.useState("Login to see the message");
  const handleLogin = () => {
    setIsLoggedIn(true);
    setMessage("Welcome back, User");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setMessage("");
  };
  const handleClick = () => {
    isLoggedIn ? handleLogout() : handleLogin();
  };
  return (
    <div>
      <button onClick={handleClick}> {isLoggedIn ? "Logout" : "Login"}</button>
      {<p>{message}</p>}
    </div>
  );
};
//
export default ButtonToggle;
