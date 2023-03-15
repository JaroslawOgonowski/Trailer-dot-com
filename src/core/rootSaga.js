import { all } from "redux-saga/effects";
import { localStorageSaga } from "../features/Movie/localStorageSaga";

export default function* rootSaga() {
    yield all([
        localStorageSaga()
    ]);
};
