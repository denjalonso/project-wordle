import React from "react";

function Guess({ word, index }) {
  return (
    <p key={index} className="guess">
      {word.map((slot) => (
        <span key={slot.id} data-id={slot.id} className="cell">
          {slot.letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
