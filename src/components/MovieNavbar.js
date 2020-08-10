import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';

const MovieNavbar = props => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">SMDB</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/contact">About</Nav.Link>
                    <Nav.Link href="/about">Contact</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}

export default MovieNavbar
