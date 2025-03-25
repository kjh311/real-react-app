import { useState, useEffect } from "react";

export default function Pokemon() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
        const data = await response.json();
        setInfo(data.results);
      } catch (error) {
        console.log("Error fetching Pokemons", error);
      }
    };
    fetchPokemons();
  }, []);

  useEffect(() => {
    console.log(info);
  }, [info]);

  return (
    <div>
      {info.map((item, index) => {
        return (
          <div key={index}>
            <h1>{item.name}</h1>
            <img src={item.url} alt="Image description" />
          </div>
        );
      })}
    </div>
  );
}
