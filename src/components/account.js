import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

export function Account() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateUsername() || !validatePassword()) {
      return;
    }
    // Perform login logic here
    navigate("/wishlist"); // Navigate to the wishlist page after successful login
  };

  function validateUsername()
  {
    if (username.length < 2 || username.length > 30) 
    {
      setUsernameError("Username must be between 2 and 30 characters");
      return false;
    }

    setUsernameError("");
    return true;
  };

  function validatePassword()
  {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    
    if (!passwordRegex.test(password)) 
    {
      setPasswordError("Password must contain at least 8 characters, 1 uppercase letter, 1 number, and 1 symbol");
      return false;
    }
    setPasswordError("");
    return true;
  };

  const firebaseUIConfig = {
    signInOptions: [ //array of sign in options supported
      //array can include just "Provider IDs", or objects with the IDs and options
      GoogleAuthProvider.PROVIDER_ID,
      { provider: EmailAuthProvider.PROVIDER_ID, requiredDisplayName: true },
    ],
    signInFlow: 'popup', //don't redirect to authenticate
    credentialHelper: 'none', //don't show the email account chooser
    callbacks: { //"lifecycle" callbacks
      signInSuccessWithAuthResult: () => {
        return false; //don't redirect after authentication
      }
    }
  }

  return (
    <div className="about-page container">
        <main>
          <section className="content">
            <StyledFirebaseAuth className="form" uiConfig={firebaseUIConfig} firebaseAuth={getAuth()} onSubmit={handleSubmit} />
            {/* <form className="form" onSubmit={handleSubmit}>
              <h1>Account Login</h1>
              <div className={`form-group ${usernameError ? "error" : ""}`}>
                <label htmlFor="username_input">Username:</label>
                <input
                  type="text"
                  id="username_input"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                  required
                />
                {usernameError && <p className="error-message">{usernameError}</p>}
              </div>
              <div className={`form-group ${passwordError ? "error" : ""}`}>
                <label htmlFor="password_input">Password:</label>
                <input
                  type="password"
                  id="password_input"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
                {passwordError && <p className="error-message">{passwordError}</p>}
              </div>
              <div>
                <p>
                  <a href="/contact" aria-label="contact page">
                    Forgot Your Login Info?
                  </a>
                </p>
              </div>
              <input type="submit" value="Submit" />
            </form> */}
          </section>
        </main>
      </div>
  );
}
