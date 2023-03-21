import React, { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { MovieCard } from "./components/movie-card"
import { fetchMovies } from "./store/reducers/moviesReducer"
import { moviesSelector } from "./store/selectors/movies"


function App() {
  const movies = useSelector(moviesSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [])

  return (
    <div className="App">
      {!!movies.length && movies.map((movie) => <MovieCard movie={movie} />)}
    </div>
  )
}

export default App
