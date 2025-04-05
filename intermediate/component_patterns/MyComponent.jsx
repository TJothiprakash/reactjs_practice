import React from "react";
import WithTheme from "./WithTheme"; // Assuming the file where you defined the HOC

const MyComponent = ({
  theme,
  textColor,
  backgroundColor,
  buttonStyles,
  toggleTheme,
}) => {
  return (
    <div style={{ color: textColor, backgroundColor }}>
      <h1>Themed Component</h1>
      <button style={buttonStyles} onClick={toggleTheme}>
        Toggle Theme
      </button>
      <p>Current Theme: {theme}</p>
    </div>
  );
};

export default WithTheme(MyComponent);
