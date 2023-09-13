import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";
import { reducer } from "./reducer";
import thunk from "redux-thunk";

const enhancer = compose(applyMiddleware(logger, thunk));

export const store = createStore(reducer, enhancer);