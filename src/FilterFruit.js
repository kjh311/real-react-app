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

      {/* <div>
        {filteredFruits.length > 0 ? (
          filteredFruits.map((fruit, index) => <h1 key={index}>{fruit}</h1>)
        ) : (
          <h1>No fruits found</h1>
        )}
      </div> */}
      <ul>
        {filteredFruits.length > 0 ? (
          filteredFruits.map((fruit, index) => {
            const regex = new RegExp(`(${fruitInput})`, "i");
            const parts = fruit.split(regex);

            return (
              <li key={index}>
                {parts.map((part, i) =>
                  regex.test(part) ? <strong key={i}>{part}</strong> : part
                )}
              </li>
            );
          })
        ) : (
          <li>No fruits found</li>
        )}
      </ul>
    </div>
  );
}
