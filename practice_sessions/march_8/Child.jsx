import React from "react";

const Child = (props) => {
  function handleClick() {
    console.log("Button clicked in Child component");
    props.incrementCount(); // Call the parent's increment function
  }

  return (
    <div>
      <h1>Child Component</h1>
      <button onClick={handleClick}>Click Me</button>
      <p>Count: {props.count}</p>
      <p>
        Message: this message is passed from great grand parent {props.message}
      </p>
    </div>
  );
};

export default Child;
