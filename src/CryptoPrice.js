import { useState, useEffect } from "react";
import axios from "axios";

export default function CryptoPrice() {
  const [input, setInput] = useState(""); // User input for coin name
  const [price, setPrice] = useState(null); // To store the price of the coin
  const [error, setError] = useState(""); // To store any error message

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent form from reloading the page
    if (input.trim() === "") return;

    setError(""); // Reset error message
    setPrice(null); // Reset previous price

    axios
      .get(
        `https://api.coingecko.com/api/v3/simple/price?ids=${input.toLowerCase()}&vs_currencies=usd`
      )
      .then((res) => {
        if (res.data[input.toLowerCase()]) {
          setPrice(res.data);
        } else {
          setError("Coin not found. Please check the coin name.");
        }
      })
      .catch((error) => {
        setError("Error fetching price of coin.");
        console.error("Error fetching price of coin", error);
      });
  };

  useEffect(() => {
    console.log("Current price data: ", price); // Debugging output
  }, [price]);

  return (
    <div>
      <h1>Crypto Price</h1>
      <div className="card">
        <form onSubmit={handleSearch} className="p-2 m-2 border rounded">
          <input
            type="text"
            value={input}
            placeholder="Enter a coin"
            className="p-2 m-2 border rounded"
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="p-2 m-2 bg-blue-300 hover:bg-blue-600"
          >
            Search
          </button>
        </form>

        <br />
        {error && <h2>{error}</h2>}

        {price && price[input.toLowerCase()] ? (
          <h2>
            {input}: ${price[input.toLowerCase()].usd}
          </h2>
        ) : (
          <h2>Enter a coin to get the price</h2>
        )}
      </div>
    </div>
  );
}
