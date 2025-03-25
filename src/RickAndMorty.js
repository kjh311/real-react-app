import { useState, useEffect } from "react";

export default function RickAndMorty() {
  const [info, setInfo] = useState({});
  const [num, setNum] = useState(1); // Initialize as an empty string
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      setNum(input); // Set the number as a string
    }
    setInput(""); // Clear the input after submitting
  };

  const handleNext = () => {
    setNum(num + 1);
  };

  const handlePrevious = () => {
    setNum(num - 1);
  };

  useEffect(() => {
    if (num === "") return; // Avoid fetching if `num` is empty

    const fetchCharacter = async () => {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/${num}`
        );
        if (!response.ok) {
          throw new Error("Character not found");
        }
        const data = await response.json();
        setInfo(data);
      } catch (error) {
        console.log("Error fetching character:", error);
        setInfo({});
      }
    };
    fetchCharacter();
  }, [num]);

  useEffect(() => {
    console.log(info);
    console.log(num);
  }, [info, num]);

  return (
    <div>
      <input
        type="number"
        placeholder="Enter a number"
        value={input}
        onChange={handleInput}
      />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
      {info.name !== undefined ? (
        <div className="card">
          <h1>{info.name}</h1>
          <img src={info.image} alt="charcter pic" />
          <div>
            {num > 1 && <button onClick={handlePrevious}>Previous</button>}
            <button onClick={handleNext}>Next</button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
