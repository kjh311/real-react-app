import { useState, useEffect } from "react";

export default function CharacterCounter() {
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(input.length);
  }, [input]);

  return (
    <div>
      <h1>Character Count: {count} / 200</h1>
      <br />
      <br />
      <textarea
        type="text"
        placeholder="Enter some text"
        value={input}
        className="border rounded p-2 m-2"
        onChange={(e) => setInput(e.target.value)}
        maxLength="200"
      />
    </div>
  );
}
