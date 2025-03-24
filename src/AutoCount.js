import { use } from "react";
import useAutoCount from "./useAutoCount";

export default function AutoCount() {
  const { count, paused, handlePaused } = useAutoCount();

  return (
    <div>
      <button onClick={handlePaused}>{paused ? "Start" : "Stop"}</button>
      <h1>{count}</h1>
    </div>
  );
}
