import React, { useState, useContext } from "react";
import { Context } from "./App";

export default function NameContext() {
  const [name, setName] = useContext(Context);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <input onChange={handleChange} value={name} placeholder="Enter a Name" />
      <h1>{name}</h1>
    </div>
  );
}
