// HeavyComponent.jsx
import React from "react";

const HeavyComponent = () => {
  console.log("HeavyComponent loaded!");
  return (
    <div style={{ marginTop: "1rem", padding: "1rem", background: "#f0f0f0" }}>
      <h3>🧠 I’m the heavy component!</h3>
      <p>Loaded only when you need me 😎</p>
    </div>
  );
};

export default HeavyComponent;
