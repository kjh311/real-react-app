import { useState } from "react";
import useChecked from "./hooks/useChecked";

export default function CheckedHook() {
  const [checked, setChecked] = useState(false);
  const checkBoxHook = useChecked();

  const handleCheck = () => {
    setChecked(!checked);
    checkBoxHook(checked);
  };

  return (
    <div>
      <input type="checkbox" checked={checked} onChange={handleCheck} />
      <h1>{checked ? "true" : "false"}</h1>
    </div>
  );
}
