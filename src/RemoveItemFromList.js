import useRemoveItem from "./useRemoveItem";

export default function RemoveItemFromList() {
  const { input, list, handleInput, handleSubmit, removeItem } =
    useRemoveItem();
  return (
    <div>
      <input
        type="text"
        value={input}
        placeholder="Enter an Item"
        onChange={handleInput}
      />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
      {list.map((item, index) => {
        return (
          <div key={index}>
            {item}
            <button onClick={() => removeItem(index)}>Remove</button>
          </div>
        );
      })}
    </div>
  );
}
