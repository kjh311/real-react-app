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
import CheckUseContext from "./CheckUseContext";

export const Context = React.createContext();
export const SignInContext = React.createContext();

function App() {
  const [checked, setChecked] = useState(false);
  const [signedIn, setSignedIn] = useState(false);

  return (
    <Context.Provider value={[checked, setChecked]}>
      <SignInContext.Provider value={[signedIn, setSignedIn]}>
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
          <CheckUseContext />
          <h1>{`From App.js: ${checked ? "checked" : "unchecked"}`}</h1>
          <h1>{signedIn ? "sign out" : "sign in"}</h1>
        </div>
      </SignInContext.Provider>
    </Context.Provider>
  );
}

export default App;
