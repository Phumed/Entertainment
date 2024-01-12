import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Components
import Home from "./components/Home";
import Movie from "./components/Movie";
import MovieDetail from "./components/MovieDetail";
import Series from "./components/Series";
import BookMarked from "./components/BookMarked";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/movie/:id",
      element: <MovieDetail />,
    },
    {
      path: "/movies",
      element: <Movie />,
    },
    {
      path: "/series",
      element: <Series />,
    },
    {
      path: "/bookMarked",
      element: <BookMarked />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
