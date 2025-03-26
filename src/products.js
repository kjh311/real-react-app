import { useState, useEffect } from "react";
import axios from "axios";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postDescription, setPostDescription] = useState("");
  const [postImage, setPostImage] = useState("");
  const [postPrice, setPostPrice] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then((response) => setProducts(response.data))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handlePostSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/products", {
        title: postTitle,
        description: postDescription,
        image: postImage,
        price: postPrice,
      })
      .then((response) => setProducts((prev) => [...prev, response.data]));
    setPostTitle("");
    setPostDescription("");
    setPostImage("");
    setPostPrice("");
  };

  return (
    <div>
      <div className="card">
        <h1>Create a new product:</h1>
        <form onSubmit={handlePostSubmit}>
          <input
            value={postTitle}
            type="text"
            placeholder="Enter a Title"
            onChange={(e) => setPostTitle(e.target.value)}
          />
          <br />
          <br />
          <input
            value={postDescription}
            type="text"
            placeholder="Enter a product description"
            onChange={(e) => setPostDescription(e.target.value)}
          />
          <br />
          <br />
          <input
            value={postImage}
            type="text"
            placeholder="Enter an image URL"
            onChange={(e) => setPostImage(e.target.value)}
          />
          <br />
          <br />
          <input
            value={postPrice}
            type="text"
            placeholder="Enter a product price"
            onChange={(e) => setPostPrice(e.target.value)}
          />
          <br />
          <br />
          <button type="submit">Post</button>
          <br />
          <br />
        </form>
      </div>
      {products.map((item, index) => {
        return (
          <div className="card" key={index}>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <p>${item.price}</p>
            <p>id: {item.id}</p>
            <img src={item.image} alt={item.title} className="image" />
          </div>
        );
      })}
    </div>
  );
}
