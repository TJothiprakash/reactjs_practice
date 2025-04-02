import React, { useState } from "react";

function ControlledTextarea() {
  const [textareaValue, setTextareaValue] = useState("");

  const handleChange = (event) => {
    setTextareaValue(event.target.value);
  };

  return (
    <div>
      <label>
        Enter text:
        <textarea value={textareaValue} onChange={handleChange} />
      </label>
      <p>You entered: {textareaValue}</p>
    </div>
  );
}

export default ControlledTextarea;
