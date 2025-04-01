import { useState, useEffect } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import "./heatmapStyles.css"; // Ensure your custom styles are imported

const today = new Date();

export default function HabitTracker() {
  const sampleData = [
    { date: "2025-03-01", count: 1 },
    { date: "2025-03-05", count: 2 },
    { date: "2025-03-10", count: 3 },
    { date: "2025-02-10", count: 4 },
    { date: "2025-01-10", count: 5 },
    { date: "2025-01-09", count: 6 },
    { date: "2025-01-09", count: 7 },
    { date: "2025-02-09", count: 8 },
    { date: "2025-01-01", count: 9 },
    { date: "2025-01-02", count: 10 },
  ];

  return (
    <div className="calendar">
      <CalendarHeatmap
        startDate={new Date(today.getFullYear(), today.getMonth() - 5, 1)}
        endDate={today}
        values={sampleData}
        classForValue={(value) => {
          if (!value) return "color-empty";
          return `color-scale-${value.count}`;
        }}
      />
    </div>
  );
}
