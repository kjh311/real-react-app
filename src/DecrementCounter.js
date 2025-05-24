import React from "react";
import { useCounter } from "./zustand/store";

const DecrementCounter = () => {
  const decrementCounter = useCounter((state) => state.decrementCount);
  return (
    <div>
      <button onClick={decrementCounter}>Decrement Counter</button>
    </div>
  );
};

export default DecrementCounter;
