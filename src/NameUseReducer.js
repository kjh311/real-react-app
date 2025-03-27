import { useReducer } from "react";

const initialState = { name: "Kevin" };

function reducer(state, action) {
  switch (action.type) {
    case "David":
      return { name: "David" };
    case "Jeff":
      return { name: "Jeff" };
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
      <button onClick={() => dispatch({ type: "David" })}>David</button>
      <button onClick={() => dispatch({ type: "Jeff" })}>Jeff</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}
