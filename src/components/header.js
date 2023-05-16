import React from "react";


// export class Header extends React.Component {
//     render() {
//         return (
//             <header>
//                 <nav className="navbar navbar-expand-lg navbar-light bg-body">
//                     <div className="container-fluid">
//                     <a className="navbar-brand" aria-label="home page" href="intro.html"><i className="fa-sharp fa-solid fa-leaf logo"></i>SustainablyYours</a>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                         <li className="nav-item">
//                             <a className="nav-link active" aria-label="home page" aria-current="page" href="/intro">Home</a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link" aria-label="about us page" href="/about">About Us</a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link" aria-label="shop page" href="/shop">Shop</a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link" aria-label="contact us page" href="/contact">Contact</a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link" aria-label="account login" href="/account"><i class="fa-solid fa-user"></i></a>
//                         </li>
//                         </ul>
//                     </div>
//                     </div>
//                 </nav>
//             </header>
//         )
//     }
// }

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export function Header() {
  return (
    <Navbar expand="lg" className="navbar navbar-expand-lg navbar-light bg-body">
      <Container>
        <Navbar.Brand href="/intro" aria-label="home page"><i className="fa-sharp fa-solid fa-leaf logo"></i>SustainablyYours</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="nav-item" href="/intro" aria-label="home page">Home</Nav.Link>
            <Nav.Link className="nav-item" href="/about" aria-label="about us page">About Us</Nav.Link>
            <Nav.Link className="nav-item" href="/shop" aria-label="shop page">Shop</Nav.Link>
            <Nav.Link className="nav-item" href="/contact" aria-label="contact us page">Contact</Nav.Link>
            <Nav.Link className="nav-item" href="/account" aria-label="account login"><i class="fa-solid fa-user"></i></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}