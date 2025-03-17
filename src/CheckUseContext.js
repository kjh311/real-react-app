import React, { useState, useContext } from "react";
import { Context } from "./App";

export default function CheckUseContext() {
  const [checked, setChecked] = useContext(Context);

  const handleCheck = () => {
    setChecked(!checked);
  };

  return (
    <div>
      <input type="checkbox" checked={checked} onChange={handleCheck} />
      <h1>{`From CheckUseContext.js: ${checked}`}</h1>
    </div>
  );
}
