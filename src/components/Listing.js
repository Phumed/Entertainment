import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Listing({ type }) {
  const { movies } = useSelector((state) => state.movies); //from Store.js
  const { series } = useSelector((state) => state.series);
  const { mixed } = useSelector((state) => state.mixed);
  const { bookmarked } = useSelector((state) => state.bookMarked);
  // console.log(bookmarked);
  // console.log("bookmarked");

  // console.log(type);
  return (
    <div>
      <Container>
        <Row>
          {type === "movie" &&
            movies &&
            movies.map((movie) => (
              <Col
                xxl={2}
                lg={3}
                md={4}
                xs={6}
                className="my-3"
                key={movie.imdbID}
              >
                <MovieCard key={movie.imdbID} movie={movie} />
              </Col>
            ))}
          {type === "series" &&
            series &&
            series.map((element) => (
              <Col
                xxl={2}
                lg={3}
                md={4}
                xs={6}
                className="my-3"
                key={element.imdbID}
              >
                <MovieCard key={element.imdbID} movie={element} />
              </Col>
            ))}
          {type === "mixed" &&
            mixed &&
            mixed.map((element) => (
              <Col
                xxl={2}
                lg={3}
                md={4}
                xs={6}
                className="my-3"
                key={element.imdbID}
              >
                <MovieCard key={element.imdbID} movie={element} />
              </Col>
            ))}
          {type === "bookMarked" &&
            bookmarked &&
            bookmarked.map((element) => (
              <Col
                xxl={2}
                lg={3}
                md={4}
                xs={6}
                className="my-3"
                key={element.movie.imdbID}
              >
                <MovieCard key={element.movie.imdbID} movie={element.movie} />
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
}

export default Listing;
