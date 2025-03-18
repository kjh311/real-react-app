import React, { useContext } from "react";
import { SignInContext } from "./App";

export default function SignInButton() {
  const [signedIn, setSignedIn] = useContext(SignInContext);

  return (
    <button onClick={() => setSignedIn(!signedIn)}>
      {signedIn ? "Sign Out" : "Sign In"}
    </button>
  );
}
