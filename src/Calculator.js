import React, { useState } from "react";

export default function Calculator() {
  const [numA, setNumA] = useState("");
  const [numB, setNumB] = useState("");
  const [addResult, setAddResult] = useState(null);
  const [subtractResult, setSubtractResult] = useState(null);

  function handleA(e) {
    setNumA(e.target.value);
  }

  function handleB(e) {
    setNumB(e.target.value);
  }

  function add(numA, numB) {
    return numA + numB;
  }

  function subtract(numA, numB) {
    return numA - numB;
  }

  function multiply(numA, numB) {
    return numA * numB;
  }

  function divide(numA, numB) {
    return numA / numB;
  }

  function operation(numA, numB, callback) {
    return callback(numA, numB);
  }

  function handleAddSubmit() {
    const a = parseFloat(numA);
    const b = parseFloat(numB);
    if (isNaN(a) || isNaN(b)) {
      alert("Please enter valid numbers.");
      return;
    }
    const additionResult = operation(a, b, add);
    setAddResult(additionResult);
    console.log("Addition Result:", additionResult);
  }

  function handleSubtractionSubmit() {
    const a = parseFloat(numA);
    const b = parseFloat(numB);
    if (isNaN(a) || isNaN(b)) {
      alert("Please enter valid numbers.");
      return;
    }
    const subtractionResult = operation(a, b, subtract);
    setSubtractResult(subtractionResult);
    // setSubtractResult(null);
    console.log("Subtraction Result:", subtractionResult);
  }

  return (
    <div>
      <h1>Calculator</h1>
      <input
        type="number"
        value={numA}
        onChange={handleA}
        placeholder="Enter value A"
      />
      <input
        type="number"
        value={numB}
        onChange={handleB}
        placeholder="Enter value B"
      />
      <div>
        <button onClick={handleAddSubmit}>Add</button>
        {addResult !== null && <p>Result: {addResult}</p>}
      </div>
      <div>
        <button onClick={handleSubtractionSubmit}>Subtract</button>
        {subtractResult !== null && <p>Result: {subtractResult}</p>}
      </div>
    </div>
  );
}
