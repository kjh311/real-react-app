import React, { useState, useEffect } from "react";

export default function DogPic() {
  const [pic, setPic] = useState("");
  //   const [count, setCount] = useState(0);

  useEffect(() => {
    const getPic = async () => {
      try {
        const response = await fetch(`https://dog.ceo/api/breeds/image/random`);
        const data = await response.json();
        setPic(`${data.message}`);
        console.log({ pic });
      } catch (error) {
        console.log("Error getting pic", error);
      }
    };
    getPic();

    // console.log(`Count, ${count}`);
  }, []);

  return (
    <div>{pic ? <img src={pic} alt="A Random Dog" /> : <p>Loading...</p>}</div>
  );
}
