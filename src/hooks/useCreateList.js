import { useState } from "react";

export default function useCreateList() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      setList([...list, input]); // Add input to list
      setInput(""); // Clear input field
    }
  };

  return { list, input, handleInput, handleSubmit };
}
