import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const resetCount = () => {
    setCount(0);
  };

  return (
    <div>
      <p>You've clicked {count} times!</p>
      <div>
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </div>
      <div>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
      </div>
      <div>
        <button onClick={() => resetCount()}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
