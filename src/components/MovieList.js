import React from 'react'
import Movie from './Movie';
import { CardDeck } from 'react-bootstrap';

const MovieList = (props) => {
    return (
        <div>
            <CardDeck className="justify-content-center">
                {
                    props.movies.map((movie, i) => {
                        return (
                            <Movie key={i} viewMovieInfo={props.viewMovieInfo} movieId={movie.id} image={movie.poster_path} />
                        )
                    })
                }
            </CardDeck>
        </div>
    )
}

export default MovieList