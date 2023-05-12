import React from "react";

export function Footer() {
    return (
        <div class="footer-basic border-box">
        <footer class="bg-light text-center">
            <div class="social text-center p-3">
              <a href="intro.html" aria-label="Home"><i class="fa-solid fa-house"></i></a>
              <a href="about.html" aria-label="About Us"><i class="fa-solid fa-address-card"></i></a>
              <a href="index.html" aria-label="Shop"><i class="fa-solid fa-store"></i> </a>
              <a href="contact.html" aria-label="Contact"><i class="fa-solid fa-address-book"></i></a>
              <a href="account.html" aria-label="Account Login"><i class="fa-solid fa-right-to-bracket"></i></a>
            </div>
            <p class="copyright">SustainablyYours  &copy;2023</p>
        </footer>
        </div>
    )
}