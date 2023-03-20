import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from 'redux-saga'
import { rootWatcher } from "./sagas";
import { moviesReducer } from './reducers/moviesReducer'


const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    moviesReducer
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootWatcher)