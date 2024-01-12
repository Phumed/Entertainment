import React from "react";
import Header from "./Header";
import MovieApi from "../api/MovieApi";
import APIKey from "../api/MovieApiKey";
import { useDispatch } from "react-redux";
import { addMixed } from "../store/mixedSlice";
import { useEffect, useState } from "react";
import Listing from "./Listing";
import Form from "react-bootstrap/Form";
import Footer from "./Footer";

function Home() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const handleChange = (event) => {
    setSearch(event.target.value);
    console.log(search);
  };

  useEffect(() => {
    const fetchMixed = async () => {
      const searchKey = search ? search : "doraemon";
      const res = await MovieApi.get(`?apikey=${APIKey}&s=${searchKey}`);

      setTimeout(() => {
        dispatch(addMixed(res.data.Search));
      }, 500);
    };
    fetchMixed();
  }, [search]);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header page="home" />
      <div className="flex-grow-1">
        <h2 className="w-75 mx-auto mt-4 text-center text-md-start">Home</h2>
        <Form.Control
          size="md"
          type="text"
          placeholder="Search"
          value={search}
          onChange={handleChange}
          className="w-75 mx-auto my-3"
        />
        <Listing type="mixed" />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
