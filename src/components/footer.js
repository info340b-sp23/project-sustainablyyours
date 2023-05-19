import React from "react";

export function Footer() {
    return (
        <div className="footer-basic border-box">
        <footer className="bg-light text-center">
            <div className="social text-center p-3">
              <a href="intro" aria-label="Home"><i className="fa-solid fa-house"></i></a>
              <a href="about" aria-label="About Us"><i className="fa-solid fa-address-card"></i></a>
              <a href="shop" aria-label="Shop"><i className="fa-solid fa-store"></i> </a>
              <a href="contact" aria-label="Contact"><i className="fa-solid fa-address-book"></i></a>
              <a href="account" aria-label="Account Login"><i className="fa-solid fa-right-to-bracket"></i></a>
            </div>
            <p className="copyright">SustainablyYours  &copy;2023</p>
        </footer>
        </div>
    )
}