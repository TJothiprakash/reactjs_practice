import React, { useEffect, useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(60);
  const [isActive, setIsActive] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    let id;
    if (isActive && seconds > 0) {
      id = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
      setIntervalId(id);
    }
    return () => clearInterval(id);
  }, [isActive, seconds]);

  const handleReset = () => {
    setSeconds(60);
    setIsActive(false);
    clearInterval(intervalId);
  };

  const handleStart = () => {
    setIsActive(true);
  };

  const handleStop = () => {
    setIsActive(false);
  };

  return (
    <div>
      <h1>Timer</h1>
      <p>{seconds} seconds</p>
      <button onClick={handleStart} disabled={isActive}>Start</button>
      <button onClick={handleStop} disabled={!isActive}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Timer;