import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  mixed: [],
};

const mixedSlice = createSlice({
  name: "mixedListing",
  initialState,
  reducers: {
    addMixed: (state, action) => {
      state.mixed = action.payload;
      // console.log(current(state));
    },
  },
});

export const { addMixed } = mixedSlice.actions;
export default mixedSlice.reducer;
