import React, { useState, useEffect } from "react";

export default function ArtFilter() {
  const artSupplyArray = [
    "Markers",
    "Paint",
    "Brushes",
    "Pencils",
    "Canvas",
    "Paper",
    "Ink",
  ];

  const [artInput, setArtInput] = useState("");
  const [supplies] = useState(artSupplyArray);

  //   useEffect(() => {
  //     setSupplies(artSupplyArray);
  //   }, []);

  const handleInput = (e) => {
    setArtInput(e.target.value);
  };

  const filterArtSupplies = supplies.filter((supply) =>
    supply.toLowerCase().includes(artInput.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={artInput}
        placeholder="Enter art supplies"
        onChange={handleInput}
      />
      <h1>{artInput}</h1>
      {filterArtSupplies.length > 0 ? (
        filterArtSupplies.map((item, index) => <h1 key={index}>{item}</h1>)
      ) : (
        <h1>No Supplies Found</h1>
      )}
    </div>
  );
}
