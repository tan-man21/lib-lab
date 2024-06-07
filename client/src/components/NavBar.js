import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { CurrentUser } from '../contexts/CurrentUser';

function NavBar() {

    const { currentUser } = useContext(CurrentUser)

    let loginActions = (
      <>
        <Nav className="justify-content-end" variant='underline'>
          <Nav.Link href='/login'>Login</Nav.Link>
          <Nav.Link href='/signup'>Sign Up</Nav.Link>
        </Nav>
      </>
    )

    if(currentUser){
      loginActions = (
        <>
          <Nav className='justify-content-end' variant='underline'>
            <Nav.Link disabled style={{color: 'rgb(0 0 0 / 65%)'}}>Greetings, {currentUser.firstName}</Nav.Link>
          </Nav>
        </>
      )
    }

  return (
        <Navbar key={'lg'} expand={'lg'} className="bg-body-tertiary" sticky='top'>
          <Container fluid>
            <Navbar.Brand href="/">
              <img src='/chemistry.png' alt='https://www.flaticon.com/free-icons/study'/>
              {' '}
              LibLab
              </Navbar.Brand>
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
                <Nav className="justify-content-center flex-grow-1" variant='underline' style={{paddingLeft: '25px'}}>
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/books">Explore Books</Nav.Link>
                  <Nav.Link href="/mybooks">My Books</Nav.Link>
                  <Nav.Link href="/about">About Us</Nav.Link>
                </Nav>
                {loginActions}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        )}

export default NavBar;