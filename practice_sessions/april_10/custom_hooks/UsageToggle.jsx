import React from "react";
import useToggle from "./useToggle";
const UsageToggle = () => {
  const { isToggled, toggle } = useToggle();

  return (
    <div>
      <h1>Toggle Example</h1>
      <div
        style={{
          backgroundColor: isToggled ? "#333" : "#fff",
          color: isToggled ? "#fff" : "#000",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <h2>{isToggled ? "🌙 Dark Mode" : "☀️ Light Mode"}</h2>
        <button onClick={toggle}>
          Switch to {isToggled ? "Light" : "Dark"} Mode
        </button>
      </div>
    </div>
  );
};

export default UsageToggle;
