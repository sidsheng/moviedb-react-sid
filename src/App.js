import React from 'react';
import axios from 'axios'
import './App.css';
import MovieList from './components/MovieList';
import SearchMovies from './components/SearchMovies';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      searchString: ''
    }
    this.api_key = process.env.REACT_APP_API
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${this.api_key}&query=${this.state.searchString}`
    axios.get(url)
      .then(res => {
        console.log(res)
        this.setState({
            movies: [...res.data.results]
        })
    })
  }

  handleChange = (e) => {
    this.setState({
      searchString: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Sid's Movie Database</h1>
          <div className="container">
            <SearchMovies handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
            <MovieList />
          </div>
      </div>
    );
  }
}

export default App;
