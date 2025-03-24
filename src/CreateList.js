import useCreateList from "./hooks/useCreateList";

export default function CreateList() {
  const { list, input, handleInput, handleSubmit } = useCreateList();

  return (
    <div>
      <input
        type="text"
        placeholder="Enter an Item"
        value={input}
        onChange={handleInput}
      />
      <button onClick={handleSubmit}>Submit</button>
      {list.map((item, index) => {
        return <div key={index}>{item}</div>;
      })}
    </div>
  );
}
