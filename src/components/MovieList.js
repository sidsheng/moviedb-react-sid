import React from 'react'
import { Col, Card } from 'react-bootstrap';

export default function MovieList() {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Text>
                    <Col><h1>MovieDetails</h1></Col>
                </Card.Text>
            </Card.Body>
        </Card>
        </div>
    )
}
