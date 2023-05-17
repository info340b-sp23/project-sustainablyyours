import React from "react";

export function Contact() {
    return (
        <body className="about-page">
        <div className="container">
            <main>
            <div className="content">
                <div className="div-text">
                <form>
                    <h1 className="div-contact">Contact Us!</h1>
                    <p>Fill out the contact form or email us at <a href="mailto:info@sustainablyyours.com" className="email email-contact">info@sustainablyyours.com</a></p>
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required placeholder="Jon Smith" />

                    <label for="email">Email:</label>
                    <input type="text" id="email" name="email" required placeholder="email@domain.com" />

                    <label for="phone_number">Phone Number:</label>
                    <input type="text" id="phone_number" name="phone number" required placeholder="999-999-9999" />

                    <label for="message">Message:</label>
                    <textarea id="message" name="message" rows="3" required placeholder="Insert message here"></textarea>

                    <input type="submit" value="Submit" />
                </form>
                </div>
            </div>
            </main>
        </div>
        </body>
    )
}