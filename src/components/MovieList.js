import React from 'react'
import Movie from './Movie';
import { CardGroup } from 'react-bootstrap';

const MovieList = (props) => {
    return (
        <div>
            <CardGroup>
                {
                    props.movies.map((movie, i) => {
                        return (
                            <Movie key={i} image={movie.poster_path} />
                        )
                    })
                }
            </CardGroup>
        </div>
    )
}

export default MovieList