import { useState, useEffect } from "react";

const useMyHook = (someArgs) => {
  // internal logic using hooks
  const [state, setState] = useState(null);

  useEffect(() => {
    // maybe some side effect
  }, [someArgs]);

  const doSomething = () => {
    // some function logic
  };

  return {
    state,
    doSomething,
    // return only JS values/functions — NO JSX
  };
};

export default useMyHook;
