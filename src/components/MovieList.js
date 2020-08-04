import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import MovieDetails from './MovieDetails';

export default function MovieList() {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Text>
                    <Col><MovieDetails /></Col>
                </Card.Text>
            </Card.Body>
        </Card>
        </div>
    )
}
