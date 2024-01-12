import React, { useEffect, useState } from "react";
import Header from "./Header";
import movieApi from "../api/MovieApi";
import APIKey from "../api/MovieApiKey";
import { useDispatch, useSelector } from "react-redux";
import { addMovie } from "../store/moviesSlice";
import Listing from "./Listing";
import Form from "react-bootstrap/Form";
import Footer from "./Footer";

function Movie() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  console.log(search);

  useEffect(() => {
    const fetchMovies = async () => {
      const searchKey = search ? search : "doraemon";
      const res = await movieApi.get(
        `?apikey=${APIKey}&s=${searchKey}&type=movie`
      );

      setTimeout(() => {
        dispatch(addMovie(res.data.Search));
      }, 500);
    };
    fetchMovies();
  }, [search]);

  const handleChange = (event) => {
    setSearch(event.target.value);
    console.log(search);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header page="movie" />
      <div className="flex-grow-1">
        <h2 className="w-75 mx-auto mt-4 text-center text-md-start">Movies</h2>
        <Form.Control
          size="md"
          type="text"
          placeholder="Search"
          value={search}
          onChange={handleChange}
          className="w-75 mx-auto my-3"
        />
        <Listing type="movie" />
      </div>
      <Footer />
    </div>
  );
}

export default Movie;
