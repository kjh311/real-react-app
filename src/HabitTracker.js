import { useState, useEffect } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import axios from "axios";
import "./heatmapStyles.css";

const today = new Date().toISOString().split("T")[0]; // Format as YYYY-MM-DD

export default function HabitTracker() {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/habits")
      .then((res) => setHabits(res.data))
      .catch((err) => console.error("Error fetching habits", err));
  }, []);

  // Increment today's count for a habit
  const handleIncrement = (habitId) => {
    setHabits((prevHabits) =>
      prevHabits.map((habit) => {
        if (habit.id === habitId) {
          const todayEntry = habit.calendar.find(
            (entry) => entry.date === today
          );
          if (todayEntry) {
            todayEntry.count += 1; // Increment count
          } else {
            habit.calendar.push({ date: today, count: 1 }); // Add new entry
          }

          // Send update to backend
          axios
            .put(`http://localhost:5000/habits/${habitId}`, habit)
            .catch((err) => console.error("Error updating habit", err));
        }
        return habit;
      })
    );
  };

  return (
    <div>
      <h1>Habit Tracker</h1>
      {habits.map((habit) => (
        <div key={habit.id} className="habit-container calendar">
          <h2>{habit.name}</h2>
          <CalendarHeatmap
            startDate={
              new Date(today.split("-")[0], new Date().getMonth() - 5, 1)
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
