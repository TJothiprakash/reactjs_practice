import React, { useState, useEffect } from "react";

const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
};

const CustomHookAirBNB = () => {
  const width = useWindowWidth();

  return (
    <div>
      <h1>Current width: {width}px</h1>
      {width < 768 ? (
        <p style={{ color: "green" }}>📱 Mobile View</p>
      ) : (
        <p style={{ color: "blue" }}>💻 Desktop View</p>
      )}
    </div>
  );
};

export default CustomHookAirBNB;
