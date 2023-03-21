import { RootState } from "../reducers";

export const moviesSelector = (state: RootState) => state.moviesState.movies;
