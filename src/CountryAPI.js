import { useState, useEffect } from "react";
import axios from "axios";

export default function CountryAPI() {
  const [startSlice, setStartSlice] = useState(0);
  const [endSlice, setEndSlice] = useState(5);

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

  useEffect(() => {
    console.log(countries);
  }, [countries]);

  return (
    <div>
      <div>
        {startSlice > 0 && (
          <button onClick={handlePreviousButton}>Previous</button>
        )}
        <button onClick={handleNextButton}>Next</button>
      </div>
      {countries.map((country, index) => {
        return (
          <div className="card" key={index}>
            <h1>{country.name.common}</h1>
            <p>Capital: {country.capital}</p>
            <img
              className="image"
              src={country.flags.png}
              alt={country.name.common}
            />
          </div>
        );
      })}
    </div>
  );
}
