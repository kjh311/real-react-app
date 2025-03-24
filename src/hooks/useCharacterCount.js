import { useState, useEffect } from "react";

export default function useCharacterCount() {
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    setCount(input.length);
  }, [input]);

  return { input, count, handleInput };
}
