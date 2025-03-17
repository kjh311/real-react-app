import React, { useState } from "react";

function ItemList2() {
  const [items, setItems] = useState([]);

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const addItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter an Item"
      />
      <button onClick={addItem}>Enter Item</button>
      <div>
        <ul>
          {items.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default ItemList2;
