import { useContext } from "react";
import { Theme } from "./DayNightMode";

export default function DayNightChild2() {
  const { lightMode } = useContext(Theme);
  return (
    <div className={`${lightMode ? "light-mode-red" : "dark-mode-red"} border`}>
      Child 2
    </div>
  );
}
