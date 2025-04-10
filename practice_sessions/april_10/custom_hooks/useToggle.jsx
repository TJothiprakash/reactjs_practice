import React, { useState } from "react";

const useToggle = () => {
  const [isToggled, setisToggled] = useState(false);

  const toggle = () => {
    setisToggled((prev) => !prev);
  };

  return {
    isToggled, 
    toggle
    
  };
};

export default useToggle;
