import React from "react";
import { Routes, Route, Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/starwars">Star Wars</Link> |{" "}
      <Link to="/imagegallery">Image Gallery</Link> |{" "}
      <Link to="/dogpic">Dog Pic</Link> | <Link to="/fetchjoke">Joke</Link>
    </nav>
  );
}
