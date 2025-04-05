import { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";

export default function ToDo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const localTodos = JSON.parse(localStorage.getItem("myTodos"));
    if (localTodos) {
      setTodos(localTodos);
    }
  }, []);

  // Persist todos to localStorage whenever the todos array changes
  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("myTodos", JSON.stringify(todos));
    }
  }, [todos]);

  const handlePostTodo = (e) => {
    e.preventDefault();

    if (input.trim() !== "") {
      setTodos((prevTodos) => [...prevTodos, input]);
    }

    setInput("");
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos); // Update the todos state
  };

  return (
    <div>
      <form onSubmit={handlePostTodo}>
        <input
          className="border rounded p-2 m-2"
          type="text"
          placeholder="Enter a Todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="border rounded p-2 m-2 bg-red-300 hover:bg-red-600"
        >
          Post
        </button>
      </form>
      {todos.map((todo, index) => {
        return (
          <div className="border rounded p-2 m-2 bg-blue-300" key={index}>
            {todo}
            <IconButton
              className=" float-right"
              aria-label="close"
              onClick={() => handleDeleteTodo(index)}
            >
              <CloseIcon fontSize="large" style={{ color: "red" }} />
            </IconButton>
          </div>
        );
      })}
    </div>
  );
}
