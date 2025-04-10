import React from 'react'
import Child from './Child'
const Parent = (props) => {
        const [count, setCount] = React.useState(0);
        const incrementCount = () => {
            console.log("Incrementing count in Parent component");
            setCount(count + 1);
        };

  return (
    <div>
      <h1>Parent Component</h1>
      <Child incrementCount={incrementCount} count={count} message={props.message} />
    </div>
  );
}

export default Parent
