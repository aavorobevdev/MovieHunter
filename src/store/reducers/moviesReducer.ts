import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie, MoviesState } from "../../types/movies";

const initialState: MoviesState = {
  movies: [],
  isLoading: false,
  error: null,
};

export const SET_MOVIES = "SET_MOVIES";
export const FETCH_MOVIES = "FETCH_MOVIES";

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies(state, action: PayloadAction<Movie[]>) {
      state.movies = action.payload;
    },
  },
});

export const { setMovies } = moviesSlice.actions;

export default moviesSlice.reducer;

export const fetchMovies = () => ({ type: FETCH_MOVIES });
