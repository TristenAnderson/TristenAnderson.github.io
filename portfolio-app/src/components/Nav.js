import React from 'react';
import {Navbar, Nav} from 'react-bootstrap'
import ResumeButton from './ResumeButton';

function NavBar() {

    return(
        <div>
            <Navbar bg="primary" variant="dark" expand="lg" fixed>
                <Navbar.Brand href="/">Tristen Anderson</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/#About">About</Nav.Link>
                        <Nav.Link href="/#Work">Work Experience</Nav.Link>
                        <Nav.Link href="/#Projects">Projects</Nav.Link>
                        <Nav.Link href="/#Contact">Contact</Nav.Link>
                    </Nav>
                    <ResumeButton />
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar