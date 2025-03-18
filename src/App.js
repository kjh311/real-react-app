// import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import ImageGallery from "./ImageGallery";
import Counter from "./Counter";
import Test from "./Test";
import NameForm from "./NameForm";
import CheckBox from "./CheckBox";
import ItemList from "./ItemList";
import Resource from "./Resource";
import WindowSize from "./WindowSize";
import FetchJoke from "./FetchJoke";
import DogPic from "./DogPic";
import CatPic from "./CatPic";
import StarWars from "./StarWars";
import Calculator from "./Calculator";

export const JokeContext = React.createContext();

function App() {
  const [joke, setJoke] = useState("");

  return (
    <JokeContext value={[joke, setJoke]}>
      <div className="App">
        <h1>React Practice</h1>
        {/* <Test /> */}

        {/* <ImageGallery /> */}
        {/* <Counter /> */}
        {/* <NameForm /> */}
        {/* <CheckBox /> */}
        {/* <Resource /> */}
        {/* <WindowSize /> */}
        <FetchJoke />
        <h3>{joke ? `From App.js: ${joke}` : ""}</h3>
        {/* <DogPic /> */}
        {/* <CatPic /> */}
        {/* <StarWars /> */}
        {/* <Calculator /> */}
        {/* <HelloName /> */}
      </div>
    </JokeContext>
  );
}

export default App;
