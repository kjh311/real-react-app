import React, { useContext } from "react";
import { Context } from "./App";

export default function HelloName() {
  const [name, setName] = useContext(Context);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        placeholder="Enter a name"
        onChange={handleChange}
      />
      <h1>{name}</h1>
    </div>
  );
}
