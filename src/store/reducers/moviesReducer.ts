const defaultState = {
    movies: []
}

export const SET_MOVIES = "SET_MOVIES"
export const FETCH_MOVIES = "FETCH_MOVIES"

export  function moviesReducer(state = defaultState, action) {
    switch(action.type) {
        case SET_MOVIES:
            return {...state, movies: action.payload}
    }
    return state
}

export const setUsers = payload => ({type: SET_MOVIES, payload})
export const fetchUsers = () => ({type: FETCH_MOVIES})