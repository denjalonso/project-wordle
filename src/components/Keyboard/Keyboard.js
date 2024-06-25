import { checkGuess } from "../../game-helpers";
import React from "react";

const qwertyUppercaseLetters = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

function Keyboard({ guesses, answer }) {
  return (
    <div className="keyboard">
      {qwertyUppercaseLetters.map((row, index) => (
        <div key={index} className="keyboard-row">
          {row.map((key) => {
            const keyAlreadyGuessed = guesses.some((guess) => guess.includes(key));
            const [{ status }] = checkGuess(key, answer);
            return (
              <button
                key={key}
                className={`keyboard-key ${
                  keyAlreadyGuessed ? status : ""
                }`.trim()}
              >
                {key}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
