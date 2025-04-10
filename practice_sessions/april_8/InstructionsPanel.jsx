import React from "react";

const InstructionsPanel = React.memo(() => {
  console.log("✅ InstructionsPanel did NOT re-render");
  return (
    <div>
      📋 Instructions:
      <ul>
        <li>Click the button to simulate a new measurement.</li>
        <li>This panel should not re-render.</li>
      </ul>
    </div>
  );
});

export default InstructionsPanel;
