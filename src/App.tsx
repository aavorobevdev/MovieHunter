import React, { useEffect } from "react"
import { useDispatch } from 'react-redux'
import { fetchUsers } from "./store/reducers/moviesReducer"


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])


  return (
    <div className="App">
      test
    </div>
  )
}

export default App
