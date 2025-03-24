import { useState, useEffect, createContext } from "react";
import DayNightChild1 from "./DayNightChild1";
import DayNightChild2 from "./DayNightChild2";
import DayNightButton from "./DayNightButton";

export const Theme = createContext();

export default function DayNightMode() {
  const [lightMode, setLightMode] = useState(true);

  const handleChange = () => {
    setLightMode((prev) => !prev);
  };

  return (
    <div className={`${lightMode ? "light-mode" : "dark-mode"}`}>
      Day night
      <Theme.Provider value={{ lightMode, handleChange }}>
        <DayNightButton />
        <DayNightChild1 />
        <DayNightChild2 />
      </Theme.Provider>
      <h1>{lightMode ? "Light Mode" : "Dark Mode"}</h1>
    </div>
  );
}
