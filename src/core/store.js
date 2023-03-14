import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";
import muteSwitchReducer from "../features/MuteVideo/muteSlice";


const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: {
        muteSwitch: muteSwitchReducer,
        
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;