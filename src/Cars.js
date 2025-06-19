import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 } from "uuid";

const Cars = () => {
  const [cars, setCars] = useState([]);
  const [carMake, setCarMake] = useState("");
  const [carDescription, setCarDescription] = useState("");
  const [carImage, setCarImage] = useState("");
  const [carMakeEdit, setCarMakeEdit] = useState("");
  const [carDescriptionEdit, setCarDescriptionEdit] = useState("");
  const [carImageEdit, setCarImageEdit] = useState("");
  const [carIdEdit, setCarIdEdit] = useState("");
  const [carIdDelete, setCarIdDelete] = useState("");

  //get
  useEffect(() => {
    axios
      .get(`http://localhost:5000/cars`)
      .then((res) => setCars(res.data))
      .catch((err) => console.error(err));
  }, []);

  //post
  const postCar = (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:5000/cars`, {
        make: carMake,
        description: carDescription,
        image: carImage,
        id: v4(),
      })
      .then((res) => setCars([...cars, res.data]))
      .catch((err) => console.error(err));

    setCarMake("");
    setCarDescription("");
    setCarImage("");
  };

  //edit
  const editCar = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:5000/cars/${carIdEdit}`, {
        make: carMakeEdit,
        description: carDescriptionEdit,
        image: carImageEdit,
      })
      .then((res) => {
        setCars(
          cars.map((car) => {
            return car.id === carIdEdit ? res.data : car;
          })
        );
      })
      .catch((err) => console.error(err));

    setCarMakeEdit("");
    setCarIdEdit("");
    setCarImageEdit("");
    setCarDescriptionEdit("");
  };

  //delete
  const deleteCar = (e) => {
    e.preventDefault();

    axios.delete(`http://localhost:5000/cars/${carIdDelete}`).then((res) => {
      setCars(
        cars.filter((car) => {
          return car.id !== carIdDelete;
        })
      );
    });

    setCarIdDelete("");
  };

  return (
    <div>
      <div className="p-2 m-2 border bg-gray-200">
        <h1>POST CAR:</h1>
        <br />

        <form className="p-2 m-2" onSubmit={postCar}>
          <input
            className="p-2 m-2 border"
            value={carMake}
            placeholder="enter a car make"
            onChange={(e) => setCarMake(e.target.value)}
          />
          <input
            className="p-2 m-2 border"
            value={carDescription}
            placeholder="enter a car description"
            onChange={(e) => setCarDescription(e.target.value)}
          />
          <input
            className="p-2 m-2 border"
            value={carImage}
            placeholder="enter a car image url"
            onChange={(e) => setCarImage(e.target.value)}
          />
          <button type="submit" className="p-2 m-2 bg-red-500">
            Add Car
          </button>
        </form>
      </div>
      <br />
      <div className="p-2 m-2 border bg-gray-200">
        {" "}
        <h1>EDIT CAR:</h1>
        <br />
        <form className="p-2 m-2" onSubmit={editCar}>
          <input
            className="p-2 m-2 border"
            value={carMakeEdit}
            placeholder="enter a car make"
            onChange={(e) => setCarMakeEdit(e.target.value)}
          />
          <input
            className="p-2 m-2 border"
            value={carDescriptionEdit}
            placeholder="enter a car description"
            onChange={(e) => setCarDescriptionEdit(e.target.value)}
          />
          <input
            className="p-2 m-2 border"
            value={carImageEdit}
            placeholder="enter a car image url"
            onChange={(e) => setCarImageEdit(e.target.value)}
          />
          <input
            className="p-2 m-2 border"
            value={carIdEdit}
            placeholder="enter a car id"
            onChange={(e) => setCarIdEdit(e.target.value)}
          />
          <button type="submit" className="p-2 m-2 bg-red-500">
            Edit Car
          </button>
        </form>
      </div>
      <br />
      <div className="p-2 m-2 border bg-gray-200">
        {" "}
        <h1>DELETE CAR:</h1>
        <br />
        <form className="p-2 m-2" onSubmit={deleteCar}>
          <input
            className="p-2 m-2 border"
            value={carIdDelete}
            placeholder="enter a car id"
            onChange={(e) => setCarIdDelete(e.target.value)}
          />
          <button type="submit" className="p-2 m-2 bg-red-500">
            Delete Car
          </button>
        </form>
      </div>
      <br />
      <div className="p-2 m-2 border bg-gray-200">
        <ul>
          {cars?.map((car) => {
            return (
              <li key={car.id}>
                <h2>Make: {car.make}</h2>
                <br />
                <h2>Desciption: {car.description}</h2>
                <br />
                <img className="w-50" src={car.image} alt={car.make} />
                <h2>ID: {car.id}</h2>
              </li>
            );
          })}
        </ul>
      </div>
      <br />
    </div>
  );
};

export default Cars;
