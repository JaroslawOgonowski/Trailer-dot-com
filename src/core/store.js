import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";
import movieReducer from "../features/Movie/movieSlice";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: {
        movie: movieReducer,
    },
    middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

export default store;