import { put, takeEvery, call } from "redux-saga/effects"
import { ky } from "../../api";
import { FETCH_MOVIES, setMovies } from "../reducers/moviesReducer";

const fetchMovies = () => ky('movie/popular/')

function* fetchMoviesWorker() {
    const data = yield call(fetchMovies)
    const json = yield call(() => new Promise(res => res(data.json())))
    const { results } = yield call(() => json)
    yield put(setMovies(results))
}

export function* moviesWatcher() {
    yield takeEvery(FETCH_MOVIES, fetchMoviesWorker)
}

