import React from "react";
import { Modal } from "react-bootstrap";
import { signOut, getAuth } from "firebase/auth";


export function SignOut(props) {
    const exitOut = () => {
        props.setShowSignOut(false);
    }

    const handleSignOut = () => {
        signOut(getAuth());
        exitOut();
    }

    return (
        <Modal show={props.show} id="signOutModal">
            <form onSubmit={handleSignOut}>
                <Modal.Body>
                    You have signed out of SustainablyYours. Come back soon!
                </Modal.Body>
                <Modal.Footer>
                    <button type="submit" className="btn btn-default">Okay</button>
                </Modal.Footer>
            </form>
        </Modal>
    )
}