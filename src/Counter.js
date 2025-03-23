import useCounter from "./hooks/useCounter";

export default function Counter() {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div>
      <h1>{`Count: ${count}`}</h1>
      <button onClick={increment}>Add</button>
      <button onClick={decrement}>minus</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}
