import { useDispatch } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'
import { rootWatcher } from "./sagas";
import { rootReducer } from './reducers';


const SagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ thunk: false }).prepend(SagaMiddleware);
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch

SagaMiddleware.run(rootWatcher);