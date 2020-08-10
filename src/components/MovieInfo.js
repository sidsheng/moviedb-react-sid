import React from 'react'
import { Container, Col, Row } from 'react-bootstrap';

const MovieInfo = props => {
    return (
        <div class="text-justify">
            <Container>
                <Row style={{ marginTop: '20px' }}>
                    <Col><a href="#" onClick={props.closeMovieInfo}>Go back</a></Col>
                </Row>
                <Row style={{ marginTop: '20px' }}>
                    <Col sm={12} md={4} >
                        {props.currentMovie.poster_path == null 
                        ? <img src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`} alt="Card" style={{height: 360}} />
                        : <img src={`http://image.tmdb.org/t/p/w185${props.currentMovie.poster_path}`} alt="Card" style={{height: 360}} />
                        }
                    </Col>
                    <Col sm={12} md={8}>
                        <p>{props.currentMovie.title}</p>
                        <p>{props.currentMovie.release_date}</p>
                        <p>{props.currentMovie.overview}</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default MovieInfo
