import { useContext } from "react";
import { Theme } from "./DayNightMode";

export default function DayNightChild1() {
  const { lightMode } = useContext(Theme);
  return (
    <div className={`${lightMode ? "light-mode-red" : "dark-mode-red"} border`}>
      Child 1
    </div>
  );
}
