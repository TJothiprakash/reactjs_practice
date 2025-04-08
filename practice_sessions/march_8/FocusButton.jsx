import React from "react";

// useRef for Focus (Google)

// Make an input form where clicking a “Focus” button puts the cursor into the input.
// Use useRef.

const FocusButton = () => {
  const inputRef = React.useRef(null);
  const [focused, setFocused] = React.useState(false);

  const focusInput = (e) => {
    e.preventDefault();
    inputRef.current.focus();
    setFocused(true);
  };

  return (
    <div>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" ref={inputRef} />
        <button type="button" onClick={focusInput}>
          focus
        </button>
      </form>

      {focused && <p>Input is now focused!</p>}
    </div>
  );
};

export default FocusButton;
