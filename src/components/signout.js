import React from "react";
import { Modal } from "react-bootstrap";
import { signOut, getAuth } from "firebase/auth";


export function LogOut(props) {
    const exitOut = () => {
        props.setShowLogOut(false);
    }

    const handleLogOut = () => {
        signOut(getAuth());
        exitOut();
    }

    return (
        <Modal show={props.show} id="signOutModal">
            <form onSubmit={handleLogOut}>
                <Modal.Body>
                    You have signed out of SustainablyYours.
                </Modal.Body>
                <Modal.Footer>
                    <button type="submit" className="btn btn-default">Okay</button>
                </Modal.Footer>
            </form>
        </Modal>
    )
}