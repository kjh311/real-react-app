import { useState } from "react";

export default function SearchApi() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInput = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    setQuery("");

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${query}`
      );
      const data = await response.json();

      if (data.error) {
        setError("Character not found");
        setResults([]);
      } else {
        setResults(data.results);
        console.log(data.results);
      }
    } catch (err) {
      console.log("Data not fetched");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          placeholder="Search for a character"
          onChange={handleInput}
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        {loading && "Loading..."}
        {error && <p>{error}</p>}
        {results.map((item, index) => {
          return (
            <div className="card" key={index}>
              <h1>{item.name}</h1>
              <img src={item.image} alt={item.image} />
              <p>Gender: {item.gender}</p>
              <p>Location: {item.location.name}</p>
              <p>Origin: {item.origin.name}</p>
              <p>Species: {item.species}</p>
              <p>Status: {item.status}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
