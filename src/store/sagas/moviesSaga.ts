import { put, takeEvery, call } from "redux-saga/effects"
import { FETCH_MOVIES, setUsers } from "../reducers/moviesReducer";

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_X_RAPIDAPI_KEY,
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
};

const fetchMovies = () => fetch('https://moviesdatabase.p.rapidapi.com/titles', options)


function* fetchMoviesWorker() {
    const data = yield call(fetchMovies)
    const json = yield call(() => new Promise(res => res(data.json())))
    yield put(setUsers(json))
}

export function* moviesWatcher() {
    yield takeEvery(FETCH_MOVIES, fetchMoviesWorker)
}

