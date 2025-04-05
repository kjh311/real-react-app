import { useState, useEffect } from "react";

export default function CharacterCounter() {
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(input.length);
  }, [input]);

  return (
    <div>
      <h1 className={count > 180 ? "text-red-600 font-bold" : ""}>
        Character Count: {count} / 200
      </h1>
      {count === 200 && (
        <div>
          <p className="text-red-500 font-semibold">
            ⚠️ Character limit reached!
          </p>
          <button
            onClick={() => setInput("")}
            className="border rounded p-2 m-2 bg-blue-200 hover:bg-blue-500"
          >
            Clear Text
          </button>
        </div>
      )}
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
