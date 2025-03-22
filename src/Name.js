import { useState } from "react";
import useAlert from "./hooks/useAlert";

export default function Name() {
  const alert = useAlert();
  return (
    <div>
      <button onClick={alert}>Alert</button>
    </div>
  );
}
