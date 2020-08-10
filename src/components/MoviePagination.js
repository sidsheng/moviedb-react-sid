import React from 'react'
import { Pagination } from 'react-bootstrap';

const MoviePagination = props => {
    const items = []

    for (let i = 1; i <= props.pages + 1; i++) {
        //let active = props.currentPage == i ? 'active' : '';
        //items.push(<li key={i} onClick={() => {props.nextPage(i)}}><a href="#">{i}</a></li>)
        items.push(
            <Pagination.Item key={i} active={i === props.currentPage} onClick={() => {props.nextPage(i)}}>
                {i}
            </Pagination.Item>
        )
    }

    return (
        <div>
            <Pagination>
                {props.currentPage > 1 && 
                <Pagination.Item onClick={() => {props.nextPage(props.currentPage-1)}}>
                    Prev
                </Pagination.Item>}
                {items}
                {props.currentPage < props.pages + 1 && 
                <Pagination.Item onClick={() => {props.nextPage(props.currentPage+1)}}>
                    Next
                </Pagination.Item>}
            </Pagination>
        </div>
    )
}

export default MoviePagination
