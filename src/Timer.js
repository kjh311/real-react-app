import { useState, useEffect } from "react";

export default function Timer() {
  const [count, setCount] = useState(0);
  const [paused, setPaused] = useState(true);

  useEffect(() => {
    let intervalId;

    if (!paused) {
      // Set the interval when not paused
      intervalId = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    }

    // Cleanup function to clear the interval
    return () => {
      clearInterval(intervalId);
    };
  }, [paused]);

  return (
    <div>
      Count: {count}
      <div>
        <button
          className="p-2 m-2 border rounded bg-red-200 hover:bg-red-500"
          onClick={() => setPaused(false)}
        >
          Start Timer
        </button>
      </div>
      <div>
        <button
          className="p-2 m-2 border rounded bg-red-200 hover:bg-red-500"
          onClick={() => setPaused(true)}
        >
          Stop Timer
        </button>
      </div>
      <div>
        <button
          className="p-2 m-2 border rounded bg-red-200 hover:bg-red-500"
          onClick={() => {
            setPaused(true);
            setCount(0);
          }}
        >
          Reset Timer
        </button>
      </div>
    </div>
  );
}
