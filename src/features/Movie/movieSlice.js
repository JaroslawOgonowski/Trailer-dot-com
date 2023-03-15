import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    hideTrailer: true,
    like: false,
    add: false
  },
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

export const { toggleHide, toggleLike, toggleAdd} = movieSlice.actions;

export const selectModeState = state => state.movie;
export const selectHide = state => selectModeState(state).hideTrailer;
export const selectLike = state => selectModeState(state).like;
export const selectAdd = state => selectModeState(state).add;
export default movieSlice.reducer;