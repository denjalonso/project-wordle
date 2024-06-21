import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ letter, status }) {
  return <span className={`cell ${status ?? ""}`.trim()}>{letter}</span>;
}

function Guess({ word, answer }) {
  const result = checkGuess(word, answer);
  return (
    <p className="guess">
      {range(5).map((num) => {
        return (
          <Cell
            key={num}
            letter={result ? result[num].letter : undefined}
            status={result ? result[num].status : undefined}
          />
        );
      })}
    </p>
  );
}

export default Guess;
