import { useState, useEffect } from "react";
import axios from "axios";

export default function DrinkRecipes() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState([]);
  const [error, setError] = useState("");

  //   useEffect(() => {
  //     axios
  //       .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`)
  //       .then((res) => setResponse(res.data.drinks))
  //       .catch((error) => console.error("Error finding drink", error));
  //     setInput("");
  //   }, []);

  //   useEffect(() => {
  //     console.log(response);
  //   }, [response]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    if (input.trim() !== "") {
      axios
        .get(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`
        )
        .then((res) => setResponse(res.data.drinks))
        .catch((error) => setError(error));
    }

    setInput("");
  };

  return (
    <div>
      <form
        className="border rounded p-4 m-2 bg-blue-200"
        onSubmit={handleSearchSubmit}
      >
        <input
          className="border rounded p-4"
          type="text"
          value={input}
          placeholder="Enter a drink name"
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="border rounded bg-red-300 p-4" type="submit">
          Search
        </button>
      </form>
      {response !== null &&
        response.map((drink, index) => {
          return (
            <div key={index} className="border rounded p-4 m-2 bg-blue-200">
              <h1 className="text-xl m-2 font-bold">{drink.strDrink}</h1>
              <h3 className="m-2">Glass: {drink.strGlass}</h3>
              <img
                src={drink.strDrinkThumb}
                alt={drink.strDrink}
                className=" mx-auto rounded"
              />
              <h3 className="m-2">{drink.strInstructions}</h3>
            </div>
          );
        })}
      {error}
    </div>
  );
}
