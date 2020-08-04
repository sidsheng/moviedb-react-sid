import React, { useState, useEffect } from 'react';
import Context from "./Context"
import axios from 'axios'
import './App.css';
import MovieList from './components/MovieList';
import SearchMovies from './components/SearchMovies';

function App() {
  const [error, setError] = useState(null)
  const api_key = 'a3c48ab128857c0d154f52a15930e310'

  const api_call = async e => {
    e.preventDefault()

    const url = `https://api.themoviedb.org/3/movie/550?api_key=${api_key}`
    const request = axios.get(url)
    const response = await request
    setError(null)
  }

  return (
    <div className="App">
      <h1>Sid's Movies</h1>
        <div className="container">
          <Context.Provider value={{api_call}}>
            <SearchMovies />
            <MovieList />
          </Context.Provider>
        </div>
    </div>
  );
}

export default App;
