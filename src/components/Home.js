import React, { Component } from 'react'
import axios from 'axios'
import { Container, Col, Row } from 'react-bootstrap';
import MovieList from './MovieList';
import SearchMovies from './SearchMovies';
import MoviePagination from './MoviePagination';
import MovieInfo from './MovieInfo';

export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            movies: [],
            searchString: '',
            totalResults: 0,
            currentPage: 1,
            currentMovie: null
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
    
    viewMovieInfo = (id) => {
        const filteredMovie = this.state.movies.filter(movie => movie.id === id)
        const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null
        this.setState({
            currentMovie: newCurrentMovie
        })
    }
    
    closeMovieInfo = (id) => {
        this.setState({
            currentMovie: null
        })
    }

    render() {
        const numberPages = Math.floor(this.state.totalResults / 20)

        return (
            <div>
                <h1>Sid's Movie Database</h1>
                <Container>
                {this.state.currentMovie == null &&
                    <Row style={{ marginTop: '20px' }}>
                    <Col></Col>
                    <Col><SearchMovies handleSubmit={this.handleSubmit} handleChange={this.handleChange} /></Col>
                    <Col></Col>
                    </Row>
                }
                {this.state.currentMovie == null ?
                    <Row style={{ marginTop: '20px' }}>
                    <Col><MovieList viewMovieInfo={this.viewMovieInfo} movies={this.state.movies}/></Col>
                    </Row>
                    :
                    <MovieInfo currentMovie={this.state.currentMovie} closeMovieInfo={this.closeMovieInfo} />
                }
                { 
                    this.state.totalResults > 20 && this.state.currentMovie == null &&
                    <MoviePagination pages={numberPages} nextPage={this.nextPage} currentPage={this.state.currentPage} />
                }
                </Container>
            </div>
        )
    }
}
