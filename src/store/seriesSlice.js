import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  series: [],
};

const seriesSlice = createSlice({
  name: "seriesListing",
  initialState,
  reducers: {
    addSeries: (state, action) => {
      state.series = action.payload;
      //   console.log(current(state));
    },
  },
});

export const { addSeries } = seriesSlice.actions;
export default seriesSlice.reducer;
