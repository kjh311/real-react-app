import { useState, useEffect } from "react";
import axios from "axios";

export default function CountryAPI() {
  const [startSlice, setStartSlice] = useState(0);
  const [endSlice, setEndSlice] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setCountries(res.data.slice(startSlice, endSlice)))
      .catch((error) => console.error("Error Fetching Countries", error));
  }, [startSlice, endSlice]);

  const handleNextButton = () => {
    setStartSlice((prev) => prev + 5);
    setEndSlice((prev) => prev + 5);
  };

  const handlePreviousButton = () => {
    setStartSlice((prev) => prev - 5);
    setEndSlice((prev) => prev - 5);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    axios
      .get(`https://restcountries.com/v3.1/name/${searchTerm}`)
      .then((res) => setCountries(res.data))
      .catch((error) => console.error("Error finding Country", error));
    setSearchTerm("");
  };

  useEffect(() => {
    console.log(countries);
  }, [countries]);

  return (
    <div>
      <div>
        <form onSubmit={handleSearch} className="card">
          <h1>Search:</h1>
          <input
            className="border rounded "
            type="text"
            value={searchTerm}
            placeholder="Enter a country to search"
            required
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <br />
          <br />
          <button
            className="border rounded p-4 bg-blue-500 text-white"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
      <div>
        {startSlice > 0 && (
          <button
            className="p-2 text-white bg-blue-500 border rounded"
            onClick={handlePreviousButton}
          >
            Previous
          </button>
        )}
        <button
          className="p-2 text-white bg-blue-500 border rounded"
          onClick={handleNextButton}
        >
          Next
        </button>
      </div>
      {countries.map((country, index) => {
        return (
          <div
            className="p-4 rounded shadow max-w-md border mx-auto"
            key={index}
          >
            <h1 className="font-bold text-xl mb-2">{country.name.common}</h1>
            <p>Capital: {country.capital}</p>
            <img
              className="image mx-auto"
              src={country.flags.png}
              alt={country.name.common}
            />
          </div>
        );
      })}
    </div>
  );
}
