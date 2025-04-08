import React from "react";
import Parent from "./Parent";
const GrandParent = () => {
  return (
    <div>
      <Parent message="hello" />
    </div>
  );
};

export default GrandParent;
