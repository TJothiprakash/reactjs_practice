import React, { useState } from "react";
import  './toggle.css'; // Import the CSS file

const ToggleVisibility = () => {
  const [isVisible, setIsVisible] = useState(true); // State to track visibility

  return (
    <div className="toggle-container">
      <button className="toggle-button" onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"} Text
      </button>

      {isVisible && <p className="toggle-text">This is the text that can be toggled!</p>}
    </div>
  );
};

export default ToggleVisibility;
