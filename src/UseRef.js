import React, { useRef, useState } from "react";

export default function UseRef() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const handleClick = () => {
    setCount(count + 1);
    countRef.current += 1;
    console.log(`Count: ${count}`);
    console.log(`CountRef: ${countRef.current}`);
  };

  return (
    <div>
      <button onClick={handleClick}>Inrement</button>
    </div>
  );
}
