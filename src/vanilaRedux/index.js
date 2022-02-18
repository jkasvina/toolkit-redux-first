import {createStore, combineReducers, applyMiddleware, compose} from "redux";
// npm i redux

import { composeWithDevTools } from "redux-devtools-extension";
// npm i redux-devtools-extension
// для работы middleware с инструментами разработчика redux-devtools

import thunk from "redux-thunk";
import mainReducer from "./mainReducer";
// npm i redux-thunk - библиотека для работы с асинхронным кодом
// redux-thunk это middleware
// саша сказал, пока не нужно


// корневой редьюсер - объект, содержащий все редьюсеры
const rootReducer = combineReducers({
    main: mainReducer,
});

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// composeEnhancerscompose(applyMiddleware(sagaMiddleware)) то же самое, что и
// composeWithDevTools(applyMiddleware(sagaMiddleware))

// У тебя есть мидлвара и девтулз - 2 энхенсера - Нужно их объединить
// compose нужен для этого

// Enhancer - компонент высшего порядка, абстракция вокруг обычного Store,
// делающая его более мощным
// middleware — это не что иное, как плагин или деталь приложения,
// которую можно поместить «внутрь» цепочки потока данных Redux.

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);