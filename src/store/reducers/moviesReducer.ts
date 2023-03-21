import { Movie, MoviesState } from "../../types/movies"

const defaultState:MoviesState = {
    movies: [],
    isLoading: false,
    error: null,

}

export const SET_MOVIES = "SET_MOVIES"
export const FETCH_MOVIES = "FETCH_MOVIES"

export function moviesReducer(state = defaultState, action: {type:string, payload: Movie[] }) {
    switch (action.type) {
        case SET_MOVIES:
            return { ...state, movies: action.payload }
    }
    return state
}

export const setMovies = payload => ({ type: SET_MOVIES, payload })
export const fetchMovies = () => ({ type: FETCH_MOVIES })