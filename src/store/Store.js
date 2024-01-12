import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./moviesSlice";
import seriesSlice from "./seriesSlice";
import mixedSlice from "./mixedSlice";
import bookMarkedSlice from "./bookMarkedSlice";

export default configureStore({
  reducer: {
    movies: movieSlice,
    series: seriesSlice,
    mixed: mixedSlice,
    bookMarked: bookMarkedSlice,
  },
});
