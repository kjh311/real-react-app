import { useState, useEffect } from "react";

export default function LocalStorageToDo() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(savedTodos);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      const updatedTodos = [...todos, input];
      setTodos(updatedTodos); // Update state
      localStorage.setItem("todos", JSON.stringify(updatedTodos)); // Save to localStorage
    }
    setInput(""); // Clear input after submit
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        placeholder="Enter a To Do"
        onChange={handleInput}
      />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
      {todos.map((todo, index) => {
        return <div key={index}>{todo}</div>;
      })}
    </div>
  );
}
