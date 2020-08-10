import React from 'react'
import { Card } from 'react-bootstrap';

const Movie = (props) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                {
                    props.image == null 
                    ? <Card.Img variant="top" style={{ height: 360 }} src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`} />
                    : <Card.Img variant="top" style={{ height: 360 }} src={`http://image.tmdb.org/t/p/w185${props.image}`} />
                }
                <Card.Body>
                    <Card.Text>
                        <a href="#" onClick={() => props.viewMovieInfo(props.movieId)}>View Details</a>
                    </Card.Text>
                </Card.Body>
            </Card>
            <br></br>
        </div>
    )
}

export default Movie