import { createSlice } from "@reduxjs/toolkit";
import { getStateFromLocalStorage } from "./stateLocalStorage";

const movieSlice = createSlice({
  name: "actualState",
  initialState: {
    loading: false,
    movie: [],
    hideTrailer: true,
    like: false,
    add: false,
    status: null
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
    fetchMovie: (state) => {
      state.loading = true;
    },
    fetchMovieSuccess: (state, { payload: movie }) => {
      state.success = true;
      state.loading = false;
      state.movie = movie;
    },
    fetchMovieError: (state) => {
      state.loading = false;
    }
  },
});

export const { toggleHide, toggleLike, toggleAdd, fetchMovie, fetchMovieSuccess, fetchMovieError } = movieSlice.actions;

export const selectState = state => state.movie;
export const selectHide = state => selectState(state).hideTrailer;
export const selectLike = state => selectState(state).like;
export const selectAdd = state => selectState(state).add;
export const selectLoading = (state) => selectState(state).loading;
export const selectMovie = (state) => selectState(state).movie;
export default movieSlice.reducer;