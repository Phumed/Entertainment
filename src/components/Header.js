import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function Header({ page }) {
  const setHomeActive = page === "home" ? "text-white" : "";
  const setMovieActive = page === "movie" ? "text-white" : "";
  const setSeriesActive = page === "series" ? "text-white" : "";
  const setBookmarkedActive = page === "bookmarked" ? "text-white" : "";

  return (
    <nav className="position-sticky top-0" style={{ zIndex: 2 }}>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Nav.Link
              as={Link}
              to="/"
              className={`${setHomeActive}`}
              title="Home"
              id="t-1"
            >
              Entertainment
            </Nav.Link>
          </Navbar.Brand>
          <Nav className="me-auto py-auto">
            <Nav.Link
              as={Link}
              to="/"
              className={`${setHomeActive} `}
              title="Home"
              id="t-1"
            >
              <span className="material-symbols-rounded">home</span>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/movies"
              className={`${setMovieActive}`}
              title="Movies"
              id="t-1"
            >
              <span className="material-symbols-rounded">movie</span>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/series"
              className={`${setSeriesActive}`}
              title="Series"
              id="t-1"
            >
              <span className="material-symbols-rounded">theaters</span>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/bookMarked"
              className={`${setBookmarkedActive}`}
              title="Bookmarked"
              id="t-1"
            >
              <span className="material-symbols-rounded">bookmark</span>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </nav>
  );
}

export default Header;
