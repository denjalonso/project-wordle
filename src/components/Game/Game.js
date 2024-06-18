import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessForm from "../Guess";
import GuessResults from "../GuessesList";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessForm onGuess={(tentativeGuess) => setGuesses([...guesses, tentativeGuess])} />
    </>
  );
}

export default Game;
