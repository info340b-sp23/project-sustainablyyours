import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { getAuth, signOut } from "firebase/auth";


export function Header(props) {


  const showLogOutModal = () => {
    props.showLogOut(true);
}

  return (
    <Navbar bg="body" expand='lg' className="mb-3">
      <Container fluid>
      <Navbar.Brand href="/intro" aria-label="home page"><i className="fa-sharp fa-solid fa-leaf logo"></i>SustainablyYours</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-lg`}
          aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
              SustainablyYours
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link className="nav-item" href="/intro" aria-label="home page">Home</Nav.Link>
              <Nav.Link className="nav-item" href="/about" aria-label="about us page">About Us</Nav.Link>
              <Nav.Link className="nav-item" href="/shop" aria-label="shop page">Shop</Nav.Link>
              <Nav.Link className="nav-item" href="/contact" aria-label="contact us page">Contact</Nav.Link>

              {!props.user && <Nav.Link className="nav-item" href="/account" aria-label="account login"><i className="fa-solid fa-user"></i></Nav.Link>}
              {props.user &&
                <Nav className="me-auto">               
                  <Nav.Link onClick={showLogOutModal} className="nav-item">Sign out</Nav.Link>
                </Nav>}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}