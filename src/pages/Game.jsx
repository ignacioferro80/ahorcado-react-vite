import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { drawHangmanLine, drawHangmanWith_Errors } from "../utils/ahorcadoCanvas";
import '../styles/game.css';
import FinishedGame from "../components/FinishedGame.jsx";
import NotAvailable from "../components/NotAvailable.jsx";

const Game = ({darkMode, secretWordList}) => {

    const navigate = useNavigate();
    const [secretWord, setSecretWord] = useState("");
    const [guessedLetters, setGuessedLetters] = useState([]);
    const [notGuessedLetters, setNotGuessedLetters] = useState([]);
    const [letterInput, setLetterInput] = useState("");
    const [lettersWritten, setLettersWritten] = useState([]);
    const [notAvailable, setNotAvailable] = useState(false);
    
    const [errorsLeft, setErrorsLeft] = useState(7);
    const [guessedLettersCount, setGuessedLettersCount] = useState(0);
    
    const canvasRef = useRef(null);
    const tableroRef = useRef(null);

    const [finishedGame, setFinishedGame] = useState(false);
    const [won, setWon] = useState(false);

    const regex = /^[a-zA-Z]*$/;
    
    useEffect(() => {
        const newSecretWord = secretWordList[Math.floor(Math.random() * secretWordList.length)];
        console.log(newSecretWord);
        const canvas = canvasRef.current;
        const tablero = canvas.getContext("2d");
        tableroRef.current = tablero;
        
        tablero.fillStyle = "#c5e2d7";
        tablero.fillRect(0, 0, canvas.width, canvas.height);
        drawHangmanLine(tablero);
        drawLinesForWord(newSecretWord);
        setSecretWord(newSecretWord);
    }, []);
    
    const reloadPage = () => {
        window.location.reload();
    }

    const handleInputChange = (event) => {

        setLetterInput(event.target.value.toLowerCase());

    }

    const drawLinesForWord = (newSecretWord) => {

        const tablero = tableroRef.current;
  
        tablero.lineWidth = 6;
        tablero.lineCap = "round";
        tablero.lineJoin = "round";
        tablero.strokeStyle = "#1a3250";
    
        const anchura = 600/newSecretWord.length;

        for(var i = 0; i < newSecretWord.length; i++) {
            tablero.moveTo(360 + (anchura*i),330)
            tablero.lineTo(410 + (anchura*i),330)
        }
    
        tablero.stroke();
        tablero.closePath();
    
    }
    
    const writeCorrectLetter = (index) => {

        const tablero = tableroRef.current;

        tablero.font = "bold 52px Arial";
        tablero.lineWidth = 6;
        tablero.lineCap = "round";
        tablero.lineJoin = "round";
        tablero.fillStyle = "#154734";
    
        var anchura = 600/secretWord.length;
        tablero.fillText(secretWord[index], 362+(anchura*index), 320);
        tablero.stroke();
    
        setLettersWritten([...lettersWritten, secretWord[index]]);
    }
    
    const writeCorrectLetterLeft = (index) => {
        const tablero = tableroRef.current;
        tablero.font = "bold 52px Arial";
        tablero.lineWidth = 6;
        tablero.lineCap = "round";
        tablero.lineJoin = "round";
        tablero.fillStyle = "#154734";

        var anchura = 600/secretWord.length;
        tablero.fillText(secretWord[index], 332+(anchura*index), 320);
        tablero.stroke();
    }

    const writeIncorrectLetter = (letra, errorsLeft) => {

        const tablero = tableroRef.current;

        tablero.font = "bold 35px Arial";
        tablero.lineWidth = 6;
        tablero.lineCap = "round";
        tablero.lineJoin = "round";
        tablero.fillStyle = "#421111";
        tablero.fillText(letra, 300+(40*(10-errorsLeft)), 380, 40);
    
        tablero.stroke();
    }

    const testLetter = () => {
        
        if(letterInput==""){
            setNotAvailable(true);
            return
        }
        
        else if(!regex.test(letterInput)) {
            setNotAvailable(true);
            return
        }
        
        else if(secretWord.includes(letterInput)){
            if(guessedLetters.includes(letterInput)){
                setNotAvailable(true);
                return
            }
            
            else {
                setGuessedLetters([...guessedLetters, letterInput])
                var seenLetters = 0;

                for(var i = 0; i < secretWord.length; i++){
                    if(secretWord[i] == letterInput){
                        seenLetters++;
                        setGuessedLettersCount(guessedLettersCount + seenLetters);
                        writeCorrectLetter(i);
                    }
                }
                console.log(secretWord.length);
                if(guessedLettersCount+1 == secretWord.length){
                    setFinishedGame(true);
                    setWon(true);
                }
            }
        }
        
        else if(notGuessedLetters.includes(letterInput)){
            setNotAvailable(true);
            return
        }
    
        else{
            writeIncorrectLetter(letterInput, errorsLeft);
            setNotGuessedLetters([...notGuessedLetters, letterInput]);
            drawHangmanWith_Errors(errorsLeft, tableroRef.current);
            setErrorsLeft(errorsLeft-1);
            if (errorsLeft == 0){
                setFinishedGame(true);
                writeCompleteCorrectWord();
            }
        }

        setLetterInput("");
    }

    const writeCompleteCorrectWord = () => {
        for(var i = 0; i < secretWord.length; i++){
            if(lettersWritten.includes(secretWord[i])){
                writeCorrectLetter(i)
            }
            else{
                writeCorrectLetterLeft(i)
            }
        }
    }

    return (
        <div>
            <div className={`gamePage ${finishedGame || notAvailable ? "blurred" : ""}`} >
                <canvas 
                    className="canvas"
                    ref={canvasRef}
                    id="forca"
                    width="1200"
                    height="390"
                    >
                </canvas>
                <input  className="testLetterInput" 
                        value={letterInput} 
                        onChange={handleInputChange}
                        onKeyDown={
                            (event) => {
                                if (event.key === "Enter") {
                                  testLetter();
                                }
                            }
                        }
                        type="text" 
                        placeholder="Insert letter here" maxLength="1" 
                />
                <div>
                    <button onClick={() => testLetter()}  disabled={finishedGame || notAvailable} className={`test-button ${darkMode ? "night" : ""}`}>Test letter</button>
                    <button onClick={() => reloadPage()}  disabled={finishedGame || notAvailable} className={`new-game-button ${darkMode ? "night" : ""}`}>New game</button>
                    <button onClick={() => navigate("/")} disabled={finishedGame || notAvailable} className={`go-home-button ${darkMode ? "night" : ""}`}>Go home</button>
                </div>
            </div>

            <div>
                {finishedGame && (
                    <FinishedGame 
                    won={won}
                    />
                )}
            </div>

            {notAvailable && letterInput==="" && <NotAvailable text={"You should try writing a letter first"} setNotAvailable={setNotAvailable} />}
            {notAvailable && guessedLetters.includes(letterInput) && <NotAvailable text={"You already tried this letter and it belongs!"} setNotAvailable={setNotAvailable} />}
            {notAvailable && notGuessedLetters.includes(letterInput) && <NotAvailable text={"You already tried this letter and it does not belong!"} setNotAvailable={setNotAvailable} />}
            {notAvailable && !regex.test(letterInput) && <NotAvailable text={"Remember using only letters!"} setNotAvailable={setNotAvailable} />}

        </div>
    );
}

export default Game;