import React, { useContext } from 'react'
import Context from "../Context"
import { Form, FormControl, InputGroup, Button } from 'react-bootstrap'

export default function SearchMovies() {
    const {api_call} = useContext(Context)

    return (
        <div>
            <Form onSubmit={api_call}>
                <InputGroup>
                    <FormControl name="movie" placeholder="spiderman" type="text" />
                    <InputGroup.Append>
                        <Button variant="primary" type="submit">&rarr;</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Form>
        </div>
    )
}
