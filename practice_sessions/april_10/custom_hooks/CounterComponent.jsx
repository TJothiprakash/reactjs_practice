import React from "react";
import useCounter from "./useCounter";

const CounterComponent = () => {
  const reuse = useCounter(0);
  return (
    <div>
      <h1>Counter Component</h1>
      <p>Counter: {reuse.counter}</p>
      <button onClick={reuse.increment}>increment</button>
      <button onClick={reuse.decrement}>decrement</button>
      <button onClick={reuse.reset}>reset</button>
    </div>
  );
};

export default CounterComponent;
