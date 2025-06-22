import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 } from "uuid";
import { DeskRounded } from "@mui/icons-material";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editGenre, setEditGenre] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editId, setEditId] = useState("");
  const [deleteId, setDeleteId] = useState("");

  //get
  useEffect(() => {
    axios
      .get(`http://localhost:5000/movies`)
      .then((res) => setMovies(res.data))
      .catch((err) => console.error(err));
  }, []);

  //post
  const postMovie = (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:5000/movies`, {
        title: title,
        genre: genre,
        description: description,
        id: v4,
      })
      .then((res) => {
        setMovies([...movies, res.data]);
      })
      .catch((err) => console.error(err));

    setTitle("");
    setGenre("");
    setDescription("");
  };

  //edit
  const editMovie = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:5000/movies/${editId}`, {
        title: editTitle,
        genre: editGenre,
        description: editDescription,
      })
      .then((res) => {
        setMovies(
          movies.map((movie) => {
            return movie.id === editId ? res.data : movie;
          })
        );
      })
      .catch((err) => console.error(err));

    setEditTitle("");
    setEditGenre("");
    setEditDescription("");
    setEditId("");
  };

  //delete
  const deleteMovie = (e) => {
    e.preventDefault();

    axios.delete(`http://localhost:5000/movies/${deleteId}`).then((res) => {
      setMovies(
        movies.filter((movie) => {
          return movie.id !== deleteId;
        })
      );
    });

    setDeleteId("");
  };

  return (
    <div>
      <div className="p-2 m-2 bg-green-200">
        <h1>Post Movie:</h1>
        <br />
        <form className="p-2 m-2" onSubmit={postMovie}>
          <input
            className="p-2 m-2"
            value={title}
            placeholder="Enter a Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <input
            className="p-2 m-2"
            value={genre}
            placeholder="Enter a Genre"
            onChange={(e) => setGenre(e.target.value)}
          />
          <br />
          <input
            className="p-2 m-2"
            value={description}
            placeholder="Enter a Description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <br />
          <button type="submit" className="bg-red-500 p-2 m-2">
            Post Movie
          </button>
        </form>
      </div>
      <div className="p-2 m-2 bg-blue-200">
        <h1>Edit Movie:</h1>
        <form className="p-2 m-2" onSubmit={editMovie}>
          <input
            className="p-2 m-2"
            value={editTitle}
            placeholder="Enter a Title"
            onChange={(e) => setEditTitle(e.target.value)}
          />
          <br />
          <input
            className="p-2 m-2"
            value={editGenre}
            placeholder="Enter a Genre"
            onChange={(e) => setEditGenre(e.target.value)}
          />
          <br />
          <input
            className="p-2 m-2"
            value={editDescription}
            placeholder="Enter a Description"
            onChange={(e) => setEditDescription(e.target.value)}
          />
          <br />
          <input
            className="p-2 m-2"
            value={editId}
            placeholder="Enter a Id"
            onChange={(e) => setEditId(e.target.value)}
          />
          <br />
          <button type="submit" className="bg-red-500 p-2 m-2">
            Edit Movie
          </button>
        </form>
      </div>
      <div className="p-2 m-2 bg-orange-200">
        <h1>Delete Movie:</h1>
        <form className="p-2 m-2" onSubmit={deleteMovie}>
          <input
            className="p-2 m-2"
            value={deleteId}
            placeholder="Enter a Id"
            onChange={(e) => setDeleteId(e.target.value)}
          />
          <br />
          <button type="submit" className="bg-red-500 p-2 m-2">
            Delete Movie
          </button>
        </form>
      </div>
      <div className="p-2 m-2 bg-purple-200">
        <ul>
          {movies.map((movie) => {
            return (
              <li key={movie.id}>
                <h1>{movie.title}</h1>
                <br />
                <h1>{movie.genre}</h1>
                <br />
                <h1>{movie.description}</h1>
                <br />
                <h1>{movie.id}</h1>
                <br />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Movies;
