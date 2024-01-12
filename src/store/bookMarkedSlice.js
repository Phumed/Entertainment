import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  bookmarked: [],
};

const bookMarkedSlice = createSlice({
  name: "bookmarkedListing",
  initialState,
  reducers: {
    addbookMarked: (state, action) => {
      const mediaObject = { ...action.payload, isClicked: false };
      state.bookmarked = [...state.bookmarked, mediaObject];
      // console.log("bookMarked: ");
      // console.log(current(state));
    },
    removebookMarked: (state, action) => {
      state.bookmarked = state.bookmarked.filter(
        (element) => element.movie.imdbID !== action.payload
      );
    },
    isbookMarked: (state, action) => {
      const index = state.bookmarked.findIndex(
        (element) => element.movie.imdbID === action.payload
      );
      // console.log("index: " + index);
      // console.log("bookmarked: ");
      // console.log(current(state));
      if (index !== -1) {
        state.bookmarked[index].isClicked = !state.bookmarked[index].isClicked;
        console.log("bookmarked: ");
        console.log(current(state));
        // console.log("bookmarked isClicked:");
        // console.log(current(state));
        // console.log(current(state).bookmarked[index].isClicked);
      }
    },
  },
});

export const { addbookMarked, removebookMarked, isbookMarked } =
  bookMarkedSlice.actions;
export default bookMarkedSlice.reducer;
