import { useState, useEffect } from "react";

export default function Calculator() {
  const [x, setX] = useState("");
  const [y, setY] = useState("");
  const [outcome, setOutcome] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (x && y && !isNaN(x) && !isNaN(y)) {
      setError(false); // Clear any previous errors
    }
  }, [x, y]);

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
    if (y === 0 || x === 0) {
      setError(true);
      setOutcome(null);
    } else {
      setOutcome(x / y);
      setError(false);
    }
  }

  function operation(x, y, callback) {
    if (!isNaN(x) && !isNaN(y)) {
      callback(parseFloat(x), parseFloat(y));
    } else {
      setError(true);
    }
  }

  return (
    <div>
      <div>
        <input
          type="number"
          value={x}
          placeholder="Enter 1st number"
          className="p-4 m-2 border rounded"
          onChange={(e) => setX(e.target.value)}
        />
      </div>
      <div>
        <input
          type="number"
          value={y}
          placeholder="Enter 2nd number"
          className="p-4 m-2 border rounded"
          onChange={(e) => setY(e.target.value)}
        />
      </div>
      <div>
        <button
          className="p-2 m-2 border rounded bg-blue-200 hover:bg-blue-500"
          onClick={() => operation(x, y, add)}
        >
          Add
        </button>
        <button
          className="p-2 m-2 border rounded bg-blue-200 hover:bg-blue-500"
          onClick={() => operation(x, y, subtract)}
        >
          Subtract
        </button>
        <button
          className="p-2 m-2 border rounded bg-blue-200 hover:bg-blue-500"
          onClick={() => operation(x, y, multiply)}
        >
          Multiply
        </button>
        <button
          className="p-2 m-2 border rounded bg-blue-200 hover:bg-blue-500"
          onClick={() => operation(x, y, divide)}
        >
          Divide
        </button>
      </div>

      <div>
        {outcome !== null && !error && <h2>Result: {outcome}</h2>}
        {error && (
          <div className="text-red-500">Can't divide by 0 or invalid input</div>
        )}
      </div>
    </div>
  );
}
