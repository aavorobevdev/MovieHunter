import { combineReducers } from "@reduxjs/toolkit";
import moviesSlice from "./moviesReducer";

export const rootReducer = combineReducers({ moviesState: moviesSlice });

export type RootState = ReturnType<typeof rootReducer>;
