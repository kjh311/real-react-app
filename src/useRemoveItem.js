import { useState, useEffect } from "react";

export default function useRemoveItem() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      setList([...list, input]);
    }
    setInput("");
  };

  useEffect(() => {
    console.log(list);
  }, [list]);

  const removeItem = (index) => {
    setList((prevList) => prevList.filter((_, i) => i !== index));
  };

  return { input, list, handleInput, handleSubmit, removeItem };
}
