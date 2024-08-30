import rootReducer from "./moduls";
import { createStore } from 'redux';
import { applyMiddleware } from "redux";
import ReduxThunk from 'redux';

const store = createStore(
    rootReducer,
    applyMiddleware(ReduxThunk)
)
export default store;