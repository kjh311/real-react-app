import React, { useState } from "react";

function ItemList() {
  // Declare a state variable 'items' with an initial empty array
  const [items, setItems] = useState([]);
  // Declare a state variable 'inputValue' to track the current input
  const [inputValue, setInputValue] = useState("");

  // Function to handle input changes
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Function to add a new item to the list
  const addItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]);
      setInputValue(""); // Clear the input field after adding
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter an item"
      />
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
