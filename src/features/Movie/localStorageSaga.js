import { call, takeEvery, select } from "redux-saga/effects"
import { selectState } from "./movieSlice";
import { saveStateInLocalStorage } from "./stateLocalStorage";


function* saveTasksInLocalStorageHandler() {
    const state = yield select(selectState);
    yield call(saveStateInLocalStorage, state);
}

export function* localStorageSaga() {
  yield takeEvery("*", saveTasksInLocalStorageHandler);
}