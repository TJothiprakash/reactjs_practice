// App.jsx
import React, { Suspense, useState } from "react";

// Lazy import (but not executed yet)
const HeavyComponent = React.lazy(() => import("./HeavyComponent"));

const LazyLoadDemo = () => {
  const [show, setShow] = useState(false);

  const handleLoad = () => {
    setShow(true);
  };

  return (
    <div style={{ padding: "1rem", fontFamily: "Arial" }}>
      <h2>🚀 Lazy Loading Demo</h2>
      {!show && <button onClick={handleLoad}>Load Heavy Component</button>}

      {show && (
        <Suspense fallback={<p>Loading component...</p>}>
          <HeavyComponent />
        </Suspense>
      )}
    </div>
  );
};

export default LazyLoadDemo;
