import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 } from "uuid";
import { Edit } from "@mui/icons-material";

const Things = () => {
  const [things, setThings] = useState([]);
  const [thingNameCreate, setThingNameCreate] = useState("");
  const [thingDescriptionCreate, setThingDescriptionCreate] = useState("");
  const [thingImageCreate, setThingImageCreate] = useState("");
  const [thingNameEdit, setThingNameEdit] = useState("");
  const [thingDescriptionEdit, setThingDescriptionEdit] = useState("");
  const [thingImageEdit, setThingImageEdit] = useState("");
  const [thingIdEdit, setThingIdEdit] = useState("");
  const [thingIdDelete, setThingIdDelete] = useState("");

  //get
  useEffect(() => {
    axios
      .get(`http://localhost:5000/things`)
      .then((res) => setThings(res.data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    console.log(things);
  }, [things]);

  //   post
  const postThing = (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:5000/things`, {
        name: thingNameCreate,
        description: thingDescriptionCreate,
        image: thingImageCreate,
        id: v4(),
      })
      .then((res) => setThings([...things, res.data]))
      .catch((err) => console.error(err));

    setThingNameCreate("");
    setThingDescriptionCreate("");
    setThingImageCreate("");
  };

  // Edit
  const editThing = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:5000/things/${thingIdEdit}`, {
        name: thingNameEdit,
        description: thingDescriptionEdit,
        image: thingImageEdit,
      })
      .then((res) => {
        const updatedThings = things.map((thing) => {
          return thing.id === thingIdEdit ? res.data : thing;
        });
        setThings(updatedThings);
      })
      .catch((err) => console.error(err));
    setThingNameEdit("");
    setThingDescriptionEdit("");
    setThingImageEdit("");
    setThingIdEdit("");
  };

  // delete
  const deleteThing = (e) => {
    e.preventDefault();

    axios
      .delete(`http://localhost:5000/things/${thingIdDelete}`)
      .then((res) =>
        setThings(
          things.filter((thing) => {
            return thing.id !== thingIdDelete;
          })
        )
      )
      .catch((err) => console.error(err));
    setThingIdDelete("");
  };

  return (
    <div>
      <br />
      <br />
      <div className="p-2 m-2 ">
        <h1>POST THING:</h1>
        <form className="bg-red-200 p-2 m-2" onSubmit={postThing}>
          <input
            className="p-2 m-2 bg-white"
            value={thingNameCreate}
            placeholder="Enter a name"
            onChange={(e) => setThingNameCreate(e.target.value)}
          />
          <br />
          <input
            className="p-2 m-2 bg-white"
            value={thingDescriptionCreate}
            placeholder="Enter a Description"
            onChange={(e) => setThingDescriptionCreate(e.target.value)}
          />
          <br />
          <input
            className="p-2 m-2 bg-white"
            value={thingImageCreate}
            placeholder="Enter a Image url"
            onChange={(e) => setThingImageCreate(e.target.value)}
          />
          <br />
          <button type="submit" className="p-2 m-2 bg-red-500">
            Submit
          </button>
        </form>
      </div>
      <br />
      <div className="p-2 m-2">
        <h1>EDIT THING:</h1>
        <br />
        <form className="p-2 m-2 bg-green-200" onSubmit={editThing}>
          <input
            className="p-2 m-2 bg-white"
            value={thingIdEdit}
            placeholder="Enter an ID"
            onChange={(e) => setThingIdEdit(e.target.value)}
          />
          <br />
          <input
            className="p-2 m-2 bg-white"
            value={thingNameEdit}
            placeholder="Enter a name"
            onChange={(e) => setThingNameEdit(e.target.value)}
          />
          <br />
          <input
            className="p-2 m-2 bg-white"
            value={thingDescriptionEdit}
            placeholder="Enter a Description"
            onChange={(e) => setThingDescriptionEdit(e.target.value)}
          />
          <br />
          <input
            className="p-2 m-2 bg-white"
            value={thingImageEdit}
            placeholder="Enter a Image url"
            onChange={(e) => setThingImageEdit(e.target.value)}
          />
          <br />
          <button type="submit" className="p-2 m-2 bg-red-500">
            Submit
          </button>
        </form>
      </div>
      <br />
      <div className="p-2 m-2">
        <form className="p-2 m-2 bg-purple-200" onSubmit={deleteThing}>
          <h2>DELETE THING:</h2>
          <br />
          <input
            className="p-2 m-2 bg-white"
            value={thingIdDelete}
            placeholder="enter an id"
            onChange={(e) => setThingIdDelete(e.target.value)}
          />
          <br />
          <button className="bg-red-500 p-2 m-2">Delete</button>
        </form>
      </div>
      <br />
      <div className="p-2 m-2">
        <h1>Things:</h1>
        <br />
        <ul>
          {things?.map((thing, id) => {
            return (
              <li key={id} className=" mt-10">
                <h2>NAME: {thing.name}</h2>
                <br />
                <h2>DESCRIPTION: {thing.description}</h2>
                <img src={thing.image} alt={thing.name} />
                <br />
                <h2>ID: {thing.id}</h2>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Things;
