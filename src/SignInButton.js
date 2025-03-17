import React, { useState, useContext } from "react";
import { Context } from "./App";

export default function SignInButton() {
  const [signedIn, setSignedIn] = useContext(Context);

  return (
    <button onClick={() => setSignedIn(!signedIn)}>
      {signedIn ? "Sign Out" : "Sign In"}
    </button>
  );
}
