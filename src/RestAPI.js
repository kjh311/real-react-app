import { useState, useEffect } from "react";
import axios from "axios";

export default function RestAPI() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [response, setResponse] = useState(null);
  const [postId, setPostId] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data.slice(0, 2)))
      .catch((error) => console.error(error));
  }, []);

  const handlePostSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          title: title,
          body: body,
          userId: 1,
        }
      );
      setResponse(res.data);
      setPosts((prev) => [...prev, res.data]);
      setTitle("");
      setBody("");
    } catch (error) {
      console.error("Error posting data", error);
    }
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
        {
          title: title,
          body: body,
          userId: 1,
        }
      );

      setResponse(res.data);
      setPosts((prev) => [...prev, res.data]);
      setTitle("");
      setBody("");
    } catch (error) {
      console.error("Error updating post", error);
    }
  };

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  return (
    <div>
      <div>
        <h1>Create a new post:</h1>
        <form onSubmit={handlePostSubmit}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter a Title"
          />
          <div>
            <textarea
              type="text"
              value={body}
              placeholder="Enter the body of the post"
              onChange={(e) => setBody(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        {/* {response && (
          <div>
            <h3>Response:</h3>
            <p>Title: {title}</p>
            <p>Body: {body}</p>
            <p>PostID: {response.id}</p>
          </div>
        )} */}
      </div>

      <div>
        <form onSubmit={handleUpdateSubmit}>
          <h1>Update a Post:</h1>
          <input
            type="text"
            value={title}
            placeholder="Enter a new Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <textarea
            type="text"
            value={body}
            placeholder="Enter a new body"
            onChange={(e) => setBody(e.target.value)}
          />
          <br />
          <input
            type="text"
            value={postId}
            placeholder="Enter a post ID"
            onChange={(e) => setPostId(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>

      <div>
        {posts.map((post, index) => {
          return (
            <div key={index}>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
