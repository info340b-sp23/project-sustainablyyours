import React from "react";

export function Account() {
    return (
      <body className="about-page">
      <div className="container">

        <main>
          <section className="content">
            <form className="form">
              <h1>Account Login</h1>
              <div>
                <label for="username_input">Username:</label>
                <input type="text" id="username_input" name="username" pattern=".\w{3,}" placeholder="Enter your username" required />
              </div>
              <div>
                <label for="password_input">Password:</label>
                <input type="password" id="password_input" name="password" pattern=".{6,}" placeholder="Enter your password" required />
              </div>
              <div>
                <p>
                  <a href="contact.html" aria-label="contact page">Forgot Your Login Info?</a>
                </p>
              </div>
              <input type="submit" value="Submit" />
            </form>
          </section>
        </main>
      </div>
      </body>
    )
}