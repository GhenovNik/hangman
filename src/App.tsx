import React from 'react';
import words from "./Vocab.json"
import './App.css';
import {Hangman} from "./components/Hangman";
import {Keyboard} from "./components/Keyboard";
import {Word} from "./components/Word";
import {useState} from "react"

function App() {
    const [wordGuess, setWordGuess] = useState(() => {
        const randomIndex = Math.floor(Math.random() * words.length)
        return words[randomIndex]
    })
    const [guessLetters, setGuessLetters] = useState<string[]>([])
  return (
    <div
        style={{
            maxWidth: "800px",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            margin: "0 auto",
            alignItems: "center",
        }}
    >
        <div style={{ fontSize: "2rem", textAlign: "center" }}>Hangman Game</div>
        <Hangman />
        <Word wordToGuess={wordGuess} guessLetters={guessLetters} />
        <div style={{ alignSelf: "stretch" }}>
            <Keyboard />
        </div>

    </div>
  );
}

export default App;
