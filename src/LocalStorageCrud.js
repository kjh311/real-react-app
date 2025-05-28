import React, { useState, useEffect } from "react";
// import axios from "axios";

const LocalStorageCrud = () => {
  const [products, setProducts] = useState(
    localStorage.getItem("Products") || []
  );
  const [addProductName, setAddProductName] = useState("");
  const [addProductPrice, setAddProductPrice] = useState(0);
  const [addProductDescription, setAddProductDescription] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("Products")) {
      localStorage.setItem("Products", []);
    }
  }, []);

  const handleAddProduct = (e) => {
    e.preventDefault();

    const newProduct = {
      product_name: addProductName,
      product_price: addProductPrice,
      product_description: addProductDescription,
      id: Date.now(),
    };

    setProducts([...products, newProduct]);

    const newProductString = JSON.stringify([...products, newProduct]);

    localStorage.setItem("Products", newProductString);

    setAddProductDescription("");
    setAddProductName("");
    setAddProductPrice(0);
  };

  return (
    <div>
      <br />
      <br />
      <h2>Add Product</h2>
      <form onSubmit={handleAddProduct}>
        <input
          value={addProductName}
          type="text"
          className="p-2 m-2 border-2x bg-blue-200"
          onChange={(e) => setAddProductName(e.target.value)}
          placeholder="Product Name"
        />
        <br />
        <input
          value={addProductPrice}
          type="number"
          placeholder="Product Price"
          className="p-2 m-2 border-2x bg-blue-200"
          onChange={(e) => setAddProductPrice(e.target.value)}
        />
        <br />
        <textarea
          value={addProductDescription}
          type="text"
          placeholder="Product Description"
          className="p-2 m-2 border-2x bg-blue-200"
          onChange={(e) => setAddProductDescription(e.target.value)}
        />
        <br />
        <button type="submit" className="bg-red-500 p-2 m-2">
          Submit Product
        </button>
      </form>

      <div>
        <ul>
          {products.map((product, id) => {
            return (
              <li key={id}>
                <p>Name: {product.product_name}</p>
                <p>Name: {product.product_price}</p>
                <p>Name: {product.product_description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default LocalStorageCrud;
