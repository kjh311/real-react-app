import useCreateList from "./hooks/useCreateList";

export default function CreateList() {
  // Use the custom hook to manage state and handlers
  const { list, input, handleInput, handleSubmit } = useCreateList();

  return (
    <div>
      <input
        type="text"
        value={input}
        placeholder="Enter an item"
        onChange={handleInput}
      />
      <button onClick={handleSubmit}>Submit</button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
