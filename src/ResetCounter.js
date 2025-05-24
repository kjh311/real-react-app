import React from "react";
import { useCounter } from "./zustand/store";

const ResetCounter = () => {
  const resetCounter = useCounter((state) => state.resetCounter);

  return (
    <div>
      <button onClick={resetCounter}>Reset</button>
    </div>
  );
};

export default ResetCounter;
