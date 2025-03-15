import React, { useState, useEffect } from "react";

export default function StarWars() {
  const [info, setInfo] = useState({});
  const [num, setNum] = useState("");
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    if (input.trim !== "") {
      e.preventDefault();
      setNum(input);
      setInput("");
      console.log(input);
    }
  };

  useEffect(() => {
    const getInfo = async () => {
      try {
        const response = await fetch(`https://swapi.dev/api/people/${num}/`);
        const data = await response.json();
        setInfo(data);
      } catch (error) {
        console.log("Error fetching info", error);
      }
    };

    getInfo();
  }, [num]);

  useEffect(() => {
    console.log("Updated info:", info);
  }, [info]);

  return (
    <div>
      <input
        type="text"
        value={input}
        placeholder="Enter a number"
        onChange={handleInput}
      />

      <button onClick={handleSubmit}>Sumbit</button>

      {info.name ? (
        <div>
          <h1>{info.name}</h1>
          <p>Height: {info.height}</p>
          <p>Hair Color: {info.hair_color}</p>
          <p>Eye Color: {info.eye_color}</p>
        </div>
      ) : (
        <div>"Loading..."</div>
      )}
    </div>
  );
}
