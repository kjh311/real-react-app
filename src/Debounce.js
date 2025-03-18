import React, { useState, useEffect } from "react";

export default function Debounce() {
  const [input, setInput] = useState("");
  const [timedInput, setTimedInput] = useState("");
  const [wait, setWait] = useState(false);

  const handleInputChange = (e) => {
    setInput(e.target.value);
    setWait(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimedInput(input);
      setWait(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [input]);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter text"
        onChange={handleInputChange}
      />

      <h1>{timedInput}</h1>
      <h1>{wait ? "Loading..." : ""}</h1>
    </div>
  );
}
