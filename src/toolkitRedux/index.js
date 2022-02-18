// npm install @reduxjs/toolkit
// если устанавливаем toolkit отдельно устанавливать redux не нужно

import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {compose} from "redux";
import toolkitReducer from "./toolkitReducer";
import toolkitSlice from "./toolkitSlice";

const rootReducer = combineReducers({
    toolkit: toolkitSlice,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = configureStore({
    reducer: rootReducer,
    // вызвало ошибку
    // Actions must be plain objects. Use custom middleware for
    // async actions.
    // enhancers: composeEnhancers,
})