import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from "react-router-dom";

export function Header(props) {

  const showSignOut = () => {
    props.showSignOut(true);
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
              <Nav.Link className="nav-item" as={Link} to="/intro" aria-label="home page">Home</Nav.Link>
              <Nav.Link className="nav-item" as={Link} to="/about" aria-label="about us page">About Us</Nav.Link>
              <Nav.Link className="nav-item" as={Link} to="/shop" aria-label="shop page">Shop</Nav.Link>
              <Nav.Link className="nav-item" as={Link} to="/wishlist" aria-label="wishlist page">WishList</Nav.Link>
              <Nav.Link className="nav-item" as={Link} to="/contact" aria-label="contact us page">Contact</Nav.Link>

              {!props.user &&
                <Nav.Link className="nav-item" as={Link} to="/account" aria-label="account login"><i className="fa-solid fa-user"></i></Nav.Link>}
              {props.user &&
                <Nav>               
                  <Nav.Link onClick={showSignOut} className="nav-item" aria-label="sign out"><i className="fa-solid fa-right-from-bracket"></i></Nav.Link>
                </Nav>}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}