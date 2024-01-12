import React from "react";
import Header from "./Header";
import MovieApi from "../api/MovieApi";
import APIKey from "../api/MovieApiKey";
import { useDispatch } from "react-redux";
import { addSeries } from "../store/seriesSlice";
import { useEffect, useState } from "react";
import Listing from "./Listing";
import Form from "react-bootstrap/Form";
import Footer from "./Footer";

function Series() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const handleChange = (event) => {
    setSearch(event.target.value);
    console.log(search);
  };

  useEffect(() => {
    const fetchSeries = async () => {
      const searchKey = search ? search : "doraemon";
      const res = await MovieApi.get(
        `?apikey=${APIKey}&s=${searchKey}&type=series`
      );

      setTimeout(() => {
        dispatch(addSeries(res.data.Search));
      }, 500);
    };
    fetchSeries();
  }, [search]);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header page="series" />
      <div className="flex-grow-1">
        <h2 className="w-75 mx-auto mt-4 text-center text-md-start">Series</h2>
        <Form.Control
          size="md"
          type="text"
          placeholder="Search"
          value={search}
          onChange={handleChange}
          className="w-75 mx-auto my-3"
        />
        <Listing type="series" />
      </div>
      <Footer />
    </div>
  );
}

export default Series;
