import React from 'react';

function Guess() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const guess = event.target.elements['guess-input'].value;
    console.log({ guess });
  }

  return <form className='guess-input-wrapper' onSubmit={handleSubmit}>
    <label htmlFor='guess-input'>Enter guess:</label>
    <input id='guess-input' type='text' placeholder='Enter your guess' />
  </form>;
}

export default Guess;
