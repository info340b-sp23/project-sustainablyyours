import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

export function Account() {

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

  const navigateTo = useNavigate();
  
  useEffect(() => {
    const auth = getAuth()
    auth.onAuthStateChanged(user => {
      if (user) {
        navigateTo('/shop'); 
      }
    });
  });

  return (
    <div className="about-page container">
        <main>
          <section className="content">
            <StyledFirebaseAuth className="form" uiConfig={firebaseUIConfig} firebaseAuth={getAuth()} />
          </section>
        </main>
      </div>
  );
}
