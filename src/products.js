import { useState, useEffect } from "react";
import axios from "axios";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postDescription, setPostDescription] = useState("");
  const [postImage, setPostImage] = useState("");
  const [postPrice, setPostPrice] = useState("");
  const [deleteId, setDeleteId] = useState("");
  const [updateId, setUpdateId] = useState("");
  const [updateTitle, setUpdateTitle] = useState("");
  const [updateDescription, setUpdateDescription] = useState("");
  const [updatePrice, setUpdatePrice] = useState("");
  const [updateImage, setUpdateImage] = useState("");

  //GET
  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then((response) => setProducts(response.data))
      .catch((error) => {
        console.error("Error fetching products", error);
      });
  }, []);

  //POST
  const handlePostSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/products", {
        title: postTitle,
        description: postDescription,
        image: postImage,
        price: postPrice,
      })
      .then((response) => {
        setProducts((prev) => [...prev, response.data]);
        console.log("product posted");
      })
      .catch((error) => {
        console.error("Error posting product", error);
      });

    setPostTitle("");
    setPostDescription("");
    setPostImage("");
    setPostPrice("");
  };

  //UPDATE
  const handleUpdateSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:5000/products/${updateId}`, {
        title: updateTitle,
        description: updateDescription,
        price: updatePrice,
        image: updateImage,
      })
      .then((res) => {
        const updatedProducts = products.map((product) => {
          return product.id === updateId ? res.data : product;
        });
        setProducts(updatedProducts);
        setUpdateTitle("");
        setUpdateDescription("");
        setUpdateId("");
        setPostImage("");
        setUpdatePrice("");
        setUpdateImage("");
        console.log("product updated", updateId);
      })
      .catch((error) => {
        console.error("Error updating product", error);
      });
  };

  //DELETE
  const handleDeleteSubmit = (e) => {
    e.preventDefault();

    axios
      .delete(`http://localhost:5000/products/${deleteId}`)
      .then(() => {
        setProducts(products.filter((product) => product.id !== deleteId));
        console.log("product deleted", deleteId);
      })
      .catch((error) => console.error("Error deleting post", error));
    setDeleteId("");
  };

  //DELETE BY ID
  const handleDeleteItem = (id) => {
    if (window.confirm("Delete this item?")) {
      axios
        .delete(`http://localhost:5000/products/${id}`)
        .then(() => {
          // Remove from UI
          setProducts(products.filter((product) => product.id !== id));
          console.log("Product deleted", id);
        })
        .catch((error) => console.error("Error deleting product", error));
    }
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
            required
          />
          <br />
          <br />
          <textarea
            value={postDescription}
            type="text"
            placeholder="Enter a product description"
            onChange={(e) => setPostDescription(e.target.value)}
            required
          />
          <br />
          <br />
          <input
            value={postImage}
            type="text"
            placeholder="Enter an image URL"
            onChange={(e) => setPostImage(e.target.value)}
            required
          />
          <br />
          <br />
          <input
            value={postPrice}
            type="text"
            placeholder="Enter a product price"
            onChange={(e) => setPostPrice(e.target.value)}
            required
          />
          <br />
          <br />
          <button type="submit">Post</button>
          <br />
          <br />
        </form>
        <br />
        <br />
      </div>

      {/* UPDATE */}
      <form className="card" onSubmit={handleUpdateSubmit}>
        <h1>Update Product:</h1>
        <input
          type="text"
          value={updateTitle}
          placeholder="Enter a new title"
          onChange={(e) => setUpdateTitle(e.target.value)}
          required
        />
        <br />
        <br />
        <textarea
          type="text"
          value={updateDescription}
          placeholder="Enter a new description"
          onChange={(e) => setUpdateDescription(e.target.value)}
          required
        />
        <br />
        <br />
        <input
          type="text"
          value={updateImage}
          placeholder="Enter a new image"
          onChange={(e) => setUpdateImage(e.target.value)}
          required
        />
        <br />
        <br />
        <input
          type="text"
          value={updatePrice}
          placeholder="Enter a new price"
          onChange={(e) => setUpdatePrice(e.target.value)}
          required
        />
        <br />
        <br />
        <input
          type="text"
          value={updateId}
          placeholder="Enter an id"
          onChange={(e) => setUpdateId(e.target.value)}
          required
        />
        <br />
        <br />
        <button type="submit">Update</button>
        <br />
        <br />
      </form>

      {/* DELETE */}
      <div>
        <form className="card" onSubmit={handleDeleteSubmit}>
          <h1>Delete Product:</h1>
          <input
            type="text"
            value={deleteId}
            placeholder="Enter product id"
            onChange={(e) => setDeleteId(e.target.value)}
            required
          />
          <br />
          <br />
          <button type="submit">Delete</button>
          <br />
          <br />
        </form>
      </div>

      {products.length === 0 && "No products found"}

      {products.map((item, index) => {
        return (
          <div className="card" key={index}>
            <button
              className="deleteButton"
              onClick={() => handleDeleteItem(item.id)}
            >
              X
            </button>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <p>${Number(item.price).toLocaleString()}</p>
            <p>id: {item.id}</p>
            <img src={item.image} alt={item.title} className="image" />
          </div>
        );
      })}
    </div>
  );
}
