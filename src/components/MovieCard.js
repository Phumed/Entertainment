import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {
  addbookMarked,
  toggleBookMarked,
  removebookMarked,
  isbookMarked,
} from "../store/bookMarkedSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

function MovieCard({ movie }) {
  const dispatch = useDispatch();
  const { bookmarked } = useSelector((state) => state.bookMarked);
  const [Found, setFound] = useState(false);

  const checkClicked = Found ? "d-none" : "";
  const checkNotClicked = Found ? "" : "d-none";
  const findInbookmarked = (movie, bookmarked) => {
    const check = bookmarked.some(
      (elements) => elements.movie.imdbID === movie.imdbID
    );
    return check;
  };
  useEffect(() => {
    setFound(findInbookmarked(movie, bookmarked));
  }, [movie, bookmarked]);

  const addToBookMarked = () => {
    // console.log("check movie in bookmarked");

    const isFound = findInbookmarked(movie, bookmarked);
    setFound(isFound);
    console.log(`isFound = ${isFound}`);
    console.log(`Found : ${Found}`);

    if (!isFound) {
      dispatch(addbookMarked({ movie }));
    } else dispatch(removebookMarked(movie.imdbID));

    // console.log("Card: ");
    // console.log(bookmarked);

    console.log(checkClicked);
  };

  return (
    <div className="h-100">
      <Card className="h-100">
        <Card.Img
          variant="top"
          src={movie.Poster}
          alt={movie.Title}
          className="my-auto"
        />

        <Card.Body>
          <div
            className="d-flex align-items-center"
            style={{ fontSize: "0.90rem" }}
          >
            <div className="me-2">{movie.Year} ·</div>
            <div>
              {movie.Type === "movie" ? (
                <div className="d-flex align-items-center">
                  <div className="material-symbols-rounded me-1">movie</div>
                  <div>Movie</div>
                </div>
              ) : (
                <div className="d-flex align-items-center">
                  <span className="material-symbols-rounded">theaters</span>
                  Series
                </div>
              )}
            </div>
          </div>
          <div className="fw-semibold" style={{ fontSize: "1.15rem" }}>
            {movie.Title}
          </div>
        </Card.Body>
        <Button
          variant="secondary"
          as={Link}
          to={`/movie/${movie.imdbID}`}

          // className={checkClicked}
        >
          View more
        </Button>
        <Button
          onClick={addToBookMarked}
          style={{
            top: "1rem",
            right: "1rem",
          }}
          variant="secondary"
          className={`position-absolute rounded-circle pt-3`}
        >
          <span className={`material-symbols-outlined ${checkClicked}`}>
            bookmark
          </span>
          <span className={`material-symbols-rounded ${checkNotClicked}`}>
            bookmark
          </span>
        </Button>
      </Card>
    </div>
  );
}

export default MovieCard;
