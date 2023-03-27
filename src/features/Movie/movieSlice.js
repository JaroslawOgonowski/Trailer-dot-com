import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "actualState",
  initialState: {
    loading: false,
    movies: [],
    hideTrailer: true,
    status: null,
    hideMenu: true,
    hideInfo: false,
    actor: []
  },

  reducers: {
    toggleHide: state => {
      state.hideTrailer = !state.hideTrailer;
    },
    toggleInfo: state => {
      state.hideInfo = !state.hideInfo;
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
      state.hideMenu = !state.hideMenu;
      state.actor=[];
    },
    toggleActor: (state, action) => {
      const index = state.moreInfo.findIndex(selectedActor => selectedActor.actor === action.payload);
      state.actor = state.moreInfo[index]
    }
  },
});

export const {
  toggleHide,
  toggleActor,
  toggleMovie,
  toggleMenu,
  toggleInfo,
  fetchMovies,
  fetchMoviesSuccess,
  fetchMoviesError
} = movieSlice.actions;

export const selectState = state => state.movie;
export const selectHide = state => selectState(state).hideTrailer;
export const selectLike = state => selectState(state).like;
export const selectAdd = state => selectState(state).add;
export const selectLoading = (state) => selectState(state).loading;
export const selectMovies = (state) => selectState(state).movies;
export const selectMenu = (state) => selectState(state).hideMenu;
export const selectTitle = (state) => selectState(state).title;
export const selectInfo = (state) => selectState(state).moreInfo;
export const selectHideInfo = (state) => selectState(state).hideInfo;
export const selectActor = (state) => selectState(state).actor;
export default movieSlice.reducer;