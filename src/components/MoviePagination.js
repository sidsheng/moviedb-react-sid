import React from 'react'
import { Pagination, Col, Row } from 'react-bootstrap';

const MoviePagination = props => {
    const items = []

    for (let i = 1; i <= props.pages + 1; i++) {
        let active = props.currentPage == i ? 'active' : '';
        items.push(
            <li key={i} onClick={() => {
                props.nextPage(i)
            }}><a href="#">{i}</a></li>)
    }

    return (
        <div>
            <Pagination>{items}</Pagination>
        </div>
    )
}

export default MoviePagination
