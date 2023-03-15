import { createSlice } from "@reduxjs/toolkit";
import { getStateFromLocalStorage } from "./stateLocalStorage";

const movieSlice = createSlice({
  name: "movie",
  initialState: getStateFromLocalStorage(),

  reducers: {
    toggleHide: state => {
      state.hideTrailer = !state.hideTrailer;
    },
    toggleLike: state => {
      state.like = !state.like
    },
    toggleAdd: state => {
      state.add = !state.add
    },
  },
});

export const { toggleHide, toggleLike, toggleAdd } = movieSlice.actions;

export const selectState = state => state.movie;
export const selectHide = state => selectState(state).hideTrailer;
export const selectLike = state => selectState(state).like;
export const selectAdd = state => selectState(state).add;
export default movieSlice.reducer;