import { useState, useEffect } from "react";
import axios from "axios";
import { v4 } from "uuid";

export default function CategoryToDoList() {
  const [categories, setCategories] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [choice, setChoice] = useState("");
  const [newTaskInput, setNewTaskInput] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/categories`)
      .then((res) => setCategories(res.data))
      .catch((error) => console.log("error fetching categories", error));
  }, []);

  useEffect(() => {
    if (!choice) return;

    axios
      .get("http://localhost:5000/categories")
      .then((res) => {
        const selectedCategory = res.data.find((cat) => cat.name === choice);
        if (selectedCategory) {
          setTasks(selectedCategory.tasks);
        } else {
          console.warn("Category not found in response");
        }
      })
      .catch((error) => console.error("Error fetching category", error));
  }, [choice]);

  const handleCategoryChoice = (e) => {
    const categoryName = e.target.value;
    setChoice(categoryName);
    const found = categories.find((cat) => cat.name === categoryName);
    setSelectedCategoryId(found?.id || "");
  };

  const addNewTask = async (e) => {
    e.preventDefault();
    if (!newTaskInput.trim()) return;

    const newTask = {
      id: v4(),
      task: newTaskInput,
      completed: false,
    };

    try {
      // Step 1: Get the current category
      const res = await axios.get(
        `http://localhost:5000/categories/${selectedCategoryId}`
      );
      const currentCategory = res.data;

      // Step 2: Append new task
      const updatedCategory = {
        ...currentCategory,
        tasks: [...currentCategory.tasks, newTask],
      };

      // Step 3: PUT updated category back
      await axios.put(
        `http://localhost:5000/categories/${selectedCategoryId}`,
        updatedCategory
      );

      // Step 4: Update UI
      setTasks((prev) => [...prev, newTask]);
      setNewTaskInput("");
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  return (
    <div>
      <div className="card mb-4">
        <label htmlFor="dropdown" className="font-semibold">
          Choose a category:
        </label>
        <br />
        <select
          name="dropdown"
          className="dropdown border rounded p-2 mt-2"
          onChange={handleCategoryChoice}
        >
          <option value="">-- Select --</option>
          {categories.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      {choice && (
        <div className="mb-4 border p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-2">{choice}</h2>
          {tasks.length > 0 ? (
            <ul className="list-disc list-inside">
              {tasks.map((task) => (
                <li key={task.id}>
                  Task: {task.task} <br />
                  Completed: {task.completed.toString()}
                </li>
              ))}
            </ul>
          ) : (
            <p>No tasks found for this category.</p>
          )}
          <form onSubmit={addNewTask} className="card">
            <input
              className="border rounded"
              type="text"
              value={newTaskInput}
              placeholder="Enter a task to add"
              onChange={(e) => setNewTaskInput(e.target.value)}
            />
            <br />
            <button
              type="submit"
              className="p-2 m-2 border rounded bg-blue-200 hover:bg-blue-500"
            >
              Add Task
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
