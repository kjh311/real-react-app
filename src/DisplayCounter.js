import React from "react";
import { useCounter } from "./zustand/store";

const DisplayCounter = () => {
  const counter = useCounter((state) => state.counter);
  return <div>Counter: {counter}</div>;
};

export default DisplayCounter;
