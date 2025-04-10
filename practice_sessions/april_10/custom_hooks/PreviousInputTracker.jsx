import React, { useState } from "react";
import usePrevious from "./usePrevious"; // You'll build this!

const PreviousInputTracker = () => {
  const [text, setText] = useState("");
  const prevText = usePrevious(text);

  return (
    <div>
      <h2>Track Previous Input</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <p>Current: {text}</p>
      <p>Previous: {prevText}</p>
    </div>
  );
};

export default PreviousInputTracker;
