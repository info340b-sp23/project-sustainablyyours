import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';


export function Header() {
  // return (
  //   <Navbar expand="lg" className="navbar navbar-expand-lg navbar-light bg-body">
  //     <Container fluid>
  //       <Navbar.Brand href="/intro" aria-label="home page"><i className="fa-sharp fa-solid fa-leaf logo"></i>SustainablyYours</Navbar.Brand>
  //       <Navbar.Toggle aria-controls="basic-navbar-nav" />
  //       <Navbar.Collapse id="basic-navbar-nav">
  //         <Nav className="me-auto">
  //           <Nav.Link className="nav-item" href="/intro" aria-label="home page">Home</Nav.Link>
  //           <Nav.Link className="nav-item" href="/about" aria-label="about us page">About Us</Nav.Link>
  //           <Nav.Link className="nav-item" href="/shop" aria-label="shop page">Shop</Nav.Link>
  //           <Nav.Link className="nav-item" href="/contact" aria-label="contact us page">Contact</Nav.Link>
  //           <Nav.Link className="nav-item" href="/account" aria-label="account login"><i className="fa-solid fa-user"></i></Nav.Link>
  //         </Nav>
  //       </Navbar.Collapse>
  //     </Container>
  //   </Navbar>
  // );

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
              <Nav.Link className="nav-item" href="/account" aria-label="account login"><i className="fa-solid fa-user"></i></Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}