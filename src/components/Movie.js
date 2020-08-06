import React, { Component } from 'react'
import { Col, Card } from 'react-bootstrap';

const Movie = (props) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`http://image.tmdb.org/t/p/w185${props.image}`} />
                <Card.Body>
                    <Card.Text>
                        <Col>
                            <p><a href="#">View Details</a></p>
                        </Col>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Movie