import React from "react";
import InstructionsPanel from "./InstructionsPanel";
import MeasurementDisplay from "./MeasurementsDisplay";

const ExperimentalPanel = () => {
  const [measured, setMeasured] = React.useState(0);

  return (
    <div>
      <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
        <h2>🔬 Experiment Panel</h2>
        <button onClick={() => setMeasured(measured + 1)}>
          Take New Measurement
        </button>

        <div style={{ marginTop: "20px" }}>
          <MeasurementDisplay value={measured} />
          <InstructionsPanel />
        </div>
      </div>
    </div>
  );
};

export default ExperimentalPanel;
