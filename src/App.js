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
import HelloName from "./HelloName";

export const Context = React.createContext();

function App() {
  const [name, setName] = useState("");

  return (
    <Context.Provider value={[name, setName]}>
      <div className="App">
        <h1>React Practice</h1>
        {/* <Test /> */}

        {/* <ImageGallery /> */}
        {/* <Counter /> */}
        {/* <NameForm /> */}
        {/* <CheckBox /> */}
        {/* <Resource /> */}
        {/* <WindowSize /> */}
        {/* <FetchJoke /> */}
        {/* <DogPic /> */}
        {/* <CatPic /> */}
        {/* <StarWars /> */}
        {/* <Calculator /> */}
        <HelloName />
        <h1>{name ? `Hello ${name}!` : ""}</h1>
      </div>
    </Context.Provider>
  );
}

export default App;
