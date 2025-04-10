import { useEffect, useRef } from "react";

const usePrevious = (value) => {
  const ref = useRef(); // to store previous value

  useEffect(() => {
    ref.current = value; // update after render
  }, [value]);

  return ref.current; // return previous value
};

export default usePrevious;
