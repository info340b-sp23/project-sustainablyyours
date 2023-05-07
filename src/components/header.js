import React from "react";

class Header extends React.Component {
    return (
        <header>
          <nav className="navbar navbar-expand-lg navbar-light bg-body">
            <div className="container-fluid">
              <a className="navbar-brand" aria-label="home page" href="intro.html"><i className="fa-sharp fa-solid fa-leaf logo"></i>SustainablyYours</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-label="home page" aria-current="page" href="intro.html">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" aria-label="about us page" href="about.html">About Us</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" aria-label="shop page" href="index.html">Shop</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" aria-label="contact us page" href="contact.html">Contact</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" aria-label="account login" href="account.html"><i class="fa-solid fa-user"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
    );
}

export default Header;