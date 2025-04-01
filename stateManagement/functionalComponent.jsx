import React, { useState } from 'react';

const FunctionalComponent = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    //setCount(count + 1);
     //setCount(count + 1);
  setCount(prevCount =>prevCount+1);
    setCount(prevCount =>prevCount+1);
  };

  return (
    <>
      <p>Counter: {count}</p>
      <button onClick={incrementCount}>Click Me</button>
    </>
  );
};

export default FunctionalComponent;
