import React, { useState, useEffect } from "react";

export default function CatPic() {
  const [catPic, setCatPic] = useState("");

  useEffect(() => {
    const getCatPic = async () => {
      try {
        const response = await fetch(
          `https://api.thecatapi.com/v1/images/search`
        );
        // console.log(response);
        const data = await response.json();
        setCatPic(`${data[0].url}`);
        console.log(data);
      } catch (error) {
        console.log("Error fetching cat", error);
      }
    };
    getCatPic();
  }, []);

  return (
    <div>{catPic ? <img src={catPic} alt="cat pic" /> : <p>Loading...</p>}</div>
  );
}
