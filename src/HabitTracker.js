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
      name: newHabit.toUpperCase(),
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

  //check habit streak
  const calculateStreak = (calendar) => {
    if (!calendar || calendar.length === 0) return 0;

    // Sort calendar entries by date
    const sortedCalendar = calendar
      .map((entry) => ({
        ...entry,
        date: new Date(entry.date), // Convert date string to Date object
      }))
      .sort((a, b) => a.date - b.date); // Sort by date in ascending order

    let streak = 1; // Minimum streak is 1 if there's at least one habit entry
    let maxStreak = 1; // Max streak initialized to 1

    // Iterate through the calendar and check for consecutive days
    for (let i = 1; i < sortedCalendar.length; i++) {
      const prevDate = sortedCalendar[i - 1].date;
      const currentDate = sortedCalendar[i].date;

      // Check if the current date is the next day
      const nextDay = new Date(prevDate);
      nextDay.setDate(prevDate.getDate() + 1);

      if (currentDate.getTime() === nextDay.getTime()) {
        streak++; // Increment streak if consecutive day
      } else {
        streak = 1; // Reset streak if not consecutive
      }

      // Update max streak
      maxStreak = Math.max(maxStreak, streak);
    }

    return maxStreak;
  };

  //Total count of habits performed
  const calculateTotalCount = (calendar) => {
    // Sum up the 'count' values from the calendar entries
    return calendar.reduce((total, entry) => total + entry.count, 0);
  };

  return (
    <div className=" ">
      <h1 className="font-bold text-xl">Habit Tracker</h1>
      <form onSubmit={addNewHabit}>
        <input
          type="text"
          placeholder="Enter new Habit"
          value={newHabit}
          className="border rounded p-2"
          onChange={(e) => setNewHabit(e.target.value)}
        />
        <button
          className="border rounded bg-red-500 hover:bg-red-700 p-2 m-2 hover:text-white"
          type="submit"
        >
          Add Habit
        </button>
      </form>

      {habits.map((habit) => (
        <div key={habit.id} className="habit-container calendar bg-blue-200">
          <button
            className="deleteButton bg-red-300 hover:bg-red-500"
            onClick={() => deleteHabit(habit.id)}
          >
            X
          </button>
          <h2 className="font-bold text-xl underline">{habit.name}</h2>

          {/* STREAK */}
          {calculateStreak(habit.calendar) > 1 ? (
            <p>Streak: {calculateStreak(habit.calendar)} days!! </p>
          ) : (
            ""
          )}
          {calculateStreak(habit.calendar) === 1 ? (
            <p>Streak: {calculateStreak(habit.calendar)} day </p>
          ) : (
            ""
          )}

          <p>Total Count: {calculateTotalCount(habit.calendar)} times</p>

          <CalendarHeatmap
            startDate={
              new Date(today.split("-")[0], new Date().getMonth() - 12, 1)
            }
            endDate={new Date()}
            values={habit.calendar}
            classForValue={(value) =>
              !value
                ? "color-empty"
                : `color-scale-${value.count} border-square`
            }
          />
          <button
            className="border rounded bg-blue-300 hover:bg-blue-500 p-2 m-2 hover:text-white"
            onClick={() => handleIncrement(habit.id)}
          >
            I did this today!
          </button>
        </div>
      ))}
    </div>
  );
}
