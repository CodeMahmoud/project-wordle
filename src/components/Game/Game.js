import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "./GuessInput/GuessInput";
import GuessResults from "./GuessResults/GuessResults";
import Guess from "./Guess/Guess";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  function handleChange(guess) {
    console.log("recive", guess);
    setGuesses([...guesses, guess]);
  }
  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput handleChange={handleChange} />
    </>
  );
}

export default Game;
