import React from "react";

function GuessForm({ onGuess }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");
  const reset = () => setTentativeGuess("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!event.target.elements["guess-input"].value) {
      return;
    }
    console.log({ guess: tentativeGuess });
    onGuess(tentativeGuess);
    reset();
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        placeholder="Enter your guess"
        value={tentativeGuess}
        onChange={(event) => setTentativeGuess(event.target.value.toUpperCase())}
        pattern="[A-Za-z]{5}"
        title="Please enter a 5-letter word."
      />
    </form>
  );
}

export default GuessForm;
