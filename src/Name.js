import { useState } from "react";
import useAlert from "./hooks/useAlert";

export default function Name() {
  const [name, setName] = useState("");
  const alert = useAlert();

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter a name"
      />
      <button onClick={() => alert(name)}>Alert</button>
    </div>
  );
}
