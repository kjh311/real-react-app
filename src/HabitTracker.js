import { useState, useEffect } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import axios from "axios";
import "./heatmapStyles.css";

const today = new Date().toISOString().split("T")[0]; // Format YYYY-MM-DD

export default function HabitTracker() {
  const [habits, setHabits] = useState([]);
  const [newHabit, setNewHabit] = useState("");

  // Fetch habits from backend
  useEffect(() => {
    axios
      .get("http://localhost:5000/habits")
      .then((res) =>
        setHabits(
          res.data.map((habit) => ({
            ...habit,
            name: habit.name || habit.habit, // Standardize name
            calendar: habit.calendar || [], // Ensure calendar is always an array
          }))
        )
      )
      .catch((err) => console.error("Error fetching habits", err));
  }, []);

  // Add a new habit
  const addNewHabit = (e) => {
    e.preventDefault();
    if (!newHabit.trim()) return;

    const habitData = {
      name: newHabit,
      calendar: [],
    };

    axios
      .post("http://localhost:5000/habits", habitData)
      .then((res) => {
        setHabits((prev) => [...prev, res.data]); // Use backend ID
        setNewHabit("");
      })
      .catch((err) => console.error("Error adding habit", err));
  };

  // Increment today's count for a habit
  const handleIncrement = (habitId) => {
    setHabits((prevHabits) =>
      prevHabits.map((habit) => {
        if (habit.id === habitId) {
          const updatedCalendar = [...(habit.calendar || [])];

          // Find today's entry
          const todayEntry = updatedCalendar.find(
            (entry) => entry.date === today
          );

          if (todayEntry) {
            todayEntry.count += 1; // Increment count
          } else {
            updatedCalendar.push({ date: today, count: 1 }); // Add new entry
          }

          const updatedHabit = { ...habit, calendar: updatedCalendar };

          // Update backend
          axios
            .put(`http://localhost:5000/habits/${habitId}`, updatedHabit)
            .catch((err) => console.error("Error updating habit", err));

          return updatedHabit;
        }
        return habit;
      })
    );
  };

  // Delete Habit
  const deleteHabit = (id) => {
    if (window.confirm("Delete this habit???")) {
      axios
        .delete(`http://localhost:5000/habits/${id}`)
        .then(() => {
          setHabits((prevHabits) =>
            prevHabits.filter((habit) => habit.id !== id)
          );

          console.log(`Habit ${id} deleted`);
        })
        .catch((error) => console.error("Error deleting habit", error));
    }
  };

  return (
    <div>
      <h1>Habit Tracker</h1>
      <form onSubmit={addNewHabit}>
        <input
          type="text"
          placeholder="Enter new Habit"
          value={newHabit}
          className="border rounded p-2 m-2"
          onChange={(e) => setNewHabit(e.target.value)}
        />
        <button
          className="border rounded bg-red-500 hover:bg-red-700 p-2 m-2"
          type="submit"
        >
          Add Habit
        </button>
      </form>

      {habits.map((habit) => (
        <div key={habit.id} className="habit-container calendar">
          <button
            className="deleteButton"
            onClick={() => deleteHabit(habit.id)}
          >
            X
          </button>
          <h2>{habit.name}</h2>
          <CalendarHeatmap
            startDate={
              new Date(today.split("-")[0], new Date().getMonth() - 12, 1)
            }
            endDate={new Date()}
            values={habit.calendar}
            classForValue={(value) =>
              !value ? "color-empty" : `color-scale-${value.count}`
            }
          />
          <button onClick={() => handleIncrement(habit.id)}>
            +1 for Today
          </button>
        </div>
      ))}
    </div>
  );
}
