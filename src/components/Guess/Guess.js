import React from "react";

function Guess() {
  const [guess, setGuess] = React.useState("");
  const reset = () => setGuess("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ guess });
    reset();
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        placeholder="Enter your guess"
        value={guess}
        onChange={(event) => setGuess(event.target.value)}
      />
    </form>
  );
}

export default Guess;
