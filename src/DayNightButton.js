import { useContext } from "react";
import { Theme } from "./DayNightMode";

export default function DayNightButton() {
  const { handleChange } = useContext(Theme);

  return (
    <div>
      <br />
      <button onClick={handleChange}>Toggle Theme</button>
    </div>
  );
}
