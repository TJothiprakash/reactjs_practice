import React, { useEffect, useState } from "react";

// Dependency Array Debug (Amazon)
// Build a component that increments a counter every time a prop changes,
// but do not use the prop in the dependency array.
// Debug why it doesn't work correctly.

const DependencyArray = () => {
  const [counter, setCounter] = useState(0);
  const [prop, setProp] = useState(0);

  // BUG: Not including 'prop' in dependency array
  useEffect(() => {
    if (prop !== 0) {
      setCounter((prev) => prev + 1);
    }
  }, [prop]);

  return (
    <div>
      <p>Simulated Prop Value: {prop}</p>
      <p>Counter (should change when prop changes): {counter}</p>
      <button onClick={() => setProp((prev) => prev + 1)}>Change Prop</button>
    </div>
  );
};

export default DependencyArray;
