import React, { useState } from "react";
import "./colorChanger.css"; // Import the CSS file

const ColorChanger = () => {
  const [color, setColor] = useState("white");

  return (
    <div className="button-container">
      {/* Color Box */}
      <div className="color-box" style={{ backgroundColor: color }}></div>

      {/* Buttons to Change Colors */}
      <button className="color-button red" onClick={() => setColor("red")}>
        Red
      </button>
      <button className="color-button green" onClick={() => setColor("green")}>
        Green
      </button>
      <button className="color-button blue" onClick={() => setColor("blue")}>
        Blue
      </button>
    </div>
  );
};

export default ColorChanger;
