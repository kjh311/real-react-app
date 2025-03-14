import React, { useState, useEffect } from "react";

function Resource() {
  const [resourseType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourseType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
    console.log(items);
  }, [resourseType]);

  return (
    <div>
      <button onClick={() => setResourceType("posts")}>Posts</button>
      <button onClick={() => setResourceType("users")}>Users</button>
      <button onClick={() => setResourceType("comments")}>Comments</button>
      <div>
        <h1>{resourseType}</h1>
        <ul>
          {items.map((item, index) => {
            return <li key={index}>{JSON.stringify(item)}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Resource;
