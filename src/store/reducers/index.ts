import { combineReducers } from '@reduxjs/toolkit'
import { moviesReducer } from './moviesReducer'

const rootReducer = combineReducers({moviesReducer})

export type RootState = ReturnType<typeof rootReducer>1