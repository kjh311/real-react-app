import { useState, useEffect } from "react";

export default function useAutoCount() {
  const [count, setCount] = useState(0);
  const [paused, setPaused] = useState(true);

  const handlePaused = () => {
    setPaused((prev) => !prev);
  };

  useEffect(() => {
    if (paused) return; // Stop interval if paused

    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1); // Use functional update to avoid stale state
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup interval on unmount or when paused
  }, [paused]); // Runs when `paused` changes

  return { count, paused, handlePaused };
}
