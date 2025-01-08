import React, { useState } from "react";
import "../styles/notAvailable.css";

const NotAvailable = ({ text, setNotAvailable }) => {
    const [pressed, setPressed] = useState(false);

    const takeOffModal = () => {
        setPressed(true);
        setNotAvailable(false);
        setTimeout(() => {
        }, 500);
    }

    return (
        !pressed && (
            <div className={`modal ${pressed ? "out" : ""}`}>
                <h2 className="notAvailable-text">{text}</h2>
                <div className="modal-buttons">
                    <button className="ok-button" onClick={takeOffModal}>OK</button>
                </div>
            </div>
        )
    );
}

export default NotAvailable;