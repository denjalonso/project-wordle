import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessForm from "../GuessForm";
import GuessResults from "../GuessesList";
import { GUESS_WORD_LENGTH, NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

const letterMapper = ({ ...props }) => ({
  id: crypto.randomUUID(),
  ...props,
});

function Game() {
  const slots = Array(NUM_OF_GUESSES_ALLOWED).fill(
    Array(GUESS_WORD_LENGTH).fill("").map(letterMapper)
  );
  const [guesses, setGuesses] = React.useState(slots);

  const nextEmptySlotIndex = guesses.findIndex((guess) =>
    guess.every(({ letter }) => !letter)
  );
  const alreadyFilled = guesses.slice(0, nextEmptySlotIndex);
  const nonFilled = guesses.slice(nextEmptySlotIndex + 1);

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessForm
        onGuess={(tentativeGuess) => {
          const computedGuesses = [
            ...alreadyFilled,
            checkGuess(tentativeGuess, answer).map(letterMapper),
            ...nonFilled,
          ];

          setGuesses(computedGuesses);
        }}
      />
    </>
  );
}

export default Game;
