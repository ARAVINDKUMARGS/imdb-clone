import React, { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1 style={{ fontSize: "48px" }}>{seconds}s</h1>
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={handleStart}
          style={{ margin: "5px", padding: "10px 20px", cursor: "pointer" }}
        >
          Start
        </button>
        <button
          onClick={handlePause}
          style={{ margin: "5px", padding: "10px 20px", cursor: "pointer" }}
        >
          Pause
        </button>
        <button
          onClick={handleReset}
          style={{ margin: "5px", padding: "10px 20px", cursor: "pointer" }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Timer;
