import React, { useState, useEffect } from "react";
import movieApi from "../api/MovieApi";
import APIKey from "../api/MovieApiKey";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";

function MovieDetail() {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams(); //form Router
  console.log(id);

  useEffect(() => {
    const fetchDetail = async () => {
      const res = await movieApi
        .get(`?apikey=${APIKey}&i=${id}&plot=full`)
        .catch((error) => {
          console.log("Error" + error);
        });
      setMovie(res.data);
      setLoading(true);
    };
    fetchDetail();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="w-75 mx-auto d-flex flex-column">
          <div className="d-flex justify-content-center mt-5 mb-3">
            <img src={movie.Poster} alt={movie.Title} />
          </div>
          <div className="fs-4 fw-semibold">{movie.Title}</div>
          <div>{movie.Plot}</div>
          <div>Released: {movie.Release}</div>
        </div>
      ) : (
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
    </div>
  );
}

export default MovieDetail;
