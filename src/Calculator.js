import { useState, useEffect } from "react";

export default function Calculator() {
  const [x, setX] = useState(NaN);
  const [y, setY] = useState(NaN);
  const [outcome, setOutcome] = useState(NaN);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (x !== 0 || y !== 0) {
      setError(false);
    }
    setX(NaN);
    setY(NaN);
  }, [outcome]);

  function add(x, y) {
    setOutcome(x + y);
  }

  function subtract(x, y) {
    setOutcome(x - y);
  }

  function multiply(x, y) {
    setOutcome(x * y);
  }

  function divide(x, y) {
    if (x === 0 || y === 0) {
      setError(true);
      setOutcome(NaN);
    } else {
      setOutcome(x / y);
      setError(false);
    }
  }

  function operation(x, y, callback) {
    return callback(parseInt(x), parseInt(y));
  }

  return (
    <div>
      <div>
        <input
          type="number"
          value={x}
          placeholder="enter 1st number"
          className="p-4 m-2 border rounded"
          onChange={(e) => setX(e.target.value)}
        />
        {/* {x} */}
      </div>
      <div>
        <input
          type="number"
          value={y}
          placeholder="enter 2nd number"
          className="p-4 m-2 border rounded"
          onChange={(e) => setY(e.target.value)}
        />
        {/* {y} */}
      </div>
      <div>
        <button
          className="p-2 m-2 border rounded bg-blue-200 hover:bg-blue-500"
          onClick={() => operation(x, y, add)}
        >
          Add
        </button>
      </div>
      <div>
        <button
          className="p-2 m-2 border rounded bg-blue-200 hover:bg-blue-500"
          onClick={() => operation(x, y, subtract)}
        >
          Subtract
        </button>
      </div>
      <div>
        <button
          className="p-2 m-2 border rounded bg-blue-200 hover:bg-blue-500"
          onClick={() => operation(x, y, multiply)}
        >
          Multiply
        </button>
      </div>
      <div>
        <button
          className="p-2 m-2 border rounded bg-blue-200 hover:bg-blue-500"
          onClick={() => operation(x, y, divide)}
        >
          Divide
        </button>
      </div>
      {outcome}
      <div>{error && "Can't divide by 0"}</div>
    </div>
  );
}
