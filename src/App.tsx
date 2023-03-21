import React, { useEffect } from "react"
import { useDispatch } from 'react-redux'
import { fetchMovies } from "./store/reducers/moviesReducer"


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchMovies())
  }, [])


  return (
    <div className="App">
      test
    </div>
  )
}

export default App
