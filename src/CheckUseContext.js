import React, { useContext } from "react";
import { Context } from "./App";
import SignInButton from "./SignInButton";

export default function CheckUseContext() {
  const [checked, setChecked] = useContext(Context);

  const handleCheck = () => {
    setChecked(!checked);
  };

  return (
    <div>
      <input
        id="checkbox"
        type="checkbox"
        checked={checked}
        onChange={handleCheck}
      />
      <h1>{checked ? "Checked" : "Unchecked"}</h1>
      <SignInButton />
    </div>
  );
}
