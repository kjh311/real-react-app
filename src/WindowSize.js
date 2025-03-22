import React, { useState, useEffect } from "react";
import useWindowWidth from "./hooks/useWindowWidth";

function WindowSize() {
  const width = useWindowWidth();

  return (
    <div>
      {width < 200 ? (
        <p className="blue">{width}</p>
      ) : (
        <p className="red">{width}</p>
      )}
    </div>
  );
}

export default WindowSize;
