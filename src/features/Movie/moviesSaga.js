import { call, takeEvery, select, put, takeLatest } from "redux-saga/effects"
import { getMovie } from "./getMovie";
import { fetchMovies, fetchMoviesError,  fetchMoviesSuccess,  selectState } from "./movieSlice";
import { saveStateInLocalStorage } from "./stateLocalStorage";

function* fetchMoviesHandler() {
  try {
      const movie = yield call(getMovie);
      yield put(fetchMoviesSuccess(movie));
  }
  catch (error) {
      yield put(fetchMoviesError());
      yield call(alert, "Błąd pobierania, spróbuj ponownie lub sprawdź połączenie z internetem")
  }}

function* saveTasksInLocalStorageHandler() {
  const state = yield select(selectState);
  yield call(saveStateInLocalStorage, state);
}

export function* moviesSaga() {
  yield takeEvery("*", saveTasksInLocalStorageHandler);
  yield takeLatest(fetchMovies.type, fetchMoviesHandler);
};