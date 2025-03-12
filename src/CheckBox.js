import React, { useState } from "react";

function CheckBox() {
  const [isChecked, setIsCheck] = useState(false);

  const toggleCheckBox = () => {
    setIsCheck(!isChecked);
  };

  return (
    <div>
      <input type="checkbox" checked={isChecked} onChange={toggleCheckBox} />
      <label>{isChecked ? "Checked" : "Unchecked"}</label>
    </div>
  );
}

export default CheckBox;
