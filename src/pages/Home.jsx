import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";

const Home = () => {

    const navigate = useNavigate();

    const goGamePage = () => {
        navigate("/game");
    }

    const goAddWordPage = () => {
        navigate("/addWord");
    }

    return (
        <div className="homePage">
            <div className="description">
                <p className="title">Hangman game</p>
                <p className="text">Test your word knowledge and imagination with this classic game!</p>
            </div>
            <div className="buttons">
                <button onClick={() => goGamePage()} className="start-button">Start</button>
                <button onClick={() => goAddWordPage()} className="add-word-button">Add a new word</button>
            </div>

            <p className="rodapie">by <a href="https://www.linkedin.com/in/ignacio-ferro/">Ignacio Ferro</a> - September 2022</p>
        </div>
    );

}

export default Home;