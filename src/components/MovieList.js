import React from 'react'
import Movie from './Movie';
import { CardDeck } from 'react-bootstrap';

const MovieList = (props) => {
    return (
        <div>
            <CardDeck>
                {
                    props.movies.map((movie, i) => {
                        return (
                            <Movie key={i} image={movie.poster_path} />
                        )
                    })
                }
            </CardDeck>
        </div>
    )
}

export default MovieList