// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
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
// import HelloName from "./HelloName";
import Nav from "./Nav";

function Home() {
  return (
    <div>
      {/* <h1>Home</h1> */}
      <p>React Practice</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      {/* <h1>React Practice</h1> */}
      <Nav />
      {/* <Test /> */}

      {/* <Counter /> */}
      {/* <NameForm /> */}
      {/* <CheckBox /> */}
      {/* <Resource /> */}
      {/* <WindowSize /> */}

      {/* <CatPic /> */}

      {/* <Calculator /> */}

      <Routes>
        <Route path="/starwars" element={<StarWars />} />
        <Route path="/imagegallery" element={<ImageGallery />} />
        <Route path="/" element={<Home />} />
        <Route path="/dogpic" element={<DogPic />} />
        <Route path="/fetchJoke" element={<FetchJoke />} />
      </Routes>
    </div>
  );
}

export default App;
