import React, { useRef, useEffect, useState } from "react";

export default function UseRef() {
  const inputRef = useRef(null);
  const counterRef = useRef(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleClick = () => {
    setCount(count + 1);
    counterRef.current += 1;
    console.table("Count: " + count);
    console.log(`CounterRef: ${counterRef.current}`);
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Focus, Danial San!" />
      <div>
        <button onClick={handleClick}>Increment</button>
      </div>
    </div>
  );
}
