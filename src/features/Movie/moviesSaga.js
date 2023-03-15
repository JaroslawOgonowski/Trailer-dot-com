import { call, takeEvery, select, put, takeLatest } from "redux-saga/effects"
import { getMovie } from "./getMovie";
import { fetchMovie, fetchMovieError,  fetchMovieSuccess,  selectState } from "./movieSlice";
import { saveStateInLocalStorage } from "./stateLocalStorage";

function* fetchMovieHandler() {
  try {
      const movie = yield call(getMovie);
      yield put(fetchMovieSuccess(movie));
  }
  catch (error) {
      yield put(fetchMovieError());
      yield call(alert, "Błąd pobierania, spróbuj ponownie lub sprawdź połączenie z internetem")
  }}

function* saveTasksInLocalStorageHandler() {
  const state = yield select(selectState);
  yield call(saveStateInLocalStorage, state);
}

export function* moviesSaga() {
  yield takeEvery("*", saveTasksInLocalStorageHandler);
  yield takeLatest(fetchMovie.type, fetchMovieHandler);
};