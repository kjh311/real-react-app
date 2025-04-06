import { useReducer, useState } from "react";

const init = () => {
  const stored = localStorage.getItem("jobs");
  return stored ? JSON.parse(stored) : [];
};

const jobsReducer = (state, action) => {
  switch (action.type) {
    case "ADD_JOB":
      const newJobs = [...state, action.payload];
      localStorage.setItem("jobs", JSON.stringify(newJobs));
      return newJobs;

    case "REMOVE_JOB":
      const filteredJobs = state.filter((job) => job.id !== action.payload);
      localStorage.setItem("jobs", JSON.stringify(filteredJobs));
      return filteredJobs;

    case "TOGGLE_COMPLETE":
      const updatedJobs = state.map((job) =>
        job.id === action.payload ? { ...job, completed: !job.completed } : job
      );
      localStorage.setItem("jobs", JSON.stringify(updatedJobs));
      return updatedJobs;

    default:
      return state;
  }
};

export default function TodoReducer() {
  const [input, setInput] = useState("");
  const [jobs, dispatch] = useReducer(jobsReducer, [], init);

  const handleAdd = () => {
    if (input.trim() === "") return;

    dispatch({
      type: "ADD_JOB",
      payload: {
        id: Date.now(),
        text: input,
        completed: false,
      },
    });
    setInput("");
  };

  return (
    <div>
      <h2>Todo Reducer</h2>
      <form onSubmit={handleAdd} className="card">
        <input
          type="text"
          placeholder="Enter task"
          className="p-2 m-2 border rounded"
          onChange={(e) => setInput(e.target.value)}
        />
        <br />
        <button
          className="p-2 m-2 border rounded bg-blue-400 hover:bg-blue-600"
          type="submit"
        >
          Add Task
        </button>
      </form>
      <ul>
        {jobs.map((job) => (
          <li
            key={job.id}
            style={{ textDecoration: job.completed ? "line-through" : "none" }}
          >
            {job.text}
            {/* <br /> */}
            {/* {job.id} */}
            <button
              className="p-2 m-2"
              onClick={() =>
                dispatch({ type: "TOGGLE_COMPLETE", payload: job.id })
              }
            >
              ✅
            </button>
            <button
              className="p-2 m-2"
              onClick={() => dispatch({ type: "REMOVE_JOB", payload: job.id })}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
