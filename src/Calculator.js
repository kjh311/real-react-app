import React, { useState } from "react";

export default function Calculator() {
  const [num, setNum] = useState("");

  function add(a, b) {
    return a + b;
  }
  function subtract(a, b) {
    return a - b;
  }

  function multiply(a, b) {
    return a * b;
  }

  function divide(a, b) {
    return a / b;
  }

  function operation(a, b, callback) {
    return callback(a, b);
  }

  console.log(operation(2, 2, add));

  console.log(operation(2, 6, multiply));

  console.log(operation(2, 4, subtract));

  return (
    <div>
      <h1>Calculator</h1>
    </div>
  );
}
