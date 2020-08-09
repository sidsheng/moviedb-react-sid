import React from 'react';
import axios from 'axios'
import './App.css';
import MovieList from './components/MovieList';
import SearchMovies from './components/SearchMovies';
import { Container, Col, Row } from 'react-bootstrap';
import MoviePagination from './components/MoviePagination';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      searchString: '',
      totalResults: 0,
      currentPage: 1
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
            movies: [...res.data.results],
            totalResults: res.data.total_results
        })
    })
  }

  handleChange = (e) => {
    this.setState({
      searchString: e.target.value
    })
  }

  nextPage = (pageNumber) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${this.api_key}&query=${this.state.searchString}&page=${pageNumber}`
    axios.get(url)
      .then(res => {
        console.log(res)
        this.setState({
            movies: [...res.data.results],
            currentPage: pageNumber
        })
    })
  }

  render() {
    const numberPages = Math.floor(this.state.totalResults / 20)

    return (
      <div className="App">
        <h1>Sid's Movie Database</h1>
        <Container>
          <Row style={{ marginTop: '20px' }}>
            <Col></Col>
            <Col><SearchMovies handleSubmit={this.handleSubmit} handleChange={this.handleChange} /></Col>
            <Col></Col>
          </Row>
          <Row style={{ marginTop: '20px' }}>
            <Col><MovieList movies={this.state.movies}/></Col>
          </Row>
          { 
            this.state.totalResults > 20 &&
              <MoviePagination pages={numberPages} nextPage={this.nextPage} currentPage={this.state.currentPage} />
          }
        </Container>
      </div>
    );
  }
}

export default App;
