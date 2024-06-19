import React from "react";
import Guess from "../Guess";

function GuessResults({ guesses = [] }) {
  return (
    <div className="guess-results">
      {guesses.map((word, index) => (
        <Guess key={index} word={word} />
      ))}
    </div>
  );
}

export default GuessResults;
