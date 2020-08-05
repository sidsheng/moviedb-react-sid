import React from 'react'
import { Form, FormControl } from 'react-bootstrap'

const SearchMovies = (props) => {
    return (
        <div>
            <Form onSubmit={props.handleSubmit}>
                <FormControl name="movie" placeholder="spiderman" type="text" onChange={props.handleChange} />
            </Form>
        </div>
    )
}

export default SearchMovies