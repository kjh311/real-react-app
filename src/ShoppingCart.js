import { useReducer } from "react";

const initialState = [];

function cartReducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, { id: action.id, name: action.name, quantity: 1 }];
    case "remove":
      return state.filter((item) => item.id !== action.id);
    case "update":
      return state.map((item) =>
        item.id === action.id ? { ...item, quantity: action.quantity } : item
      );
    default:
      return state;
  }
}

export default function ShoppingCart() {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  return (
    <div>
      {cart.length === 0 && (
        <button
          className="m-2 p-4 bg-blue-500 text-white border rounded"
          onClick={() => dispatch({ type: "add", id: 1, name: "Apple" })}
        >
          Add Apple
        </button>
      )}

      {cart.map((item) => (
        <div key={item.id}>
          <span>
            {item.name} - {item.quantity}
          </span>
          <button
            className="m-2 p-4 bg-blue-500 text-white border rounded"
            onClick={() =>
              dispatch({
                type: "update",
                id: item.id,
                quantity: item.quantity + 1,
              })
            }
          >
            +
          </button>
          <button
            className="m-2 p-4 bg-blue-500 text-white border rounded"
            onClick={() =>
              dispatch({
                type: "update",
                id: item.id,
                quantity: item.quantity - 1,
              })
            }
          >
            -
          </button>
          <button
            className="m-2 p-4 bg-red-500 text-white border rounded"
            onClick={() => dispatch({ type: "remove", id: item.id })}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
