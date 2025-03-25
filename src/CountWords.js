import { useState, useEffect } from "react";

export default function CountWords() {
  const [input, setInput] = useState("");
  const [obj, setObj] = useState([]);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    const words = input
      .toLowerCase()
      .replace(/[^a-z0-9' ]/g, "")
      .split(" ")
      .reduce((acc, word) => {
        acc[word] = (acc[word] || 0) + 1;
        return acc;
      }, {});

    setObj(words);
    console.log(obj);
  }, [input]);

  return (
    <div>
      <textarea
        type="text"
        value={input}
        placeholder="Enter some Text"
        onChange={handleInput}
      />
      {Object.entries(obj).map(([word, count], index) => {
        return (
          <div key={index}>
            Word: {word}, Count: {count}
          </div>
        );
      })}
    </div>
  );
}
