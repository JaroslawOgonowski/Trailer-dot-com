import { createSlice } from "@reduxjs/toolkit";
import { getStateFromLocalStorage } from "./stateLocalStorage";

const movieSlice = createSlice({
  name: "actualState",
  initialState: {
    loading: false,
    movies: [],
    hideTrailer: true,
    like: false,
    add: false,
    status: null,
    hideMenu: true,
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
    fetchMovies: (state) => {
      state.loading = true;
    },
    fetchMoviesSuccess: (state, { payload: movies }) => {
      state.success = true;
      state.loading = false;
      state.movies = movies;
    },
    fetchMoviesError: (state) => {
      state.loading = false;
    },
    toggleMenu: state => {
      state.hideMenu = !state.hideMenu;
    },
    toggleMovie: (state, action) => {
      const index = state.movies.findIndex(selectedMovie => selectedMovie.id === action.payload);
      state.title = state.movies[index].title;
      state.moreInfo = state.movies[index].moreInfo;
    },
  },
});

export const { toggleHide, toggleMovie, toggleMenu, toggleLike, toggleAdd, fetchMovies, fetchMoviesSuccess, fetchMoviesError } = movieSlice.actions;

export const selectState = state => state.movie;
export const selectHide = state => selectState(state).hideTrailer;
export const selectLike = state => selectState(state).like;
export const selectAdd = state => selectState(state).add;
export const selectLoading = (state) => selectState(state).loading;
export const selectMovies = (state) => selectState(state).movies;
export const selectMenu = (state) => selectState(state).hideMenu;
export const selectTitle = (state) => selectState(state).title;
export const selectInfo = (state) => selectState(state).moreInfo;
export default movieSlice.reducer;