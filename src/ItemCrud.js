import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 } from "uuid";

const ItemCrud = () => {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");
  const [itemImage, setItemImage] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [updateItemName, setUpdateItemName] = useState("");
  const [updateItemImage, setUpdateItemImage] = useState("");
  const [updateItemDescription, setUpdateItemDescription] = useState("");
  const [itemId, setItemId] = useState("");
  const [deleteItemId, setDeleteItemId] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/items`)
      .then((res) => setItems(res.data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    console.log("items: ", items);
  }, [items]);

  //add item
  const handleAddItem = (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:5000/items`, {
        name: itemName,
        image: itemImage,
        description: itemDescription,
        id: v4(),
      })
      .then((res) => {
        setItems([...items, res.data]);
      })
      .catch((err) => {
        console.error(err);
      });

    setItemDescription("");
    setItemImage("");
    setItemName("");
  };

  //edit item
  const handleEditItem = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:5000/items/${itemId}`, {
        name: updateItemName,
        image: updateItemImage,
        description: updateItemDescription,
      })
      .then((res) => {
        const updatedItems = items.map((item) => {
          return item.id === itemId ? res.data : item;
        });

        setItems(updatedItems);
      })
      .catch((err) => {
        console.error(err);
      });

    setUpdateItemDescription("");
    setUpdateItemImage("");
    setUpdateItemName("");
    setItemId("");
  };

  //delete item
  const handleDeleteItem = (e) => {
    e.preventDefault();

    axios
      .delete(`http://localhost:5000/items/${deleteItemId}`)
      .then(() => {
        setItems(
          items.filter((item) => {
            return item.id !== deleteItemId;
          })
        );
      })
      .catch((err) => {
        console.error(err);
      });

    setDeleteItemId("");
  };

  return (
    <div className="text-center">
      <br />
      <br />
      <div className="bg-red-300 p-2 m-2">
        <h1>Add Item:</h1>
        <form onSubmit={handleAddItem}>
          <input
            value={itemName}
            placeholder="Enter Item Name"
            className="p-2 m-2 bg-blue-500"
            onChange={(e) => setItemName(e.target.value)}
          />
          <br />
          <input
            value={itemImage}
            placeholder="Enter Item Image URL"
            className="p-2 m-2 bg-blue-500"
            onChange={(e) => setItemImage(e.target.value)}
          />
          <br />
          <input
            value={itemDescription}
            placeholder="Enter Item Description"
            className="p-2 m-2 bg-blue-500"
            onChange={(e) => setItemDescription(e.target.value)}
          />
          <br />
          <button type="submit" className="bg-red-600 p-2 m-2">
            Submit
          </button>
        </form>
      </div>
      <div className=" bg-blue-100 p-2 m-2">
        <h1>Edit item:</h1>
        <form className="p-2 m-2" onSubmit={handleEditItem}>
          <input
            value={updateItemName}
            placeholder="Item Name"
            className="p-2 m-2"
            onChange={(e) => setUpdateItemName(e.target.value)}
          />
          <br />
          <input
            value={updateItemImage}
            placeholder="Item Image"
            className="p-2 m-2"
            onChange={(e) => setUpdateItemImage(e.target.value)}
          />
          <br />
          <input
            value={updateItemDescription}
            placeholder="Item Description"
            className="p-2 m-2"
            onChange={(e) => setUpdateItemDescription(e.target.value)}
          />
          <br />
          <input
            value={itemId}
            placeholder="Item ID"
            className="p-2 m-2"
            onChange={(e) => setItemId(e.target.value)}
          />
          <br />
          <button type="submit" className="p-2 m-2 bg-red-500">
            Submit
          </button>
        </form>
      </div>
      <div className=" bg-blue-100 p-2 m-2">
        <h1>Delete Item:</h1>
        <form className="p-2 m-2 bg-green-200" onSubmit={handleDeleteItem}>
          <input
            value={deleteItemId}
            className="p-2 m-2"
            placeholder="Item Id"
            onChange={(e) => setDeleteItemId(e.target.value)}
          />
          <br />
          <button type="submit" className="p-2 m-2 bg-red-500">
            Delete
          </button>
        </form>
      </div>
      <div className=" bg-blue-100 p-2 m-2">
        <h3>Items:</h3>
        <ul>
          {items?.map((item, id) => {
            return (
              <li key={id} className="items-center">
                <h4>{item.name}</h4>
                <br />
                <h4>{items.itemDescription}</h4>
                <br />
                <img src={item.image} alt={item.name} />
                <br />
                <p>ID: {item.id}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ItemCrud;
