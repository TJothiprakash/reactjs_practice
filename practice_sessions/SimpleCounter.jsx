import { func } from "prop-types";
import React from "react";

const SimpleCounter = () => {
  const [count, setCount] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

  function handleClikck() {
    console.log("button clicked ");
    //alert("button clicked");
    // return "you clicked me ";
  }
  function handleIncrement() {
    setCount((prevCount) => prevCount + 1);
  }

  function handleDecrement() {
    setCount((prevCount) => prevCount - 1);
  }
  function handleReset() {
    setCount(0);
  }


    // // Simulate a loading state
    // if (isLoading) {
    //   return <p>Loading...</p>;
    // }
  
  return (
    
    isLoading ?(<p>Loading...</p>) :
    <>
      <div>
        <h1>Counter</h1>
        
        
        <p>Count: {count}</p>
        <button onClick={handleIncrement}>increment</button>
        <button onClick={handleDecrement}>decrement</button>
        <button onClick={handleReset}>reset</button>
        {/* <button onClick={handleClikck}>button</button> */}
        <button></button>
      </div>
    </>
  );
};

export default SimpleCounter;
