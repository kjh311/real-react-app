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
import FilterFruit from "./FilterFruit";
import ArtFilter from "./ArtFilter";
import NavBar from "./NavBar";
import Debounce from "./Debounce";
import PhoneNumber from "./PhoneNumber";
import MagicCards from "./MagicCards";
import UseRef from "./UseRef";
import Name from "./Name";
import CheckedHook from "./CheckedHook";
import CreateList from "./CreateList";
import CharacterCount from "./CharacterCount";
import RemoveItemFromList from "./RemoveItemFromList";
import AutoCount from "./AutoCount";
import DayNightMode from "./DayNightMode";

function Home() {
  console.log("Environment:", process.env.NODE_ENV);

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
      <NavBar />
      <br />
      {/* <Test /> */}

      {/* <NameForm /> */}
      {/* <CheckBox /> */}
      {/* <Resource /> */}

      {/* <CatPic /> */}

      <Routes>
        <Route path="/starwars" element={<StarWars />} />
        <Route path="/imageGallery" element={<ImageGallery />} />
        <Route path="/" element={<Home />} />
        <Route path="/dogpic" element={<DogPic />} />
        <Route path="/fetchJoke" element={<FetchJoke />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/counter" element={<Counter />} />
        {/* <Route path="/artFilter" element={<ArtFilter />} /> */}
        <Route path="/filterFruits" element={<FilterFruit />} />
        <Route path="/debounce" element={<Debounce />} />
        <Route path="/phone" element={<PhoneNumber />} />
        <Route path="/magicCards" element={<MagicCards />} />
        <Route path="/useRef" element={<UseRef />} />
        <Route path="/window" element={<WindowSize />} />
        <Route path="/name" element={<Name />} />
        <Route path="/checkedHook" element={<CheckedHook />} />
        <Route path="/createList" element={<CreateList />} />
        <Route path="/characterCount" element={<CharacterCount />} />
        <Route path="/removeItem" element={<RemoveItemFromList />} />
        <Route path="/autoCount" element={<AutoCount />} />
        <Route path="/dayNight" element={<DayNightMode />} />
      </Routes>
    </div>
  );
}

export default App;
