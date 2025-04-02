import React, { useState } from "react";

function ControlledInput() {
  // Initialize state with an empty string
  const [inputValue, setInputValue] = useState("");

  // Event handler for input changes
  const handleChange = (event) => {
    // Update the state with the new value from the input
    setInputValue(event.target.value);
  };

  return (
    <div>
      <label>
        Enter text:
        {/* Bind the value prop to the state and the onChange prop to the handler */}
        <input type="text" value={inputValue} onChange={handleChange} />
      </label>
      <p>You entered: {inputValue}</p>
    </div>
  );
}

export default ControlledInput;
