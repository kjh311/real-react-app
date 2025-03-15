import React, { useState, useEffect } from "react";

export default function StarWars() {
  const [info, setInfo] = useState({});

  useEffect(() => {
    const getInfo = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/people/1/");
        const data = await response.json();
        setInfo(data);
      } catch (error) {
        console.log("Error fetching info", error);
      }
    };

    getInfo();
  }, []);

  useEffect(() => {
    console.log("Updated info:", info);
  }, [info]);

  return (
    <div>
      {info.name ? (
        <div>
          <h1>{info.name}</h1>
          <p>Height: {info.height}</p>
          <p>Hair Color: {info.hair_color}</p>
          <p>Eye Color: {info.eye_color}</p>
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
}
