import { useState, useEffect } from "react";
import axios from "axios";

export default function DbJson() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching posts", error);
      });
  }, []);

  return (
    <div>
      <div>
        <h1>Posts:</h1>
        {posts.map((post, index) => {
          return (
            <div key={index} className="card">
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
