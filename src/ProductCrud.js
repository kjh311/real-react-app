import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 } from "uuid";

const ProductCrud = () => {
  const [products, setProducts] = useState([]);
  const [productTitle, setProductTitle] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [updateProductTitle, setUpdateProductTitle] = useState("");
  const [updateProductImage, setUpdateProductImage] = useState("");
  const [updateProductDescription, setUpdateProductDescription] = useState("");
  const [productId, setProductId] = useState("");

  //get products
  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    console.log("Products: ", products);
  }, [products]);

  //add Product
  const handleAddProduct = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/products", {
        title: productTitle,
        image: productImage,
        description: productDescription,
        id: v4(),
      })
      .then((res) => setProducts([...products, res.data]))
      .catch((err) => console.error(err));

    setProductTitle("");
    setProductImage("");
    setProductDescription("");
  };

  //edit product
  const handleUpdateProduct = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:5000/products/${productId}`, {
        title: updateProductTitle,
        image: updateProductImage,
        description: updateProductDescription,
      })
      .then((res) => {
        const updatedProduct = products.map((product) =>
          product.id === productId ? res.data : product
        );

        setProducts(updatedProduct);
        setUpdateProductTitle("");
        setUpdateProductImage("");
        setUpdateProductDescription("");
        setProductId("");
      })
      .catch((err) => console.error(err));
  };

  //delete product

  return (
    <div>
      <div>
        <h3>Add Product:</h3>
        <form onSubmit={handleAddProduct} className="p-2 m-2 bg-blue-200">
          <input
            value={productTitle}
            className="p-2 m-2  border"
            placeholder="Production Title"
            onChange={(e) => setProductTitle(e.target.value)}
          />
          <br />
          <input
            value={productImage}
            className="p-2 m-2  border"
            placeholder="Production Image src"
            onChange={(e) => setProductImage(e.target.value)}
          />
          <br />
          <textarea
            value={productDescription}
            className="p-2 m-2  border"
            placeholder="Production Description"
            onChange={(e) => setProductDescription(e.target.value)}
          />
          <br />
          <button className="bg-red-500 p-2 m-2" type="submit">
            Submit Product
          </button>
        </form>
      </div>
      <div>
        <h3>Update Product</h3>
        <form className="p-2 m-2 bg-green-200" onSubmit={handleUpdateProduct}>
          <input
            value={updateProductTitle}
            className="p-2 m-2  border"
            placeholder="Production Title"
            onChange={(e) => setUpdateProductTitle(e.target.value)}
          />
          <br />
          <input
            value={updateProductImage}
            className="p-2 m-2  border"
            placeholder="Production Image src"
            onChange={(e) => setUpdateProductImage(e.target.value)}
          />
          <br />
          <textarea
            value={updateProductDescription}
            className="p-2 m-2  border"
            placeholder="Production Description"
            onChange={(e) => setUpdateProductDescription(e.target.value)}
          />
          <br />
          <input
            className="p-2 m-2  border"
            value={productId}
            placeholder="Product Id"
            onChange={(e) => setProductId(e.target.value)}
          />
          <br />
          <button className="bg-red-500 p-2 m-2" type="submit">
            Update Product
          </button>
        </form>
      </div>
      <div className="w-50 p-5 m-5">
        <h1>Products:</h1>
        <ul>
          {products.map((product, id) => {
            return (
              <li key={id} className="p-2 m-2 bg-gray-100">
                <p>{product.title}</p>
                <br />
                <p>{product.description}</p>
                <br />
                <img className="" src={product.image} alt={product.title} />
                <br />
                <p>Id: {product.id}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProductCrud;
