import React from "react";
import { useCounter } from "./zustand/store";

const CounterControl = () => {
  const incrementCounter = useCounter((state) => state.incrementCounter);

  return (
    <div>
      <button onClick={incrementCounter}>Increment Counter</button>
    </div>
  );
};

export default CounterControl;
