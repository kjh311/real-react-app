import React, { useState, useEffect } from "react";

export default function FilterFruit() {
  const [fruitInput, setFruitInput] = useState("");
  const [fruit, setFruit] = useState([]);

  useEffect(() => {
    setFruit(fruitArray);
  }, []);

  //   useEffect(() => {
  //     console.log("Fruit change");
  //   }, [{ fruit }]);

  const fruitArray = [
    "Banana",
    "Cherry",
    "Strawberry",
    "Apple",
    "Nectrine",
    "Apricot",
    "Orange",
    "Grape",
  ];

  const handleInput = (e) => {
    setFruitInput(e.target.value);
  };

  const filteredFruits = fruit.filter((fruit) =>
    fruit.toLowerCase().includes(fruitInput.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={fruitInput}
        placeholder="Enter a Fruit"
        onChange={handleInput}
      />
      {/* <h1>{fruitInput}</h1> */}
      {/* {fruit.map((item, index) => {
        return <h1 key={index}>{item}</h1>;
      })} */}

      <div>
        {filteredFruits.length > 0 ? (
          filteredFruits.map((fruit, index) => <h1 key={index}>{fruit}</h1>)
        ) : (
          <h1>No fruits found</h1>
        )}
      </div>
    </div>
  );
}
