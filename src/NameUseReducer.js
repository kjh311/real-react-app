import { useReducer } from "react";

const initialState = { name: "Kevin" };

function reducer(state, action) {
  switch (action.type) {
    case "David":
      return { name: "David" };
    case "Eric":
      return { name: "Eric" };
    case "George":
      return { name: "George" };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

export default function NameUseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>{state.name}</h1>
      <div>
        <button
          className="border rounded p-4 bg-blue-500 m-2 text-white"
          onClick={() => dispatch({ type: "David" })}
        >
          David
        </button>
      </div>
      <div>
        <button
          className="border rounded p-4 bg-blue-500 m-2 text-white"
          onClick={() => dispatch({ type: "Eric" })}
        >
          Eric
        </button>
      </div>
      <div>
        <button
          className="border rounded p-4 bg-blue-500 m-2 text-white"
          onClick={() => dispatch({ type: "George" })}
        >
          George
        </button>
      </div>
      <div>
        <button
          className="border rounded p-4 bg-blue-500 m-2 text-white"
          onClick={() => dispatch({ type: "reset" })}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
