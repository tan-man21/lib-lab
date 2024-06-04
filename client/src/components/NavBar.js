import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { CurrentUser } from '../contexts/CurrentUser';

function NavBar() {

    // const { currentUser } = useContext(CurrentUser)

  return (
        <Navbar key={'lg'} expand={'lg'} className="bg-body-tertiary" sticky='top'>
          <Container fluid>
            <Navbar.Brand href="/">LibLab</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3" variant='underline'>
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/books">Explore Books</Nav.Link>
                  <Nav.Link href="/action3">My Books</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>)}

export default NavBar;