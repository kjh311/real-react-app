import React, { useState, useEffect } from "react";

export default function Debounce() {
  const [input, setInput] = useState("");
  const [timedInput, setTimedInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimedInput(input);
      console.log({ timedInput });
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
    </div>
  );
}
