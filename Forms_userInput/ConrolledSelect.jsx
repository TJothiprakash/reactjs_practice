import React, { useState } from "react";

function ControlledSelect() {
  const [selectedValue, setSelectedValue] = useState("apple"); // Initial value

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <label>
        Choose your fruit:
        <select value={selectedValue} onChange={handleChange}>
          <option value="apple">Apple</option>
          <option value="banana">Banana</option>
          <option value="orange">Orange</option>
        </select>
      </label>
      <p>You chose: {selectedValue}</p>
    </div>
  );
}

export default ControlledSelect;
// This code defines a React functional component called ControlledSelect.
// It uses the useState hook to manage the state of a select input element.