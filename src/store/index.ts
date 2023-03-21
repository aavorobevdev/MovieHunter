import { applyMiddleware, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'
import { rootWatcher } from "./sagas";
import { moviesReducer } from './reducers/moviesReducer'


const SagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: moviesReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ thunk: false }).prepend(SagaMiddleware);
  },
});




SagaMiddleware.run(rootWatcher);