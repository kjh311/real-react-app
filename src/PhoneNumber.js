import React, { useState, useEffect } from "react";

export default function PhoneNumberInput() {
  const [input, setInput] = useState("");

  useEffect(() => {
    // Remove non-numeric characters to ensure we're working with numbers only
    const digits = input.replace(/\D/g, "");

    // Format the phone number with parentheses and dash
    let formattedNumber = "";
    if (digits.length > 0) {
      formattedNumber += `(${digits.slice(0, 3)})`;
    }
    if (digits.length > 3) {
      formattedNumber += `${digits.slice(3, 6)}`;
    }
    if (digits.length > 6) {
      formattedNumber += `-${digits.slice(6, 10)}`;
    }

    // Only update state if the input has changed to avoid unnecessary renders
    if (formattedNumber !== input) {
      setInput(formattedNumber);
    }
  }, [input]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter phone number"
      />
    </div>
  );
}
