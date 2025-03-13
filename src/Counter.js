import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const resetCount = () => {
    setCount(0);
  };

  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decreaseCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <p>You've clicked {count} times!</p>
      <div>
        <button onClick={increaseCount}>Increase</button>
      </div>
      <div>
        <button onClick={decreaseCount}>Decrease</button>
      </div>
      <div>
        <button onClick={resetCount}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
