import React, { useState, useEffect } from "react";

function WindowSize() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("mount");

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("unmount");
    };
  }, []);

  return (
    <div>
      {windowWidth < 200 ? (
        <p className="blue">{windowWidth}</p>
      ) : (
        <p className="red">{windowWidth}</p>
      )}
    </div>
  );
}

export default WindowSize;
