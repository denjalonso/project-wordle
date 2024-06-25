import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessForm from "../GuessForm";
import GuessResults from "../GuessesList";
import { HappyBanner, SadBanner } from "../ResultBanner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Keyboard from "../Keyboard";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  const status =
    guesses[0] === answer
      ? "won"
      : guesses.length >= NUM_OF_GUESSES_ALLOWED
      ? "lost"
      : "running";

  const intents = guesses.length;

  function handleOnGuess(tentativeGuess) {
    setGuesses([tentativeGuess, ...guesses]);
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessForm onGuess={handleOnGuess} isDisabled={status !== "running"} />
      <Keyboard
        isDisabled={status !== "running"}
        guesses={guesses}
        answer={answer}
      />
      {status === "won" && <HappyBanner intents={intents} />}{" "}
      {status === "lost" && <SadBanner answer={answer} />}
    </>
  );
}

export default Game;
