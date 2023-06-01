import React, { useState } from "react";

export function Contact() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneNumberChange = (event) => {
    const inputValue = event.target.value;
    // Remove any non-digit characters from the input
    const numericValue = inputValue.replace(/[^\d]/g, "");
  
    // Generate dashes for the phone number
    let formattedValue = "";
    for (let i = 0; i < numericValue.length; i++) {
      if (i === 3 || i === 6) {
        formattedValue += "-";
      }
      formattedValue += numericValue[i];
    }
  
    setPhoneNumber(formattedValue);
  };

  return (
    <div className="about-page container">
      <main>
        <div className="content">
          <div className="div-text">
          <form action="https://formsubmit.co/kadenk10@uw.edu" method="POST">
              <h1 className="div-contact">Contact Us!</h1>
              <p>
                Fill out the contact form or email us at{" "}
                <a href="mailto:info@sustainablyyours.com" className="email email-contact">
                  info@sustainablyyours.com
                </a>
              </p>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required placeholder="Jon Smith" />

              <label htmlFor="email">Email:</label>
              <input type="text" id="email" name="email" required placeholder="email@domain.com" pattern = "^[^\s@]+@[^\s@]+\.[^\s@]+$" title="Please enter an email that matches this format: email@domain.com"/>

              <label htmlFor="phone_number">Phone Number:</label>
              <input type="text" id="phone_number" name="phone_number" required placeholder="999-999-9999" value={phoneNumber} onChange={handlePhoneNumberChange} pattern="^\d{3}-\d{3}-\d{4}$" title="Please enter a 10-digit phone number that matches this format: 999-999-9999" />

              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="4" required placeholder="Insert message here"></textarea>

              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
