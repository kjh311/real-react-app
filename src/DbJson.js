import { useState, useEffect } from "react";
import axios from "axios";

export default function DbJson() {
  const [posts, setPosts] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [updateTitle, setUpdateTitle] = useState("");
  const [updateBody, setUpdateBody] = useState("");
  const [postId, setPostId] = useState("");

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

  //POST
  const handlePostSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/posts", {
        title: postTitle,
        body: postBody,
      })
      .then((response) => {
        setPosts((prev) => [...prev, response.data]);
      })
      .catch((error) => {
        console.error("Error fetching posts", error);
      });
  };

  //UPDATE
  const handleUpdateSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:5000/posts/${postId}`, {
        title: updateTitle,
        body: updateBody,
      })
      .then((response) => {
        const updatedPosts = posts.map((post) =>
          post.id === postId ? response.data : post
        );
        setPosts(updatedPosts);
        setUpdateTitle("");
        setUpdateBody("");
      })
      .catch((error) => {
        console.erro("Error Updating Post", error);
      });
  };

  return (
    <div>
      <form className="card" onSubmit={handlePostSubmit}>
        <h3>Create a new Post:</h3>
        <input
          type="text"
          value={postTitle}
          placeholder="Enter a title"
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <br />
        <textarea
          type="text"
          value={postBody}
          placeholder="Enter body of post"
          onChange={(e) => setPostBody(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
        <br />
        <br />
      </form>
      <br />

      <form className="card" onSubmit={handleUpdateSubmit}>
        <h3>UpdatePost:</h3>
        <br />
        <input
          type="text"
          value={updateTitle}
          placeholder="Enter a new title"
          onChange={(e) => setUpdateTitle(e.target.value)}
        />
        <br />
        <textarea
          type="text"
          value={updateBody}
          placeholder="Enter a new body"
          onChange={(e) => setUpdateBody(e.target.value)}
        />
        <br />
        <input
          type="text"
          value={postId}
          placeholder="Enter a Post Id"
          onChange={(e) => setPostId(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>

      <div>
        <h1>Posts:</h1>
        {posts.map((post, index) => {
          return (
            <div key={index} className="card">
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <p>id: {post.id}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
