import React, { useState, useEffect, useContext } from "react";
import { JokeContext } from "./App";

export default function FetchJoke() {
  const [joke, setJoke] = useState("");

  //   useEffect(() => {
  //     const getJoke = async () => {
  //       try {
  //         const response = await fetch(
  //           `https://official-joke-api.appspot.com/random_joke`
  //         );
  //         const data = await response.json();
  //         setJoke(`${data.setup} - ${data.punchline}`);
  //       } catch (error) {
  //         console.log("Error fetching joke", error);
  //       }
  //     };

  //     getJoke();
  //   }, []);

  const tellMeAJoke = async () => {
    try {
      const response = await fetch(
        `https://official-joke-api.appspot.com/random_joke`
      );
      const data = await response.json();
      setJoke(`${data.setup} - ${data.punchline}`);
    } catch (error) {
      console.log("Error fetching joke", error);
    }
  };

  return (
    <div>
      <button onClick={tellMeAJoke}>Tell me a joke</button>
      <h1>{joke}</h1>
    </div>
  );
}
